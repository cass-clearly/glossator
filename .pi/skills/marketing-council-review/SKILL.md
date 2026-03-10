---
name: marketing-council-review
description: Run the marketing council review loop on public-facing content, positioning, or go-to-market strategy. Spawns all 5 reviewers (CMO, Copywriter, Channel Scout, Positioner, Growth Engineer) in parallel, collects verdicts, revises based on feedback, and repeats until all approve or the CMO calls it. Use when reviewing README updates, landing pages, launch copy, channel experiments, or market validation tests.
---

# Marketing Council Review Loop

Spawns all five marketing council members, collects verdicts, revises based on feedback, repeats until consensus or the CMO calls it. Uses Ralph Wiggum for iteration control — write `.ralph/<name>.md` before calling `ralph_start`.

See `agents/cmo/AGENTS.md` for the CMO's workflow and persona files in `agents/marketing-council/`.

## Workflow

### 0. Determine review type

Four review types, all use the same 5-member parallel spawn:

| Type                    | Verdicts                       | Trigger                                                    |
| ----------------------- | ------------------------------ | ---------------------------------------------------------- |
| **Copy/Content Review** | SHIP / REVISE / KILL           | Any public-facing content                                  |
| **Channel Strategy**    | PURSUE / NEEDS_EVIDENCE / PASS | New channel experiments, community engagement              |
| **Growth Experiment**   | PURSUE / NEEDS_EVIDENCE / PASS | Market validation tests, landing page tests, A/B tests     |
| **Positioning Shift**   | APPROVE / REQUEST_CHANGES      | Major repositioning (category change, competitive framing) |

### 1. Spawn reviewers

Use `subagent` with parallel `tasks` array — one per reviewer.

**Spawn template for content review (copy):**

```
Read agents/marketing-council/<member>.md and PRINCIPLES.md.
You are <Role Name>.
Review: <Content Type (README, landing page, Show HN post, etc.)>

<Paste the content being reviewed>

You must:
- Evaluate strictly through the lens of your assigned focus
- Post your verdict: SHIP / REVISE / KILL
- Be direct. No praise. No sugarcoating. Find what's weak.
- If requesting revisions, be specific: what's wrong, what's missing, and why.
```

**Spawn template for channel/experiment validation:**

```
Read agents/marketing-council/<member>.md and PRINCIPLES.md.
You are <Role Name>.
Evaluate: <Channel Strategy or Growth Experiment>

<Describe the channel or experiment being proposed>

You must:
- Evaluate strictly through the lens of your assigned focus
- Post your verdict: PURSUE / NEEDS_EVIDENCE / PASS
- Be direct. If this is a waste of time, say so. If it's promising, explain why.
- If requesting evidence, be specific: what data or validation is missing?
```

**All five members** always run: CMO, Copywriter, Channel Scout, Positioner, and Growth Engineer. The CMO participates as both a reviewer and the authority — they evaluate alongside the others and then synthesize.

### 2. Collect verdicts

Gather verdicts from all five members for Round N.

### 3. Synthesize or iterate

**For content review (copy):**

- **All SHIP verdicts** → Ship the content
- **CMO says "ship"** → Ship (CMO has final authority)
- **Any REVISE or KILL verdicts** → Revise based on feedback, re-spawn **all five** for Round N+1

**For channel/experiment validation:**

- **All PURSUE verdicts** → Execute the experiment or channel strategy
- **CMO says "pursue"** → Execute (CMO has final authority)
- **Any NEEDS_EVIDENCE verdicts** → Gather evidence, revise, re-spawn **all five** for Round N+1
- **Majority PASS verdicts** → Kill the idea

### 4. Escalation

If round 3+, add to the CMO's synthesis: "This is round 3+. If remaining objections are preference not substance, call it."

## Interface with Product Council

The Marketing Council and Product Council are peers, not hierarchy. They collaborate at key decision points:

### Marketing Validates Markets Before Product Builds

1. The Opportunist (Product Council) identifies a potential opportunity
2. The CMO asks The Growth Engineer to design a validation experiment
3. The Marketing Council reviews the experiment → verdict: PURSUE / NEEDS_EVIDENCE / PASS
4. If PURSUE → The Growth Engineer runs the experiment
5. The Growth Engineer reports results back to the Product Council
6. The Product Council evaluates the opportunity with marketing-validated evidence included

### Product Ships, Marketing Amplifies

1. The Engineering Council approves a PR that ships a new feature
2. The CMO is notified of the release
3. The Marketing Council reviews release copy: changelog entry, announcement post, docs update
4. Verdicts: SHIP / REVISE
5. Once approved, The Channel Scout distributes to the right channels

### Positioning Informs Product Strategy

1. The Positioner identifies a positioning shift opportunity
2. The CMO convenes the Marketing Council to evaluate the shift
3. If approved, the new positioning cascades to README, landing page, docs, and product roadmap considerations (CMO collaborates with CPO)

## Rules

- Always re-spawn **all five members** each round
- The CMO can override remaining objections with clear reasoning
- Marketing can validate markets before product builds — this is encouraged
- All public-facing copy goes through the council — no exceptions
- Positioning must be consistent across all surfaces (README, landing page, docs, launch posts)
- Channel experiments require defined success criteria upfront (The Growth Engineer enforces this)
- Developer marketing is earned, not bought — paid channels are low priority until organic channels are exhausted
