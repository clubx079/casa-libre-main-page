// Header + footer for the /blog pages on the casa-libre.com hub. Server component,
// same tokens and pieces as the hub homepage (app/page.js): sticky paper header
// with the casa-libre.com wordmark, dark footer with the mascot and country list.
// ES/EN/PT pills like the homepage: the server renders Spanish, BlogLangProvider
// switches every <T> label (and the article/cards, see BlogLang.js) on the client.
import Link from 'next/link';
import { BlogLangProvider, LangSwitch, T } from './BlogLang';
import { CountryName } from './BlogCards';

const SITES = [
  { cc: 'py', name: 'Paraguay', url: 'https://casa-libre.com.py', tld: 'casa-libre.com.py' },
  { cc: 'bo', name: 'Bolivia', url: 'https://casa-libre.com.bo', tld: 'casa-libre.com.bo' },
  { cc: 'uy', name: 'Uruguay', url: 'https://uy.casa-libre.com', tld: 'uy.casa-libre.com', note: true },
  { cc: 've', name: 'Venezuela', url: 'https://casa-libre.com.ve', tld: 'casa-libre.com.ve', note: true },
];

export const Word = ({ className = '' }) => (
  <span className={`font-bold tracking-head whitespace-nowrap ${className}`}>casa-libre<em className="font-serif italic font-normal">.com</em></span>
);

export const Arrow = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

// Sticky hub header with the ES/EN/PT pills (same place and style as the homepage).
// Needs a BlogLangProvider above it; also used by /llamada.
export function HubHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-paper/85 border-b border-ink/10">
      <div className="max-w-[1920px] mx-auto w-full px-5 md:px-11 h-[64px] flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0"><Word className="text-[clamp(14px,4.4vw,22px)]" /></Link>
        <div className="flex items-center gap-3 md:gap-7">
          <nav className="flex items-center gap-3 md:gap-7 text-[13px] sm:text-[14px] font-medium text-ink/70">
            <Link href="/#map" data-ph="hub_cta_click" data-ph-cta="nav_countries" data-ph-location="blog_header" className="hidden sm:inline hover:text-ink"><T k="navCountries" /></Link>
            <Link href="/blog" className="text-ink font-bold">Blog</Link>
            <Link href="/#connect" data-ph="hub_cta_click" data-ph-cta="connect" data-ph-location="blog_header" className="text-ink border-[1.5px] border-ink rounded-pill px-3 sm:px-4 py-1.5 hover:bg-ink hover:text-paper transition-colors"><T k="connect" /></Link>
          </nav>
          <LangSwitch />
        </div>
      </div>
    </header>
  );
}

export default function BlogShell({ children }) {
  return (
    <BlogLangProvider>
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden flex flex-col">
      <HubHeader />

      <main className="flex-1">{children}</main>

      <footer className="bg-ink text-paper mt-16">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-14">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-9">
            <div>
              <Link href="/"><Word className="text-[22px] text-paper" /></Link>
              <p className="text-[13.5px] text-paper/60 mt-3 max-w-[300px] leading-relaxed"><T k="footerTag" /></p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mascot.png" alt="" className="w-24 mt-5 opacity-90" />
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-label text-paper/45 mb-3"><T k="navCountries" /></div>
              <ul className="space-y-2 text-[13.5px]">
                {SITES.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" data-ph="hub_country_click" data-ph-country={s.cc} data-ph-location="blog_footer" className="text-paper/75 hover:text-paper">
                      <CountryName cc={s.cc} />{s.note ? <span className="text-paper/35"> · <T k="earlyAccess" /></span> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-label text-paper/45 mb-3">Casa-Libre</div>
              <ul className="space-y-2 text-[13.5px]">
                <li><Link href="/blog" className="text-paper/75 hover:text-paper">Blog</Link></li>
                <li><Link href="/#map" className="text-paper/75 hover:text-paper"><T k="navCountries" /></Link></li>
                <li><Link href="/#connect" data-ph="hub_cta_click" data-ph-cta="connect_founder" data-ph-location="blog_footer" className="text-paper/75 hover:text-paper"><T k="connectFounder" /></Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-12 pt-6 border-t border-paper/15 font-mono text-[11px] text-paper/50">
            <div>© {new Date().getFullYear()} Casa-Libre — <T k="rights" /></div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">{SITES.map((s) => <span key={s.url}>{s.tld}</span>)}</div>
          </div>
        </div>
      </footer>
    </div>
    </BlogLangProvider>
  );
}
