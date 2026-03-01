---
description: Plan-first workflow for new work — scout, plan, implement, council review, merge
---

## New Work: $@

Follow the full workflow from CLAUDE.md strictly. Here's the sequence:

### Phase 1: Plan
1. **Scout** the codebase — understand the relevant files, patterns, and constraints
2. **Plan** the implementation:
   - What problem does this solve?
   - What's the simplest design?
   - What are the API changes (if any)?
   - What's the test strategy?
   - What are the risks?
3. **Present the plan to the user** for approval before writing any code

### Phase 2: Implement
1. Create a feature branch off `main`
2. Set up a worktree if needed: `git worktree add .claude/worktrees/<name> -b feature/<name>`
3. Follow TDD: red-green-refactor
4. Commit with clear messages, push
5. Open a PR with `gh pr create`

### Phase 3: Council Review
1. Load the council-review skill by reading `.pi/skills/council-review/SKILL.md`
2. Run the council review loop using Ralph Wiggum for iteration control
3. Fix feedback, re-review, loop until all 4 council members approve or the Architect calls it
4. Report final status

### Phase 4: Merge
After council approval: `gh pr merge --squash --delete-branch`

Do NOT skip the planning phase. Do NOT merge without council approval.
