/**
 * Sidebar UI: name input, comment list, comment form.
 */

import { setActiveHighlight, scrollToHighlight } from "./highlights.js";
import { openModal } from "./ui.js";
import { createInlineStyles } from "./styles.js";
import { escapeHtml } from "./utils/escape-html.js";
import { renderMarkdown } from "./utils/markdown.js";
import { threadComments } from "./utils/thread-comments.js";
import { truncate } from "./utils/truncate.js";
import { timeAgo } from "./utils/time-ago.js";
import { initToastContainer } from "./toast.js";
import { wrapIndex } from "./utils/keyboard-nav.js";
import { COLOR_PRESETS, DEFAULT_COLOR, resolveColor } from "./utils/color.js";
import { canCreateComment, canDeleteComment, canEditComment, canResolveComment } from "./utils/permissions.js";

/**
 * Scroll an element into view within the sidebar without affecting main page scroll.
 * Uses the sidebar's scrollable container instead of the native scrollIntoView,
 * which can move the main page on some browsers.
 */
function sidebarScrollTo(el) {
  const scrollParent = el.closest(".fb-sidebar-content") || el.closest(".fb-sidebar") || el.parentElement;
  if (!scrollParent || scrollParent.scrollHeight <= scrollParent.clientHeight) return;
  const elRect = el.getBoundingClientRect();
  const parentRect = scrollParent.getBoundingClientRect();
  const elTop = elRect.top - parentRect.top + scrollParent.scrollTop;
  const elBottom = elTop + el.offsetHeight;
  const viewTop = scrollParent.scrollTop;
  const viewBottom = viewTop + scrollParent.clientHeight;
  if (elTop < viewTop) {
    scrollParent.scrollTo({ top: elTop, behavior: "smooth" });
  } else if (elBottom > viewBottom) {
    scrollParent.scrollTo({ top: elBottom - scrollParent.clientHeight, behavior: "smooth" });
  }
}

const COMMENTER_KEY = "feedback-layer-commenter";

let _sidebar = null;
let _listEl = null;
let _formEl = null;
let _pendingQuote = null; // eslint-disable-line no-unused-vars -- tracked for future quote display
let _onSubmit = null;
let _onDelete = null;
let _onResolve = null;
let _onReply = null;
let _onEdit = null;
let _onReaction = null;
let _onColorChange = null; // eslint-disable-line no-unused-vars -- tracked for future color picker callback
let _defaultColor = null;
let _showResolved = false;
let _lastComments = [];
let _lastAnchoredIds = new Set();
let _activeThreadIndex = -1;
let _keydownHandler = null;
let _stylesInjected = false;
let _permissions = null;

/**
 * Inject CSS styles eagerly (before sidebar DOM is created).
 * Safe to call multiple times — only injects once.
 */
export function ensureStyles() {
  if (_stylesInjected) return;
  _stylesInjected = true;
  injectStyles();
}

export function getCommenter() {
  return localStorage.getItem(COMMENTER_KEY) || "";
}

/**
 * Create and inject the sidebar into the page.
 *
 * @param {Object} opts
 * @param {Function} opts.onSubmit - Called with {comment, commenter} when form submitted
 * @param {Function} opts.onDelete - Called with commentId when delete clicked
 * @param {Function} opts.onResolve - Called with (commentId, resolved) when resolve toggled
 * @param {Function} opts.onReply - Called with {parent_id, comment, commenter} when reply submitted
 * @param {Function} opts.onEdit - Called with (commentId, comment) when edit saved
 * @param {Function} opts.onReaction - Called with (commentId, emoji) when reaction toggled
 */
