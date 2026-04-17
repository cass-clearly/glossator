/**
 * Runtime-documented contract for the server database adapter.
 * Each method mirrors an existing storage operation so route handlers stay
 * free of SQL while preserving current API behavior.
 *
 * @param {object} adapter
 * @returns {object}
 */
function defineDatabaseAdapter(adapter) {
  return adapter;
}

module.exports = { defineDatabaseAdapter };
