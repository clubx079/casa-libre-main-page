// Body of a /guias/<slug> page on the casa-libre.com hub: a guide written by the Casa-Libre admin's AI SEO pipeline
// (lib/seoFeed.js). Server component, Spanish only, same look as the blog articles (components/blog/
// BlogArticleView.js): answer first, summary, table of contents, sections, FAQ, more guides, then one CTA to the
// Casa-Libre country sites and the app (iPhone and Android).
//
// Every html string here went through lib/seoFeedClean.js sanitizeHtml (only <a href> to the hub or Casa-Libre,
// <strong>, <em>; text escaped), which is why dangerouslySetInnerHTML is safe for them. Plain fields render as text.
import Link from 'next/link';
import { COUNTRIES, fechaLarga } from '@/lib/blog-meta';
import { guidePath } from '@/lib/seoFeedClean';

const IOS = 'https://apps.apple.com/us/app/casa-libre/id6822493219';
const PLAY = 'https://play.google.com/store/apps/details?id=py.casalibre.mobile';
// The country sites the hub promotes (app/page.js, app/llms.txt); El Salvador only on a guide about it.
const CTA_COUNTRIES = ['py', 'bo', 'uy', 've'];

const Arrow = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

const Html = ({ as: Tag = 'span', html, className }) => <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;

/** A Casa-Libre country site link with the hub's UTM tags. */
export function hubLink(cc, path, slug) {
  const u = new URL(path || '/', COUNTRIES[cc].site);
  u.searchParams.set('utm_source', 'casalibrecom');
  u.searchParams.set('utm_medium', 'hub');
  u.searchParams.set('utm_campaign', 'seo-hub');
  if (slug) u.searchParams.set('utm_content', slug);
  return u.toString();
}

const linkCls = '[&_a]:underline [&_a]:decoration-ink/30 hover:[&_a]:decoration-ink [&_strong]:font-semibold [&_strong]:text-ink';

