---
name: opportunity-discovery
description: Run the Opportunist's discovery workflow to find new product opportunities. Scans developer communities, competitive landscape, market signals, and existing user feedback. Produces Opportunity Briefs for anything with ≥2 independent signals. Use when you need new opportunities to evaluate, or when the CPO has an open goal slot to fill.
---

# Opportunity Discovery

Runs The Opportunist's 5-step discovery workflow, then hands the resulting briefs to the Product Council for evaluation.

## Workflow

### 1. Ground in current state

Read these files to understand what Remarq is and what matters right now:

- `README.md` — what Remarq does, who it's for
- `docs/goals.md` — active goals (if it exists). Opportunities that serve active goals get priority.
- `agents/product-council/opportunist.md` — the full discovery workflow and hunting grounds
- `agents/cpo/templates/opportunity-brief.md` — the brief template

### 2. Hunt

Execute the Opportunist's discovery workflow (Steps 2, 2b, and 3 from `agents/product-council/opportunist.md`):

- Scan the hunting grounds using web search: developer communities (GitHub, HN, Reddit, SO, Dev.to), competitive landscape (direct competitors, adjacent tools, AI writing tools), market signals (Product Hunt, VC news, API-first trends), existing user feedback
- Discover new hunting grounds — new communities, platforms, content sources, competitors
- Classify every signal: **hair-on-fire**, **growing pain**, **interesting noise**, or **irrelevant**
- The bar for a brief is **≥2 independent signals** pointing to the same pain

### 3. Write briefs

For each opportunity that clears the bar, write an Opportunity Brief using the template in `agents/cpo/templates/opportunity-brief.md`.

If no opportunities clear the bar, say so. No briefs is a valid outcome — don't manufacture opportunities.

### 4. Hand off to Product Council

Present the briefs. The CPO spawns the full Product Council for evaluation using the `product-council-review` skill. Each member posts a verdict: PURSUE, PASS, or NEEDS_EVIDENCE.

If the council sends back NEEDS_EVIDENCE on a brief, go hunt for more evidence on that specific opportunity.

## Rules

- Minimum 2 independent signals to write a brief. One blog post is noise.
- Bring data, not vibes. Every claim in a brief needs a source.
- New hunting grounds discovered during the search go in the brief's "New Sources Discovered" section.
- Don't filter opportunities by feasibility — that's the Architect's job later. Focus on pain and demand.
