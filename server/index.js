#!/usr/bin/env node
const http = require("http");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { WebSocketServer } = require("ws");
const { normalizeUri } = require("./normalize-uri.js");
const { sanitize } = require("./sanitize.js");
const { validateColor } = require("./validate-color.js");
const { PRESET_NAMES } = require("./color-constants.js");
const { ALLOWED_REACTION_EMOJIS } = require("./emoji-constants.js");
const { triggerEvent } = require("./webhooks.js");
const { registerWebhookRoutes } = require("./webhook-routes.js");
const { createDatabaseAdapter } = require("./db/index.js");
const path = require("path");
const openApiSpec = require("./openapi.js");

const app = express();
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : ["http://localhost:3333"];
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  }),
);
app.use(express.json());

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres@localhost/postgres";
const db = createDatabaseAdapter({ connectionString: DATABASE_URL });
const pool = db.pool;
const initSchema = () => db.initSchema();

// Express 4 does not catch rejected promises from async handlers.
// Wrap them so unhandled rejections become proper error responses.
const asyncHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);

// ── Response helpers ────────────────────────────────────────────────

function formatDocument(row) {
  return {
    id: row.id,
    object: "document",
    uri: row.uri,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  };
}

function formatComment(row) {
  return {
    id: row.id,
    object: "comment",
    document: row.document,
    quote: row.quote || null,
    prefix: row.prefix || null,
    suffix: row.suffix || null,
    body: row.body,
    author: row.author,
    status: row.parent ? null : row.status,
    parent: row.parent || null,
    color: row.color || null,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  };
}

function listResponse(items) {
  return { object: "list", data: items };
}

function errorResponse(msg) {
  return { error: { message: msg } };
}

// ── OpenAPI spec ─────────────────────────────────────────────────────

app.get("/openapi.json", (_req, res) => {
  res.set("Cache-Control", "public, max-age=3600");
  res.json(openApiSpec);
});

// ── Health check ────────────────────────────────────────────────────

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ── Document endpoints ──────────────────────────────────────────────

app.get(
  "/documents",
  asyncHandler(async (_req, res) => {
    const rows = await db.listDocuments();
    res.json(listResponse(rows.map(formatDocument)));
  }),
);

app.post(
  "/documents",
  asyncHandler(async (req, res) => {
    const { uri } = req.body;
    if (!uri) return res.status(400).json(errorResponse("uri is required"));

    try {
      const { doc, created } = await db.findOrCreateDocument(normalizeUri(uri));
      res.status(created ? 201 : 200).json(formatDocument(doc));
    } catch (err) {
      res.status(400).json(errorResponse(err.message));
    }
  }),
);

app.get(
  "/documents/:id",
  asyncHandler(async (req, res) => {
    const document = await db.getDocumentById(req.params.id);
    if (!document) return res.status(404).json(errorResponse("Document not found"));
    res.json(formatDocument(document));
  }),
);

app.delete(
  "/documents/:id",
  asyncHandler(async (req, res) => {
    const document = await db.deleteDocument(req.params.id);
    if (!document) return res.status(404).json(errorResponse("Document not found"));
    res.json(formatDocument(document));
  }),
);

// ── Comment endpoints ───────────────────────────────────────────────

app.get(
  "/comments",
  asyncHandler(async (req, res) => {
    const { document: docId, uri, status, expand } = req.query;

    if (status !== undefined && status !== "open" && status !== "closed") {
      return res.status(400).json(errorResponse('status must be "open" or "closed"'));
    }

    let resolvedDocId;

    if (docId) {
      resolvedDocId = docId;
    } else if (uri) {
      let lookupUri;
      try {
        lookupUri = normalizeUri(uri);
      } catch {
        lookupUri = uri;
      }
      const document = await db.getDocumentByUri(lookupUri);
      if (!document) return res.json(listResponse([]));
      resolvedDocId = document.id;
    }

    const rows = await db.listComments({ documentId: resolvedDocId, status });

    let data = rows.map(formatComment);

    const reactionsMap = await db.getReactionsByCommentIds(data.map((comment) => comment.id));
    data = data.map((comment) => ({ ...comment, reactions: reactionsMap.get(comment.id) || [] }));

    if (expand === "document") {
      const docIds = [...new Set(data.map((comment) => comment.document))];
      if (docIds.length > 0) {
        const documents = await db.getDocumentsByIds(docIds);
        const docMap = Object.fromEntries(documents.map((document) => [document.id, formatDocument(document)]));
        data = data.map((comment) => ({ ...comment, document: docMap[comment.document] || comment.document }));
      }
    }

    res.json(listResponse(data));
  }),
);

