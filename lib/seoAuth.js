// Bearer check for the AI SEO routes (/api/seo/catalog, /api/seo/publish). Server side only.
// The secret is SEO_PUBLISH_SECRET, the same value in the Casa-Libre admin and every SEO site. No secret set =
// every request is refused.
import { timingSafeEqual, createHash } from 'node:crypto';

const digest = (s) => createHash('sha256').update(String(s)).digest();

export function authorized(request) {
  const secret = process.env.SEO_PUBLISH_SECRET;
  if (!secret) return false;
  const m = /^Bearer\s+(.+)$/i.exec(request.headers.get('authorization') || '');
  if (!m) return false;
  return timingSafeEqual(digest(m[1].trim()), digest(secret));
}

export const unauthorized = () => Response.json({ error: 'unauthorized' }, { status: 401, headers: { 'cache-control': 'no-store' } });
