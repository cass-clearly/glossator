import { threadComments } from "./thread-comments.js";

/**
 * Filter comments by search keyword and/or author.
 * Thread-aware: if any comment in a thread matches all criteria,
 * the entire thread (parent + all replies) is included.
 *
 * @param {Array} comments - All comments (flat list)
 * @param {Object} opts
 * @param {string} [opts.search] - Keyword to match in body or quote
 * @param {string} [opts.author] - Author name to match (case-insensitive exact)
 * @returns {Array} Filtered comments
 */
export function filterComments(comments, { search = "", author = "" } = {}) {
  if (!search && !author) return comments;

  const { topLevel, repliesByParent } = threadComments(comments);
  const matchingRootIds = new Set();

  for (const root of topLevel) {
    const replies = repliesByParent.get(root.id) || [];
    const allInThread = [root, ...replies];

    let matches = true;

    if (search) {
      const lower = search.toLowerCase();
      matches = allInThread.some(
        (c) =>
          (c.body || "").toLowerCase().includes(lower) ||
          (c.quote || "").toLowerCase().includes(lower)
      );
    }

    if (matches && author) {
      const lower = author.toLowerCase();
      matches = allInThread.some(
        (c) => (c.author || "").toLowerCase() === lower
      );
    }

    if (matches) matchingRootIds.add(root.id);
  }

  return comments.filter(
    (c) => matchingRootIds.has(c.id) || matchingRootIds.has(c.parent)
  );
}
