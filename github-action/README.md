# Remarq Document Review — GitHub Action

AI-powered documentation review for pull requests. Every time a PR changes docs, Claude reads the diff and posts inline review comments — catching unclear writing, missing context, broken examples, and inconsistencies before they ship.

No Remarq server required. No accounts. Just add the action and an Anthropic API key.

## What You Get

When the action runs on a PR that changes documentation:

1. It finds changed doc files matching your patterns (default: `**/*.md`)
2. Claude reviews each file's diff for clarity, accuracy, and completeness
3. Review comments appear inline on the PR, anchored to specific lines
4. The review is submitted as **COMMENT** (informational, not blocking)

If no issues are found, nothing is posted. No noise.

## Quick Start

```yaml
# .github/workflows/doc-review.yml
name: Document Review
on:
  pull_request:
    paths:
      - '**/*.md'
      - 'docs/**'

permissions:
  pull-requests: write
  contents: read

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: cass-clearly/remarq-action@v1
        with:
          anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
```

That's it. Three inputs, one secret, zero config files.

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `anthropic-api-key` | Yes | — | Anthropic API key for Claude |
| `github-token` | No | `${{ github.token }}` | GitHub token for posting review comments |
| `file-patterns` | No | `**/*.md` | Comma-separated glob patterns for doc files |

## Outputs

| Output | Description |
|--------|-------------|
| `comments-posted` | Number of review comments posted |
| `files-reviewed` | Number of documentation files reviewed |

## Examples

### Review Markdown and HTML docs

```yaml
- uses: cass-clearly/remarq-action@v1
  with:
    anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
    file-patterns: '**/*.md,**/*.html,**/*.mdx'
```

### Review only files in docs/

```yaml
- uses: cass-clearly/remarq-action@v1
  with:
    anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
    file-patterns: 'docs/**/*.md'
```

### Use the outputs

```yaml
- uses: cass-clearly/remarq-action@v1
  id: review
  with:
    anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}

- run: echo "Reviewed ${{ steps.review.outputs.files-reviewed }} files, posted ${{ steps.review.outputs.comments-posted }} comments"
```

## What Claude Reviews For

- **Clarity** — Ambiguous phrasing, jargon without explanation, unclear instructions
- **Accuracy** — Code examples that don't match described behavior, outdated references
- **Completeness** — Missing prerequisites, skipped steps, undocumented parameters
- **Consistency** — Contradictions between sections, inconsistent terminology
- **Structure** — Wall-of-text sections that need headings, missing context for code blocks

## How It Works

```
PR opened/synchronized
       │
GitHub Action triggers
       │
Fetch changed files via GitHub API
       │
Filter for doc files (default: *.md)
       │
For each file (up to 10):
  → Get file diff
  → Send to Claude with review prompt
  → Parse structured response
  → Collect review comments
       │
Post all comments as a single GitHub PR review
```

- Reviews are posted as a single batch (one API call to GitHub), not individual comments
- Files are reviewed sequentially to stay within API rate limits
- Maximum 10 files per run — large PRs get the first 10 changed doc files
- Each file review has a 60-second timeout
- If Claude returns malformed output for a file, it falls back to a summary comment

## Failure Behavior

| Scenario | What Happens |
|----------|--------------|
| Anthropic API down | Action fails. PR check shows red with error message. |
| API rate limited (429) | Action fails with retry suggestion. No auto-retry in v1. |
| File exceeds context window | File skipped, warning logged. Other files still reviewed. |
| No doc files changed | Action succeeds silently. 0 files, 0 comments. |
| GitHub token missing write scope | Action fails: "GitHub token needs pull-requests: write permission" |

## Requirements

- GitHub Actions runner with Node.js 20+
- Anthropic API key with Claude access
- GitHub token with `pull-requests: write` permission (default token works)

## Cost

Each file review uses roughly 1,000–4,000 tokens of Claude output (capped at 4,096). Input depends on diff size. For a typical PR touching 3 markdown files, expect ~$0.01–0.05 per run.

## Versioning

Pin to `@v1` for stable updates:

```yaml
uses: cass-clearly/remarq-action@v1
```

We follow semver. `@v1` tracks the latest `v1.x.x` release. Breaking changes (input/output contract) only happen on major version bumps.

## License

AGPL-3.0 — same as [Remarq](https://github.com/cass-clearly/remarq).

---

Built by [Remarq](https://github.com/cass-clearly/remarq) — the annotation layer for the agent era.
