import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { createRemarqClient } from "../src/remarq-client.js";

describe("remarq-client", () => {
  let mockServer;
  let port;
  let lastRequest;
  let mockResponse;

  before(async () => {
    mockServer = createServer(async (req, res) => {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const body = Buffer.concat(chunks).toString();

      lastRequest = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: body ? JSON.parse(body) : null,
      };

      const { status, data } = mockResponse;
      res.writeHead(status, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });

    await new Promise((resolve) => {
      mockServer.listen(0, () => {
        port = mockServer.address().port;
        resolve();
      });
    });
  });

  after(() => {
    mockServer.close();
  });

  beforeEach(() => {
    lastRequest = null;
    mockResponse = { status: 200, data: {} };
  });

  it("fetches open comments for a document with correct query params", async () => {
    const comments = [{ id: "cmt_1", body: "Fix this", author: "Alice", status: "open" }];
    mockResponse = { status: 200, data: { data: comments } };

    const client = createRemarqClient(`http://127.0.0.1:${port}`);
    const result = await client.getOpenComments("doc_123");

    assert.equal(lastRequest.method, "GET");
    assert.ok(lastRequest.url.includes("document=doc_123"));
    assert.ok(lastRequest.url.includes("status=open"));
    assert.deepEqual(result, comments);
  });

  it("creates a reply comment with correct parent and author", async () => {
    const created = { id: "cmt_reply1" };
    mockResponse = { status: 200, data: created };

    const client = createRemarqClient(`http://127.0.0.1:${port}`);
    await client.createComment({
      document: "doc_123",
      body: "I fixed it",
      author: "Agent",
      parent: "cmt_1",
    });

    assert.equal(lastRequest.method, "POST");
    assert.ok(lastRequest.url.includes("/comments"));
    assert.equal(lastRequest.body.document, "doc_123");
    assert.equal(lastRequest.body.body, "I fixed it");
    assert.equal(lastRequest.body.author, "Agent");
    assert.equal(lastRequest.body.parent, "cmt_1");
  });

  it("resolves a comment by patching status to closed", async () => {
    mockResponse = { status: 200, data: { id: "cmt_1", status: "closed" } };

    const client = createRemarqClient(`http://127.0.0.1:${port}`);
    await client.resolveComment("cmt_1");

    assert.equal(lastRequest.method, "PATCH");
    assert.ok(lastRequest.url.includes("/comments/cmt_1"));
    assert.equal(lastRequest.body.status, "closed");
  });

  it("throws on non-2xx responses with error message", async () => {
    mockResponse = { status: 404, data: { error: { message: "Document not found" } } };

    const client = createRemarqClient(`http://127.0.0.1:${port}`);
    await assert.rejects(
      () => client.getOpenComments("doc_nonexistent"),
      (err) => {
        assert.ok(err.message.includes("404"));
        return true;
      },
    );
  });

  it("aborts requests after configured timeout", async () => {
    // Create a server that never responds
    const slowServer = createServer(() => {
      // intentionally never respond
    });
    await new Promise((resolve) => slowServer.listen(0, resolve));
    const slowPort = slowServer.address().port;

    const client = createRemarqClient(`http://127.0.0.1:${slowPort}`, { timeoutMs: 50 });
    await assert.rejects(
      () => client.getOpenComments("doc_123"),
      (err) => {
        assert.ok(
          err.name === "TimeoutError" || err.name === "AbortError" || err.message.includes("abort"),
          `Expected timeout/abort error, got: ${err.name} - ${err.message}`,
        );
        return true;
      },
    );

    slowServer.close();
  });
});
