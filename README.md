<p align="center">
  <img src="docs/assets/remarq-wordmark-dark.png" alt="Remarq" width="300">
</p>

<h3 align="center">Google Docs comments are where feedback goes to die. We built the antidote.</h3>

Remarq is a lightweight document annotation tool for the agent era. Drop a single `<script>` tag into any HTML page — reviewers highlight text and leave threaded comments (no accounts needed). Then your AI agent polls the API, revises the document, and resolves comments automatically.

**The feedback loop isn't just faster. It's closed.**

---

## The Problem

You know the drill. Someone leaves a comment on your Google Doc: _"this is confusing."_ Great. Now you get to:

1. Read all 47 comments
2. Interpret what each reviewer actually meant
3. Manually edit the document
4. Click "Resolve" on each one
5. Miss three of them
6. Get a passive-aggressive follow-up email

For a 50-page doc, that's hours of your life you'll never get back. And if you're copy-pasting feedback into ChatGPT? You're living in the stone age.

Google Docs is a word processor cosplaying as a collaboration tool. It was built in 2006. We can do better.

## The Solution

```
Reviewer highlights text → leaves comment → agent reads API → agent revises → agent resolves → done.
```

That's Remarq. Human judgment in, machine execution out. The feedback cycle is closed.

**Works for solo creators** pair-writing with their AI — you annotate, your agent revises — **or teams** with multiple reviewers feeding back into one agent loop. Same tool, same API, just different numbers of humans.

## Quick Start

### 1. Start the backend

```bash
git clone https://github.com/cass-clearly/remarq.git
cd remarq
echo "POSTGRES_PASSWORD=remarq" > .env
docker compose -f docker-compose.remarq.yml up --build
```

Backend runs on port 3333. Visit **http://localhost:3333** for the demo.

### 2. Add to any HTML page

```html
<script
  src="http://localhost:3333/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
></script>
```

**One script tag. That's the whole integration.** Works on any HTML page — your blog, your docs, your marketing site, your contracts. Not trapped in a proprietary editor.

### 3. Let your agent close the loop

```bash
# Get open feedback
curl "http://localhost:3333/comments?status=open&document=DOC_ID"

# Your agent gets structured annotations with exact text anchors,
# threaded replies, and author context. It knows exactly what to fix.
```

This is the superpower. Every other annotation tool treats comments as a human-to-human channel. Remarq treats them as **an API for your agent to consume.**

## Why Remarq

|                       | Google Docs                                                 | Remarq                                           |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------------ |
| **Feedback workflow** | Manual. Read → interpret → edit → resolve. Repeat 47 times. | Automated. Agent reads API → revises → resolves. |
| **Accounts required** | Google account for every reviewer                           | None. Type a name, start annotating.             |
| **Works on**          | Google Docs only                                            | Any HTML page                                    |
| **Data ownership**    | Google's servers                                            | Your server                                      |
| **Integration**       | Copy-paste into ChatGPT                                     | `GET /comments?status=open`                      |
| **Built for**         | 2006                                                        | The agent era                                    |

## Configuration

Configure via `data-` attributes on the script tag:

| Attribute               | Default            | Description                                                                                                              |
| ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `data-api-url`          | `""` (same origin) | URL of the Remarq backend                                                                                                |
| `data-content-selector` | `body`             | CSS selector for the annotatable content area                                                                            |
| `data-document-uri`     | current page URL   | Override the URI used to store/fetch annotations                                                                         |
| `data-theme`            | `"auto"`           | Color theme: `"auto"` (follows OS), `"dark"`, or `"light"`                                                               |
| `data-default-color`    | `null` (yellow)    | Default highlight color for new comments. Accepts a preset name (`red`, `blue`, etc.) or a 6-digit hex code (`#ff6b6b`). |

## Production

### Docker Compose (recommended)

Create a `.env` file next to `docker-compose.remarq.yml` (docker compose reads it automatically):

```
POSTGRES_PASSWORD=your-secure-password-here
```

```bash
docker compose -f docker-compose.remarq.yml up --build -d
```

### Direct (bring your own Postgres)

```bash
npx @csalvato/remarq-server
```

Or:

```bash
npm install --prefix server
DATABASE_URL=postgres://user:pass@localhost:5432/remarq node server/index.js
```

## OpenAPI Spec

The server exposes a machine-readable OpenAPI 3.0 spec at:

```
GET /openapi.json
```

