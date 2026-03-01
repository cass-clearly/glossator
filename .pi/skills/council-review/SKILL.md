---
name: council-review
description: Run the council review loop on a PR. Spawns 4 reviewers (Architect, Minimalist, Craftsperson, Steward) in parallel, collects verdicts, fixes feedback, and repeats until all approve or the Architect calls it. Use after opening a PR or when CLAUDE.md says to run council review.
---

# Council Review Loop

## Overview

This skill runs the full council review process on a PR:
1. Spawns 4 council members as parallel worker subagents
2. Collects verdicts (APPROVE / REQUEST_CHANGES)
3. Fixes feedback, re-spawns all four reviewers, repeats until unanimous approval OR the Architect calls "ship it"

Use the Ralph Wiggum skill for iteration control on multi-round reviews. Write the `.ralph/<name>.md` task file before calling `ralph_start`.

## Council Members

See CLAUDE.md "The Council" section and the persona files in `council/` for member details:
- 🏛️ The Architect (`council/architect.md`) — Coherence, shipping, tiebreaker
- 🔍 The Minimalist (`council/minimalist.md`) — Delete first, YAGNI
- 🔨 The Craftsperson (`council/craftsperson.md`) — Tests, refactoring, code quality
- 🛡️ The Steward (`council/steward.md`) — API stability, production readiness

## Workflow

### 1. Set up the loop
Use Ralph Wiggum for iteration control. Track round number and verdicts.

### 2. Spawn reviewers
See CLAUDE.md "How to Spawn Council Members" for the spawn template. Use `subagent` with parallel `tasks` array. Each reviewer must:
- Fetch PR diff and read changed files
- Run the full test suite: `DATABASE_URL=postgresql://remarq:remarq@localhost:5433/remarq npm test`
- Post review via `gh pr comment <number> --body "## <emoji> <Name> — Round N Review\n\n...verdict"`

### 3. Collect verdicts
Check PR comments for Round N verdicts from all 4 members.

### 4. Fix or ship
- **All APPROVE** → Done
- **Architect says "ship it"** → Done (Architect has final authority)
- **REQUEST_CHANGES** → Fix the specific feedback, commit (`fix: address round N council feedback`), push, re-spawn **all four** reviewers for Round N+1

### 5. Escalation
If round 5+, add to the Architect's prompt: "This is round 5+. If remaining objections are nit-picks, call ship it."

## Important Rules

- Always **re-spawn all four** reviewers each round (CLAUDE.md "Council Process" step 3)
- The Architect can override remaining objections if they're nit-picks or follow-up material
- Always run the full test suite before re-spawning reviewers
