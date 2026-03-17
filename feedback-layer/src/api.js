/**
 * Backend API client for the Remarq server.
 */

let _baseUrl = "";

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
  const res = await fetch(`${_baseUrl}/comments?${query}`);
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
  const res = await fetch(`${_baseUrl}/comments`, {
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
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  await throwIfNotOk(res, "Failed to update comment");
  return res.json();
}

export async function updateCommentStatus(id, status) {
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  await throwIfNotOk(res, "Failed to update comment status");
  return res.json();
}

export async function deleteComment(id) {
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "DELETE",
  });
  await throwIfNotOk(res, "Failed to delete comment");
}

export async function addReaction(commentId, emoji, author) {
  const res = await fetch(`${_baseUrl}/comments/${commentId}/reactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ emoji, author }),
  });
  await throwIfNotOk(res, "Failed to add reaction");
  return res.json();
}

export async function removeReaction(commentId, emoji, author) {
  const res = await fetch(
    `${_baseUrl}/comments/${commentId}/reactions/${encodeURIComponent(emoji)}?author=${encodeURIComponent(author)}`,
    { method: "DELETE" },
  );
  await throwIfNotOk(res, "Failed to remove reaction");
  return res.json();
}

export async function exportAnnotations(documentId, format) {
  const res = await fetch(`${_baseUrl}/documents/${documentId}/export?format=${format}`);
  await throwIfNotOk(res, "Failed to export annotations");

  const contentDisposition = res.headers.get("Content-Disposition");
  const filenameMatch = contentDisposition?.match(/filename="(.+?)"/);
  const filename = filenameMatch ? filenameMatch[1] : `annotations.${format}`;

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