Use it with any OpenAPI tooling — Swagger UI, Redoc, Insomnia, Postman, code generators, or your own AI agent:

```bash
curl http://localhost:3333/openapi.json
```

The spec includes `x-cli` vendor extensions that drive the CLI — every endpoint appears as a CLI command automatically. New server endpoints added to the spec appear in the CLI with zero CLI code changes.

## API Reference

Stripe-inspired resource pattern. All responses include an `object` field. **Full documentation with request/response schemas, error codes, and curl examples: [docs/api.md](docs/api.md)**

### Documents

| Method   | Endpoint         | Description                        |
| -------- | ---------------- | ---------------------------------- |
| `GET`    | `/documents`     | List all documents                 |
| `POST`   | `/documents`     | Create or find a document by URI   |
| `GET`    | `/documents/:id` | Retrieve a document                |
| `DELETE` | `/documents/:id` | Delete a document and its comments |

### Comments

| Method   | Endpoint                    | Description                                                     |
| -------- | --------------------------- | --------------------------------------------------------------- |
| `GET`    | `/comments`                 | List all comments                                               |
| `GET`    | `/comments?document=<id>`   | List comments by document ID                                    |
| `GET`    | `/comments?uri=<url>`       | List comments by document URI                                   |
| `GET`    | `/comments?status=open`     | **The money endpoint.** Get all unresolved feedback.            |
| `GET`    | `/comments?expand=document` | Hydrate document objects inline                                 |
| `POST`   | `/comments`                 | Create a comment (set `parent` to reply to an existing comment) |
| `GET`    | `/comments/:id`             | Retrieve a comment                                              |
| `PATCH`  | `/comments/:id`             | Update body, status, or color                                   |
| `DELETE` | `/comments/:id`             | Delete a comment and its replies                                |

### Webhooks

| Method   | Endpoint        | Description                                               |
| -------- | --------------- | --------------------------------------------------------- |
| `GET`    | `/webhooks`     | List all webhooks                                         |
| `POST`   | `/webhooks`     | Register a webhook (requires `url`, `secret`, `events[]`) |
| `GET`    | `/webhooks/:id` | Retrieve a webhook                                        |
| `PATCH`  | `/webhooks/:id` | Update a webhook (`url`, `events`, `active`)              |
| `DELETE` | `/webhooks/:id` | Delete a webhook                                          |

Events: `comment.created`, `comment.resolved`, `comment.deleted`. Payloads are signed with HMAC-SHA256 using the webhook's secret.

Status is a thread-level concept — only root comments have status (`"open"` or `"closed"`). Replies always have `status: null`. The `?status=` filter matches root comments and includes all their replies. Query params can be combined (e.g. `?document=<id>&status=open&expand=document`).

### POST /comments body

```json
{
  "uri": "https://example.com/doc.html",
  "quote": "selected text",
  "prefix": "text before",
  "suffix": "text after",
  "body": "**Issue:** This section needs `refactoring`. See [spec](https://example.com/spec).",
  "author": "Alice",
  "parent": null,
  "color": "red"
}
```

For replies, set `parent` to the parent comment's ID. Replies don't need `quote`/`prefix`/`suffix`.

### Highlight Colors

Comments support customizable highlight colors. Set `color` on `POST /comments` or update it later with `PATCH /comments/:id`. Colors are validated on both the client and server.

#### Preset names

| Name     | Hex       | Preview                 |
| -------- | --------- | ----------------------- |
| `yellow` | `#ffd400` | Default highlight color |
| `red`    | `#ff6b6b` |                         |
| `green`  | `#51cf66` |                         |
| `blue`   | `#339af0` |                         |
| `purple` | `#9775fa` |                         |
| `pink`   | `#f06595` |                         |
| `orange` | `#ff922b` |                         |
| `teal`   | `#20c997` |                         |

You can also pass any 6-digit hex code directly (e.g. `"#ff6b6b"`). The database enforces a CHECK constraint — values must be a preset name, a valid `#rrggbb` hex code, or `null`.

#### Usage from agents

Agents writing comments via the API can use colors to visually categorize feedback — for example, red for errors, blue for suggestions, green for approvals.

```bash
# Create a comment with a preset color
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{"uri":"https://example.com/doc.html","quote":"important text","body":"Needs revision","author":"agent","color":"red"}'

# Create a comment with a hex color
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{"uri":"https://example.com/doc.html","quote":"looks good","body":"Approved","author":"agent","color":"#51cf66"}'

# Update color on an existing comment
curl -X PATCH http://localhost:3333/comments/cmt_abc123 \
  -H "Content-Type: application/json" \
  -d '{"color":"blue"}'

# Clear color (revert to default)
curl -X PATCH http://localhost:3333/comments/cmt_abc123 \
  -H "Content-Type: application/json" \
  -d '{"color":null}'
```

