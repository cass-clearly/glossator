"use strict";

const { ALLOWED_REACTION_EMOJIS } = require("./emoji-constants.js");

/**
 * Remarq OpenAPI 3.0 specification.
 *
 * x-cli extensions drive the remarq CLI — every operation that should appear
 * as a CLI command carries an "x-cli" object (or array of objects).
 *
 * x-cli schema per operation:
 *   group        {string|null}  yargs command group ("documents", "comments", …).
 *                               null → registered as a top-level command.
 *   command      {string}       command + optional positional token(s), e.g. "get <id>".
 *   describe     {string}       overrides the operation summary in --help output.
 *   positional   {Array}        positional argument definitions (in order):
 *     name         {string}   CLI arg name (hyphenated ok, yargs camelCases it)
 *     describe     {string}   help text
 *     from         {string}   "path" | "body"
 *     paramName    {string}   path param name in the URL template (when from="path")
 *     field        {string}   body field name (when from="body", defaults to name)
 *   options      {Object}       named option definitions (keyed by option name):
 *     type         {string}   "string" | "boolean"
 *     describe     {string}   help text
 *     demandOption {boolean}  required option?
 *     choices      {Array}    allowed values
 *     from         {string}   "query" | "body" | "path"
 *     paramName    {string}   path param name (when from="path")
 *     field        {string}   body/query field name (defaults to option name)
 *   fixedBody    {Object}       body fields hardcoded for this command (e.g. {status:"closed"})
 */

const documentSchema = {
  type: "object",
  properties: {
    id: { type: "string", example: "doc_abc123" },
    object: { type: "string", enum: ["document"] },
    uri: { type: "string", example: "https://example.com/page.html" },
    created_at: { type: "string", format: "date-time" },
  },
};

const commentSchema = {
  type: "object",
  properties: {
    id: { type: "string", example: "cmt_abc123" },
    object: { type: "string", enum: ["comment"] },
    document: { type: "string", example: "doc_abc123" },
    quote: { type: "string", nullable: true },
    prefix: { type: "string", nullable: true },
    suffix: { type: "string", nullable: true },
    body: { type: "string" },
    author: { type: "string" },
    status: { type: "string", enum: ["open", "closed"], nullable: true },
    parent: { type: "string", nullable: true },
    color: { type: "string", nullable: true, description: "Preset name or #rrggbb hex" },
    reactions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          emoji: { type: "string" },
          count: { type: "integer" },
          authors: { type: "array", items: { type: "string" } },
        },
      },
    },
    created_at: { type: "string", format: "date-time" },
  },
};

const reactionsResponseSchema = {
  type: "object",
  properties: {
    comment_id: { type: "string" },
    reactions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          emoji: { type: "string" },
          count: { type: "integer" },
          authors: { type: "array", items: { type: "string" } },
        },
      },
    },
  },
};

const errorSchema = {
  type: "object",
  properties: {
    error: {
      type: "object",
      properties: {
        message: { type: "string" },
      },
    },
  },
};

const listResponse = (itemSchema) => ({
  type: "object",
  properties: {
    object: { type: "string", enum: ["list"] },
    data: { type: "array", items: itemSchema },
  },
});

const jsonContent = (schema) => ({
  "application/json": { schema },
});

