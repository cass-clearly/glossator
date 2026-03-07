# CI Fix

**Purpose**: Automatically diagnose and fix the most recent CI failure.

## Steps

1. **Find the latest failed run**:
```bash
gh run list --limit 1 --json conclusion,databaseId --jq '.[] | select(.conclusion=="failure") | .databaseId'
```

2. **Get failure details** (first 200 lines of failed logs):
```bash
RUN_ID=$(gh run list --limit 1 --json conclusion,databaseId --jq '.[] | select(.conclusion=="failure") | .databaseId')
gh run view $RUN_ID --log-failed 2>&1 | head -200
```

3. **Categorize the failure**:
- **Lint**: ESLint, Prettier, RuboCop errors
- **Type**: TypeScript compilation errors
- **Test**: Jest, RSpec, or other test failures
- **Build**: Compilation, bundling, Docker build failures

4. **Attempt fixes based on category**:

**Lint failures**:
```bash
npm run lint:fix || bundle exec rubocop -A
```

**Type failures**:
- Read the specific error lines
- Fix type mismatches, missing properties, incorrect imports
- Run `npm run typecheck` or `tsc --noEmit` to verify

**Test failures**:
- Read the specific failing test
- Analyze the assertion/expectation
- Fix the underlying code or update the test if expectations changed
- Run `npm test -- <test-file>` or `bundle exec rspec <spec-file>` to verify

**Build failures**:
- Check for missing dependencies, incorrect paths, configuration issues
- Run `npm run build` locally to reproduce

5. **Verify locally**:
```bash
# Run the same check that failed in CI
npm run lint && npm run typecheck && npm test && npm run build
```

6. **Commit and push**:
```bash
git add -A
git commit -m "fix: resolve CI failure - <category>"
git push
```

7. **Retry limit**: Max 3 attempts. If still failing after 3 attempts, summarize what was tried and escalate to human.

## Output

After each attempt:
- What failed (category + specific error)
- What fix was attempted
- Whether it passed local verification
- Next steps (retry, escalate, or done)
