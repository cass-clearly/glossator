# HTTPS and TLS

Production Remarq deployments must be HTTPS-only. Remarq does not terminate TLS itself; the supported pattern is:

```text
client -> internal TLS 1.2+ reverse proxy -> Remarq on loopback/private network
```

The reverse proxy owns certificate selection, TLS protocol policy, and HTTP redirect/reject behavior. Remarq must not be directly reachable from untrusted networks.

## TLS 1.2+ reverse proxy example

```nginx
server {
  listen 443 ssl http2;
  server_name remarq.internal.example.com;

  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_certificate /etc/ssl/remarq/fullchain.pem;
  ssl_certificate_key /etc/ssl/remarq/privkey.pem;

  location / {
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto https;
    proxy_pass http://127.0.0.1:3333;
  }
}

server {
  listen 80;
  server_name remarq.internal.example.com;
  return 301 https://$host$request_uri;
}
```

## Verification

```bash
# Public HTTP redirects to HTTPS at the proxy.
curl -I http://remarq.internal.example.com/health
# Expected: HTTP/1.1 301 Moved Permanently with Location: https://...

# TLS 1.2 succeeds.
curl --tlsv1.2 -I https://remarq.internal.example.com/health
# Expected: HTTP/2 200 or HTTP/1.1 200 OK

# TLS 1.1 fails.
openssl s_client -connect remarq.internal.example.com:443 -tls1_1
# Expected: handshake failure

# Remarq is not publicly reachable without the proxy.
ss -ltnp | grep 3333
# Expected on a single-host deployment: 127.0.0.1:3333, not 0.0.0.0:3333
```
