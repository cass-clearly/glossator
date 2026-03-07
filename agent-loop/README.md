# Agent Loop

A working agent that closes the human-AI feedback loop using Remarq webhooks and Claude.

When a reviewer leaves a comment on a Remarq-annotated page, this agent:

1. Receives the `comment.created` webhook event
2. Fetches open comments for the document
3. Builds a prompt with the feedback context
4. Calls Claude for a suggested revision
5. Posts the response as a threaded reply
6. Resolves the original comment

## Architecture

```
Remarq Server ──webhook──► Agent Loop ──prompt──► Claude API
                               │                      │
                               │◄──────reply──────────┘
                               │
                               ▼
                          Remarq API
                       (post reply, resolve)
```

Four modules, each with a single responsibility:

| Module              | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `server.js`         | HTTP server, HMAC signature verification |
| `agent.js`          | Orchestration: guards, fetch, call, post |
| `prompt-builder.js` | Pure function: comment context → prompt  |
| `remarq-client.js`  | Remarq API client (fetch-based)          |

## Setup

```bash
# Install agent-loop dependencies
cd agent-loop && npm install

# Required environment variables
export WEBHOOK_SECRET="your-webhook-secret"
export ANTHROPIC_API_KEY="sk-ant-..."
export REMARQ_URL="http://localhost:3333"  # optional, defaults to http://localhost:3333

# Start the agent
node src/server.js
```

## Environment Variables

| Variable            | Default                    | Description                         |
| ------------------- | -------------------------- | ----------------------------------- |
| `WEBHOOK_SECRET`    | _(required)_               | Shared secret for HMAC verification |
| `ANTHROPIC_API_KEY` | _(required)_               | Anthropic API key for Claude        |
| `REMARQ_URL`        | `http://localhost:3333`    | Remarq server URL                   |
| `AGENT_AUTHOR`      | `Remarq Agent`             | Author name on reply comments       |
| `PORT`              | `4000`                     | Port the agent listens on           |
| `CLAUDE_MODEL`      | `claude-sonnet-4-20250514` | Claude model to use                 |

**Note:** The Claude timeout (60s) is hard-coded. To change it, edit `server.js`.

## Register the Webhook

```bash
curl -X POST http://localhost:3333/webhooks \
  -H "Content-Type: application/json" \
  -d '{
    "url": "http://localhost:4000/webhook",
    "secret": "your-webhook-secret",
    "events": ["comment.created"]
  }'
```

## Health Check

```bash
curl http://localhost:4000/health
# {"status":"ok","remarqUrl":"http://localhost:3333"}
```

## Tests

```bash
# Agent loop tests only
npm run test:agent-loop

# All tests (server + client + agent loop)
npm test
```

## Guards

The agent skips processing when:

- **Self-loop:** The comment author matches `AGENT_AUTHOR` (prevents infinite loops)
- **Reply:** The comment has a `parent` (only responds to top-level comments)
- **Idempotency:** The comment status is `closed` (already resolved)

## Building Your Own

This is a reference implementation. The key integration points are:

1. **Webhook verification** — HMAC-SHA256 using the shared secret
2. **Remarq API** — `GET /comments?document=<id>&status=open`, `POST /comments`, `PATCH /comments/:id`
3. **Prompt construction** — format the comment context for your LLM of choice

Replace Claude with any LLM. Replace the HTTP server with a Lambda. The pattern is the same.

For more patterns (batch processing, multi-reviewer workflows, prompt construction tips), see the [Best Practices Guide](../docs/best-practices.md). Full API documentation is in the [README](../README.md#api-reference).
