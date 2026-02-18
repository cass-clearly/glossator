/**
 * ID generation using crypto.randomBytes.
 * Produces prefixed IDs like "doc_k3mXp9q2aBvN" and "cmt_8avN3bWlR2xQ".
 */

const { randomBytes } = require('crypto');

/**
 * Generate a prefixed random ID.
 * @param {string} prefix - e.g. "doc" or "cmt"
 * @returns {string}
 */
function generateId(prefix) {
  return `${prefix}_${randomBytes(8).toString('base64url')}`;
}

/**
 * Run insertFn with a generated ID, retrying up to 3 times on unique constraint failures.
 * @param {string} prefix
 * @param {(id: string) => Promise<any>} insertFn
 * @returns {Promise<any>} result of insertFn
 */
async function insertWithId(prefix, insertFn) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await insertFn(generateId(prefix));
    } catch (err) {
      if (err.code === '23505' && attempt < 2) continue;
      throw err;
    }
  }
}

module.exports = { generateId, insertWithId };
