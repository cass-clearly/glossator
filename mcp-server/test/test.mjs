import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { RemarqClient } = require("../../shared/client.js");

const COMMENT = {
  id: "cmt_abc123",
  object: "comment",
  document: "doc_xyz",
  quote: "some text",
  prefix: null,
  suffix: null,
  body: "This needs work",
  author: "Alice",
  status: "open",
  parent: null,
  color: null,
  reactions: [],
  created_at: "2026-03-10T00:00:00.000Z",
};

const DOCUMENT = {
  id: "doc_xyz",
  object: "document",
  uri: "https://example.com/page",
  created_at: "2026-03-10T00:00:00.000Z",
};

describe("MCP tools", () => {
  let mockServer, BASE, tools;
  const requests = [];

  before(async () => {
    mockServer = http.createServer((req, res) => {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        requests.push({
          method: req.method,
          path: url.pathname,
          query: Object.fromEntries(url.searchParams),
          body: body ? JSON.parse(body) : null,
        });

        const json = (status, data) => {
          res.writeHead(status, { "Content-Type": "application/json" });
          res.end(JSON.stringify(data));
        };

        if (url.pathname === "/health") {
          json(200, { status: "ok" });
        } else if (url.pathname === "/comments" && req.method === "GET") {
          const expand = url.searchParams.get("expand");
          const comment = expand === "document" ? { ...COMMENT, document: DOCUMENT } : COMMENT;
          json(200, { object: "list", data: [comment] });
        } else if (url.pathname === "/comments" && req.method === "POST") {
          const parsed = JSON.parse(body);
          json(201, {
            ...COMMENT,
            id: "cmt_new1",
            body: parsed.body,
            author: parsed.author,
            quote: parsed.quote || null,
            parent: parsed.parent || null,
            status: parsed.parent ? null : "open",
          });
        } else if (url.pathname === "/comments/cmt_reply1" && req.method === "PATCH") {
          const parsed = JSON.parse(body);
          if (parsed.status) {
            json(400, {
              error: { message: "Cannot set status on a reply" },
            });
          } else {
            json(200, { ...COMMENT, parent: "cmt_abc123", ...parsed });
          }
        } else if (url.pathname.match(/^\/comments\/cmt_\w+$/) && req.method === "PATCH") {
          const parsed = JSON.parse(body);
          json(200, { ...COMMENT, ...parsed });
        } else {
          json(404, { error: { message: "Not found" } });
        }
      });
    });

    await new Promise((resolve) =>
      mockServer.listen(0, "127.0.0.1", () => {
        BASE = `http://127.0.0.1:${mockServer.address().port}`;
        resolve();
      }),
    );

    const { createTools } = await import("../src/index.js");
    const client = new RemarqClient(BASE);
    tools = createTools(client);
  });

  after(() => mockServer.close());

  beforeEach(() => {
    requests.length = 0;
  });

  describe("check_connection", () => {
    it("returns success when server is reachable", async () => {
      const result = await tools.check_connection();
      assert.deepEqual(result, {
        content: [{ type: "text", text: `Connected to Remarq server at ${BASE}` }],
      });
    });

    it("returns error when server is unreachable", async () => {
      const { createTools } = await import("../src/index.js");
      const badClient = new RemarqClient("http://127.0.0.1:1");
      const badTools = createTools(badClient);
      const result = await badTools.check_connection();
      assert.equal(result.content[0].type, "text");
      assert.match(result.content[0].text, /Failed to connect/);
      assert.equal(result.isError, true);
    });
  });

  describe("list_comments", () => {
    it("lists comments with no filters", async () => {
      const result = await tools.list_comments({});
      const parsed = JSON.parse(result.content[0].text);
      assert.equal(parsed.object, "list");
      assert.equal(parsed.data.length, 1);
      assert.equal(parsed.data[0].id, "cmt_abc123");
      assert.deepEqual(requests[0].query, {});
    });

    it("filters by uri", async () => {
      await tools.list_comments({ uri: "https://example.com/page" });
      assert.equal(requests[0].query.uri, "https://example.com/page");
    });

    it("filters by status", async () => {
      await tools.list_comments({ status: "open" });
      assert.equal(requests[0].query.status, "open");
    });

    it("expands document when include_document is true", async () => {
      const result = await tools.list_comments({ include_document: true });
      assert.equal(requests[0].query.expand, "document");
      const parsed = JSON.parse(result.content[0].text);
      assert.equal(parsed.data[0].document.uri, "https://example.com/page");
    });

    it("combines multiple filters", async () => {
      await tools.list_comments({
        uri: "https://example.com",
        status: "closed",
        include_document: true,
      });
      assert.equal(requests[0].query.uri, "https://example.com");
      assert.equal(requests[0].query.status, "closed");
      assert.equal(requests[0].query.expand, "document");
    });

    it("returns error on API failure", async () => {
      const { createTools } = await import("../src/index.js");
      const badClient = new RemarqClient("http://127.0.0.1:1");
      const badTools = createTools(badClient);
      const result = await badTools.list_comments({});
      assert.equal(result.isError, true);
      assert.match(result.content[0].text, /Failed to list comments/);
    });
  });

  describe("create_comment", () => {
    it("creates a comment with required fields", async () => {
      const result = await tools.create_comment({
        uri: "https://example.com/page",
        quote: "highlighted text",
        body: "Great point",
        author: "Bob",
      });
      const parsed = JSON.parse(result.content[0].text);
      assert.equal(parsed.id, "cmt_new1");
      assert.equal(parsed.body, "Great point");
      assert.equal(parsed.author, "Bob");
      assert.equal(requests[0].method, "POST");
      assert.equal(requests[0].path, "/comments");
      assert.equal(requests[0].body.uri, "https://example.com/page");
      assert.equal(requests[0].body.quote, "highlighted text");
    });

    it("sends optional prefix and suffix", async () => {
      await tools.create_comment({
        uri: "https://example.com",
        quote: "text",
        body: "comment",
        author: "Bob",
        prefix: "before",
        suffix: "after",
      });
      assert.equal(requests[0].body.prefix, "before");
      assert.equal(requests[0].body.suffix, "after");
    });

    it("returns error on API failure", async () => {
      const { createTools } = await import("../src/index.js");
      const badClient = new RemarqClient("http://127.0.0.1:1");
      const badTools = createTools(badClient);
      const result = await badTools.create_comment({
        uri: "x",
        quote: "q",
        body: "b",
        author: "a",
      });
      assert.equal(result.isError, true);
      assert.match(result.content[0].text, /Failed/);
    });
  });

  describe("reply_to_comment", () => {
    it("creates a reply to a parent comment", async () => {
      const result = await tools.reply_to_comment({
        comment_id: "cmt_abc123",
        body: "I agree",
        author: "Carol",
      });
      const parsed = JSON.parse(result.content[0].text);
      assert.equal(parsed.parent, "cmt_abc123");
      assert.equal(parsed.body, "I agree");
      assert.equal(parsed.status, null);
      assert.equal(requests[0].method, "POST");
      assert.equal(requests[0].body.parent, "cmt_abc123");
    });

    it("returns error on API failure", async () => {
      const { createTools } = await import("../src/index.js");
      const badClient = new RemarqClient("http://127.0.0.1:1");
      const badTools = createTools(badClient);
      const result = await badTools.reply_to_comment({
        comment_id: "cmt_x",
        body: "reply",
        author: "a",
      });
      assert.equal(result.isError, true);
      assert.match(result.content[0].text, /Failed to reply/);
    });
  });

  describe("resolve_comment", () => {
    it("resolves a comment by setting status to closed", async () => {
      const result = await tools.resolve_comment({
        comment_id: "cmt_abc123",
      });
      const parsed = JSON.parse(result.content[0].text);
      assert.equal(parsed.status, "closed");
      assert.equal(requests[0].method, "PATCH");
      assert.equal(requests[0].path, "/comments/cmt_abc123");
      assert.deepEqual(requests[0].body, { status: "closed" });
    });

    it("returns error when resolving a reply", async () => {
      const result = await tools.resolve_comment({
        comment_id: "cmt_reply1",
      });
      assert.equal(result.isError, true);
      assert.match(result.content[0].text, /Cannot set status on a reply/);
    });
  });

  describe("createServer", () => {
    it("registers all five tools", async () => {
      const { createServer } = await import("../src/index.js");
      const server = createServer(BASE);
      const toolNames = Object.keys(server._registeredTools).sort();
      assert.deepEqual(toolNames, [
        "check_connection",
        "create_comment",
        "list_comments",
        "reply_to_comment",
        "resolve_comment",
      ]);
    });
  });
});
