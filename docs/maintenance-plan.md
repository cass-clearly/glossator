# Maintenance plan

## Ownership

The Remarq operator owns runtime patching, dependency updates, vulnerability triage, backup verification, and deployment verification. Code owners own upstream fixes and releases.

## Update cadence

| Item                        | Cadence                                           | Verification                                               |
| --------------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| npm production dependencies | Monthly, or immediately for critical/high CVEs    | `npm audit --audit-level=high --omit=dev`, `npm run check` |
| Node.js runtime             | Track active LTS; review monthly                  | `node --version`, smoke test                               |
| Docker base images          | Monthly rebuild, immediate for critical/high CVEs | image scan, smoke test                                     |
| PostgreSQL minor versions   | Quarterly or managed-service maintenance window   | backup then restore/smoke test                             |

## Security patch process

1. Triage vulnerability severity, exploitability, and affected deployed version.
2. For critical/high production dependency issues, patch or mitigate immediately.
3. Run the same production dependency audit loop that CI runs for every tracked `package-lock.json`.
4. Run `npm run check` before deployment.
5. Deploy to staging, verify `/health`, CORS/origin policy, comments, webhooks, webhook signatures, and backup restore, then promote.
6. Record the deployed commit SHA and verification result.

## Vulnerability scanning

Automated GitHub Actions run weekly and on PRs. The workflow discovers every tracked `package-lock.json` and runs:

```bash
npm audit --audit-level=high --omit=dev [--prefix <package-dir>]
```

Packages with production dependencies should have tracked lockfiles. If a package intentionally has no lockfile, document the exception in the PR that introduces it.

Operators may add container/image scanning in their deployment platform.

## Verification checklist

- [ ] Production dependency audit loop passes or has documented, timeboxed exceptions
- [ ] `npm run check` passes
- [ ] Server starts and `/health` returns `ok`
- [ ] CORS/origin policy matches the deployment
- [ ] Comment and webhook flows still work
- [ ] Webhook signatures verify
- [ ] Backup restore procedure remains valid