export function createSidebar({
  permissions = null,
  onSubmit,
  onDelete,
  onResolve,
  onReply,
  onEdit,
  onReaction,
  onColorChange,
  defaultColor,
}) {
  _permissions = permissions;
  _onSubmit = onSubmit;
  _onDelete = onDelete;
  _onResolve = onResolve;
  _onReply = onReply;
  _onEdit = onEdit;
  _onReaction = onReaction;
  _onColorChange = onColorChange;
  _defaultColor = defaultColor || null;

  ensureStyles();

  _sidebar = document.createElement("div");
  _sidebar.className = "fb-sidebar fb-sidebar-collapsed";
  _sidebar.setAttribute("role", "complementary");
  _sidebar.setAttribute("aria-label", "Feedback sidebar");
  _sidebar.innerHTML = `
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <button class="fb-ai-btn" title="Send feedback to Claude">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </button>
        <button class="fb-shortcuts-btn" title="Keyboard shortcuts (?)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8"/></svg>
        </button>
        <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
      </div>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${escapeHtml(getCommenter())}">
      </div>
      <div class="fb-filter-section">
        <label class="fb-filter-toggle">
          <input type="checkbox" class="fb-show-resolved-cb">
          <span>Show closed</span>
        </label>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;

  // Floating tab to reopen sidebar when closed
  const tab = document.createElement("button");
  tab.className = "fb-sidebar-tab";
  tab.textContent = "Feedback";
  tab.addEventListener("click", () => openSidebar());
  document.body.appendChild(tab);

  document.body.appendChild(_sidebar);

  // Toast container (lives inside the sidebar so it scrolls with it)
  initToastContainer(_sidebar);

  _listEl = _sidebar.querySelector(".fb-comment-list");
  _listEl.setAttribute("role", "list");
  _formEl = _sidebar.querySelector(".fb-form-section");

  // Name input
  const nameInput = _sidebar.querySelector(".fb-name-input");
  nameInput.addEventListener("input", () => {
    localStorage.setItem(COMMENTER_KEY, nameInput.value.trim());
  });

  // AI button in header
  const aiBtn = _sidebar.querySelector(".fb-ai-btn");
  aiBtn.addEventListener("click", () => openModal());

  // Keyboard shortcuts button in header
  const shortcutsBtn = _sidebar.querySelector(".fb-shortcuts-btn");
  shortcutsBtn.addEventListener("click", () => _toggleShortcutsHelp());

  // Close button in header
  const toggleBtn = _sidebar.querySelector(".fb-sidebar-toggle");
  toggleBtn.addEventListener("click", () => closeSidebar());

  // Show/hide resolved filter
  const resolvedCb = _sidebar.querySelector(".fb-show-resolved-cb");
  resolvedCb.addEventListener("change", () => {
    _showResolved = resolvedCb.checked;
    renderComments(_lastComments, _lastAnchoredIds); // Use stored anchoredIds
  });

  // Global keyboard shortcut: "s" to toggle sidebar
  document.addEventListener("keydown", _handleGlobalKeydown);
}

export function openSidebar() {
  _sidebar.classList.remove("fb-sidebar-collapsed");
  document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden");
  _attachKeyboardHandler();
  // Intentionally no auto-focus of first thread here (#194).
  // Auto-focusing called _setActiveThread(0) → scrollToHighlight(), which
  // scrolled the main document to the first comment, losing the user's
  // scroll position. Users can navigate threads with j/k keys or clicking.
}

export function closeSidebar() {
  _sidebar.classList.add("fb-sidebar-collapsed");
  document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden");
  _detachKeyboardHandler();
  _activeThreadIndex = -1;
  document.body.focus();
}

function _isInputFocused() {
  const el = document.activeElement;
  if (!el) return false;
  const tag = el.tagName;
  return tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT" || el.isContentEditable;
}

function _getThreadCards() {
  if (!_listEl) return [];
  return Array.from(_listEl.querySelectorAll(".fb-thread > .fb-cmt-card:first-child"));
}

function _setActiveThread(index) {
  const cards = _getThreadCards();
  if (cards.length === 0) return;
  index = wrapIndex(index, cards.length);
  _activeThreadIndex = index;

  // Clear existing active
  _listEl.querySelectorAll(".fb-cmt-card").forEach((c) => c.classList.remove("fb-cmt-active"));
  const card = cards[index];
  card.classList.add("fb-cmt-active");
  sidebarScrollTo(card);

  // Also activate the highlight in the document (skip for orphaned comments)
  const thread = card.closest(".fb-thread");
  if (thread?.dataset.commentId && _lastAnchoredIds.has(thread.dataset.commentId)) {
    setActiveHighlight(thread.dataset.commentId);
    scrollToHighlight(thread.dataset.commentId);
  }
}

function _handleSidebarKeydown(e) {
  // Skip when sidebar is closed
  if (_sidebar.classList.contains("fb-sidebar-collapsed")) return;

  const key = e.key;

  // ESC always works, even when typing in an input
  if (key === "Escape") {
    e.preventDefault();
    closeSidebar();
    return;
  }

  // Skip other shortcuts when typing in an input
  if (_isInputFocused()) return;

  if (key === "Enter") {
    const cards = _getThreadCards();
    if (_activeThreadIndex >= 0 && _activeThreadIndex < cards.length) {
      e.preventDefault();
      const thread = cards[_activeThreadIndex].closest(".fb-thread");
      const replyBtn = thread?.querySelector(".fb-reply-btn");
      if (replyBtn) replyBtn.click();
    }
    return;
  }

  if (key === "j") {
    e.preventDefault();
    const cards = _getThreadCards();
    if (cards.length === 0) return;
    const next = _activeThreadIndex < 0 ? 0 : _activeThreadIndex + 1;
    _setActiveThread(next);
    return;
  }

  if (key === "k") {
    e.preventDefault();
    const cards = _getThreadCards();
    if (cards.length === 0) return;
    const prev = _activeThreadIndex < 0 ? cards.length - 1 : _activeThreadIndex - 1;
    _setActiveThread(prev);
    return;
  }

  if (key === "?") {
    e.preventDefault();
    _toggleShortcutsHelp();
  }
}

function _toggleShortcutsHelp() {
  const existing = document.querySelector(".fb-shortcuts-overlay");
  if (existing) {
    existing.remove();
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "fb-shortcuts-overlay";

  const modal = document.createElement("div");
  modal.className = "fb-shortcuts-modal";
  modal.innerHTML = `
    <div class="fb-shortcuts-header">
      <strong>Keyboard Shortcuts</strong>
      <button class="fb-shortcuts-close">&times;</button>
    </div>
    <div class="fb-shortcuts-body">
      <table class="fb-shortcuts-table">
        <tbody>
          <tr><td><kbd>s</kbd></td><td>Toggle sidebar open/closed</td></tr>
          <tr><td><kbd>Esc</kbd></td><td>Close sidebar</td></tr>
          <tr><td><kbd>j</kbd></td><td>Next comment thread</td></tr>
          <tr><td><kbd>k</kbd></td><td>Previous comment thread</td></tr>
          <tr><td><kbd>Enter</kbd></td><td>Reply to focused thread</td></tr>
          <tr><td><kbd>Cmd+Enter</kbd></td><td>Submit comment or reply</td></tr>
          <tr><td><kbd>?</kbd></td><td>Toggle this help</td></tr>
        </tbody>
      </table>
    </div>
  `;

  const close = () => overlay.remove();
  modal.querySelector(".fb-shortcuts-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  overlay.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      close();
    }
  });

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  modal.querySelector(".fb-shortcuts-close").focus();
}

function _handleGlobalKeydown(e) {
  if (_isInputFocused()) return;
  if (e.key === "s") {
    e.preventDefault();
    _toggleSidebar();
  }
}

function _toggleSidebar() {
  if (_sidebar.classList.contains("fb-sidebar-collapsed")) {
    openSidebar();
  } else {
    closeSidebar();
  }
}

function _attachKeyboardHandler() {
  _detachKeyboardHandler();
  _keydownHandler = _handleSidebarKeydown;
  document.addEventListener("keydown", _keydownHandler);
}

function _detachKeyboardHandler() {
  if (_keydownHandler) {
    document.removeEventListener("keydown", _keydownHandler);
    _keydownHandler = null;
  }
}

/**
 * Show the comment form for a new comment.
 */
export function showCommentForm(quote) {
  openSidebar();

  if (!getCommenter()) {
    const nameInput = _sidebar.querySelector(".fb-name-input");
    nameInput.classList.add("fb-name-input-error");
    setTimeout(() => nameInput.classList.remove("fb-name-input-error"), 2000);
  }

  _pendingQuote = quote;
  _formEl.style.display = "";

  const presetEntries = Object.entries(COLOR_PRESETS);
  const initialColor = _defaultColor || DEFAULT_COLOR;

  _formEl.innerHTML = `
    <div class="fb-form-card">
      <div class="fb-form-quote">"${escapeHtml(truncate(quote, 120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
      <div class="fb-color-picker">
        <label class="fb-color-label">Color</label>
        <div class="fb-color-swatches">
          ${presetEntries.map(([name, hex]) => `<button type="button" class="fb-color-swatch${hex === initialColor ? " fb-color-swatch-active" : ""}" data-color="${hex}" title="${name}" style="background:${hex};"></button>`).join("")}
        </div>
      </div>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;

  let selectedColor = initialColor;

  // Color swatch click handlers
  _formEl.querySelectorAll(".fb-color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", (e) => {
      e.preventDefault();
      _formEl.querySelectorAll(".fb-color-swatch").forEach((s) => s.classList.remove("fb-color-swatch-active"));
      swatch.classList.add("fb-color-swatch-active");
      selectedColor = swatch.dataset.color;
    });
  });

  const textarea = _formEl.querySelector(".fb-form-textarea");
  textarea.focus();

  const submitComment = () => {
    if (!getCommenter()) {
      const nameInput = _sidebar.querySelector(".fb-name-input");
      nameInput.focus();
      nameInput.style.outline = "2px solid var(--remarq-danger)";
      setTimeout(() => (nameInput.style.outline = ""), 2000);
      return;
    }
    const comment = textarea.value.trim();
    if (!comment) return;
    _onSubmit({ comment, commenter: getCommenter(), color: selectedColor });
    _formEl.style.display = "none";
    _pendingQuote = null;
  };

  _formEl.querySelector(".fb-submit-btn").addEventListener("click", submitComment);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      submitComment();
    }
  });

  _formEl.querySelector(".fb-cancel-btn").addEventListener("click", () => {
    _formEl.style.display = "none";
    _pendingQuote = null;
  });

  // Scroll form into view within the sidebar
  sidebarScrollTo(_formEl);
}

