/**
 * CI Watcher Extension
 *
 * Polls GitHub Actions check status after git pushes. When CI fails,
 * injects a message to the agent with failure details so it can respond
 * with fixes automatically.
 *
 * - Starts polling when a `git push` is detected in bash tool output
 * - Polls every 15s until all checks complete
 * - On failure: fetches failed run logs and sends them to the agent
 * - On success: shows a status notification (no agent interruption)
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { isBashToolResult } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  let polling = false;

  pi.on("tool_result", async (event, ctx) => {
    if (!isBashToolResult(event)) return;

    const output = event.content
      ?.filter((c) => c.type === "text")
      .map((c) => c.text)
      .join("\n");

    if (!output) return;

    // Detect git push (including force push)
    const isPush =
      /\[new branch\]|[a-f0-9]+\.\.[a-f0-9]+/.test(output) &&
      /->/.test(output);

    if (!isPush || polling) return;

    polling = true;
    if (ctx.hasUI) {
      const theme = ctx.ui.theme;
      ctx.ui.setStatus(
        "ci-watcher",
        theme.fg("accent", "●") + theme.fg("dim", " CI running...")
      );
    }

    pollChecks(pi, ctx);
  });

  async function pollChecks(
    pi: ExtensionAPI,
    ctx: import("@mariozechner/pi-coding-agent").ExtensionContext
  ) {
    const POLL_INTERVAL = 15_000;
    const MAX_POLLS = 40; // 10 minutes max

    for (let i = 0; i < MAX_POLLS; i++) {
      await sleep(POLL_INTERVAL);

      try {
        const result = await pi.exec("gh", [
          "pr",
          "checks",
          "--json",
          "name,state,conclusion",
        ]);

        if (result.code !== 0) {
          // No PR on this branch, or gh error — stop polling
          cleanup(ctx);
          return;
        }

        const checks = JSON.parse(result.stdout);
        if (!checks.length) continue;

        const pending = checks.filter(
          (c: any) =>
            c.state === "PENDING" ||
            c.state === "QUEUED" ||
            c.state === "IN_PROGRESS"
        );
        const failed = checks.filter(
          (c: any) => c.state === "COMPLETED" && c.conclusion === "FAILURE"
        );

        if (pending.length > 0) {
          // Still running
          if (ctx.hasUI) {
            const theme = ctx.ui.theme;
            ctx.ui.setStatus(
              "ci-watcher",
              theme.fg("accent", "●") +
                theme.fg("dim", ` CI: ${pending.length} pending...`)
            );
          }
          continue;
        }

        // All checks complete
        if (failed.length > 0) {
          await handleFailure(pi, ctx, failed);
        } else {
          if (ctx.hasUI) {
            const theme = ctx.ui.theme;
            ctx.ui.setStatus(
              "ci-watcher",
              theme.fg("success", "✓") + theme.fg("dim", " CI passed")
            );
            setTimeout(() => ctx.ui.setStatus("ci-watcher", undefined), 10_000);
          }
        }

        cleanup(ctx);
        return;
      } catch {
        // gh CLI error, keep trying
      }
    }

    // Timed out
    cleanup(ctx);
  }

  async function handleFailure(
    pi: ExtensionAPI,
    ctx: import("@mariozechner/pi-coding-agent").ExtensionContext,
    failed: any[]
  ) {
    if (ctx.hasUI) {
      const theme = ctx.ui.theme;
      ctx.ui.setStatus(
        "ci-watcher",
        theme.fg("error", "✗") +
          theme.fg("dim", ` CI failed: ${failed.map((f: any) => f.name).join(", ")}`)
      );
    }

    // Fetch failed run logs
    let logOutput = "";
    try {
      const runsResult = await pi.exec("gh", [
        "run",
        "list",
        "--branch",
        "HEAD",
        "--status",
        "failure",
        "--limit",
        "1",
        "--json",
        "databaseId",
      ]);

      if (runsResult.code === 0) {
        const runs = JSON.parse(runsResult.stdout);
        if (runs.length > 0) {
          const logResult = await pi.exec("gh", [
            "run",
            "view",
            String(runs[0].databaseId),
            "--log-failed",
          ]);
          if (logResult.code === 0) {
            // Truncate to last 80 lines to keep context reasonable
            const lines = logResult.stdout.split("\n");
            logOutput = lines.slice(-80).join("\n");
          }
        }
      }
    } catch {
      // Best effort — send what we have
    }

    const failNames = failed.map((f: any) => f.name).join(", ");
    let message = `🚨 **CI failed** on checks: ${failNames}\n\nPlease investigate and fix the failure.`;
    if (logOutput) {
      message += `\n\nFailed run logs (last 80 lines):\n\`\`\`\n${logOutput}\n\`\`\``;
    }

    pi.sendUserMessage(message, { deliverAs: "followUp" });
  }

  function cleanup(
    ctx: import("@mariozechner/pi-coding-agent").ExtensionContext
  ) {
    polling = false;
  }

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
