import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

const DOC = {
  id: "doc_abc123",
  object: "document",
  uri: "https://example.com/page",
  created_at: "2024-01-01T00:00:00.000Z",
};

describe("documents commands", async () => {
  const mod = await import("../src/commands/documents.js");
  let server, BASE;
  const lastRequest = {};

  before(async () => {
    server = http.createServer((req, res) => {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        lastRequest.method = req.method;
        lastRequest.path = req.url;
        lastRequest.body = body ? JSON.parse(body) : null;

        if (req.method === "GET" && req.url === "/documents") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ object: "list", data: [DOC] }));
        } else if (req.method === "POST" && req.url === "/documents") {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(DOC));
        } else if (
          req.method === "GET" &&
          req.url === "/documents/doc_abc123"
        ) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(DOC));
        } else if (
          req.method === "DELETE" &&
          req.url === "/documents/doc_abc123"
        ) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(DOC));
        } else if (
          req.method === "GET" &&
          req.url === "/documents/doc_missing"
        ) {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: { message: "Not found" } }));
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

  // Extract subcommand handlers from the builder
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
    it("lists documents as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.list({ url: BASE, json: false });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("doc_abc123"));
      assert.ok(output.includes("https://example.com/page"));
      assert.ok(output.includes("1 document(s)"));
    });

    it("lists documents as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.list({ url: BASE, json: true });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.object, "list");
      assert.equal(output.data.length, 1);
      assert.equal(output.data[0].id, "doc_abc123");
    });
  });

  describe("create", () => {
    it("creates a document and shows text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.create({ url: BASE, json: false, uri: "https://example.com/page" });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("doc_abc123"));
      assert.ok(output.includes("https://example.com/page"));
      assert.equal(lastRequest.body.uri, "https://example.com/page");
    });

    it("creates a document and shows JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.create({ url: BASE, json: true, uri: "https://example.com/page" });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.id, "doc_abc123");
    });
  });

  describe("get", () => {
    it("gets a document by ID as text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.get({ url: BASE, json: false, id: "doc_abc123" });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("doc_abc123"));
    });

    it("gets a document by ID as JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.get({ url: BASE, json: true, id: "doc_abc123" });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.id, "doc_abc123");
    });

    it("throws on not found", async () => {
      await assert.rejects(() =>
        subs.get({ url: BASE, json: false, id: "doc_missing" })
      );
    });
  });

  describe("delete", () => {
    it("deletes a document and shows text", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.delete({ url: BASE, json: false, id: "doc_abc123" });
      const output = logs.mock.calls[0].arguments[0];
      assert.ok(output.includes("Deleted"));
      assert.ok(output.includes("doc_abc123"));
    });

    it("deletes a document and shows JSON", async (t) => {
      const logs = t.mock.method(console, "log");
      await subs.delete({ url: BASE, json: true, id: "doc_abc123" });
      const output = JSON.parse(logs.mock.calls[0].arguments[0]);
      assert.equal(output.id, "doc_abc123");
    });
  });
});
