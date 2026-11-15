'use client';
// PostHog for the casa-libre.com hub — same project and approach as the country
// buyer sites (L:/wt-seo lib/analytics.js + components/PostHogProvider.js): manual
// $pageview on route change, $pageleave, autocapture, localStorage+cookie,
// person_profiles identified_only. Every call is a safe no-op without a key.
//
// The key falls back to the public project key: NEXT_PUBLIC_* vars are often empty
// at build time on AiroStack, and a phc_ key is public by design (it ships in the
// client bundle either way).
//
// Every event carries hub_site: true, hub_lang (es/en/pt) and hub_page (path), so
// the hub is filterable in the shared project. We deliberately do NOT set
// site_country: the admin uses it to split the country sites.
import posthog from 'posthog-js';

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_zq43Nbyp5PNGF6xjedrhqAnzHrZAQaXsNn6iqrT5cvyy';
// Ingest host (note the "i") for the US cloud.
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

const ready = () => typeof window !== 'undefined' && !!POSTHOG_KEY && posthog.__loaded;

// Super properties, kept here so values set before init (language read from
// localStorage, the first path) are registered the moment PostHog starts.
const supers = { hub_site: true };

export function setSuper(props) {
  Object.assign(supers, props);
  if (!ready()) return;
  try { posthog.register(props); } catch { /* never break the UI for analytics */ }
}
export const setHubLang = (lang) => { if (lang) setSuper({ hub_lang: lang }); };
export const setHubPage = (path) => { if (path) setSuper({ hub_page: path }); };

// Events fired before init (a page's own effects run before the provider's) wait
// here and are flushed right after init. Capped so it can't grow forever.
const queued = [];

export function capture(event, props = {}) {
  if (typeof window === 'undefined' || !POSTHOG_KEY) return;
  if (!posthog.__loaded) { if (queued.length < 50) queued.push([event, props]); return; }
  try { posthog.capture(event, props); } catch { /* ignore */ }
}
export const track = capture;

// Called once by PostHogProvider.
export function initPostHog() {
  if (typeof window === 'undefined' || !POSTHOG_KEY || posthog.__loaded) return;
  try {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: false, // sent manually on route change
      capture_pageleave: true,
      autocapture: true,
      persistence: 'localStorage+cookie',
      // No person row per anonymous visitor; events still carry $ip + geoip.
      person_profiles: 'identified_only',
    });
  } catch { return; /* analytics must never break the page */ }
  try { posthog.register({ ...supers, site_host: window.location.host }); } catch { /* ignore */ }
  for (const [event, props] of queued.splice(0)) {
    try { posthog.capture(event, props); } catch { /* ignore */ }
  }
}
