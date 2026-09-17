// Sitemap for the casa-libre.com umbrella hub. It's a single-page site (the
// country picker), so the sitemap lists just the homepage. Each country site
// (casa-libre.com.py, uy.casa-libre.com, …) is a separate domain with its own
// sitemap — a sitemap may only list URLs on its own host.
export default function sitemap() {
  return [
    {
      url: 'https://casa-libre.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
