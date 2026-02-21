# Interactive Widgets Compatibility

Remarq uses [TextQuoteSelectors](https://www.w3.org/TR/annotation-model/#text-quote-selector) to anchor annotations to text. This means anchoring depends on the target text being present in the DOM at the time of matching.

This guide documents which interactive UI patterns work with Remarq and which require special handling.

## Supported Patterns

These patterns work out of the box because the text remains in the DOM even when hidden.

| Pattern | How it works | Remarq compatible? |
|---------|-------------|-------------------|
| **Accordions / collapsible sections** | Content hidden with CSS (`max-height: 0`, `display: none`) | Yes |
| **Tab panels** | All panels in DOM, visibility toggled | Yes |
| **Modals / dialogs** | Modal DOM present but hidden until triggered | Yes |
| **Dropdowns / popovers** | Content in DOM, toggled via CSS class | Yes |
| **CSS `visibility: hidden`** | Text in DOM, just not painted | Yes |
| **`display: none`** | Text in DOM, not rendered | Yes |

**Key principle:** If the text is in the DOM (even hidden), annotations will anchor.

## Deferred Anchoring

For content that is **not in the DOM on initial page load** (e.g., lazy-loaded content, dynamically injected HTML), Remarq uses deferred anchoring.

### How it works

1. On page load, Remarq attempts to anchor all comments to their text ranges
2. Comments that fail to anchor are queued for retry
3. A `MutationObserver` watches the content root for new DOM nodes
4. When new content appears, failed anchors are retried (debounced at 500ms)
5. After 10 failed attempts per comment, retrying stops to avoid infinite loops

### Patterns that use deferred anchoring

| Pattern | Behavior |
|---------|----------|
| **Lazy-loaded content** | Button/scroll triggers content injection — anchors on retry |
| **Fetch-and-append** | API data rendered into DOM after load — anchors on retry |
| **Progressive enhancement** | Server-rendered shell filled by JS — anchors on retry |

### Limitations

- **Max 10 retries** per comment. If text hasn't appeared after 10 DOM mutations, the comment stays unanchored (visible in sidebar without a highlight).
- **500ms debounce** means rapid DOM changes are batched. Anchoring won't happen until mutations settle.

## Unsupported Patterns

| Pattern | Why it fails |
|---------|-------------|
| **Content removed from DOM** | Deleted elements can't be matched. Annotations become orphaned. |
| **Cross-origin iframes** | Same-origin policy blocks DOM access. |
| **Shadow DOM (closed)** | Closed shadow roots are inaccessible to the MutationObserver and text matching. |
| **Canvas / WebGL text** | Not real DOM text nodes — no text to match against. |
| **SPA route changes** (full DOM replacement) | If the entire content root is replaced, the observer is lost. Requires re-initialization. |

## Recommendations for Page Authors

1. **Keep content in the DOM.** Use CSS to hide/show interactive sections rather than adding/removing elements.
2. **Use `display: none`** instead of removing elements — this is the simplest way to ensure compatibility.
3. **For lazy-loaded content**, deferred anchoring handles it automatically, but annotations created before the content loads won't highlight until the content appears.
4. **Avoid deleting annotated elements.** If you must remove content, consider hiding it instead.

## Test Page

A comprehensive test page covering all patterns above is available at [`demo/interactive-widgets.html`](../demo/interactive-widgets.html). To use it:

```bash
npm run dev
# Open http://localhost:3333/demo/interactive-widgets.html
```

The test page includes accordions, tabs, modals, dropdowns, dynamically loaded content, and a DOM removal example.
