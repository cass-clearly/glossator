/**
 * Signed token generation/verification for one-click unsubscribe.
 * Uses HMAC-SHA256 with a server secret. Tokens are stateless.
 */

const { createHmac, timingSafeEqual } = require("crypto");

function getSecret() {
  return process.env.SESSION_SECRET || "remarq-default-secret";
}

/**
 * Create an unsubscribe token for an email + document pair.
 * @param {string} email
 * @param {string} documentId
 * @returns {string} base64url-encoded HMAC token
 */
function createUnsubscribeToken(email, documentId) {
  const hmac = createHmac("sha256", getSecret());
  hmac.update(`${email}|${documentId}`);
  return hmac.digest("base64url");
}

/**
 * Verify an unsubscribe token. Uses timing-safe comparison.
 * @param {string} token
 * @param {string} email
 * @param {string} documentId
 * @returns {boolean}
 */
function verifyUnsubscribeToken(token, email, documentId) {
  const expected = createUnsubscribeToken(email, documentId);
  if (token.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

module.exports = { createUnsubscribeToken, verifyUnsubscribeToken };
