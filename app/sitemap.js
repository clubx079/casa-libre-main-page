// Sitemap for the casa-libre.com umbrella hub: the homepage (the country picker)
// plus the blog (/blog, its articles, category and country pages). Each country
// site (casa-libre.com.py, uy.casa-libre.com, …) is a separate domain with its own
// sitemap — a sitemap may only list URLs on its own host.
import { allPosts, activeCategories, activeCountries, postsInCategory, blogLastModified, BLOG_URL } from '@/lib/blog';

export default function sitemap() {
  const posts = allPosts();
  const day = (iso) => (iso ? new Date(`${iso}T00:00:00Z`) : new Date());
  return [
    {
      url: 'https://casa-libre.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...(posts.length ? [{ url: BLOG_URL, lastModified: day(blogLastModified()), changeFrequency: 'weekly', priority: 0.8 }] : []),
    ...activeCountries().map((c) => ({
      url: `${BLOG_URL}/pais/${c.code}`,
      lastModified: day(blogLastModified(allPosts(c.code))),
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
    ...activeCategories().map((c) => ({
      url: `${BLOG_URL}/categoria/${c.slug}`,
      lastModified: day(blogLastModified(postsInCategory(c.slug))),
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${BLOG_URL}/${p.slug}`,
      lastModified: day(p.dateModified),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
