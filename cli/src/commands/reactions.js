const { RemarqClient } = require("../client.js");
const { formatReactions } = require("../format.js");

module.exports = {
  command: "reactions <command>",
  describe: "Manage reactions",
  builder(yargs) {
    return yargs
      .command({
        command: "add <comment-id>",
        describe: "Add a reaction to a comment",
        builder: {
          "comment-id": { type: "string", demandOption: true },
          emoji: {
            type: "string",
            demandOption: true,
            describe: "Reaction emoji",
          },
          author: {
            type: "string",
            demandOption: true,
            describe: "Author name",
          },
        },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const { data } = await client.request(
            "POST",
            `/comments/${argv.commentId}/reactions`,
            { body: { emoji: argv.emoji, author: argv.author } }
          );
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatReactions(data));
          }
        },
      })
      .command({
        command: "remove <comment-id>",
        describe: "Remove a reaction from a comment",
        builder: {
          "comment-id": { type: "string", demandOption: true },
          emoji: {
            type: "string",
            demandOption: true,
            describe: "Reaction emoji",
          },
          author: {
            type: "string",
            demandOption: true,
            describe: "Author name",
          },
        },
        async handler(argv) {
          const client = new RemarqClient(argv.url);
          const emoji = encodeURIComponent(argv.emoji);
          const { data } = await client.request(
            "DELETE",
            `/comments/${argv.commentId}/reactions/${emoji}`,
            { query: { author: argv.author } }
          );
          if (argv.json) {
            console.log(JSON.stringify(data, null, 2));
          } else {
            console.log(formatReactions(data));
          }
        },
      })
      .demandCommand(1, "");
  },
  handler() {},
};