app.post(
  "/comments",
  asyncHandler(async (req, res) => {
    const { uri, document: docId, quote, prefix, suffix, body, author, parent, color } = req.body;

    if (!body || !author) {
      return res.status(400).json(errorResponse("body and author are required"));
    }
    if (!parent && !quote) {
      return res.status(400).json(errorResponse("quote is required for top-level comments"));
    }
    if (!uri && !docId) {
      return res.status(400).json(errorResponse("uri or document is required"));
    }

    let validatedColor = null;
    if (color !== undefined && color !== null) {
      validatedColor = validateColor(color);
      if (!validatedColor) {
        return res
          .status(400)
          .json(
            errorResponse(`color must be a valid hex code (e.g. #ff6b6b) or preset name (${PRESET_NAMES.join(", ")})`),
          );
      }
    }

    const cleanBody = sanitize(body);
    const cleanAuthor = sanitize(author);

    let documentId;
    try {
      if (docId) {
        const document = await db.getDocumentById(docId);
        if (!document) return res.status(404).json(errorResponse("Document not found"));
        documentId = document.id;
      } else {
        const { doc } = await db.findOrCreateDocument(normalizeUri(uri));
        documentId = doc.id;
      }
    } catch (err) {
      return res.status(400).json(errorResponse(err.message));
    }

    const comment = await db.createComment({
      document: documentId,
      quote: quote || "",
      prefix: prefix || null,
      suffix: suffix || null,
      body: cleanBody,
      author: cleanAuthor,
      status: parent ? null : "open",
      parent: parent || null,
      color: validatedColor,
    });

    const formatted = formatComment(comment);
    triggerEvent(db, "comment.created", { comment: formatted });
    res.status(201).json(formatted);
    broadcast(documentId, { type: "comment:created", comment: formatted });
  }),
);

app.get(
  "/comments/:id",
  asyncHandler(async (req, res) => {
    const row = await db.getCommentById(req.params.id);
    if (!row) return res.status(404).json(errorResponse("Comment not found"));

    let comment = formatComment(row);
    const reactionsMap = await db.getReactionsByCommentIds([comment.id]);
    comment = { ...comment, reactions: reactionsMap.get(comment.id) || [] };

    if (req.query.expand === "document") {
      const document = await db.getDocumentById(comment.document);
      if (document) comment = { ...comment, document: formatDocument(document) };
    }

    res.json(comment);
  }),
);

app.patch(
  "/comments/:id",
  asyncHandler(async (req, res) => {
    const existing = await db.getCommentById(req.params.id);
    if (!existing) return res.status(404).json(errorResponse("Comment not found"));

    const { body, status, color } = req.body;

    if (status !== undefined && existing.parent) {
      return res.status(400).json(errorResponse("status cannot be set on replies"));
    }

    if (status !== undefined && status !== "open" && status !== "closed") {
      return res.status(400).json(errorResponse('status must be "open" or "closed"'));
    }

    if (color !== undefined) {
      if (color === null) {
        await db.setCommentColor(req.params.id, null);
      } else {
        const validatedColor = validateColor(color);
        if (!validatedColor) {
          return res
            .status(400)
            .json(
              errorResponse(
                `color must be a valid hex code (e.g. #ff6b6b) or preset name (${PRESET_NAMES.join(", ")})`,
              ),
            );
        }
        await db.setCommentColor(req.params.id, validatedColor);
      }
    }

    if (body !== undefined) {
      await db.setCommentBody(req.params.id, sanitize(body));
    }
    if (status !== undefined) {
      await db.setCommentStatus(req.params.id, status);
    }

    const updated = await db.getCommentById(req.params.id);
    const formatted = formatComment(updated);
    if (status === "closed") {
      triggerEvent(db, "comment.resolved", { comment: formatted });
    }
    res.json(formatted);
    broadcast(formatted.document, { type: "comment:updated", comment: formatted });
  }),
);

app.delete(
  "/comments/:id",
  asyncHandler(async (req, res) => {
    const deleted = await db.deleteComment(req.params.id);
    if (!deleted) return res.status(404).json(errorResponse("Comment not found"));
    const formatted = formatComment(deleted);
    triggerEvent(db, "comment.deleted", { comment: formatted });
    res.json(formatted);
    broadcast(formatted.document, { type: "comment:deleted", comment: formatted });
  }),
);

// ── Reaction endpoints ───────────────────────────────────────────────

app.post(
  "/comments/:id/reactions",
  asyncHandler(async (req, res) => {
    const { emoji, author } = req.body;
    if (!emoji || !author) {
      return res.status(400).json(errorResponse("emoji and author are required"));
    }
    if (typeof emoji !== "string" || emoji.length === 0 || emoji.length > 32) {
      return res.status(400).json(errorResponse("invalid emoji"));
    }
    if (!ALLOWED_REACTION_EMOJIS.includes(emoji)) {
      return res.status(400).json(errorResponse(`emoji not allowed. Allowed: ${ALLOWED_REACTION_EMOJIS.join(" ")}`));
    }

    const cleanAuthor = sanitize(author);

    if (!(await db.commentExists(req.params.id))) {
      return res.status(404).json(errorResponse("Comment not found"));
    }

    await db.addReaction(req.params.id, cleanAuthor, emoji);

    const reactionsMap = await db.getReactionsByCommentIds([req.params.id]);
    res.status(201).json({ comment_id: req.params.id, reactions: reactionsMap.get(req.params.id) || [] });
  }),
);

