# Security controls

## Access control

- Anonymous access disabled in enterprise deployments.
- Okta SSO authenticates users.
- RBAC gates read, create, edit-own, resolve, delete, and user-management actions.

## Transport and network

- HTTPS-only with TLS 1.2+ at the internal reverse proxy.
- Remarq is reachable only from VPN/corporate network paths.
- Postgres is private to Remarq and operator networks.

## Data protection

- PostgreSQL encryption at rest is required.
- Daily encrypted backups are required.
- Comment retention and soft-delete recovery windows are configurable.

## Auditability

- Comment create/update/status/delete events are logged.
- Document access is logged.
- Audit events include actor, action, target, metadata, and timestamp.
- Audit logs retain for at least 90 days.

## Verification

Operators should verify these controls before production approval and after any deployment topology change.
