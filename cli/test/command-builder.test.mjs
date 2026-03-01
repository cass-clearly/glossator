import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

const { toCamelCase, resolvePath, buildSingleCommand, buildGroupCommand, buildCommands } =
  await import("../src/command-builder.js");

// ── Unit tests ────────────────────────────────────────────────────────

describe("toCamelCase", () => {
  it("converts hyphenated to camelCase", () => {
    assert.equal(toCamelCase("parent-id"), "parentId");
    assert.equal(toCamelCase("comment-id"), "commentId");
    assert.equal(toCamelCase("id"), "id");
    assert.equal(toCamelCase("my-long-name"), "myLongName");
  });
});

describe("resolvePath", () => {
  it("substitutes a path positional arg", () => {
    const path = "/documents/{id}";
    const positional = [{ name: "id", from: "path", paramName: "id" }];
    const resolved = resolvePath(path, positional, {}, { id: "doc_abc" });
    assert.equal(resolved, "/documents/doc_abc");
  });

  it("substitutes a path option", () => {
    const path = "/comments/{id}/reactions/{emoji}";
    const positional = [{ name: "comment-id", from: "path", paramName: "id" }];
    const options = { emoji: { from: "path", paramName: "emoji" } };
    const resolved = resolvePath(path, positional, options, {
      commentId: "cmt_123",
      emoji: "👍",
    });
    assert.equal(resolved, `/comments/cmt_123/reactions/${encodeURIComponent("👍")}`);
  });

  it("URL-encodes path parameters", () => {
    const path = "/comments/{id}/reactions/{emoji}";
    const positional = [{ name: "comment-id", from: "path", paramName: "id" }];
    const options = { emoji: { from: "path", paramName: "emoji" } };
    const resolved = resolvePath(path, positional, options, {
      commentId: "cmt_123",
      emoji: "hello world",
    });
    assert.ok(resolved.includes("hello%20world"));
  });

  it("does not substitute body or query args", () => {
    const path = "/comments";
    const positional = [{ name: "author", from: "body" }];
    const resolved = resolvePath(path, positional, {}, { author: "Alice" });
    assert.equal(resolved, "/comments");
  });
});

// ── Integration: buildSingleCommand ───────────────────────────────────

