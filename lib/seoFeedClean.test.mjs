// npm test  (node --test: pure functions of lib/seoFeedClean.js, no Next, no build needed)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizeHtml, cleanText, internalPath, allowedHref, casaLibreUrl, cleanGuide, cleanOverride, cleanFeed, applyFeed, jsonLd,
  EMPTY_FEED, guidePath,
} from './seoFeedClean.js';

const good = (over = {}) => ({
  cc: 'py', slug: 'invertir-en-inmuebles-en-sudamerica', title: 'Invertir en inmuebles en Sudamérica', h1: 'Cómo invertir en inmuebles en Sudamérica',
  description: 'Una guía.', navLabel: 'Invertir', blurb: 'Breve.', published: '2026-11-20', updated: '2026-11-20',
  answer: 'Compará países por estabilidad y costos.', summary: ['Punto <strong>uno</strong>'],
  sections: [{ id: 'paso-1', h2: 'Paso 1', blocks: [{ t: 'p', html: 'Mirá <a href="https://casa-libre.com.bo/propiedades?utm_source=casalibrecom">Bolivia</a> y <a href="https://uy.casa-libre.com/">Uruguay</a>.' }, { t: 'ul', items: ['a', 'b'] }] }],
  faq: [{ q: '¿Sirve?', a: 'Sí.' }], related: ['otra-guia'], source: 'pipeline', ...over,
});

test('sanitizeHtml keeps only a/strong/em', () => {
  assert.equal(sanitizeHtml('<p>Hola <strong>mundo</strong> <em>x</em></p>'), 'Hola <strong>mundo</strong> <em>x</em>');
  assert.equal(sanitizeHtml('a<script>alert(1)</script>b'), 'ab');
  assert.equal(sanitizeHtml('a<script>alert(1)'), 'a');
  assert.equal(sanitizeHtml('<img src=x onerror=alert(1)>hola'), 'hola');
  assert.equal(sanitizeHtml('<strong onclick="x()">hola</strong>'), '<strong>hola</strong>');
  assert.equal(sanitizeHtml('<b>uno</b> <i>dos</i>'), 'uno dos');
  assert.equal(sanitizeHtml('1 < 2 > 0'), '1 2 0');
  assert.equal(sanitizeHtml('<strong>abierto'), '<strong>abierto</strong>');
  assert.equal(sanitizeHtml('cerrado</em>'), 'cerrado');
  assert.equal(sanitizeHtml('<!-- c --><svg><script>x</script></svg>ok'), 'ok');
  assert.equal(sanitizeHtml('<iframe src="https://evil.com"></iframe>ok'), 'ok');
  assert.equal(sanitizeHtml('<script></script>'), '');
  assert.equal(sanitizeHtml(42), '');
  assert.equal(sanitizeHtml('x'.repeat(5000)), '');
});

