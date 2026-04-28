const ROLES = ["viewer", "commenter", "resolver", "admin"];
const ROLE_PERMISSIONS = {
  viewer: ["comments:read"],
  commenter: ["comments:read", "comments:create", "comments:edit-own"],
  resolver: ["comments:read", "comments:create", "comments:edit-own", "comments:resolve"],
  admin: [
    "comments:read",
    "comments:create",
    "comments:edit-any",
    "comments:resolve",
    "comments:delete",
    "users:manage",
  ],
};

function normalizeRole(role) {
  return ROLES.includes(role) ? role : "viewer";
}

function userIdFromRequest(req) {
  return req.get("X-Remarq-User") || req.get("X-Forwarded-User") || null;
}

function permissionsForRole(role) {
  return ROLE_PERMISSIONS[normalizeRole(role)];
}

function can(role, permission) {
  return permissionsForRole(role).includes(permission);
}

async function ensureUsersTable(pool) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id         TEXT PRIMARY KEY,
      role       TEXT NOT NULL DEFAULT 'viewer' CHECK (role IN ('viewer','commenter','resolver','admin')),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

async function resolveUser(pool, req) {
  const id = userIdFromRequest(req);
  if (!id) return { id: null, role: "admin", permissions: permissionsForRole("admin") };
  const { rows } = await pool.query("SELECT id, role FROM users WHERE id = $1", [id]);
  const role = normalizeRole(rows[0]?.role || req.get("X-Remarq-Role") || "viewer");
  return { id, role, permissions: permissionsForRole(role) };
}

function requirePermission(permission) {
  return (req, res, next) => {
    if (req.user?.permissions?.includes(permission)) return next();
    return res.status(403).json({ error: { message: "Forbidden" } });
  };
}

async function setUserRole(pool, id, role) {
  const normalized = normalizeRole(role);
  const { rows } = await pool.query(
    `INSERT INTO users (id, role, updated_at) VALUES ($1, $2, NOW())
     ON CONFLICT (id) DO UPDATE SET role = EXCLUDED.role, updated_at = NOW()
     RETURNING id, role, created_at, updated_at`,
    [id, normalized],
  );
  return rows[0];
}

module.exports = {
  ROLES,
  can,
  ensureUsersTable,
  normalizeRole,
  permissionsForRole,
  requirePermission,
  resolveUser,
  setUserRole,
  userIdFromRequest,
};
