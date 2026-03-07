const DEFAULT_TIMEOUT_MS = 15000;

/**
 * Create a Remarq API client. Exists as a test seam — the three fetch calls
 * need mockable boundaries for testing without hitting real APIs.
 *
 * @param {string} baseUrl - Remarq server URL
 * @param {{ timeoutMs?: number }} [options]
 */
export function createRemarqClient(baseUrl, { timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
  async function request(path, { method = "GET", body } = {}) {
    const url = `${baseUrl}${path}`;
    const opts = {
      method,
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(timeoutMs),
    };
    if (body) opts.body = JSON.stringify(body);

    const res = await fetch(url, opts);
    if (!res.ok) {
      throw new Error(`Remarq API error: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }

  return {
    async getOpenComments(documentId) {
      const result = await request(`/comments?document=${encodeURIComponent(documentId)}&status=open`);
      return result.data;
    },

    async createComment({ document, body, author, parent }) {
      return request("/comments", {
        method: "POST",
        body: { document, body, author, parent },
      });
    },

    async resolveComment(commentId) {
      return request(`/comments/${encodeURIComponent(commentId)}`, {
        method: "PATCH",
        body: { status: "closed" },
      });
    },
  };
}
