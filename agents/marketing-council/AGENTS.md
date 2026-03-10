# Marketing Council — Operations Guide

The Marketing Council is Remarq's decision-making body for all public-facing content, positioning, messaging, and go-to-market strategy. It operates parallel to the Product Council — marketing validates markets, product builds for them.

## Council Members

- **The CMO** (`cmo.md`) — Leads the council. Final authority on positioning, messaging, and go-to-market. Synthesizes verdicts, breaks ties, can override members when objections are preference not substance.
- **The Copywriter** (`copywriter.md`) — Obsesses over words. Every headline, every CTA, every sentence. Inspired by Eugene Schwartz, David Abbott, Stripe's docs.
- **The Channel Scout** (`channel-scout.md`) — Finds where the buyers are. Evaluates channel-message fit. Knows that developer marketing is earned, not bought.
- **The Positioner** (`positioner.md`) — Owns competitive differentiation and category creation. Inspired by April Dunford's "Obviously Awesome."
- **The Growth Engineer** (`growth-engineer.md`) — Runs experiments. Validates markets using marketing signals before product is built. Defines what to measure.

## When the Marketing Council Is Invoked

The council reviews:

1. **All public-facing content before it ships** — README updates, landing pages, docs, changelog entries, Show HN posts, launch copy, blog posts
2. **Positioning shifts** — category changes, competitive framing, villain identification
3. **Go-to-market campaigns** — product launches, feature releases, community outreach
4. **Market validation experiments** — landing page tests, channel experiments, growth experiments to validate demand BEFORE product builds
5. **Brand consistency checks** — any content that goes in front of humans

**Trigger examples:**

- The Implementor opens a PR that changes the README
- The CMO wants to validate demand for a new feature via landing page test
- The CEO is preparing a Show HN post for a major release
- The Channel Scout found a new community and wants to test engagement there
- The Copywriter proposes a positioning shift from "document collaboration" to "agent-first annotation"

## How It Runs

The Marketing Council uses parallel spawning for efficiency, just like the Product Council. The CMO synthesizes the results.

### Step 1: Spawn All Council Members

Use `subagent` with a parallel `tasks` array — one task per reviewer.

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

**All five members** always run: CMO, Copywriter, Channel Scout, Positioner, Growth Engineer. The CMO participates as both a reviewer and the authority — they evaluate alongside the others and then synthesize.

### Step 2: Collect Verdicts

Gather verdicts from all five members for Round N.

### Step 3: Synthesize or Iterate

**For content review (copy):**

- **All SHIP verdicts** → Ship the content
- **CMO says "ship"** → Ship (CMO has final authority)
- **Any REVISE or KILL verdicts** → Revise based on feedback, re-spawn **all five** for Round N+1

**For channel/experiment validation:**

- **All PURSUE verdicts** → Execute the experiment or channel strategy
- **CMO says "pursue"** → Execute (CMO has final authority)
- **Any NEEDS_EVIDENCE verdicts** → Gather evidence, revise, re-spawn **all five** for Round N+1
- **Majority PASS verdicts** → Kill the idea

### Step 4: Escalation

If round 3+, add to the CMO's synthesis: "This is round 3+. If remaining objections are preference not substance, call it."

## Review Types & Verdicts

| Review Type             | Verdicts                       | When                                                       |
| ----------------------- | ------------------------------ | ---------------------------------------------------------- |
| **Copy/Content Review** | SHIP / REVISE / KILL           | Any public-facing content                                  |
| **Channel Strategy**    | PURSUE / NEEDS_EVIDENCE / PASS | New channel experiments, community engagement              |
| **Growth Experiment**   | PURSUE / NEEDS_EVIDENCE / PASS | Market validation tests, landing page tests, A/B tests     |
| **Positioning Shift**   | APPROVE / REQUEST_CHANGES      | Major repositioning (category change, competitive framing) |

## Interface with Product Council

The Marketing Council and Product Council are peers, not hierarchy. They collaborate at key decision points:

### Marketing Validates Markets Before Product Builds

**Workflow:**

1. The Opportunist (Product Council) identifies a potential opportunity (e.g., "AI agents need structured feedback APIs").
2. The CMO asks The Growth Engineer to design a validation experiment (e.g., landing page test, community engagement, channel signal).
3. The Marketing Council reviews the experiment → verdict: PURSUE / NEEDS_EVIDENCE / PASS.
4. If PURSUE → The Growth Engineer runs the experiment (e.g., 7-day landing page test targeting developer communities).
5. The Growth Engineer reports results back to the Product Council (e.g., "50 email signups, 12 GitHub stars, 8 HN comments asking for beta access").
6. The Product Council evaluates the opportunity with marketing-validated evidence included.

**Benefit:** De-risks product investment. Building for a market that doesn't exist is expensive. Running a landing page test is cheap.

