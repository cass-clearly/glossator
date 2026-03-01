/**
 * WebSocket client for real-time comment updates.
 *
 * Connects to the Remarq server's /ws endpoint, subscribes to a document,
 * and invokes a callback on incoming events. Reconnects automatically with
 * exponential backoff when the connection drops.
 */

const INITIAL_BACKOFF_MS = 1000;
const MAX_BACKOFF_MS = 30000;

/**
 * Derive a WebSocket URL from the HTTP API base URL.
 * http://host → ws://host/ws, https://host → wss://host/ws
 */
function wsUrlFromApi(apiBaseUrl) {
  const url = new URL(apiBaseUrl);
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  url.pathname = "/ws";
  return url.toString();
}

/**
 * Connect to the WebSocket server and subscribe to a document.
 *
 * @param {object} opts
 * @param {string} opts.apiBaseUrl - HTTP base URL of the Remarq API
 * @param {string} opts.documentId - Document ID to subscribe to
 * @param {(event: object) => void} opts.onEvent - Callback for incoming events
 * @returns {{ close: () => void }} Handle to tear down the connection
 */
export function connectWs({ apiBaseUrl, documentId, onEvent }) {
  const wsUrl = wsUrlFromApi(apiBaseUrl);
  let ws = null;
  let backoff = INITIAL_BACKOFF_MS;
  let timer = null;
  let closed = false;
  let subscribed = false;

  function connect() {
    if (closed) return;
    subscribed = false;

    try {
      ws = new WebSocket(wsUrl);
    } catch {
      scheduleReconnect();
      return;
    }

    ws.onopen = () => {
      backoff = INITIAL_BACKOFF_MS; // reset on successful connect
      ws.send(JSON.stringify({ type: "subscribe", documentId }));
    };

    ws.onmessage = (e) => {
      try {
        const event = JSON.parse(e.data);

        // Handle subscription confirmation
        if (event.type === "subscribed" && event.documentId === documentId) {
          subscribed = true;
          return;
        }

        // Only process events after subscription confirmed
        if (subscribed) {
          onEvent(event);
        }
      } catch {
        // ignore malformed messages
      }
    };

    ws.onclose = () => {
      subscribed = false;
      if (!closed) scheduleReconnect();
    };

    ws.onerror = () => {
      // onclose will fire after onerror — reconnect handled there
    };
  }

  function scheduleReconnect() {
    if (closed) return;
    timer = setTimeout(() => {
      connect();
    }, backoff);
    backoff = Math.min(backoff * 2, MAX_BACKOFF_MS);
  }

  connect();

  return {
    close() {
      closed = true;
      clearTimeout(timer);
      if (ws) {
        ws.onclose = null; // prevent reconnect on intentional close
        ws.close();
      }
    },
  };
}
