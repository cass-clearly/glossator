const http = require("node:http");
const https = require("node:https");

class RemarqClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  request(method, path, { body, query } = {}) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, this.baseUrl);
      if (query) {
        for (const [k, v] of Object.entries(query)) {
          if (v != null) url.searchParams.set(k, v);
        }
      }

      const transport = url.protocol === "https:" ? https : http;
      const options = {
        method,
        hostname: url.hostname,
        port: url.port,
        path: url.pathname + url.search,
        headers: {},
      };

      const payload = body ? JSON.stringify(body) : null;
      if (payload) {
        options.headers["Content-Type"] = "application/json";
        options.headers["Content-Length"] = Buffer.byteLength(payload);
      }

      const req = transport.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          let parsed;
          try {
            parsed = JSON.parse(data);
          } catch {
            parsed = data;
          }

          if (res.statusCode >= 400) {
            const err = new Error(
              parsed?.error?.message || `HTTP ${res.statusCode}`
            );
            err.status = res.statusCode;
            err.response = parsed;
            reject(err);
            return;
          }

          resolve({ status: res.statusCode, data: parsed });
        });
      });

      req.on("error", reject);
      if (payload) req.write(payload);
      req.end();
    });
  }
}

module.exports = { RemarqClient };
