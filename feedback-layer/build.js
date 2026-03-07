const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const watch = process.argv.includes("--watch");
const dir = __dirname;

/**
 * esbuild plugin: import .css files as minified text strings.
 *
 * Allows `import css from "./foo.css"` — at build time the CSS is read,
 * minified via esbuild's CSS transform, and inlined as a JS string export.
 */
const cssTextPlugin = {
  name: "css-text",
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args) => {
      const source = await fs.promises.readFile(args.path, "utf8");
      const { code } = await esbuild.transform(source, {
        loader: "css",
        minify: true,
      });
      return {
        contents: `export default ${JSON.stringify(code)};`,
        loader: "js",
      };
    });
  },
};

const buildOptions = {
  entryPoints: [path.join(dir, "src/index.js")],
  bundle: true,
  format: "iife",
  globalName: "FeedbackLayer",
  outfile: path.join(dir, "dist/feedback-layer.js"),
  minify: !watch,
  sourcemap: watch,
  target: ["es2020"],
  plugins: [cssTextPlugin],
};

if (watch) {
  esbuild.context(buildOptions).then((ctx) => {
    ctx.watch();
    console.log("Watching for changes...");
  });
} else {
  esbuild.build(buildOptions).then(() => {
    console.log("Built dist/feedback-layer.js");
  });
}