describe("buildSingleCommand handler", async () => {
  let server, BASE;
  const lastRequest = {};

  before(async () => {
    server = http.createServer((req, res) => {
      let body = "";
      req.on("data", (c) => (body += c));
      req.on("end", () => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        lastRequest.method = req.method;
        lastRequest.path = url.pathname;
        lastRequest.query = Object.fromEntries(url.searchParams);
        lastRequest.body = body ? JSON.parse(body) : null;

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            object: "document",
            id: "doc_test",
            uri: "https://example.com",
            created_at: "2024-01-01T00:00:00.000Z",
          }),
        );
      });
    });

    await new Promise((resolve) =>
      server.listen(0, "127.0.0.1", () => {
        BASE = `http://127.0.0.1:${server.address().port}`;
        resolve();
      }),
    );
  });

  after(() => server.close());

  it("makes a GET request for list commands", async (t) => {
    const cmd = buildSingleCommand({
      path: "/documents",
      method: "get",
      cliDef: { command: "list", describe: "List docs" },
    });

    const logs = t.mock.method(console, "log");
    await cmd.handler({ url: BASE, json: false });
    assert.equal(lastRequest.method, "GET");
    assert.equal(lastRequest.path, "/documents");
    assert.ok(logs.mock.calls.length > 0);
  });

  it("makes a GET request with path param substitution", async (t) => {
    const cmd = buildSingleCommand({
      path: "/documents/{id}",
      method: "get",
      cliDef: {
        command: "get <id>",
        describe: "Get doc",
        positional: [{ name: "id", from: "path", paramName: "id" }],
      },
    });

    const logs = t.mock.method(console, "log");
    await cmd.handler({ url: BASE, json: false, id: "doc_abc" });
    assert.equal(lastRequest.path, "/documents/doc_abc");
    assert.ok(logs.mock.calls.length > 0);
  });

  it("sends body options in POST requests", async (t) => {
    const cmd = buildSingleCommand({
      path: "/documents",
      method: "post",
      cliDef: {
        command: "create",
        describe: "Create doc",
        options: {
          uri: { type: "string", demandOption: true, from: "body" },
        },
      },
    });

    t.mock.method(console, "log");
    await cmd.handler({ url: BASE, json: false, uri: "https://example.com" });
    assert.equal(lastRequest.method, "POST");
    assert.deepEqual(lastRequest.body, { uri: "https://example.com" });
  });

  it("sends query options in GET requests", async (t) => {
    const cmd = buildSingleCommand({
      path: "/comments",
      method: "get",
      cliDef: {
        command: "list",
        describe: "List comments",
        options: {
          status: { type: "string", from: "query" },
        },
      },
    });

    t.mock.method(console, "log");
    await cmd.handler({ url: BASE, json: false, status: "open" });
    assert.equal(lastRequest.query.status, "open");
  });

  it("skips null/undefined query options", async (t) => {
    const cmd = buildSingleCommand({
      path: "/comments",
      method: "get",
      cliDef: {
        command: "list",
        describe: "List comments",
        options: {
          status: { type: "string", from: "query" },
          document: { type: "string", from: "query" },
        },
      },
    });

    t.mock.method(console, "log");
    await cmd.handler({ url: BASE, json: false, status: "open", document: undefined });
    assert.equal(lastRequest.query.status, "open");
    assert.equal(lastRequest.query.document, undefined);
  });

  it("merges fixedBody with argv body options", async (t) => {
    const cmd = buildSingleCommand({
      path: "/comments/{id}",
      method: "patch",
      cliDef: {
        command: "resolve <id>",
        describe: "Resolve a comment",
        positional: [{ name: "id", from: "path", paramName: "id" }],
        fixedBody: { status: "closed" },
      },
    });

    t.mock.method(console, "log");
    await cmd.handler({ url: BASE, json: false, id: "cmt_abc" });
    assert.equal(lastRequest.method, "PATCH");
    assert.equal(lastRequest.path, "/comments/cmt_abc");
    assert.deepEqual(lastRequest.body, { status: "closed" });
  });

  it("outputs raw JSON with --json flag", async (t) => {
    const cmd = buildSingleCommand({
      path: "/documents",
      method: "get",
      cliDef: { command: "list", describe: "List" },
    });

    const logs = t.mock.method(console, "log");
    await cmd.handler({ url: BASE, json: true });
    const output = JSON.parse(logs.mock.calls[0].arguments[0]);
    assert.equal(output.object, "document");
  });

  it("outputs human-friendly text without --json flag", async (t) => {
    const cmd = buildSingleCommand({
      path: "/documents",
      method: "get",
      cliDef: { command: "list", describe: "List" },
    });

    const logs = t.mock.method(console, "log");
    await cmd.handler({ url: BASE, json: false });
    const output = logs.mock.calls[0].arguments[0];
    assert.ok(typeof output === "string");
    assert.ok(output.includes("doc_test"));
  });

  it("propagates body positional args", async (t) => {
    const cmd = buildSingleCommand({
      path: "/comments",
      method: "post",
      cliDef: {
        command: "reply <parent-id>",
        describe: "Reply to a comment",
        positional: [{ name: "parent-id", from: "body", field: "parent" }],
        options: {
          author: { type: "string", demandOption: true, from: "body" },
          body: { type: "string", demandOption: true, from: "body" },
        },
      },
    });

    t.mock.method(console, "log");
    await cmd.handler({
      url: BASE,
      json: false,
      parentId: "cmt_parent",
      author: "Bob",
      body: "Good point!",
    });
    assert.equal(lastRequest.body.parent, "cmt_parent");
    assert.equal(lastRequest.body.author, "Bob");
    assert.equal(lastRequest.body.body, "Good point!");
  });
});