test('sanitizeHtml links: hub paths and Casa-Libre only; external ones open in a new tab', () => {
  assert.equal(sanitizeHtml('<a href="/guias/otra/">x</a>'), '<a href="/guias/otra">x</a>');
  assert.equal(sanitizeHtml('<a href="/blog/pais/py">x</a>'), '<a href="/blog/pais/py">x</a>');
  assert.equal(sanitizeHtml('<a href="https://casa-libre.com.py/propiedades?a=1&amp;b=2" target="_top">x</a>'),
    '<a href="https://casa-libre.com.py/propiedades?a=1&amp;b=2" target="_blank" rel="noopener">x</a>');
  for (const h of ['https://casa-libre.com.bo/', 'https://uy.casa-libre.com/', 'https://casa-libre.com.ve/', 'https://sv.casa-libre.com/', 'https://www.casa-libre.com.py/']) {
    assert.match(sanitizeHtml(`<a href="${h}">x</a>`), /^<a href="https:/, h);
  }
  assert.match(sanitizeHtml('<a href="https://apps.apple.com/us/app/casa-libre/id6822493219">iPhone</a>'), /^<a /);
  assert.match(sanitizeHtml('<a href="https://play.google.com/store/apps/details?id=py.casalibre.mobile&hl=es">Android</a>'), /^<a /);
  assert.equal(sanitizeHtml('<a href="https://play.google.com/store/apps/details?id=com.other">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="https://apps.apple.com/us/app/other/id1">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="javascript:alert(1)">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="JaVaScRiPt:alert(1)">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="data:text/html,<script>alert(1)</script>">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="https://evil.com/">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="https://otroportal.com.py/">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="http://casa-libre.com.py/">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="//evil.com/x">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="https://casa-libre.com.py.evil.com/">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="https://user@casa-libre.com.py/">x</a>'), 'x');
  assert.equal(sanitizeHtml('<a href="/a"><a href="/b">x</a></a>'), '<a href="/a">x</a>');
  assert.equal(sanitizeHtml('<a href=/a onmouseover=alert(1)>x</a>'), '<a href="/a">x</a>');
  assert.equal(sanitizeHtml('<a href="/a" onclick="steal()">x</a>'), '<a href="/a">x</a>');
  assert.equal(sanitizeHtml('<a href="/a&quot; onclick=&quot;x">x</a>'), 'x');
});

test('cleanText, internalPath, allowedHref, casaLibreUrl', () => {
  assert.equal(cleanText('  <b>Hola</b>\n mundo &amp; más  '), 'Hola mundo & más');
  assert.equal(cleanText({}), '');
  assert.ok(cleanText('palabra '.repeat(30), 20).length <= 20);
  assert.equal(cleanText('&lt;script&gt;alert(1)&lt;/script&gt;'), 'scriptalert(1)/script');
  assert.equal(internalPath('/'), '/');
  assert.equal(internalPath('/guias/'), '/guias');
  assert.equal(internalPath('/guias/x#faq'), '/guias/x#faq');
  assert.equal(internalPath('/#connect'), '/#connect');
  assert.equal(internalPath('//x'), '');
  assert.equal(internalPath('/X Y'), '');
  assert.equal(internalPath('/../etc'), '');
  assert.equal(internalPath('/a/b/c/d'), '');
  assert.equal(allowedHref('mailto:a@b.c'), '');
  assert.equal(casaLibreUrl('https://casa-libre.com:8443/'), '');
});

test('cleanGuide accepts a good guide and drops bad ones', () => {
  const g = cleanGuide(good());
  assert.equal(g.slug, 'invertir-en-inmuebles-en-sudamerica');
  assert.equal(g.cc, 'py');
  assert.equal(g.sections[0].blocks.length, 2);
  assert.equal((g.sections[0].blocks[0].html.match(/<a /g) || []).length, 2);
  assert.equal(g.source, 'pipeline');
  assert.equal(cleanGuide(good({ cc: 'xx' })).cc, ''); // unknown country: kept, region-wide
  assert.equal(cleanGuide(good({ cc: undefined })).cc, '');
  assert.equal(cleanGuide(good({ slug: 'Bad Slug' })), null);
  assert.equal(cleanGuide(good({ slug: '../etc' })), null);
  assert.equal(cleanGuide(good({ slug: 'blog' })), null);
  assert.equal(cleanGuide(good({ slug: 'a'.repeat(101) })), null);
  assert.equal(cleanGuide(good({ title: '' })), null);
  assert.equal(cleanGuide(good({ answer: 5 })), null);
  assert.equal(cleanGuide(good({ sections: 'x' })), null);
  assert.equal(cleanGuide(good({ sections: [{ h2: 'x', blocks: [{ t: 'script', html: 'x' }] }] })), null);
  assert.equal(cleanGuide(null), null);
  assert.equal(cleanGuide([]), null);
});

test('cleanGuide cleans every field (XSS attempt)', () => {
  const g = cleanGuide(good({
    title: '<script>alert(1)</script>Título largo '.repeat(10),
    h1: 'H1 <img src=x onerror=alert(1)>',
    answer: 'Respuesta <script>alert(1)</script>clara',
    summary: ['ok', 7, '<script>x</script>'],
    published: 'ayer', updated: '2026-11-19T10:00:00Z',
    sections: [{ id: 'Bad ID!', h2: 'Sección', blocks: [{ t: 'p', html: '<a href="https://evil.com">malo</a> texto' }, { t: 'ul', items: ['<em>ok</em>', null] }] },
      { id: 'preguntas-frecuentes', h2: 'Choca', blocks: [{ t: 'p', html: 'x' }] }],
    faq: [{ q: '', a: 'x' }, { q: 'q', a: '<script>x</script>' }, { q: 'Bien', a: 'Sí <a href="javascript:x">no</a>' }],
    related: ['ok-slug', 'BAD', 'invertir-en-inmuebles-en-sudamerica'],
  }));
  assert.ok(g.title.length <= 70 && !g.title.includes('script'));
  assert.equal(g.h1, 'H1');
  assert.equal(g.answer, 'Respuesta clara');
  assert.deepEqual(g.summary, ['ok']);
  assert.equal(g.updated, '2026-11-19');
  assert.equal(g.published, '2026-11-19');
  assert.equal(g.sections[0].id, 'seccion');
  assert.equal(g.sections[0].blocks[0].html, 'malo texto');
  assert.deepEqual(g.sections[0].blocks[1].items, ['<em>ok</em>']);
  assert.notEqual(g.sections[1].id, 'preguntas-frecuentes');
  assert.deepEqual(g.faq, [{ q: 'Bien', a: 'Sí no' }]);
  assert.deepEqual(g.related, ['ok-slug']);
  const s = JSON.stringify(g);
  assert.ok(!/<script|onerror|javascript:|evil\.com/i.test(s));
});

test('cleanOverride and cleanFeed', () => {
  assert.deepEqual(cleanOverride({ path: '/guias/a/', title: 'Nuevo', extraLinks: [{ href: '/guias/b', label: 'B' }, { href: 'https://x.com', label: 'X' }, { href: '/guias/b/', label: 'dup' }] }),
    { path: '/guias/a', title: 'Nuevo', extraLinks: [{ href: '/guias/b', label: 'B' }] });
  assert.equal(cleanOverride({ path: 'https://x.com/', title: 'x' }), null);
  assert.equal(cleanOverride({ path: '/guias/x' }), null);
  assert.equal(cleanFeed(null), EMPTY_FEED);
  assert.equal(cleanFeed('x'), EMPTY_FEED);
  assert.equal(cleanFeed([]), EMPTY_FEED);
  assert.equal(cleanFeed({ site: 'otro.com', guides: [good()] }, { domain: 'casa-libre.com' }), EMPTY_FEED);
  const f = cleanFeed({
    site: 'casa-libre.com',
    guides: [good(), good({ cc: 'bo' }), good({ slug: 'BAD' }), 'x', { slug: 'sin-nada' }],
    overrides: [{ path: '/guias/a', title: 'T' }, { path: '/guias/a/', title: 'dup' }, 3],
  }, { domain: 'casa-libre.com' });
  assert.equal(f.guides.length, 1); // same slug twice: first one wins; malformed ones dropped
  assert.equal(f.overrides.length, 1);
  assert.deepEqual(cleanFeed({ guides: 'x', overrides: {} }).guides, []);
});

test('applyFeed: overrides applied, links checked, newest first', () => {
  const feed = cleanFeed({
    guides: [good({ slug: 'vieja', updated: '2026-10-01', published: '2026-10-01', related: ['nueva', 'no-existe'] }), good({ slug: 'nueva', related: [] })],
    overrides: [
      { path: '/guias/vieja', title: 'Vieja 2026', extraLinks: [{ href: '/guias/nueva', label: 'Nueva' }, { href: '/guias/no-existe', label: 'X' }, { href: '/guias/vieja', label: 'yo' }, { href: '/blog', label: 'Blog' }] },
      { path: '/guias/nueva', h1: 'Nueva H1' },
    ],
  });
  const out = applyFeed(feed, { extraPaths: ['/blog'] });
  assert.deepEqual(out.map((g) => g.slug), ['nueva', 'vieja']);
  const vieja = out[1];
  assert.equal(vieja.title, 'Vieja 2026');
  assert.deepEqual(vieja.related, ['nueva']);
  assert.deepEqual(vieja.extraLinks, [{ href: '/guias/nueva', label: 'Nueva' }, { href: '/blog', label: 'Blog' }]);
  assert.equal(out[0].h1, 'Nueva H1');
  assert.deepEqual(applyFeed(EMPTY_FEED), []);
  assert.deepEqual(applyFeed(null), []);
  assert.equal(guidePath('x'), '/guias/x');
});

test('jsonLd escapes everything that could close the script tag', () => {
  const s = jsonLd({ name: '</script><script>alert(1)</script>', amp: 'a & b', ls: '\u2028' });
  assert.ok(!s.includes('<') && !s.includes('>') && !s.includes('&'));
  assert.ok(s.includes('\\u003c/script\\u003e'));
  assert.deepEqual(JSON.parse(s), { name: '</script><script>alert(1)</script>', amp: 'a & b', ls: '\u2028' });
});

test('cleanFeed is idempotent (the disk copy is cleaned again on load)', () => {
  const once = cleanFeed({ site: 'casa-libre.com', guides: [good(), good({ slug: 'otra-guia', cc: '' })], overrides: [{ path: '/guias/otra-guia', title: 'T' }] }, { domain: 'casa-libre.com' });
  const twice = cleanFeed(JSON.parse(JSON.stringify(once)), { domain: 'casa-libre.com' });
  assert.deepEqual(twice, once);
});
