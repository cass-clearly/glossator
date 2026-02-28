# Webhook End-to-End Testing

## Prerequisites

- Remarq server running at `http://192.168.5.204:3333`
- Two terminal windows

---

## Step 1: Start the webhook receiver

In terminal 1:
```bash
node /tmp/webhook-receiver.mjs
```
You should see: `Remarq webhook receiver listening on http://localhost:9999`

---

## Step 2: Register a webhook

In terminal 2:
```bash
curl -s -X POST http://192.168.5.204:3333/webhooks \
  -H "Content-Type: application/json" \
  -d '{
    "url": "http://localhost:9999",
    "secret": "test-secret-123",
    "events": ["comment.created", "comment.resolved", "comment.deleted"]
  }' | jq .
```

Save the returned `id` (e.g., `WEBHOOK_ID=<id>`).

---

## Step 3: Trigger comment.created

```bash
curl -s -X POST http://192.168.5.204:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "uri": "https://test.example.com/doc1",
    "quote": "some highlighted text",
    "body": "This is a test comment",
    "author": "Chris"
  }' | jq .
```

✅ Terminal 1 should show an event with `X-Remarq-Event: comment.created`

Save the comment `id` (e.g., `COMMENT_ID=<id>`).

---

## Step 4: Trigger comment.resolved

```bash
curl -s -X PATCH http://192.168.5.204:3333/comments/<COMMENT_ID> \
  -H "Content-Type: application/json" \
  -d '{"status": "closed"}' | jq .
```

✅ Terminal 1 should show `X-Remarq-Event: comment.resolved`

---

## Step 5: Trigger comment.deleted

```bash
curl -s -X DELETE http://192.168.5.204:3333/comments/<COMMENT_ID>
```

✅ Terminal 1 should show `X-Remarq-Event: comment.deleted`

---

## Step 6: Verify HMAC signature

The `X-Remarq-Signature` header is `sha256=<hmac>` where the HMAC is computed over the JSON body using your webhook secret.

To verify in Node.js:
```js
import crypto from 'crypto';
const sig = crypto.createHmac('sha256', 'test-secret-123').update(body).digest('hex');
// Compare to X-Remarq-Signature header (strip 'sha256=' prefix)
```

---

## Step 7: Manage webhooks

```bash
# List all webhooks
curl -s http://192.168.5.204:3333/webhooks | jq .

# Get one webhook
curl -s http://192.168.5.204:3333/webhooks/<WEBHOOK_ID> | jq .

# Disable a webhook
curl -s -X PATCH http://192.168.5.204:3333/webhooks/<WEBHOOK_ID> \
  -H "Content-Type: application/json" \
  -d '{"active": false}'

# Delete a webhook
curl -s -X DELETE http://192.168.5.204:3333/webhooks/<WEBHOOK_ID>
```

---

## Slack/Discord Integration

Register with a real Slack Incoming Webhook or Discord webhook URL — Remarq auto-detects these and formats payloads accordingly:

```bash
curl -s -X POST http://192.168.5.204:3333/webhooks \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://hooks.slack.com/services/...",
    "secret": "my-secret",
    "events": ["comment.created", "comment.resolved"]
  }'
```
