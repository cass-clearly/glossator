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
# Create a comment.
COMMENT=$(curl -s -X POST http://localhost:3333/comments \
  -H 'Content-Type: application/json' \
  -H 'X-Remarq-User: alice@example.com' \
  -d '{"uri":"https://example.com/audit","quote":"text","body":"hello","author":"alice"}')
COMMENT_ID=$(echo "$COMMENT" | jq -r '.id')

# Access, update, and delete it.
curl -s -H 'X-Remarq-User: bob@example.com' "http://localhost:3333/comments/$COMMENT_ID" >/dev/null
curl -s -X PATCH "http://localhost:3333/comments/$COMMENT_ID" \
  -H 'Content-Type: application/json' \
  -H 'X-Remarq-User: alice@example.com' \
  -d '{"body":"updated"}' >/dev/null
curl -s -X DELETE -H 'X-Remarq-User: alice@example.com' "http://localhost:3333/comments/$COMMENT_ID" >/dev/null

# Verify audit rows.
psql "$DATABASE_URL" -c "select actor, action, target, created_at from audit_events order by created_at desc limit 10;"
```
