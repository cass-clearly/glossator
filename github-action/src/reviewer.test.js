import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import { buildReviewPrompt, reviewDiff } from "./reviewer.js";

describe("buildReviewPrompt", () => {
  it("includes the filename in the prompt", () => {
    const prompt = buildReviewPrompt("README.md", "some diff content");
    assert.ok(prompt.includes("README.md"));
  });

  it("includes the diff content", () => {
    const diff = "@@ -1,3 +1,4 @@\n+New line added\n existing line";
    const prompt = buildReviewPrompt("docs/guide.md", diff);
    assert.ok(prompt.includes(diff));
  });

  it("requests JSON array response format", () => {
    const prompt = buildReviewPrompt("test.md", "diff");
    assert.ok(prompt.includes("JSON"));
    assert.ok(prompt.includes("line"));
    assert.ok(prompt.includes("body"));
    assert.ok(prompt.includes("severity"));
  });
});

describe("reviewDiff", () => {
  it("returns parsed comments from Claude response", async () => {
    const mockResponse = [{ line: 5, body: "Unclear phrasing.", severity: "suggestion" }];
    const mockClient = {
      messages: {
        create: mock.fn(async () => ({
          content: [{ type: "text", text: JSON.stringify(mockResponse) }],
        })),
      },
    };

    const result = await reviewDiff(mockClient, "README.md", "some diff");
    assert.strictEqual(result.type, "comments");
    assert.strictEqual(result.comments.length, 1);
    assert.strictEqual(result.comments[0].line, 5);
  });

  it("passes correct parameters to Claude API", async () => {
    const createFn = mock.fn(async () => ({
      content: [{ type: "text", text: "[]" }],
    }));
    const mockClient = { messages: { create: createFn } };

    await reviewDiff(mockClient, "test.md", "diff content");

    assert.strictEqual(createFn.mock.calls.length, 1);
    const args = createFn.mock.calls[0].arguments[0];
    assert.strictEqual(args.model, "claude-sonnet-4-20250514");
    assert.strictEqual(args.max_tokens, 4096);
    assert.ok(args.messages[0].content.includes("diff content"));
  });

  it("returns summary fallback when Claude returns non-JSON", async () => {
    const mockClient = {
      messages: {
        create: mock.fn(async () => ({
          content: [{ type: "text", text: "I found some issues with this document." }],
        })),
      },
    };

    const result = await reviewDiff(mockClient, "README.md", "diff");
    assert.strictEqual(result.type, "summary");
    assert.ok(result.text.includes("I found some issues"));
  });

  it("throws on API error", async () => {
    const mockClient = {
      messages: {
        create: mock.fn(async () => {
          throw new Error("API rate limited");
        }),
      },
    };

    await assert.rejects(() => reviewDiff(mockClient, "README.md", "diff"), { message: "API rate limited" });
  });

  it("handles empty content response", async () => {
    const mockClient = {
      messages: {
        create: mock.fn(async () => ({
          content: [],
        })),
      },
    };

    const result = await reviewDiff(mockClient, "README.md", "diff");
    assert.strictEqual(result.type, "summary");
  });
});
