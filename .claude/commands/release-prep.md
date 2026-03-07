# Release Prep

**Purpose**: Prepare a release branch with version bumps and changelog updates.

**Usage**: `/release-prep vX.Y.Z` (e.g., `/release-prep v1.2.0`)

## Steps

1. **Fetch latest main**:
```bash
git fetch origin main
git checkout main
git pull origin main
```

2. **Create release branch**:
```bash
VERSION="$1"  # e.g., v1.2.0
git checkout -b "release/${VERSION}"
```

3. **Bump version in all package.json files**:
```bash
VERSION_NUMBER="${VERSION#v}"  # Strip the 'v' prefix

# Root package.json
jq ".version = \"$VERSION_NUMBER\"" package.json > package.json.tmp && mv package.json.tmp package.json

# Feedback layer
if [ -f feedback-layer/package.json ]; then
  jq ".version = \"$VERSION_NUMBER\"" feedback-layer/package.json > feedback-layer/package.json.tmp && mv feedback-layer/package.json.tmp feedback-layer/package.json
fi

# Server
if [ -f server/package.json ]; then
  jq ".version = \"$VERSION_NUMBER\"" server/package.json > server/package.json.tmp && mv server/package.json.tmp server/package.json
fi
```

4. **Update CHANGELOG.md header**:
```bash
# Insert new version header at the top of the changelog
DATE=$(date +%Y-%m-%d)
sed -i "1i## [${VERSION}] - ${DATE}\n" CHANGELOG.md
```

5. **Commit changes**:
```bash
git add package.json feedback-layer/package.json server/package.json CHANGELOG.md
git commit -m "chore: bump version to ${VERSION}"
```

6. **Push branch**:
```bash
git push origin "release/${VERSION}"
```

7. **Create PR**:
```bash
gh pr create \
  --base main \
  --head "release/${VERSION}" \
  --title "Release ${VERSION}" \
  --body "Automated release preparation for ${VERSION}.

**Changes**:
- Bumped version in all package.json files
- Updated CHANGELOG.md with release date

**Checklist**:
- [ ] All tests passing
- [ ] Changelog entries reviewed
- [ ] Version number correct
- [ ] Ready to merge and tag"
```

## Output

Confirm:
- Version bumped in all locations
- CHANGELOG updated
- Branch pushed
- PR created with link