If omitted, `color` defaults to `null` (the client uses yellow as the default highlight).

#### Client-side default color

Set a default highlight color for all new comments on a page using the `data-default-color` attribute on the script tag:

```html
<script
  src="http://localhost:3333/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
  data-default-color="blue"
></script>
```

Accepts any preset name or hex code. Users can still override the color per-comment using the color picker in the sidebar.

## WebSocket Real-Time Updates

Remarq supports real-time comment synchronization via WebSocket. When a user creates, updates, or deletes a comment, all connected clients viewing the same document receive the event immediately.

### Connection

**Endpoint:** `ws://<host>/ws` or `wss://<host>/ws`

The feedback layer script connects automatically when `data-api-url` is set. The server derives the WebSocket URL from the HTTP API base URL (http → ws, https → wss).

### Subscribe Message

After connecting, send a subscribe message with the document ID:

```json
{
  "type": "subscribe",
  "documentId": "doc_abc123"
}
```

The server responds with a confirmation:

```json
{
  "type": "subscribed",
  "documentId": "doc_abc123"
}
```

**Wait for this confirmation before assuming the subscription is active.** Events sent before the subscription is confirmed will not be delivered.

### Event Types

The server broadcasts these events to all subscribed clients:

| Event             | Payload             | Description                                    |
| ----------------- | ------------------- | ---------------------------------------------- |
| `comment:created` | `{ type, comment }` | A comment was created                          |
| `comment:updated` | `{ type, comment }` | A comment's body, status, or color was changed |
| `comment:deleted` | `{ type, comment }` | A comment was deleted                          |

All payloads include the full comment object matching the REST API format (with `id`, `document`, `body`, `author`, `status`, `reactions`, etc.).

### Reconnection Behavior

The client automatically reconnects on connection loss with exponential backoff (1s initial, up to 30s max). Re-subscription happens automatically on reconnect. Events that occurred during the disconnect are not replayed — clients should refresh the page to reconcile state after a prolonged disconnection.

### Limitations

- **No event replay.** WebSocket delivers events in real-time only. Missed events (e.g. during a disconnection) are not queued or replayed. The REST API is the source of truth.
- **Best-effort delivery.** Broadcast failures to individual clients are silent — the REST API still returns success. Real-time updates are supplementary, not guaranteed.
- **Reactions are not broadcast.** Reaction changes (👍, ❤️, etc.) update optimistically on the client and don't trigger real-time sync. This keeps the event stream focused on meaningful content changes.
- **No presence tracking.** The server doesn't broadcast who's currently viewing a document.
- **Document-scoped only.** Clients must know the document ID to subscribe. Cross-document subscriptions are not supported.
- **Single-instance only.** Subscriptions are held in-memory. Multiple server instances require an external pub/sub layer (e.g. Redis) to share events.

### Error Handling

The server validates the document ID on subscription. If the document does not exist, the server responds with an error instead of a subscription confirmation:

```json
{ "type": "error", "message": "Document not found", "documentId": "doc_invalid" }
```

Clients that connect but never send a subscribe message are closed after 30 seconds.

### Example

```javascript
const ws = new WebSocket("ws://localhost:3333/ws");
let subscribed = false;

ws.onopen = () => {
  ws.send(JSON.stringify({ type: "subscribe", documentId: "doc_abc123" }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  // Wait for subscription confirmation
  if (data.type === "subscribed") {
    console.log("Subscribed to", data.documentId);
    subscribed = true;
    return;
  }

  // Handle errors
  if (data.type === "error") {
    console.error("Subscription error:", data.message);
    return;
  }

  // Only process events after subscription confirmed
  if (!subscribed) return;

  // Process comment events
  const { type, comment } = data;
  console.log(`Received ${type}:`, comment);
};
```

## Features

