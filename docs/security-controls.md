# Security controls

This page separates controls Remarq provides today from controls the enterprise platform must provide around it.

## Provided by Remarq

- API persistence in PostgreSQL via `DATABASE_URL`
- CORS allowlist via `ALLOWED_ORIGINS`
- Security headers from Helmet
- HMAC signatures on outbound webhook payloads
- Health check at `/health`

## Required external controls

### Access control

Place Remarq behind an SSO-aware reverse proxy, identity-aware proxy, or VPN/corporate network gateway. The proxy must reject anonymous traffic before it reaches Remarq.

### Transport and network

Terminate TLS 1.2+ at an internal proxy or load balancer. Restrict inbound access to VPN/corporate networks. Keep PostgreSQL private to Remarq and operator networks.

### Data protection

Enable PostgreSQL/storage encryption at rest. Configure encrypted backups and periodic restore tests in the database platform.

### Auditability

Collect access logs from the reverse proxy, identity provider, deployment platform, and PostgreSQL. Retain those logs according to the organization's audit policy.

## Verification

Operators should verify each control at its enforcement point before production approval and after any topology change.
