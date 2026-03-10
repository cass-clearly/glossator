# Marketing — Redirect

**Marketing responsibilities are now integrated into the Product Council and Engineering Council.**

There is no separate marketing council. Marketing work happens in two places:

## Product Council

Marketing strategy, copy, and distribution are owned by two Product Council members:

- **The Copywriter** (`agents/product-council/copywriter.md`) — owns all public-facing copy: headlines, body copy, CTAs, awareness stages, developer voice. Reviews content before it becomes code.
- **The Channel Scout** (`agents/product-council/channel-scout.md`) — owns distribution strategy: finding where the buyers are, matching message to medium, channel-message fit.

Both participate in all opportunity evaluations and spec reviews. They need to know what's being built to prepare copy and channels.

## Engineering Council

Public-facing code (README, docs, changelog) is reviewed by:

- **The Marketing Guru** (`agents/council/marketing-guru.md`) — reviews every PR for documentation completeness, brand consistency, and technical accuracy. Ensures shipped features are properly documented and positioned.

## How the Work Flows

1. **Content creation:** The Copywriter drafts public-facing copy (Show HN posts, landing pages, launch copy) → reviewed in Product Council
2. **Code PRs:** When copy lands in code (README, docs, changelog), the Marketing Guru reviews it for technical accuracy
3. **Channel strategy:** The Channel Scout identifies distribution needs → if it requires engineering (demo instance, tracking, npm page), the CPO writes a JTBD spec → Engineering implements
4. **Validation experiments:** When the Opportunist needs market evidence, the Copywriter writes the test copy, the Channel Scout picks the channel, and the Product Council evaluates the results

## Why the Change

The separate marketing council created overlaps and coordination overhead:

- Two councils evaluating the same content (product + marketing)
- Unclear boundaries between product positioning (Narrator) and copy execution (was CMO, now Copywriter)
- Channel strategy disconnected from market validation (Opportunist)
- Copy reviewed twice (once as content, once as code PR) with no clear handoff

The new structure integrates marketing where the work actually happens: **strategy and content in Product Council, code review in Engineering Council.**
