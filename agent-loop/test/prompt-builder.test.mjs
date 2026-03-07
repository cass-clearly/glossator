import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { buildPrompt } from "../src/prompt-builder.js";

describe("prompt-builder", () => {
  it("builds prompt with quote, prefix, suffix, and body", () => {
    const comment = {
      id: "cmt_1",
      quote: "quantum entanglement",
      prefix: "The concept of ",
      suffix: " enables new possibilities.",
      body: "Too technical for our audience",
      author: "Sarah",
    };
    const prompt = buildPrompt(comment, []);
    assert.ok(prompt.includes('"quantum entanglement"'));
    assert.ok(prompt.includes("Too technical for our audience"));
    assert.ok(prompt.includes("Sarah"));
    assert.ok(prompt.includes("The concept of "));
    assert.ok(prompt.includes(" enables new possibilities."));
  });

  it("includes other open comments formatted with authors", () => {
    const comment = {
      id: "cmt_1",
      quote: "some text",
      body: "Fix this",
      author: "Alice",
    };
    const openComments = [
      { id: "cmt_2", quote: "other text", body: "Also fix this", author: "Bob", parent: null },
      { id: "cmt_3", quote: "more text", body: "And this too", author: "Charlie", parent: null },
    ];
    const prompt = buildPrompt(comment, openComments);
    assert.ok(prompt.includes("Bob"));
    assert.ok(prompt.includes("Also fix this"));
    assert.ok(prompt.includes("Charlie"));
    assert.ok(prompt.includes("And this too"));
  });

  it("nests replies under their parent comments", () => {
    const comment = {
      id: "cmt_1",
      quote: "some text",
      body: "Fix this",
      author: "Alice",
    };
    const openComments = [
      { id: "cmt_2", quote: "other text", body: "Review needed", author: "Bob", parent: null },
      { id: "cmt_r1", body: "I agree with Bob", author: "Charlie", parent: "cmt_2" },
    ];
    const prompt = buildPrompt(comment, openComments);
    assert.ok(prompt.includes("Bob"));
    assert.ok(prompt.includes("Review needed"));
    assert.ok(prompt.includes("Charlie"));
    assert.ok(prompt.includes("I agree with Bob"));
    assert.ok(prompt.includes("reply"));
  });

  it("handles empty open comments list", () => {
    const comment = {
      id: "cmt_1",
      quote: "some text",
      body: "Fix this",
      author: "Alice",
    };
    const prompt = buildPrompt(comment, []);
    assert.ok(prompt.includes("Fix this"));
    assert.ok(prompt.includes("Alice"));
    // Should not crash and should indicate no other comments
    assert.ok(typeof prompt === "string");
  });

  it("handles missing prefix and suffix gracefully", () => {
    const comment = {
      id: "cmt_1",
      quote: "some text",
      body: "Fix this",
      author: "Alice",
      prefix: null,
      suffix: undefined,
    };
    const prompt = buildPrompt(comment, []);
    assert.ok(prompt.includes("Fix this"));
    // Should not include "null" or "undefined" as text
    assert.ok(!prompt.includes("null"));
    assert.ok(!prompt.includes("undefined"));
  });
});
