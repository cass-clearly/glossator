"use strict";

const PDFDocument = require("pdfkit");

/**
 * Render annotation export as a PDF buffer.
 *
 * NOTE: PDFDocument buffers the entire document in memory before resolving.
 * This is acceptable for MVP-scale annotation sets. For documents with hundreds
 * of comments or large quote text, consider streaming directly to the response
 * instead of buffering here.
 *
 * @param {object} document - Formatted document object
 * @param {object[]} commentsWithReactions - Formatted comments with reactions attached
 * @returns {Promise<Buffer>} PDF content
 */
function renderPdf(document, commentsWithReactions) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const chunks = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // Title
    doc.fontSize(20).text("Annotation Export", { align: "center" });
    doc.moveDown(0.5);

    // Document metadata
    doc.fontSize(10).fillColor("#666");
    doc.text(`Document: ${document.uri}`);
    doc.text(`Exported: ${new Date().toISOString()}`);
    doc.moveDown();

    // Annotations
    doc.fontSize(12).fillColor("#000");
    const topLevel = commentsWithReactions.filter((c) => !c.parent);
    const repliesByParent = new Map();
    for (const c of commentsWithReactions) {
      if (c.parent) {
        if (!repliesByParent.has(c.parent)) repliesByParent.set(c.parent, []);
        repliesByParent.get(c.parent).push(c);
      }
    }

    for (const comment of topLevel) {
      doc.fillColor("#7c3aed").fontSize(11);
      if (comment.quote) {
        doc.text(`"${comment.quote}"`, { continued: false });
      }
      doc.fillColor("#000").fontSize(12);
      doc.text(comment.body);
      doc.fontSize(9).fillColor("#888");
      doc.text(`— ${comment.author} | ${comment.status ?? "open"} | ${comment.created_at}`);

      // Replies
      const replies = repliesByParent.get(comment.id) || [];
      for (const reply of replies) {
        doc.moveDown(0.3);
        doc.fillColor("#000").fontSize(11);
        doc.text(`    ${reply.body}`, { indent: 20 });
        doc.fontSize(9).fillColor("#888");
        doc.text(`    — ${reply.author} | ${reply.created_at}`, { indent: 20 });
      }

      doc.moveDown();
    }

    doc.end();
  });
}

module.exports = { renderPdf };
