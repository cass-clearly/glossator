---
name: council-review
description: Run the council review loop on a PR. Spawns 4 reviewers (Architect, Minimalist, Craftsperson, Steward) in parallel, collects verdicts, fixes feedback, and repeats until all approve or the Architect calls it. Use after opening a PR or when CLAUDE.md says to run council review.
---

# Council Review Loop

Spawns all 4 council members, collects verdicts, fixes feedback, repeats until unanimous or the Architect calls it. Uses Ralph Wiggum for iteration control — write `.ralph/<name>.md` before calling `ralph_start`.

See CLAUDE.md "The Council" section for member details, persona files in `council/`, and spawn template in "How to Spawn Council Members."

## Workflow

### 1. Spawn reviewers
Use `subagent` with parallel `tasks` array — one per council member. Each reviewer must:
- Fetch PR diff and read changed files
- Run tests: `DATABASE_URL=postgresql://remarq:remarq@localhost:5433/remarq npm test`
- Post via `gh pr comment <number> --body "## <emoji> <Name> — Round N Review\n\n...verdict"`

**If tests fail, fix them before spawning reviewers.** Don't waste reviewer time on broken code.

### 2. Collect verdicts
Check PR comments for Round N verdicts from all 4 members.

### 3. Fix or ship
- **All APPROVE** → Done
- **Architect says "ship it"** → Done (Architect has final authority)
- **REQUEST_CHANGES** → Fix feedback, commit, push, re-spawn **all four** for Round N+1

### 4. Escalation
If round 5+, add to the Architect's prompt: "This is round 5+. If remaining objections are nit-picks, call ship it."

## Rules
- Always re-spawn **all four** reviewers each round
- Always run the full test suite before spawning reviewers
- The Architect can override remaining objections
