# RBAC

Remarq supports four roles for internal deployments:

| Role        | Permissions                                                        |
| ----------- | ------------------------------------------------------------------ |
| `viewer`    | read comments                                                      |
| `commenter` | read comments, create comments, edit own comment body/color, react |
| `resolver`  | commenter permissions plus resolve/reopen comments                 |
| `admin`     | all comment actions, webhook management, and user role management  |

User roles are persisted in the `users` table. Requests identify the actor with `X-Remarq-User` or `X-Forwarded-User`.

These identity headers are trusted only when set by a trusted authentication proxy. Enterprise deployments must strip or ignore client-supplied identity headers before requests reach Remarq.

## API

| Method | Endpoint          | Description                                                  |
| ------ | ----------------- | ------------------------------------------------------------ |
| `GET`  | `/me/permissions` | Returns current actor role and permissions for UI gating.    |
| `PUT`  | `/users/:id/role` | Admin-only role assignment. Body: `{ "role": "commenter" }`. |

Comment and webhook mutation endpoints reject unauthorized actions with `403 Forbidden`. When `X-Remarq-User` is present, the server stores that identity as the comment author so ownership checks have one source of truth. Unknown authenticated users default to `viewer`; roles must be assigned in the `users` table.

Existing unauthenticated local development remains admin-compatible. Enterprise deployments should combine this PR with Okta auth and trusted identity headers.

## Verification

```bash
# Unknown authenticated users are viewers and cannot create comments.
curl -i -X POST http://localhost:3333/comments \
  -H 'Content-Type: application/json' \
  -H 'X-Remarq-User: bob@example.com' \
  -d '{"uri":"https://example.com/rbac","quote":"text","body":"hello","author":"Bob"}'
# Expected: HTTP/1.1 403 Forbidden

# Local/unauthenticated admin-compatible mode can assign roles.
curl -i -X PUT http://localhost:3333/users/bob@example.com/role \
  -H 'Content-Type: application/json' \
  -d '{"role":"commenter"}'
# Expected: HTTP/1.1 200 OK

# The commenter can create; server-owned author becomes bob@example.com.
curl -i -X POST http://localhost:3333/comments \
  -H 'Content-Type: application/json' \
  -H 'X-Remarq-User: bob@example.com' \
  -d '{"uri":"https://example.com/rbac","quote":"text","body":"hello","author":"Spoofed"}'
# Expected: HTTP/1.1 201 Created with "author":"bob@example.com"

# Commenters cannot manage users or webhooks.
curl -i -X PUT http://localhost:3333/users/alice@example.com/role \
  -H 'Content-Type: application/json' \
  -H 'X-Remarq-User: bob@example.com' \
  -d '{"role":"admin"}'
# Expected: HTTP/1.1 403 Forbidden
```
