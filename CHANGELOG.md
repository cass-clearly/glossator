# Changelog

## [Unreleased]

### Fixed

- Clicking a highlight no longer scrolls the main page to the top — sidebar now scrolls internally (#221)

### Security

- CORS now restricted to trusted origins via `ALLOWED_ORIGINS` env var (previously allowed all origins)

### Docs

- Added Environment Variables table to README

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
