// /blog/categoria/<cat> — one hub per category, across countries, with its own
// intro. Categories without articles 404 (no empty, thin pages).
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogShell, { Arrow } from '@/components/blog/BlogShell';
import PostCard, { CategoryPills } from '@/components/blog/PostCard';
import { categoryBySlug, postsInCategory, activeCategories, BLOG_URL, HUB, breadcrumbLd } from '@/lib/blog';

export const dynamicParams = false;
export function generateStaticParams() {
  return activeCategories().map((c) => ({ cat: c.slug }));
}

export function generateMetadata({ params }) {
  const c = categoryBySlug(params.cat);
  if (!c || !postsInCategory(params.cat).length) return {};
  const title = `${c.title} | Blog de Casa-Libre`;
  return {
    title,
    description: c.intro,
    alternates: { canonical: `/blog/categoria/${c.slug}` },
    openGraph: { title, description: c.intro, type: 'website', url: `${BLOG_URL}/categoria/${c.slug}`, siteName: 'Casa-Libre' },
    robots: { index: true, follow: true },
  };
}

export default function Page({ params }) {
  const c = categoryBySlug(params.cat);
  const posts = c ? postsInCategory(params.cat) : [];
  if (!c || !posts.length) notFound();
  const url = `${BLOG_URL}/categoria/${c.slug}`;

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: c.title,
      description: c.intro,
      url,
      inLanguage: 'es',
      hasPart: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.h1, url: `${BLOG_URL}/${p.slug}`, datePublished: p.datePublished, dateModified: p.dateModified })),
    },
    breadcrumbLd([
      { name: 'Casa-Libre', url: HUB },
      { name: 'Blog', url: BLOG_URL },
      { name: c.name, url },
    ]),
  ];

  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="max-w-[1200px] mx-auto px-5 md:px-11 pt-12">
        <nav aria-label="Ruta" className="text-[13px] text-ink/50 mb-4">
          <Link href="/blog" className="underline decoration-ink/25 hover:decoration-ink">Blog</Link>
          <span className="mx-2">·</span>
          <span>{c.name}</span>
        </nav>
        <div className="font-mono text-[11px] tracking-label uppercase text-ink/50 mb-3">Tema · {posts.length} artículos</div>
        <h1 className="text-[clamp(32px,5vw,56px)] leading-[1] tracking-display font-bold mb-4">{c.title}</h1>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-ink/65 max-w-[680px] mb-8">{c.intro}</p>
        <div className="mb-10"><CategoryPills categories={activeCategories()} current={c.slug} /></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
        <div className="mt-12">
          <Link href="/blog" className="btn btn-ghost">Todos los artículos <Arrow /></Link>
        </div>
      </div>
    </BlogShell>
  );
}
