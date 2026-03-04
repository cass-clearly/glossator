/**
 * HTML sanitization wrapper using DOMPurify.
 *
 * Used for markdown-rendered content where innerHTML is required.
 * Provides defense-in-depth on top of the escape-first approach
 * in renderMarkdown().
 */

import DOMPurify from "dompurify";

/**
 * Sanitize an HTML string, allowing only safe tags and attributes.
 *
 * @param {string} html - Untrusted HTML string
 * @returns {string} Sanitized HTML safe for innerHTML assignment
 */
export function sanitizeHtml(html) {
  return DOMPurify.sanitize(html);
}
