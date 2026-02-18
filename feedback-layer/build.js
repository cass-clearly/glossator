const esbuild = require("esbuild");
const path = require("path");

const watch = process.argv.includes("--watch");
const dir = __dirname;

const buildOptions = {
  entryPoints: [path.join(dir, "src/index.js")],
  bundle: true,
  format: "iife",
  globalName: "FeedbackLayer",
  outfile: path.join(dir, "dist/feedback-layer.js"),
  minify: !watch,
  sourcemap: watch,
  target: ["es2020"],
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
