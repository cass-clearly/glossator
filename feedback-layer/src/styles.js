/**
 * Centralized style injection for the feedback layer.
 *
 * At build time, the esbuild CSS-text plugin reads feedback-layer.css,
 * minifies it, and inlines the result as a string export. At runtime
 * this module injects that string into a single <style> element.
 */

import css from "./feedback-layer.css";

let _injected = false;

/**
 * Inject all feedback-layer styles into the document head.
 * Safe to call multiple times — only injects once.
 */
export function createInlineStyles() {
  if (_injected) return;
  _injected = true;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
}
