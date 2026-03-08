import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { parseReviewResponse, validateComment } from "./review-parser.js";

describe("validateComment", () => {
  it("accepts a valid comment object", () => {
    const comment = { line: 5, body: "Unclear phrasing here.", severity: "suggestion" };
    assert.deepStrictEqual(validateComment(comment), comment);
  });

  it("rejects comment missing line", () => {
    assert.strictEqual(validateComment({ body: "text", severity: "suggestion" }), null);
  });

  it("rejects comment with non-number line", () => {
    assert.strictEqual(validateComment({ line: "five", body: "text", severity: "suggestion" }), null);
  });

  it("rejects comment missing body", () => {
    assert.strictEqual(validateComment({ line: 5, severity: "suggestion" }), null);
  });

  it("rejects comment with empty body", () => {
    assert.strictEqual(validateComment({ line: 5, body: "", severity: "suggestion" }), null);
  });

  it("defaults severity to suggestion when missing", () => {
    const result = validateComment({ line: 5, body: "Fix this." });
    assert.strictEqual(result.severity, "suggestion");
  });

  it("defaults severity to suggestion when invalid", () => {
    const result = validateComment({ line: 5, body: "Fix this.", severity: "critical" });
    assert.strictEqual(result.severity, "suggestion");
  });

  it("accepts all valid severities", () => {
    for (const severity of ["suggestion", "warning", "error"]) {
      const result = validateComment({ line: 5, body: "text", severity });
      assert.strictEqual(result.severity, severity);
    }
  });

  it("coerces line to integer", () => {
    const result = validateComment({ line: 5.7, body: "text", severity: "suggestion" });
    assert.strictEqual(result.line, 5);
  });
});

describe("parseReviewResponse", () => {
  it("parses valid JSON array of comments", () => {
    const json = JSON.stringify([
      { line: 5, body: "Unclear.", severity: "suggestion" },
      { line: 12, body: "Missing context.", severity: "warning" },
    ]);
    const result = parseReviewResponse(json);
    assert.strictEqual(result.type, "comments");
    assert.strictEqual(result.comments.length, 2);
    assert.strictEqual(result.comments[0].line, 5);
    assert.strictEqual(result.comments[1].severity, "warning");
  });

  it("returns empty comments for empty array", () => {
    const result = parseReviewResponse("[]");
    assert.strictEqual(result.type, "comments");
    assert.strictEqual(result.comments.length, 0);
  });

  it("filters out invalid comments from otherwise valid array", () => {
    const json = JSON.stringify([
      { line: 5, body: "Good comment.", severity: "suggestion" },
      { body: "Missing line." },
      { line: 10, body: "Also good.", severity: "error" },
    ]);
    const result = parseReviewResponse(json);
    assert.strictEqual(result.type, "comments");
    assert.strictEqual(result.comments.length, 2);
  });

  it("falls back to raw text for non-JSON response", () => {
    const text = "Here are some issues I found with the document...";
    const result = parseReviewResponse(text);
    assert.strictEqual(result.type, "summary");
    assert.strictEqual(result.text, text);
  });

  it("falls back to raw text for JSON object (not array)", () => {
    const json = JSON.stringify({ comments: [{ line: 1, body: "test" }] });
    const result = parseReviewResponse(json);
    assert.strictEqual(result.type, "summary");
    assert.strictEqual(result.text, json);
  });

  it("extracts JSON array from markdown code fence", () => {
    const response = '```json\n[{"line": 3, "body": "Fix typo.", "severity": "suggestion"}]\n```';
    const result = parseReviewResponse(response);
    assert.strictEqual(result.type, "comments");
    assert.strictEqual(result.comments.length, 1);
    assert.strictEqual(result.comments[0].line, 3);
  });

  it("extracts JSON array embedded in surrounding text", () => {
    const response = 'Here are the issues:\n[{"line": 1, "body": "Typo.", "severity": "suggestion"}]\nLet me know if you need more.';
    const result = parseReviewResponse(response);
    assert.strictEqual(result.type, "comments");
    assert.strictEqual(result.comments.length, 1);
  });

  it("returns summary when all extracted comments are invalid", () => {
    const json = JSON.stringify([
      { body: "Missing line." },
      { line: "not a number", body: "" },
    ]);
    const result = parseReviewResponse(json);
    assert.strictEqual(result.type, "summary");
  });

  it("handles null/undefined input", () => {
    assert.strictEqual(parseReviewResponse(null).type, "summary");
    assert.strictEqual(parseReviewResponse(undefined).type, "summary");
  });
});
