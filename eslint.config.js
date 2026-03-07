const js = require("@eslint/js");

const sharedRules = {
  "no-var": "error",
  "prefer-const": "error",
  "no-unused-vars": ["error", { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
  eqeqeq: ["error", "always"],
  "no-implicit-coercion": "error",
  "no-throw-literal": "error",
  "no-self-compare": "error",
  curly: ["error", "multi-line"],
  "no-else-return": "error",
  "no-lonely-if": "error",
  "no-unneeded-ternary": "error",
  "object-shorthand": "error",
  "no-useless-return": "error",
  "no-useless-rename": "error",
  "no-useless-concat": "error",
};

module.exports = [
  // Ignore build output, dependencies, and vendored files
  { ignores: ["**/node_modules/**", "**/dist/**", "serve/**", "feedback-layer/vendor/**", ".claude/**"] },

  // Base recommended rules for all files
  js.configs.recommended,

  // Default: CommonJS (server, cli, shared)
  {
    files: ["server/**/*.js", "cli/**/*.js", "shared/**/*.js", "eslint.config.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        fetch: "readonly",
        AbortSignal: "readonly",
      },
    },
    rules: {
      ...sharedRules,
      "no-promise-executor-return": "error",
      "no-template-curly-in-string": "warn",
      "no-constructor-return": "error",
      "no-async-promise-executor": "error",
      "require-atomic-updates": "error",
      "no-await-in-loop": "warn",
      "prefer-template": "error",
    },
  },

  // Build scripts (CommonJS, Node)
  {
    files: ["feedback-layer/build.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
    },
  },

  // ESM files: feedback-layer source (browser)
  {
    files: ["feedback-layer/src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        console: "readonly",
        document: "readonly",
        window: "readonly",
        HTMLElement: "readonly",
        MouseEvent: "readonly",
        MutationObserver: "readonly",
        Node: "readonly",
        NodeFilter: "readonly",
        Range: "readonly",
        SVGElement: "readonly",
        getComputedStyle: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        fetch: "readonly",
        URL: "readonly",
        matchMedia: "readonly",
        localStorage: "readonly",
        requestAnimationFrame: "readonly",
        navigator: "readonly",
        WebSocket: "readonly",
      },
    },
    rules: { ...sharedRules },
  },

  // MCP server (ESM, Node)
  {
    files: ["mcp-server/src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
      },
    },
    rules: { ...sharedRules },
  },

  // ESM test files (.mjs)
  {
    files: ["**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        fetch: "readonly",
        AbortSignal: "readonly",
        document: "readonly",
        window: "readonly",
        MouseEvent: "readonly",
      },
    },
    rules: {
      ...sharedRules,
      // Relaxed in tests
      "no-promise-executor-return": "off",
      "no-await-in-loop": "off",
    },
  },
];
