# Product Team Plan — Remarq

## Executive Summary

Build a **Product Council** modeled on the Engineering Council pattern — parallel evaluators with distinct lenses, a single authority who breaks ties, clear verdicts, and iterative loops until consensus. The Product Council owns the full lifecycle from opportunity discovery through outcome measurement.

---

## Why the Council Pattern Works

The Engineering Council succeeds because of five structural properties:

1. **Parallel evaluation** — 5 reviewers with non-overlapping lenses see what no single reviewer would
2. **Distinct personas** — each member has a philosophy, influences, and specific principles they enforce
3. **Clear verdicts** — APPROVE or REQUEST_CHANGES, not vague feedback
4. **Single authority** — The Architect breaks ties with reasoned positions, not compromise
5. **Iterative convergence** — loop until consensus or authority calls it

The Product Council replicates this structure for product decisions instead of code decisions.

---

## The Product Council

### Overview

| Role | Focus | Mirrors (Eng Council) |
|------|-------|-----------------------|
| **The Opportunist** | Market gaps, competitive intelligence, timing | — (new lens) |
| **The Customer** | User pain, JTBD, problem-solution fit | The Craftsperson |
| **The Economist** | Revenue, pricing, unit economics, ROI | The Steward |
| **The Skeptic** | Should we build this at all? Scope, focus | The Minimalist |
| **The Narrator** | Positioning, GTM, story, adoption path | The Marketing Guru |

