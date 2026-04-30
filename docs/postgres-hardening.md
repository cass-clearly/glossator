# PostgreSQL hardening

Use managed PostgreSQL where possible (AWS RDS, Cloud SQL, AlloyDB, etc.) with encryption, automated backups, and IAM/network controls enabled by policy.

## Encryption at rest

Required:

- storage encryption enabled for the database volume/cluster
- KMS-managed keys where the platform supports them
- backups/snapshots encrypted with the same or stricter policy

Self-hosted Postgres must run on encrypted disks (LUKS, encrypted EBS/GCE PD, or equivalent). Remarq does not implement database encryption itself; operators must enable it at the storage/database platform layer.

## Daily backups and restore

Minimum backup posture:

- daily full backups or snapshots
- point-in-time recovery when the platform supports WAL archiving
- 30+ day backup retention unless company policy requires longer
- quarterly restore test into an isolated environment

Example self-hosted backup:

```bash
pg_dump "$DATABASE_URL" --format=custom --file="remarq-$(date +%F).dump"
```

Restore verification:

```bash
createdb remarq_restore_test
pg_restore --dbname=remarq_restore_test remarq-YYYY-MM-DD.dump
psql remarq_restore_test -c 'select count(*) from documents;'
```

## Least privilege

Remarq normally initializes and migrates its schema at startup. Hardened deployments should split that into two phases:

1. **Bootstrap/migration phase** — run Remarq once with an owner or migration role so `initSchema()` can create/alter tables.
2. **Runtime phase** — run Remarq with `REMARQ_SKIP_SCHEMA_INIT=true` and a runtime role that has no schema DDL privileges.

Owner/bootstrap role:

```sql
CREATE ROLE remarq_owner LOGIN PASSWORD 'change-owner-password';
CREATE DATABASE remarq OWNER remarq_owner;
```

Runtime role after bootstrap:

```sql
CREATE ROLE remarq_app LOGIN PASSWORD 'change-runtime-password';
GRANT CONNECT ON DATABASE remarq TO remarq_app;
GRANT USAGE ON SCHEMA public TO remarq_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO remarq_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO remarq_app;
ALTER DEFAULT PRIVILEGES FOR ROLE remarq_owner IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO remarq_app;
ALTER DEFAULT PRIVILEGES FOR ROLE remarq_owner IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO remarq_app;
```

Runtime environment:

```bash
DATABASE_URL=postgres://remarq_app:...@postgres/remarq
REMARQ_SKIP_SCHEMA_INIT=true
```

Do not grant `CREATE` or `ALTER` on `public` to the runtime role. Use the owner role only for controlled bootstrap/migration windows.

## Operator checklist

- [ ] Database storage encryption enabled
- [ ] Backups/snapshots encrypted
- [ ] Daily backups configured
- [ ] Restore tested and documented
- [ ] Schema bootstrapped with owner/migration credentials
- [ ] Remarq runtime uses `REMARQ_SKIP_SCHEMA_INIT=true`
- [ ] Remarq connects with a non-superuser, no-DDL runtime role
- [ ] Postgres accepts connections only from Remarq and operator networks
