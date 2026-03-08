# MCP Registry Submission Guide

Ready-to-submit content for listing Remarq's MCP server on MCP registries.
Each section has the exact text to paste. A human must submit these — registries require authentication.

---

## 1. Smithery.ai

**Status:** Ready to submit
**URL:** https://smithery.ai/new
**Config file:** `smithery.yaml` (already in this directory)

### Steps

1. Go to https://smithery.ai/new and sign in with GitHub
2. Enter the GitHub repo URL: `https://github.com/cass-clearly/remarq`
3. Point to the `mcp-server` subdirectory
4. Smithery will read `smithery.yaml` for the start command and config schema
5. Submit

### Listing Description (paste this)

> **Remarq MCP Server** — Document annotation tools for AI agents
>
> Add text-anchored commenting to any document your AI agent works with. Remarq replaces Google Docs commenting with structured, API-first annotations that AI agents can read, create, and resolve.
>
> **Tools:**
> - `check_connection` — Verify connectivity to the Remarq server
> - `list_comments` — List comments, filter by document URI and status
> - `create_comment` — Create a comment anchored to specific text in a document
> - `reply_to_comment` — Reply to an existing comment thread
> - `resolve_comment` — Resolve (close) a comment when addressed
>
> **Use cases:**
> - AI-powered document review — agents read comments, revise content, resolve feedback
> - Human-AI feedback loops — reviewers comment, agents act
> - Automated editorial workflows — lint, review, and annotate documents programmatically
>
> Requires a self-hosted Remarq server. See the [GitHub repo](https://github.com/cass-clearly/remarq) for setup.

---

## 2. mcpmarket.com

**Status:** Ready to submit
**URL:** https://mcpmarket.com/submit

### Steps

1. Go to https://mcpmarket.com/submit
2. Fill in the form with the details below
3. Submit for review

### Form Fields

- **Name:** Remarq
- **GitHub URL:** https://github.com/cass-clearly/remarq
- **Category:** Collaboration / Document Management
- **Description (short):** Document annotation MCP server — create, list, reply to, and resolve text-anchored comments on any document
- **Description (long):**

> Remarq is an open-source document annotation tool that replaces Google Docs commenting with structured, API-first annotations. The MCP server exposes 5 tools that let AI agents participate in document review workflows:
>
> - **check_connection** — Verify the Remarq server is reachable
> - **list_comments** — List and filter comments by document and status
> - **create_comment** — Create text-anchored comments on any document
> - **reply_to_comment** — Reply to comment threads
> - **resolve_comment** — Close comments when feedback is addressed
>
> Works with Claude Code, Claude Desktop, Cursor, and any MCP-compatible client. Self-hosted — you run the Remarq server, point the MCP server at it.
>
> GitHub: https://github.com/cass-clearly/remarq

---

## 3. Cline MCP Marketplace

**Status:** Ready to submit
**URL:** https://github.com/cline/mcp-marketplace (open a new issue)

### Steps

1. Go to https://github.com/cline/mcp-marketplace/issues/new
2. Use the submission template
3. Include the details below

### Submission Issue Content

**Title:** Add Remarq — Document Annotation MCP Server

**Body:**

> **GitHub Repository:** https://github.com/cass-clearly/remarq (MCP server in `mcp-server/` directory)
>
> **Why this benefits Cline users:**
>
> Remarq lets Cline users add document review capabilities to their workflows. Instead of switching to Google Docs for feedback, developers can use Cline to read comments on documents, make revisions based on feedback, and resolve comments — all without leaving the editor.
>
> The MCP server provides 5 tools: check_connection, list_comments, create_comment, reply_to_comment, and resolve_comment. These enable AI-assisted document review workflows where Cline can autonomously process reviewer feedback.
>
> **Tested:** Confirmed that providing the README.md to Cline enables successful setup and tool usage.

*Note: A 400×400 PNG logo is required. Use the Remarq wordmark or create a square icon version.*

---

## 4. Official MCP Registry (registry.modelcontextprotocol.io)

**Status:** Research needed
**URL:** https://github.com/modelcontextprotocol/registry

### Steps

1. Check https://github.com/modelcontextprotocol/registry for submission instructions
2. Likely requires a PR to add the server to their registry
3. Follow their contribution guide

---

## 5. Additional Registries (stretch goals)

| Registry | URL | Notes |
|----------|-----|-------|
| mcp.so | https://mcp.so | Large directory, check submission process |
| PulseMCP | https://www.pulsemcp.com | 8500+ servers listed, likely accepts submissions |
| LobeHub MCP | https://lobehub.com/mcp | LobeChat marketplace |
| mcpservers.org | https://mcpservers.org | Community-maintained list |

---

## After Submission

Once listed, update `mcp-server/README.md` to add badges/links to the registry listings. Example:

```markdown
[![Smithery](https://smithery.ai/badge/@remarq/mcp-server)](https://smithery.ai/server/@remarq/mcp-server)
```
