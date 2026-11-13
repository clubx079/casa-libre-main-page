// /blog/pais/<cc> — every article for one country, grouped by category, with a
// CTA to that country's Casa-Libre site. Countries without articles 404.
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogShell, { Arrow } from '@/components/blog/BlogShell';
import PostCard, { CountryPills } from '@/components/blog/PostCard';
import { allPosts, activeCategories, activeCountries, countryByCode, siteUrl, BLOG_URL, HUB, breadcrumbLd } from '@/lib/blog';

export const dynamicParams = false;
export function generateStaticParams() {
  return activeCountries().map((c) => ({ cc: c.code }));
}

export function generateMetadata({ params }) {
  const c = countryByCode(params.cc);
  if (!c || !allPosts(c.code).length) return {};
  const title = `Comprar, alquilar y vivir en ${c.name} | Blog de Casa-Libre`;
  const description = `Artículos prácticos para comprar, alquilar o vender una propiedad en ${c.name}: requisitos, créditos, costos, trámites y cómo elegir barrio.`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/pais/${c.code}` },
    openGraph: { title, description, type: 'website', url: `${BLOG_URL}/pais/${c.code}`, locale: c.locale.replace('-', '_'), siteName: 'Casa-Libre' },
    robots: { index: true, follow: true },
  };
}

export default function Page({ params }) {
  const c = countryByCode(params.cc);
  const posts = c ? allPosts(c.code) : [];
  if (!c || !posts.length) notFound();
  const url = `${BLOG_URL}/pais/${c.code}`;
  const cats = activeCategories(c.code);
  const vos = c.code === 'py' || c.code === 'uy';

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `Blog de Casa-Libre ${c.name}`,
      url,
      inLanguage: c.locale,
      about: { '@type': 'Country', name: c.name },
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
        <div className="flex items-center gap-3 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/flags/${c.code}.svg`} alt="" className="w-12 h-8 object-cover rounded-[5px] border border-ink/20" />
          <span className="font-mono text-[11px] tracking-label uppercase text-ink/50">{posts.length} artículos · {new URL(c.site).host}</span>
        </div>
        <h1 className="text-[clamp(32px,5vw,56px)] leading-[1] tracking-display font-bold mb-4">
          Comprar, alquilar y vivir en {c.name}, <span className="font-serif italic font-normal">sin vueltas.</span>
        </h1>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-ink/65 max-w-[680px] mb-8">
          Requisitos, créditos, costos, trámites y cómo elegir zona en {c.name}, con respuestas directas. Para ver propiedades o publicar, entrá a Casa-Libre {c.name}.
        </p>
        <div className="mb-10"><CountryPills countries={activeCountries()} current={c.code} /></div>

        {cats.map((cat) => (
          <section key={cat.slug} className="mb-14">
            <div className="flex items-baseline justify-between gap-4 mb-5 border-b border-ink/10 pb-3">
              <h2 className="text-[clamp(22px,3vw,30px)] font-bold tracking-display">{cat.name}</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.filter((p) => p.category === cat.slug).map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </section>
        ))}

        <section className="bg-ink text-paper rounded-section p-8 md:p-10">
          <h2 className="text-[clamp(24px,3.5vw,34px)] font-bold tracking-display mb-2">{vos ? 'Publicá' : 'Publica'} gratis en Casa-Libre {c.name}</h2>
          <p className="text-[15px] md:text-[16px] text-paper/70 mb-6 max-w-[640px]">Sin comisión. Casas, departamentos y terrenos de dueños e inmobiliarias en el mapa, con contacto directo por WhatsApp. En la web y en la app para iPhone y Android.</p>
          <div className="flex flex-wrap gap-3">
            <a href={siteUrl(c.code, '/propiedades', `blog-pais-${c.code}`)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-paper text-ink rounded-pill font-bold text-[15px]">Ver propiedades <Arrow /></a>
            <a href={siteUrl(c.code, '/publicar', `blog-pais-${c.code}`)} target="_blank" rel="noopener" className="inline-block px-6 py-3 border border-paper/40 text-paper rounded-pill font-semibold text-[15px]">Publicar gratis</a>
          </div>
        </section>
      </div>
    </BlogShell>
  );
}
