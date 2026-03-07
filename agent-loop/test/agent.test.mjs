import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { createAgent } from "../src/agent.js";

function makeComment(overrides = {}) {
  return {
    id: "cmt_abc123",
    document: "doc_xyz",
    quote: "some text",
    prefix: "before ",
    suffix: " after",
    body: "Please fix this",
    author: "Human",
    status: "open",
    parent: null,
    ...overrides,
  };
}

describe("agent", () => {
  let remarqCalls;
  let claudeCalls;
  let logMessages;
  let mockRemarqClient;
  let mockClaudeCall;

  beforeEach(() => {
    remarqCalls = [];
    claudeCalls = [];
    logMessages = [];

    mockRemarqClient = {
      async getOpenComments(docId) {
        remarqCalls.push({ method: "getOpenComments", docId });
        return [{ id: "cmt_other", quote: "other", body: "Other comment", author: "Bob", parent: null }];
      },
      async createComment(data) {
        remarqCalls.push({ method: "createComment", data });
        return { id: "cmt_reply1" };
      },
      async resolveComment(commentId) {
        remarqCalls.push({ method: "resolveComment", commentId });
        return { id: commentId, status: "closed" };
      },
    };

    mockClaudeCall = async (_prompt) => {
      claudeCalls.push(_prompt);
      return "Here is my suggested revision.";
    };
  });

  function makeAgent(overrides = {}) {
    return createAgent({
      remarqClient: mockRemarqClient,
      callClaude: mockClaudeCall,
      agentAuthor: "Remarq Agent",
      log: (level, msg) => logMessages.push({ level, msg }),
      ...overrides,
    });
  }

  it("skips processing when comment author matches AGENT_AUTHOR", async () => {
    const agent = makeAgent();
    await agent.processComment(makeComment({ author: "Remarq Agent" }));

    assert.equal(remarqCalls.length, 0);
    assert.equal(claudeCalls.length, 0);
    assert.ok(logMessages.some((m) => m.msg.includes("self-loop")));
  });

  it("skips processing when comment has a parent (is a reply)", async () => {
    const agent = makeAgent();
    await agent.processComment(makeComment({ parent: "cmt_parent1" }));

    assert.equal(remarqCalls.length, 0);
    assert.equal(claudeCalls.length, 0);
  });

  it("skips processing when comment status is closed (idempotency)", async () => {
    const agent = makeAgent();
    await agent.processComment(makeComment({ status: "closed" }));

    assert.equal(remarqCalls.length, 0);
    assert.equal(claudeCalls.length, 0);
    assert.ok(logMessages.some((m) => m.msg.includes("already closed")));
  });

  it("fetches open comments from Remarq API for the document", async () => {
    const agent = makeAgent();
    await agent.processComment(makeComment());

    const fetchCall = remarqCalls.find((c) => c.method === "getOpenComments");
    assert.ok(fetchCall);
    assert.equal(fetchCall.docId, "doc_xyz");
  });

  it("calls Claude API with prompt built from comment context", async () => {
    const agent = makeAgent();
    await agent.processComment(makeComment());

    assert.equal(claudeCalls.length, 1);
    const prompt = claudeCalls[0];
    assert.ok(prompt.includes("some text"));
    assert.ok(prompt.includes("Please fix this"));
    assert.ok(prompt.includes("Human"));
  });

  it("posts reply comment to Remarq with agent response", async () => {
    const agent = makeAgent();
    await agent.processComment(makeComment());

    const createCall = remarqCalls.find((c) => c.method === "createComment");
    assert.ok(createCall);
    assert.equal(createCall.data.parent, "cmt_abc123");
    assert.equal(createCall.data.author, "Remarq Agent");
    assert.equal(createCall.data.body, "Here is my suggested revision.");
    assert.equal(createCall.data.document, "doc_xyz");
  });

  it("resolves original comment after posting reply", async () => {
    const agent = makeAgent();
    await agent.processComment(makeComment());

    const resolveCall = remarqCalls.find((c) => c.method === "resolveComment");
    assert.ok(resolveCall);
    assert.equal(resolveCall.commentId, "cmt_abc123");
  });

  it("logs error and does not post reply when Remarq API fails", async () => {
    const agent = makeAgent({
      remarqClient: {
        ...mockRemarqClient,
        async getOpenComments() {
          throw new Error("Connection refused");
        },
      },
    });
    await agent.processComment(makeComment());

    assert.equal(claudeCalls.length, 0);
    assert.ok(logMessages.some((m) => m.level === "error" && m.msg.includes("Connection refused")));
  });

  it("logs error and does not post reply when Claude API fails", async () => {
    let claudeCalled = false;
    const agent = makeAgent({
      callClaude: async () => {
        claudeCalled = true;
        throw new Error("Rate limited");
      },
    });
    await agent.processComment(makeComment());

    assert.ok(claudeCalled, "Claude API should have been called");
    // Should not have tried to create a comment or resolve
    const createCall = remarqCalls.find((c) => c.method === "createComment");
    assert.equal(createCall, undefined);
    assert.ok(logMessages.some((m) => m.level === "error" && m.msg.includes("Rate limited")));
  });
});
