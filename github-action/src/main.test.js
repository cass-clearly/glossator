import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import { run } from "./main.js";

function makeMockDeps(overrides = {}) {
  return {
    getChangedFiles: overrides.getChangedFiles || mock.fn(async () => []),
    getFileDiff: overrides.getFileDiff || mock.fn(async () => ""),
    reviewDiff: overrides.reviewDiff || mock.fn(async () => ({ type: "comments", comments: [] })),
    postReview: overrides.postReview || mock.fn(async () => {}),
    postSummaryComment: overrides.postSummaryComment || mock.fn(async () => {}),
    log: overrides.log || mock.fn(),
    warn: overrides.warn || mock.fn(),
    setOutput: overrides.setOutput || mock.fn(),
  };
}

describe("run", () => {
  it("succeeds silently when no doc files changed", async () => {
    const deps = makeMockDeps();
    await run(deps);

    assert.strictEqual(deps.getChangedFiles.mock.calls.length, 1);
    assert.strictEqual(deps.reviewDiff.mock.calls.length, 0);
    assert.strictEqual(deps.setOutput.mock.calls.length, 2);
    // files-reviewed = 0, comments-posted = 0
    const outputCalls = deps.setOutput.mock.calls;
    assert.strictEqual(outputCalls[0].arguments[0], "files-reviewed");
    assert.strictEqual(outputCalls[0].arguments[1], 0);
    assert.strictEqual(outputCalls[1].arguments[0], "comments-posted");
    assert.strictEqual(outputCalls[1].arguments[1], 0);
  });

  it("reviews each matching file and posts inline comments", async () => {
    const deps = makeMockDeps({
      getChangedFiles: mock.fn(async () => ["README.md", "docs/guide.md"]),
      getFileDiff: mock.fn(async (file) => `diff for ${file}`),
      reviewDiff: mock.fn(async () => ({
        type: "comments",
        comments: [{ line: 1, body: "Fix.", severity: "suggestion" }],
      })),
    });

    await run(deps);

    assert.strictEqual(deps.getFileDiff.mock.calls.length, 2);
    assert.strictEqual(deps.reviewDiff.mock.calls.length, 2);
    assert.strictEqual(deps.postReview.mock.calls.length, 1);
    // 2 files * 1 comment each = 2 total comments
    const reviewArgs = deps.postReview.mock.calls[0].arguments;
    assert.strictEqual(reviewArgs[0].length, 2); // 2 comments passed
  });

  it("posts summary comment for files with fallback text", async () => {
    const deps = makeMockDeps({
      getChangedFiles: mock.fn(async () => ["README.md"]),
      getFileDiff: mock.fn(async () => "some diff"),
      reviewDiff: mock.fn(async () => ({
        type: "summary",
        text: "Found some issues.",
      })),
    });

    await run(deps);

    assert.strictEqual(deps.postSummaryComment.mock.calls.length, 1);
    assert.strictEqual(deps.postReview.mock.calls.length, 0);
  });

  it("caps at 10 files", async () => {
    const files = Array.from({ length: 15 }, (_, i) => `doc${i}.md`);
    const deps = makeMockDeps({
      getChangedFiles: mock.fn(async () => files),
      getFileDiff: mock.fn(async () => "diff"),
      reviewDiff: mock.fn(async () => ({ type: "comments", comments: [] })),
    });

    await run(deps);

    assert.strictEqual(deps.reviewDiff.mock.calls.length, 10);
  });

  it("continues reviewing other files when one review throws", async () => {
    let callCount = 0;
    const deps = makeMockDeps({
      getChangedFiles: mock.fn(async () => ["a.md", "b.md", "c.md"]),
      getFileDiff: mock.fn(async () => "diff"),
      reviewDiff: mock.fn(async () => {
        callCount++;
        if (callCount === 2) throw new Error("API timeout");
        return { type: "comments", comments: [] };
      }),
    });

    await run(deps);

    assert.strictEqual(deps.reviewDiff.mock.calls.length, 3);
    assert.strictEqual(deps.warn.mock.calls.length, 1);
    assert.ok(deps.warn.mock.calls[0].arguments[0].includes("b.md"));
  });

  it("sets outputs correctly", async () => {
    const deps = makeMockDeps({
      getChangedFiles: mock.fn(async () => ["README.md"]),
      getFileDiff: mock.fn(async () => "diff"),
      reviewDiff: mock.fn(async () => ({
        type: "comments",
        comments: [
          { line: 1, body: "Fix.", severity: "suggestion" },
          { line: 5, body: "Missing.", severity: "warning" },
        ],
      })),
    });

    await run(deps);

    const outputCalls = deps.setOutput.mock.calls;
    assert.strictEqual(outputCalls[0].arguments[0], "files-reviewed");
    assert.strictEqual(outputCalls[0].arguments[1], 1);
    assert.strictEqual(outputCalls[1].arguments[0], "comments-posted");
    assert.strictEqual(outputCalls[1].arguments[1], 2);
  });
});
