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

Create separate owner and runtime roles. The application should connect as the runtime role, not a superuser.

```sql
CREATE ROLE remarq_owner NOLOGIN;
CREATE ROLE remarq_app LOGIN PASSWORD 'change-me';
CREATE DATABASE remarq OWNER remarq_owner;

GRANT CONNECT ON DATABASE remarq TO remarq_app;
GRANT USAGE, CREATE ON SCHEMA public TO remarq_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO remarq_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO remarq_app;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO remarq_app;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT ON SEQUENCES TO remarq_app;
```

## Operator checklist

- [ ] Database storage encryption enabled
- [ ] Backups/snapshots encrypted
- [ ] Daily backups configured
- [ ] Restore tested and documented
- [ ] Remarq connects with a non-superuser runtime role
- [ ] Postgres accepts connections only from Remarq and operator networks

Closes #281.