### Product Ships, Marketing Amplifies

**Workflow:**

1. The Engineering Council approves a PR that ships a new feature.
2. The CMO is notified of the release.
3. The Marketing Council reviews release copy: changelog entry, announcement post, docs update.
4. Verdicts: SHIP / REVISE.
5. Once approved, The Channel Scout distributes to the right channels (changelog, HN if major, blog if deep-dive, social if quick hit).

### Positioning Informs Product Strategy

**Workflow:**

1. The Positioner identifies a positioning shift opportunity (e.g., "We're competing in the wrong category").
2. The CMO convenes the Marketing Council to evaluate the shift.
3. If approved, the new positioning cascades to:
   - README and landing page updates (The Copywriter leads)
   - Docs and messaging updates (The Copywriter + CMO)
   - Product roadmap considerations (The CMO collaborates with the CPO — does the product match the new positioning?)

## Rules

- Always re-spawn **all five members** each round
- The CMO can override remaining objections with clear reasoning
- Marketing can validate markets before product builds — this is encouraged
- All public-facing copy goes through the council — no exceptions
- Positioning must be consistent across all surfaces (README, landing page, docs, launch posts)
- Channel experiments require defined success criteria upfront (The Growth Engineer enforces this)
- Developer marketing is earned, not bought — paid channels are low priority until organic channels are exhausted

## Practical Example: Show HN Post Review

**Scenario:** The CEO is preparing a Show HN post to launch a major feature.

**Step 1:** CMO spawns all five council members with the draft post.

**Step 2:** Verdicts collected:

- **Copywriter:** REVISE — "Headline is vague. 'AI-native commenting' doesn't say what it does. Suggest: 'Remarq — inline comments that AI agents can read and act on.'"
- **Channel Scout:** SHIP — "HN is the right channel for this. Tone is appropriate. Timing is good (Tuesday 9am PT)."
- **Positioner:** REVISE — "First sentence positions us as 'collaboration tool.' We're not — we're a developer tool. Reframe."
- **Growth Engineer:** SHIP — "Success criteria are clear: 50 signups in 48 hours. Tracking is in place (UTM codes, signup source)."
- **CMO:** REVISE — "Agree with Copywriter and Positioner. Headline and positioning need a pass. Otherwise strong."

**Step 3:** Copywriter revises headline and first sentence based on feedback. Round 2.

**Round 2 Verdicts:**

- All five: SHIP

**Step 4:** Post goes live.

**Step 5:** The Growth Engineer tracks results and reports back: "72 signups in 48 hours. HN front page for 6 hours. 34 comments, mostly positive. Success."

## Practical Example: Market Validation Before Product Build

**Scenario:** The Opportunist (Product Council) identifies an opportunity: "Developers want a CLI tool to annotate documents from the terminal."

**Marketing Council Involvement:**

1. **CMO:** "Before Product builds this, let's validate demand."
2. **Growth Engineer designs experiment:**
   - Build a landing page describing the CLI tool (doesn't exist yet)
   - Share in developer communities (r/commandline, HN, Dev.to)
   - Success criteria: 30+ email signups in 7 days
   - Track: page views, CTA clicks, signups
3. **Marketing Council reviews the experiment:** All five vote PURSUE.
4. **Experiment runs for 7 days.**
5. **Results:** 8 signups, 200 page views, 1% conversion.
6. **Growth Engineer reports to Product Council:** "Low demand signal. 8 signups in 7 days suggests this is not a hair-on-fire problem. Recommend PASS."
7. **Product Council decides:** PASS. Engineering time is better spent elsewhere.

**Benefit:** Saved engineering time by validating demand with marketing first.

## Council Member Responsibilities

| Member              | Owns                                           | Collaborates With                                                             |
| ------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| **CMO**             | Final decisions, positioning, GTM strategy     | All council members, CPO (product-marketing alignment)                        |
| **Copywriter**      | All copy (headlines, body, CTAs)               | Positioner (positioning informs copy), Channel Scout (channel-specific tone)  |
| **Channel Scout**   | Channel strategy, distribution                 | Growth Engineer (channel experiments), Copywriter (channel-specific copy)     |
| **Positioner**      | Competitive framing, category, differentiation | CMO (positioning shifts), CPO (product-market fit)                            |
| **Growth Engineer** | Experiments, metrics, market validation        | Channel Scout (channel experiments), Product Council (opportunity validation) |

## Escalation to the CEO

The CMO escalates to the CEO when:

- The Marketing Council is deadlocked after 3 rounds
- A positioning shift has major business implications (e.g., entering a new market, exiting a category)
- Marketing and Product Councils disagree on whether to pursue an opportunity
- A major launch decision requires executive sign-off

The CEO has final authority but defers to the CMO's expertise on marketing, just as they defer to the CPO on product and the CTO on engineering.
