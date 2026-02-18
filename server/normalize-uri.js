/**
 * Normalize a URI before storing or looking up documents.
 *
 * Rules applied in order:
 * 1. Lowercase scheme and host (URL constructor handles this)
 * 2. Upgrade http to https
 * 3. Remove trailing slash (except root path "/")
 * 4. Strip tracking params (utm_*, fbclid, gclid, etc.)
 * 5. Remove fragment
 * 6. Sort remaining query params
 */

const TRACKING_PARAMS = new Set([
  'fbclid', 'gclid', 'gbraid', 'wbraid', 'dclid', 'msclkid',
  'mc_eid', 'mc_cid',
  '_ga', '_gl',
  'igshid',
  'ref', 'referrer',
]);

function isTrackingParam(key) {
  const lower = key.toLowerCase();
  return lower.startsWith('utm_') || TRACKING_PARAMS.has(lower);
}

/**
 * @param {string} uri
 * @returns {string} normalized URI
 */
function normalizeUri(uri) {
  let url;
  try {
    url = new URL(uri);
  } catch {
    throw new Error(`Invalid URI: ${uri}`);
  }

  // 2. Upgrade to https
  url.protocol = 'https:';

  // 5. Remove fragment
  url.hash = '';

  // 4. Strip tracking params
  const toDelete = [];
  for (const key of url.searchParams.keys()) {
    if (isTrackingParam(key)) toDelete.push(key);
  }
  for (const key of toDelete) {
    url.searchParams.delete(key);
  }

  // 6. Sort remaining query params
  url.searchParams.sort();

  // Build normalized string
  let result = url.toString();

  // 3. Remove trailing slash from non-root paths
  // url.pathname may have trailing slash; strip it unless it's "/"
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    // Replace just the pathname portion
    const withoutSlash = url.pathname.slice(0, -1);
    result = result.replace(url.origin + url.pathname, url.origin + withoutSlash);
  }

  // Remove trailing "?" when no query params remain
  result = result.replace(/\?$/, '');

  return result;
}

module.exports = { normalizeUri };