// ── buildCommands integration ─────────────────────────────────────────

describe("buildCommands", () => {
  it("registers top-level commands from spec", () => {
    const spec = {
      paths: {
        "/health": {
          get: {
            operationId: "getHealth",
            "x-cli": { group: null, command: "health", describe: "Check health" },
          },
        },
      },
    };

    const registered = [];
    const fakeYargs = {
      command(cmd) {
        registered.push(cmd);
        return fakeYargs;
      },
    };

    buildCommands(fakeYargs, spec);
    assert.equal(registered.length, 1);
    assert.equal(registered[0].command, "health");
  });

  it("registers grouped commands from spec", () => {
    const spec = {
      paths: {
        "/documents": {
          get: { "x-cli": { group: "documents", command: "list" } },
          post: { "x-cli": { group: "documents", command: "create" } },
        },
      },
    };

    const registered = [];
    const fakeYargs = {
      command(cmd) {
        registered.push(cmd);
        return fakeYargs;
      },
    };

    buildCommands(fakeYargs, spec);
    assert.equal(registered.length, 1);
    assert.equal(registered[0].command, "documents <command>");
  });

  it("handles x-cli arrays (multiple CLI commands per operation)", () => {
    const spec = {
      paths: {
        "/comments/{id}": {
          patch: {
            "x-cli": [
              { group: "comments", command: "update <id>" },
              { group: "comments", command: "resolve <id>", fixedBody: { status: "closed" } },
            ],
          },
        },
      },
    };

    const registered = [];
    const fakeYargs = {
      command(cmd) {
        registered.push(cmd);
        return fakeYargs;
      },
    };

    buildCommands(fakeYargs, spec);
    // Both go into the same "comments" group
    assert.equal(registered.length, 1);
    assert.equal(registered[0].command, "comments <command>");

    // Verify the group builder registers two subcommands
    const subCmds = [];
    const fakeInner = {
      command(cmd) {
        subCmds.push(cmd);
        return fakeInner;
      },
      demandCommand() {
        return fakeInner;
      },
    };
    registered[0].builder(fakeInner);
    assert.equal(subCmds.length, 2);
    assert.ok(subCmds.some((c) => c.command === "update <id>"));
    assert.ok(subCmds.some((c) => c.command === "resolve <id>"));
  });

  it("skips operations without x-cli", () => {
    const spec = {
      paths: {
        "/internal": {
          get: { operationId: "internal", summary: "no x-cli here" },
        },
        "/health": {
          get: { "x-cli": { group: null, command: "health" } },
        },
      },
    };

    const registered = [];
    const fakeYargs = {
      command(cmd) {
        registered.push(cmd);
        return fakeYargs;
      },
    };

    buildCommands(fakeYargs, spec);
    assert.equal(registered.length, 1);
    assert.equal(registered[0].command, "health");
  });

  it("handles empty spec gracefully", () => {
    const registered = [];
    const fakeYargs = {
      command(cmd) {
        registered.push(cmd);
        return fakeYargs;
      },
    };
    buildCommands(fakeYargs, { paths: {} });
    assert.equal(registered.length, 0);
  });
});

// ── buildGroupCommand ─────────────────────────────────────────────────

describe("buildGroupCommand", () => {
  it("wraps ops in a group command", () => {
    const ops = [
      { path: "/docs", method: "get", cliDef: { command: "list" } },
      { path: "/docs", method: "post", cliDef: { command: "create" } },
    ];

    const group = buildGroupCommand("docs", ops);
    assert.equal(group.command, "docs <command>");
    assert.equal(group.describe, "Manage docs");

    const subCmds = [];
    const fakeYargs = {
      command(c) {
        subCmds.push(c);
        return fakeYargs;
      },
      demandCommand() {
        return fakeYargs;
      },
    };
    group.builder(fakeYargs);
    assert.equal(subCmds.length, 2);
  });
});
