import { describe, it, after } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

// DOMPurify needs a DOM — set up JSDOM globals before importing sanitize.js
const dom = new JSDOM("");
const origWindow = globalThis.window;
const origDocument = globalThis.document;
globalThis.window = dom.window;
globalThis.document = dom.window.document;

const { sanitizeHtml } = await import("../src/utils/sanitize.js");

describe("sanitizeHtml", () => {
  after(() => {
    globalThis.window = origWindow;
    globalThis.document = origDocument;
  });

  it("strips script tags", () => {
    assert.equal(sanitizeHtml("<script>alert('xss')</script>"), "");
  });

  it("strips event handlers from tags", () => {
    const result = sanitizeHtml('<img src="x" onerror="alert(1)">');
    assert.ok(!result.includes("onerror"));
  });

  it("preserves safe HTML tags", () => {
    assert.equal(sanitizeHtml("<strong>bold</strong>"), "<strong>bold</strong>");
    assert.equal(sanitizeHtml("<em>italic</em>"), "<em>italic</em>");
    assert.equal(sanitizeHtml("<code>code</code>"), "<code>code</code>");
  });

  it("preserves safe links", () => {
    const input = '<a href="https://example.com">link</a>';
    const result = sanitizeHtml(input);
    assert.ok(result.includes('href="https://example.com"'));
    assert.ok(result.includes("link</a>"));
  });

  it("strips javascript: from href", () => {
    const result = sanitizeHtml('<a href="javascript:alert(1)">click</a>');
    assert.ok(!result.includes("javascript:"));
  });

  it("returns empty string for empty input", () => {
    assert.equal(sanitizeHtml(""), "");
  });

  it("returns plain text unchanged", () => {
    assert.equal(sanitizeHtml("hello world"), "hello world");
  });
});
