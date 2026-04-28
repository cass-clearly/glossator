# RBAC

Remarq supports four roles for internal deployments:

| Role        | Permissions                                                 |
| ----------- | ----------------------------------------------------------- |
| `viewer`    | read comments                                               |
| `commenter` | read comments, create comments, edit own comment body/color |
| `resolver`  | commenter permissions plus resolve/reopen comments          |
| `admin`     | all comment actions plus user role management               |

User roles are persisted in the `users` table. Requests identify the actor with `X-Remarq-User`; when Okta authentication is enabled, deploy the reverse proxy so the authenticated identity is forwarded as that header or map Okta identity into it.

## API

| Method | Endpoint          | Description                                                  |
| ------ | ----------------- | ------------------------------------------------------------ |
| `GET`  | `/me/permissions` | Returns current actor role and permissions for UI gating.    |
| `PUT`  | `/users/:id/role` | Admin-only role assignment. Body: `{ "role": "commenter" }`. |

Comment endpoints reject unauthorized actions with `403 Forbidden`. Ownership checks compare `X-Remarq-User` to the comment `author`; commenters cannot edit other users' comments.

Existing unauthenticated local development remains admin-compatible. Enterprise deployments should combine this PR with Okta auth and trusted identity headers.

## Verification

```bash
curl -H 'X-Remarq-User: alice' https://remarq.internal/comments
curl -X POST -H 'X-Remarq-User: bob' https://remarq.internal/comments
# 403 until bob has commenter/resolver/admin role
```

Closes #276.
