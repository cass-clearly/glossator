function isHttpsRequired(env = process.env) {
  return env.REMARQ_ENFORCE_HTTPS === "true";
}

function isSecureRequest(req) {
  return req.secure || req.get("x-forwarded-proto") === "https";
}

function requireHttps({ env = process.env } = {}) {
  return (req, res, next) => {
    if (!isHttpsRequired(env) || isSecureRequest(req)) return next();
    return res.status(426).json({ error: { message: "HTTPS required" } });
  };
}

module.exports = { isHttpsRequired, isSecureRequest, requireHttps };
