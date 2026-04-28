# Incident response

## Severity triggers

Treat these as security incidents:

- suspected unauthorized Remarq access
- public internet exposure of Remarq or Postgres
- leaked `DATABASE_URL`, Okta client secret, webhook secret, or backup
- audit log tampering or unexplained gaps
- data deletion outside approved retention policy

## Response process

1. **Contain** — remove public ingress, rotate secrets, disable suspicious users, or stop the service if needed.
2. **Preserve evidence** — export audit events, reverse proxy logs, Okta logs, Postgres logs, and deployment history.
3. **Assess blast radius** — identify actors, documents, comments, and time window affected.
4. **Recover** — restore from verified backup when integrity is in doubt.
5. **Notify** — follow the owning organization's security notification policy.
6. **Postmortem** — document root cause, timeline, customer/user impact, and corrective actions.

## Operator escalation packet

Include:

- incident start/end times
- affected environment and URL
- audit log export
- Okta sign-in events for affected users
- reverse proxy access logs
- database backup/restore status
- deployed Remarq commit SHA
