import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

describe("fetchSpec", async () => {
  const { fetchSpec } = await import("../src/spec-loader.js");
  let server, BASE;

  const VALID_SPEC = {
    openapi: "3.0.3",
    info: { title: "Test API", version: "1.0.0" },
    paths: {
      "/health": {
        get: {
          operationId: "getHealth",
          "x-cli": { group: null, command: "health" },
          responses: {},
        },
      },
    },
  };

  before(async () => {
    server = http.createServer((req, res) => {
      if (req.url === "/openapi.json") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(VALID_SPEC));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: { message: "Not found" } }));
      }
    });

    await new Promise((resolve) => {
      server.listen(0, "127.0.0.1", () => {
        BASE = `http://127.0.0.1:${server.address().port}`;
        resolve();
      });
    });
  });

  after(() => server.close());

  it("fetches and returns the spec", async () => {
    const spec = await fetchSpec(BASE);
    assert.equal(spec.openapi, "3.0.3");
    assert.equal(spec.info.title, "Test API");
    assert.ok(spec.paths["/health"]);
  });

  it("throws on connection error", async () => {
    await assert.rejects(
      () => fetchSpec("http://127.0.0.1:1"),
      (err) => err instanceof Error
    );
  });

  it("throws when response lacks openapi field", async () => {
    let badServer;
    const badBase = await new Promise((resolve) => {
      badServer = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ not: "a spec" }));
      });
      badServer.listen(0, "127.0.0.1", () => {
        resolve(`http://127.0.0.1:${badServer.address().port}`);
      });
    });

    try {
      await assert.rejects(
        () => fetchSpec(badBase),
        (err) => err.message.includes("Invalid OpenAPI spec")
      );
    } finally {
      badServer.close();
    }
  });
});
