const VALID_SEVERITIES = new Set(["suggestion", "warning", "error"]);

/**
 * Validate and normalize a single review comment object.
 * Returns the normalized comment or null if invalid.
 */
export function validateComment(obj) {
  if (!obj || typeof obj !== "object") return null;

  const line = Number(obj.line);
  if (!Number.isFinite(line) || line < 0) return null;

  const body = obj.body;
  if (typeof body !== "string" || body.length === 0) return null;

  const severity = VALID_SEVERITIES.has(obj.severity) ? obj.severity : "suggestion";

  return { line: Math.floor(line), body, severity };
}

/**
 * Parse Claude's review response into structured comments or a fallback summary.
 *
 * Returns either:
 *   { type: "comments", comments: [...] }  — structured inline comments
 *   { type: "summary", text: string }       — fallback raw text
 */
export function parseReviewResponse(raw) {
  if (raw == null) return { type: "summary", text: "" };

  const text = String(raw).trim();
  if (text.length === 0) return { type: "summary", text: "" };

  // Try direct JSON parse first
  const parsed = tryParseJsonArray(text);
  if (parsed) {
    const comments = parsed.map(validateComment).filter(Boolean);
    if (comments.length > 0 || parsed.length === 0) return { type: "comments", comments };
    return { type: "summary", text };
  }

  // Try extracting from markdown code fence
  const fenceMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (fenceMatch) {
    const inner = tryParseJsonArray(fenceMatch[1].trim());
    if (inner) {
      const comments = inner.map(validateComment).filter(Boolean);
      if (comments.length > 0) return { type: "comments", comments };
    }
  }

  // Try extracting embedded JSON array from surrounding text
  // Only if the entire string isn't already valid JSON (prevents extracting from JSON objects)
  const bracketMatch = !isValidJson(text) && text.match(/\[[\s\S]*\]/);
  if (bracketMatch) {
    const inner = tryParseJsonArray(bracketMatch[0]);
    if (inner) {
      const comments = inner.map(validateComment).filter(Boolean);
      if (comments.length > 0) return { type: "comments", comments };
    }
  }

  return { type: "summary", text };
}

function isValidJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

function tryParseJsonArray(str) {
  try {
    const parsed = JSON.parse(str);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
