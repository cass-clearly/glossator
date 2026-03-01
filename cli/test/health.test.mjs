import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

describe("health command", async () => {
  const mod = await import("../src/commands/health.js");
  const { handler } = mod.default;
  let server, BASE;

  before(async () => {
    server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok" }));
    });
    await new Promise((resolve) => {
      server.listen(0, "127.0.0.1", () => {
        BASE = `http://127.0.0.1:${server.address().port}`;
        resolve();
      });
    });
  });

  after(() => server.close());

  it("displays health status as text", async (t) => {
    const logs = t.mock.method(console, "log");
    await handler({ url: BASE, json: false });
    assert.equal(logs.mock.calls.length, 1);
    assert.ok(logs.mock.calls[0].arguments[0].includes("ok"));
  });

  it("displays health status as JSON", async (t) => {
    const logs = t.mock.method(console, "log");
    await handler({ url: BASE, json: true });
    const output = JSON.parse(logs.mock.calls[0].arguments[0]);
    assert.equal(output.status, "ok");
  });

  it("throws on connection error", async () => {
    await assert.rejects(() =>
      handler({ url: "http://127.0.0.1:1", json: false })
    );
  });
});
