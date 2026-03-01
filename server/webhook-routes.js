const { insertWithId } = require("./generate-id.js");

const VALID_EVENTS = ["comment.created", "comment.resolved", "comment.deleted"];

function errorResponse(msg) { return { error: { message: msg } }; }

function formatWebhook(row) {
  return {
    id: row.id,
    object: "webhook",
    url: row.url,
    events: row.events,
    active: row.active,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  };
}

function registerWebhookRoutes(app, pool, asyncHandler) {
  app.get("/webhooks", asyncHandler(async (_req, res) => {
    const { rows } = await pool.query("SELECT * FROM webhooks ORDER BY created_at ASC");
    res.json({ object: "list", data: rows.map(formatWebhook) });
  }));

  app.post("/webhooks", asyncHandler(async (req, res) => {
    const { url, secret, events } = req.body;

    if (!url) return res.status(400).json(errorResponse("url is required"));
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        return res.status(400).json(errorResponse("url must use http or https"));
      }
    } catch {
      return res.status(400).json(errorResponse("url must be a valid HTTP or HTTPS URL"));
    }
    if (!secret) return res.status(400).json(errorResponse("secret is required"));
    if (!Array.isArray(events) || events.length === 0) {
      return res.status(400).json(errorResponse("events must be a non-empty array"));
    }

    const invalid = events.filter((e) => !VALID_EVENTS.includes(e));
    if (invalid.length > 0) {
      return res.status(400).json(errorResponse(`Invalid events: ${invalid.join(", ")}. Valid events: ${VALID_EVENTS.join(", ")}`));
    }

    const webhook = await insertWithId("whk", async (id) => {
      const { rows } = await pool.query(
        "INSERT INTO webhooks (id, url, secret, events) VALUES ($1, $2, $3, $4) RETURNING *",
        [id, url, secret, events]
      );
      return rows[0];
    });

    res.status(201).json(formatWebhook(webhook));
  }));

  app.get("/webhooks/:id", asyncHandler(async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM webhooks WHERE id = $1", [req.params.id]);
    if (rows.length === 0) return res.status(404).json(errorResponse("Webhook not found"));
    res.json(formatWebhook(rows[0]));
  }));

  app.patch("/webhooks/:id", asyncHandler(async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM webhooks WHERE id = $1", [req.params.id]);
    if (rows.length === 0) return res.status(404).json(errorResponse("Webhook not found"));

    const { url, events, active, secret } = req.body;

    if (events !== undefined) {
      if (!Array.isArray(events) || events.length === 0) {
        return res.status(400).json(errorResponse("events must be a non-empty array"));
      }
      const invalid = events.filter((e) => !VALID_EVENTS.includes(e));
      if (invalid.length > 0) {
        return res.status(400).json(errorResponse(`Invalid events: ${invalid.join(", ")}. Valid events: ${VALID_EVENTS.join(", ")}`));
      }
    }

    const fields = {};
    if (url !== undefined) fields.url = url;
    if (events !== undefined) fields.events = events;
    if (active !== undefined) fields.active = active;
    if (secret !== undefined) fields.secret = secret;

    if (Object.keys(fields).length === 0) {
      return res.json(formatWebhook(rows[0]));
    }

    const setClauses = [];
    const values = [];
    let paramIndex = 1;
    for (const [col, val] of Object.entries(fields)) {
      setClauses.push(`${col} = $${paramIndex}`);
      values.push(val);
      paramIndex++;
    }
    values.push(req.params.id);

    const { rows: updated } = await pool.query(
      `UPDATE webhooks SET ${setClauses.join(", ")} WHERE id = $${paramIndex} RETURNING *`,
      values
    );
    res.json(formatWebhook(updated[0]));
  }));

  app.delete("/webhooks/:id", asyncHandler(async (req, res) => {
    const { rows } = await pool.query("DELETE FROM webhooks WHERE id = $1 RETURNING *", [req.params.id]);
    if (rows.length === 0) return res.status(404).json(errorResponse("Webhook not found"));
    res.json(formatWebhook(rows[0]));
  }));
}

module.exports = { registerWebhookRoutes, formatWebhook, VALID_EVENTS };
