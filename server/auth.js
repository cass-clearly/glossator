const crypto = require("crypto");

const DEFAULT_SESSION_TIMEOUT_MS = 8 * 60 * 60 * 1000;
const DEFAULT_OKTA_TIMEOUT_MS = 10000;
const PUBLIC_PATHS = new Set(["/health", "/login", "/auth/callback"]);

function isAuthRequired(env = process.env) {
  return (
    env.REMARQ_AUTH_REQUIRED === "true" || Boolean(env.OKTA_ISSUER && env.OKTA_CLIENT_ID && env.OKTA_CLIENT_SECRET)
  );
}

function hasOktaConfig(env = process.env) {
  return Boolean(env.OKTA_ISSUER && env.OKTA_CLIENT_ID && env.OKTA_CLIENT_SECRET && env.OKTA_REDIRECT_URI);
}

function hasTrustedHeaderConfig(env = process.env) {
  return Boolean(env.REMARQ_TRUSTED_AUTH_HEADER);
}

function authConfigError(env = process.env) {
  if (!isAuthRequired(env)) return null;
  if (hasOktaConfig(env) || hasTrustedHeaderConfig(env)) return null;
  return "Authentication requires Okta settings or REMARQ_TRUSTED_AUTH_HEADER";
}

function sessionTimeoutMs(env = process.env) {
  const minutes = Number(env.REMARQ_SESSION_TIMEOUT_MINUTES || 480);
  return Number.isFinite(minutes) && minutes > 0 ? minutes * 60 * 1000 : DEFAULT_SESSION_TIMEOUT_MS;
}

function parseCookies(header = "") {
  const cookies = {};
  for (const rawPart of header.split(";")) {
    const part = rawPart.trim();
    if (!part) continue;
    const index = part.indexOf("=");
    if (index <= 0) continue;
    try {
      cookies[part.slice(0, index)] = decodeURIComponent(part.slice(index + 1));
    } catch {
      cookies[part.slice(0, index)] = part.slice(index + 1);
    }
  }
  return cookies;
}

function requestHeader(req, name) {
  if (typeof req.get === "function") return req.get(name);
  const lower = name.toLowerCase();
  return req.headers?.[lower];
}

function createSessionStore() {
  const sessions = new Map();
  return {
    create(user, timeoutMs = DEFAULT_SESSION_TIMEOUT_MS) {
      const id = crypto.randomBytes(32).toString("base64url");
      sessions.set(id, { user, expiresAt: Date.now() + timeoutMs });
      return id;
    },
    get(id) {
      const session = sessions.get(id);
      if (!session) return null;
      if (session.expiresAt <= Date.now()) {
        sessions.delete(id);
        return null;
      }
      return session.user;
    },
    delete(id) {
      sessions.delete(id);
    },
  };
}

