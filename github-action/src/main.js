import { buildReviewComments } from "./github-review.js";

const MAX_FILES = 10;

/**
 * Main action orchestrator. Takes dependency-injected functions so the
 * core logic is fully testable without real API calls.
 */
export async function run(deps) {
  const {
    getChangedFiles,
    getFileDiff,
    reviewDiff,
    postReview,
    postSummaryComment,
    log,
    warn,
    setOutput,
  } = deps;

  const changedFiles = await getChangedFiles();

  if (changedFiles.length === 0) {
    log("No matching documentation files changed in this PR.");
    setOutput("files-reviewed", 0);
    setOutput("comments-posted", 0);
    return;
  }

  const filesToReview = changedFiles.slice(0, MAX_FILES);
  if (changedFiles.length > MAX_FILES) {
    warn(`PR has ${changedFiles.length} changed doc files. Reviewing first ${MAX_FILES}.`);
  }

  let totalComments = 0;
  const allInlineComments = [];
  const summaries = [];

  for (const file of filesToReview) {
    try {
      const diff = await getFileDiff(file);
      const result = await reviewDiff(file, diff);

      if (result.type === "comments") {
        const ghComments = buildReviewComments(file, result.comments);
        allInlineComments.push(...ghComments);
        totalComments += result.comments.length;
      } else if (result.type === "summary" && result.text) {
        summaries.push({ file, text: result.text });
      }
    } catch (err) {
      warn(`Failed to review ${file}: ${err.message}`);
    }
  }

  // Post all inline comments as a single review
  if (allInlineComments.length > 0) {
    await postReview(allInlineComments);
  }

  // Post summary comments for files where structured parsing failed
  for (const { file, text } of summaries) {
    await postSummaryComment(file, text);
  }

  setOutput("files-reviewed", filesToReview.length);
  setOutput("comments-posted", totalComments);

  log(`Reviewed ${filesToReview.length} files, posted ${totalComments} comments.`);
}