/**
 * Render the full comment list with threaded replies.
 * Anchored comments appear first (sorted by document position), orphaned comments at the bottom.
 *
 * @param {Array} comments - All comments
 * @param {Set} anchoredIds - Set of comment IDs that successfully anchored to text
 * @param {Map} commentRanges - Map of comment ID to Range for position sorting
 */
export function renderComments(comments, anchoredIds = new Set(), commentRanges = new Map()) {
  _lastComments = comments;
  _lastAnchoredIds = anchoredIds;
  _activeThreadIndex = -1;
  _listEl.innerHTML = "";

  const { topLevel, repliesByParent } = threadComments(comments);

  // Separate anchored and orphaned comments
  const anchored = [];
  const orphaned = [];
  for (const ann of topLevel) {
    if (anchoredIds.has(ann.id)) {
      anchored.push(ann);
    } else {
      orphaned.push(ann);
    }
  }

  // Sort anchored comments by document position
  anchored.sort((a, b) => {
    const rangeA = commentRanges.get(a.id);
    const rangeB = commentRanges.get(b.id);
    if (!rangeA || !rangeB) return 0;
    return rangeA.compareBoundaryPoints(Range.START_TO_START, rangeB);
  });

  // Anchored first, then orphaned at the bottom
  const sortedTopLevel = [...anchored, ...orphaned];

  // Apply closed filter
  const visibleTopLevel = _showResolved ? sortedTopLevel : sortedTopLevel.filter((a) => a.status !== "closed");

  if (sortedTopLevel.length === 0) {
    _listEl.innerHTML = `<div class="fb-empty">No comments yet. Select text to add one.</div>`;
    return;
  }

  if (visibleTopLevel.length === 0) {
    _listEl.innerHTML = `<div class="fb-empty">All ${sortedTopLevel.length} comment(s) resolved. Check "Show closed" to see them.</div>`;
    return;
  }

  for (const ann of visibleTopLevel) {
    const isOrphaned = !anchoredIds.has(ann.id);
    const thread = document.createElement("div");
    thread.className = "fb-thread";
    thread.setAttribute("role", "listitem");
    thread.setAttribute("tabindex", "0");
    thread.dataset.commentId = ann.id;

    thread.appendChild(buildCard(ann, false, isOrphaned));

    // Render replies
    const replies = repliesByParent.get(ann.id) || [];
    for (const reply of replies) {
      thread.appendChild(buildCard(reply, true));
    }

    // Reply button
    if (canCreateComment(_permissions)) {
      const replyBtn = document.createElement("button");
      replyBtn.className = "fb-reply-btn";
      replyBtn.textContent = "Reply";
      replyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showReplyForm(ann.id, thread, replyBtn);
      });
      thread.appendChild(replyBtn);
    }

    // Sync document highlight when thread receives focus (e.g. via Tab)
    thread.addEventListener("focus", () => {
      const cards = _getThreadCards();
      const idx = cards.indexOf(thread.querySelector(".fb-cmt-card"));
      if (idx >= 0) {
        _setActiveThread(idx);
      }
    });

    _listEl.appendChild(thread);
  }
}

