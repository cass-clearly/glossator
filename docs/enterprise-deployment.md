# Enterprise deployment guide

This guide describes the supported enterprise boundary for Remarq today. Remarq provides the annotation API and Postgres-backed persistence; enterprise access controls are enforced by the surrounding platform.

```text
VPN/corporate network -> TLS reverse proxy / SSO gateway -> Remarq server -> private PostgreSQL
```

## Control ownership

| Control                                       | Enforced by                                                                     |
| --------------------------------------------- | ------------------------------------------------------------------------------- |
| Private network / no public internet exposure | firewall, VPN, load balancer, Kubernetes ingress, or corporate network controls |
| TLS 1.2+ and certificates                     | reverse proxy or load balancer                                                  |
| User authentication / SSO                     | Okta, identity-aware proxy, or corporate SSO gateway in front of Remarq         |
| Access logs                                   | reverse proxy, IdP, platform logs                                               |
| Data encryption at rest                       | PostgreSQL/storage platform                                                     |
| Backups and restores                          | PostgreSQL/storage platform                                                     |
| CORS origin policy                            | Remarq `ALLOWED_ORIGINS`                                                        |
| Webhook authenticity                          | Remarq HMAC webhook signatures                                                  |

## Deployment steps

1. Provision encrypted PostgreSQL on a private network.
2. Deploy Remarq so it is reachable only by the internal proxy/gateway.
3. Configure the proxy for TLS 1.2+ and corporate certificate policy.
4. Configure Okta/SSO at the proxy or gateway. Do not expose Remarq directly.
5. Set `ALLOWED_ORIGINS` to the approved internal site origins.
6. Verify public internet sources cannot reach Remarq or Postgres.
7. Verify backup restore in an isolated environment.

## Remarq environment

```bash
DATABASE_URL=postgres://remarq_app:...@postgres/remarq
PORT=3333
ALLOWED_ORIGINS=https://remarq.internal.example.com
```

## Current limitations

Remarq does not currently provide native user accounts, native Okta login, native RBAC, native audit-log export, or native comment-retention enforcement on `main`. Enterprise deployments must enforce those controls upstream or through the database/platform until dedicated Remarq features are merged.
