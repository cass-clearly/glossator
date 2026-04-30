function actorFromRequest(req) {
  return req.get("X-Remarq-User") || req.get("X-Forwarded-User") || req.body?.author || "anonymous";
}

async function ensureAuditLogTable(pool) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS audit_events (
      id         BIGSERIAL PRIMARY KEY,
      actor      TEXT NOT NULL,
      action     TEXT NOT NULL,
      target     TEXT NOT NULL,
      metadata   JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await pool.query("CREATE INDEX IF NOT EXISTS audit_events_created_at_idx ON audit_events (created_at)");
  await pool.query("CREATE INDEX IF NOT EXISTS audit_events_target_idx ON audit_events (target)");
}

async function recordAuditEvent(pool, { actor, action, target, metadata = {} }) {
  const { rows } = await pool.query(
    "INSERT INTO audit_events (actor, action, target, metadata) VALUES ($1, $2, $3, $4) RETURNING *",
    [actor || "anonymous", action, target, metadata],
  );
  return rows[0];
}

async function purgeAuditEvents(pool, retentionDays = 90) {
  const days = Math.max(Number(retentionDays) || 90, 90);
  await pool.query("DELETE FROM audit_events WHERE created_at < NOW() - ($1::text || ' days')::interval", [days]);
}

module.exports = { actorFromRequest, ensureAuditLogTable, purgeAuditEvents, recordAuditEvent };
