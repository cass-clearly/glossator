import { describe, it } from "node:test";
import assert from "node:assert/strict";

const { genericFormat } = await import("../src/format.js");

describe("genericFormat", () => {
  it("returns empty string for null/undefined", () => {
    assert.equal(genericFormat(null), "");
    assert.equal(genericFormat(undefined), "");
  });

  it("returns stringified primitive", () => {
    assert.equal(genericFormat(42), "42");
  });

  it("formats a document object", () => {
    const doc = {
      object: "document",
      id: "doc_abc",
      uri: "https://example.com",
      created_at: "2024-01-01T00:00:00.000Z",
    };
    const out = genericFormat(doc);
    assert.ok(out.includes("doc_abc"));
    assert.ok(out.includes("https://example.com"));
  });

  it("formats a comment object", () => {
    const comment = {
      object: "comment",
      id: "cmt_abc",
      document: "doc_xyz",
      author: "Alice",
      body: "Hello",
      status: "open",
      parent: null,
      color: null,
      reactions: [],
      created_at: "2024-01-01T00:00:00.000Z",
    };
    const out = genericFormat(comment);
    assert.ok(out.includes("cmt_abc"));
    assert.ok(out.includes("Alice"));
    assert.ok(out.includes("Hello"));
  });

  it("formats a reaction response", () => {
    const data = {
      comment_id: "cmt_abc",
      reactions: [{ emoji: "👍", count: 2, authors: ["Alice", "Bob"] }],
    };
    const out = genericFormat(data);
    assert.ok(out.includes("cmt_abc"));
    assert.ok(out.includes("👍"));
  });

  it("formats a reaction response with no reactions", () => {
    const data = { comment_id: "cmt_abc", reactions: [] };
    const out = genericFormat(data);
    assert.ok(out.includes("No reactions"));
  });

  it("formats a health/status object", () => {
    const out = genericFormat({ status: "ok" });
    assert.equal(out, "Status: ok");
  });

  it("formats an empty list with 'No results found'", () => {
    const out = genericFormat({ object: "list", data: [] });
    assert.equal(out, "No results found.");
  });

  it("formats a document list with type-specific count string", () => {
    const list = {
      object: "list",
      data: [
        { object: "document", id: "doc_1", uri: "https://a.com", created_at: "2024-01-01T00:00:00.000Z" },
        { object: "document", id: "doc_2", uri: "https://b.com", created_at: "2024-01-01T00:00:00.000Z" },
      ],
    };
    const out = genericFormat(list);
    assert.ok(out.includes("doc_1"));
    assert.ok(out.includes("doc_2"));
    assert.ok(out.includes("2 document(s)"), `Expected "2 document(s)" in: ${out}`);
  });

  it("formats a comment list with type-specific count string", () => {
    const list = {
      object: "list",
      data: [
        {
          object: "comment",
          id: "cmt_1",
          author: "Alice",
          body: "First",
          status: "open",
        },
        {
          object: "comment",
          id: "cmt_2",
          author: "Bob",
          body: "Second",
          status: null,
        },
      ],
    };
    const out = genericFormat(list);
    assert.ok(out.includes("cmt_1"));
    assert.ok(out.includes("cmt_2"));
    assert.ok(out.includes("2 comment(s)"), `Expected "2 comment(s)" in: ${out}`);
  });

  it("falls back to 'item(s)' for unknown list item type", () => {
    const list = {
      object: "list",
      data: [{ id: "x", foo: "bar" }],
    };
    const out = genericFormat(list);
    assert.ok(out.includes("1 item(s)"), `Expected "1 item(s)" in: ${out}`);
  });

  it("falls back to JSON for unknown object type", () => {
    const data = { object: "reaction", emoji: "😀", count: 5, authors: ["X"] };
    const out = genericFormat(data);
    // Not a known type — should JSON.stringify
    assert.ok(out.includes("reaction") || out.includes("emoji"));
  });
});
