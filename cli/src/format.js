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

module.exports = {
  formatHealth,
  formatDocument,
  formatDocumentList,
  formatComment,
  formatCommentList,
  formatReactions,
};
