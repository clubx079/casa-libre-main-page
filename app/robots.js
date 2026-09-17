// robots.txt for the casa-libre.com hub: allow all crawlers and point them at
// the sitemap so Google/citation engines can discover the page.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://casa-libre.com/sitemap.xml',
    host: 'https://casa-libre.com',
  };
}
