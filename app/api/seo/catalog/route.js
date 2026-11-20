// GET /api/seo/catalog (Bearer SEO_PUBLISH_SECRET): the hub's STATIC pages that could cover a topic, for the
// Casa-Libre admin's SEO pipeline to judge coverage. The hub has no static guides; its static long-form pages are the
// blog articles (/blog/<slug>, one country each), listed so the pipeline does not write a /guias page that repeats an
// article already on casa-libre.com. Feed guides are not listed (the admin has them).
//   -> { site: 'casa-libre.com', guides: [{ cc, slug, path, title, h1, group }] }
import { allPosts } from '@/lib/blog';
import { HUB_DOMAIN } from '@/lib/seoFeed';
import { authorized, unauthorized } from '@/lib/seoAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  if (!authorized(request)) return unauthorized();
  const guides = allPosts().map((p) => ({ cc: p.country, slug: p.slug, path: `/blog/${p.slug}`, title: p.title || '', h1: p.h1 || '', group: 'Blog' }));
  return Response.json({ site: HUB_DOMAIN, guides }, { headers: { 'cache-control': 'no-store' } });
}
