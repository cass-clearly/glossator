# Remarq — Claude Code Instructions

## Engineering Principles

These principles govern all decisions in this codebase — planning, implementation, and review. They are not suggestions.

**1. Delete first, then simplify, then accelerate, then automate.**
Before writing a line of code: can this requirement be deleted? Can it be solved with less? If you're not surprised by how little you needed, you wrote too much.

**2. Question the requirement before touching code.**
The most dangerous requirements are the ones no one questions. Who asked for this, why, and what's the actual goal? The wrong problem solved perfectly is still failure.

**3. Make it work. Make it right. In that order.**
Red-green-refactor. Write the failing test first, make it pass by any means, then refactor. No clever code on the first pass. Never skip the refactor step.

**4. Simple design beats clever design.**
Priority order: (1) passes tests, (2) reveals intent, (3) no duplication, (4) minimal elements. When in doubt, delete the abstraction.

**5. Tests are a thinking tool, not a deliverable.**
Write tests to discover the design, not to prove it. Coverage is a lagging indicator. A test suite that doesn't make you more confident changing the code isn't working.

**6. Refactoring is not optional.**
Before adding a feature: make the change easy, then make the easy change. Code that can't be changed safely is a liability. "We'll clean it up later" is a lie.

**7. Always be shipping.**
An imperfect thing shipped beats a perfect thing in review. "Enough" is a legitimate engineering decision. Cut scope before cutting quality.

**8. API stability is a feature.**
Once an endpoint is public, breaking it has real cost to consumers. Prefer additive changes. Mark things deprecated before removing them. API consumers shouldn't need to read changelogs to stay unbroken.

**9. The right thing should be the easy thing.**
Design so the happy path is obvious and the wrong path takes effort. If you need caveats to explain how to use an endpoint correctly, the design is wrong.

**10. Truth-seeking over face-saving.**
Code review is not a social event. Candor is required; praise is not. The goal is truth, not comfort. Come with reasoning; change your position when you see better reasoning.

**11. Getting to right beats being right.**
The goal is the best global outcome — not for any reviewer to win. Contradictory feedback is a signal to dig deeper, not pick a side. The deciding voice finds the truth that resolves the contradiction.

**12. Do it right the first time.**
Shortcuts that aren't named become permanent. If you're cutting a corner, name it, comment it, file it. Quick hacks that ship without acknowledgment become the next system's foundation.

**13. No estimates — timeboxes instead.**
Estimates are harmful. Scope to what can be done well in the time available. If a feature can't be done well, cut or defer it.

**14. Just-in-time over just-in-case.**
Don't build for the future requirement that hasn't arrived. Patterns should emerge from working code, not be imposed upfront. Premature abstraction is YAGNI with extra steps.

**15. Slow is smooth. Smooth is fast.**
Controlled execution beats full throttle. The pressure to ship fast is often what creates the slowdown. Understand the problem fully before writing a line.

---

## The Council

All significant work goes through the Council — first at planning, then at code review. The Council reviews each round until all members approve. No human review is needed unless the Council flags it explicitly.

**No member sugarcoats. Praise is not necessary. Candor is required.**

The goal is the best global outcome, not for any one member to be right.

### Council Members

Each member has a detailed persona file in `agents/council/`. Read the full file before spawning each reviewer.

| Role                  | File                        | Principles                  | Focus                                                   |
| --------------------- | --------------------------- | --------------------------- | ------------------------------------------------------- |
| 🔍 The Minimalist     | `agents/council/minimalist.md`     | 1, 2, 4, 9, 14              | Scope, simplicity, delete-first                         |
| 🔨 The Craftsperson   | `agents/council/craftsperson.md`   | 3, 5, 6, 12                 | TDD, refactoring, code quality                          |
| 🛡️ The Steward        | `agents/council/steward.md`        | 8, 9, 13, 15                | API stability, production readiness, failure modes      |
| 🏛️ The Architect      | `agents/council/architect.md`      | 7, 10, 11 + all on deadlock | Coherence, shipping, tiebreaker                         |
| 📣 The Marketing Guru | `agents/council/marketing-guru.md` | 2, 7, 9, 15                 | Every PR: changelog, docs, brand consistency, marketing |

> **📣 The Marketing Guru** reviews every PR. Every change is an opportunity to ensure documentation, changelogs, and public-facing materials reflect what's shipping. The Marketing Guru checks that new features are discoverable, the changelog is current, and the brand narrative stays consistent — Google Docs is the villain we're conquering.

### How to Spawn Council Members

For each council member, spawn a fresh agent with this template:

