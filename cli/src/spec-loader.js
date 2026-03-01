"use strict";

const { RemarqClient } = require("./client.js");

/**
 * Fetch the OpenAPI spec from the Remarq server.
 * Throws if the server is unreachable or returns a non-spec response.
 */
async function fetchSpec(baseUrl) {
  const client = new RemarqClient(baseUrl);
  const { data } = await client.request("GET", "/openapi.json");

  if (!data || typeof data !== "object" || !data.openapi || !data.paths) {
    throw new Error("Invalid OpenAPI spec received from server");
  }

  return data;
}

module.exports = { fetchSpec };
