import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import { buildReviewComments, postReview, postSummaryComment } from "./github-review.js";

describe("buildReviewComments", () => {
  it("maps parsed comments to GitHub review comment format", () => {
    const comments = [
      { line: 5, body: "Unclear.", severity: "suggestion" },
      { line: 12, body: "Missing context.", severity: "warning" },
    ];
    const result = buildReviewComments("README.md", comments);
    assert.strictEqual(result.length, 2);
    assert.deepStrictEqual(result[0], {
      path: "README.md",
      line: 5,
      body: "**suggestion:** Unclear.",
    });
    assert.deepStrictEqual(result[1], {
      path: "README.md",
      line: 12,
      body: "**warning:** Missing context.",
    });
  });

  it("returns empty array for no comments", () => {
    assert.deepStrictEqual(buildReviewComments("test.md", []), []);
  });

  it("handles error severity", () => {
    const comments = [{ line: 1, body: "Wrong.", severity: "error" }];
    const result = buildReviewComments("test.md", comments);
    assert.strictEqual(result[0].body, "**error:** Wrong.");
  });
});

describe("postReview", () => {
  it("posts a review with inline comments", async () => {
    const createReview = mock.fn(async () => ({ data: { id: 123 } }));
    const mockOctokit = {
      rest: { pulls: { createReview } },
    };

    const comments = [{ path: "README.md", line: 5, body: "**suggestion:** Fix." }];

    await postReview(mockOctokit, "owner", "repo", 42, comments);

    assert.strictEqual(createReview.mock.calls.length, 1);
    const args = createReview.mock.calls[0].arguments[0];
    assert.strictEqual(args.owner, "owner");
    assert.strictEqual(args.repo, "repo");
    assert.strictEqual(args.pull_number, 42);
    assert.strictEqual(args.event, "COMMENT");
    assert.strictEqual(args.comments.length, 1);
    assert.ok(args.body.includes("Remarq"));
  });

  it("does not post when there are no comments", async () => {
    const createReview = mock.fn(async () => ({ data: { id: 123 } }));
    const mockOctokit = {
      rest: { pulls: { createReview } },
    };

    await postReview(mockOctokit, "owner", "repo", 42, []);

    assert.strictEqual(createReview.mock.calls.length, 0);
  });
});

describe("postSummaryComment", () => {
  it("posts a PR-level comment with summary text", async () => {
    const createReview = mock.fn(async () => ({ data: { id: 456 } }));
    const mockOctokit = {
      rest: { pulls: { createReview } },
    };

    await postSummaryComment(mockOctokit, "owner", "repo", 42, "README.md", "Issues found.");

    assert.strictEqual(createReview.mock.calls.length, 1);
    const args = createReview.mock.calls[0].arguments[0];
    assert.strictEqual(args.event, "COMMENT");
    assert.ok(args.body.includes("README.md"));
    assert.ok(args.body.includes("Issues found."));
    assert.strictEqual(args.comments, undefined);
  });

  it("does not post when text is empty", async () => {
    const createReview = mock.fn(async () => ({ data: { id: 456 } }));
    const mockOctokit = {
      rest: { pulls: { createReview } },
    };

    await postSummaryComment(mockOctokit, "owner", "repo", 42, "test.md", "");
    assert.strictEqual(createReview.mock.calls.length, 0);
  });
});
