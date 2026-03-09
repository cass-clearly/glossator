---
name: council-review
description: Run the council review loop on a PR. Spawns all 5 reviewers (Architect, Minimalist, Craftsperson, Steward, Marketing Guru) on every PR, collects verdicts, fixes feedback, and repeats until all approve or the Architect calls it. Use after opening a PR or when AGENTS.md says to run council review.
---

# Council Review Loop

Spawns all five council members, collects verdicts, fixes feedback, repeats until unanimous or the Architect calls it. Uses Ralph Wiggum for iteration control — write `.ralph/<name>.md` before calling `ralph_start`.

See `agents/implementor/AGENTS.md` § "Council Review" under The Workflow for member details, persona files in `agents/council/`, and the spawn template.

## Workflow

### 0. Determine reviewers

**All five** always run: Architect, Minimalist, Craftsperson, Steward, and Marketing Guru. The Marketing Guru reviews every PR to ensure documentation, changelogs, and public-facing materials stay current with what's shipping.

### 1. Spawn reviewers

Use `subagent` with parallel `tasks` array — one per reviewer. Each reviewer must:

- Fetch PR diff and read changed files
- Run tests: `DATABASE_URL=postgresql://remarq:remarq@localhost:5433/remarq npm test`
- Post via `gh pr comment <number> --body "## <emoji> <Name> — Round N Review\n\n...verdict"`

**If tests fail, fix them before spawning reviewers.** Don't waste reviewer time on broken code.

### 2. Collect verdicts

Check PR comments for Round N verdicts from all spawned reviewers.

### 3. Fix or ship

- **All APPROVE** → Done
- **Architect says "ship it"** → Done (Architect has final authority)
- **REQUEST_CHANGES** → Fix feedback, commit, push, re-spawn **all reviewers** for Round N+1

### 4. Escalation

If round 5+, add to the Architect's prompt: "This is round 5+. If remaining objections are nit-picks, call ship it."

## Rules

- Always re-spawn **all five reviewers** each round
- Always run the full test suite before spawning reviewers
- The Architect can override remaining objections