- **Real-time collaboration** — WebSocket updates show new comments from other reviewers instantly, no page refresh needed. See feedback arrive live during review sessions.
- **Webhook notifications** — Get notified in Slack, Discord, or email the moment feedback arrives. Wire Remarq into any workflow with signed HTTP callbacks.
- **No accounts** — reviewers just type their name and start annotating. Zero friction.
- **Text anchoring** — comments stick to the right text even when surrounding content changes. Uses W3C TextQuoteSelectors (Apache Annotator) so highlights survive document edits.
- **Threaded replies** — focused discussions on specific passages without losing context.
- **Customizable highlight colors** — color-code feedback by reviewer, priority, or type. Scan a page and instantly see what needs attention.
- **Dark mode** — comfortable reviewing at any time of day. Auto-detects OS preference or force via `data-theme`.
- **Keyboard shortcuts** — power through reviews without touching your mouse. Full accessibility support (`s` to toggle sidebar, `j`/`k` to navigate, `Enter` to reply).
- **[Markdown in comments](#markdown-support)** — format feedback with `**bold**`, `*italic*`, `` `code` ``, and `[links](url)`. XSS-safe with sanitized link validation. Formatting hints appear below the textarea.
- **Emoji reactions** — quick thumbs-up or 🤔 without cluttering the thread. Gauge consensus at a glance.
- **Toast notifications** — non-blocking confirmations that don't interrupt your flow. No more jarring alert() dialogs.
- **Orphaned comments stay visible** — when document text changes, orphaned comments surface at the bottom so nothing gets lost.
- **OpenAPI spec** — agents discover the entire API from a single URL (`GET /openapi.json`). Zero ramp-up time.
- **CLI tool** — scriptable management of documents, comments, and reactions from the terminal. No UI needed for automation. CLI commands auto-generate from the spec.
- **Security hardening** — protected against clickjacking, MIME sniffing, and common web attacks out of the box (helmet.js).
- **One script tag** — drop-in integration for any HTML page. Not trapped in a proprietary editor.
- **Agent-ready API** — structured feedback your AI can consume and act on. Every comment anchored to exact text, threaded, with status tracking.

## Markdown Support

Comments support basic markdown formatting — no configuration needed. Formatting hints appear below the comment textarea so reviewers discover the syntax naturally.

| Syntax              | Renders as       |
| ------------------- | ---------------- |
| `**bold text**`     | **bold text**    |
| `*italic text*`     | _italic text_    |
| `` `inline code` `` | `inline code`    |
| `[link text](url)`  | [link text](url) |

Line breaks in the input are preserved. All input is HTML-escaped before rendering — markdown transforms are applied to the escaped output, so there's no XSS risk. Links with `javascript:`, `data:`, or `vbscript:` URL schemes are stripped automatically.

Agents can send markdown in the `body` field of `POST /comments` to write structured, actionable feedback:

```json
{
  "body": "**Action required:** Update `apiKey` to match [API spec](https://example.com/spec#auth).",
  "author": "lint-agent"
}
```

## Documentation

- **[Best Practices Guide](docs/best-practices.md)** — Deployment configurations, content selector strategies, agent integration patterns, multi-reviewer workflows, and document lifecycle management.

## Keyboard Shortcuts

The following keyboard shortcuts are available (they are disabled when focus is in an input field, textarea, or contenteditable element):

| Key                        | Action                                                  |
| -------------------------- | ------------------------------------------------------- |
| `s`                        | Toggle sidebar open/closed                              |
| `Esc`                      | Close the sidebar                                       |
| `j`                        | Move to next comment thread                             |
| `k`                        | Move to previous comment thread                         |
| `Enter`                    | Reply to the focused comment thread                     |
| `Cmd+Enter` / `Ctrl+Enter` | Submit a comment or reply (when typing in a text field) |
| `?`                        | Toggle keyboard shortcuts help                          |

Press the `⌨` button in the sidebar header to see shortcuts at any time.

## The Bottom Line

Your team's feedback shouldn't rot in a Google Docs sidebar. Build the agent loop. Close the feedback cycle. Ship faster.

```bash
git clone https://github.com/cass-clearly/remarq.git
cd remarq
echo "POSTGRES_PASSWORD=remarq" > .env
docker compose -f docker-compose.remarq.yml up --build
```

**Star the repo if you're tired of manually resolving comments.**

---

## License

Remarq is dual-licensed:

- **Open Source** — [AGPL-3.0](./LICENSE). Free for individuals, self-hosters, and open source use. If you modify Remarq and make it available over a network, you must release your source code.
- **Commercial** — A separate commercial license is available for organizations that need to keep their code proprietary. See [COMMERCIAL.md](./COMMERCIAL.md) for details.

---

Built by [cass-clearly](https://github.com/cass-clearly)