const spec = {
  openapi: "3.0.3",
  info: {
    title: "Remarq API",
    version: "2.0.1",
    description:
      "Lightweight document annotation API for the agent era. " +
      "Drop a `<script>` tag into any HTML page — reviewers highlight text and " +
      "leave threaded comments. AI agents then poll this API, revise the document, " +
      "and resolve comments automatically.\n\n" +
      "The CLI is spec-driven: it fetches `/openapi.json` on startup and auto-generates " +
      "commands from the `x-cli` extensions embedded in each operation.",
    contact: { url: "https://github.com/cass-clearly/remarq" },
    license: { name: "AGPL-3.0" },
  },
  servers: [{ url: "/" }],

  paths: {
    // ── Health ──────────────────────────────────────────────────────

    "/health": {
      get: {
        operationId: "getHealth",
        summary: "Check API health",
        tags: ["health"],
        "x-cli": {
          group: null,
          command: "health",
          describe: "Check API health",
        },
        responses: {
          200: {
            description: "Server is healthy",
            content: jsonContent({
              type: "object",
              properties: { status: { type: "string", example: "ok" } },
            }),
          },
        },
      },
    },

    // ── Documents ───────────────────────────────────────────────────

    "/documents": {
      get: {
        operationId: "listDocuments",
        summary: "List all documents",
        tags: ["documents"],
        "x-cli": {
          group: "documents",
          command: "list",
          describe: "List all documents",
        },
        responses: {
          200: {
            description: "List of documents",
            content: jsonContent(listResponse(documentSchema)),
          },
        },
      },

      post: {
        operationId: "createDocument",
        summary: "Create or find a document by URI",
        tags: ["documents"],
        "x-cli": {
          group: "documents",
          command: "create <uri>",
          describe: "Create a document for a URI",
          positional: [{ name: "uri", describe: "Document URI", from: "body", field: "uri" }],
        },
        requestBody: {
          required: true,
          content: jsonContent({
            type: "object",
            required: ["uri"],
            properties: { uri: { type: "string" } },
          }),
        },
        responses: {
          200: {
            description: "Document already existed",
            content: jsonContent(documentSchema),
          },
          201: {
            description: "Document created",
            content: jsonContent(documentSchema),
          },
          400: { description: "Bad request", content: jsonContent(errorSchema) },
        },
      },
    },

    "/documents/{id}": {
      get: {
        operationId: "getDocument",
        summary: "Retrieve a document",
        tags: ["documents"],
        "x-cli": {
          group: "documents",
          command: "get <id>",
          describe: "Get a document by ID",
          positional: [{ name: "id", describe: "Document ID", from: "path", paramName: "id" }],
        },
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Document", content: jsonContent(documentSchema) },
          404: { description: "Not found", content: jsonContent(errorSchema) },
        },
      },

      delete: {
        operationId: "deleteDocument",
        summary: "Delete a document and its comments",
        tags: ["documents"],
        "x-cli": {
          group: "documents",
          command: "delete <id>",
          describe: "Delete a document by ID",
          positional: [{ name: "id", describe: "Document ID", from: "path", paramName: "id" }],
        },
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Deleted document", content: jsonContent(documentSchema) },
          404: { description: "Not found", content: jsonContent(errorSchema) },
        },
      },
    },

    // ── Comments ────────────────────────────────────────────────────

    "/comments": {
      get: {
        operationId: "listComments",
        summary: "List comments",
        tags: ["comments"],
        "x-cli": {
          group: "comments",
          command: "list",
          describe: "List comments",
          options: {
            document: { type: "string", describe: "Filter by document ID", from: "query" },
            uri: { type: "string", describe: "Filter by document URI", from: "query" },
            status: {
              type: "string",
              describe: "Filter by status",
              choices: ["open", "closed"],
              from: "query",
            },
          },
        },
        parameters: [
          { name: "document", in: "query", schema: { type: "string" } },
          { name: "uri", in: "query", schema: { type: "string" } },
          { name: "status", in: "query", schema: { type: "string", enum: ["open", "closed"] } },
          { name: "expand", in: "query", schema: { type: "string", enum: ["document"] } },
        ],
        responses: {
          200: {
            description: "List of comments",
            content: jsonContent(listResponse(commentSchema)),
          },
          400: { description: "Bad request", content: jsonContent(errorSchema) },
        },
      },

      post: {
        operationId: "createComment",
        summary: "Create a comment or reply",
        tags: ["comments"],
        "x-cli": [
          {
            group: "comments",
            command: "create",
            describe: "Create a new comment",
            options: {
              uri: { type: "string", demandOption: true, describe: "Document URI", from: "body" },
              quote: { type: "string", demandOption: true, describe: "Quoted text", from: "body" },
              author: { type: "string", demandOption: true, describe: "Author name", from: "body" },
              body: { type: "string", demandOption: true, describe: "Comment body", from: "body" },
              color: { type: "string", describe: "Highlight color", from: "body" },
            },
          },
          {
            group: "comments",
            command: "reply <parent-id>",
            describe: "Reply to a comment",
            positional: [
              {
                name: "parent-id",
                describe: "Parent comment ID",
                from: "body",
                field: "parent",
              },
            ],
            options: {
              author: { type: "string", demandOption: true, describe: "Author name", from: "body" },
              body: { type: "string", demandOption: true, describe: "Reply body", from: "body" },
            },
          },
        ],
        requestBody: {
          required: true,
          content: jsonContent({
            type: "object",
            properties: {
              uri: { type: "string", description: "Document URI (or use document)" },
              document: { type: "string", description: "Document ID (or use uri)" },
              quote: { type: "string", description: "Highlighted text" },
              prefix: { type: "string" },
              suffix: { type: "string" },
              body: { type: "string" },
              author: { type: "string" },
              parent: { type: "string", description: "Parent comment ID (for replies)" },
              color: { type: "string", description: "Preset name or #rrggbb hex" },
            },
          }),
        },
        responses: {
          201: { description: "Comment created", content: jsonContent(commentSchema) },
          400: { description: "Bad request", content: jsonContent(errorSchema) },
          404: { description: "Document not found", content: jsonContent(errorSchema) },
        },
      },
    },

    "/comments/{id}": {
      get: {
        operationId: "getComment",
        summary: "Retrieve a comment",
        tags: ["comments"],
        "x-cli": {
          group: "comments",
          command: "get <id>",
          describe: "Get a comment by ID",
          positional: [{ name: "id", describe: "Comment ID", from: "path", paramName: "id" }],
        },
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
          { name: "expand", in: "query", schema: { type: "string", enum: ["document"] } },
        ],
        responses: {
          200: { description: "Comment", content: jsonContent(commentSchema) },
          404: { description: "Not found", content: jsonContent(errorSchema) },
        },
      },

      patch: {
        operationId: "updateComment",
        summary: "Update a comment's body, status, or color",
        tags: ["comments"],
        "x-cli": [
          {
            group: "comments",
            command: "update <id>",
            describe: "Update a comment",
            positional: [{ name: "id", describe: "Comment ID", from: "path", paramName: "id" }],
            options: {
              body: { type: "string", describe: "New comment body", from: "body" },
              status: {
                type: "string",
                describe: "New status",
                choices: ["open", "closed"],
                from: "body",
              },
              color: { type: "string", describe: "Highlight color", from: "body" },
            },
          },
          {
            group: "comments",
            command: "resolve <id>",
            describe: "Resolve (close) a comment",
            positional: [{ name: "id", describe: "Comment ID", from: "path", paramName: "id" }],
            fixedBody: { status: "closed" },
          },
          {
            group: "comments",
            command: "reopen <id>",
            describe: "Reopen a resolved comment",
            positional: [{ name: "id", describe: "Comment ID", from: "path", paramName: "id" }],
            fixedBody: { status: "open" },
          },
        ],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          content: jsonContent({
            type: "object",
            properties: {
              body: { type: "string" },
              status: { type: "string", enum: ["open", "closed"] },
              color: { type: "string", nullable: true },
            },
          }),
        },
        responses: {
          200: { description: "Updated comment", content: jsonContent(commentSchema) },
          400: { description: "Bad request", content: jsonContent(errorSchema) },
          404: { description: "Not found", content: jsonContent(errorSchema) },
        },
      },

      delete: {
        operationId: "deleteComment",
        summary: "Soft-delete a comment and its replies",
        description:
          "Marks a comment thread as deleted. Soft-deleted comments are hidden from read/list/mutation paths and remain recoverable in the database until the configured purge window expires.",
        tags: ["comments"],
        "x-cli": {
          group: "comments",
          command: "delete <id>",
          describe: "Soft-delete a comment",
          positional: [{ name: "id", describe: "Comment ID", from: "path", paramName: "id" }],
        },
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Deleted comment", content: jsonContent(commentSchema) },
          404: { description: "Not found", content: jsonContent(errorSchema) },
        },
      },
    },

    // ── Reactions ───────────────────────────────────────────────────

    "/comments/{id}/reactions": {
      post: {
        operationId: "addReaction",
        summary: "Add a reaction to a comment",
        tags: ["reactions"],
        "x-cli": {
          group: "reactions",
          command: "add <comment-id>",
          describe: "Add a reaction to a comment",
          positional: [{ name: "comment-id", describe: "Comment ID", from: "path", paramName: "id" }],
          options: {
            emoji: {
              type: "string",
              demandOption: true,
              describe: "Reaction emoji",
              choices: ALLOWED_REACTION_EMOJIS,
              from: "body",
            },
            author: { type: "string", demandOption: true, describe: "Author name", from: "body" },
          },
        },
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: jsonContent({
            type: "object",
            required: ["emoji", "author"],
            properties: {
              emoji: { type: "string", enum: ALLOWED_REACTION_EMOJIS },
              author: { type: "string" },
            },
          }),
        },
        responses: {
          201: { description: "Reaction added", content: jsonContent(reactionsResponseSchema) },
          400: { description: "Bad request", content: jsonContent(errorSchema) },
          404: { description: "Comment not found", content: jsonContent(errorSchema) },
        },
      },
    },

    "/comments/{id}/reactions/{emoji}": {
      delete: {
        operationId: "removeReaction",
        summary: "Remove a reaction from a comment",
        tags: ["reactions"],
        "x-cli": {
          group: "reactions",
          command: "remove <comment-id>",
          describe: "Remove a reaction from a comment",
          positional: [{ name: "comment-id", describe: "Comment ID", from: "path", paramName: "id" }],
          options: {
            emoji: {
              type: "string",
              demandOption: true,
              describe: "Reaction emoji",
              from: "path",
              paramName: "emoji",
            },
            author: {
              type: "string",
              demandOption: true,
              describe: "Author name",
              from: "query",
            },
          },
        },
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
          { name: "emoji", in: "path", required: true, schema: { type: "string" } },
          { name: "author", in: "query", required: true, schema: { type: "string" } },
        ],
        responses: {
          200: { description: "Reaction removed", content: jsonContent(reactionsResponseSchema) },
          400: { description: "Bad request", content: jsonContent(errorSchema) },
          404: { description: "Comment not found", content: jsonContent(errorSchema) },
        },
      },
    },
  },

  tags: [
    { name: "health", description: "Server health" },
    { name: "documents", description: "Document management" },
    { name: "comments", description: "Comment and reply management" },
    { name: "reactions", description: "Emoji reactions on comments" },
  ],
};

module.exports = spec;
