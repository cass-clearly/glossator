# Architecture Decision Records (ADRs)

This directory contains Architecture Decision Records for Remarq. ADRs capture significant architectural decisions made during council review so the reasoning is preserved alongside the code.

## Format

Each ADR follows a lightweight format:

- **Sequential numbering:** ADR-001, ADR-002, etc.
- **Filename:** `ADR-NNN-short-title.md`
- **Sections:** Title, Status, Date, Context, Decision, Consequences
- **Length:** A few paragraphs max. If it needs more, the decision is probably too big.

See [ADR-000-template.md](ADR-000-template.md) for the template.

## Statuses

| Status | Meaning |
|---|---|
| Proposed | Under discussion, not yet accepted |
| Accepted | Active and in effect |
| Superseded | Replaced by a newer ADR (link to it) |
| Deprecated | No longer relevant |

## When to Write an ADR

The Architect creates an ADR when the council makes a significant architectural decision during PR review. Not every decision needs an ADR — only ones where the "why" matters for future contributors. Examples:

- Choosing one approach over a viable alternative
- Establishing a new pattern or convention
- Deprecating or replacing an existing pattern
- Decisions where the context would be lost without documentation