function buildCard(ann, isReply, isOrphaned = false) {
  const isClosed = ann.status === "closed";
  const card = document.createElement("div");
  card.className =
    "fb-cmt-card" +
    (isClosed ? " fb-cmt-closed" : "") +
    (isReply ? " fb-cmt-reply" : "") +
    (isOrphaned ? " fb-cmt-orphaned" : "");
  card.dataset.id = ann.id;

  const orphanedQuoteHtml =
    isOrphaned && ann.quote
      ? `<div class="fb-cmt-orphaned-quote">Content Deleted: "${escapeHtml(truncate(ann.quote, 120))}"</div>`
      : "";

  card.innerHTML = `
    ${orphanedQuoteHtml}
    <div class="fb-cmt-body">${renderMarkdown(ann.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${escapeHtml(ann.author)}</span>
      <span class="fb-cmt-time">${timeAgo(ann.created_at)}</span>
      ${canEditComment(_permissions, ann, getCommenter()) ? `<button class="fb-cmt-edit" title="Edit">&#x270E;</button>` : ""}
      ${!isReply && canResolveComment(_permissions) ? `<button class="fb-cmt-resolve" title="${isClosed ? "Reopen" : "Resolve"}">${isClosed ? "&#x21a9;" : "&#x2713;"}</button>` : ""}
      ${canDeleteComment(_permissions) ? `<button class="fb-cmt-delete" title="Delete">&times;</button>` : ""}
    </div>
    <div class="fb-reactions"></div>
  `;

  // Build reaction bar
  const reactionsEl = card.querySelector(".fb-reactions");
  buildReactionBar(reactionsEl, ann);

  if (!isReply) {
    card.addEventListener("click", (e) => {
      if (
        e.target.closest(".fb-cmt-delete") ||
        e.target.closest(".fb-cmt-resolve") ||
        e.target.closest(".fb-cmt-edit") ||
        e.target.closest(".fb-reactions")
      ) {
        return;
      }
      if (!isOrphaned) {
        setActiveHighlight(ann.id);
        scrollToHighlight(ann.id);
      }
      _listEl.querySelectorAll(".fb-cmt-card").forEach((c) => c.classList.remove("fb-cmt-active"));
      card.classList.add("fb-cmt-active");
    });

    const resolveButton = card.querySelector(".fb-cmt-resolve");
    if (resolveButton) {
      resolveButton.addEventListener("click", (e) => {
        e.stopPropagation();
        if (_onResolve) _onResolve(ann.id, !isClosed);
      });
    }
  }

  const editButton = card.querySelector(".fb-cmt-edit");
  if (editButton) {
    editButton.addEventListener("click", (e) => {
      e.stopPropagation();
      showEditForm(ann, card);
    });
  }

  const deleteButton = card.querySelector(".fb-cmt-delete");
  if (deleteButton) {
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (_onDelete) _onDelete(ann.id);
    });
  }

  return card;
}

import { ALLOWED_REACTIONS } from "./utils/emoji.js";
const REACTION_EMOJI = ALLOWED_REACTIONS;
const EMOJI_SET = Object.keys(REACTION_EMOJI);

function buildReactionBar(container, ann) {
  const reactions = ann.reactions || [];
  const commenter = getCommenter();

  // Render existing reaction badges (icon-style, like Google Docs)
  for (const r of reactions) {
    const badge = document.createElement("button");
    badge.className = "fb-reaction-badge";
    const isMine = commenter && r.authors.includes(commenter);
    if (isMine) {
      badge.classList.add("fb-reaction-mine");
    }
    const label = REACTION_EMOJI[r.emoji];
    badge.innerHTML = `${r.emoji}<span class="fb-reaction-count">${r.count}</span>`;
    badge.title = (label ? label + ": " : "") + r.authors.join(", ");
    badge.addEventListener("click", (e) => {
      e.stopPropagation();
      if (_onReaction) _onReaction(ann.id, r.emoji);
    });
    container.appendChild(badge);
  }

  // Add-reaction button (muted icon style)
  const addBtn = document.createElement("button");
  addBtn.className = "fb-reaction-add";
  addBtn.innerHTML =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>';
  addBtn.title = "Add reaction";
  addBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showEmojiPicker(container, ann, addBtn);
  });
  container.appendChild(addBtn);
}

function showEmojiPicker(container, ann, addBtn) {
  // Remove existing picker if open
  const existing = container.querySelector(".fb-emoji-picker");
  if (existing) {
    existing.remove();
    return;
  }

  const picker = document.createElement("div");
  picker.className = "fb-emoji-picker";

  for (const emoji of EMOJI_SET) {
    const label = REACTION_EMOJI[emoji];
    const btn = document.createElement("button");
    btn.className = "fb-emoji-option";
    btn.textContent = emoji;
    btn.title = label;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      picker.remove();
      if (_onReaction) _onReaction(ann.id, emoji);
    });
    picker.appendChild(btn);
  }

  container.insertBefore(picker, addBtn.nextSibling);

  // Dismiss on outside click
  const dismiss = (e) => {
    if (!picker.contains(e.target) && e.target !== addBtn) {
      picker.remove();
      document.removeEventListener("click", dismiss, true);
    }
  };
  setTimeout(() => document.addEventListener("click", dismiss, true), 0);
}

function showReplyForm(parentId, threadEl, replyBtn) {
  openSidebar();

  // Remove existing reply form if any
  const existing = threadEl.querySelector(".fb-reply-form");
  if (existing) {
    existing.remove();
    replyBtn.style.display = "";
    return;
  }

  replyBtn.style.display = "none";

  const form = document.createElement("div");
  form.className = "fb-reply-form";
  form.innerHTML = `
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;

  const submitReply = () => {
    if (!getCommenter()) {
      const nameInput = _sidebar.querySelector(".fb-name-input");
      nameInput.focus();
      nameInput.style.outline = "2px solid var(--remarq-danger)";
      setTimeout(() => (nameInput.style.outline = ""), 2000);
      return;
    }
    const comment = form.querySelector("textarea").value.trim();
    if (!comment) return;
    if (_onReply) _onReply({ parent_id: parentId, comment, commenter: getCommenter() });
    form.remove();
    replyBtn.style.display = "";
  };

  form.querySelector(".fb-reply-submit").addEventListener("click", submitReply);

  const replyTextarea = form.querySelector("textarea");
  replyTextarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      submitReply();
    }
  });

  form.querySelector(".fb-reply-cancel").addEventListener("click", () => {
    form.remove();
    replyBtn.style.display = "";
  });

  threadEl.insertBefore(form, replyBtn);
  replyTextarea.focus();
}

