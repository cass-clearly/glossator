# Bundle Size Analysis

## Current Size (as of v1.6.0)

- **Uncompressed**: 180 KB
- **Gzipped** (network transfer): **54 KB**

✅ **Target**: Under 100 KB gzipped  
✅ **Status**: **ACHIEVED** — we're at 54% of the target

## Bundle Composition

Based on esbuild metafile analysis:

| Component | Size (KB) | Percentage |
|-----------|-----------|------------|
| core-js-pure (polyfills) | 78 | 50% |
| Source files (src/) | 34 | 22% |
| Apache Annotator | 15 | 10% |
| optimal-select | 13 | 8% |
| Babel runtime | 12 | 8% |
| **Total** | **154** | **100%** |

> Note: Total uncompressed is 154 KB in the metafile, 180 KB as built. The difference is likely due to esbuild's bundling overhead and IIFE wrapper.

## Why These Dependencies?

### core-js-pure (78 KB)
- Transitive dependency from `@babel/runtime-corejs3`
- Provides ES6+ polyfills for older browsers
- Required by Apache Annotator's build output

### Apache Annotator (15 KB + 13 KB optimal-select)
- Core text anchoring and selector functionality
- `optimal-select` is used for generating robust CSS selectors
- Both are essential for reliable annotation anchoring

### Source Code (34 KB)
- Largest single file: `sidebar.js` (18 KB)
- `index.js`, `highlights.js`, `ui.js`, `api.js` make up the rest

## Optimization Opportunities

### Current Optimizations
- ✅ Minification enabled in production builds
- ✅ ES2020 target (modern browsers)
- ✅ Tree-shaking via esbuild
- ✅ IIFE format (no module loader overhead)

### Potential Future Improvements
1. **Reduce polyfills**: Target ES2020+ browsers only (drop core-js)
   - Would require Apache Annotator to publish an ES2020 build
   - Potential saving: ~78 KB (43% reduction)
   
2. **Code splitting**: Lazy-load sidebar UI on first interaction
   - Already partially addressed by #74 (lazy sidebar DOM creation)
   - Potential saving: ~18 KB on initial load

3. **Alternative anchoring**: Evaluate lighter text-anchoring alternatives
   - Would require replacing Apache Annotator
   - High risk, low priority

## How to Analyze

Generate a bundle size breakdown:

```bash
cd feedback-layer
npm run analyze
```

This runs esbuild with `--metafile=meta.json` and outputs the analysis.

## Recommendation

**No action needed.** The current bundle size (54 KB gzipped) is well within acceptable limits for a rich interactive widget. Further optimization should be driven by real-world performance metrics, not arbitrary size targets.