```
Read agents/council/<member>.md and CLAUDE.md (Engineering Principles section).
You are <Role Name>.
<Review type: "Review this plan:" | "Review PR:"> <URL or plan text>

You must:
- Run the full test suite and confirm it passes before reviewing
- Review strictly through the lens of your assigned principles
- Post your review as a comment via: gh pr comment <PR URL> --body "**[<Role Name>]** APPROVE\n\n..." OR "**[<Role Name>]** REQUEST CHANGES\n\n..."
- Be direct. No praise. No sugarcoating. Find what's wrong.
- If requesting changes, be specific: what to fix and why.
```

### Council Process

1. **Spawn all five** council members in parallel against the plan or PR. The Marketing Guru reviews every PR to ensure public-facing materials stay current.
2. **Collect feedback** — each posts a comment with approve or request-changes
3. **If any request changes:** address the feedback, push, re-spawn all reviewers
4. **Repeat until all spawned reviewers approve** in the same round
5. **The Architect decides** when reviewers contradict each other
6. **Ship** when all spawned reviewers approve — no further human review required unless explicitly flagged

### Pi Integration

The council workflow is automated via pi skills and prompt templates:

- **Skill:** `.pi/skills/council-review/SKILL.md` — Load this to run the full review loop. It handles spawning reviewers, collecting verdicts, fixing feedback, and iterating. Uses Ralph Wiggum for loop control.
- **Prompt template:** `.pi/prompts/new-work.md` — When running via `pi -p`, use the pi prompt template command `/new-work <description>` to kick off the full Plan → Implement → Council Review → Merge workflow.

When running via `pi -p`, the agent will see this CLAUDE.md and the available skills/templates automatically. Use the `/new-work` prompt template for new features or `council-review` skill directly for reviewing existing PRs.

---

## Git Workflow (Required for All Meaningful Work)

Every meaningful change must follow this process. No exceptions.

### 1. Branch

Create a feature branch off `main` before starting any work:

```
git checkout main && git pull
git checkout -b feature/<short-description>
```

### 2. Plan First (Council Review Round 1)

Before writing any code, write a brief plan:

- What problem does this solve?
- What's the simplest design?
- What are the API changes (if any)?
- What's the test strategy?

Spawn all five Council members against the plan. Address feedback. Do not start implementation until the Council approves the plan.

### 3. Implement with TDD

Follow red-green-refactor strictly:

1. Write a failing test for the next small unit of behavior
2. Write the minimum code to make it pass
3. Refactor — clean the code without changing behavior
4. Repeat

Never write implementation code without a failing test first. Never skip the refactor step.

### 4. Commit + Push

Commit with clear messages. Push the branch:

```
git push -u origin feature/<short-description>
```

### 5. Open a PR

```
gh pr create --title "<concise title>" --body "<what changed and why>"
```

PR description must use the template in `.github/pull_request_template.md`. Fill in all sections.

**When adding or changing API endpoints:**

- Include an endpoint table in the PR description (in the "New/Changed Endpoints" section)
- Update the README API reference (`README.md` → API Reference section) with the new endpoints, matching the existing table format

### 6. Wait for CI Green

CI runs automatically on push: lint → format check → build → tests with coverage. **Do not request Council review until CI passes.** If CI fails, fix the failure and push again.

### 7. Council Review (only after CI green)

Spawn all five Council members against the PR. Each posts a review. Address all requested changes. Re-spawn all reviewers. CI must pass again before the next review round. Repeat until all approve.

The Council approves. Human review is not required unless the Council explicitly flags it.

### 8. Merge (only after CI green + all four approve)

```
gh pr merge --squash --delete-branch
```

---

## Testing & Coverage

Target 80-90% line coverage. 100% is a waste of time — diminishing returns kick in hard.

### Running tests

- **Server tests:** `npm run test:server`
- **Client tests:** `npm run test:client`
- **All tests:** `npm test`
- **Everything (lint + format + tests):** `npm run check`

Both suites use `node:test` + `node:assert/strict` and `c8` for coverage with 80% line threshold.

### Linting & Formatting

- **Lint:** `npm run lint` (ESLint — correctness, async safety, code clarity)
- **Format check:** `npm run format:check` (Prettier — consistent style)
- **Auto-format:** `npm run format` (Prettier — fix formatting in-place)

ESLint catches real bugs (strict equality, unused vars, async pitfalls). Prettier handles all style decisions (quotes, spacing, line width). Don't argue about formatting — Prettier decides.

CI runs both checks. Code that fails lint or format check will not be reviewed.

### Utility modules

Pure functions live in `feedback-layer/src/utils/` as individual modules. These are imported by both the source files and the test files directly — no `_testExports` hacks needed. When adding testable logic, extract it to a utility file in this directory.
