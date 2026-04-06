/**
 * Compute comment count stats from a flat comments array.
 * Returns { total, resolved, unresolved } counting top-level comments only.
 *
 * @param {Array} comments - flat comment array (may include replies)
 * @returns {{ total: number, resolved: number, unresolved: number }}
 */
export function commentCounts(comments) {
  const topLevel = comments.filter((c) => !c.parent);
  const total = topLevel.length;
  const resolved = topLevel.filter((c) => c.status === "closed").length;
  return { total, resolved, unresolved: total - resolved };
}

/**
 * Build the page title suffix string for the given counts.
 * Returns empty string when there are no comments.
 *
 * @param {number} total
 * @param {number} resolved
 * @returns {string}
 */
export function titleSuffix(total, resolved) {
  if (total === 0) return "";
  const label = total === 1 ? "comment" : "comments";
  if (resolved > 0) return `(${total} ${label}, ${resolved} resolved) — Remarq`;
  return `(${total} ${label}) — Remarq`;
}
