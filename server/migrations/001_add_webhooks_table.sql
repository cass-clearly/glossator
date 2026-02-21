CREATE TABLE IF NOT EXISTS webhooks (
  id         TEXT PRIMARY KEY,
  url        TEXT NOT NULL,
  secret     TEXT NOT NULL,
  events     TEXT[] NOT NULL DEFAULT '{}',
  active     BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
