# Explore Project

**Purpose**: Get a comprehensive overview of the current project state, stack, and activity.

## Steps

1. **Show project structure** (2 levels deep, excluding build artifacts):
```bash
tree -L 2 --dirsfirst -I 'node_modules|.git|dist|coverage|.next'
```

2. **Identify the stack** by reading key config files:
```bash
cat package.json 2>/dev/null | jq -r '.name, .scripts, .dependencies, .devDependencies' 2>/dev/null || cat package.json
[ -f tsconfig.json ] && echo "=== TypeScript Config ===" && cat tsconfig.json
[ -f Gemfile ] && echo "=== Ruby Gems ===" && cat Gemfile
[ -f docker-compose.yml ] && echo "=== Docker Compose ===" && cat docker-compose.yml
```

3. **Recent git activity** (last 10 commits):
```bash
git log --oneline -10
```

4. **Current working state**:
```bash
git status
```

5. **Open PRs**:
```bash
gh pr list --state open
```

6. **Recent CI runs** (last 3):
```bash
gh run list --limit 3
```

## Output

Synthesize all of the above into a concise report covering:
- Project structure highlights (main directories, monorepo layout if applicable)
- Tech stack (languages, frameworks, key dependencies)
- Recent development activity (what's been worked on)
- Current state (clean/dirty, branch, uncommitted changes)
- Open PRs (count, titles, status)
- CI health (passing/failing, recent trends)

Keep it under 200 words unless something critical needs attention.
