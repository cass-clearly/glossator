# Audit logging

Remarq writes auditable records for sensitive activity:

- `comment.created`
- `comment.updated`
- `comment.deleted`
- `document.accessed`

Each record includes actor, action, target, metadata, and timestamp. Actor comes from `X-Remarq-User`, then `X-Forwarded-User`, then request `author`, then `anonymous`.

## Retention

Audit events are retained for at least 90 days. `REMARQ_AUDIT_RETENTION_DAYS` can increase retention but values below 90 are clamped to 90. Old events are purged at server start.

## Verification

```bash
curl -H 'X-Remarq-User: alice' https://remarq.internal/comments/cmt_123
psql "$DATABASE_URL" -c "select actor, action, target, created_at from audit_events order by created_at desc limit 5;"
```
