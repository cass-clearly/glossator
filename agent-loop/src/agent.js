import { buildPrompt } from "./prompt-builder.js";

/**
 * Create the agent that orchestrates the feedback loop.
 *
 * @param {{ remarqClient, callClaude: (prompt: string) => Promise<string>, agentAuthor: string, log: (level: string, msg: string) => void }} deps
 */
export function createAgent({ remarqClient, callClaude, agentAuthor, log }) {
  return {
    async processComment(comment) {
      const cid = comment.id;

      // Self-loop guard
      if (comment.author === agentAuthor) {
        log("debug", `[${cid}] Skipping self-loop — author is ${agentAuthor}`);
        return;
      }

      // Reply guard
      if (comment.parent) {
        log("debug", `[${cid}] Skipping reply — has parent ${comment.parent}`);
        return;
      }

      // Idempotency guard
      if (comment.status === "closed") {
        log("debug", `[${cid}] Skipping — already closed`);
        return;
      }

      log("info", `[${cid}] Processing comment from ${comment.author}`);

      let openComments;
      try {
        openComments = await remarqClient.getOpenComments(comment.document);
        log("debug", `[${cid}] Fetched ${openComments.length} open comments`);
      } catch (err) {
        log("error", `[${cid}] Failed to fetch comments: ${err.message}`);
        return;
      }

      const prompt = buildPrompt(comment, openComments);

      let response;
      try {
        const start = Date.now();
        log("info", `[${cid}] Calling Claude API`);
        response = await callClaude(prompt);
        log("info", `[${cid}] Claude responded in ${Date.now() - start}ms`);
      } catch (err) {
        log("error", `[${cid}] Claude API failed: ${err.message}`);
        return;
      }

      try {
        const reply = await remarqClient.createComment({
          document: comment.document,
          body: response,
          author: agentAuthor,
          parent: comment.id,
        });
        log("info", `[${cid}] Reply posted: ${reply.id}`);
      } catch (err) {
        log("error", `[${cid}] Failed to post reply: ${err.message}`);
        return;
      }

      try {
        await remarqClient.resolveComment(comment.id);
        log("info", `[${cid}] Comment resolved`);
      } catch (err) {
        log("error", `[${cid}] Failed to resolve comment: ${err.message}`);
      }
    },
  };
}
