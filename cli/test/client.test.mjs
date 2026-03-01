import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

describe("RemarqClient", async () => {
  const { RemarqClient } = await import("../src/client.js");
  let server, BASE;
  const requests = [];

  before(async () => {
    server = http.createServer((req, res) => {
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

        if (url.pathname === "/health") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ status: "ok" }));
        } else if (url.pathname === "/echo" && req.method === "POST") {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(body);
        } else if (url.pathname === "/query") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(Object.fromEntries(url.searchParams)));
        } else if (url.pathname === "/error") {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: { message: "Bad request" } }));
        } else if (url.pathname === "/server-error") {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({}));
        } else if (url.pathname === "/patched" && req.method === "PATCH") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ patched: true }));
        } else if (url.pathname === "/deleted" && req.method === "DELETE") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ deleted: true }));
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

  it("makes GET requests", async () => {
    const client = new RemarqClient(BASE);
    const result = await client.request("GET", "/health");
    assert.equal(result.status, 200);
    assert.deepEqual(result.data, { status: "ok" });
  });

  it("makes POST requests with body", async () => {
    const client = new RemarqClient(BASE);
    const result = await client.request("POST", "/echo", {
      body: { hello: "world" },
    });
    assert.equal(result.status, 201);
    assert.deepEqual(result.data, { hello: "world" });
  });

  it("sends query parameters", async () => {
    const client = new RemarqClient(BASE);
    const result = await client.request("GET", "/query", {
      query: { foo: "bar", baz: "qux" },
    });
    assert.equal(result.data.foo, "bar");
    assert.equal(result.data.baz, "qux");
  });

  it("skips null/undefined query params", async () => {
    const client = new RemarqClient(BASE);
    const result = await client.request("GET", "/query", {
      query: { present: "yes", missing: null, undef: undefined },
    });
    assert.equal(result.data.present, "yes");
    assert.equal(result.data.missing, undefined);
    assert.equal(result.data.undef, undefined);
  });

  it("makes PATCH requests", async () => {
    const client = new RemarqClient(BASE);
    const result = await client.request("PATCH", "/patched", {
      body: { x: 1 },
    });
    assert.equal(result.status, 200);
    assert.deepEqual(result.data, { patched: true });
  });

  it("makes DELETE requests", async () => {
    const client = new RemarqClient(BASE);
    const result = await client.request("DELETE", "/deleted");
    assert.equal(result.status, 200);
    assert.deepEqual(result.data, { deleted: true });
  });

  it("throws on 4xx errors with message", async () => {
    const client = new RemarqClient(BASE);
    await assert.rejects(
      () => client.request("GET", "/error"),
      (err) => {
        assert.equal(err.message, "Bad request");
        assert.equal(err.status, 400);
        return true;
      },
    );
  });

  it("throws on 5xx errors with generic message", async () => {
    const client = new RemarqClient(BASE);
    await assert.rejects(
      () => client.request("GET", "/server-error"),
      (err) => {
        assert.equal(err.message, "HTTP 500");
        assert.equal(err.status, 500);
        return true;
      },
    );
  });

  it("throws on connection error", async () => {
    const client = new RemarqClient("http://127.0.0.1:1");
    await assert.rejects(() => client.request("GET", "/health"));
  });

  it("strips trailing slash from base URL", async () => {
    const client = new RemarqClient(BASE + "/");
    const result = await client.request("GET", "/health");
    assert.equal(result.status, 200);
  });
});
