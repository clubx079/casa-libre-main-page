'use client';
// Visible body of a /blog/<slug> article on the casa-libre.com hub: answer first,
// table of contents, sections, FAQ, sources. The server renders Spanish (what
// crawlers and AI engines read); when the reader picks EN/PT the text swaps on the
// client to the pre-translated JSON in content/blog-i18n/<lang>/<cc>/<slug>.json
// (BlogLang.js useArticleI18n). Links, hrefs, UTM tags and ids never change. If a
// translation file is missing the Spanish article stays, with a small note.
//
// Every article belongs to one country: the country tag sits above the title and
// the CTA sends readers to that country's Casa-Libre site (UTM-tagged, see
// lib/blog-meta.js siteUrl). Links to other articles stay on the hub (/blog/...).
import Link from 'next/link';
import { CATEGORIES, COUNTRIES, siteUrl } from '@/lib/blog-meta';
import { ui, countryName, categoryText, notaryFor, longDate } from '@/lib/blog-i18n';
import { CountryTag, RelatedCard } from './BlogCards';
import { useLang, useArticleI18n } from './BlogLang';

const Arrow = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

// Pretty label for a /guias/<slug> link: "comprar-primera-casa" -> "Comprar primera casa".
const guiaLabel = (slug) => {
  const s = slug.replace(/-/g, ' ');
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Overlay the translated strings on the Spanish post (same shape, see
// scripts/translate-blog.mjs extract()). Anything missing stays Spanish.
function localize(post, d) {
  if (!d) return post;
  return {
    ...post,
    h1: d.meta?.h1 || post.h1,
    answer: d.meta?.answer || post.answer,
    description: d.meta?.description || post.description,
    sections: post.sections.map((s, i) => {
      const t = d.sections?.[i] || {};
      return {
        ...s,
        ...t,
        ...(s.table ? { table: { head: t.table?.head || s.table.head, rows: t.table?.rows || s.table.rows } } : {}),
      };
    }),
    faq: (post.faq || []).map((f, i) => ({ q: d.faq?.[i]?.q || f.q, a: d.faq?.[i]?.a || f.a })),
    related: (post.related || []).map((r, i) => ({ ...r, label: d.related?.[i] || r.label })),
  };
}

function Section({ s, lang }) {
  return (
    <section id={s.id} className="mb-8 scroll-mt-24">
      <h2 className="text-[24px] leading-tight font-bold tracking-head mt-10 mb-3">{s.h2}</h2>
      {(s.paras || []).map((p, k) => (
        <p key={k} className="text-[16.5px] leading-[1.7] text-ink/80 mb-4">{p}</p>
      ))}
      {s.bullets ? (
        <ul className="list-disc pl-5 mb-4 text-[16.5px] leading-[1.65] text-ink/80 flex flex-col gap-2">
          {s.bullets.map((b, k) => <li key={k}>{b}</li>)}
        </ul>
      ) : null}
      {s.steps ? (
        <ol className="mb-4 flex flex-col gap-3">
          {s.steps.map((b, k) => (
            <li key={k} className="flex gap-3 text-[16.5px] leading-[1.65] text-ink/80">
              <span className="shrink-0 font-mono w-7 h-7 rounded-pill bg-ink text-paper text-[13px] font-bold flex items-center justify-center mt-0.5">{k + 1}</span>
              <span>{b}</span>
            </li>
          ))}
        </ol>
      ) : null}
      {s.table ? (
        <div className="overflow-x-auto mb-4 -mx-1 px-1">
          <table className="w-full border-collapse text-[15px] min-w-[480px]">
            <thead>
              <tr>{s.table.head.map((h, k) => (
                <th key={k} className="text-left font-semibold border-b-[1.5px] border-ink py-2.5 pr-4">{h}</th>
              ))}</tr>
            </thead>
            <tbody>
              {s.table.rows.map((r, k) => (
                <tr key={k}>{r.map((cell, j) => (
                  <td key={j} className="border-b border-ink/10 py-2.5 pr-4 align-top text-ink/80">{cell}</td>
                ))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {s.tip ? (
        <div className="bg-bone border-l-[3px] border-ink rounded-r-input px-5 py-4 mb-4 text-[15.5px] leading-relaxed text-ink/80">
          <span className="font-semibold text-ink">{ui(lang, 'tip')}</span>{s.tip}
        </div>
      ) : null}
    </section>
  );
}

export default function BlogArticleView({ post: es, related = [] }) {
  const cc = es.country;
  const country = COUNTRIES[cc];
  const { lang } = useLang();
  const tr = useArticleI18n(cc, es.slug);
  const post = tr.status === 'ok' ? localize(es, tr.data) : es;
  const L = (k, v) => ui(lang, k, { cc, ...v });
  const name = countryName(cc, lang);
  const catEs = CATEGORIES[post.category];
  const cat = catEs ? categoryText(post.category, lang, catEs) : null;
  const author = lang === 'es' ? post.author : ui(lang, 'author');
  const showToc = (post.sections || []).length >= 4;
  const opRent = post.category === 'alquilar';
  const isSeller = post.category === 'vender';
  const go = (path) => siteUrl(cc, path, post.slug);
  const ext = { target: '_blank', rel: 'noopener' };

  return (
    <article className="px-5 md:px-11 py-10 max-w-[760px] mx-auto">
      <nav aria-label={L('breadcrumb')} className="text-[13px] text-ink/50 mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
        <Link href="/blog" className="underline decoration-ink/25 hover:decoration-ink">Blog</Link>
        <span>·</span>
        <Link href={`/blog/pais/${cc}`} className="underline decoration-ink/25 hover:decoration-ink">{name}</Link>
        {cat ? (<><span>·</span><Link href={`/blog/categoria/${post.category}`} className="underline decoration-ink/25 hover:decoration-ink">{cat.name}</Link></>) : null}
      </nav>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <CountryTag cc={cc} />
        {cat ? <span className="font-mono text-[10.5px] uppercase tracking-label text-ink/50">{cat.name}</span> : null}
      </div>

      <h1 className="text-[clamp(30px,5vw,46px)] leading-[1.06] tracking-display font-bold mb-4">{post.h1}</h1>

      {tr.status === 'missing' ? (
        <p role="note" className="text-[13px] text-ink/60 bg-bone border border-ink/15 rounded-input px-3 py-2 mb-5">{L('onlySpanish')}</p>
      ) : null}

      <div className="font-mono text-[12px] text-ink/55 mb-7 flex flex-wrap gap-x-2 gap-y-1">
        <span>{L('by')} <span className="font-semibold text-ink/75">{author}</span></span>
        <span>·</span>
        <span>{L('published')} <time dateTime={post.datePublished}>{longDate(post.datePublished, lang)}</time></span>
        {post.dateModified && post.dateModified !== post.datePublished ? (
          <><span>·</span><span>{L('updated')} <time dateTime={post.dateModified}>{longDate(post.dateModified, lang)}</time></span></>
        ) : null}
        <span>·</span>
        <span>{L('readTime', { n: post.readingMinutes })}</span>
      </div>

      {/* The direct answer: first thing after the title, quotable on its own. */}
      <div className="bg-card border-[1.5px] border-ink rounded-card p-6 shadow-hard-sm mb-8">
        <div className="font-mono text-[11px] uppercase tracking-label text-ink/45 mb-2">{L('shortAnswer')} · {name}</div>
        <p className="text-[17px] leading-relaxed text-ink">{post.answer}</p>
      </div>

      {showToc ? (
        <nav aria-label={L('contents')} className="border border-ink/15 rounded-card p-5 mb-8 bg-bone">
          <div className="font-mono text-[11px] uppercase tracking-label text-ink/45 mb-3">{L('inThisArticle')}</div>
          <ol className="flex flex-col gap-1.5 text-[15px]">
            {post.sections.map((s, i) => (
              <li key={s.id} className="flex gap-2">
                <span className="text-ink/35 font-mono text-[13px] pt-[2px] w-5 shrink-0">{i + 1}.</span>
                <a href={`#${s.id}`} className="underline decoration-ink/20 hover:decoration-ink">{s.h2}</a>
              </li>
            ))}
            {post.faq?.length ? (
              <li className="flex gap-2">
                <span className="text-ink/35 font-mono text-[13px] pt-[2px] w-5 shrink-0">{post.sections.length + 1}.</span>
                <a href="#preguntas-frecuentes" className="underline decoration-ink/20 hover:decoration-ink">{L('faq')}</a>
              </li>
            ) : null}
          </ol>
        </nav>
      ) : null}

      {post.sections.map((s) => <Section key={s.id} s={s} lang={lang} />)}

      {post.faq?.length ? (
        <section id="preguntas-frecuentes" className="mb-10 scroll-mt-24">
          <h2 className="text-[24px] font-bold tracking-head mt-10 mb-4">{L('faq')}</h2>
          <div className="flex flex-col gap-3">
            {post.faq.map((f, i) => (
              <details key={i} className="group bg-card border-[1.5px] border-ink/15 rounded-[16px] p-5 open:border-ink [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between gap-3 list-none">
                  <h3 className="text-[16px] font-semibold">{f.q}</h3>
                  <span aria-hidden className="text-ink/40 group-open:rotate-45 transition-transform text-[20px] leading-none">+</span>
                </summary>
                <p className="text-[15px] text-ink/70 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {post.related?.length || post.guiaLinks?.length ? (
        <section className="mb-10">
          <h2 className="text-[20px] font-bold tracking-head mb-3">{L('keepOn')}</h2>
          <div className="flex flex-wrap gap-2.5">
            {post.related.map((r) => (r.external ? (
              <a key={r.href} href={r.href} {...ext} className="px-4 py-2 rounded-pill border-[1.5px] border-ink/25 bg-card text-[13.5px] font-medium hover:border-ink">{r.label}</a>
            ) : (
              <Link key={r.href} href={r.href} className="px-4 py-2 rounded-pill border-[1.5px] border-ink/25 bg-card text-[13.5px] font-medium hover:border-ink">{r.label}</Link>
            )))}
            {post.guiaLinks.filter((g) => !post.related.some((r) => r.href === g.href)).map((g) => (
              <a key={g.href} href={g.href} {...ext} className="px-4 py-2 rounded-pill border-[1.5px] border-ink/25 bg-bone text-[13.5px] font-medium hover:border-ink">{L('guide')}{guiaLabel(g.slug)}</a>
            ))}
          </div>
        </section>
      ) : null}

      {post.sources?.length ? (
        <section className="mb-10">
          <h2 className="text-[20px] font-bold tracking-head mb-3">{L('sources')}</h2>
          <ul className="flex flex-col gap-2 text-[14.5px] text-ink/70">
            {post.sources.map((s) => (
              <li key={s.url} className="leading-snug">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-ink/25 hover:decoration-ink break-words">{s.name}</a>
                {s.publisher ? <span className="text-ink/50"> — {s.publisher}</span> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="text-[13px] text-ink/45 mb-10">
        {L('disclaimer', { author, notary: notaryFor(cc, lang, country.notary) })}
      </p>

      {/* One clear CTA, matched to who is reading, on that country's site. */}
      <section className="bg-ink text-paper rounded-card p-7 shadow-hard-soft">
        <div className="flex items-center gap-2 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/flags/${cc}.svg`} alt="" className="w-7 h-[19px] object-cover rounded-[3px] border border-paper/30" />
          <span className="font-mono text-[10.5px] uppercase tracking-label text-paper/55">{new URL(country.site).host}</span>
        </div>
        {isSeller ? (
          <>
            <h2 className="text-[24px] font-bold tracking-head mb-2">{L('sellerH')}</h2>
            <p className="text-[15px] text-paper/70 mb-5">{L('sellerText')}</p>
            <div className="flex flex-wrap gap-3">
              <a href={go('/publicar')} {...ext} className="inline-flex items-center gap-2 px-6 py-3 bg-paper text-ink rounded-pill font-bold text-[15px]">{L('publishFree')} <Arrow /></a>
              <a href={go('/propiedades')} {...ext} className="inline-block px-6 py-3 border border-paper/40 text-paper rounded-pill font-semibold text-[15px]">{L('seeProperties')}</a>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-[24px] font-bold tracking-head mb-2">{L('buyerH', { rent: opRent })}</h2>
            <p className="text-[15px] text-paper/70 mb-5">{L('buyerText')}</p>
            <div className="flex flex-wrap gap-3">
              <a href={go(opRent ? '/propiedades?op=alquiler' : '/propiedades')} {...ext} className="inline-flex items-center gap-2 px-6 py-3 bg-paper text-ink rounded-pill font-bold text-[15px]">{L('seeProperties')} <Arrow /></a>
              <a href={go('/publicar')} {...ext} className="inline-block px-6 py-3 border border-paper/40 text-paper rounded-pill font-semibold text-[15px]">{L('sellerH')}</a>
            </div>
          </>
        )}
      </section>

      {related.length ? (
        <section className="mt-10">
          <h2 className="text-[20px] font-bold tracking-head mb-4">{L('related')}</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {related.map((r) => <RelatedCard key={r.slug} post={r} />)}
          </div>
        </section>
      ) : null}
    </article>
  );
}
