#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { RemarqClient } = require("../../shared/client.js");

export function createTools(client) {
  return {
    check_connection: async () => {
      try {
        await client.request("GET", "/health");
        return {
          content: [
            {
              type: "text",
              text: `Connected to Remarq server at ${client.baseUrl}`,
            },
          ],
        };
      } catch (err) {
        return {
          content: [{ type: "text", text: `Failed to connect: ${err.message}` }],
          isError: true,
        };
      }
    },

    list_comments: async ({ uri, status, include_document } = {}) => {
      try {
        const query = {};
        if (uri) query.uri = uri;
        if (status) query.status = status;
        if (include_document) query.expand = "document";
        const { data } = await client.request("GET", "/comments", { query });
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (err) {
        return {
          content: [{ type: "text", text: `Failed to list comments: ${err.message}` }],
          isError: true,
        };
      }
    },

    create_comment: async ({ uri, quote, body, author, prefix, suffix }) => {
      try {
        const payload = { uri, quote, body, author };
        if (prefix) payload.prefix = prefix;
        if (suffix) payload.suffix = suffix;
        const { data } = await client.request("POST", "/comments", {
          body: payload,
        });
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (err) {
        return {
          content: [{ type: "text", text: `Failed to create comment: ${err.message}` }],
          isError: true,
        };
      }
    },

    reply_to_comment: async ({ comment_id, body, author }) => {
      try {
        const { data } = await client.request("POST", "/comments", {
          body: { parent: comment_id, body, author },
        });
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (err) {
        return {
          content: [{ type: "text", text: `Failed to reply: ${err.message}` }],
          isError: true,
        };
      }
    },

    resolve_comment: async ({ comment_id }) => {
      try {
        const { data } = await client.request("PATCH", `/comments/${comment_id}`, { body: { status: "closed" } });
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      } catch (err) {
        return {
          content: [{ type: "text", text: `Failed to resolve: ${err.message}` }],
          isError: true,
        };
      }
    },
  };
}

export function createServer(baseUrl) {
  const client = new RemarqClient(baseUrl);
  const tools = createTools(client);
  const server = new McpServer({ name: "remarq", version: "2.3.0" });

  server.registerTool(
    "check_connection",
    { description: "Check if the Remarq server is reachable" },
    tools.check_connection,
  );

  server.registerTool(
    "list_comments",
    {
      description: "List comments, optionally filtered by document URI and status",
      inputSchema: {
        uri: z.string().optional().describe("Filter by document URI"),
        status: z.enum(["open", "closed"]).optional().describe("Filter by status"),
        include_document: z.boolean().optional().describe("Include full document object in response"),
      },
    },
    tools.list_comments,
  );

  server.registerTool(
    "create_comment",
    {
      description: "Create a new top-level comment on a document",
      inputSchema: {
        uri: z.string().describe("Document URI to comment on"),
        quote: z.string().describe("The highlighted text being commented on"),
        body: z.string().describe("The comment text"),
        author: z.string().describe("Name of the comment author"),
        prefix: z.string().optional().describe("Text context before the quote"),
        suffix: z.string().optional().describe("Text context after the quote"),
      },
    },
    tools.create_comment,
  );

  server.registerTool(
    "reply_to_comment",
    {
      description: "Reply to an existing comment",
      inputSchema: {
        comment_id: z.string().describe("ID of the comment to reply to"),
        body: z.string().describe("The reply text"),
        author: z.string().describe("Name of the reply author"),
      },
    },
    tools.reply_to_comment,
  );

  server.registerTool(
    "resolve_comment",
    {
      description: "Resolve (close) a comment. Cannot be used on replies — only top-level comments.",
      inputSchema: {
        comment_id: z.string().describe("ID of the comment to resolve"),
      },
    },
    tools.resolve_comment,
  );

  return server;
}

/* c8 ignore start */
const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const baseUrl = process.env.REMARQ_URL || "http://localhost:3333";
  const server = createServer(baseUrl);
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
/* c8 ignore stop */
