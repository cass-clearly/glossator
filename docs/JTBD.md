# Remarq — Jobs to Be Done

## For Reviewers

### 1. Inline Annotations

**When** I'm reviewing a document, **I want to** highlight text and leave comments directly on the page, **so that** I can give precise, contextual feedback without switching tools.

> **How Remarq solves it:** Select any text to open an annotation popover — type your comment and it's anchored right where it belongs.

### 2. No Accounts Required

**When** I'm asked to review something, **I want to** start giving feedback without creating an account, **so that** I can contribute immediately without friction.

> **How Remarq solves it:** Just type your name and start annotating. No signup, no login, no OAuth flow.

### 3. Threaded Replies

**When** I see an existing annotation I want to discuss, **I want to** reply in a thread, **so that** I can have focused discussions about specific passages.

> **How Remarq solves it:** Every annotation supports threaded replies — click "Reply" to continue the conversation in context.

## For Authors

### 4. Feedback in Context

**When** I'm collecting feedback on my writing, **I want to** see all annotations in one place alongside the original text, **so that** I can review every suggestion in context.

> **How Remarq solves it:** The sidebar shows all annotations grouped by their position in the document. Click any annotation to scroll to the highlighted passage.

### 5. AI-Assisted Revision

**When** I've received feedback from multiple reviewers, **I want to** send my document and all feedback to Claude with one click, **so that** I can get AI-assisted revisions without manually compiling feedback.

> **How Remarq solves it:** Author mode (`?author=true`) adds a "Send Feedback to Claude" button that generates a structured revision prompt with all annotations and the full document.

### 6. Text Anchoring

**When** I edit my document between review rounds, **I want** annotations to stay anchored to the exact text they reference, **so that** I never lose track of what feedback refers to.

> **How Remarq solves it:** Annotations use W3C TextQuoteSelectors (via Apache Annotator) with prefix/suffix context, so highlights survive minor edits to the surrounding text.

## For Teams / Engineering Leads

### 7. Single Script Tag Integration

**When** I want to add feedback capability to our documentation, **I want to** embed it with a single script tag, **so that** I can enable collaboration without a complex integration.

> **How Remarq solves it:** One `<script>` tag with two optional attributes. No build step, no framework dependency, no config files.

### 8. Self-Hosted with Zero Dependencies

**When** I'm choosing a feedback tool for my team, **I want** a self-hosted solution with no external dependencies, **so that** I can keep data on our own infrastructure with no vendor lock-in.

> **How Remarq solves it:** Node.js + SQLite. No external databases, no Docker required, no third-party services. `npm install && npm start`.

### 9. Resolve / Unresolve Workflow

**When** I'm managing feedback on a document, **I want to** resolve and unresolve annotations, **so that** I can track which feedback has been addressed.

> **How Remarq solves it:** One-click resolve/unresolve on any annotation. Resolved annotations hide their highlights to reduce visual clutter.

### 10. Works on Rich Content (Diagrams & SVGs)

**When** I'm writing technical documentation with diagrams, **I want** annotations that work on Mermaid diagrams and SVGs, **so that** I can get feedback on visual content too — not just prose.

> **How Remarq solves it:** The annotation layer works on any HTML content within the configured content selector, including rendered Mermaid diagrams and inline SVGs.

### 11. Real-Time Collaboration

**When** I'm reviewing a document with other team members, **I want to** see their comments appear in real time, **so that** I can collaborate live without constantly refreshing the page.

> **How Remarq solves it:** WebSocket updates push new comments, edits, and deletions to all connected clients instantly. When someone posts feedback during a live review session, everyone sees it immediately.

### 12. Webhook Notifications

**When** feedback arrives on my documents, **I want to** get notified in Slack or email, **so that** I can respond quickly without polling the annotation UI.

> **How Remarq solves it:** Register webhook endpoints to receive signed HTTP callbacks when comments are created, resolved, or deleted. Wire Remarq into Slack, Discord, email, or any custom workflow.

### 13. Customizable Highlight Colors

**When** I'm reviewing a document, **I want to** choose a highlight color for my comments, **so that** my feedback is visually distinct from other reviewers' or I can color-code by priority.

> **How Remarq solves it:** Set `color` when creating or updating a comment. Choose from 8 preset colors (red, blue, green, purple, etc.) or pass any 6-digit hex code. Agents can color-code feedback by category (red for errors, blue for suggestions, green for approvals).

### 14. Dark Mode

**When** I'm reviewing late at night, **I want** dark mode, **so that** I can read comfortably without eye strain.

> **How Remarq solves it:** Set `data-theme="dark"` or `data-theme="auto"` (default) to follow OS preference. All UI components, syntax highlighting, and sidebar styles adapt automatically.

### 15. Emoji Reactions

**When** I see a comment I agree with, **I want to** react with an emoji instead of writing a full reply, **so that** I can quickly express agreement without adding noise.

> **How Remarq solves it:** Click any emoji (👍, ❤️, 👀, 🎉, 🤔, 😂, ➕) on a comment to add your reaction. Reaction counts show consensus at a glance without cluttering threads with "+1" replies.

### 16. Keyboard Navigation

**When** I'm reviewing a document, **I want** full keyboard navigation, **so that** I can power through feedback without touching my mouse.

> **How Remarq solves it:** `s` to toggle sidebar, `j`/`k` to navigate comments, `Enter` to reply, `Cmd+Enter` to submit. Press `?` to see all shortcuts. Full accessibility support.

### 17. OpenAPI Discovery for Agents

**When** I'm integrating Remarq with an AI agent, **I want** the agent to discover the entire API automatically, **so that** I don't have to manually explain every endpoint.

> **How Remarq solves it:** `GET /openapi.json` returns a machine-readable OpenAPI 3.0 spec. Agents can ingest the full API surface in one shot — zero ramp-up time. The spec includes `x-cli` extensions that drive the CLI.

### 18. CLI for Scriptable Management

**When** I'm automating document workflows, **I want** a CLI to manage comments and documents from scripts, **so that** I don't have to build UI automation or hand-craft API calls.

> **How Remarq solves it:** `npm install -g @csalvato/remarq-cli` gives you commands like `remarq comments list`, `remarq comments create`, `remarq documents delete`. CLI commands auto-generate from the OpenAPI spec — new server endpoints appear in the CLI with zero CLI code changes.

### 19. Security Hardening

**When** I'm deploying Remarq to production, **I want** protection against common web attacks, **so that** I don't have to manually configure security headers.

> **How Remarq solves it:** helmet.js sets X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security, and other security headers out of the box. Protects against clickjacking, MIME sniffing, and related attacks. CSP is intentionally disabled since the feedback layer is designed to be embedded in third-party pages.

### 20. Orphaned Comments Stay Visible

**When** I edit a document after receiving feedback, **I want** orphaned comments (whose text anchors broke) to remain visible, **so that** no feedback gets silently lost.

> **How Remarq solves it:** When text anchoring fails (because the quoted text was deleted or heavily edited), the comment surfaces at the bottom of the sidebar with a clear "orphaned" indicator. You can still read the feedback, reply, and resolve it.