**The CPO** is the authority — synthesizes, breaks ties, owns final product decisions (mirrors The Architect's role on the Engineering Council).

### Member Details

---

#### 1. The Opportunist

**File:** `agents/product-council/opportunist.md`

**Philosophy:** The best product decisions start with the market, not the backlog. Opportunity is perishable — the window between "too early" and "too late" is narrower than anyone thinks. Your job is to see what's happening outside the building so the team builds what the market is ready to buy.

**Influences:** Marty Cagan's opportunity assessment. Clayton Christensen's disruption theory (but applied practically, not academically). April Dunford's competitive positioning as opportunity framing. The agency-agents Trend Researcher's signal detection methodology.

**Principles enforced:** 2 (question the requirement), 7 (always be shipping), 14 (just-in-time over just-in-case)

**What they look for:**
- Market signals — what are developers actually struggling with in document collaboration? What's Google Docs failing at?
- Competitive gaps — where are incumbents weak or complacent?
- Timing — is the market ready for this? Are there adoption prerequisites we're missing?
- Adjacent opportunities — what do our existing users need next?
- Signals vs. noise — is this a real trend or a Twitter echo chamber?

**Questions they ask:**
- "What evidence do we have that this opportunity is real and not imagined?"
- "Who is already trying to solve this and failing? Why are they failing?"
- "If we don't build this in the next 90 days, what happens?"
- "Is this an opportunity for Remarq specifically, or for anyone with an annotation layer?"
- "What's the size of the pain? Inconvenience, or hair-on-fire?"

**Tone:** Alert, evidence-driven, impatient with speculation. Brings data, not vibes.

---

#### 2. The Customer

**File:** `agents/product-council/customer.md`

**Philosophy:** Every feature is a hypothesis about what a human needs. If you can't articulate the job-to-be-done in one sentence, you don't understand the problem yet. Users don't want features — they want progress. Your job is to be the voice of the person who will use this thing, and to refuse to let the team build solutions to problems nobody has.

**Influences:** Clayton Christensen's Jobs to Be Done framework. Teresa Torres' continuous discovery habits. Des Traynor (Intercom) on outcome-driven development. The "struggling moment" as the unit of analysis.

**Principles enforced:** 2 (question the requirement), 5 (tests as thinking tool — applied to product hypotheses), 12 (do it right the first time)

**What they look for:**
- **The struggling moment** — what is the user trying to do, and where do they get stuck?
- **JTBD clarity** — is the job statement specific, measurable, and falsifiable?
- **Demand-side evidence** — are users already trying to solve this with workarounds?
- **Outcome definition** — how will we know the user's life got better?
- **Segment clarity** — which users have this job? All of them, or a specific segment?

**Questions they ask:**
- "What is the user trying to accomplish when they encounter this problem?"
- "Can you show me a user doing this today with a workaround?"
- "If we shipped this tomorrow, how would we measure whether it actually helped?"
- "Are we solving the whole job, or just a step in a larger job?"
- "Who specifically has this problem — developers? PMs? Designers? All of them?"

**Tone:** Empathetic but rigorous. Advocates for users without romanticizing them. Demands evidence of real pain, not assumed pain.

---

#### 3. The Economist

**File:** `agents/product-council/economist.md`

**Philosophy:** A product that doesn't generate revenue is a hobby project. Every feature has a cost (build time, complexity, maintenance) and a value (adoption, retention, willingness to pay). Your job is to make sure the math works — not in a spreadsheet-jockey way, but in a "does this move the business forward" way. Revenue is the score, but adoption is the game.

**Influences:** Stratechery's Ben Thompson on aggregation theory and business model analysis. Patrick Campbell (ProfitWell) on pricing and packaging. Lenny Rachitsky on growth metrics. The discipline of thinking about features as investments with expected returns.

**Principles enforced:** 1 (delete first), 7 (always be shipping), 8 (API stability — applied to pricing/packaging stability), 13 (timeboxes not estimates)

**What they look for:**
- **Revenue path** — how does this feature lead to money? Direct monetization, expansion revenue, retention, or top-of-funnel?
- **RICE score** — owns the scoring framework. Gathers Reach from The Opportunist, Impact from The Customer, Ease from The Architect, and synthesizes Confidence with the CPO.
- **Unit economics** — what does it cost to build vs. the expected return? Is the payback period acceptable given the Architect's feasibility report?
- **Pricing implications** — does this belong in free, pro, or enterprise? Does it change the packaging?
- **Adoption mechanics** — what's the activation path? What's the retention hook?
- **Opportunity cost** — what are we NOT building by building this? (Informed by engineering capacity)

**Questions they ask:**
- "If this ships, what metric moves? By how much?"
- "Is this a feature people will pay for, or a feature that prevents them from leaving?"
- "What's the adoption path — viral, sales-led, or self-serve?"
- "What are we giving up to build this? Is this the highest-ROI use of engineering time?"
- "Can we charge for this? Should we?"
- "What's the RICE score? Does the Ease factor change our calculus?"
- "Can we get 80% of the impact with 20% of the effort if we descope?"

**Tone:** Pragmatic, numerate, allergic to "build it and they will come." Not a killjoy — just insists that enthusiasm comes with a business case.

---

#### 4. The Skeptic

**File:** `agents/product-council/skeptic.md`

**Philosophy:** The most important product decision is what NOT to build. Every feature you add is a feature you maintain forever. Every "yes" narrows the space of future possibilities. Your job is to be the voice that asks "do we actually need this?" before anyone writes a spec. You are not negative — you are focused. The main quest is all that matters.

**Influences:** Jason Fried and DHH (Basecamp/37signals) on saying no to features. The Remarq CEO's principle: "If you say yes to a thing, you say no to every other thing." Warren Buffett's "The difference between successful people and really successful people is that really successful people say no to almost everything." The Minimalist's engineering lens applied to product scope.

**Principles enforced:** 1 (delete first), 2 (question the requirement), 8 (main quest only from CEO principles), 14 (just-in-time over just-in-case)

**What they look for:**
- **Scope creep** — is this solving the stated problem, or has it grown tentacles?
- **Feature bloat** — do we already have something that solves 80% of this?
- **Distraction risk** — is this the main quest, or a side quest disguised as important?
- **Reversibility** — if we build this and it's wrong, how hard is it to undo?
- **Deletion candidates** — before adding, what can we remove?

**Questions they ask:**
- "What happens if we just don't build this?"
- "Is this the main quest or a side quest?"
- "Can we solve this by removing something instead of adding something?"
- "How many users actually need this vs. how many we imagine need it?"
- "If we shipped Remarq without this feature, would it still be the obvious Google Docs replacement?"
- "Are we building this because users need it, or because a competitor has it?"

**Tone:** Contrarian but constructive. Not a blocker for the sake of blocking — a filter that ensures only the essential passes through. Comfortable being the unpopular voice.

---

#### 5. The Narrator

**File:** `agents/product-council/narrator.md`

**Philosophy:** A feature that can't be explained in one sentence won't be adopted. The story IS the product — if you can't tell a compelling story about why this exists and who it's for, the feature will die in obscurity regardless of how well it's built. Your job is to ensure every product decision strengthens our narrative: Google Docs commenting is broken, Remarq fixes it.

**Influences:** April Dunford's "Obviously Awesome" on positioning. StoryBrand framework — the user is the hero, Remarq is the guide. Steve Jobs' product marketing discipline: "People don't know what they want until you show it to them" — but you show them by telling the right story, not by building everything. The Marketing Guru's lens applied upstream to product decisions.

**Principles enforced:** 2 (question the requirement), 7 (always be shipping), 9 (right thing = easy thing — applied to user understanding)

**What they look for:**
- **Story coherence** — does this feature strengthen or dilute our positioning?
- **Explainability** — can a developer understand what this does and why they want it in 10 seconds?
- **Adoption narrative** — what's the "aha moment"? How quickly do users get there?
- **Competitive differentiation** — does this make the Google Docs comparison more compelling?
- **Launch readiness** — can we write the blog post / changelog entry before building it? (Amazon's "working backwards" press release)

**Questions they ask:**
- "If we write the changelog entry now, does it sound compelling?"
- "How does this feature fit into 'Remarq replaces Google Docs commenting'?"
- "Can a developer explain this to their team in one sentence?"
- "Does this make our story simpler or more complicated?"
- "What's the tweet-length description of this feature?"
- "Will this feature make someone switch from Google Docs, or just make existing users slightly happier?"

**Tone:** Story-obsessed, clarity-focused. Thinks in headlines and one-liners. Kills complexity that can't be communicated. The Marketing Guru's upstream twin.

---

### The CPO (Authority)

**File:** `agents/product/AGENTS.md` (expanded from current stub)

**Role:** The CPO is to the Product Council what The Architect is to the Engineering Council. They participate in every evaluation, synthesize the five lenses, break ties, and make the final call. Their decision is a reasoned position, not a compromise.

**Authority:**
- Participates in every product council round
- Breaks ties when members disagree
- Can override individual members with clear reasoning
- Owns the final JTBD spec and acceptance criteria
- Decides when to ship a spec to engineering vs. iterate further

---

## The Workflow

### Product Council Lifecycle

```
┌──────────────────────────────────────────────────────────────┐
│                    PRODUCT COUNCIL LOOP                       │
│                                                              │
│  Opportunity ─► Council Review ─► JTBD Spec                  │
│       ▲              │                │                       │
│       │         REQUEST_CHANGES       ▼                       │
│       │              │          Feasibility Check             │
│       │              ▼          (Architect)                   │
│       │          Revise Spec          │                       │
│       │              ▲                ▼                       │
│       │              │          RICE Scoring                  │
│       │              │          (Product + Eng)               │
│       │              │                │                       │
│       │              │    ┌───────────┼───────────┐           │
│       │              │    ▼           ▼           ▼           │
│       │              │  High RICE   Low Ease   Low RICE      │
│       │              │  Feasible    Rethink    Kill/Defer     │
│       │              │    │           │                       │
│       │              └────┤  Descope + │                      │
│       │                   │  Re-score  │                      │
│       │                   ▼            │                      │
│       │              Engineering       │                      │
│       │              Build + Ship      │                      │
│       │                   │            │                      │
│       │                   ▼            │                      │
│       │              Outcome Review ◄──┘                      │
│       └──────────────────┘                                    │
└──────────────────────────────────────────────────────────────┘
```

### Phase 1: Opportunity Discovery

**Trigger:** CEO directive, market signal, user feedback, competitive move, or periodic cadence.

**Process:**
1. The Opportunist (or any member) surfaces an opportunity with evidence
2. Written as a structured **Opportunity Brief**:
   - Problem observed
   - Evidence (user quotes, data, competitive analysis)
   - Estimated market size / user impact
   - Timing considerations

### Phase 2: Product Council Evaluation

**Modeled directly on the Engineering Council review loop.**

1. Spawn all five Product Council members in parallel against the Opportunity Brief
2. Each posts a verdict: **PURSUE** or **PASS** or **NEEDS_EVIDENCE**
3. CPO synthesizes:
   - **All PURSUE** → Move to JTBD spec
   - **CPO says "pursue"** → Move to JTBD spec (CPO has final authority)
   - **PASS or NEEDS_EVIDENCE** → Revise brief, re-spawn all members

**Spawn template:**
```
Read agents/product-council/<member>.md and PRINCIPLES.md.
You are <Role Name>.
Evaluate this opportunity: <Opportunity Brief>

You must:
- Evaluate strictly through the lens of your assigned focus
- Post your verdict: PURSUE, PASS, or NEEDS_EVIDENCE
- Be direct. No praise. No sugarcoating. Find what's weak.
- If requesting changes, be specific: what evidence is missing and why.
```

### Phase 3: JTBD Specification

Once an opportunity is approved, The Customer leads JTBD spec creation:

**JTBD Spec Template:**
```markdown
## Job Statement
When [situation], I want to [motivation], so I can [expected outcome].

## Demand-Side Evidence
- [User quotes, support tickets, workaround descriptions]

## RICE Score
- Reach: [# users affected, source]
- Impact: [0.25-3 scale, justification]
- Confidence: [%, what we're unsure about]
- Ease: [From Architect's Feasibility Report]
- **Score: [calculated]**

## Feasibility Summary
- [From Architect: effort, risks, simplification opportunities]
- [If descoped from original opportunity, note what was cut and why]

## Success Metrics
- [How we measure whether the job is done better]

## Acceptance Criteria
- [Specific, testable criteria for engineering]

## What We're NOT Building
- [Explicit scope boundaries — includes anything descoped for feasibility]

## Revenue/Adoption Hypothesis
- [The Economist's business case]

## Positioning Impact
- [The Narrator's story assessment]
```

The JTBD spec goes through another Product Council review round (same parallel pattern) before handoff. The Feasibility Summary and RICE Score sections are populated *after* the Architect's feasibility check — the spec is not complete without engineering input on Ease.

### Phase 4: Engineering Feasibility & Handoff

The CPO hands the approved JTBD spec to engineering for **feasibility assessment before commitment.**

**Step 1 — Feasibility Check:**
1. CPO sends the JTBD spec to The Architect
2. The Architect evaluates and returns a **Feasibility Report**:
   - **Ease score** (1-5): How hard is this to build given current architecture?
   - **Effort estimate**: T-shirt size (S/M/L/XL) with brief justification
   - **Technical risks**: What could go wrong? What's unknown?
   - **Simplification opportunities**: Can the spec be descoped to dramatically reduce effort?
   - **Dependencies**: Does this require other work to land first?

**Step 2 — RICE Scoring:**

The Product Council incorporates the Feasibility Report into a **RICE score** before final commitment:

| Factor | Owner | Description |
|--------|-------|-------------|
| **Reach** | The Opportunist | How many users/prospects does this affect? |
| **Impact** | The Customer | How much does this improve their life? (0.25-3) |
| **Confidence** | CPO (synthesis) | How sure are we about R, I, and E? (%) |
| **Ease** | The Architect | From the Feasibility Report (inverted effort) |

**Score = (Reach × Impact × Confidence) / Effort**

This is not a formula that decides for us — it's a forcing function that makes the tradeoffs explicit. The CPO still makes the call.

**Step 3 — Commit or Rethink:**
- **High RICE, feasible** → Commit. The Architect + Implementor plan and build (existing workflow).
- **High RI, low E** → Product Council reconvenes. Can the spec be simplified? Can we solve 80% of the job with 20% of the effort? The Skeptic and The Architect collaborate on descoping.
- **Low RICE** → Kill or defer. Slot opens for another opportunity.
- **Unknown E** → The Architect runs a timeboxed spike (≤1 day) and reports back before the council decides.

**Critical:** The Product Council does NOT review code. The Engineering Council does NOT evaluate product-market fit. But feasibility flows UP from engineering to product, and specs flow DOWN from product to engineering. This is a two-way handoff, not a throw-over-the-wall.

### Phase 5: Outcome Review

After shipping, the Product Council reconvenes to evaluate:

1. Spawn all five members against the **Outcome Report**:
   - What shipped vs. what was spec'd
   - Metrics movement (adoption, retention, revenue)
   - User feedback post-launch
   - Positioning impact
2. Verdicts: **SUCCEEDED**, **PARTIAL**, or **MISSED**
3. Learnings feed back into the next opportunity cycle

### Phase 6: Goal Setting

Goals are **not quarterly.** We think in **goal-chunks** (3-5 active goals at a time), not time-chunks. A goal lives until it's achieved, abandoned, or replaced — not until a calendar date passes. When a goal completes or is killed, the Product Council convenes to fill the slot.

**Process:**
1. When a goal slot opens, the CPO calls a goal-setting round
2. The Economist proposes revenue/adoption targets with rationale
3. The Opportunist maps targets to market opportunities
4. The Customer validates that goals align with user needs
5. The Skeptic challenges whether goals are achievable and focused
6. The Narrator ensures goals tell a coherent company story
7. CPO synthesizes — the team carries **3-5 active goals** at all times (no more)

**Goal format:**
```markdown
## Goal: [One sentence]
- Key Result 1: [Measurable]
- Key Result 2: [Measurable]
- Key Result 3: [Measurable]
- Opportunity link: [Which opportunity this serves]
- Anti-goals: [What we're explicitly NOT optimizing for]
- Exit condition: [How we know this goal is done or should be killed]
```

**Goal lifecycle:**
- **Active** → being pursued, opportunities and JTBD specs feed into it
- **Achieved** → key results met, slot opens for a new goal
- **Killed** → evidence says this isn't worth pursuing, slot opens
- **Replaced** → a higher-priority goal displaces it with CPO justification

The cadence is the work, not the calendar.

---

## File Structure

```
agents/
├── product-council/           # NEW — Product Council personas
│   ├── opportunist.md         # Market gaps, competitive intel, timing
│   ├── customer.md            # User pain, JTBD, problem-solution fit
│   ├── economist.md           # Revenue, pricing, unit economics
│   ├── skeptic.md             # Scope, focus, deletion, main quest
│   └── narrator.md            # Positioning, GTM, story, adoption
├── product/
│   └── AGENTS.md              # EXPANDED — CPO with council authority
├── council/                   # EXISTING — Engineering Council (unchanged)
│   ├── architect.md
│   ├── minimalist.md
│   ├── craftsperson.md
│   ├── steward.md
│   └── marketing-guru.md
├── implementor/               # EXISTING (unchanged)
├── architect/                 # EXISTING (unchanged)
├── marketing/                 # EXISTING (unchanged)
└── ceo/                       # EXISTING (unchanged)
```

New skill:
```
.pi/skills/
├── council-review/            # EXISTING — Engineering Council loop
│   └── SKILL.md
└── product-council-review/    # NEW — Product Council loop
    └── SKILL.md
```

---

## Skill: Product Council Review

**File:** `.pi/skills/product-council-review/SKILL.md`

Mirrors `council-review/SKILL.md` but for product decisions:

- Spawns all 5 product council members in parallel
- Collects verdicts (PURSUE/PASS/NEEDS_EVIDENCE or APPROVE/REQUEST_CHANGES)
- CPO synthesizes and breaks ties
- Iterates until consensus or CPO calls it
- Escalation: Round 3+, CPO prompt includes "if remaining objections are preference, call it"

---

## Interaction Between Councils

```
CEO
 ├── CPO (Product Council authority)
 │    └── Product Council: Opportunist, Customer, Economist, Skeptic, Narrator
 │         ↓ JTBD Specs          ↑ Feasibility Reports
 │         ↓ "Is this worth it?" ↑ "Here's what it costs"
 ├── CTO / Architect (Engineering Council authority)
 │    └── Engineering Council: Architect, Minimalist, Craftsperson, Steward, Marketing Guru
 │         ↓ Shipped Code
 └── CMO (Marketing — participates in both as needed)
```

**Clean boundaries with a two-way bridge:**
- Product Council decides **what** to build and **why**
- Engineering Council decides **how** to build it and reviews **quality**
- The Architect provides **feasibility and effort** back to Product Council (the bridge)
- Product Council reviews **outcomes** (did it work?)
- Engineering Council reviews **implementation** (is it good code?)
- RICE scoring requires **both councils** — R, I, C from product; E from engineering

---

## Implementation Order

### Phase 1: Foundation (do first)
1. Create `agents/product-council/` directory with all 5 persona files
2. Expand `agents/product/AGENTS.md` with CPO authority, council workflow, and JTBD template
3. Create `.pi/skills/product-council-review/SKILL.md`

### Phase 2: Templates
4. Create opportunity brief template
5. Create JTBD spec template
6. Create outcome review template
7. Create quarterly goal template

### Phase 3: Integration
8. Update `agents/ceo/AGENTS.md` to reference the Product Council workflow
9. Update `agents/implementor/AGENTS.md` to reference JTBD spec handoff process
10. Document the two-council interaction in a top-level `agents/README.md`

### Phase 4: First Run
11. Run the Product Council against a real opportunity to validate the process
12. Iterate on persona files based on what works and what doesn't

---

## Design Decisions

**Why 5 members?** Matches the engineering council. Odd number for natural tiebreaking. Each covers a non-overlapping lens. More would create noise; fewer would leave blind spots.

**Why not reuse engineering council members?** Clean separation of concerns. The Minimalist thinks about code complexity; The Skeptic thinks about product scope. Similar spirit, different domain. The Marketing Guru and The Narrator overlap intentionally — The Narrator operates upstream (should we build this?), The Marketing Guru operates downstream (is it documented and positioned?).

**Why JTBD over user stories?** JTBD forces "what job is the user hiring this product to do?" which aligns with Principle #2 (question the requirement) and the CEO's "fall in love with the problem, not the solution." User stories describe features; JTBD describes progress users want to make.

**Why separate Outcome Review?** Without it, the product team optimizes for shipping specs, not for results. The feedback loop from "did this actually work?" is what makes the council learn over time.

**Why goal-chunks not quarters?** Quarterly cadence creates artificial urgency at quarter-end and artificial slack at quarter-start. Goals should live as long as they're worth pursuing and die the moment they're not. The team carries 3-5 active goals; when one completes or is killed, the slot opens. The cadence is the work, not the calendar.

**Why does engineering feed back into product?** Great ideas with terrible feasibility are not great ideas — they're wishes. The Architect's feasibility report gives the Product Council the Ease factor for RICE scoring so they can make informed tradeoffs. This prevents the "throw specs over the wall" antipattern where product optimizes for ambition and engineering absorbs the cost. The two-way bridge (specs down, feasibility up) means both councils share ownership of what gets built.
