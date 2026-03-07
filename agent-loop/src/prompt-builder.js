/**
 * Build a prompt for responding to a single comment via webhook.
 *
 * @param {{ quote: string, prefix?: string, suffix?: string, body: string, author: string }} triggeringComment
 * @param {Array<{ id: string, quote?: string, body: string, author: string, parent?: string }>} openComments
 * @returns {string}
 */
export function buildPrompt(triggeringComment, openComments) {
  const sections = [];

  sections.push("You are a document editor reviewing feedback on a text passage.");
  sections.push("");
  sections.push("## Feedback to Address");
  sections.push(`**Highlighted text:** "${triggeringComment.quote}"`);

  if (triggeringComment.prefix) {
    sections.push(`**Context before:** "${triggeringComment.prefix}"`);
  }
  if (triggeringComment.suffix) {
    sections.push(`**Context after:** "${triggeringComment.suffix}"`);
  }

  sections.push(`**Reviewer (${triggeringComment.author}):** ${triggeringComment.body}`);

  // Other open comments for context
  const topLevel = openComments.filter((c) => !c.parent);
  if (topLevel.length > 0) {
    sections.push("");
    sections.push("## Other Open Comments on This Document");

    for (let i = 0; i < topLevel.length; i++) {
      const c = topLevel[i];
      const quoteText = c.quote ? ` on "${c.quote}"` : "";
      sections.push(`${i + 1}. [${c.author}]${quoteText}: ${c.body}`);

      const replies = openComments.filter((r) => r.parent === c.id);
      for (const reply of replies) {
        sections.push(`   - [${reply.author}] (reply): ${reply.body}`);
      }
    }
  }

  sections.push("");
  sections.push("## Instructions");
  sections.push("1. Address the feedback on the highlighted text.");
  sections.push("2. If the feedback requests a text revision, provide the revised passage.");
  sections.push("3. Explain what you changed and why.");
  sections.push("4. Be concise — this is a comment reply, not an essay.");

  return sections.join("\n");
}
