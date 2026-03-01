const { RemarqClient } = require("../client.js");
const { formatComment, formatCommentList } = require("../format.js");

module.exports = {
  command: "comments <command>",
  describe: "Manage comments",
  builder(yargs) {
    return yargs
      .command({
        command: "list",
        describe: "List comments",
        builder: {
          document: { type: "string", describe: "Filter by document ID" },
          uri: { type: "string", describe: "Filter by document URI" },
          status: {
            type: "string",
            describe: "Filter by status",
            choices: ["open", "closed"],
          },
        },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const query = {};
          if (argv.document) query.document = argv.document;
          if (argv.uri) query.uri = argv.uri;
          if (argv.status) query.status = argv.status;
          const { data } = await client.request("GET", "/comments", { query });
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatCommentList(data));
          }
        },
      })
      .command({
        command: "get <id>",
        describe: "Get a comment by ID",
        builder: { id: { type: "string", demandOption: true } },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request(
            "GET",
            `/comments/${argv.id}`
          );
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatComment(data));
          }
        },
      })
      .command({
        command: "create",
        describe: "Create a new comment",
        builder: {
          uri: { type: "string", demandOption: true, describe: "Document URI" },
          quote: {
            type: "string",
            demandOption: true,
            describe: "Quoted text",
          },
          author: {
            type: "string",
            demandOption: true,
            describe: "Author name",
          },
          body: {
            type: "string",
            demandOption: true,
            describe: "Comment body",
          },
          color: { type: "string", describe: "Highlight color" },
        },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const payload = {
            uri: argv.uri,
            quote: argv.quote,
            author: argv.author,
            body: argv.body,
          };
          if (argv.color) payload.color = argv.color;
          const { data } = await client.request("POST", "/comments", {
            body: payload,
          });
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatComment(data));
          }
        },
      })
      .command({
        command: "reply <parent-id>",
        describe: "Reply to a comment",
        builder: {
          "parent-id": { type: "string", demandOption: true },
          author: {
            type: "string",
            demandOption: true,
            describe: "Author name",
          },
          body: {
            type: "string",
            demandOption: true,
            describe: "Reply body",
          },
        },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request("POST", "/comments", {
            body: {
              parent: argv.parentId,
              author: argv.author,
              body: argv.body,
            },
          });
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatComment(data));
          }
        },
      })
      .command({
        command: "resolve <id>",
        describe: "Resolve (close) a comment",
        builder: { id: { type: "string", demandOption: true } },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request(
            "PATCH",
            `/comments/${argv.id}`,
            { body: { status: "closed" } }
          );
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(`Resolved comment ${data.id}`);
          }
        },
      })
      .command({
        command: "reopen <id>",
        describe: "Reopen a resolved comment",
        builder: { id: { type: "string", demandOption: true } },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request(
            "PATCH",
            `/comments/${argv.id}`,
            { body: { status: "open" } }
          );
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(`Reopened comment ${data.id}`);
          }
        },
      })
      .command({
        command: "update <id>",
        describe: "Update a comment body",
        builder: {
          id: { type: "string", demandOption: true },
          body: {
            type: "string",
            demandOption: true,
            describe: "New comment body",
          },
        },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request(
            "PATCH",
            `/comments/${argv.id}`,
            { body: { body: argv.body } }
          );
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatComment(data));
          }
        },
      })
      .command({
        command: "delete <id>",
        describe: "Delete a comment",
        builder: { id: { type: "string", demandOption: true } },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request(
            "DELETE",
            `/comments/${argv.id}`
          );
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(`Deleted comment ${data.id}`);
          }
        },
      })
      .demandCommand(1, "");
  },
  handler() {},
};
