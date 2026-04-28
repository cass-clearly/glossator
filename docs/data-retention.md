# Comment retention and deletion

Remarq supports a two-stage deletion lifecycle:

1. **Active retention** — comments older than `REMARQ_COMMENT_RETENTION_DAYS` are soft-deleted automatically.
2. **Recovery window** — soft-deleted comments stay in the database until `purge_after`.
3. **Permanent purge** — comments whose `purge_after` has passed are removed.

## Configuration

```bash
REMARQ_COMMENT_RETENTION_DAYS=365
REMARQ_COMMENT_RECOVERY_DAYS=30
```

Defaults are 365 days active retention and 30 days recovery. The lifecycle runs at server start. Operators can restart the service from scheduled maintenance to enforce the policy daily.

## API behavior

`DELETE /comments/:id` soft-deletes the target comment and replies. Deleted comments are excluded from comment list/read endpoints and remain recoverable from the database until `purge_after`.

## Verification

```sql
SELECT id, deleted_at, purge_after FROM comments WHERE id = 'cmt_...';
```

Closes #280.
