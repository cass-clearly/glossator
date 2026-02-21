const { randomBytes, timingSafeEqual } = require("crypto");

function generateCsrfToken() {
  return randomBytes(24).toString("base64url");
}

function requireAuth(req, res, next) {
  if (!process.env.ADMIN_PASSWORD) {
    return res.status(503).send("ADMIN_PASSWORD not configured");
  }
  if (req.session && req.session.authenticated) {
    return next();
  }
  res.redirect("/admin/login");
}

function verifyCsrf(req, res, next) {
  const token = req.body && req.body._csrf;
  const sessionToken = req.session && req.session.csrfToken;
  if (
    !token ||
    !sessionToken ||
    !timingSafeEqual(Buffer.from(token), Buffer.from(sessionToken))
  ) {
    return res.status(403).send("Invalid CSRF token");
  }
  next();
}

function ensureCsrfToken(req) {
  if (!req.session.csrfToken) {
    req.session.csrfToken = generateCsrfToken();
  }
  return req.session.csrfToken;
}

function checkPassword(input) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(password);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

module.exports = { requireAuth, verifyCsrf, ensureCsrfToken, checkPassword };
