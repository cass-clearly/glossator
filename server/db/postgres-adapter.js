const { Pool } = require("pg");
const { insertWithId } = require("../generate-id.js");
const { PRESET_NAMES } = require("../color-constants.js");
const { defineDatabaseAdapter } = require("./contract.js");

function createPostgresAdapter(options = {}) {
  const pool = options.pool || new Pool({ connectionString: options.connectionString });

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
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reactions (
        comment_id TEXT NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
        author     TEXT NOT NULL,
        emoji      TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        PRIMARY KEY (comment_id, author, emoji)
      )
    `);

    await pool.query(`ALTER TABLE comments ALTER COLUMN status DROP NOT NULL`);
    await pool.query(`UPDATE comments SET status = NULL WHERE parent IS NOT NULL AND status IS NOT NULL`);
    await pool.query(`ALTER TABLE comments ADD COLUMN IF NOT EXISTS color TEXT`);
    await pool.query(`ALTER TABLE comments DROP CONSTRAINT IF EXISTS comments_color_check`);
    await pool.query(
      `ALTER TABLE comments ADD CONSTRAINT comments_color_check CHECK (color IS NULL OR color IN (${PRESET_NAMES.map((name) => `'${name}'`).join(", ")}) OR color ~ '^#[0-9a-fA-F]{6}$')`,
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

    try {
      await pool.query(`ALTER TABLE webhooks ADD CONSTRAINT webhooks_url_key UNIQUE (url)`);
    } catch (err) {
      if (err.code !== "42P07" && err.code !== "23505") throw err;
    }
  }

  async function listDocuments() {
    const { rows } = await pool.query("SELECT * FROM documents ORDER BY created_at ASC");
    return rows;
  }

  async function getDocumentById(id) {
    const { rows } = await pool.query("SELECT * FROM documents WHERE id = $1", [id]);
    return rows[0] || null;
  }

  async function getDocumentByUri(uri) {
    const { rows } = await pool.query("SELECT * FROM documents WHERE uri = $1", [uri]);
    return rows[0] || null;
  }

  async function getDocumentsByIds(ids) {
    if (ids.length === 0) return [];
    const { rows } = await pool.query("SELECT * FROM documents WHERE id = ANY($1)", [ids]);
    return rows;
  }

  async function findOrCreateDocument(uri) {
    const existing = await getDocumentByUri(uri);
    if (existing) return { doc: existing, created: false };

    try {
      const doc = await insertWithId("doc", async (id) => {
        const { rows } = await pool.query("INSERT INTO documents (id, uri) VALUES ($1, $2) RETURNING *", [id, uri]);
        return rows[0];
      });
      return { doc, created: true };
    } catch (err) {
      if (err.code === "23505") {
        const raced = await getDocumentByUri(uri);
        if (raced) return { doc: raced, created: false };
      }
      throw err;
    }
  }

  async function deleteDocument(id) {
    await pool.query("DELETE FROM comments WHERE document = $1", [id]);
    const { rows } = await pool.query("DELETE FROM documents WHERE id = $1 RETURNING *", [id]);
    return rows[0] || null;
  }

  async function listComments({ documentId, status } = {}) {
    let rows;

    if (documentId) {
      if (status) {
        ({ rows } = await pool.query(
          `SELECT * FROM comments WHERE document = $1
          AND ((parent IS NULL AND status = $2)
            OR (parent IN (SELECT id FROM comments WHERE document = $1 AND parent IS NULL AND status = $2)))
          ORDER BY created_at ASC`,
          [documentId, status],
        ));
      } else {
        ({ rows } = await pool.query("SELECT * FROM comments WHERE document = $1 ORDER BY created_at ASC", [
          documentId,
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

    return rows;
  }

  async function getCommentById(id) {
    const { rows } = await pool.query("SELECT * FROM comments WHERE id = $1", [id]);
    return rows[0] || null;
  }

  async function createComment(comment) {
    return insertWithId("cmt", async (id) => {
      const { rows } = await pool.query(
        "INSERT INTO comments (id, document, quote, prefix, suffix, body, author, status, parent, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
        [
          id,
          comment.document,
          comment.quote,
          comment.prefix,
          comment.suffix,
          comment.body,
          comment.author,
          comment.status,
          comment.parent,
          comment.color,
        ],
      );
      return rows[0];
    });
  }

  async function setCommentColor(id, color) {
    if (color === null) {
      await pool.query("UPDATE comments SET color = NULL WHERE id = $1", [id]);
      return;
    }

    await pool.query("UPDATE comments SET color = $1 WHERE id = $2", [color, id]);
  }

  async function setCommentBody(id, body) {
    await pool.query("UPDATE comments SET body = $1 WHERE id = $2", [body, id]);
  }

  async function setCommentStatus(id, status) {
    await pool.query("UPDATE comments SET status = $1 WHERE id = $2", [status, id]);
  }

  async function deleteComment(id) {
    await pool.query("DELETE FROM comments WHERE parent = $1", [id]);
    const { rows } = await pool.query("DELETE FROM comments WHERE id = $1 RETURNING *", [id]);
    return rows[0] || null;
  }

  async function commentExists(id) {
    const { rows } = await pool.query("SELECT id FROM comments WHERE id = $1", [id]);
    return rows.length > 0;
  }

  async function getReactionsByCommentIds(commentIds) {
    const grouped = new Map();
    if (commentIds.length === 0) return grouped;

    const { rows } = await pool.query(
      "SELECT comment_id, emoji, author FROM reactions WHERE comment_id = ANY($1) ORDER BY emoji, created_at ASC",
      [commentIds],
    );

    for (const row of rows) {
      if (!grouped.has(row.comment_id)) grouped.set(row.comment_id, new Map());
      const emojiMap = grouped.get(row.comment_id);
      if (!emojiMap.has(row.emoji)) emojiMap.set(row.emoji, []);
      emojiMap.get(row.emoji).push(row.author);
    }

    const reactionsByCommentId = new Map();
    for (const [commentId, emojiMap] of grouped) {
      const reactions = [];
      for (const [emoji, authors] of emojiMap) {
        reactions.push({ emoji, count: authors.length, authors });
      }
      reactionsByCommentId.set(commentId, reactions);
    }

    return reactionsByCommentId;
  }

  async function addReaction(commentId, author, emoji) {
    await pool.query(
      "INSERT INTO reactions (comment_id, author, emoji) VALUES ($1, $2, $3) ON CONFLICT (comment_id, author, emoji) DO NOTHING",
      [commentId, author, emoji],
    );
  }

  async function removeReaction(commentId, author, emoji) {
    await pool.query("DELETE FROM reactions WHERE comment_id = $1 AND author = $2 AND emoji = $3", [
      commentId,
      author,
      emoji,
    ]);
  }

  async function listWebhooks() {
    const { rows } = await pool.query("SELECT * FROM webhooks ORDER BY created_at ASC");
    return rows;
  }

  async function getWebhookById(id) {
    const { rows } = await pool.query("SELECT * FROM webhooks WHERE id = $1", [id]);
    return rows[0] || null;
  }

  async function getWebhookByUrl(url) {
    const { rows } = await pool.query("SELECT * FROM webhooks WHERE url = $1", [url]);
    return rows[0] || null;
  }

  async function getWebhookByUrlExcludingId(url, id) {
    const { rows } = await pool.query("SELECT * FROM webhooks WHERE url = $1 AND id != $2", [url, id]);
    return rows[0] || null;
  }

  async function createWebhook(webhook) {
    return insertWithId("whk", async (id) => {
      const { rows } = await pool.query(
        "INSERT INTO webhooks (id, url, secret, events) VALUES ($1, $2, $3, $4) RETURNING *",
        [id, webhook.url, webhook.secret, webhook.events],
      );
      return rows[0];
    });
  }

  async function updateWebhook(id, fields) {
    const setClauses = [];
    const values = [];
    let paramIndex = 1;

    for (const [column, value] of Object.entries(fields)) {
      setClauses.push(`${column} = $${paramIndex}`);
      values.push(value);
      paramIndex++;
    }

    values.push(id);

    const { rows } = await pool.query(
      `UPDATE webhooks SET ${setClauses.join(", ")} WHERE id = $${paramIndex} RETURNING *`,
      values,
    );

    return rows[0] || null;
  }

  async function deleteWebhook(id) {
    const { rows } = await pool.query("DELETE FROM webhooks WHERE id = $1 RETURNING *", [id]);
    return rows[0] || null;
  }

  async function listActiveWebhooksForEvent(eventType) {
    const { rows } = await pool.query("SELECT * FROM webhooks WHERE active = true AND $1 = ANY(events)", [eventType]);
    return rows;
  }

  return defineDatabaseAdapter({
    kind: "postgres",
    pool,
    initSchema,
    listDocuments,
    getDocumentById,
    getDocumentByUri,
    getDocumentsByIds,
    findOrCreateDocument,
    deleteDocument,
    listComments,
    getCommentById,
    createComment,
    setCommentColor,
    setCommentBody,
    setCommentStatus,
    deleteComment,
    commentExists,
    getReactionsByCommentIds,
    addReaction,
    removeReaction,
    listWebhooks,
    getWebhookById,
    getWebhookByUrl,
    getWebhookByUrlExcludingId,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    listActiveWebhooksForEvent,
  });
}

module.exports = { createPostgresAdapter };
