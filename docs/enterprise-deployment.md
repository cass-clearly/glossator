# Enterprise deployment guide

This is the supported Remarq architecture for internal enterprise use.

```text
VPN/corporate network -> TLS 1.2+ reverse proxy -> Remarq server -> private PostgreSQL
                                   |-> Okta SSO / trusted identity header
```

## Required controls

- Internal network only; no public internet exposure
- HTTPS-only access with TLS 1.2+
- Okta SSO or trusted corporate auth proxy
- RBAC enabled for comments and user management
- PostgreSQL encryption at rest, daily backups, and least-privilege runtime role
- Audit logs retained for at least 90 days
- Comment retention configured for company policy

## Deployment steps

1. Provision encrypted PostgreSQL on a private network.
2. Create least-privilege Remarq runtime database credentials.
3. Deploy Remarq bound to loopback/container-private network.
4. Put an internal TLS reverse proxy in front of Remarq.
5. Configure Okta SSO or a trusted auth proxy.
6. Set environment variables for auth, HTTPS enforcement, audit retention, and comment retention.
7. Verify from outside VPN/corporate network that the service is unreachable.

## Environment checklist

```bash
DATABASE_URL=postgres://remarq_app:...@postgres/remarq
ALLOWED_ORIGINS=https://remarq.internal.example.com
REMARQ_ENFORCE_HTTPS=true
REMARQ_AUTH_REQUIRED=true
REMARQ_SESSION_TIMEOUT_MINUTES=480
REMARQ_AUDIT_RETENTION_DAYS=90
REMARQ_COMMENT_RETENTION_DAYS=365
REMARQ_COMMENT_RECOVERY_DAYS=30
```

Closes #282.
