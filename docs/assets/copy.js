/**
 * Copy-to-clipboard for code blocks.
 * Named shortcut: inline DOM script extracted for clarity and testability.
 * Automated test deferred until REM-6 demo embed justifies docs-site e2e.
 */
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const pre = btn.closest(".code-block").querySelector("pre");
    if (!pre) return;
    try {
      await navigator.clipboard.writeText(pre.textContent);
      btn.textContent = "Copied!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "Copy";
        btn.classList.remove("copied");
      }, 1500);
    } catch (err) {
      console.warn("Copy failed:", err);
      btn.textContent = "Failed";
      setTimeout(() => {
        btn.textContent = "Copy";
      }, 1500);
    }
  });
});
