# Maintenance plan

## Ownership

The Remarq operator owns runtime patching, dependency updates, vulnerability triage, backup verification, and deployment verification. Code owners own upstream fixes and releases.

## Update cadence

| Item                      | Cadence                                           | Verification                   |
| ------------------------- | ------------------------------------------------- | ------------------------------ |
| npm dependencies          | Monthly, or immediately for critical/high CVEs    | `npm audit`, `npm run check`   |
| Node.js runtime           | Track active LTS; review monthly                  | `node --version`, smoke test   |
| Docker base images        | Monthly rebuild, immediate for critical/high CVEs | image scan, smoke test         |
| PostgreSQL minor versions | Quarterly or managed-service maintenance window   | backup then restore/smoke test |

## Security patch process

1. Triage vulnerability severity, exploitability, and affected deployed version.
2. For critical/high issues, patch or mitigate immediately.
3. Run `npm audit` in every package with a lockfile.
4. Run `npm run check` before deployment.
5. Deploy to staging, verify auth/RBAC/comments/webhooks, then promote.
6. Record the deployed commit SHA and verification result.

## Vulnerability scanning

Automated GitHub Actions run weekly and on PRs:

- root `npm audit --audit-level=high`
- `server`, `feedback-layer`, `mcp-server`, `cli`, and `agent-loop` lockfile audits when present

Operators may add container/image scanning in their deployment platform.

## Verification checklist

- [ ] `npm audit --audit-level=high` passes or has documented exceptions
- [ ] `npm run check` passes
- [ ] Server starts and `/health` returns `ok`
- [ ] Authentication and RBAC still gate access
- [ ] Backup restore procedure remains valid

Closes #283.
