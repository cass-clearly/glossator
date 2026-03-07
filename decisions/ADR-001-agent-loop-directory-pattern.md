# ADR-001: Agent Loop as Standalone Directory

**Status:** Accepted
**Date:** 2026-03-10

## Context

Remarq needs a reference implementation showing how to close the human-AI feedback loop using webhooks. The question is where this code lives.

Options considered:

1. **Inside `server/`** — add webhook handler and Claude integration to the main server process.
2. **Inside `feedback-layer/`** — extend the client library with agent behavior.
3. **Standalone `agent-loop/` directory** — a separate package at the repo root.

The agent loop is optional — most users run Remarq without it. It has its own dependency (`@anthropic-ai/sdk`) that shouldn't be bundled with the server or client. It also serves as a reference implementation: users should be able to read it, understand it, and build their own version.

## Decision

The agent loop lives in a top-level `agent-loop/` directory with its own `package.json`, source, and tests. It is not a dependency of the server or client. It uses the Remarq HTTP API like any external consumer.

## Consequences

- **Easier:** Agent loop can be copied, forked, or replaced without touching the core. Dependencies stay isolated. The pattern is clear: `agent-loop/` is an example consumer of the Remarq API, not part of the platform.
- **Harder:** The agent loop must be maintained separately — its own test script, its own CI coverage target. Root `package.json` must include `test:agent-loop` in the aggregate test command.
