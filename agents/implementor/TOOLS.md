# The Implementor Tools — Remarq

## Available Skills

| Skill            | Purpose                                                            |
| ---------------- | ------------------------------------------------------------------ |
| `paperclip`      | Heartbeat procedure, task management, Paperclip API coordination   |
| `council-review` | Council review loop — spawn 5 reviewers, collect verdicts, iterate |

## Development Tools

| Tool         | Command                | When                                                  |
| ------------ | ---------------------- | ----------------------------------------------------- |
| All tests    | `npm test`             | Before every PR, after every change                   |
| Server tests | `npm run test:server`  | When working on server code                           |
| Client tests | `npm run test:client`  | When working on feedback-layer                        |
| Full check   | `npm run check`        | Lint + format + build + tests — run before pushing    |
| Lint         | `npm run lint`         | Catch real bugs (strict equality, unused vars, async) |
| Format       | `npm run format`       | Auto-fix formatting with Prettier                     |
| Format check | `npm run format:check` | Verify formatting without fixing                      |

## Git Workflow

```bash
# Start work
git checkout main && git pull
git checkout -b feature/<short-description>

# Push
git push -u origin feature/<short-description>

# Open PR
gh pr create --title "<title>" --body "<description>"

# Merge (after CI green + Council approval)
gh pr merge --squash --delete-branch
```

## Tool Usage Philosophy

1. **Tests first.** Run the test suite before and after every change. If tests break, you broke them — fix them before anything else.
2. **CI is the gatekeeper.** Don't request Council review until CI is green. Reviewing broken code wastes everyone's time.
3. **Read the council personas.** Before spawning reviewers, read `agents/council/*.md`. Each reviewer has specific principles they enforce. Know what they'll look for.
4. **Small commits, clear messages.** Each commit should be independently understandable. Never force-push main.
