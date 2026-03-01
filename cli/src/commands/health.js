const { RemarqClient } = require("../client.js");
const { formatHealth } = require("../format.js");

async function handler(argv) {
  const client = new RemarqClient(argv.url);
  const { data } = await client.request("GET", "/health");
  if (argv.json) {
    console.log(JSON.stringify(data, null, 2));
  } else {
    console.log(formatHealth(data));
  }
}

module.exports = {
  command: "health",
  describe: "Check API health",
  handler,
};
