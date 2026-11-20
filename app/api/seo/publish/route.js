// POST /api/seo/publish (Bearer SEO_PUBLISH_SECRET), body { paths: ['/guias/<slug>', …] }: the Casa-Libre admin
// calls it after a pipeline run. Drops the cached AI SEO feed (tag 'seo': every page that read it regenerates on its
// next visit) and revalidates the given paths, /guias, the home page (its footer "Guías" link), /sitemap.xml and
// /llms.txt.  -> { ok: true }
import { revalidatePath, revalidateTag } from 'next/cache';
import { internalPath } from '@/lib/seoFeedClean';
import { SEO_TAG } from '@/lib/seoFeed';
import { authorized, unauthorized } from '@/lib/seoAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  if (!authorized(request)) return unauthorized();
  let body = {};
  try { body = await request.json(); } catch { body = {}; }
  const given = (Array.isArray(body?.paths) ? body.paths.slice(0, 200) : []).map(internalPath).filter(Boolean).map((p) => p.split('#')[0]);
  const paths = [...new Set([...given, '/', '/guias', '/sitemap.xml', '/llms.txt'])];
  try {
    revalidateTag(SEO_TAG);
    for (const p of paths) revalidatePath(p);
  } catch (e) {
    console.warn('[seo-publish] revalidate failed:', e?.message || e);
    return Response.json({ ok: false, error: 'revalidate failed' }, { status: 500, headers: { 'cache-control': 'no-store' } });
  }
  return Response.json({ ok: true, revalidated: paths }, { headers: { 'cache-control': 'no-store' } });
}
