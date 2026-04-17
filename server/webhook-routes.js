const VALID_EVENTS = ["comment.created", "comment.resolved", "comment.deleted"];

function errorResponse(msg) {
  return { error: { message: msg } };
}

/**
 * Validate a webhook URL. Returns an error message string if invalid, or null if valid.
 */
function validateUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return "url must use http or https";
    }
  } catch {
    return "url must be a valid HTTP or HTTPS URL";
  }
  return null;
}

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

function registerWebhookRoutes(app, db, asyncHandler) {
  app.get(
    "/webhooks",
    asyncHandler(async (_req, res) => {
      const rows = await db.listWebhooks();
      res.json({ object: "list", data: rows.map(formatWebhook) });
    }),
  );

  app.post(
    "/webhooks",
    asyncHandler(async (req, res) => {
      const { url, secret, events } = req.body;

      if (!url) return res.status(400).json(errorResponse("url is required"));
      const urlError = validateUrl(url);
      if (urlError) return res.status(400).json(errorResponse(urlError));
      if (!secret) return res.status(400).json(errorResponse("secret is required"));
      if (!Array.isArray(events) || events.length === 0) {
        return res.status(400).json(errorResponse("events must be a non-empty array"));
      }

      const invalid = events.filter((event) => !VALID_EVENTS.includes(event));
      if (invalid.length > 0) {
        return res
          .status(400)
          .json(errorResponse(`Invalid events: ${invalid.join(", ")}. Valid events: ${VALID_EVENTS.join(", ")}`));
      }

      if (await db.getWebhookByUrl(url)) {
        return res.status(409).json(errorResponse("A webhook with this URL already exists"));
      }

      try {
        const webhook = await db.createWebhook({ url, secret, events });
        res.status(201).json(formatWebhook(webhook));
      } catch (err) {
        if (err.code === "23505") {
          return res.status(409).json(errorResponse("A webhook with this URL already exists"));
        }
        throw err;
      }
    }),
  );

  app.get(
    "/webhooks/:id",
    asyncHandler(async (req, res) => {
      const webhook = await db.getWebhookById(req.params.id);
      if (!webhook) return res.status(404).json(errorResponse("Webhook not found"));
      res.json(formatWebhook(webhook));
    }),
  );

  app.patch(
    "/webhooks/:id",
    asyncHandler(async (req, res) => {
      const existing = await db.getWebhookById(req.params.id);
      if (!existing) return res.status(404).json(errorResponse("Webhook not found"));

      const { url, events, active, secret } = req.body;

      if (url !== undefined) {
        const urlError = validateUrl(url);
        if (urlError) return res.status(400).json(errorResponse(urlError));

        if (await db.getWebhookByUrlExcludingId(url, req.params.id)) {
          return res.status(409).json(errorResponse("A webhook with this URL already exists"));
        }
      }

      if (events !== undefined) {
        if (!Array.isArray(events) || events.length === 0) {
          return res.status(400).json(errorResponse("events must be a non-empty array"));
        }
        const invalid = events.filter((event) => !VALID_EVENTS.includes(event));
        if (invalid.length > 0) {
          return res
            .status(400)
            .json(errorResponse(`Invalid events: ${invalid.join(", ")}. Valid events: ${VALID_EVENTS.join(", ")}`));
        }
      }

      const fields = {};
      if (url !== undefined) fields.url = url;
      if (events !== undefined) fields.events = events;
      if (active !== undefined) fields.active = active;
      if (secret !== undefined) fields.secret = secret;

      if (Object.keys(fields).length === 0) {
        return res.json(formatWebhook(existing));
      }

      const updated = await db.updateWebhook(req.params.id, fields);
      res.json(formatWebhook(updated));
    }),
  );

  app.delete(
    "/webhooks/:id",
    asyncHandler(async (req, res) => {
      const webhook = await db.deleteWebhook(req.params.id);
      if (!webhook) return res.status(404).json(errorResponse("Webhook not found"));
      res.json(formatWebhook(webhook));
    }),
  );
}

module.exports = { registerWebhookRoutes, formatWebhook, validateUrl, VALID_EVENTS };
