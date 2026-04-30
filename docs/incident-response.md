# Incident response

## Severity triggers

Treat these as security incidents:

- suspected unauthorized Remarq access through the proxy/gateway
- public internet exposure of Remarq or PostgreSQL
- leaked `DATABASE_URL`, webhook secret, database credentials, or backup
- unexplained gaps in proxy, IdP, platform, or database logs
- data deletion outside approved operator process

## Evidence sources

Remarq does not currently provide a native audit-log export on `main`. Preserve evidence from:

- reverse proxy / load balancer access logs
- Okta or identity-provider sign-in logs
- deployment platform events and deployed commit SHA
- PostgreSQL logs and backups
- webhook receiver logs, if webhooks were involved

## Response process

1. **Contain** — remove public ingress, rotate secrets, disable suspicious IdP users, or stop the service if needed.
2. **Preserve evidence** — export proxy logs, IdP logs, PostgreSQL logs, deployment history, and relevant backups.
3. **Assess blast radius** — identify actors, documents, comments, and time window affected from the preserved logs and database state.
4. **Recover** — restore from verified backup when integrity is in doubt.
5. **Notify** — follow the owning organization's security notification policy.
6. **Postmortem** — document root cause, timeline, impact, and corrective actions.

## Operator escalation packet

Include:

- incident start/end times
- affected environment and URL
- proxy/IdP/database log exports
- database backup/restore status
- deployed Remarq commit SHA
- containment actions already taken
