# @csalvato/remarq-cli

CLI for the [Remarq](https://github.com/csalvato/remarq) document annotation API.

## Install

```bash
cd cli
npm install
npm link
```

## Configuration

Set the API base URL via environment variable:

```bash
export REMARQ_URL=http://localhost:3333
```

Or pass it per-command:

```bash
remarq --url http://localhost:3333 health
```

## Usage

### Health check

```bash
remarq health
```

### Documents

```bash
remarq documents list
remarq documents create https://example.com/page
remarq documents get <id>
remarq documents delete <id>
```

### Comments

```bash
remarq comments list [--document <id>] [--uri <url>] [--status open|closed]
remarq comments get <id>
remarq comments create --uri <url> --quote "text" --author "name" --body "text" [--color yellow]
remarq comments reply <parent-id> --author "name" --body "text"
remarq comments resolve <id>
remarq comments reopen <id>
remarq comments update <id> --body "new text"
remarq comments delete <id>
```

### Reactions

```bash
remarq reactions add <comment-id> --emoji "👍" --author "name"
remarq reactions remove <comment-id> --emoji "👍" --author "name"
```

### Global flags

| Flag     | Description                          |
|----------|--------------------------------------|
| `--url`  | API base URL (overrides `REMARQ_URL`) |
| `--json` | Output raw JSON instead of text      |
| `--help` | Show help                            |

## Testing

```bash
npm test
```
