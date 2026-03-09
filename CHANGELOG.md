# Changelog

## [Unreleased]

### Added

- GitHub Action for AI-powered documentation review on pull requests — Claude reviews changed doc files and posts inline PR comments. See [`github-action/`](github-action/)
- Feature highlights section on landing page covering open source licensing, agent integrations (MCP for Claude Code/Desktop/Cursor, REST, WebSocket), and lightweight client setup — bridges the gap between product explanation and install CTA
- Live demo page at `/demo.html` — highlight text, leave a comment, watch an AI agent respond in real time
- MCP server for native AI agent tool access via Model Context Protocol — Claude Code, Claude Desktop, Cursor, and any MCP client get `list_comments`, `create_comment`, `reply_to_comment`, `resolve_comment`, and `check_connection` as tools
- Extracted shared HTTP client (`shared/client.js`) from CLI for reuse across MCP server and CLI
- Agent loop reference implementation — closes the human-AI feedback cycle end-to-end. Human leaves a comment, agent receives webhook, generates a revision with Claude, replies, and resolves. Drop-in starting point for building your own agent integration. See `agent-loop/`
- ADR-001: Agent loop as standalone directory pattern

### Changed

- Landing page rewritten with agent-first positioning: new 3-step workflow (Comment → Agent Revises → Resolved), tabbed Quick Start, and removal of external CSS dependency

### Fixed

- `npx @csalvato/remarq-server` now works — moved shared constants and static assets into the server package so all required files are included in the npm tarball
- README quick-start npx example now includes required `DATABASE_URL` prefix
- Clicking a highlight no longer scrolls the main page to the top — sidebar now scrolls internally (#221)

### Security

- CORS now restricted to trusted origins via `ALLOWED_ORIGINS` env var (previously allowed all origins)

### Docs

- `CLAUDE.md` renamed to `AGENTS.md` (pi-preferred filename) and simplified to pointers to `agents/implementor/AGENTS.md` (workflow) and `PRINCIPLES.md` (engineering principles). Principles extracted to dedicated `PRINCIPLES.md`, eliminating duplication across agent files.
- Added Environment Variables table to README
- Added webhook agent integration pattern to best-practices guide
- Added agent-loop README with setup, architecture, and environment variables

## v2.3.0 (2026-03-01)

### Added

- Markdown formatting in comments: `**bold**`/`__bold__`, `*italic*`/`_italic_`, `` `code` ``, and `[links](url)` (#67)
- Visual formatting hints below comment and reply textareas
- XSS protection for comment markdown (blocks `javascript:`, `data:`, and `vbscript:` URL schemes)

### Fixed

- Duplicate comments appearing in sidebar when WebSocket echo arrives before HTTP response (#132)
- Page no longer scrolls to top when opening comment box (#194)

## v2.2.0 (2026-03-01)

### Docs

- Marketing refresh with benefit-focused copy (#213)

## v2.1.0 (2026-03-01)

### Features

- WebSocket support for real-time comment updates (#178)
- Webhook notifications for Slack, Discord, and email (#136)
- Security headers with helmet.js (#197)
- OpenAPI spec and spec-driven CLI (`@csalvato/remarq-cli`) (#201, #203)

### Chores / Internal

- CI workflow with lint, format check, build, and test coverage (#209)
- ESLint + Prettier for consistent code quality (#209)
- Engineering principles and council review system (#204)
- Council review skill + new-work prompt template for pi automation (#207)

## v2.0.1 (2026-02-24)

### Fixes

- Add shared/ directory to Dockerfile for v2.0.0 (#190)
- Inject print-hide CSS to fix iOS Safari print preview (#191)

## v2.0.0 (2026-02-24)

### Features

- Customizable highlight colors (#128)
- Show orphaned comments in sidebar (#182)
- Keyboard navigation for sidebar (#153)
- Emoji reactions on comments (#163)
- Dark mode support via CSS custom properties (#159)
- Toast notification system, replace alert() dialogs (#111)
- Open Graph and Twitter Card meta tags for docs page (#177)

### Fixes

- Dark mode styles for emoji reactions (#173)
- Fix annotate button on mobile text selection (#155)
- Wrap init/boot in try/catch to prevent breaking host pages (#114)
- Standardize error message extraction across all API fetch calls (#113)

### Documentation

- Comprehensive API documentation (#156)
- Best practices guide (#138)
- Logo and social preview (#53)

### Chores / Internal

- Pre-commit hook to auto-rebuild feedback-layer bundle (#170)
- Pull request template (#172)
- Extract pure functions to utils/ directory, remove \_testExports (#110)
- Expand unit test coverage: client tests + server edge cases (#104)
- Remove default Postgres password — fail-fast pattern (#51)
