const { createPostgresAdapter } = require("./postgres-adapter.js");

function createDatabaseAdapter(options = {}) {
  return createPostgresAdapter(options);
}

module.exports = { createDatabaseAdapter };