export default function GuideArticle({ guide: g, related = [] }) {
  const country = g.cc ? COUNTRIES[g.cc] : null;
  const showToc = g.sections.length >= 4;
  const ctaCountries = [...new Set([...(g.cc ? [g.cc] : []), ...CTA_COUNTRIES])];
  const ext = { target: '_blank', rel: 'noopener' };

  return (
    <article className="px-5 md:px-11 py-10 max-w-[760px] mx-auto">
      <nav aria-label="Ruta" className="text-[13px] text-ink/50 mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
        <Link href="/" className="underline decoration-ink/25 hover:decoration-ink">Casa-Libre</Link>
        <span>·</span>
        <Link href="/guias" className="underline decoration-ink/25 hover:decoration-ink">Guías</Link>
      </nav>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-label px-2.5 py-1 rounded-pill bg-ink text-paper">
          {country ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/flags/${g.cc}.svg`} alt="" className="w-4 h-[11px] object-cover rounded-[2px]" />
          ) : null}
          {country ? country.name : 'Sudamérica'}
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-label text-ink/50">Guía</span>
      </div>

      <h1 className="text-[clamp(30px,5vw,46px)] leading-[1.06] tracking-display font-bold mb-4">{g.h1}</h1>

      {g.published ? (
        <div className="font-mono text-[12px] text-ink/55 mb-7 flex flex-wrap gap-x-2 gap-y-1">
          <span>Por <span className="font-semibold text-ink/75">Equipo editorial de Casa-Libre</span></span>
          <span>·</span>
          <span>Publicada el <time dateTime={g.published}>{fechaLarga(g.published)}</time></span>
          {g.updated && g.updated !== g.published ? (
            <><span>·</span><span>Actualizada el <time dateTime={g.updated}>{fechaLarga(g.updated)}</time></span></>
          ) : null}
        </div>
      ) : <div className="mb-7" />}

      {/* The direct answer: first thing after the title, quotable on its own. */}
      <div className="bg-card border-[1.5px] border-ink rounded-card p-6 shadow-hard-sm mb-8">
        <div className="font-mono text-[11px] uppercase tracking-label text-ink/45 mb-2">Respuesta corta</div>
        <p className="text-[17px] leading-relaxed text-ink">{g.answer}</p>
      </div>

      {g.summary.length ? (
        <section id="en-resumen" className="mb-8">
          <h2 className="font-mono text-[11px] uppercase tracking-label text-ink/45 mb-3">En resumen</h2>
          <ul className={`flex flex-col gap-2 text-[16px] leading-[1.6] text-ink/80 ${linkCls}`}>
            {g.summary.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden className="shrink-0 mt-[9px] w-2 h-2 rounded-pill bg-ink" />
                <Html html={s} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {showToc ? (
        <nav aria-label="Contenido" className="border border-ink/15 rounded-card p-5 mb-8 bg-bone">
          <div className="font-mono text-[11px] uppercase tracking-label text-ink/45 mb-3">En esta guía</div>
          <ol className="flex flex-col gap-1.5 text-[15px]">
            {g.sections.map((s, i) => (
              <li key={s.id} className="flex gap-2">
                <span className="text-ink/35 font-mono text-[13px] pt-[2px] w-5 shrink-0">{i + 1}.</span>
                <a href={`#${s.id}`} className="underline decoration-ink/20 hover:decoration-ink">{s.h2}</a>
              </li>
            ))}
            {g.faq.length ? (
              <li className="flex gap-2">
                <span className="text-ink/35 font-mono text-[13px] pt-[2px] w-5 shrink-0">{g.sections.length + 1}.</span>
                <a href="#preguntas-frecuentes" className="underline decoration-ink/20 hover:decoration-ink">Preguntas frecuentes</a>
              </li>
            ) : null}
          </ol>
        </nav>
      ) : null}

      {g.sections.map((s) => (
        <section key={s.id} id={s.id} className={`mb-8 scroll-mt-24 ${linkCls}`}>
          <h2 className="text-[24px] leading-tight font-bold tracking-head mt-10 mb-3">{s.h2}</h2>
          {s.blocks.map((b, k) => (b.t === 'p' ? (
            <Html key={k} as="p" html={b.html} className="text-[16.5px] leading-[1.7] text-ink/80 mb-4" />
          ) : (
            <ul key={k} className="list-disc pl-5 mb-4 text-[16.5px] leading-[1.65] text-ink/80 flex flex-col gap-2">
              {b.items.map((it, j) => <Html key={j} as="li" html={it} />)}
            </ul>
          )))}
        </section>
      ))}

      {g.faq.length ? (
        <section id="preguntas-frecuentes" className="mb-10 scroll-mt-24">
          <h2 className="text-[24px] font-bold tracking-head mt-10 mb-4">Preguntas frecuentes</h2>
          <div className="flex flex-col gap-3">
            {g.faq.map((f, i) => (
              <details key={i} className="group bg-card border-[1.5px] border-ink/15 rounded-[16px] p-5 open:border-ink [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between gap-3 list-none">
                  <h3 className="text-[16px] font-semibold">{f.q}</h3>
                  <span aria-hidden className="text-ink/40 group-open:rotate-45 transition-transform text-[20px] leading-none">+</span>
                </summary>
                <Html as="p" html={f.a} className={`text-[15px] text-ink/70 leading-relaxed mt-3 ${linkCls}`} />
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {g.extraLinks?.length || related.length ? (
        <section id="mas-guias" className="mb-10">
          <h2 className="text-[20px] font-bold tracking-head mb-3">Más guías</h2>
          <div className="flex flex-wrap gap-2.5">
            {related.map((r) => (
              <Link key={r.slug} href={guidePath(r.slug)} className="px-4 py-2 rounded-pill border-[1.5px] border-ink/25 bg-card text-[13.5px] font-medium hover:border-ink">{r.navLabel || r.h1}</Link>
            ))}
            {(g.extraLinks || []).filter((l) => !related.some((r) => guidePath(r.slug) === l.href)).map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-pill border-[1.5px] border-ink/25 bg-bone text-[13.5px] font-medium hover:border-ink">{l.label}</Link>
            ))}
          </div>
        </section>
      ) : null}

      <p className="text-[13px] text-ink/45 mb-10">
        Esta guía es informativa y la escribe el equipo editorial de Casa-Libre. Las reglas, los impuestos y los trámites
        cambian según el país: antes de firmar o pagar, confírmalos con un escribano, notario o abogado del país donde está la propiedad.
      </p>

      {/* One CTA: the Casa-Libre country sites (UTM-tagged) and the app for iPhone and Android. */}
      <section id="casa-libre" className="bg-ink text-paper rounded-card p-7 shadow-hard-soft">
        <div className="font-mono text-[10.5px] uppercase tracking-label text-paper/55 mb-3">Casa-Libre</div>
        <h2 className="text-[24px] font-bold tracking-head mb-2">Busca propiedades en Casa-Libre</h2>
        <p className="text-[15px] text-paper/70 mb-5">Casas, departamentos y terrenos en venta y en alquiler, de inmobiliarias y de dueños, en el mapa y con contacto directo por WhatsApp. Sin comisión.</p>
        <div className="flex flex-wrap gap-2.5 mb-5">
          {ctaCountries.map((cc, i) => (
            <a key={cc} href={hubLink(cc, '/propiedades', g.slug)} {...ext} data-ph="hub_country_click" data-ph-country={cc} data-ph-location="guia"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-pill text-[14px] font-bold ${i === 0 && g.cc ? 'bg-paper text-ink' : 'border border-paper/40 text-paper hover:bg-paper hover:text-ink transition-colors'}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/flags/${cc}.svg`} alt="" className="w-5 h-[13px] object-cover rounded-[2px]" />
              {COUNTRIES[cc].name}
              {i === 0 && g.cc ? <Arrow /> : null}
            </a>
          ))}
        </div>
        <p className="text-[13.5px] text-paper/60">
          También en la app de Casa-Libre para{' '}
          <a href={IOS} {...ext} className="underline decoration-paper/40 hover:decoration-paper text-paper">iPhone</a> y{' '}
          <a href={PLAY} {...ext} className="underline decoration-paper/40 hover:decoration-paper text-paper">Android</a>.
        </p>
      </section>
    </article>
  );
}
