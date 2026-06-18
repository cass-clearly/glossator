/**
 * Backend API client for the Remarq server.
 */

let _baseUrl = "";

// Exponential backoff: 1s, 2s, 4s (configurable for testing)
let _retryDelays = [1000, 2000, 4000];
let _requestTimeout = 10000; // 10 second timeout

/** @internal For testing only - configure retry delays */
export function _setRetryConfig(delays, timeout) {
  _retryDelays = delays;
  _requestTimeout = timeout;
}

/**
 * Fetch wrapper with retry logic and timeout.
 * Retries on network errors and 5xx responses (NOT 4xx).
 * Uses exponential backoff: 1s, 2s, 4s (max 3 retries).
 */
export async function fetchWithRetry(url, options = {}) {
  let lastError;

  for (let attempt = 0; attempt <= _retryDelays.length; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), _requestTimeout);

    try {
      const res = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      // Don't retry 4xx errors - they are client errors
      if (res.status >= 400 && res.status < 500) {
        return res;
      }

      // Retry on 5xx server errors
      if (res.status >= 500) {
        lastError = new Error(`Server error: ${res.status}`);
        if (attempt < _retryDelays.length) {
          await new Promise((resolve) => setTimeout(resolve, _retryDelays[attempt]));
          continue;
        }
        return res; // Return the failed response after exhausting retries
      }

      return res;
    } catch (err) {
      clearTimeout(timeoutId);
      lastError = err;

      // Retry on network errors (including timeouts)
      if (attempt < _retryDelays.length) {
        await new Promise((resolve) => setTimeout(resolve, _retryDelays[attempt]));
        continue;
      }
      throw err;
    }
  }

  throw lastError;
}

export function setBaseUrl(url) {
  _baseUrl = url.replace(/\/+$/, "");
}

/**
 * Throws a descriptive error when a fetch response is not OK.
 * Extracts structured error message from the JSON body when available;
 * falls back to a generic message with the HTTP status code.
 */
async function throwIfNotOk(res, fallbackMessage) {
  if (res.ok) return;
  const err = await res.json().catch(() => ({ error: { message: res.statusText } }));
  throw new Error(err.error?.message || `${fallbackMessage}: ${res.status}`);
}

export async function fetchComments(uri, documentId) {
  const query = documentId ? `document=${encodeURIComponent(documentId)}` : `uri=${encodeURIComponent(uri)}`;
  const res = await fetchWithRetry(`${_baseUrl}/comments?${query}`);
  await throwIfNotOk(res, "Failed to fetch comments");
  const json = await res.json();
  return json.data;
}

export async function createComment({ uri, document, quote, prefix, suffix, body, author, parent, color }) {
  const payload = { quote, prefix, suffix, body, author, parent };
  if (color) payload.color = color;
  if (document) {
    payload.document = document;
  } else {
    payload.uri = uri;
  }
  const res = await fetchWithRetry(`${_baseUrl}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  await throwIfNotOk(res, "Failed to create comment");
  return res.json();
}

export async function updateComment(id, { body, color }) {
  const payload = {};
  if (body !== undefined) payload.body = body;
  if (color !== undefined) payload.color = color;
  const res = await fetchWithRetry(`${_baseUrl}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  await throwIfNotOk(res, "Failed to update comment");
  return res.json();
}

export async function updateCommentStatus(id, status) {
  const res = await fetchWithRetry(`${_baseUrl}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  await throwIfNotOk(res, "Failed to update comment status");
  return res.json();
}

export async function deleteComment(id) {
  const res = await fetchWithRetry(`${_baseUrl}/comments/${id}`, {
    method: "DELETE",
  });
  await throwIfNotOk(res, "Failed to delete comment");
}

export async function addReaction(commentId, emoji, author) {
  const res = await fetchWithRetry(`${_baseUrl}/comments/${commentId}/reactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ emoji, author }),
  });
  await throwIfNotOk(res, "Failed to add reaction");
  return res.json();
}

export async function removeReaction(commentId, emoji, author) {
  const res = await fetchWithRetry(
    `${_baseUrl}/comments/${commentId}/reactions/${encodeURIComponent(emoji)}?author=${encodeURIComponent(author)}`,
    { method: "DELETE" },
  );
  await throwIfNotOk(res, "Failed to remove reaction");
  return res.json();
}
