/**
 * Email transport layer — wraps nodemailer with SMTP config from env vars.
 * If SMTP is not configured, sendEmail is a no-op that logs a warning once.
 */

const nodemailer = require("nodemailer");

let transporter = null;
let warnedOnce = false;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  if (!host) {
    if (!warnedOnce) {
      console.warn("SMTP_HOST not set — email notifications disabled");
      warnedOnce = true;
    }
    return null;
  }

  transporter = nodemailer.createTransport({
    host,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

/**
 * Send an email. Returns a promise. No-op if SMTP is not configured.
 * @param {string} to
 * @param {string} subject
 * @param {string} html
 */
async function sendEmail(to, subject, html) {
  const t = getTransporter();
  if (!t) return null;

  const from = process.env.SMTP_FROM || "notifications@remarq.app";
  return t.sendMail({ from, to, subject, html });
}

/** Reset transporter (for testing). */
function _resetTransporter() {
  transporter = null;
  warnedOnce = false;
}

/** Override transporter (for testing). */
function _setTransporter(t) {
  transporter = t;
}

module.exports = { sendEmail, _resetTransporter, _setTransporter };
