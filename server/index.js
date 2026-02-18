const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const { insertWithId } = require("./generate-id.js");
const { normalizeUri } = require("./normalize-uri.js");
const { sanitize } = require("./sanitize.js");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const dbPath = process.env.REMARQ_DB || path.join(__dirname, "remarq.db");
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS documents (
    id         TEXT PRIMARY KEY,
    uri        TEXT NOT NULL UNIQUE,
    object     TEXT NOT NULL DEFAULT 'document',
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
  );

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
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
  )
`);

// ── Response helpers ────────────────────────────────────────────────

function formatDocument(row) {
  return { id: row.id, object: "document", uri: row.uri, created_at: row.created_at };
}

function formatComment(row) {
  return {
    id: row.id, object: "comment", document: row.document,
    quote: row.quote || null, prefix: row.prefix || null, suffix: row.suffix || null,
    body: row.body, author: row.author, status: row.status,
    parent: row.parent || null, created_at: row.created_at,
  };
}

function listResponse(items) { return { object: "list", data: items }; }
function errorResponse(msg) { return { error: { message: msg } }; }

// ── Helper: find or create document by URI ──────────────────────────

function findOrCreateDocument(uri) {
  const normalized = normalizeUri(uri);
  const existing = db.prepare("SELECT * FROM documents WHERE uri = ?").get(normalized);
  if (existing) return { doc: existing, created: false };

  const doc = insertWithId("doc", (id) => {
    db.prepare("INSERT INTO documents (id, uri) VALUES (?, ?)").run(id, normalized);
    return db.prepare("SELECT * FROM documents WHERE id = ?").get(id);
  });
  return { doc, created: true };
}

// ── Document endpoints ──────────────────────────────────────────────

app.get("/documents", (_req, res) => {
  const rows = db.prepare("SELECT * FROM documents ORDER BY created_at ASC").all();
  res.json(listResponse(rows.map(formatDocument)));
});

app.post("/documents", (req, res) => {
  const { uri } = req.body;
  if (!uri) return res.status(400).json(errorResponse("uri is required"));

  try {
    const { doc, created } = findOrCreateDocument(uri);
    res.status(created ? 201 : 200).json(formatDocument(doc));
  } catch (err) {
    res.status(400).json(errorResponse(err.message));
  }
});

app.get("/documents/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM documents WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).json(errorResponse("Document not found"));
  res.json(formatDocument(row));
});

app.delete("/documents/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM documents WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).json(errorResponse("Document not found"));

  db.prepare("DELETE FROM comments WHERE document = ?").run(req.params.id);
  db.prepare("DELETE FROM documents WHERE id = ?").run(req.params.id);
  res.json(formatDocument(row));
});

// ── Comment endpoints ───────────────────────────────────────────────

app.get("/comments", (req, res) => {
  const { document: docId, uri } = req.query;

  if (docId) {
    const rows = db.prepare("SELECT * FROM comments WHERE document = ? ORDER BY created_at ASC").all(docId);
    return res.json(listResponse(rows.map(formatComment)));
  }

  if (uri) {
    let normalized;
    try { normalized = normalizeUri(uri); } catch { normalized = uri; }
    const doc = db.prepare("SELECT id FROM documents WHERE uri = ?").get(normalized);
    if (!doc) return res.json(listResponse([]));
    const rows = db.prepare("SELECT * FROM comments WHERE document = ? ORDER BY created_at ASC").all(doc.id);
    return res.json(listResponse(rows.map(formatComment)));
  }

  res.status(400).json(errorResponse("document or uri query param required"));
});

app.post("/comments", (req, res) => {
  const { uri, document: docId, quote, prefix, suffix, body, author, parent } = req.body;

  if (!body || !author) {
    return res.status(400).json(errorResponse("body and author are required"));
  }
  if (!parent && !quote) {
    return res.status(400).json(errorResponse("quote is required for top-level comments"));
  }
  if (!uri && !docId) {
    return res.status(400).json(errorResponse("uri or document is required"));
  }

  const cleanBody = sanitize(body);
  const cleanAuthor = sanitize(author);

  let documentId;
  try {
    if (docId) {
      const doc = db.prepare("SELECT id FROM documents WHERE id = ?").get(docId);
      if (!doc) return res.status(404).json(errorResponse("Document not found"));
      documentId = doc.id;
    } else {
      const { doc } = findOrCreateDocument(uri);
      documentId = doc.id;
    }
  } catch (err) {
    return res.status(400).json(errorResponse(err.message));
  }

  const comment = insertWithId("cmt", (id) => {
    db.prepare(
      "INSERT INTO comments (id, document, quote, prefix, suffix, body, author, parent) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    ).run(id, documentId, quote || "", prefix || null, suffix || null, cleanBody, cleanAuthor, parent || null);
    return db.prepare("SELECT * FROM comments WHERE id = ?").get(id);
  });

  res.status(201).json(formatComment(comment));
});

app.get("/comments/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM comments WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).json(errorResponse("Comment not found"));
  res.json(formatComment(row));
});

app.patch("/comments/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM comments WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).json(errorResponse("Comment not found"));

  const { body, status } = req.body;

  if (status !== undefined && status !== "open" && status !== "closed") {
    return res.status(400).json(errorResponse('status must be "open" or "closed"'));
  }

  if (body !== undefined) {
    db.prepare("UPDATE comments SET body = ? WHERE id = ?").run(sanitize(body), req.params.id);
  }
  if (status !== undefined) {
    db.prepare("UPDATE comments SET status = ? WHERE id = ?").run(status, req.params.id);
  }

  const updated = db.prepare("SELECT * FROM comments WHERE id = ?").get(req.params.id);
  res.json(formatComment(updated));
});

app.delete("/comments/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM comments WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).json(errorResponse("Comment not found"));

  db.prepare("DELETE FROM comments WHERE parent = ?").run(req.params.id);
  db.prepare("DELETE FROM comments WHERE id = ?").run(req.params.id);
  res.json(formatComment(row));
});

// ── Static files ────────────────────────────────────────────────────

app.use(express.static(path.join(__dirname, "..", "serve")));

// ── Start server ────────────────────────────────────────────────────

if (require.main === module) {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Remarq server listening on http://localhost:${PORT}`);
  });
}

module.exports = { app, db };
