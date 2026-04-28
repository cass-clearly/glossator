# Network isolation

Remarq's supported enterprise posture is internal-network-only. Do not expose the service directly to the public internet.

## Defaults

- Direct server startup binds to `127.0.0.1` by default.
- Docker Compose publishes Remarq on `127.0.0.1:3333` only.
- Postgres remains bound to `127.0.0.1:5433` for local operator access.

Set `HOST=0.0.0.0` only inside a private container network or behind a VPN/corporate reverse proxy.

## Supported architecture

```text
User on VPN/corp network -> internal LB / reverse proxy -> Remarq -> private Postgres
Internet -> firewall deny
```

Firewall / ingress requirements:

- allow inbound HTTPS only from VPN or corporate CIDR ranges
- deny all public internet sources
- keep Postgres inaccessible except from Remarq and operators
- terminate TLS at the internal proxy and forward only on private network paths

## Verification

```bash
# On the host: should work
curl http://127.0.0.1:3333/health

# From outside VPN/corp network: must fail or time out
curl https://remarq.internal.example.com/health

# Confirm no public listener on Linux
ss -ltnp | grep 3333
```

Closes #278.
