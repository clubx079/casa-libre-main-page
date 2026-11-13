// Card for an article in the /blog index, category and country pages, plus the
// filter pills. Hub design: white card, ink border, hard shadow on hover.
import Link from 'next/link';
import { CATEGORIES, COUNTRIES, fechaLarga } from '@/lib/blog';

// Small country tag: flag + name. Every card and article shows it.
export function CountryTag({ cc, className = '' }) {
  const c = COUNTRIES[cc];
  if (!c) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-label px-2.5 py-1 rounded-pill bg-ink text-paper ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/flags/${cc}.svg`} alt="" className="w-4 h-[11px] object-cover rounded-[2px]" />
      {c.name}
    </span>
  );
}

export default function PostCard({ post, big = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`flex flex-col bg-card border-[1.5px] border-ink rounded-card shadow-hard-soft hover:shadow-hard-sm hover:-translate-y-0.5 transition-all ${big ? 'p-7' : 'p-6'}`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <CountryTag cc={post.country} />
        <span className="font-mono text-[10.5px] uppercase tracking-label text-ink/50">{CATEGORIES[post.category]?.name}</span>
      </div>
      <h3 className={`font-bold tracking-head leading-snug mb-2 ${big ? 'text-[22px]' : 'text-[18px]'}`}>{post.h1}</h3>
      <p className="text-[14.5px] leading-relaxed text-ink/65 mb-4">{post.description}</p>
      <div className="mt-auto font-mono text-[11.5px] text-ink/45">
        <time dateTime={post.datePublished}>{fechaLarga(post.datePublished)}</time> · {post.readingMinutes} min
      </div>
    </Link>
  );
}

const pill = 'px-4 py-2 rounded-pill text-[13.5px] font-medium border-[1.5px] transition-colors';
const on = 'bg-ink text-paper border-ink';
const off = 'border-ink/25 bg-card hover:border-ink';

// Category filter pills — real links (crawlable), current one highlighted.
export function CategoryPills({ categories, current = null }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/blog" className={`${pill} ${current ? off : on}`}>Todos</Link>
      {categories.map((c) => (
        <Link key={c.slug} href={`/blog/categoria/${c.slug}`} className={`${pill} ${current === c.slug ? on : off}`}>
          {c.name} <span className={current === c.slug ? 'text-paper/60' : 'text-ink/40'}>{c.count}</span>
        </Link>
      ))}
    </div>
  );
}

// Country filter — only countries that have articles (lib/blog.js activeCountries).
export function CountryPills({ countries, current = null }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/blog" className={`${pill} ${current ? off : on}`}>Todos los países</Link>
      {countries.map((c) => (
        <Link key={c.code} href={`/blog/pais/${c.code}`} className={`${pill} inline-flex items-center gap-2 ${current === c.code ? on : off}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/flags/${c.code}.svg`} alt="" className="w-5 h-[13px] object-cover rounded-[2px] border border-ink/20" />
          {c.name} <span className={current === c.code ? 'text-paper/60' : 'text-ink/40'}>{c.count}</span>
        </Link>
      ))}
    </div>
  );
}
