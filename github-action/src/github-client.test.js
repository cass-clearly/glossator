import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import { createGitHubClient } from "./github-client.js";

function makeMockOctokit(files) {
  return {
    rest: {
      pulls: {
        listFiles: mock.fn(async ({ page }) => ({
          data: page === 1 ? files : [],
        })),
      },
    },
  };
}

describe("createGitHubClient", () => {
  describe("getChangedFiles", () => {
    it("returns filenames matching patterns", async () => {
      const octokit = makeMockOctokit([
        { filename: "README.md", status: "modified", patch: "diff1" },
        { filename: "src/app.js", status: "modified", patch: "diff2" },
        { filename: "docs/guide.md", status: "added", patch: "diff3" },
      ]);
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md"]);

      const files = await client.getChangedFiles();
      assert.deepStrictEqual(files, ["README.md", "docs/guide.md"]);
    });

    it("excludes removed files", async () => {
      const octokit = makeMockOctokit([
        { filename: "old.md", status: "removed", patch: "" },
        { filename: "new.md", status: "added", patch: "diff" },
      ]);
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md"]);

      const files = await client.getChangedFiles();
      assert.deepStrictEqual(files, ["new.md"]);
    });

    it("supports multiple glob patterns", async () => {
      const octokit = makeMockOctokit([
        { filename: "README.md", status: "modified", patch: "d1" },
        { filename: "index.html", status: "modified", patch: "d2" },
        { filename: "app.js", status: "modified", patch: "d3" },
      ]);
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md", "**/*.html"]);

      const files = await client.getChangedFiles();
      assert.deepStrictEqual(files, ["README.md", "index.html"]);
    });

    it("paginates through all pages", async () => {
      const page1 = Array.from({ length: 100 }, (_, i) => ({
        filename: `file${i}.md`,
        status: "modified",
        patch: `diff${i}`,
      }));
      const page2 = [{ filename: "file100.md", status: "added", patch: "diff100" }];
      const listFiles = mock.fn(async ({ page }) => ({
        data: page === 1 ? page1 : page === 2 ? page2 : [],
      }));
      const octokit = { rest: { pulls: { listFiles } } };
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md"]);

      const files = await client.getChangedFiles();
      assert.strictEqual(files.length, 101);
      assert.strictEqual(listFiles.mock.calls.length, 2);
    });

    it("returns empty array when no files match", async () => {
      const octokit = makeMockOctokit([
        { filename: "app.js", status: "modified", patch: "diff" },
      ]);
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md"]);

      const files = await client.getChangedFiles();
      assert.deepStrictEqual(files, []);
    });
  });

  describe("getFileDiff", () => {
    it("returns the patch for a file from cached data", async () => {
      const octokit = makeMockOctokit([
        { filename: "README.md", status: "modified", patch: "@@ -1,3 +1,4 @@\n+new line" },
        { filename: "guide.md", status: "added", patch: "@@ -0,0 +1 @@\n+content" },
      ]);
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md"]);

      // Must call getChangedFiles first to populate cache
      await client.getChangedFiles();

      const diff = await client.getFileDiff("README.md");
      assert.strictEqual(diff, "@@ -1,3 +1,4 @@\n+new line");
    });

    it("returns empty string for unknown file", async () => {
      const octokit = makeMockOctokit([
        { filename: "README.md", status: "modified", patch: "diff" },
      ]);
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md"]);
      await client.getChangedFiles();

      const diff = await client.getFileDiff("nonexistent.md");
      assert.strictEqual(diff, "");
    });

    it("returns empty string when patch is null", async () => {
      const octokit = makeMockOctokit([
        { filename: "binary.md", status: "modified", patch: undefined },
      ]);
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md"]);
      await client.getChangedFiles();

      const diff = await client.getFileDiff("binary.md");
      assert.strictEqual(diff, "");
    });

    it("does not make additional API calls", async () => {
      const listFiles = mock.fn(async ({ page }) => ({
        data: page === 1 ? [{ filename: "a.md", status: "modified", patch: "d" }] : [],
      }));
      const octokit = { rest: { pulls: { listFiles } } };
      const client = createGitHubClient(octokit, "owner", "repo", 1, ["**/*.md"]);

      await client.getChangedFiles();
      const callsBefore = listFiles.mock.calls.length;

      await client.getFileDiff("a.md");
      assert.strictEqual(listFiles.mock.calls.length, callsBefore);
    });
  });
});
