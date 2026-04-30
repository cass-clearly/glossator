# Okta authentication

Remarq can require Okta SSO before serving the UI or API.

## Okta application setup

Create an Okta OIDC application with:

- Authorization Code flow enabled
- Redirect URI exactly matching `OKTA_REDIRECT_URI`
- Scopes: `openid profile email`

## Required configuration

Set these environment variables in production:

```bash
REMARQ_AUTH_REQUIRED=true
OKTA_ISSUER=https://your-org.okta.com/oauth2/default
OKTA_CLIENT_ID=...
OKTA_CLIENT_SECRET=...
OKTA_REDIRECT_URI=https://remarq.internal.example.com/auth/callback
REMARQ_SESSION_TIMEOUT_MINUTES=480
REMARQ_POST_LOGIN_REDIRECT=/
OKTA_TIMEOUT_MS=10000
```

When authentication is enabled:

- anonymous UI and API requests return `401 Authentication required`
- `/login` redirects to Okta using the authorization-code flow
- `/auth/callback` exchanges the code for an Okta access token and reads `/userinfo`
- a secure, HTTP-only `remarq_session` cookie is issued
- sessions expire after `REMARQ_SESSION_TIMEOUT_MINUTES`

`/health`, `/login`, `/auth/callback`, and `/openapi.json` remain public for operations and discovery.

## Reverse proxy mode

If a corporate proxy already terminates Okta SSO, set:

```bash
REMARQ_AUTH_REQUIRED=true
REMARQ_TRUSTED_AUTH_HEADER=X-Forwarded-User
```

Only use this behind a trusted internal proxy that strips inbound client-supplied copies of that header.

## Verification

```bash
curl -i https://remarq.internal.example.com/comments
# HTTP/1.1 401 Unauthorized

curl -i https://remarq.internal.example.com/login
# HTTP/1.1 302 Found
# Location: https://your-org.okta.com/oauth2/default/v1/authorize?...
```
