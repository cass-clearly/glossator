const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const db = new Database(path.join(__dirname, "annotations.db"));
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS annotations (
    id         TEXT PRIMARY KEY,
    uri        TEXT NOT NULL,
    quote      TEXT NOT NULL,
    prefix     TEXT,
    suffix     TEXT,
    comment    TEXT NOT NULL,
    commenter  TEXT NOT NULL,
    resolved   INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

// Migrations
for (const col of [
  "resolved INTEGER DEFAULT 0",
  "parent_id TEXT",
]) {
  try {
    db.exec(`ALTER TABLE annotations ADD COLUMN ${col}`);
  } catch (_) {
    // column already exists
  }
}

// Fetch all annotations for a document
app.get("/api/annotations", (req, res) => {
  const { uri } = req.query;
  if (!uri) return res.status(400).json({ error: "uri query param required" });

  const rows = db
    .prepare("SELECT * FROM annotations WHERE uri = ? ORDER BY created_at ASC")
    .all(uri);
  res.json(rows);
});

// Create an annotation or reply
app.post("/api/annotations", (req, res) => {
  const { uri, quote, prefix, suffix, comment, commenter, parent_id } = req.body;
  if (!uri || !comment || !commenter) {
    return res
      .status(400)
      .json({ error: "uri, comment, and commenter are required" });
  }
  if (!parent_id && !quote) {
    return res
      .status(400)
      .json({ error: "quote is required for top-level annotations" });
  }

  const id = uuidv4();
  db.prepare(
    "INSERT INTO annotations (id, uri, quote, prefix, suffix, comment, commenter, parent_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  ).run(id, uri, quote || "", prefix || null, suffix || null, comment, commenter, parent_id || null);

  const row = db.prepare("SELECT * FROM annotations WHERE id = ?").get(id);
  res.status(201).json(row);
});

// Resolve / unresolve an annotation
app.patch("/api/annotations/:id", (req, res) => {
  const { resolved } = req.body;
  if (resolved === undefined) {
    return res.status(400).json({ error: "resolved field required" });
  }
  const result = db
    .prepare("UPDATE annotations SET resolved = ? WHERE id = ?")
    .run(resolved ? 1 : 0, req.params.id);
  if (result.changes === 0) {
    return res.status(404).json({ error: "annotation not found" });
  }
  const row = db.prepare("SELECT * FROM annotations WHERE id = ?").get(req.params.id);
  res.json(row);
});

// Delete an annotation (and its replies)
app.delete("/api/annotations/:id", (req, res) => {
  const row = db.prepare("SELECT id FROM annotations WHERE id = ?").get(req.params.id);
  if (!row) {
    return res.status(404).json({ error: "annotation not found" });
  }
  db.prepare("DELETE FROM annotations WHERE parent_id = ?").run(req.params.id);
  db.prepare("DELETE FROM annotations WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

// Serve the static demo page from ../serve
app.use(express.static(path.join(__dirname, "..", "serve")));

const PORT = process.env.PORT || 3333;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Annotation server listening on http://localhost:${PORT}`);
});
