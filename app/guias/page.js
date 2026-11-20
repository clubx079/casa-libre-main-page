// /guias — the guides written by the Casa-Libre admin's AI SEO pipeline (lib/seoFeed.js), in the hub's design.
// Exists only while the feed has at least one guide (otherwise 404, like before the pipeline); cached 5 min and
// revalidated at once by POST /api/seo/publish. Spanish only.
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogShell, { Arrow } from '@/components/blog/BlogShell';
import { getHubGuides } from '@/lib/seoFeed';
import { jsonLd, guidePath } from '@/lib/seoFeedClean';
import { COUNTRIES, HUB, fechaLarga } from '@/lib/blog-meta';

export const revalidate = 300;

const title = 'Guías de Casa-Libre: comprar, invertir y vivir en Sudamérica';
const description = 'Guías prácticas para comprar, alquilar, invertir o mudarte entre países de Sudamérica: requisitos, costos, trámites y cómo comparar opciones, con enlaces a Casa-Libre en cada país.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/guias' },
  openGraph: { title, description, type: 'website', url: `${HUB}/guias`, locale: 'es_419', siteName: 'Casa-Libre' },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

// Groups: one per country the guides are about ('' = several countries / the region). A single group gets no
// country heading.
function groupsOf(guides) {
  const order = ['', 'py', 'bo', 'uy', 've', 'sv'];
  const by = new Map();
  for (const g of guides) {
    if (!by.has(g.cc)) by.set(g.cc, []);
    by.get(g.cc).push(g);
  }
  return order.filter((cc) => by.has(cc)).map((cc) => ({ cc, name: cc ? COUNTRIES[cc].name : 'Sudamérica y varios países', guides: by.get(cc) }));
}

function GuideCard({ g }) {
  return (
    <Link href={guidePath(g.slug)} className="flex flex-col bg-card border-[1.5px] border-ink rounded-card shadow-hard-soft hover:shadow-hard-sm hover:-translate-y-0.5 transition-all p-6">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {g.cc ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-label px-2.5 py-1 rounded-pill bg-ink text-paper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/flags/${g.cc}.svg`} alt="" className="w-4 h-[11px] object-cover rounded-[2px]" />
            {COUNTRIES[g.cc].name}
          </span>
        ) : null}
        <span className="font-mono text-[10.5px] uppercase tracking-label text-ink/50">Guía</span>
      </div>
      <h3 className="font-bold tracking-head leading-snug mb-2 text-[18px]">{g.h1}</h3>
      <p className="text-[14.5px] leading-relaxed text-ink/65 mb-4">{g.blurb || g.description}</p>
      {g.published ? (
        <div className="mt-auto font-mono text-[11.5px] text-ink/45"><time dateTime={g.updated || g.published}>{fechaLarga(g.updated || g.published)}</time></div>
      ) : null}
    </Link>
  );
}

export default async function Page() {
  const guides = await getHubGuides();
  if (!guides.length) notFound();
  const groups = groupsOf(guides);

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Guías de Casa-Libre',
      url: `${HUB}/guias`,
      inLanguage: 'es',
      description,
      publisher: { '@type': 'Organization', name: 'Casa-Libre', url: HUB, logo: `${HUB}/favicon.png` },
      hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.h1, url: `${HUB}${guidePath(g.slug)}`, ...(g.updated ? { dateModified: g.updated } : {}) })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Casa-Libre', item: HUB },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: `${HUB}/guias` },
      ],
    },
  ];

  return (
    <BlogShell section="guias">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ld) }} />

      <section className="max-w-[1200px] mx-auto px-5 md:px-11 pt-12 md:pt-16 pb-4">
        <div className="font-mono text-[11px] tracking-label uppercase text-ink/50 mb-4">{guides.length === 1 ? '1 guía' : `${guides.length} guías`} · Sudamérica</div>
        <h1 className="text-[clamp(36px,6vw,64px)] leading-[1.02] tracking-display font-bold max-w-[900px]">
          Guías para comprar, invertir y vivir <em className="font-serif italic font-normal">en Sudamérica</em>
        </h1>
        <p className="text-[17px] leading-relaxed text-ink/70 mt-5 max-w-[680px]">
          Respuestas claras para quien compara países, se muda o invierte en propiedades en Paraguay, Bolivia, Uruguay y
          Venezuela. Cada guía te lleva al sitio de Casa-Libre del país que te interesa.
        </p>
        <div className="flex flex-wrap gap-3 mt-7">
          <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-3 rounded-pill border-[1.5px] border-ink text-[15px] font-medium hover:bg-ink hover:text-paper transition-colors">Blog por país <Arrow /></Link>
          <Link href="/#map" className="inline-flex items-center gap-2 px-5 py-3 rounded-pill border-[1.5px] border-ink text-[15px] font-medium hover:bg-ink hover:text-paper transition-colors">Casa-Libre en cada país</Link>
        </div>
      </section>

      {groups.map((grp) => (
        <section key={grp.cc || 'region'} className="max-w-[1200px] mx-auto px-5 md:px-11 pt-10">
          {groups.length > 1 ? (
            <h2 className="text-[26px] font-bold tracking-head mb-5 flex items-center gap-3">
              {grp.cc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={`/flags/${grp.cc}.svg`} alt="" className="w-8 h-[21px] object-cover rounded-[3px] border border-ink/15" />
              ) : null}
              {grp.name}
            </h2>
          ) : (
            <h2 className="font-mono text-[11px] tracking-label uppercase text-ink/50 mb-5">Nuevas guías</h2>
          )}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {grp.guides.map((g) => <GuideCard key={g.slug} g={g} />)}
          </div>
        </section>
      ))}
    </BlogShell>
  );
}
