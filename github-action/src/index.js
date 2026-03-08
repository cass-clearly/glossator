import * as core from "@actions/core";
import * as github from "@actions/github";
import Anthropic from "@anthropic-ai/sdk";
import { Octokit } from "@octokit/rest";
import { minimatch } from "minimatch";
import { reviewDiff } from "./reviewer.js";
import { postReview, postSummaryComment } from "./github-review.js";
import { run } from "./main.js";

async function main() {
  try {
    const anthropicApiKey = core.getInput("anthropic-api-key", { required: true });
    const githubToken = core.getInput("github-token", { required: true });
    const filePatterns = core.getInput("file-patterns") || "**/*.md";

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

    await run({
      getChangedFiles: async () => {
        const files = [];
        let page = 1;
        while (true) {
          const { data } = await octokit.rest.pulls.listFiles({
            owner,
            repo,
            pull_number: pullNumber,
            per_page: 100,
            page,
          });
          if (data.length === 0) break;
          files.push(...data);
          if (data.length < 100) break;
          page++;
        }
        return files
          .filter((f) => f.status !== "removed")
          .map((f) => f.filename)
          .filter((name) => patterns.some((p) => minimatch(name, p)));
      },

      getFileDiff: async (filename) => {
        const { data } = await octokit.rest.pulls.listFiles({
          owner,
          repo,
          pull_number: pullNumber,
          per_page: 100,
        });
        const file = data.find((f) => f.filename === filename);
        return file ? file.patch || "" : "";
      },

      reviewDiff: (filename, diff) => reviewDiff(anthropic, filename, diff),

      postReview: (comments) => postReview(octokit, owner, repo, pullNumber, comments),

      postSummaryComment: (filename, text) =>
        postSummaryComment(octokit, owner, repo, pullNumber, filename, text),

      log: (msg) => core.info(msg),
      warn: (msg) => core.warning(msg),
      setFailed: (msg) => core.setFailed(msg),
      setOutput: (name, value) => core.setOutput(name, value),
    });
  } catch (error) {
    core.setFailed(`Remarq Document Review failed: ${error.message}`);
  }
}

main();
