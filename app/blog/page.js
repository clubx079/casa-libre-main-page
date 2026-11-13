// /blog — the Casa-Libre blog on the casa-libre.com hub: featured articles, a
// country filter (only countries with articles), category filters and the full
// list grouped by category. Server HTML is Spanish; the ES/EN/PT pills in the
// header swap the labels and card text on the client (components/blog/BlogLang.js).
import Link from 'next/link';
import BlogShell, { Arrow } from '@/components/blog/BlogShell';
import PostCard, { CategoryPills, CountryPills } from '@/components/blog/PostCard';
import { T } from '@/components/blog/BlogLang';
import { CatText } from '@/components/blog/BlogCards';
import { allPosts, featuredPosts, activeCategories, activeCountries, BLOG_AUTHOR, BLOG_URL, HUB, breadcrumbLd, siteUrl } from '@/lib/blog';

const title = 'Blog de Casa-Libre: comprar, alquilar y vivir en Sudamérica';
const description = 'Artículos prácticos para comprar, alquilar o vender una propiedad en Sudamérica: requisitos, créditos, costos, trámites y cómo elegir barrio, país por país.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  openGraph: { title, description, type: 'website', url: BLOG_URL, locale: 'es_419', siteName: 'Casa-Libre' },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

export default function Page() {
  const posts = allPosts();
  const cats = activeCategories();
  const countries = activeCountries();
  const featured = featuredPosts(3);
  const featuredSlugs = new Set(featured.map((p) => p.slug));
  const rest = posts.filter((p) => !featuredSlugs.has(p.slug));
  const single = countries.length === 1 ? countries[0] : null;

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog de Casa-Libre',
      url: BLOG_URL,
      inLanguage: 'es',
      description,
      publisher: { '@type': 'Organization', name: 'Casa-Libre', url: HUB, logo: `${HUB}/favicon.png` },
      blogPost: posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.h1,
        url: `${BLOG_URL}/${p.slug}`,
        datePublished: p.datePublished,
        dateModified: p.dateModified,
        author: { '@type': 'Organization', name: BLOG_AUTHOR },
      })),
    },
    breadcrumbLd([{ name: 'Casa-Libre', url: HUB }, { name: 'Blog', url: BLOG_URL }]),
  ];

  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="max-w-[1200px] mx-auto px-5 md:px-11 pt-12 md:pt-16 pb-4 grid md:grid-cols-[1.3fr_.7fr] gap-8 items-center">
        <div>
          <div className="font-mono text-[11px] tracking-label uppercase text-ink/50 mb-4"><T k="indexEyebrow" v={{ n: posts.length }} /></div>
          <h1 className="text-[clamp(36px,5.6vw,68px)] leading-[0.98] tracking-display font-bold">
            <T k="indexH1A" /> <span className="font-serif italic font-normal"><T k="noFrills" /></span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink/65 mt-5 max-w-[620px] leading-relaxed">
            <T k="indexSub" />
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mascot.png" alt="Casa-Libre" className="cl-float w-[78%] max-w-[300px] object-contain drop-shadow-[6px_6px_0_rgba(17,17,17,0.12)]" />
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 md:px-11">
        {!posts.length ? (
          <div className="bg-card border-[1.5px] border-ink rounded-card p-8 max-w-[640px] shadow-hard-sm mt-8">
            <h2 className="text-[22px] font-bold tracking-head mb-2"><T k="emptyTitle" /></h2>
            <p className="text-[15.5px] text-ink/65 leading-relaxed"><T k="emptyText" /></p>
            <Link href="/#map" className="btn btn-solid mt-5"><T k="seeCountries" /> <Arrow /></Link>
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-3">
              <div className="font-mono text-[10.5px] uppercase tracking-label text-ink/45"><T k="filterCountry" /></div>
              <CountryPills countries={countries} />
              <div className="font-mono text-[10.5px] uppercase tracking-label text-ink/45 pt-3"><T k="filterTopic" /></div>
              <CategoryPills categories={cats} />
            </div>

            <h2 className="font-mono text-[11px] uppercase tracking-label text-ink/50 mt-12 mb-4"><T k="featured" /></h2>
            <div className="grid gap-5 md:grid-cols-3 mb-14">
              {featured.map((p) => <PostCard key={p.slug} post={p} big />)}
            </div>

            {cats.map((c) => {
              const list = rest.filter((p) => p.category === c.slug);
              if (!list.length) return null;
              return (
                <section key={c.slug} className="mb-14">
                  <div className="flex items-baseline justify-between gap-4 mb-5 border-b border-ink/10 pb-3">
                    <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-display"><CatText slug={c.slug} /></h2>
                    <Link href={`/blog/categoria/${c.slug}`} className="inline-flex items-center gap-1.5 text-[14px] font-bold shrink-0"><T k="seeAll" /> <Arrow /></Link>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {list.map((p) => <PostCard key={p.slug} post={p} />)}
                  </div>
                </section>
              );
            })}
          </>
        )}

        <section className="bg-ink text-paper rounded-section p-8 md:p-10 mt-4">
          <h2 className="text-[clamp(24px,3.5vw,34px)] font-bold tracking-display mb-2">
            <T k="indexCtaA" /> <span className="font-serif italic font-normal"><T k="noCommission" /></span>
          </h2>
          <p className="text-[15px] md:text-[16px] text-paper/70 mb-6 max-w-[640px]">
            <T k="indexCtaText" />
          </p>
          {single ? (
            <div className="flex flex-wrap gap-3">
              <a href={siteUrl(single.code, '/publicar', 'blog-index')} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-paper text-ink rounded-pill font-bold text-[15px]"><T k="publishFreeIn" v={{ cc: single.code }} /> <Arrow /></a>
              <a href={siteUrl(single.code, '/propiedades', 'blog-index')} target="_blank" rel="noopener" className="inline-block px-6 py-3 border border-paper/40 text-paper rounded-pill font-semibold text-[15px]"><T k="seeProperties" /></a>
            </div>
          ) : (
            <Link href="/#map" className="inline-flex items-center gap-2 px-6 py-3 bg-paper text-ink rounded-pill font-bold text-[15px]"><T k="chooseCountry" /> <Arrow /></Link>
          )}
        </section>
      </div>
    </BlogShell>
  );
}
