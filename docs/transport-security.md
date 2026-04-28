# HTTPS and TLS

Production Remarq deployments must be HTTPS-only. The supported pattern is TLS termination at an internal load balancer or reverse proxy, then HTTP from the proxy to Remarq on a private loopback/container network.

## Required settings

```bash
REMARQ_ENFORCE_HTTPS=true
```

When enabled, Remarq rejects requests unless Express marks them secure or the trusted proxy sets:

```http
X-Forwarded-Proto: https
```

HTTP requests receive `426 HTTPS required`; there is no insecure fallback.

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
curl -I http://remarq.internal.example.com/health
curl --tlsv1.2 -I https://remarq.internal.example.com/health
openssl s_client -connect remarq.internal.example.com:443 -tls1_1
# must fail
```

Closes #277.
