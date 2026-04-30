#!/usr/bin/env node
const http = require("http");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { Pool } = require("pg");
const { WebSocketServer } = require("ws");
const { insertWithId } = require("./generate-id.js");
const { normalizeUri } = require("./normalize-uri.js");
const { sanitize } = require("./sanitize.js");
const { validateColor } = require("./validate-color.js");
const { PRESET_NAMES } = require("./color-constants.js");
const { ALLOWED_REACTION_EMOJIS } = require("./emoji-constants.js");
const { triggerEvent } = require("./webhooks.js");
const { registerWebhookRoutes } = require("./webhook-routes.js");
const path = require("path");
const openApiSpec = require("./openapi.js");
const { ensureUsersTable, requirePermission, resolveUser, setUserRole } = require("./authz.js");

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
const pool = new Pool({ connectionString: DATABASE_URL });

// Express 4 does not catch rejected promises from async handlers.
// Wrap them so unhandled rejections become proper error responses.
const asyncHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);

async function initSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS documents (
      id         TEXT PRIMARY KEY,
      uri        TEXT NOT NULL UNIQUE,
      object     TEXT NOT NULL DEFAULT 'document',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS comments (
      id         TEXT PRIMARY KEY,
      object     TEXT NOT NULL DEFAULT 'comment',
      document   TEXT NOT NULL REFERENCES documents(id),
      quote      TEXT NOT NULL DEFAULT '',
      prefix     TEXT,
      suffix     TEXT,
      body       TEXT NOT NULL,
      author     TEXT NOT NULL,
      status     TEXT NOT NULL DEFAULT 'open',
      parent     TEXT REFERENCES comments(id),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await ensureUsersTable(pool);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS reactions (
      comment_id TEXT NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
      author     TEXT NOT NULL,
      emoji      TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (comment_id, author, emoji)
    )
  `);

  // Allow NULL status for replies (idempotent)
  await pool.query(`ALTER TABLE comments ALTER COLUMN status DROP NOT NULL`);
  await pool.query(`UPDATE comments SET status = NULL WHERE parent IS NOT NULL AND status IS NOT NULL`);
  // Add color column with CHECK constraint (idempotent)
  await pool.query(`ALTER TABLE comments ADD COLUMN IF NOT EXISTS color TEXT`);
  await pool.query(`ALTER TABLE comments DROP CONSTRAINT IF EXISTS comments_color_check`);
  await pool.query(
    `ALTER TABLE comments ADD CONSTRAINT comments_color_check CHECK (color IS NULL OR color IN (${PRESET_NAMES.map((n) => `'${n}'`).join(", ")}) OR color ~ '^#[0-9a-fA-F]{6}$')`,
  );

  await pool.query(`
    CREATE TABLE IF NOT EXISTS webhooks (
      id         TEXT PRIMARY KEY,
      url        TEXT NOT NULL UNIQUE,
      secret     TEXT NOT NULL,
      events     TEXT[] NOT NULL DEFAULT '{}',
      active     BOOLEAN NOT NULL DEFAULT true,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id         TEXT PRIMARY KEY,
      email      TEXT NOT NULL,
      source     TEXT NOT NULL DEFAULT 'unknown',
      path       TEXT,
      referrer   TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE (email, source)
    )
  `);
  // Add unique constraint on url if not already present (idempotent)
  try {
    await pool.query(`ALTER TABLE webhooks ADD CONSTRAINT webhooks_url_key UNIQUE (url)`);
  } catch (e) {
    // 42P07 = relation already exists (constraint already added), 23505 = duplicate key (existing data violates)
    if (e.code !== "42P07" && e.code !== "23505") throw e;
  }
}

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

function normalizeEmail(email) {
  if (typeof email !== "string") return null;
  const normalized = email.trim().toLowerCase();
  if (normalized.length > 254) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return null;
  return normalized;
}

function cleanLeadString(value, maxLength = 500) {
  if (typeof value !== "string") return null;
  const cleaned = value.trim();
  if (!cleaned) return null;
  return cleaned.slice(0, maxLength);
}

function formatLead(row) {
  return {
    id: row.id,
    object: "lead",
    email: row.email,
    source: row.source,
    path: row.path || null,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
    updated_at: row.updated_at instanceof Date ? row.updated_at.toISOString() : row.updated_at,
  };
}

/**
 * Fetch reactions for a set of comment IDs and return a Map of commentId → reactions array.
 * Each reaction entry: { emoji, count, authors: [...] }
 */
async function fetchReactionsForComments(commentIds) {
  const map = new Map();
  if (commentIds.length === 0) return map;
  const { rows } = await pool.query(
    "SELECT comment_id, emoji, author FROM reactions WHERE comment_id = ANY($1) ORDER BY emoji, created_at ASC",
    [commentIds],
  );
  for (const row of rows) {
    if (!map.has(row.comment_id)) map.set(row.comment_id, new Map());
    const emojiMap = map.get(row.comment_id);
    if (!emojiMap.has(row.emoji)) emojiMap.set(row.emoji, []);
    emojiMap.get(row.emoji).push(row.author);
  }
  // Convert to the final format
  const result = new Map();
  for (const [commentId, emojiMap] of map) {
    const reactions = [];
    for (const [emoji, authors] of emojiMap) {
      reactions.push({ emoji, count: authors.length, authors });
    }
    result.set(commentId, reactions);
  }
  return result;
}

// ── Helper: find or create document by URI ──────────────────────────

async function findOrCreateDocument(uri) {
  const normalized = normalizeUri(uri);
  const { rows } = await pool.query("SELECT * FROM documents WHERE uri = $1", [normalized]);
  if (rows.length > 0) return { doc: rows[0], created: false };

  try {
    const doc = await insertWithId("doc", async (id) => {
      const { rows } = await pool.query("INSERT INTO documents (id, uri) VALUES ($1, $2) RETURNING *", [
        id,
        normalized,
      ]);
      return rows[0];
    });
    return { doc, created: true };
  } catch (err) {
    // Lost the race — another request created the document concurrently
    if (err.code === "23505") {
      const { rows } = await pool.query("SELECT * FROM documents WHERE uri = $1", [normalized]);
      if (rows.length > 0) return { doc: rows[0], created: false };
    }
    throw err;
  }
}

// ── RBAC context ──────────────────────────────────────────────────────

app.use(
  asyncHandler(async (req, _res, next) => {
    const user = await resolveUser(pool, req);
    // eslint-disable-next-line require-atomic-updates -- middleware owns req.user for downstream handlers.
    req.user = user;
    next();
  }),
);

app.get("/me/permissions", (req, res) => {
  res.json({ object: "user", id: req.user.id, role: req.user.role, permissions: req.user.permissions });
});

app.put(
  "/users/:id/role",
  requirePermission("users:manage"),
  asyncHandler(async (req, res) => {
    try {
      const user = await setUserRole(pool, req.params.id, req.body.role);
      res.json({ object: "user", id: user.id, role: user.role });
    } catch (err) {
      res.status(err.status || 500).json(errorResponse(err.message));
    }
  }),
);

// ── OpenAPI spec ─────────────────────────────────────────────────────

app.get("/openapi.json", (_req, res) => {
  res.set("Cache-Control", "public, max-age=3600");
  res.json(openApiSpec);
});

// ── Health check ────────────────────────────────────────────────────

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ── Lead capture endpoints ──────────────────────────────────────────

app.post(
  "/leads",
  asyncHandler(async (req, res) => {
    const email = normalizeEmail(req.body.email);
    if (!email) return res.status(400).json(errorResponse("valid email is required"));

    const source = cleanLeadString(req.body.source, 120) || "unknown";
    const leadPath = cleanLeadString(req.body.path, 500);
    const referrer = cleanLeadString(req.body.referrer, 500);
    const userAgent = cleanLeadString(req.get("user-agent"), 500);

    const lead = await insertWithId("lead", async (id) => {
      const { rows } = await pool.query(
        `INSERT INTO leads (id, email, source, path, referrer, user_agent)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (email, source)
         DO UPDATE SET
           path = COALESCE(EXCLUDED.path, leads.path),
           referrer = COALESCE(EXCLUDED.referrer, leads.referrer),
           user_agent = COALESCE(EXCLUDED.user_agent, leads.user_agent),
           updated_at = NOW()
         RETURNING *`,
        [id, email, source, leadPath, referrer, userAgent],
      );
      return rows[0];
    });

    res.status(201).json(formatLead(lead));
  }),
);

// ── Document endpoints ──────────────────────────────────────────────

app.get(
  "/documents",
  asyncHandler(async (_req, res) => {
    const { rows } = await pool.query("SELECT * FROM documents ORDER BY created_at ASC");
    res.json(listResponse(rows.map(formatDocument)));
  }),
);

app.post(
  "/documents",
  asyncHandler(async (req, res) => {
    const { uri } = req.body;
    if (!uri) return res.status(400).json(errorResponse("uri is required"));

    try {
      const { doc, created } = await findOrCreateDocument(uri);
      res.status(created ? 201 : 200).json(formatDocument(doc));
    } catch (err) {
      res.status(400).json(errorResponse(err.message));
    }
  }),
);

app.get(
  "/documents/:id",
  asyncHandler(async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM documents WHERE id = $1", [req.params.id]);
    if (rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
    res.json(formatDocument(rows[0]));
  }),
);

app.delete(
  "/documents/:id",
  requirePermission("comments:delete"),
  asyncHandler(async (req, res) => {
    await pool.query("DELETE FROM comments WHERE document = $1", [req.params.id]);
    const { rows } = await pool.query("DELETE FROM documents WHERE id = $1 RETURNING *", [req.params.id]);
    if (rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
    res.json(formatDocument(rows[0]));
  }),
);

// ── Comment endpoints ───────────────────────────────────────────────

app.get(
  "/comments",
  requirePermission("comments:read"),
  asyncHandler(async (req, res) => {
    const { document: docId, uri, status, expand } = req.query;

    if (status !== undefined && status !== "open" && status !== "closed") {
      return res.status(400).json(errorResponse('status must be "open" or "closed"'));
    }

    let resolvedDocId;

    if (docId) {
      resolvedDocId = docId;
    } else if (uri) {
      let normalized;
      try {
        normalized = normalizeUri(uri);
      } catch {
        normalized = uri;
      }
      const docResult = await pool.query("SELECT id FROM documents WHERE uri = $1", [normalized]);
      if (docResult.rows.length === 0) return res.json(listResponse([]));
      resolvedDocId = docResult.rows[0].id;
    }

    let rows;
    if (resolvedDocId) {
      if (status) {
        ({ rows } = await pool.query(
          `SELECT * FROM comments WHERE document = $1
          AND ((parent IS NULL AND status = $2)
            OR (parent IN (SELECT id FROM comments WHERE document = $1 AND parent IS NULL AND status = $2)))
          ORDER BY created_at ASC`,
          [resolvedDocId, status],
        ));
      } else {
        ({ rows } = await pool.query("SELECT * FROM comments WHERE document = $1 ORDER BY created_at ASC", [
          resolvedDocId,
        ]));
      }
    } else if (status) {
      ({ rows } = await pool.query(
        `SELECT * FROM comments
        WHERE (parent IS NULL AND status = $1)
          OR (parent IN (SELECT id FROM comments WHERE parent IS NULL AND status = $1))
        ORDER BY created_at ASC`,
        [status],
      ));
    } else {
      ({ rows } = await pool.query("SELECT * FROM comments ORDER BY created_at ASC"));
    }

    let data = rows.map(formatComment);

    // Attach reactions
    const commentIds = data.map((c) => c.id);
    const reactionsMap = await fetchReactionsForComments(commentIds);
    data = data.map((c) => ({ ...c, reactions: reactionsMap.get(c.id) || [] }));

    if (expand === "document") {
      const docIds = [...new Set(data.map((c) => c.document))];
      if (docIds.length > 0) {
        const { rows: docs } = await pool.query("SELECT * FROM documents WHERE id = ANY($1)", [docIds]);
        const docMap = Object.fromEntries(docs.map((d) => [d.id, formatDocument(d)]));
        data = data.map((c) => ({ ...c, document: docMap[c.document] || c.document }));
      }
    }

    res.json(listResponse(data));
  }),
);

app.post(
  "/comments",
  requirePermission("comments:create"),
  asyncHandler(async (req, res) => {
    const { uri, document: docId, quote, prefix, suffix, body, author, parent, color } = req.body;

    if (!body || (!author && !req.user.id)) {
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
    const cleanAuthor = req.user.id || sanitize(author);

    let documentId;
    try {
      if (docId) {
        const result = await pool.query("SELECT id FROM documents WHERE id = $1", [docId]);
        if (result.rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
        documentId = result.rows[0].id;
      } else {
        const { doc } = await findOrCreateDocument(uri);
        documentId = doc.id;
      }
    } catch (err) {
      return res.status(400).json(errorResponse(err.message));
    }

    const commentStatus = parent ? null : "open";
    const comment = await insertWithId("cmt", async (id) => {
      const { rows } = await pool.query(
        "INSERT INTO comments (id, document, quote, prefix, suffix, body, author, status, parent, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
        [
          id,
          documentId,
          quote || "",
          prefix || null,
          suffix || null,
          cleanBody,
          cleanAuthor,
          commentStatus,
          parent || null,
          validatedColor,
        ],
      );
      return rows[0];
    });

    const formatted = formatComment(comment);
    triggerEvent(pool, "comment.created", { comment: formatted });
    res.status(201).json(formatted);
    broadcast(documentId, { type: "comment:created", comment: formatted });
  }),
);

app.get(
  "/comments/:id",
  requirePermission("comments:read"),
  asyncHandler(async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
    if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));
    let comment = formatComment(rows[0]);
    const reactionsMap = await fetchReactionsForComments([comment.id]);
    comment = { ...comment, reactions: reactionsMap.get(comment.id) || [] };
    if (req.query.expand === "document") {
      const { rows: docs } = await pool.query("SELECT * FROM documents WHERE id = $1", [comment.document]);
      if (docs.length > 0) comment = { ...comment, document: formatDocument(docs[0]) };
    }
    res.json(comment);
  }),
);

app.patch(
  "/comments/:id",
  asyncHandler(async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
    if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));

    const { body, status, color } = req.body;

    if ((body !== undefined || color !== undefined) && !req.user.permissions.includes("comments:edit-any")) {
      if (!req.user.permissions.includes("comments:edit-own") || rows[0].author !== req.user.id) {
        return res.status(403).json(errorResponse("Forbidden"));
      }
    }
    if (status !== undefined && !req.user.permissions.includes("comments:resolve")) {
      return res.status(403).json(errorResponse("Forbidden"));
    }

    if (status !== undefined && rows[0].parent) {
      return res.status(400).json(errorResponse("status cannot be set on replies"));
    }

    if (status !== undefined && status !== "open" && status !== "closed") {
      return res.status(400).json(errorResponse('status must be "open" or "closed"'));
    }

    if (color !== undefined) {
      if (color === null) {
        await pool.query("UPDATE comments SET color = NULL WHERE id = $1", [req.params.id]);
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
        await pool.query("UPDATE comments SET color = $1 WHERE id = $2", [validatedColor, req.params.id]);
      }
    }

    if (body !== undefined) {
      await pool.query("UPDATE comments SET body = $1 WHERE id = $2", [sanitize(body), req.params.id]);
    }
    if (status !== undefined) {
      await pool.query("UPDATE comments SET status = $1 WHERE id = $2", [status, req.params.id]);
    }

    const updated = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
    const formatted = formatComment(updated.rows[0]);
    if (status === "closed") {
      triggerEvent(pool, "comment.resolved", { comment: formatted });
    }
    res.json(formatted);
    broadcast(formatted.document, { type: "comment:updated", comment: formatted });
  }),
);

app.delete(
  "/comments/:id",
  requirePermission("comments:delete"),
  asyncHandler(async (req, res) => {
    await pool.query("DELETE FROM comments WHERE parent = $1", [req.params.id]);
    const { rows } = await pool.query("DELETE FROM comments WHERE id = $1 RETURNING *", [req.params.id]);
    if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));
    const formatted = formatComment(rows[0]);
    triggerEvent(pool, "comment.deleted", { comment: formatted });
    res.json(formatted);
    broadcast(formatted.document, { type: "comment:deleted", comment: formatted });
  }),
);

// ── Reaction endpoints ───────────────────────────────────────────────

app.post(
  "/comments/:id/reactions",
  requirePermission("comments:create"),
  asyncHandler(async (req, res) => {
    const { emoji, author } = req.body;
    if (!emoji || (!author && !req.user.id)) {
      return res.status(400).json(errorResponse("emoji and author are required"));
    }
    if (typeof emoji !== "string" || emoji.length === 0 || emoji.length > 32) {
      return res.status(400).json(errorResponse("invalid emoji"));
    }
    if (!ALLOWED_REACTION_EMOJIS.includes(emoji)) {
      return res.status(400).json(errorResponse(`emoji not allowed. Allowed: ${ALLOWED_REACTION_EMOJIS.join(" ")}`));
    }

    const cleanAuthor = req.user.id || sanitize(author);

    // Verify comment exists
    const { rows: check } = await pool.query("SELECT id FROM comments WHERE id = $1", [req.params.id]);
    if (check.length === 0) return res.status(404).json(errorResponse("Comment not found"));

    await pool.query(
      "INSERT INTO reactions (comment_id, author, emoji) VALUES ($1, $2, $3) ON CONFLICT (comment_id, author, emoji) DO NOTHING",
      [req.params.id, cleanAuthor, emoji],
    );

    const reactionsMap = await fetchReactionsForComments([req.params.id]);
    res.status(201).json({ comment_id: req.params.id, reactions: reactionsMap.get(req.params.id) || [] });
  }),
);

app.delete(
  "/comments/:id/reactions/:emoji",
  requirePermission("comments:create"),
  asyncHandler(async (req, res) => {
    const { author } = req.query;
    if (!author && !req.user.id) {
      return res.status(400).json(errorResponse("author query parameter is required"));
    }

    const emoji = req.params.emoji;
    if (typeof emoji !== "string" || emoji.length === 0 || emoji.length > 32) {
      return res.status(400).json(errorResponse("invalid emoji"));
    }

    const cleanAuthor = req.user.id || sanitize(author);

    // Verify comment exists
    const { rows: check } = await pool.query("SELECT id FROM comments WHERE id = $1", [req.params.id]);
    if (check.length === 0) return res.status(404).json(errorResponse("Comment not found"));

    await pool.query("DELETE FROM reactions WHERE comment_id = $1 AND author = $2 AND emoji = $3", [
      req.params.id,
      cleanAuthor,
      emoji,
    ]);

    const reactionsMap = await fetchReactionsForComments([req.params.id]);
    res.json({ comment_id: req.params.id, reactions: reactionsMap.get(req.params.id) || [] });
  }),
);

// ── Webhook endpoints ───────────────────────────────────────────────

app.use("/webhooks", requirePermission("users:manage"));
registerWebhookRoutes(app, pool, asyncHandler);

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
      // Validate document exists before subscribing
      pool
        .query("SELECT id FROM documents WHERE id = $1", [msg.documentId])
        .then(({ rows }) => {
          if (ws.readyState !== 1) return; // Connection closed during query

          if (rows.length === 0) {
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