function oktaAuthorizeUrl(env = process.env, state) {
  const issuer = env.OKTA_ISSUER?.replace(/\/$/, "");
  const redirectUri = env.OKTA_REDIRECT_URI;
  const params = new URLSearchParams({
    client_id: env.OKTA_CLIENT_ID,
    response_type: "code",
    scope: "openid profile email",
    redirect_uri: redirectUri,
    state,
  });
  return `${issuer}/v1/authorize?${params.toString()}`;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_OKTA_TIMEOUT_MS) {
  const controller = new globalThis.AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function exchangeOktaCode(code, env = process.env, { fetchFn = fetchWithTimeout } = {}) {
  const issuer = env.OKTA_ISSUER?.replace(/\/$/, "");
  const timeoutMs = Number(env.OKTA_TIMEOUT_MS || DEFAULT_OKTA_TIMEOUT_MS);
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: env.OKTA_REDIRECT_URI,
    client_id: env.OKTA_CLIENT_ID,
    client_secret: env.OKTA_CLIENT_SECRET,
  });
  const tokenRes = await fetchFn(
    `${issuer}/v1/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    },
    timeoutMs,
  );
  if (!tokenRes.ok) throw new Error(`Okta token exchange failed: ${tokenRes.status}`);
  const token = await tokenRes.json();
  const userRes = await fetchFn(
    `${issuer}/v1/userinfo`,
    { headers: { Authorization: `Bearer ${token.access_token}` } },
    timeoutMs,
  );
  if (!userRes.ok) throw new Error(`Okta userinfo failed: ${userRes.status}`);
  const profile = await userRes.json();
  return {
    id: profile.sub,
    email: profile.email,
    name: profile.name || profile.preferred_username || profile.email || profile.sub,
  };
}

function authenticateRequest(req, { env = process.env, store = createSessionStore() } = {}) {
  if (!isAuthRequired(env)) return { authenticated: true, user: null };

  const trustedHeader = env.REMARQ_TRUSTED_AUTH_HEADER;
  const trustedUser = trustedHeader && requestHeader(req, trustedHeader);
  if (trustedUser) {
    return { authenticated: true, user: { id: trustedUser, email: trustedUser, name: trustedUser } };
  }

  const cookies = parseCookies(req.headers?.cookie || "");
  const user = cookies.remarq_session ? store.get(cookies.remarq_session) : null;
  if (user) return { authenticated: true, user };
  return { authenticated: false, user: null };
}

function createAuthMiddleware({ env = process.env, store = createSessionStore() } = {}) {
  return async function authMiddleware(req, res, next) {
    if (PUBLIC_PATHS.has(req.path)) return next();
    const configError = authConfigError(env);
    if (configError) return res.status(500).json({ error: { message: configError } });
    const result = authenticateRequest(req, { env, store });
    if (result.authenticated) {
      req.user = result.user;
      return next();
    }
    return res.status(401).json({ error: { message: "Authentication required" } });
  };
}

function registerAuthRoutes(
  app,
  { env = process.env, store = createSessionStore(), codeExchanger = exchangeOktaCode } = {},
) {
  app.get("/login", (req, res) => {
    if (!isAuthRequired(env)) return res.status(204).end();
    const configError = authConfigError(env);
    if (configError) return res.status(500).json({ error: { message: configError } });
    if (!hasOktaConfig(env)) return res.status(404).json({ error: { message: "Okta login is not configured" } });
    const state = crypto.randomBytes(16).toString("base64url");
    res.cookie("remarq_oauth_state", state, { httpOnly: true, sameSite: "lax", secure: env.NODE_ENV === "production" });
    res.redirect(oktaAuthorizeUrl(env, state));
  });

  app.get("/auth/callback", async (req, res, next) => {
    try {
      const configError = authConfigError(env);
      if (configError) return res.status(500).json({ error: { message: configError } });
      const cookies = parseCookies(req.headers.cookie || "");
      if (!req.query.code || !req.query.state || req.query.state !== cookies.remarq_oauth_state) {
        return res.status(400).json({ error: { message: "Invalid Okta callback" } });
      }
      const user = await codeExchanger(req.query.code, env);
      const sid = store.create(user, sessionTimeoutMs(env));
      res.cookie("remarq_session", sid, {
        httpOnly: true,
        sameSite: "lax",
        secure: env.NODE_ENV === "production",
        maxAge: sessionTimeoutMs(env),
      });
      res.clearCookie("remarq_oauth_state");
      res.redirect(env.REMARQ_POST_LOGIN_REDIRECT || "/");
    } catch (err) {
      next(err);
    }
  });
}

module.exports = {
  authenticateRequest,
  authConfigError,
  createAuthMiddleware,
  createSessionStore,
  exchangeOktaCode,
  fetchWithTimeout,
  hasOktaConfig,
  isAuthRequired,
  oktaAuthorizeUrl,
  parseCookies,
  registerAuthRoutes,
  sessionTimeoutMs,
};
