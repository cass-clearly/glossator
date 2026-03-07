/**
 * AI revision UI: "Send Feedback to Claude" modal.
 * Triggered from the sidebar's AI button.
 */

import { buildPrompt } from "./prompt-builder.js";
import { escapeHtml } from "./utils/escape-html.js";
import { createInlineStyles } from "./styles.js";

let _getComments = null;
let _config = null;

/**
 * Initialize the AI revision UI.
 *
 * @param {Object} config
 * @param {Function} getComments - Returns the current comment list
 */
export function initAuthorUI(config, getComments) {
  _config = config;
  _getComments = getComments;

  createInlineStyles();
}

export function openModal() {
  const comments = _getComments();

  const overlay = document.createElement("div");
  overlay.className = "hf-overlay";

  const modal = document.createElement("div");
  modal.className = "hf-modal";

  // Header
  const header = document.createElement("div");
  header.className = "hf-modal-header";
  header.innerHTML = `<h2>Send Feedback to Claude</h2>`;
  const closeBtn = document.createElement("button");
  closeBtn.className = "hf-modal-close";
  closeBtn.textContent = "\u00d7";
  closeBtn.addEventListener("click", () => overlay.remove());
  header.appendChild(closeBtn);

  // Body
  const body = document.createElement("div");
  body.className = "hf-modal-body";

  // Footer
  const footer = document.createElement("div");
  footer.className = "hf-modal-footer";

  modal.append(header, body, footer);
  overlay.appendChild(modal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.body.appendChild(overlay);

  if (comments.length === 0) {
    body.innerHTML = `<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>`;
    return;
  }

  const docHtml = document.querySelector(_config.contentSelector || "body").innerHTML;

  const prompt = buildPrompt(docHtml, comments);

  body.innerHTML = `
    <div class="hf-status hf-status-success">
      ${comments.length} comment(s) found &mdash; prompt ready (${prompt.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${escapeHtml(prompt)}</textarea>
  `;

  // Copy button
  const copyBtn = document.createElement("button");
  copyBtn.className = "hf-btn hf-btn-primary";
  copyBtn.textContent = "Copy Prompt";
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      copyBtn.textContent = "Copied!";
    } catch {
      copyBtn.textContent = "Copy failed";
    }
    setTimeout(() => (copyBtn.textContent = "Copy Prompt"), 2000);
  });
  footer.appendChild(copyBtn);

  const closeBtn2 = document.createElement("button");
  closeBtn2.className = "hf-btn hf-btn-secondary";
  closeBtn2.textContent = "Close";
  closeBtn2.addEventListener("click", () => overlay.remove());
  footer.appendChild(closeBtn2);
}
