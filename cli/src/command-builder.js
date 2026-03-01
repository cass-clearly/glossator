"use strict";

const { RemarqClient } = require("./client.js");
const { genericFormat } = require("./format.js");

/**
 * Convert a hyphenated arg name to camelCase (matches yargs' auto-conversion).
 * e.g. "parent-id" → "parentId", "comment-id" → "commentId"
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
}

/**
 * Build the resolved URL path by substituting path parameters.
 *
 * Positional args with from="path" are substituted from argv by name.
 * Options with from="path" are substituted from argv by option name.
 */
function resolvePath(pathTemplate, positional, options, argv) {
  let resolved = pathTemplate;

  for (const arg of positional) {
    if (arg.from === "path") {
      const val = argv[toCamelCase(arg.name)] ?? argv[arg.name];
      resolved = resolved.replace(`{${arg.paramName}}`, encodeURIComponent(val));
    }
  }

  for (const [name, opt] of Object.entries(options)) {
    if (opt.from === "path") {
      const val = argv[toCamelCase(name)] ?? argv[name];
      resolved = resolved.replace(`{${opt.paramName}}`, encodeURIComponent(val));
    }
  }

  return resolved;
}

/**
 * Build a yargs command config object from an x-cli operation definition.
 */
function buildSingleCommand({ path, method, cliDef }) {
  const positional = cliDef.positional || [];
  const options    = cliDef.options    || {};
  const fixedBody  = cliDef.fixedBody  || {};

  return {
    command:  cliDef.command,
    describe: cliDef.describe || "",

    builder(yargs) {
      // Register positional arg descriptions
      for (const arg of positional) {
        const yargsName = toCamelCase(arg.name);
        yargs.positional(yargsName, {
          type:     "string",
          describe: arg.describe || "",
        });
      }

      // Register named options
      for (const [name, opt] of Object.entries(options)) {
        const def = {
          type:     opt.type || "string",
          describe: opt.describe || "",
        };
        if (opt.demandOption) def.demandOption = true;
        if (opt.choices)      def.choices      = opt.choices;
        yargs.option(name, def);
      }

      return yargs;
    },

    async handler(argv) {
      const client       = new RemarqClient(argv.url);
      const resolvedPath = resolvePath(path, positional, options, argv);

      // Collect query params
      const query = {};
      for (const [name, opt] of Object.entries(options)) {
        if (opt.from === "query" && argv[name] != null) {
          query[opt.field || name] = argv[name];
        }
      }

      // Collect body fields
      const body = { ...fixedBody };

      for (const arg of positional) {
        if (arg.from === "body") {
          const val = argv[toCamelCase(arg.name)] ?? argv[arg.name];
          if (val != null) body[arg.field || arg.name] = val;
        }
      }

      for (const [name, opt] of Object.entries(options)) {
        if (opt.from === "body" && argv[name] != null) {
          body[opt.field || name] = argv[name];
        }
      }

      const reqOpts = {};
      if (Object.keys(query).length > 0) reqOpts.query = query;
      if (Object.keys(body).length  > 0) reqOpts.body  = body;

      const { data } = await client.request(method.toUpperCase(), resolvedPath, reqOpts);

      if (argv.json) {
        console.log(JSON.stringify(data, null, 2));
      } else {
        console.log(genericFormat(data));
      }
    },
  };
}

/**
 * Build a yargs grouped command (e.g. "documents <command>") containing
 * all operations that belong to that group.
 */
function buildGroupCommand(groupName, ops) {
  return {
    command:  `${groupName} <command>`,
    describe: `Manage ${groupName}`,

    builder(yargs) {
      for (const op of ops) {
        yargs.command(buildSingleCommand(op));
      }
      return yargs.demandCommand(1, "");
    },

    handler() {},
  };
}

/**
 * Register all spec-driven commands on a yargs instance.
 *
 * Operations are grouped by x-cli.group.  Operations with group=null
 * are registered as top-level commands.
 */
function buildCommands(yargsInstance, spec) {
  const groups   = {}; // groupName → Array<op>
  const topLevel = []; // ops with no group

  for (const [pathTemplate, pathItem] of Object.entries(spec.paths || {})) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!["get", "post", "put", "patch", "delete"].includes(method)) continue;

      const xCli = operation["x-cli"];
      if (!xCli) continue;

      const cliDefs = Array.isArray(xCli) ? xCli : [xCli];

      for (const cliDef of cliDefs) {
        const op = { path: pathTemplate, method, operation, cliDef };
        if (!cliDef.group) {
          topLevel.push(op);
        } else {
          if (!groups[cliDef.group]) groups[cliDef.group] = [];
          groups[cliDef.group].push(op);
        }
      }
    }
  }

  for (const op of topLevel) {
    yargsInstance.command(buildSingleCommand(op));
  }

  for (const [groupName, ops] of Object.entries(groups)) {
    yargsInstance.command(buildGroupCommand(groupName, ops));
  }
}

module.exports = { buildCommands, buildSingleCommand, buildGroupCommand, toCamelCase, resolvePath };
