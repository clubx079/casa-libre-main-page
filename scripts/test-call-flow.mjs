// End-to-end check of the "Book a call" approval flow against the local site (npm run dev, :3005).
// Sends real emails — run it only with CONTACT_EMAIL and TEST_VISITOR_EMAIL pointing at a test inbox.
//   node scripts/test-call-flow.mjs
import fs from 'fs';

const BASE = process.env.BASE || 'http://localhost:3005';
for (const line of fs.readFileSync(new URL('../.env.local', import.meta.url), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.*)$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}
if (!/airosofts\.com$/.test(process.env.CONTACT_EMAIL || '') || !/airosofts\.com$/.test(process.env.TEST_VISITOR_EMAIL || '')) {
  console.error('refusing: CONTACT_EMAIL and TEST_VISITOR_EMAIL must be test inboxes'); process.exit(1);
}
const { makeCallToken } = await import('../lib/callRequest.js');
const ok = (c, msg) => { console.log(`${c ? 'PASS' : 'FAIL'}  ${msg}`); if (!c) process.exitCode = 1; };
const post = (path, body) => fetch(BASE + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

// 1. the visitor sends the form → the team's approval email
const form = { type: 'call', name: 'Ana Prueba', email: 'ana.prueba@example.com', phone: '+595 981 123456', slot: 'Martes por la mañana',
  reason: 'Tengo una inmobiliaria en Asunción y quiero publicar nuestras propiedades.', lang: 'es', hp: '', elapsed_ms: 25000 };
let r = await post('/api/contact', form);
ok(r.ok, `form sent → approval email to ${process.env.CONTACT_EMAIL} (${r.status} ${JSON.stringify(await r.json())})`);

// 2. the confirm pages (an email scanner opening them sends nothing)
const t = makeCallToken(form);
let html = await (await fetch(`${BASE}/llamada?t=${encodeURIComponent(t)}&a=approve`)).text();
ok(html.includes('Confirm: send the booking link') && html.includes('Ana Prueba'), 'approve page shows the request and a confirm button');
html = await (await fetch(`${BASE}/llamada?t=${encodeURIComponent(t)}&a=decline`)).text();
ok(html.includes('Confirm decline'), 'decline page shows a confirm button');
html = await (await fetch(`${BASE}/llamada?t=${encodeURIComponent(t.slice(0, -3) + 'abc')}&a=approve`)).text();
ok(html.includes('isn’t valid'), 'a changed link is refused');

// 3. decline sends nothing; approve sends the booking email once
r = await post('/api/call-request', { t, action: 'decline' });
ok(r.ok && (await r.json()).declined, 'decline → nothing sent');
r = await post('/api/call-request', { t, action: 'approve' });
const j1 = await r.json();
ok(r.ok && j1.sent, `approve → booking email sent (to ${process.env.TEST_VISITOR_EMAIL} in test; would go to ${j1.to}); WhatsApp link ${j1.wa ? 'offered' : 'none'}`);
r = await post('/api/call-request', { t, action: 'approve' });
ok(r.ok, 'second approve click → same send (Resend idempotency), no error');
r = await post('/api/call-request', { t: 'x.y', action: 'approve' });
ok(r.status === 400, 'forged token → 400');

// 4. phone only: no email, the team gets a WhatsApp link to send instead
const t2 = makeCallToken({ ...form, email: '' });
r = await post('/api/call-request', { t: t2, action: 'approve' });
const j2 = await r.json();
ok(r.ok && !j2.sent && /^https:\/\/wa\.me\/595981123456\?text=/.test(j2.wa || ''), 'phone only → no email, WhatsApp link with the booking link');
