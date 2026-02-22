/**
 * Server-side color validation for highlight colors.
 */

const VALID_COLORS = ["yellow", "red", "green", "blue"];
const PRESET_NAMES = new Set(VALID_COLORS);

const HEX_RE = /^#[0-9a-fA-F]{6}$/;

/**
 * Validate a color value. Returns the normalized value if valid, null otherwise.
 * Accepts preset names (e.g. "red") or 6-digit hex codes (e.g. "#ff6b6b").
 */
function validateColor(value) {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim().toLowerCase();
  if (PRESET_NAMES.has(trimmed)) return trimmed;
  if (HEX_RE.test(trimmed)) return trimmed;
  return null;
}

module.exports = { validateColor, VALID_COLORS };
