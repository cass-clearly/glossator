import { createServer } from "node:http";
import crypto from "node:crypto";
import { createAgent } from "./agent.js";
import { createRemarqClient } from "./remarq-client.js";

const REMARQ_URL = process.env.REMARQ_URL || "http://localhost:3333";
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const AGENT_AUTHOR = process.env.AGENT_AUTHOR || "Remarq Agent";
const PORT = Number(process.env.PORT) || 4000;
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-4-20250514";
const CLAUDE_TIMEOUT_MS = 60000;

// Intentional duplication of server/webhooks.js signPayload — agent-loop is a
// standalone reference impl meant to be copied, so it avoids cross-module imports.
function signPayload(secret, body) {
  return crypto.createHmac("sha256", secret).update(body).digest("hex");
}

const MAX_BODY_BYTES = 1024 * 1024; // 1 MB

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        req.destroy();
        reject(new Error("Request body too large"));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString()));
    req.on("error", reject);
    req.on("close", () => {
      if (!req.complete) reject(new Error("Request aborted"));
    });
  });
}

function json(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

export function createApp(agent) {
  return createServer(async (req, res) => {
    // Health endpoint
    if (req.method === "GET" && req.url === "/health") {
      return json(res, 200, { status: "ok", remarqUrl: REMARQ_URL });
    }

    // Webhook endpoint
    if (req.method === "POST" && req.url === "/webhook") {
      const signature = req.headers["x-remarq-signature"];
      if (!signature) {
        return json(res, 401, { error: "Missing signature" });
      }

      let body;
      try {
        body = await readBody(req);
      } catch {
        return json(res, 413, { error: "Request body too large" });
      }
      const expected = signPayload(WEBHOOK_SECRET, body);
      const sigBuf = Buffer.from(signature, "hex");
      const expectedBuf = Buffer.from(expected, "hex");
      if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
        return json(res, 401, { error: "Invalid signature" });
      }

      let payload;
      try {
        payload = JSON.parse(body);
      } catch {
        return json(res, 400, { error: "Invalid JSON" });
      }

      const comment = payload.data?.comment;
      if (!comment) {
        return json(res, 400, { error: "Missing comment in payload" });
      }

      // Return 200 immediately, process async
      json(res, 200, { ok: true });

      // Fire and forget — .catch() handles async errors without blocking the response
      agent.processComment(comment).catch((err) => {
        console.error(`[agent-loop] Error processing comment ${comment.id}:`, err.message);
      });
      return;
    }

    json(res, 404, { error: "Not found" });
  });
}

// Start server when run directly
const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/"));
if (isMain) {
  if (!WEBHOOK_SECRET) {
    console.error("[agent-loop] WEBHOOK_SECRET is required");
    process.exit(1);
  }
  if (!ANTHROPIC_API_KEY) {
    console.error("[agent-loop] ANTHROPIC_API_KEY is required");
    process.exit(1);
  }

  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  const remarqClient = createRemarqClient(REMARQ_URL);
  const agent = createAgent({
    remarqClient,
    agentAuthor: AGENT_AUTHOR,
    log(level, msg) {
      const fn = level === "error" ? console.error : level === "warn" ? console.warn : console.log;
      fn(`[agent-loop] ${msg}`);
    },
    async callClaude(prompt) {
      const message = await anthropic.messages.create({
        model: CLAUDE_MODEL,
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
        signal: AbortSignal.timeout(CLAUDE_TIMEOUT_MS),
      });
      return message.content[0].text;
    },
  });

  const app = createApp(agent);
  app.listen(PORT, () => {
    console.log(`[agent-loop] Listening on port ${PORT}`);
    console.log(`[agent-loop] Remarq URL: ${REMARQ_URL}`);
  });
}
