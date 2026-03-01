---
name: council-review
description: Run the council review loop on a PR. Spawns 4 reviewers (Architect, Minimalist, Craftsperson, Steward) in parallel, collects verdicts, fixes feedback, and repeats until all approve or the Architect calls it. Use after opening a PR or when CLAUDE.md says to run council review.
---

# Council Review Loop

## Overview

This skill runs the full council review process on a PR. It:
1. Spawns 4 council members as parallel worker subagents
2. Collects their verdicts (APPROVE / REQUEST_CHANGES)
3. If not all approved: fixes feedback, pushes, re-reviews
4. Loops until unanimous approval OR the Architect calls "ship it"

Use the Ralph Wiggum skill for iteration control on multi-round reviews.

## Council Members

Council persona definitions live in `council/` at the repo root:
- `council/architect.md` — Coherence, scope, system-level. Can override and call "ship it."
- `council/minimalist.md` — Delete first, YAGNI, complexity skeptic.
- `council/craftsperson.md` — Tests, refactoring, code smells, naming.
- `council/steward.md` — API stability, production readiness, failure modes.

**Read each persona file before spawning reviewers** — use their full philosophy and "what you look for" sections in the agent prompts.

## Workflow

### Step 1: Set up the loop

Use the Ralph Wiggum skill to create an iteration loop:

```
ralph_start({
  name: "council-review-<pr-number>",
  taskContent: "<see template below>",
  maxIterations: 10,
  reflectEvery: 3
})
```

Task file template:
```markdown
# Council Review: PR #<number>

## Checklist
- [ ] Spawn round N reviewers
- [ ] Check verdicts
- [ ] Fix feedback if needed
- [ ] Re-review until all approve

## Verdict Tracker
| Reviewer | R1 |
|---|---|
| 🏛️ Architect | |
| 🗡️ Minimalist | |
| 🔨 Craftsperson | |
| 🛡️ Steward | |
```

### Step 2: Spawn reviewers

Use `subagent` with parallel `tasks` array — one task per council member. Each task must:

1. **Include the full persona** from the corresponding `council/*.md` file
2. **State the round number** and any prior feedback that was addressed
3. **Instruct them to:**
   - Fetch the diff: `gh pr diff <number>`
   - Read changed files in full for context
   - Run the full test suite: `npm test` (with `DATABASE_URL` if needed)
   - Post their review via `gh pr comment <number> --body "..."`
4. **Format** the comment header as `## <emoji> <Name> — Round N Review`
5. **End with a clear verdict:** APPROVE or REQUEST_CHANGES
6. **Only request changes for genuine blockers** — not nit-picks or follow-up material

### Step 3: Collect verdicts

After all 4 complete, check verdicts:
```bash
gh api repos/<owner>/<repo>/issues/<number>/comments \
  --jq '[.[] | select(.body | test("Round N")) | {id, verdict: (if (.body | test("(?i)approve")) then "APPROVE" else "REQUEST_CHANGES" end)}]'
```

### Step 4: Fix or ship

- **All APPROVE** → Done. Update task file. `<promise>COMPLETE</promise>`
- **Architect says "ship it"** overriding others → Done. Architect has final authority.
- **REQUEST_CHANGES** → Read the full comment for each reviewer who blocked. Spawn a worker subagent to fix the specific feedback, commit, push. Then go to Step 2 with Round N+1.

### Step 5: On each fix round

When spawning fix workers, be specific:
- Quote the exact feedback from each reviewer
- Reference file:line numbers they called out
- Run tests after fixing
- Commit with `fix: address round N council review feedback`

## Important Rules

- The **Architect can call "ship it"** to override remaining objections if they're nit-picks or follow-up material
- **Don't re-spawn reviewers who already approved** unless the fixes might have regressed their concerns — just spawn the ones who blocked plus the Architect
- Each round should **only address the specific feedback** from the previous round — no scope creep
- **Always run the full test suite** before re-spawning reviewers
- If the loop hits 5+ rounds, the Architect should be prompted to evaluate whether remaining objections are blockers or follow-ups
