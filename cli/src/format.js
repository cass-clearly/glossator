function formatHealth(data) {
  return `Status: ${data.status}`;
}

function formatDocument(doc) {
  const lines = [
    `ID:      ${doc.id}`,
    `URI:     ${doc.uri}`,
    `Created: ${doc.created_at}`,
  ];
  return lines.join("\n");
}

function formatDocumentList(list) {
  if (list.data.length === 0) return "No documents found.";
  const rows = list.data.map(
    (d) => `${d.id}  ${d.uri}  ${d.created_at}`
  );
  rows.push(`\n${list.data.length} document(s)`);
  return rows.join("\n");
}

function formatComment(comment) {
  const lines = [
    `ID:       ${comment.id}`,
    `Document: ${typeof comment.document === "object" ? comment.document.id : comment.document}`,
    `Author:   ${comment.author}`,
  ];
  if (comment.status != null) lines.push(`Status:   ${comment.status}`);
  if (comment.parent) lines.push(`Parent:   ${comment.parent}`);
  if (comment.quote) lines.push(`Quote:    "${comment.quote}"`);
  lines.push(`Body:     ${comment.body}`);
  if (comment.color) lines.push(`Color:    ${comment.color}`);
  if (comment.reactions && comment.reactions.length > 0) {
    const rxn = comment.reactions
      .map((r) => `${r.emoji} (${r.count})`)
      .join("  ");
    lines.push(`Reactions: ${rxn}`);
  }
  lines.push(`Created:  ${comment.created_at}`);
  return lines.join("\n");
}

function formatCommentList(list) {
  if (list.data.length === 0) return "No comments found.";
  const rows = list.data.map((c) => {
    const status = c.status ? `[${c.status}]` : "[reply]";
    return `${c.id}  ${status}  ${c.author}: ${c.body}`;
  });
  rows.push(`\n${list.data.length} comment(s)`);
  return rows.join("\n");
}

function formatReactions(data) {
  const lines = [`Comment: ${data.comment_id}`];
  if (data.reactions.length === 0) {
    lines.push("No reactions.");
  } else {
    for (const r of data.reactions) {
      lines.push(`  ${r.emoji} (${r.count}): ${r.authors.join(", ")}`);
    }
  }
  return lines.join("\n");
}

/**
 * Generic formatter used by the spec-driven command builder.
 * Inspects the response shape and delegates to the appropriate formatter.
 */
function genericFormat(data) {
  if (data === null || data === undefined) return "";
  if (typeof data !== "object") return String(data);

  // List response
  if (data.object === "list") {
    if (!data.data || data.data.length === 0) return "No results found.";
    const rows = data.data.map((item) => {
      if (item.object === "document") {
        return `${item.id}  ${item.uri}  ${item.created_at}`;
      }
      if (item.object === "comment") {
        const status = item.status ? `[${item.status}]` : "[reply]";
        return `${item.id}  ${status}  ${item.author}: ${item.body}`;
      }
      return JSON.stringify(item);
    });
    rows.push(`\n${data.data.length} item(s)`);
    return rows.join("\n");
  }

  if (data.object === "document") return formatDocument(data);
  if (data.object === "comment")  return formatComment(data);

  // Reaction response: { comment_id, reactions }
  if (Object.prototype.hasOwnProperty.call(data, "comment_id")) {
    return formatReactions(data);
  }

  // Health / unknown: small objects with a status field
  if (data.status !== undefined && Object.keys(data).length <= 2) {
    return `Status: ${data.status}`;
  }

  return JSON.stringify(data, null, 2);
}

module.exports = {
  formatHealth,
  formatDocument,
  formatDocumentList,
  formatComment,
  formatCommentList,
  formatReactions,
  genericFormat,
};
