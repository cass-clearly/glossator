# Markdown Support Implementation Plan (#67)

## Goal

Allow users to format comments using basic markdown syntax: **bold**, *italic*, `code`, and [links].

## Requirements

1. **Parse markdown** in comment bodies before rendering
2. **Sanitize HTML** to prevent XSS attacks
3. **Store as plain text** (markdown syntax) in database - no schema changes
4. **UI hints** (optional): toolbar buttons or help text showing markdown syntax

## Implementation Approach

### Option 1: Lightweight Custom Parser (Recommended)

Implement a minimal markdown parser supporting only:
- `**bold**` → `<strong>bold</strong>`
- `*italic*` or `_italic_` → `<em>italic</em>`
- `` `code` `` → `<code>code</code>`
- `[text](url)` → `<a href="url">text</a>`

**Pros:**
- No dependencies
- Tiny bundle size impact (~1-2 KB)
- Full control over allowed features
- Easy to sanitize (limited HTML output)

**Cons:**
- Need to write and test regex-based parser
- Edge cases may be tricky (nested formatting, escaping)

### Option 2: Use `marked` Library

Use the popular `marked` library with a custom renderer and sanitizer.

**Pros:**
- Battle-tested, handles edge cases
- Full markdown support (lists, headers, etc.)
- Easy to restrict features

**Cons:**
- Adds ~30 KB to bundle (minified)
- Overkill for just bold/italic/code/links
- Still requires custom sanitization

### Option 3: Use `markdown-it` (Lightweight)

Similar to `marked` but more modular and slightly smaller.

**Pros:**
- Modular (can enable only needed features)
- ~20 KB minified
- Plugin ecosystem

**Cons:**
- Still larger than custom solution
- Learning curve for configuration

## Recommended: Custom Parser

Given Remarq's focus on small bundle size, a custom regex-based parser is best.

### Implementation

#### 1. Create `src/markdown.js`

```javascript
/**
 * Minimal markdown parser supporting:
 * - **bold**
 * - *italic* or _italic_
 * - `code`
 * - [text](url)
 */

export function parseMarkdown(text) {
  if (!text) return '';

  // Escape HTML first to prevent XSS
  text = escapeHtml(text);

  // Parse markdown (order matters!)
  
  // Links: [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Bold: **text**
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic: *text* or _text_
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  text = text.replace(/_([^_]+)_/g, '<em>$1</em>');

  // Inline code: `text`
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Convert newlines to <br>
  text = text.replace(/\n/g, '<br>');

  return text;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
```

#### 2. Add URL Sanitization

Prevent `javascript:` URLs in links:

```javascript
function sanitizeUrl(url) {
  const lower = url.toLowerCase().trim();
  if (lower.startsWith('javascript:') || lower.startsWith('data:')) {
    return '#';
  }
  return url;
}

// Update link regex:
text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
  return `<a href="${sanitizeUrl(url)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
});
```

#### 3. Integrate into `sidebar.js`

In `renderComments()`, wrap comment text with `parseMarkdown()`:

```javascript
import { parseMarkdown } from './markdown.js';

// In buildCommentCard():
const commentHtml = parseMarkdown(comment.comment);
// Use commentHtml instead of escapeHtml(comment.comment)
```

#### 4. Add Formatting Hints (Optional)

Add a small help text below comment textarea:

```html
<div class="fb-markdown-hint">
  Markdown: **bold**, *italic*, `code`, [link](url)
</div>
```

Style it subtly (small gray text).

#### 5. Add CSS for Rendered Markdown

```css
.fb-comment-body strong {
  font-weight: 600;
}

.fb-comment-body em {
  font-style: italic;
}

.fb-comment-body code {
  background: #f3f4f6;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
}

.fb-comment-body a {
  color: #3b82f6;
  text-decoration: underline;
}

.fb-comment-body a:hover {
  color: #2563eb;
}
```

## Testing

### Test Cases

1. **Bold**: `This is **bold** text` → "This is <strong>bold</strong> text"
2. **Italic**: `This is *italic* text` → "This is <em>italic</em> text"
3. **Code**: `` Use `npm install` to install `` → "Use <code>npm install</code> to install"
4. **Link**: `[Click here](https://example.com)` → "<a href=\"...\">Click here</a>"
5. **Nested**: `This is **bold and *italic***` (should handle or reject)
6. **XSS attempt**: `<script>alert('xss')</script>` → escaped, not executed
7. **Malicious link**: `[evil](javascript:alert('xss'))` → href sanitized to `#`
8. **Line breaks**: Multi-line comments should preserve breaks

### Manual Testing

1. Create a comment with markdown syntax
2. Verify it renders correctly in the sidebar
3. Reload page, verify re-anchored comment still renders markdown
4. Try XSS payloads, verify they're escaped

## Bundle Size Impact

- Custom parser: ~1-2 KB (minified)
- CSS: ~0.5 KB
- **Total**: ~2-3 KB added to bundle

Much better than 20-30 KB from a library.

## Migration

No database changes needed. Existing comments without markdown will render as plain text (no special chars to trigger markdown parsing).

## Rollout

1. Implement parser and sanitization
2. Add tests
3. Deploy
4. Add UI hints in a follow-up (optional)

## Status

- [ ] Implement `src/markdown.js`
- [ ] Add URL sanitization
- [ ] Integrate into `sidebar.js`
- [ ] Add CSS styling
- [ ] Write tests
- [ ] Add formatting hints (optional)
- [ ] Deploy
