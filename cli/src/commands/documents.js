const { RemarqClient } = require("../client.js");
const { formatDocument, formatDocumentList } = require("../format.js");

module.exports = {
  command: "documents <command>",
  describe: "Manage documents",
  builder(yargs) {
    return yargs
      .command({
        command: "list",
        describe: "List all documents",
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request("GET", "/documents");
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatDocumentList(data));
          }
        },
      })
      .command({
        command: "create <uri>",
        describe: "Create a document for a URI",
        builder: { uri: { type: "string", demandOption: true } },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request("POST", "/documents", {
            body: { uri: argv.uri },
          });
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatDocument(data));
          }
        },
      })
      .command({
        command: "get <id>",
        describe: "Get a document by ID",
        builder: { id: { type: "string", demandOption: true } },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request("GET", `/documents/${argv.id}`);
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatDocument(data));
          }
        },
      })
      .command({
        command: "delete <id>",
        describe: "Delete a document by ID",
        builder: { id: { type: "string", demandOption: true } },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request(
            "DELETE",
            `/documents/${argv.id}`
          );
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(`Deleted document ${data.id}`);
          }
        },
      })
      .demandCommand(1, "");
  },
  handler() {},
};
