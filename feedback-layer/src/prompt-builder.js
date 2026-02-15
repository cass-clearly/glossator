/**
 * Formats annotations and document content into a structured prompt for Claude.
 */

/**
 * Build a Claude prompt from the document HTML and reviewer annotations.
 *
 * @param {string} documentHtml - The full HTML of the document being reviewed
 * @param {Array<{quote: string, comment: string, commenter: string}>} annotations
 * @returns {string} The formatted prompt
 */
export function buildPrompt(documentHtml, annotations) {
  const feedbackSection = formatAnnotations(annotations);

  const topLevelCount = annotations.filter((a) => !a.parent_id).length;

  return `You are a document editor. Below is an HTML document and feedback from ${topLevelCount} reviewer annotation(s) (with replies). Revise the document to address the feedback.

## Original Document

\`\`\`html
${documentHtml}
\`\`\`

## Reviewer Feedback

${feedbackSection}

## Instructions

1. Carefully read each piece of feedback and the highlighted text it refers to.
2. Revise the document HTML to address the feedback where appropriate.
3. Preserve the overall structure and formatting of the document.
4. After the revised HTML, include a brief changelog noting which feedback items you addressed and how.

Respond with:

### Revised Document
\`\`\`html
[your revised HTML here]
\`\`\`

### Changelog
[numbered list matching feedback numbers, explaining what you changed]`;
}

/**
 * Format annotations into a numbered list for the prompt, with threaded replies.
 */
function formatAnnotations(annotations) {
  // Thread into parents + replies
  const topLevel = [];
  const repliesByParent = new Map();
  for (const ann of annotations) {
    if (ann.parent_id) {
      if (!repliesByParent.has(ann.parent_id)) repliesByParent.set(ann.parent_id, []);
      repliesByParent.get(ann.parent_id).push(ann);
    } else {
      topLevel.push(ann);
    }
  }

  if (topLevel.length === 0) {
    return "_No annotations found._";
  }

  return topLevel
    .map((ann, i) => {
      const parts = [`**${i + 1}. [${ann.commenter}]**`];
      if (ann.quote) parts.push(`Highlighted text: "${ann.quote}"`);
      if (ann.comment) parts.push(`Comment: ${ann.comment}`);

      const replies = repliesByParent.get(ann.id) || [];
      for (const reply of replies) {
        parts.push(`  - **[${reply.commenter}]** (reply): ${reply.comment}`);
      }

      return parts.join("\n");
    })
    .join("\n\n");
}
