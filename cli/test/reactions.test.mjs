import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

const REACTIONS_RESPONSE = {
  comment_id: "cmt_abc123",
  reactions: [{ emoji: "\ud83d\udc4d", count: 2, authors: ["Alice", "Bob"] }],
};

const EMPTY_REACTIONS = {
  comment_id: "cmt_abc123",
  reactions: [],
};

describe("reactions commands", async () => {
  const mod = await import("../src/commands/reactions.js");
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

        if (
          req.method === "POST" &&
          url.pathname === "/comments/cmt_abc123/reactions"
        ) {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(REACTIONS_RESPONSE));
        } else if (
          req.method === "DELETE" &&
          url.pathname.startsWith("/comments/cmt_abc123/reactions/")
        ) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(EMPTY_REACTIONS));
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

  describe("add", () => {
    it("adds a reaction as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.add({
        url: BASE,
        json: false,
        commentId: "cmt_abc123",
        emoji: "\ud83d\udc4d",
        author: "Alice",
      });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("cmt_abc123"));
      assert.ok(output.includes("\ud83d\udc4d"));
      assert.equal(lastRequest.body.emoji, "\ud83d\udc4d");
      assert.equal(lastRequest.body.author, "Alice");
    });

    it("adds a reaction as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.add({
        url: BASE,
        json: true,
        commentId: "cmt_abc123",
        emoji: "\ud83d\udc4d",
        author: "Alice",
      });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.comment_id, "cmt_abc123");
      assert.equal(output.reactions.length, 1);
    });
  });

  describe("remove", () => {
    it("removes a reaction as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.remove({
        url: BASE,
        json: false,
        commentId: "cmt_abc123",
        emoji: "\ud83d\udc4d",
        author: "Alice",
      });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("cmt_abc123"));
      assert.ok(output.includes("No reactions"));
      assert.equal(lastRequest.query.author, "Alice");
    });

    it("removes a reaction as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.remove({
        url: BASE,
        json: true,
        commentId: "cmt_abc123",
        emoji: "\ud83d\udc4d",
        author: "Alice",
      });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.reactions.length, 0);
    });

    it("sends emoji URL-encoded in path", async (t) => {
      t.mock.method(console, "log");
      await subs.remove({
        url: BASE,
        json: true,
        commentId: "cmt_abc123",
        emoji: "\ud83d\udc4d",
        author: "Alice",
      });
      assert.ok(lastRequest.path.includes("%F0%9F%91%8D"));
    });
  });
});
