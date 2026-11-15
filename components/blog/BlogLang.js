'use client';
// Language layer for the /blog pages: ES (default, server-rendered) / EN / PT.
// The choice lives in React context and in localStorage under LANG_KEY (shared
// with the hub homepage), and switching happens on the client — no reload, no new
// URLs, canonical and server HTML stay Spanish.
//
// Article translations are pre-built JSON (scripts/translate-blog.mjs) loaded with
// dynamic import(), so each one is its own small chunk fetched only when a reader
// picks EN/PT. Nothing here calls an API.
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { LANGS, LANG_KEY, ui } from '@/lib/blog-i18n';
import { track, setHubLang } from '@/lib/analytics';

const Ctx = createContext({ lang: 'es', setLang: () => {} });

export function readLang() {
  try {
    const v = window.localStorage.getItem(LANG_KEY);
    return LANGS.includes(v) ? v : null;
  } catch { return null; }
}
export function writeLang(l) {
  try { window.localStorage.setItem(LANG_KEY, l); } catch { /* storage blocked */ }
}

export function BlogLangProvider({ children }) {
  const [lang, setLangState] = useState('es');
  useEffect(() => {
    const saved = readLang();
    if (saved && saved !== 'es') setLangState(saved);
  }, []);
  useEffect(() => {
    try { document.documentElement.lang = lang; } catch { /* noop */ }
    setHubLang(lang);
  }, [lang]);
  const cur = useRef('es');
  cur.current = lang;
  const setLang = useCallback((l) => {
    if (cur.current !== l) track('blog_lang_switch', { from: cur.current, to: l });
    setLangState(l);
    writeLang(l);
  }, []);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

// <T k="key" v={{ n: 3 }} /> — a UI string in the current language.
export function T({ k, v }) {
  const { lang } = useLang();
  return <>{ui(lang, k, v)}</>;
}

// Same pill group as the homepage header.
export function LangSwitch({ className = '' }) {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label={ui(lang, 'language')} className={`flex items-center border-[1.5px] border-ink rounded-pill overflow-hidden text-[12px] font-bold ${className}`}>
      {LANGS.map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l} className={`px-3 py-1.5 ${lang === l ? 'bg-ink text-paper' : 'text-ink'}`}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}

// ---- translated data ----
const cache = new Map();
function load(key, loader) {
  if (!cache.has(key)) {
    cache.set(key, loader().then((m) => m.default || m, () => null));
  }
  return cache.get(key);
}

// slug → { h1, title, description } for the cards on list pages; null for es / missing.
export function useIndexI18n() {
  const { lang } = useLang();
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (lang === 'es') { setMap(null); return undefined; }
    let live = true;
    load(`idx:${lang}`, () => import(`@/content/blog-i18n/${lang}/index.json`)).then((m) => { if (live) setMap(m); });
    return () => { live = false; };
  }, [lang]);
  return lang === 'es' ? null : map;
}

// Full translation of one article: { status: 'es'|'loading'|'ok'|'missing', data }.
export function useArticleI18n(cc, slug) {
  const { lang } = useLang();
  const [state, setState] = useState({ key: 'es', data: null, done: true });
  const key = `${lang}/${cc}/${slug}`;
  useEffect(() => {
    if (lang === 'es') return undefined;
    let live = true;
    load(`art:${key}`, () => import(`@/content/blog-i18n/${lang}/${cc}/${slug}.json`)).then((d) => {
      if (live) setState({ key, data: d, done: true });
    });
    return () => { live = false; };
  }, [lang, cc, slug, key]);
  if (lang === 'es') return { lang, status: 'es', data: null };
  if (state.key !== key) return { lang, status: 'loading', data: null };
  return { lang, status: state.data ? 'ok' : 'missing', data: state.data };
}
