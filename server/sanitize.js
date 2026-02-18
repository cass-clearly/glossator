/**
 * Sanitize user-provided text fields.
 * Strips HTML tags for safe storage and XSS prevention.
 */

/**
 * Strip HTML tags from a string and trim whitespace.
 * @param {string} str
 * @returns {string}
 */
function sanitize(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/<[^>]*>/g, '').trim();
}

module.exports = { sanitize };
