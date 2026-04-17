const crypto = require("crypto");

// ── HMAC Signing ────────────────────────────────────────────────────

function signPayload(secret, body) {
  return crypto.createHmac("sha256", secret).update(body).digest("hex");
}

// ── Delivery with retries ───────────────────────────────────────────

async function deliverWebhook(url, secret, payload) {
  const body = JSON.stringify(payload);
  const signature = signPayload(secret, body);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Remarq-Signature": signature,
    },
    body,
    signal: AbortSignal.timeout(10000),
  });

  if (!res.ok) {
    throw new Error(`Webhook delivery failed: ${res.status}`);
  }
  return res;
}

async function retryWithBackoff(fn, { maxAttempts = 3, baseDelay = 1000 } = {}) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === maxAttempts) throw err;
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }
  }
}

// ── Event trigger ───────────────────────────────────────────────────

function triggerEvent(db, eventType, data) {
  // Fire and forget — do not await, do not block the response
  _dispatchWebhooks(db, eventType, data).catch((err) => {
    console.error(`Webhook dispatch error for ${eventType}:`, err.message);
  });
}

async function listActiveWebhooks(db, eventType) {
  if (typeof db.listActiveWebhooksForEvent === "function") {
    return db.listActiveWebhooksForEvent(eventType);
  }

  const { rows } = await db.query("SELECT * FROM webhooks WHERE active = true AND $1 = ANY(events)", [eventType]);
  return rows;
}

async function _dispatchWebhooks(db, eventType, data) {
  const webhooks = await listActiveWebhooks(db, eventType);

  const payload = {
    event: eventType,
    created_at: new Date().toISOString(),
    data,
  };

  const deliveries = webhooks.map(async (webhook) => {
    try {
      const res = await retryWithBackoff(() => deliverWebhook(webhook.url, webhook.secret, payload));
      console.log(`Webhook ${webhook.id} [${eventType}]: delivered (${res.status})`);
    } catch (err) {
      console.error(`Webhook ${webhook.id} [${eventType}]: failed — ${err.message}`);
    }
  });

  await Promise.allSettled(deliveries);
}

module.exports = {
  signPayload,
  deliverWebhook,
  retryWithBackoff,
  triggerEvent,
  _dispatchWebhooks,
};
