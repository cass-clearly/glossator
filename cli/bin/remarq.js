#!/usr/bin/env node
"use strict";

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { fetchSpec } = require("../src/spec-loader.js");
const { buildCommands } = require("../src/command-builder.js");

/**
 * Extract the base URL from raw argv before yargs parses it.
 * Checks --url / --url=<val> args, then falls back to REMARQ_URL env var.
 */
function extractBaseUrl(argv) {
  const args = hideBin(argv);
  const urlIdx = args.indexOf("--url");
  if (urlIdx !== -1 && args[urlIdx + 1] && !args[urlIdx + 1].startsWith("-")) {
    return args[urlIdx + 1];
  }
  const urlArg = args.find((a) => a.startsWith("--url="));
  if (urlArg) return urlArg.slice(6);
  return process.env.REMARQ_URL || "http://localhost:3333";
}

async function main() {
  const baseUrl = extractBaseUrl(process.argv);

  let spec;
  try {
    spec = await fetchSpec(baseUrl);
  } catch (err) {
    console.error(`Error: Cannot connect to Remarq server at ${baseUrl}`);
    console.error(`       Ensure the server is running and REMARQ_URL is set correctly.`);
    if (process.env.REMARQ_DEBUG) console.error(err);
    process.exitCode = 1;
    return;
  }

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
    ]);

  buildCommands(cli, spec);

  cli
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

  await cli.parseAsync();
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exitCode = 1;
});
