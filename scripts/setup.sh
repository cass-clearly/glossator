#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

ADMIN_USER="admin"
ADMIN_EMAIL="admin@localhost"
ADMIN_PASSWORD="hypothesis"

echo "=== Hypothesis Self-Hosted Setup ==="
echo ""

# Step 1: Clone h if not present
if [ ! -d "h" ]; then
  echo ">>> Cloning hypothesis/h repository..."
  git clone --depth 1 https://github.com/hypothesis/h.git h
else
  echo ">>> h/ directory already exists, skipping clone."
fi

# Step 2: Generate secrets in .env if still using defaults
if grep -q "change-me" .env 2>/dev/null; then
  echo ">>> Generating random secrets in .env..."
  SECRET_KEY=$(openssl rand -hex 32)
  COOKIE_SECRET=$(openssl rand -hex 32)
  COOKIE_SALT=$(openssl rand -hex 16)

  sed -i "s/change-me-to-a-random-secret-key/$SECRET_KEY/" .env
  sed -i "s/change-me-to-a-random-cookie-secret/$COOKIE_SECRET/" .env
  sed -i "s/change-me-to-a-random-salt/$COOKIE_SALT/" .env
  echo "    Secrets generated."
fi

# Step 3: Build the h Docker image
echo ""
echo ">>> Building Docker images (this may take several minutes)..."
docker compose build

# Step 4: Start backing services
echo ""
echo ">>> Starting backing services (postgres, elasticsearch, rabbit)..."
docker compose up -d postgres elasticsearch rabbit

# Step 5: Wait for services to be healthy
echo ">>> Waiting for backing services to be healthy..."
MAX_WAIT=120
ELAPSED=0
while [ $ELAPSED -lt $MAX_WAIT ]; do
  PG_HEALTHY=$(docker compose ps postgres --format json 2>/dev/null | grep -c '"healthy"' || true)
  ES_HEALTHY=$(docker compose ps elasticsearch --format json 2>/dev/null | grep -c '"healthy"' || true)
  RB_HEALTHY=$(docker compose ps rabbit --format json 2>/dev/null | grep -c '"healthy"' || true)

  if [ "$PG_HEALTHY" -ge 1 ] && [ "$ES_HEALTHY" -ge 1 ] && [ "$RB_HEALTHY" -ge 1 ]; then
    echo "    All backing services are healthy."
    break
  fi

  sleep 5
  ELAPSED=$((ELAPSED + 5))
  echo "    Waiting... (${ELAPSED}s / ${MAX_WAIT}s)"
done

if [ $ELAPSED -ge $MAX_WAIT ]; then
  echo "WARNING: Timed out waiting for services. Check 'docker compose ps' for status."
  echo "Continuing anyway..."
fi

# Step 6: Start h
echo ""
echo ">>> Starting h application..."
docker compose up -d h

echo ">>> Waiting for h to start..."
sleep 10

# Step 7: Initialize the database
echo ""
echo ">>> Initializing the database..."
docker compose exec h python3 -m h.scripts.init_db --create --stamp

# Step 7b: Initialize the Elasticsearch index
echo ""
echo ">>> Initializing the Elasticsearch index..."
docker compose exec h python3 -m h.scripts.init_elasticsearch conf/production.ini

# Step 8: Create admin user
echo ""
echo ">>> Creating admin user (${ADMIN_USER})..."
docker compose exec h hypothesis user add \
  --username "$ADMIN_USER" \
  --email "$ADMIN_EMAIL" \
  --password "$ADMIN_PASSWORD" || echo "    User may already exist, continuing..."

echo ">>> Granting admin privileges..."
docker compose exec h hypothesis user admin "$ADMIN_USER" || echo "    May already be admin, continuing..."

# Step 9: Verify
echo ""
echo ">>> Verifying API is running..."
sleep 5
if curl -sf http://localhost:5000/api/ > /dev/null 2>&1; then
  echo "    API is responding at http://localhost:5000/api/"
else
  echo "    WARNING: API not responding yet. It may still be starting up."
  echo "    Try: curl http://localhost:5000/api/"
fi

echo ""
echo "=== Setup Complete ==="
echo ""
echo "  Hypothesis is running at: http://localhost:5000"
echo "  Admin login:              http://localhost:5000/login"
echo "    Username: ${ADMIN_USER}"
echo "    Password: ${ADMIN_PASSWORD}"
echo ""
echo "  Next steps:"
echo "    1. Log in at http://localhost:5000/login"
echo "    2. Generate an API token at http://localhost:5000/account/developer"
echo "    3. Use the token to configure the feedback layer"
echo ""
echo "  RabbitMQ management: http://localhost:15672 (guest/guest)"
echo ""
