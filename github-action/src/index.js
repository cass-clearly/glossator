import * as core from "@actions/core";
import * as github from "@actions/github";
import Anthropic from "@anthropic-ai/sdk";
import { Octokit } from "@octokit/rest";
import { createGitHubClient } from "./github-client.js";
import { reviewDiff } from "./reviewer.js";
import { postReview, postSummaryComment } from "./github-review.js";
import { run } from "./main.js";

async function main() {
  try {
    const anthropicApiKey = core.getInput("anthropic-api-key", { required: true });
    const githubToken = core.getInput("github-token", { required: true });
    const filePatterns = core.getInput("file-patterns") || "**/*.md";
    const model = core.getInput("model") || "claude-sonnet-4-20250514";

    const context = github.context;
    if (!context.payload.pull_request) {
      core.info("Not a pull request event. Skipping.");
      return;
    }

    const owner = context.repo.owner;
    const repo = context.repo.repo;
    const pullNumber = context.payload.pull_request.number;

    const octokit = new Octokit({ auth: githubToken });
    const anthropic = new Anthropic({ apiKey: anthropicApiKey });
    const patterns = filePatterns.split(",").map((p) => p.trim());
    const ghClient = createGitHubClient(octokit, owner, repo, pullNumber, patterns);

    await run({
      getChangedFiles: () => ghClient.getChangedFiles(),
      getFileDiff: (filename) => ghClient.getFileDiff(filename),
      reviewDiff: (filename, diff) => reviewDiff(anthropic, filename, diff, { model }),
      postReview: (comments) => postReview(octokit, owner, repo, pullNumber, comments),
      postSummaryComment: (filename, text) => postSummaryComment(octokit, owner, repo, pullNumber, filename, text),
      log: (msg) => core.info(msg),
      warn: (msg) => core.warning(msg),
      setOutput: (name, value) => core.setOutput(name, value),
    });
  } catch (error) {
    core.setFailed(`Remarq Document Review failed: ${error.message}`);
  }
}

main();
