# ADR-002: Product Council Structure

**Status:** Accepted
**Date:** 2026-03-08

## Context

Remarq needs a structured product team that can find opportunities, evaluate them, write JTBD specs, hand work to engineering, review outcomes, and manage goals. The Engineering Council (5 parallel reviewers + Architect authority) has been the most effective team structure. We need the same rigor for product decisions.

## Decision

Create a Product Council with 5 members mirroring the Engineering Council pattern:

| Role | Focus |
|------|-------|
| The Opportunist | Market gaps, competitive intel, timing. Actively hunts for opportunities. |
| The Advocate | User pain, JTBD, problem-solution fit. Voice of the user. |
| The Economist | Revenue, pricing, unit economics. Owns RICE scoring framework. |
| The Skeptic | Scope, focus, deletion. Challenges whether we should build at all. |
| The Narrator | Positioning, GTM, story. Ensures features strengthen the narrative. |

The CPO serves as authority (like the Architect on the Engineering Council).

Key structural decisions:

- **Two-way feasibility bridge.** Specs flow down from product to engineering; feasibility reports flow up from the Architect. The Architect can also initiate Opportunity Briefs for technical opportunities. RICE scoring requires both councils — R/I/C from product, E from engineering.
- **Goal-chunks, not quarters.** 3-5 active goals at all times. Goals live until achieved/killed/replaced. The cadence is the work, not the calendar.
- **Outcome review.** Product Council reconvenes post-ship to evaluate results, creating a learning feedback loop.
- **Clean boundaries.** Product Council reviews opportunities and outcomes, never code. Engineering Council reviews code, never market fit. Neither crosses into the other's domain.

## Consequences

**Easier:** Structured opportunity evaluation, evidence-based product decisions, clear handoff to engineering with JTBD specs, feedback loop from outcomes back to strategy.

**Harder:** More evaluation overhead (10 agents total across both councils for 1 implementor). Must watch for evaluation fatigue. If two product council members consistently produce identical verdicts, they should be merged.

**Trade-off:** The Narrator and the Marketing Guru are the same lens (positioning, story, clarity) at different stages — upstream and downstream. This is intentional but requires explicit boundary conventions to avoid duplication or gaps.
