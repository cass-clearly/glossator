# Audit logging

Remarq writes auditable records for sensitive activity:

- `comment.created`
- `comment.updated`
- `comment.status_changed`
- `comment.deleted`
- `document.accessed`

Each record includes actor, action, target, metadata, and timestamp. Actor comes from `X-Remarq-User`, then `X-Forwarded-User`, then request `author`, then `anonymous`.

## Retention

Audit events are retained for at least 90 days. `REMARQ_AUDIT_RETENTION_DAYS` can increase retention but values below 90 are clamped to 90. Old events are purged at server start.

## API

| Method | Endpoint                  | Description                                      |
| ------ | ------------------------- | ------------------------------------------------ |
| `GET`  | `/audit-events?limit=100` | Lists newest audit events. `limit` maxes at 500. |

## Verification

```bash
curl -H 'X-Remarq-User: alice' https://remarq.internal/comments/cmt_123
curl https://remarq.internal/audit-events | jq '.data[0]'
```

Closes #279.
