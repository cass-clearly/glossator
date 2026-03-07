# Remarq MCP Server

MCP server that exposes Remarq's commenting API as native tools for AI agents. Works with any MCP-compatible client — Claude Code, Claude Desktop, Cursor, etc.

## Quick Start

1. Start a Remarq server (see [root README](../README.md#quick-start))

2. Install dependencies:

```bash
npm install --prefix mcp-server
```

3. Add to your MCP client config:

**Claude Desktop** (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "remarq": {
      "command": "node",
      "args": ["mcp-server/src/index.js"],
      "env": {
        "REMARQ_URL": "http://localhost:3333"
      }
    }
  }
}
```

**Claude Code** (`.mcp.json`):

```json
{
  "mcpServers": {
    "remarq": {
      "command": "node",
      "args": ["mcp-server/src/index.js"],
      "env": {
        "REMARQ_URL": "http://localhost:3333"
      }
    }
  }
}
```

## Configuration

| Variable     | Default                 | Description            |
| ------------ | ----------------------- | ---------------------- |
| `REMARQ_URL` | `http://localhost:3000` | Remarq server base URL |

## Tools

### `check_connection`

Verify connectivity to the Remarq server.

**Input:** none

**Example output:**

```
Connected to Remarq server at http://localhost:3333
```

### `list_comments`

List comments, optionally filtered by document URI and status.

| Parameter          | Type    | Required | Description                          |
| ------------------ | ------- | -------- | ------------------------------------ |
| `uri`              | string  | no       | Filter by document URI               |
| `status`           | string  | no       | Filter by status: `open` or `closed` |
| `include_document` | boolean | no       | Include full document object         |

### `create_comment`

Create a new top-level comment anchored to specific text.

| Parameter | Type   | Required | Description                   |
| --------- | ------ | -------- | ----------------------------- |
| `uri`     | string | yes      | Document URI to comment on    |
| `quote`   | string | yes      | The highlighted text          |
| `body`    | string | yes      | The comment text              |
| `author`  | string | yes      | Name of the comment author    |
| `prefix`  | string | no       | Text context before the quote |
| `suffix`  | string | no       | Text context after the quote  |

### `reply_to_comment`

Reply to an existing comment thread.

| Parameter    | Type   | Required | Description                   |
| ------------ | ------ | -------- | ----------------------------- |
| `comment_id` | string | yes      | ID of the comment to reply to |
| `body`       | string | yes      | The reply text                |
| `author`     | string | yes      | Name of the reply author      |

### `resolve_comment`

Resolve (close) a comment. Only works on top-level comments, not replies.

| Parameter    | Type   | Required | Description                  |
| ------------ | ------ | -------- | ---------------------------- |
| `comment_id` | string | yes      | ID of the comment to resolve |

## Troubleshooting

**"Failed to connect"** — The Remarq server isn't running or the URL is wrong. Use `check_connection` to diagnose. Verify `REMARQ_URL` points to a running Remarq instance.

## License

Same as [Remarq](../README.md#license) — AGPL-3.0 or commercial.
