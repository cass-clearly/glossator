#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const cli = yargs(hideBin(process.argv))
  .scriptName("remarq")
  .usage("$0 <command> [options]")
  .option("url", {
    type: "string",
    describe: "Remarq API base URL",
    global: true,
  })
  .option("json", {
    type: "boolean",
    default: false,
    describe: "Output raw JSON",
    global: true,
  })
  .middleware([
    (argv) => {
      argv.url = argv.url || process.env.REMARQ_URL || "http://localhost:3333";
    },
  ])
  .command(require("../src/commands/health"))
  .command(require("../src/commands/documents"))
  .command(require("../src/commands/comments"))
  .command(require("../src/commands/reactions"))
  .demandCommand(1, "")
  .strict()
  .help()
  .fail((msg, err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
    } else if (msg) {
      console.error(msg);
    }
    process.exitCode = 1;
  });

cli.parseAsync().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exitCode = 1;
});
