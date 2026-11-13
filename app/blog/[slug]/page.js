// /blog/<slug> — one article. Metadata + Article, FAQPage and BreadcrumbList
// JSON-LD mirror what is visible on the page (answer, FAQ, author, dates), with
// inLanguage es-<CC> and areaServed set to the article's country.
import { notFound } from 'next/navigation';
import BlogShell from '@/components/blog/BlogShell';
import BlogArticle from '@/components/blog/BlogArticle';
import { getPost, postSlugs, relatedPosts, CATEGORIES, COUNTRIES, BLOG_URL, HUB, breadcrumbLd } from '@/lib/blog';

// Only the registered slugs exist; anything else is a real 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  const c = COUNTRIES[p.country];
  const url = `${BLOG_URL}/${p.slug}`;
  return {
    title: `${p.title} | Blog de Casa-Libre`,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    authors: [{ name: p.author }],
    keywords: p.tags,
    openGraph: {
      title: p.title,
      description: p.description,
      type: 'article',
      url,
      locale: c.locale.replace('-', '_'),
      siteName: 'Casa-Libre',
      publishedTime: p.datePublished,
      modifiedTime: p.dateModified,
      authors: [p.author],
      section: CATEGORIES[p.category]?.name,
      tags: p.tags,
    },
    twitter: { card: 'summary_large_image', title: p.title, description: p.description },
    robots: { index: true, follow: true },
  };
}

export default function Page({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const c = COUNTRIES[p.country];
  const url = `${BLOG_URL}/${p.slug}`;
  const cat = CATEGORIES[p.category];
  const area = { '@type': 'Country', name: c.name };

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: p.h1,
      description: p.description,
      inLanguage: c.locale,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
      wordCount: p.words,
      articleSection: cat?.name,
      keywords: p.tags.join(', '),
      about: area,
      spatialCoverage: area,
      author: { '@type': 'Organization', name: p.author, url: BLOG_URL },
      publisher: {
        '@type': 'Organization',
        name: 'Casa-Libre',
        url: HUB,
        logo: { '@type': 'ImageObject', url: `${HUB}/favicon.png` },
        areaServed: area,
      },
      ...(p.sources.length ? { citation: p.sources.map((s) => ({ '@type': 'CreativeWork', name: s.name, url: s.url })) } : {}),
    },
    ...(p.faq.length ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: c.locale,
      url,
      mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }] : []),
    breadcrumbLd([
      { name: 'Casa-Libre', url: HUB },
      { name: 'Blog', url: BLOG_URL },
      { name: c.name, url: `${BLOG_URL}/pais/${p.country}` },
      ...(cat ? [{ name: cat.name, url: `${BLOG_URL}/categoria/${p.category}` }] : []),
      { name: p.h1, url },
    ]),
  ];

  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <BlogArticle post={p} related={relatedPosts(p, 3)} />
    </BlogShell>
  );
}
