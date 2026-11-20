// The AI SEO feed of the casa-libre.com hub: guides written by the Casa-Libre admin's SEO pipeline (scope
// 'site:hub'), shown at /guias and /guias/<slug>, plus title/H1/description/extra-link overrides for them.
// Server side only.
//
//   GET ${SEO_ADMIN_URL}/api/seo-sites/feed?site=casa-libre.com   Authorization: Bearer ${SEO_PUBLISH_SECRET}
//
// Never throws and never slows a page down for long: 4 s timeout, cached 5 min (tag 'seo', dropped by
// POST /api/seo/publish). On any error the last good copy is used (in memory, and on disk in
// .next/cache/seo-feed-last-good.json so it survives a restart while the admin is down), or the empty feed; after
// an error the admin is not asked again for 60 s, so pages never wait on a dead admin over and over. Without the two env vars the feed is always empty: no
// /guias, nothing new in the sitemap or llms.txt, the hub is exactly what it was. Everything in the feed is
// cleaned by lib/seoFeedClean.js before use.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { unstable_cache } from 'next/cache';
import { cleanFeed, applyFeed, EMPTY_FEED } from './seoFeedClean';

export const SEO_TAG = 'seo';
export const HUB_DOMAIN = 'casa-libre.com';
const TIMEOUT_MS = 4000;
const MAX_BYTES = 5 * 1024 * 1024;

export const feedConfigured = () => Boolean(process.env.SEO_ADMIN_URL && process.env.SEO_PUBLISH_SECRET);

async function fetchFeed() {
  const base = String(process.env.SEO_ADMIN_URL).replace(/\/+$/, '');
  const url = `${base}/api/seo-sites/feed?site=${encodeURIComponent(HUB_DOMAIN)}`;
  const res = await fetch(url, {
    headers: { authorization: `Bearer ${process.env.SEO_PUBLISH_SECRET}`, accept: 'application/json' },
    // Next 14: a 'no-store' fetch inside unstable_cache makes a static/ISR page bail out to dynamic, so the inner
    // fetch shares the outer cache's lifetime and tag instead (Next caches only res.ok responses).
    next: { revalidate: 300, tags: [SEO_TAG] },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status !== 200) throw new Error(`seo feed: HTTP ${res.status}`);
  const text = await res.text();
  if (text.length > MAX_BYTES) throw new Error('seo feed: too large');
  return cleanFeed(JSON.parse(text), { domain: HUB_DOMAIN }); // a throw above keeps an error out of the cache
}

const cachedFeed = unstable_cache(fetchFeed, ['seo-feed', HUB_DOMAIN], { revalidate: 300, tags: [SEO_TAG] });

let lastGood = null;
let lastGoodJson = '';
let failedAt = 0;
const RETRY_AFTER_MS = 60 * 1000;
const DISK_COPY = join(process.cwd(), '.next', 'cache', 'seo-feed-last-good.json');

function saveCopy(feed) {
  try {
    const json = JSON.stringify(feed);
    if (json === lastGoodJson) return;
    lastGoodJson = json;
    mkdirSync(dirname(DISK_COPY), { recursive: true });
    writeFileSync(DISK_COPY, json);
  } catch { /* read-only disk: the memory copy is enough */ }
}

function loadCopy() {
  try {
    const feed = cleanFeed(JSON.parse(readFileSync(DISK_COPY, 'utf8')), { domain: HUB_DOMAIN }); // re-cleaned: never trusted
    return feed.guides.length || feed.overrides.length ? feed : null;
  } catch { return null; }
}

const isNextControlError = (e) => {
  const d = typeof e?.digest === 'string' ? e.digest : '';
  return d === 'DYNAMIC_SERVER_USAGE' || d.startsWith('NEXT_') || e?.code === 'NEXT_STATIC_GEN_BAILOUT';
};

/** The cleaned feed: { updatedAt, guides, overrides }. Never throws. */
export async function getSeoFeed() {
  if (!feedConfigured()) return EMPTY_FEED;
  const fallback = () => {
    if (!lastGood) lastGood = loadCopy();
    return lastGood || EMPTY_FEED;
  };
  if (failedAt && Date.now() - failedAt < RETRY_AFTER_MS) return fallback();
  try {
    const feed = await cachedFeed();
    if (feed && Array.isArray(feed.guides) && Array.isArray(feed.overrides)) {
      failedAt = 0;
      lastGood = feed;
      saveCopy(feed);
      return feed;
    }
  } catch (e) {
    if (isNextControlError(e)) throw e; // Next's own render signals (dynamic bailout, notFound…) must pass through
    failedAt = Date.now();
    console.warn('[seo-feed] using the last good copy:', e?.name === 'TimeoutError' ? 'timeout' : e?.message || e);
  }
  return fallback();
}

/** The hub's guides (overrides applied, newest first). Never throws; [] without the feed. */
export async function getHubGuides() {
  try {
    return applyFeed(await getSeoFeed(), { extraPaths: ['/', '/guias', '/blog'] });
  } catch (e) {
    if (isNextControlError(e)) throw e;
    console.warn('[seo-feed] guides unavailable:', e?.message || e);
    return [];
  }
}

export async function getHubGuide(slug) {
  return (await getHubGuides()).find((g) => g.slug === slug) || null;
}
