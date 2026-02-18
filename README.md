# Remarq

Lightweight document annotation tool. Reviewers highlight text and leave threaded comments — no accounts needed, just enter a name. Authors collect the feedback and send it to Claude for AI-assisted revision.

## How It Works

1. **Embed** a single `<script>` tag in any HTML page
2. **Reviewers** select text, leave comments, and reply to each other
3. **Author** opens the page with `?author=true`, clicks "Send Feedback to Claude"
4. A structured prompt is generated with all annotations — paste it into Claude for a revised document

## Quick Start

Requires Docker.

```bash
git clone <repo>
cd remarq
docker compose -f docker-compose.remarq.yml up --build
```

Visit **http://localhost:3333** to see the demo page. Select some text to start annotating.

## Embedding in Your Pages

Add the feedback layer to any HTML page with a single script tag:

```html
<script
  src="https://your-server.com/feedback-layer.js"
  data-api-url="https://your-server.com"
  data-content-selector="article"
></script>
```

That's it. The sidebar, text selection, highlights, and annotation UI are all handled automatically.

### Configuration

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-api-url` | `""` (same origin) | URL of the Remarq backend |
| `data-content-selector` | `body` | CSS selector for the annotatable content area |
| `data-document-uri` | current page URL | Override the URI used to store/fetch annotations |

### Same-Origin vs Cross-Origin

**Same-origin (simplest):** If the backend serves your HTML files too (like the demo), you don't need `data-api-url` at all — it defaults to the same origin.

**Cross-origin:** If your pages are hosted elsewhere, point `data-api-url` to wherever the backend is running. The backend has CORS enabled for all origins.

## Deploying the Backend

The backend is a Node.js server backed by PostgreSQL. Docker is the recommended deployment method.

### Option 1: Docker Compose (recommended)

```bash
docker compose -f docker-compose.remarq.yml up --build
```

This starts both Postgres and the server. The server listens on port 3333.

### Option 2: Direct (bring your own Postgres)

```bash
npm install --prefix server
DATABASE_URL=postgres://user:pass@localhost:5432/remarq node server/index.js
```

The `DATABASE_URL` environment variable is required. The server creates tables automatically on first start. Set the `PORT` environment variable to change the listen port (default 3333).

### Option 3: Systemd Service

```ini
[Unit]
Description=Remarq annotation server
After=network.target postgresql.service

[Service]
Type=simple
WorkingDirectory=/path/to/remarq
ExecStart=/usr/bin/node server/index.js
Environment=PORT=3333
Environment=DATABASE_URL=postgres://remarq:remarq@localhost:5432/remarq
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

### Option 4: Behind a Reverse Proxy (Nginx)

```nginx
server {
    listen 443 ssl;
    server_name remarq.example.com;

    location / {
        proxy_pass http://127.0.0.1:3333;
    }
}
```

Then on your pages:

```html
<script
  src="https://remarq.example.com/feedback-layer.js"
  data-api-url="https://remarq.example.com"
  data-content-selector="article"
></script>
```

## Distributing the Frontend Bundle

The build step produces a single file: `feedback-layer/dist/feedback-layer.js` (~13KB minified). It's a self-contained IIFE with zero runtime dependencies. You can:

- **Serve it from the backend** (default — the server serves files from `serve/`)
- **Host it on a CDN** — just copy the file and point your script tags at it
- **Vendor it** — drop it into your project's static assets

To rebuild after making changes to the frontend source:

```bash
npm run build
```

## Author Mode

Append `?author=true` to any annotated page URL to enable author mode. This adds a "Send Feedback to Claude" button that:

1. Collects all annotations (with threaded replies)
2. Formats them into a structured revision prompt alongside the document HTML
3. Displays the prompt in a modal — copy and paste into Claude

## Features

- **No accounts** — reviewers just type their name
- **Text anchoring** — annotations are anchored to specific text passages using TextQuoteSelectors (via Apache Annotator), so highlights survive minor edits
- **Threaded replies** — reply to any annotation to create a discussion
- **Resolve/unresolve** — mark feedback as addressed; resolved annotations hide their highlights
- **Keyboard shortcuts** — Cmd+Enter (Ctrl+Enter on Windows) to submit comments and replies
- **Persistent storage** — PostgreSQL database via Docker
- **Drop-in integration** — one script tag on any HTML page

## API Reference

The API follows a Stripe-like resource pattern. All responses include an `object` field identifying the resource type.

### Documents

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/documents` | List all documents |
| `POST` | `/documents` | Create or find a document by URI |
| `GET` | `/documents/:id` | Retrieve a document |
| `DELETE` | `/documents/:id` | Delete a document and its comments |

### Comments

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/comments?document=<id>` | List comments by document ID |
| `GET` | `/comments?uri=<url>` | List comments by document URI |
| `POST` | `/comments` | Create a comment |
| `GET` | `/comments/:id` | Retrieve a comment |
| `PATCH` | `/comments/:id` | Update body or status |
| `DELETE` | `/comments/:id` | Delete a comment and its replies |

### POST /comments body

```json
{
  "uri": "https://example.com/doc.html",
  "quote": "selected text",
  "prefix": "text before",
  "suffix": "text after",
  "body": "This needs work",
  "author": "Alice",
  "parent": null
}
```

For replies, set `parent` to the parent comment's ID. Replies don't need `quote`/`prefix`/`suffix`.

## Project Structure

```
remarq/
├── package.json                 # Root: build + test scripts
├── docker-compose.remarq.yml   # Postgres + server (production)
├── server/
│   ├── package.json             # express, pg, cors
│   ├── Dockerfile               # Node 22 Alpine container
│   ├── index.js                 # API server + static file serving
│   ├── generate-id.js           # Prefixed ID generation (doc_*, cmt_*)
│   ├── normalize-uri.js         # URI normalization
│   ├── sanitize.js              # HTML sanitization
│   └── test.mjs                 # Unit + integration tests
├── feedback-layer/
│   ├── package.json             # @apache-annotator/dom, esbuild
│   ├── build.js                 # esbuild bundler config
│   └── src/
│       ├── index.js             # Entry point — orchestration
│       ├── api.js               # Backend API client
│       ├── anchoring.js         # Text selection ↔ selectors
│       ├── highlights.js        # Highlight rendering
│       ├── sidebar.js           # Sidebar UI
│       ├── prompt-builder.js    # Annotation → Claude prompt
│       └── ui.js                # Author mode button/modal
├── serve/
│   ├── index.html               # Demo page
│   └── feedback-layer.js        # Pre-built bundle (committed)
├── test-e2e.mjs                 # Puppeteer E2E tests
└── test.sh                      # Build + test runner
```

## Running Tests

Requires Docker (for Postgres).

```bash
# Server unit + integration tests
docker compose -f docker-compose.remarq.yml up -d postgres
DATABASE_URL=postgres://remarq:remarq@localhost:5433/remarq npm run test:server

# Full E2E (builds frontend, starts server, runs Puppeteer)
bash test.sh
```
