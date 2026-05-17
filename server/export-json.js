"use strict";

/**
 * Render annotation export as JSON.
 *
 * @param {object} document - Formatted document object
 * @param {object[]} commentsWithReactions - Formatted comments with reactions attached
 * @returns {object} Export payload
 */
function renderJson(document, commentsWithReactions) {
  return {
    document,
    comments: commentsWithReactions,
    exported_at: new Date().toISOString(),
  };
}

module.exports = { renderJson };