app.delete(
  "/comments/:id/reactions/:emoji",
  asyncHandler(async (req, res) => {
    const { author } = req.query;
    if (!author) {
      return res.status(400).json(errorResponse("author query parameter is required"));
    }

    const emoji = req.params.emoji;
    if (typeof emoji !== "string" || emoji.length === 0 || emoji.length > 32) {
      return res.status(400).json(errorResponse("invalid emoji"));
    }

    const cleanAuthor = sanitize(author);

    if (!(await db.commentExists(req.params.id))) {
      return res.status(404).json(errorResponse("Comment not found"));
    }

    await db.removeReaction(req.params.id, cleanAuthor, emoji);

    const reactionsMap = await db.getReactionsByCommentIds([req.params.id]);
    res.json({ comment_id: req.params.id, reactions: reactionsMap.get(req.params.id) || [] });
  }),
);

// ── Webhook endpoints ───────────────────────────────────────────────

registerWebhookRoutes(app, db, asyncHandler);

// ── Static files ────────────────────────────────────────────────────

app.use(express.static(path.join(__dirname, "serve")));

// ── Error handling ──────────────────────────────────────────────────

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: { message: "Internal server error" } });
});

// ── WebSocket ───────────────────────────────────────────────────────

// documentId → Set<WebSocket>
const subscriptions = new Map();

function broadcast(documentId, event) {
  const clients = subscriptions.get(documentId);
  if (!clients) return;
  const message = JSON.stringify(event);
  for (const ws of clients) {
    if (ws.readyState === 1) {
      // WebSocket.OPEN
      try {
        ws.send(message);
      } catch (err) {
        console.error("[ws] Failed to send to client:", err);
        ws.close();
      }
    }
  }
}

const SUBSCRIBE_TIMEOUT_MS = 30000; // Close connections that never subscribe

function handleWsConnection(ws) {
  const subscribedDocs = new Set();

  // Close the connection if the client never subscribes
  const subscribeTimer = setTimeout(() => {
    if (subscribedDocs.size === 0) {
      ws.close(4001, "No subscription received");
    }
  }, SUBSCRIBE_TIMEOUT_MS);
  subscribeTimer.unref(); // Don't block process exit

  ws.on("message", (data) => {
    let msg;
    try {
      msg = JSON.parse(data);
    } catch {
      return;
    }

    if (msg.type === "subscribe" && msg.documentId) {
      db.getDocumentById(msg.documentId)
        .then((document) => {
          if (ws.readyState !== 1) return;

          if (!document) {
            ws.send(
              JSON.stringify({
                type: "error",
                message: "Document not found",
                documentId: msg.documentId,
              }),
            );
            return;
          }

          subscribedDocs.add(msg.documentId);
          if (!subscriptions.has(msg.documentId)) {
            subscriptions.set(msg.documentId, new Set());
          }
          subscriptions.get(msg.documentId).add(ws);

          try {
            ws.send(JSON.stringify({ type: "subscribed", documentId: msg.documentId }));
          } catch (err) {
            console.error("[ws] Failed to send subscription ack:", err);
            ws.close();
          }
        })
        .catch(() => {
          if (ws.readyState === 1) {
            ws.send(JSON.stringify({ type: "error", message: "Subscription failed" }));
          }
        });
    }
  });

  ws.on("error", (err) => {
    console.error("[ws] WebSocket error:", err);
  });

  ws.on("close", () => {
    clearTimeout(subscribeTimer);
    for (const docId of subscribedDocs) {
      const clients = subscriptions.get(docId);
      if (clients) {
        clients.delete(ws);
        if (clients.size === 0) subscriptions.delete(docId);
      }
    }
  });
}

// ── Start server ────────────────────────────────────────────────────

async function start(options = {}) {
  const port = options.port !== undefined ? options.port : process.env.PORT || 3333;
  const host = options.host || "0.0.0.0";
  await initSchema();

  const server = http.createServer(app);
  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (req, socket, head) => {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);
    if (pathname === "/ws") {
      wss.handleUpgrade(req, socket, head, (ws) => {
        handleWsConnection(ws);
      });
    } else {
      socket.destroy();
    }
  });

  // Graceful shutdown: terminate all WebSocket clients before stopping
  server.on("close", () => {
    for (const ws of wss.clients) {
      ws.terminate();
    }
    wss.close();
  });

  return new Promise((resolve) => {
    server.listen(port, host, () => {
      console.log(`Remarq server listening on http://localhost:${port}`);
      resolve(server);
    });
  });
}

if (require.main === module) {
  start().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { start, app, pool, initSchema };
