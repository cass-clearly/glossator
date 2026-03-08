import { minimatch } from "minimatch";

/**
 * Create a GitHub client for fetching PR file data.
 * Caches the file list on first fetch to avoid N+1 API calls.
 */
export function createGitHubClient(octokit, owner, repo, pullNumber, patterns) {
  let fileCache = null;

  return {
    async getChangedFiles() {
      const allFiles = await fetchAllFiles(octokit, owner, repo, pullNumber);
      fileCache = allFiles;

      return allFiles
        .filter((f) => f.status !== "removed")
        .map((f) => f.filename)
        .filter((name) => patterns.some((p) => minimatch(name, p)));
    },

    async getFileDiff(filename) {
      if (!fileCache) return "";
      const file = fileCache.find((f) => f.filename === filename);
      return file?.patch || "";
    },
  };
}

async function fetchAllFiles(octokit, owner, repo, pullNumber) {
  const files = [];
  let page = 1;
  while (true) {
    const { data } = await octokit.rest.pulls.listFiles({
      owner,
      repo,
      pull_number: pullNumber,
      per_page: 100,
      page,
    });
    if (data.length === 0) break;
    files.push(...data);
    if (data.length < 100) break;
    page++;
  }
  return files;
}
