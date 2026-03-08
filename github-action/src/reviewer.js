import { parseReviewResponse } from "./review-parser.js";

const DEFAULT_MODEL = "claude-sonnet-4-20250514";
const REVIEW_TIMEOUT_MS = 60_000;

const SYSTEM_PROMPT = `You are a documentation reviewer. You review diffs of documentation files and provide specific, actionable feedback.

Respond with a JSON array of review comments. Each comment must have this exact structure:
[{"line": <number>, "body": "<feedback text>", "severity": "<suggestion|warning|error>"}]

Rules:
- "line" is the line number in the NEW version of the file where the issue exists
- "body" is a concise explanation of the issue and how to fix it
- "severity" is one of: "suggestion" (style/clarity), "warning" (accuracy/completeness), "error" (factually wrong or broken)
- Only comment on lines that were added or changed in the diff
- If the documentation looks good and you have no feedback, return an empty array: []
- Do NOT wrap the JSON in markdown code fences
- Do NOT include any text before or after the JSON array`;

/**
 * Build the user prompt for Claude given a filename and diff.
 */
export function buildReviewPrompt(filename, diff) {
  return `Review the following diff for the file "${filename}". Provide feedback as a JSON array with "line", "body", and "severity" fields.

\`\`\`diff
${diff}
\`\`\``;
}

/**
 * Send a diff to Claude for review and return parsed results.
 *
 * @param {object} client - Anthropic SDK client
 * @param {string} filename - Name of the file being reviewed
 * @param {string} diff - The diff content
 * @param {object} [options] - Optional settings
 * @param {string} [options.model] - Claude model to use
 * @returns {Promise<{type: "comments", comments: Array} | {type: "summary", text: string}>}
 */
export async function reviewDiff(client, filename, diff, options = {}) {
  const model = options.model || DEFAULT_MODEL;

  const response = await client.messages.create(
    {
      model,
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: buildReviewPrompt(filename, diff),
        },
      ],
    },
    { timeout: REVIEW_TIMEOUT_MS },
  );

  const textBlock = response.content.find((block) => block.type === "text");
  const rawText = textBlock ? textBlock.text : "";

  return parseReviewResponse(rawText);
}
