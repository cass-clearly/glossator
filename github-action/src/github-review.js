/**
 * Map parsed review comments to GitHub PR review comment format.
 */
export function buildReviewComments(filepath, comments) {
  return comments.map((c) => ({
    path: filepath,
    line: c.line,
    body: `**${c.severity}:** ${c.body}`,
  }));
}

/**
 * Post a PR review with inline comments.
 * Does nothing if comments array is empty (silent success).
 */
export async function postReview(octokit, owner, repo, pullNumber, comments) {
  if (comments.length === 0) return;

  await octokit.rest.pulls.createReview({
    owner,
    repo,
    pull_number: pullNumber,
    event: "COMMENT",
    body: "📝 **Remarq Document Review** — AI-powered feedback on your documentation changes.",
    comments,
  });
}

/**
 * Post a PR-level summary comment as fallback when structured comments aren't available.
 */
export async function postSummaryComment(octokit, owner, repo, pullNumber, filename, text) {
  if (!text) return;

  await octokit.rest.pulls.createReview({
    owner,
    repo,
    pull_number: pullNumber,
    event: "COMMENT",
    body: `📝 **Remarq Document Review** — \`${filename}\`\n\n${text}`,
  });
}
