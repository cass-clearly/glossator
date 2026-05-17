"use strict";

/**
 * Escape a value for CSV output.
 * Wraps in double quotes and escapes internal double quotes.
 *
 * @param {*} v - Value to escape
 * @returns {string} CSV-safe string
 */
function escape(v) {
  if (v === null || v === undefined) return "";
  const str = String(v).replace(/"/g, '""');
  return `"${str}"`;
}

/**
 * Render annotation export as CSV.
 *
 * @param {object[]} commentsWithReactions - Formatted comments with reactions attached
 * @returns {string} CSV content (header + rows)
 */
function renderCsv(commentsWithReactions) {
  const header = "quote,body,author,status,created_at,parent_id\n";
  const rows = commentsWithReactions
    .map((c) =>
      [
        escape(c.quote),
        escape(c.body),
        escape(c.author),
        escape(c.status),
        escape(c.created_at),
        escape(c.parent),
      ].join(","),
    )
    .join("\n");
  return header + rows;
}

module.exports = { renderCsv, escape };
