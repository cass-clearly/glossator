# Hypothesis Feedback → Claude

Collect web annotations from reviewers using a self-hosted [Hypothesis](https://web.hypothes.is/) instance, then send the feedback to Claude for automated document revision.

## How It Works

1. **Author** publishes an HTML document with the feedback layer script embedded
2. **Reviewers** highlight text and leave comments using the Hypothesis sidebar
3. **Author** clicks "Send Feedback to Claude" to collect all annotations
4. Annotations are formatted into a structured prompt for Claude, which proposes a revised document

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- [Node.js](https://nodejs.org/) 18+ (for building the feedback layer)
- A Claude API key (for direct API mode) or access to [claude.ai](https://claude.ai)

## Quick Start

### 1. Set Up Hypothesis

```bash
cd hypothesis-feedback
./scripts/setup.sh
```

This clones the Hypothesis `h` repository, builds the Docker image, starts all services (PostgreSQL, Elasticsearch, RabbitMQ, h), initializes the database, and creates an admin user.

Once complete:

- Hypothesis API: http://localhost:5000/api/
- Login: http://localhost:5000/login (admin / hypothesis)
- Generate an API token: http://localhost:5000/account/developer

### 2. Build the Feedback Layer

```bash
cd feedback-layer
npm install
npm run build
```

This produces `dist/feedback-layer.js` — a single bundled script with zero runtime dependencies.

### 3. Try the Example

Open the sample document in a browser. You'll need a local HTTP server since Hypothesis requires a proper origin:

```bash
cd examples
python3 -m http.server 8080
```

Then visit:

- **As reviewer**: http://localhost:8080/sample-document.html — use the Hypothesis sidebar to annotate
- **As author**: http://localhost:8080/sample-document.html?author=true — see the "Send Feedback to Claude" button

## Embedding in Your Documents

Add this script tag to any HTML page:

```html
<script
  src="path/to/feedback-layer.js"
  data-api-url="http://localhost:5000/api"
  data-authority="localhost"
  data-token="YOUR_HYPOTHESIS_API_TOKEN"
  data-content-selector="article"
></script>
```

### Configuration Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-api-url` | `http://localhost:5000/api` | Hypothesis API URL |
| `data-hypothesis-url` | `https://cdn.hypothes.is/hypothesis` | Hypothesis client CDN URL |
| `data-authority` | `localhost` | Hypothesis authority (domain) |
| `data-token` | — | Hypothesis API bearer token |
| `data-proxy-url` | — | CORS proxy URL for direct Claude API calls |
| `data-model` | `claude-sonnet-4-20250514` | Claude model to use |
| `data-content-selector` | — | CSS selector for document content (defaults to `body`) |
| `data-document-uri` | — | Override the document URI for annotation lookup |

### Author vs. Reviewer Mode

The "Send Feedback to Claude" button only appears when `?author=true` is in the URL. Reviewers see only the Hypothesis annotation sidebar.

## Claude API Integration

The Claude API (`api.anthropic.com`) does not support browser CORS, so there are two modes:

### Clipboard Mode (Default)

Click "Send Feedback to Claude" → the formatted prompt is displayed in a modal → click "Copy Prompt" → paste into [claude.ai](https://claude.ai) or any Claude interface.

No extra infrastructure needed.

### Proxy Mode (Optional)

For a single-click workflow, run a local CORS proxy that forwards requests to the Claude API:

```bash
node scripts/proxy.js
```

Then add `data-proxy-url="http://localhost:3001/api/claude"` to your script tag. The UI will show a "Send to Claude" button that calls the API directly.

## Project Structure

```
hypothesis-feedback/
├── docker-compose.yml          # Hypothesis stack
├── .env                        # Environment variables
├── scripts/
│   └── setup.sh                # One-command setup
├── feedback-layer/
│   ├── package.json
│   ├── build.js                # esbuild config
│   ├── src/
│   │   ├── index.js            # Entry point, reads config
│   │   ├── hypothesis-embed.js # Loads Hypothesis client
│   │   ├── annotation-fetch.js # Fetches annotations from h API
│   │   ├── prompt-builder.js   # Formats prompt for Claude
│   │   ├── claude-client.js    # Claude API / clipboard
│   │   └── ui.js               # Button, modal, prompt view
│   └── dist/
│       └── feedback-layer.js   # Built bundle
└── examples/
    └── sample-document.html    # Demo page
```

## Managing the Stack

```bash
# Start everything
docker compose up -d

# View logs
docker compose logs -f h

# Stop everything
docker compose down

# Stop and remove volumes (full reset)
docker compose down -v
```

## Development

For live rebuilding during development:

```bash
cd feedback-layer
npm run watch
```
