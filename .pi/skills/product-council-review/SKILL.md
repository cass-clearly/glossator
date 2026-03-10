---
name: product-council-review
description: Run the product council review loop on an opportunity or JTBD spec. Spawns all 7 product reviewers (Opportunist, Advocate, Economist, Skeptic, Narrator, Copywriter, Channel Scout) in parallel, collects verdicts. The CPO (see agents/product-council/cpo.md) synthesizes and breaks ties. Repeats until all approve or the CPO calls it. Use when evaluating opportunities, reviewing JTBD specs, or conducting outcome reviews.
---

# Product Council Review Loop

Spawns all seven product council members, collects verdicts, revises based on feedback, repeats until consensus or the CPO calls it. Uses Ralph Wiggum for iteration control — write `.ralph/<name>.md` before calling `ralph_start`.

See `agents/product-council/cpo.md` for the CPO's persona and authority, `agents/cpo/AGENTS.md` for the CPO's workflow, and persona files in `agents/product-council/`.

## Workflow

### 0. Determine review type

Three review types, all use the same 5-member parallel spawn:

| Type                       | Verdicts                       | Trigger                            |
| -------------------------- | ------------------------------ | ---------------------------------- |
| **Opportunity Evaluation** | PURSUE / PASS / NEEDS_EVIDENCE | New opportunity brief              |
| **Spec Review**            | APPROVE / REQUEST_CHANGES      | JTBD spec ready for review         |
| **Outcome Review**         | SUCCEEDED / PARTIAL / MISSED   | Feature shipped, metrics available |

### 1. Spawn reviewers

Use `subagent` with parallel `tasks` array — one per reviewer.

**Spawn template:**

```
Read agents/product-council/<member>.md and PRINCIPLES.md.
You are <Role Name>.
<Review type>: <Brief / Spec / Outcome Report>

You must:
- Evaluate strictly through the lens of your assigned focus
- Post your verdict: <appropriate verdicts for review type>
- Be direct. No praise. No sugarcoating. Find what's weak.
- If requesting changes, be specific: what's missing, what's wrong, and why.
```

**All eight** always run: CPO, Opportunist, Advocate, Economist, Skeptic, Narrator, Copywriter, and Channel Scout. The CPO participates in every round as both a reviewer and the authority — they evaluate alongside the others and then synthesize the results. This mirrors how the Architect operates on the Engineering Council.

### 2. Collect verdicts

Gather verdicts from all seven members for Round N.

### 3. Synthesize or iterate

- **All positive verdicts** → Done (move to next phase)
- **CPO says "proceed"** → Done (CPO has final authority)
- **Negative verdicts** → Revise based on feedback, re-spawn **all seven** for Round N+1

### 4. Feasibility bridge (Spec Review only)

After the Product Council approves a JTBD spec:

1. Send to The Architect for a Feasibility Report
2. Populate the RICE Score and Feasibility Summary sections
3. Re-spawn the Product Council for a final review with the complete spec
4. CPO decides: commit, descope, or kill

### 5. Escalation

If round 3+, add to the CPO's synthesis: "This is round 3+. If remaining objections are preference not substance, call it."

## When to Include Copywriter and Channel Scout

The Copywriter and Channel Scout run on **all** opportunity evaluations and spec reviews — they need to know what's being built to prepare copy and channels. However, their verdicts carry specific weight:

- **The Copywriter** flags if the story can be told clearly. If the positioning is muddled, if the value prop can't be explained in one sentence, if the feature can't be marketed — that's a blocker. They escalate to the Narrator for story-level changes.
- **The Channel Scout** flags if there's a reachable audience. If we can't identify where the buyers are, if the channel strategy is spray-and-pray, if distribution requires unsustainable effort — that's a signal to reconsider the opportunity.

Both members participate in all rounds, but their objections are often upstream of the feature itself. A feature that can't be explained (Copywriter) or can't be distributed (Channel Scout) might need repositioning (Narrator) or market re-validation (Opportunist), not just revision.

## Rules

- Always re-spawn **all seven reviewers** each round
- The CPO can override remaining objections with clear reasoning
- Feasibility input from The Architect is required before final commitment
- RICE scoring is not complete without the Ease factor from engineering
- The Product Council does NOT review code — that's the Engineering Council's job
