'use client';
// Starts PostHog once on the client (lib/analytics.js) and records SPA pageviews
// on route change, like the buyer sites' PostHogProvider. Also one delegated click
// listener for:
//   - any element with data-ph="<event>": captures <event> with its other
//     data-ph-* attributes as properties (data-ph-cta="x" -> { cta: 'x' }) plus
//     href. Lets server components (BlogShell, HubHeader) be tracked without
//     becoming client components.
//   - cl_click: a link from a blog article (<article>) to a country Casa-Libre site.
// Renders its children untouched; no consent banner exists on the hub.
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { LANGS, LANG_KEY } from '@/lib/blog-i18n';
import { POSTHOG_KEY, capture, initPostHog, setHubLang, setHubPage } from '@/lib/analytics';

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!POSTHOG_KEY || typeof window === 'undefined') return;
    setHubPage(pathname);
    let url = window.location.origin + pathname;
    const qs = searchParams?.toString();
    if (qs) url += `?${qs}`;
    capture('$pageview', { $current_url: url });
  }, [pathname, searchParams]);
  return null;
}

// Country Casa-Libre sites (casa-libre.com.py, uy.casa-libre.com, …), not the hub itself.
function isCountrySite(u) {
  const h = u.hostname.toLowerCase();
  if (h === 'casa-libre.com' || h === 'www.casa-libre.com') return false;
  return /(^|\.)casa-libre\.com(\.[a-z]{2})?$/.test(h);
}

function onDocClick(e) {
  try {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;
    const tagged = el.closest('[data-ph]');
    if (tagged) {
      const props = {};
      for (const [k, v] of Object.entries(tagged.dataset)) {
        if (k.startsWith('ph') && k.length > 2) props[k[2].toLowerCase() + k.slice(3)] = v;
      }
      const href = tagged.getAttribute('href');
      if (href) props.href = href;
      capture(tagged.dataset.ph, props);
    }
    const a = el.closest('a[href]');
    if (a && a.closest('article') && window.location.pathname.startsWith('/blog')) {
      const u = new URL(a.href, window.location.href);
      if (isCountrySite(u)) {
        capture('cl_click', {
          href: u.href,
          host: u.hostname,
          path: u.pathname,
          utm_content: u.searchParams.get('utm_content') || undefined,
          utm_campaign: u.searchParams.get('utm_campaign') || undefined,
        });
      }
    }
  } catch { /* analytics must never break the page */ }
}

export default function PostHogProvider({ children }) {
  useEffect(() => {
    let lang = 'es';
    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (LANGS.includes(saved)) lang = saved;
    } catch { /* storage blocked */ }
    setHubLang(lang);
    setHubPage(window.location.pathname);
    initPostHog();
    document.addEventListener('click', onDocClick, true);
    return () => document.removeEventListener('click', onDocClick, true);
  }, []);

  return (
    <>
      {children}
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
    </>
  );
}