function showEditForm(ann, card) {
  const commentEl = card.querySelector(".fb-cmt-body");
  const originalText = ann.body;
  const isRootComment = !ann.parent_id;

  const currentColor = resolveColor(ann.color) || _defaultColor || DEFAULT_COLOR;
  const presetEntries = Object.entries(COLOR_PRESETS);

  // Replace comment with edit form
  commentEl.innerHTML = `
    ${
      isRootComment
        ? `<div class="fb-color-picker">
      <label class="fb-color-label">Color</label>
      <div class="fb-color-swatches">
        ${presetEntries.map(([name, hex]) => `<button type="button" class="fb-color-swatch${hex === currentColor ? " fb-color-swatch-active" : ""}" data-color="${hex}" title="${name}" style="background:${hex};"></button>`).join("")}
      </div>
    </div>`
        : ""
    }
    <textarea class="fb-form-textarea" rows="3">${escapeHtml(originalText)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;

  let selectedColor = currentColor;

  // Color swatch click handlers
  commentEl.querySelectorAll(".fb-color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      commentEl.querySelectorAll(".fb-color-swatch").forEach((s) => s.classList.remove("fb-color-swatch-active"));
      swatch.classList.add("fb-color-swatch-active");
      selectedColor = swatch.dataset.color;
    });
  });

  const textarea = commentEl.querySelector("textarea");
  textarea.focus();
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);

  const saveEdit = () => {
    const newComment = textarea.value.trim();
    if (!newComment) return;
    const colorChanged = isRootComment && selectedColor !== currentColor;
    if (_onEdit) _onEdit(ann.id, newComment, colorChanged ? selectedColor : undefined);
  };

  commentEl.querySelector(".fb-edit-save").addEventListener("click", saveEdit);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      saveEdit();
    }
  });

  commentEl.querySelector(".fb-edit-cancel").addEventListener("click", () => {
    commentEl.innerHTML = renderMarkdown(originalText);
  });
}

/**
 * Scroll the sidebar to a specific comment card and highlight it.
 */
export function focusCommentCard(commentId) {
  const card = _listEl.querySelector(`.fb-cmt-card[data-id="${commentId}"]`);
  if (card) {
    _listEl.querySelectorAll(".fb-cmt-card").forEach((c) => c.classList.remove("fb-cmt-active"));
    card.classList.add("fb-cmt-active");
    sidebarScrollTo(card);
  }
}

function injectStyles() {
  createInlineStyles();
}
