'use client';
// Client side of the blog cards and filter pills: same markup as before, with the
// text swapped to EN/PT when the reader picks it (titles/descriptions from
// content/blog-i18n/<lang>/index.json, labels from lib/blog-i18n.js). Server HTML
// is the Spanish version. Imports lib/blog-meta only — never the article content.
import Link from 'next/link';
import { CATEGORIES } from '@/lib/blog-meta';
import { ui, countryName, categoryText, longDate } from '@/lib/blog-i18n';
import { useLang, useIndexI18n } from './BlogLang';

export function CountryTag({ cc, className = '' }) {
  const { lang } = useLang();
  if (!cc) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-label px-2.5 py-1 rounded-pill bg-ink text-paper ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/flags/${cc}.svg`} alt="" className="w-4 h-[11px] object-cover rounded-[2px]" />
      {countryName(cc, lang)}
    </span>
  );
}

// Category name in the current language.
export function CatName({ slug }) {
  const { lang } = useLang();
  const es = CATEGORIES[slug];
  return es ? <>{categoryText(slug, lang, es).name}</> : null;
}

// post: { slug, h1, description, country, category, datePublished, readingMinutes }
export function PostCardView({ post, big = false }) {
  const { lang } = useLang();
  const idx = useIndexI18n();
  const tr = idx?.[post.slug];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`flex flex-col bg-card border-[1.5px] border-ink rounded-card shadow-hard-soft hover:shadow-hard-sm hover:-translate-y-0.5 transition-all ${big ? 'p-7' : 'p-6'}`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <CountryTag cc={post.country} />
        <span className="font-mono text-[10.5px] uppercase tracking-label text-ink/50"><CatName slug={post.category} /></span>
      </div>
      <h3 className={`font-bold tracking-head leading-snug mb-2 ${big ? 'text-[22px]' : 'text-[18px]'}`}>{tr?.h1 || post.h1}</h3>
      <p className="text-[14.5px] leading-relaxed text-ink/65 mb-4">{tr?.description || post.description}</p>
      <div className="mt-auto font-mono text-[11.5px] text-ink/45">
        <time dateTime={post.datePublished}>{longDate(post.datePublished, lang)}</time> · {ui(lang, 'minutes', { n: post.readingMinutes })}
      </div>
    </Link>
  );
}

// Small card used under "Related articles".
export function RelatedCard({ post }) {
  const idx = useIndexI18n();
  const tr = idx?.[post.slug];
  return (
    <Link href={`/blog/${post.slug}`} className="block bg-card border-[1.5px] border-ink/15 rounded-[16px] p-4 hover:border-ink transition-colors">
      <div className="font-mono text-[10.5px] uppercase tracking-label text-ink/45 mb-1.5"><CatName slug={post.category} /></div>
      <div className="text-[15px] font-semibold leading-snug">{tr?.h1 || post.h1}</div>
    </Link>
  );
}

const pill = 'px-4 py-2 rounded-pill text-[13.5px] font-medium border-[1.5px] transition-colors';
const on = 'bg-ink text-paper border-ink';
const off = 'border-ink/25 bg-card hover:border-ink';

// Category filter pills — real links (crawlable), current one highlighted.
export function CategoryPills({ categories, current = null }) {
  const { lang } = useLang();
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/blog" className={`${pill} ${current ? off : on}`}>{ui(lang, 'all')}</Link>
      {categories.map((c) => (
        <Link key={c.slug} href={`/blog/categoria/${c.slug}`} className={`${pill} ${current === c.slug ? on : off}`}>
          {categoryText(c.slug, lang, c).name} <span className={current === c.slug ? 'text-paper/60' : 'text-ink/40'}>{c.count}</span>
        </Link>
      ))}
    </div>
  );
}

// Country filter — only countries that have articles (lib/blog.js activeCountries).
export function CountryPills({ countries, current = null }) {
  const { lang } = useLang();
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/blog" className={`${pill} ${current ? off : on}`}>{ui(lang, 'allCountries')}</Link>
      {countries.map((c) => (
        <Link key={c.code} href={`/blog/pais/${c.code}`} className={`${pill} inline-flex items-center gap-2 ${current === c.code ? on : off}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/flags/${c.code}.svg`} alt="" className="w-5 h-[13px] object-cover rounded-[2px] border border-ink/20" />
          {countryName(c.code, lang)} <span className={current === c.code ? 'text-paper/60' : 'text-ink/40'}>{c.count}</span>
        </Link>
      ))}
    </div>
  );
}

// Category heading / title / intro text on list pages.
export function CatText({ slug, field = 'name' }) {
  const { lang } = useLang();
  const es = CATEGORIES[slug];
  return es ? <>{categoryText(slug, lang, es)[field]}</> : null;
}

// Country name in the current language.
export function CountryName({ cc }) {
  const { lang } = useLang();
  return <>{countryName(cc, lang)}</>;
}
