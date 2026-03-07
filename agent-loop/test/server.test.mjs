import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";

const SECRET = "test-webhook-secret";

function sign(body) {
  return crypto.createHmac("sha256", SECRET).update(body).digest("hex");
}

function makePayload(overrides = {}) {
  return {
    event: "comment.created",
    created_at: new Date().toISOString(),
    data: {
      comment: {
        id: "cmt_abc123",
        document: "doc_xyz",
        quote: "some text",
        body: "Please fix this",
        author: "Human",
        status: "open",
        parent: null,
        ...overrides,
      },
    },
  };
}

async function request(port, { method = "POST", path = "/webhook", body, headers = {} } = {}) {
  const url = `http://127.0.0.1:${port}${path}`;
  const opts = { method, headers: { "Content-Type": "application/json", ...headers } };
  if (body) opts.body = typeof body === "string" ? body : JSON.stringify(body);
  return fetch(url, opts);
}

describe("server", () => {
  let server;
  let port;
  let processedComments;

  before(async () => {
    // Set required env vars before importing
    process.env.WEBHOOK_SECRET = SECRET;
    process.env.REMARQ_URL = "http://localhost:3333";
    process.env.PORT = "0"; // random port

    // Stub agent.processComment to capture calls
    processedComments = [];
    const { createApp } = await import("../src/server.js");
    const app = createApp({
      processComment(comment) {
        processedComments.push(comment);
      },
    });
    server = app;
    await new Promise((resolve) => {
      server.listen(0, () => {
        port = server.address().port;
        resolve();
      });
    });
  });

  after(() => {
    server.close();
  });

  beforeEach(() => {
    processedComments.length = 0;
  });

  it("returns 401 when X-Remarq-Signature header is missing", async () => {
    const payload = makePayload();
    const res = await request(port, { body: payload });
    assert.equal(res.status, 401);
    const json = await res.json();
    assert.equal(json.error, "Missing signature");
  });

  it("returns 401 when signature does not match payload", async () => {
    const payload = makePayload();
    const body = JSON.stringify(payload);
    const res = await request(port, {
      body,
      headers: { "X-Remarq-Signature": "bad-signature" },
    });
    assert.equal(res.status, 401);
    const json = await res.json();
    assert.equal(json.error, "Invalid signature");
  });

  it("returns 200 and calls agent when signature is valid", async () => {
    const payload = makePayload();
    const body = JSON.stringify(payload);
    const res = await request(port, {
      body,
      headers: { "X-Remarq-Signature": sign(body) },
    });
    assert.equal(res.status, 200);
    const json = await res.json();
    assert.equal(json.ok, true);
    // Agent should have been called with the comment
    assert.equal(processedComments.length, 1);
    assert.equal(processedComments[0].id, "cmt_abc123");
  });

  it("returns 400 when payload has no data.comment", async () => {
    const payload = { event: "comment.created", data: {} };
    const body = JSON.stringify(payload);
    const res = await request(port, {
      body,
      headers: { "X-Remarq-Signature": sign(body) },
    });
    assert.equal(res.status, 400);
    const json = await res.json();
    assert.equal(json.error, "Missing comment in payload");
  });

  it("returns 200 for GET /health with status ok", async () => {
    const res = await request(port, { method: "GET", path: "/health" });
    assert.equal(res.status, 200);
    const json = await res.json();
    assert.equal(json.status, "ok");
    assert.equal(json.remarqUrl, "http://localhost:3333");
  });
});
