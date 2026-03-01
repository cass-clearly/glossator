import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

const COMMENT = {
  id: "cmt_abc123",
  object: "comment",
  document: "doc_xyz",
  quote: "highlighted text",
  prefix: null,
  suffix: null,
  body: "Great point!",
  author: "Alice",
  status: "open",
  parent: null,
  color: "yellow",
  reactions: [],
  created_at: "2024-01-01T00:00:00.000Z",
};

const REPLY = {
  id: "cmt_reply1",
  object: "comment",
  document: "doc_xyz",
  quote: null,
  prefix: null,
  suffix: null,
  body: "Thanks!",
  author: "Bob",
  status: null,
  parent: "cmt_abc123",
  color: null,
  reactions: [],
  created_at: "2024-01-02T00:00:00.000Z",
};

describe("comments commands", async () => {
  const mod = await import("../src/commands/comments.js");
  let server, BASE;
  const lastRequest = {};

  before(async () => {
    server = http.createServer((req, res) => {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        lastRequest.method = req.method;
        lastRequest.path = url.pathname;
        lastRequest.query = Object.fromEntries(url.searchParams);
        lastRequest.body = body ? JSON.parse(body) : null;

        if (req.method === "GET" && url.pathname === "/comments") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ object: "list", data: [COMMENT, REPLY] })
          );
        } else if (
          req.method === "GET" &&
          url.pathname === "/comments/cmt_abc123"
        ) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(COMMENT));
        } else if (req.method === "POST" && url.pathname === "/comments") {
          const parsed = JSON.parse(body);
          const created = parsed.parent
            ? { ...REPLY, body: parsed.body, author: parsed.author }
            : {
                ...COMMENT,
                body: parsed.body,
                author: parsed.author,
                quote: parsed.quote,
              };
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(created));
        } else if (
          req.method === "PATCH" &&
          url.pathname === "/comments/cmt_abc123"
        ) {
          const parsed = JSON.parse(body);
          const updated = { ...COMMENT, ...parsed };
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(updated));
        } else if (
          req.method === "DELETE" &&
          url.pathname === "/comments/cmt_abc123"
        ) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(COMMENT));
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: { message: "Not found" } }));
        }
      });
    });
    await new Promise((resolve) => {
      server.listen(0, "127.0.0.1", () => {
        BASE = `http://127.0.0.1:${server.address().port}`;
        resolve();
      });
    });
  });

  after(() => server.close());

  function getSubcommands() {
    const commands = {};
    const fakeYargs = {
      command(config) {
        commands[config.command.split(" ")[0]] = config.handler;
        return fakeYargs;
      },
      demandCommand() {
        return fakeYargs;
      },
    };
    mod.default.builder(fakeYargs);
    return commands;
  }

  const subs = getSubcommands();

  describe("list", () => {
    it("lists comments as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.list({ url: BASE, json: false });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("cmt_abc123"));
      assert.ok(output.includes("Alice"));
      assert.ok(output.includes("2 comment(s)"));
    });

    it("lists comments as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.list({ url: BASE, json: true });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.data.length, 2);
    });

    it("passes filter query params", async (t) => {
      t.mock.method(console, "log");
      await subs.list({
        url: BASE,
        json: true,
        document: "doc_xyz",
        status: "open",
      });
      assert.equal(lastRequest.query.document, "doc_xyz");
      assert.equal(lastRequest.query.status, "open");
    });

    it("passes uri filter", async (t) => {
      t.mock.method(console, "log");
      await subs.list({
        url: BASE,
        json: true,
        uri: "https://example.com",
      });
      assert.equal(lastRequest.query.uri, "https://example.com");
    });
  });

  describe("get", () => {
    it("gets a comment as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.get({ url: BASE, json: false, id: "cmt_abc123" });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("cmt_abc123"));
      assert.ok(output.includes("Alice"));
      assert.ok(output.includes("Great point!"));
      assert.ok(output.includes("yellow"));
    });

    it("gets a comment as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.get({ url: BASE, json: true, id: "cmt_abc123" });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.id, "cmt_abc123");
    });
  });

  describe("create", () => {
    it("creates a comment as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.create({
        url: BASE,
        json: false,
        uri: "https://example.com",
        quote: "some text",
        author: "Alice",
        body: "Nice!",
      });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("Alice"));
      assert.equal(lastRequest.body.uri, "https://example.com");
      assert.equal(lastRequest.body.quote, "some text");
    });

    it("creates a comment with color", async (t) => {
      t.mock.method(console, "log");
      await subs.create({
        url: BASE,
        json: true,
        uri: "https://example.com",
        quote: "some text",
        author: "Alice",
        body: "Nice!",
        color: "blue",
      });
      assert.equal(lastRequest.body.color, "blue");
    });

    it("creates a comment as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.create({
        url: BASE,
        json: true,
        uri: "https://example.com",
        quote: "some text",
        author: "Alice",
        body: "Nice!",
      });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.object, "comment");
    });
  });

  describe("reply", () => {
    it("replies to a comment as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.reply({
        url: BASE,
        json: false,
        parentId: "cmt_abc123",
        author: "Bob",
        body: "Thanks!",
      });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("Bob"));
      assert.equal(lastRequest.body.parent, "cmt_abc123");
    });

    it("replies as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.reply({
        url: BASE,
        json: true,
        parentId: "cmt_abc123",
        author: "Bob",
        body: "Thanks!",
      });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.ok(output.id);
    });
  });

  describe("resolve", () => {
    it("resolves a comment as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.resolve({ url: BASE, json: false, id: "cmt_abc123" });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("Resolved"));
      assert.equal(lastRequest.body.status, "closed");
    });

    it("resolves a comment as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.resolve({ url: BASE, json: true, id: "cmt_abc123" });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.status, "closed");
    });
  });

  describe("reopen", () => {
    it("reopens a comment as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.reopen({ url: BASE, json: false, id: "cmt_abc123" });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("Reopened"));
      assert.equal(lastRequest.body.status, "open");
    });

    it("reopens a comment as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.reopen({ url: BASE, json: true, id: "cmt_abc123" });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.status, "open");
    });
  });

  describe("update", () => {
    it("updates a comment body as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.update({
        url: BASE,
        json: false,
        id: "cmt_abc123",
        body: "Updated!",
      });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("Updated!"));
      assert.equal(lastRequest.body.body, "Updated!");
    });

    it("updates a comment body as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.update({
        url: BASE,
        json: true,
        id: "cmt_abc123",
        body: "Updated!",
      });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.body, "Updated!");
    });
  });

  describe("delete", () => {
    it("deletes a comment as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.delete({ url: BASE, json: false, id: "cmt_abc123" });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("Deleted"));
      assert.ok(output.includes("cmt_abc123"));
    });

    it("deletes a comment as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.delete({ url: BASE, json: true, id: "cmt_abc123" });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.id, "cmt_abc123");
    });
  });
});
