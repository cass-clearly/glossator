function retentionConfig(env = process.env) {
  const retentionDays = Math.max(Number(env.REMARQ_COMMENT_RETENTION_DAYS) || 365, 1);
  const recoveryDays = Math.max(Number(env.REMARQ_COMMENT_RECOVERY_DAYS) || 30, 1);
  return { retentionDays, recoveryDays };
}

async function ensureRetentionColumns(pool) {
  await pool.query("ALTER TABLE comments ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ");
  await pool.query("ALTER TABLE comments ADD COLUMN IF NOT EXISTS purge_after TIMESTAMPTZ");
  await pool.query("CREATE INDEX IF NOT EXISTS comments_deleted_at_idx ON comments (deleted_at)");
  await pool.query("CREATE INDEX IF NOT EXISTS comments_purge_after_idx ON comments (purge_after)");
}

async function softDeleteComment(pool, id, recoveryDays) {
  const { rows } = await pool.query(
    "UPDATE comments SET deleted_at = NOW(), purge_after = NOW() + ($2::text || ' days')::interval WHERE id = $1 AND deleted_at IS NULL RETURNING *",
    [id, recoveryDays],
  );
  return rows[0] || null;
}

async function softDeleteCommentThread(pool, id, recoveryDays) {
  const { rows } = await pool.query(
    `WITH RECURSIVE thread AS (
       SELECT id FROM comments WHERE id = $1
       UNION ALL
       SELECT c.id FROM comments c JOIN thread t ON c.parent = t.id
     )
     UPDATE comments
     SET deleted_at = NOW(), purge_after = NOW() + ($2::text || ' days')::interval
     WHERE deleted_at IS NULL AND id IN (SELECT id FROM thread)
     RETURNING *`,
    [id, recoveryDays],
  );
  return rows.find((row) => row.id === id) || null;
}

async function softDeleteRepliesOfDeletedParents(pool, recoveryDays) {
  while (true) {
    const result = await pool.query(
      `UPDATE comments SET deleted_at = NOW(), purge_after = NOW() + ($1::text || ' days')::interval
       WHERE deleted_at IS NULL
       AND parent IN (SELECT id FROM comments WHERE deleted_at IS NOT NULL)`,
      [recoveryDays],
    );
    if (result.rowCount === 0) break;
  }
}

async function runRetention(pool, { retentionDays, recoveryDays } = retentionConfig()) {
  await pool.query(
    "UPDATE comments SET deleted_at = NOW(), purge_after = NOW() + ($2::text || ' days')::interval WHERE deleted_at IS NULL AND created_at < NOW() - ($1::text || ' days')::interval",
    [retentionDays, recoveryDays],
  );
  await softDeleteRepliesOfDeletedParents(pool, recoveryDays);
  await pool.query("DELETE FROM comments WHERE deleted_at IS NOT NULL AND purge_after <= NOW() AND parent IS NOT NULL");
  await pool.query("DELETE FROM comments WHERE deleted_at IS NOT NULL AND purge_after <= NOW()");
}

module.exports = {
  ensureRetentionColumns,
  retentionConfig,
  runRetention,
  softDeleteComment,
  softDeleteCommentThread,
  softDeleteRepliesOfDeletedParents,
};
