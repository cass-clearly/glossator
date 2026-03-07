# Worktree Create

**Purpose**: Create a git worktree for parallel work on a branch or PR.

**Usage**: 
- `/worktree-create <branch-name>` - Create worktree for a branch
- `/worktree-create pr/<number>` - Create worktree for a PR (e.g., `pr/123`)

## Steps

1. **Parse input**:
```bash
INPUT="$1"

if [[ "$INPUT" =~ ^pr/([0-9]+)$ ]]; then
  PR_NUMBER="${BASH_REMATCH[1]}"
  BRANCH_NAME=$(gh pr view "$PR_NUMBER" --json headRefName --jq '.headRefName')
  WORKTREE_NAME="pr-${PR_NUMBER}"
else
  BRANCH_NAME="$INPUT"
  WORKTREE_NAME="$INPUT"
fi
```

2. **Fetch the branch** (if it's remote):
```bash
git fetch origin "$BRANCH_NAME" || true
```

3. **Create worktree directory**:
```bash
mkdir -p .claude/worktrees
WORKTREE_PATH=".claude/worktrees/${WORKTREE_NAME}"
```

4. **Create the worktree**:
```bash
# If branch exists remotely, check it out
if git show-ref --verify --quiet "refs/remotes/origin/$BRANCH_NAME"; then
  git worktree add "$WORKTREE_PATH" "origin/$BRANCH_NAME"
else
  # Create new branch in the worktree
  git worktree add -b "$BRANCH_NAME" "$WORKTREE_PATH"
fi
```

5. **Set up the worktree** (install dependencies if needed):
```bash
cd "$WORKTREE_PATH"

# Node.js project
if [ -f package.json ]; then
  echo "Installing npm dependencies..."
  npm install
fi

# Ruby project
if [ -f Gemfile ]; then
  echo "Installing gems..."
  bundle install
fi
```

6. **Report worktree location**:
```bash
echo "Worktree created at: $(pwd)"
git status
```

## Output

Confirm:
- Worktree path created
- Branch checked out
- Dependencies installed (if applicable)
- Ready to work in the new worktree

**Note**: To remove a worktree later, use:
```bash
git worktree remove .claude/worktrees/<name>
```

Or list all worktrees:
```bash
git worktree list
```
