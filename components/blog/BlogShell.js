// Header + footer for the /blog pages on the casa-libre.com hub. Server component,
// same tokens and pieces as the hub homepage (app/page.js): sticky paper header
// with the casa-libre.com wordmark, dark footer with the mascot and country list.
// Blog pages are Spanish-only, so there is no ES/EN/PT toggle here.
import Link from 'next/link';

const SITES = [
  { name: 'Paraguay', url: 'https://casa-libre.com.py', tld: 'casa-libre.com.py' },
  { name: 'Bolivia', url: 'https://casa-libre.com.bo', tld: 'casa-libre.com.bo' },
  { name: 'Uruguay', url: 'https://uy.casa-libre.com', tld: 'uy.casa-libre.com', note: 'acceso anticipado' },
  { name: 'Venezuela', url: 'https://casa-libre.com.ve', tld: 'casa-libre.com.ve', note: 'acceso anticipado' },
];

export const Word = ({ className = '' }) => (
  <span className={`font-bold tracking-head whitespace-nowrap ${className}`}>casa-libre<em className="font-serif italic font-normal">.com</em></span>
);

export const Arrow = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export default function BlogShell({ children }) {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur bg-paper/85 border-b border-ink/10">
        <div className="max-w-[1920px] mx-auto w-full px-5 md:px-11 h-[64px] flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0"><Word className="text-[clamp(14px,4.4vw,22px)]" /></Link>
          <nav className="flex items-center gap-4 md:gap-7 text-[14px] font-medium text-ink/70">
            <Link href="/#map" className="hidden sm:inline hover:text-ink">Países</Link>
            <Link href="/blog" className="text-ink font-bold">Blog</Link>
            <Link href="/#connect" className="text-ink border-[1.5px] border-ink rounded-pill px-4 py-1.5 hover:bg-ink hover:text-paper transition-colors">Conectar</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-ink text-paper mt-16">
        <div className="max-w-[1920px] mx-auto px-5 md:px-11 py-14">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-9">
            <div>
              <Link href="/"><Word className="text-[22px] text-paper" /></Link>
              <p className="text-[13.5px] text-paper/60 mt-3 max-w-[300px] leading-relaxed">El marketplace inmobiliario de Sudamérica. En la web y en la app para iPhone y Android.</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mascot.png" alt="" className="w-24 mt-5 opacity-90" />
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-label text-paper/45 mb-3">Países</div>
              <ul className="space-y-2 text-[13.5px]">
                {SITES.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-paper/75 hover:text-paper">
                      {s.name}{s.note ? <span className="text-paper/35"> · {s.note}</span> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-label text-paper/45 mb-3">Casa-Libre</div>
              <ul className="space-y-2 text-[13.5px]">
                <li><Link href="/blog" className="text-paper/75 hover:text-paper">Blog</Link></li>
                <li><Link href="/#map" className="text-paper/75 hover:text-paper">Países</Link></li>
                <li><Link href="/#connect" className="text-paper/75 hover:text-paper">Conectar con el fundador</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-12 pt-6 border-t border-paper/15 font-mono text-[11px] text-paper/50">
            <div>© {new Date().getFullYear()} Casa-Libre — Todos los derechos reservados.</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">{SITES.map((s) => <span key={s.url}>{s.tld}</span>)}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
