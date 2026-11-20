// Sitemap for the casa-libre.com umbrella hub: every public, indexable page.
//   the homepage (the country picker), /blog, its country pages (/blog/pais/<cc>), its category pages
//   (/blog/categoria/<cat>) and every article (/blog/<slug>).
// Not listed: /llamada (noindex) and /api. Each country site (casa-libre.com.py, uy.casa-libre.com, …) is a separate
// domain with its own sitemap: a sitemap may only list URLs on its own host.
// Languages: the ES/EN/PT buttons translate the same URL in the browser (the server renders Spanish), so there are
// no separate language URLs and no hreflang alternates to list.
// lastmod is the day the content changed (an article's dateModified; an index: its newest article), never the
// build time. Check against a running server: node scripts/check-sitemap.mjs [http://localhost:3150]
import { allPosts, activeCategories, activeCountries, postsInCategory, blogLastModified, HUB, BLOG_URL } from '@/lib/blog';
import { getHubGuides } from '@/lib/seoFeed';

// AI SEO guides (/guias, /guias/<slug>) come from the admin's feed (lib/seoFeed.js): listed only while the feed
// has guides. Rendered per request (cheap: the feed itself is cached 5 min, tag 'seo'), because Next 14 ignores
// revalidatePath/revalidateTag for cached route handlers: a static sitemap would miss a publish ping for 5 min.
export const dynamic = 'force-dynamic';

// The day the homepage copy last changed (app/page.js). The homepage also shows the newest articles, so its
// lastmod is the later of this and the blog's newest article.
const HOME_UPDATED = '2026-11-13';

export default async function sitemap() {
  const posts = allPosts();
  const guides = await getHubGuides();
  const guidesUpdated = guides.reduce((m, g) => ((g.updated || g.published) > m ? (g.updated || g.published) : m), '') || null;
  const later = (...d) => d.filter(Boolean).sort().pop();
  return [
    { url: HUB, lastModified: later(HOME_UPDATED, blogLastModified()), changeFrequency: 'weekly', priority: 1 },
    ...(posts.length ? [{ url: BLOG_URL, lastModified: blogLastModified(), changeFrequency: 'weekly', priority: 0.8 }] : []),
    ...activeCountries().map((c) => ({
      url: `${BLOG_URL}/pais/${c.code}`,
      lastModified: blogLastModified(allPosts(c.code)),
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
    ...activeCategories().map((c) => ({
      url: `${BLOG_URL}/categoria/${c.slug}`,
      lastModified: blogLastModified(postsInCategory(c.slug)),
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${BLOG_URL}/${p.slug}`,
      lastModified: p.dateModified || p.datePublished,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...(guides.length ? [{ url: `${HUB}/guias`, lastModified: guidesUpdated || undefined, changeFrequency: 'weekly', priority: 0.7 }] : []),
    ...guides.map((g) => ({
      url: `${HUB}/guias/${g.slug}`,
      ...(g.updated || g.published ? { lastModified: g.updated || g.published } : {}),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
