// /guias/<slug> — one guide from the Casa-Libre admin's AI SEO pipeline (lib/seoFeed.js). Rendered on demand and
// cached 5 min (revalidated at once by POST /api/seo/publish). A slug the feed does not have is a real 404; without
// SEO_ADMIN_URL / SEO_PUBLISH_SECRET every slug 404s. JSON-LD (Article, FAQPage, BreadcrumbList) mirrors what is
// visible and is escaped (lib/seoFeedClean.js jsonLd: `<` becomes <).
import { notFound } from 'next/navigation';
import BlogShell from '@/components/blog/BlogShell';
import GuideArticle from '@/components/guias/GuideArticle';
import { getHubGuides, getHubGuide } from '@/lib/seoFeed';
import { cleanText, jsonLd, guidePath } from '@/lib/seoFeedClean';
import { COUNTRIES, HUB } from '@/lib/blog-meta';

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getHubGuides()).map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const g = await getHubGuide(params.slug);
  if (!g) return {};
  const url = `${HUB}${guidePath(g.slug)}`;
  const description = g.description || g.answer.slice(0, 160);
  return {
    title: `${g.title} | Guías de Casa-Libre`,
    description,
    alternates: { canonical: guidePath(g.slug) },
    openGraph: {
      title: g.title, description, type: 'article', url, siteName: 'Casa-Libre', locale: 'es_419',
      ...(g.published ? { publishedTime: g.published } : {}),
      ...(g.updated ? { modifiedTime: g.updated } : {}),
    },
    twitter: { card: 'summary_large_image', title: g.title, description },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }) {
  const guides = await getHubGuides();
  const g = guides.find((x) => x.slug === params.slug);
  if (!g) notFound();
  const url = `${HUB}${guidePath(g.slug)}`;
  const area = g.cc ? { '@type': 'Country', name: COUNTRIES[g.cc].name } : { '@type': 'Place', name: 'Sudamérica' };
  const related = g.related.map((s) => guides.find((x) => x.slug === s)).filter(Boolean).slice(0, 6);

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: g.h1,
      description: g.description || g.answer,
      inLanguage: 'es',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
      ...(g.published ? { datePublished: g.published } : {}),
      ...(g.updated ? { dateModified: g.updated } : {}),
      about: area,
      author: { '@type': 'Organization', name: 'Equipo editorial de Casa-Libre', url: `${HUB}/guias` },
      publisher: { '@type': 'Organization', name: 'Casa-Libre', url: HUB, logo: { '@type': 'ImageObject', url: `${HUB}/favicon.png` } },
    },
    ...(g.faq.length ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      url,
      mainEntity: g.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: cleanText(f.a, 2000) } })),
    }] : []),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Casa-Libre', item: HUB },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: `${HUB}/guias` },
        { '@type': 'ListItem', position: 3, name: g.h1, item: url },
      ],
    },
  ];

  return (
    <BlogShell section="guias">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ld) }} />
      <GuideArticle guide={g} related={related} />
    </BlogShell>
  );
}
