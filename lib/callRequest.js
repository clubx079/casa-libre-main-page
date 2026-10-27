// "Book a call with the founder" — approval flow.
//   1. A visitor sends the call form → the team (CONTACT_EMAIL) gets the request with two
//      buttons: "Approve and send booking link" / "Decline".
//   2. Each button opens /llamada, a confirm page (an email scanner opening the link
//      does nothing — only the button there acts).
//   3. Approve → the visitor gets an email (in their language) with the booking link
//      (NEXT_PUBLIC_BOOKING_URL, the Google Calendar booking page). Decline → nothing is sent.
// No database: the request travels inside the link, signed (HMAC) so it can't be
// changed, valid 14 days. Resend's Idempotency-Key makes a second Approve click a no-op.
import crypto from 'crypto';

// BOOKING_URL is read at runtime; NEXT_PUBLIC_BOOKING_URL only if it was there at build time
export const BOOKING_URL = process.env.BOOKING_URL || process.env.NEXT_PUBLIC_BOOKING_URL || '';
const TTL_MS = 14 * 24 * 3600 * 1000;
// CALL_LINK_SECRET if set; otherwise derived from the Resend key (always present where emails go out)
const SECRET = process.env.CALL_LINK_SECRET || crypto.createHash('sha256').update('call-link:' + (process.env.RESEND_API_KEY || 'dev')).digest('hex');

const b64 = (s) => Buffer.from(s).toString('base64url');
const sign = (p) => crypto.createHmac('sha256', SECRET).update(p).digest('base64url');

export function makeCallToken(req) {
  const payload = {
    id: crypto.randomUUID(),
    name: String(req.name || '').slice(0, 120),
    email: String(req.email || '').trim().slice(0, 200),
    phone: String(req.phone || '').trim().slice(0, 40),
    lang: ['es', 'en', 'pt'].includes(req.lang) ? req.lang : 'es',
    exp: Date.now() + TTL_MS,
  };
  const p = b64(JSON.stringify(payload));
  return `${p}.${sign(p)}`;
}

// → the request, or null when the link was changed / expired
export function readCallToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null;
  const [p, sig] = token.split('.');
  const good = sign(p);
  if (!sig || sig.length !== good.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(good))) return null;
  try {
    const data = JSON.parse(Buffer.from(p, 'base64url').toString('utf8'));
    if (!data.exp || Date.now() > data.exp) return { ...data, expired: true };
    return data;
  } catch { return null; }
}

// The site's own address, for the links in the team's email (SITE_URL on the deployment;
// the request's host otherwise, so localhost links stay on localhost).
export function siteOrigin(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'casa-libre.com';
  const proto = req.headers.get('x-forwarded-proto') || (/^localhost|^127\./.test(host) ? 'http' : 'https');
  return `${proto}://${host}`;
}

export function waLink(phone, text) {
  const digits = String(phone || '').replace(/\D/g, '');
  return digits.length >= 6 ? `https://wa.me/${digits}?text=${encodeURIComponent(text)}` : null;
}

// ── the visitor's email: "our team would like to talk — pick a time" ──
const VISITOR = {
  es: {
    subject: 'Su llamada con el equipo de Casa Libre',
    hi: (n) => `Hola ${n}:`,
    p1: 'Gracias por escribirnos. Nuestro equipo quiere conversar con usted.',
    p2: 'Elija el horario que le quede mejor. La llamada dura 30 minutos por Google Meet, y al reservar recibe la invitación con el enlace.',
    btn: 'Reservar la llamada',
    foot: '¿No encuentra un horario? Responda este correo.',
    wa: (n, url) => `Hola ${n}, le escribe Casa Libre. Nuestro equipo quiere conversar con usted: elija un horario de 30 minutos acá: ${url}`,
  },
  en: {
    subject: 'Your call with the Casa Libre team',
    hi: (n) => `Hi ${n},`,
    p1: 'Thanks for reaching out. Our team would be glad to talk with you.',
    p2: "Pick a time that suits you. The call lasts 30 minutes on Google Meet, and you'll get the calendar invite with the link as soon as you book.",
    btn: 'Book your call',
    foot: "Can't find a time? Just reply to this email.",
    wa: (n, url) => `Hi ${n}, this is Casa Libre. Our team would like to talk with you — pick a 30-minute slot here: ${url}`,
  },
  pt: {
    subject: 'Sua chamada com a equipe da Casa Libre',
    hi: (n) => `Olá ${n},`,
    p1: 'Obrigado pelo contato. Nossa equipe quer conversar com você.',
    p2: 'Escolha o horário que for melhor. A chamada dura 30 minutos pelo Google Meet, e ao reservar você recebe o convite com o link.',
    btn: 'Agendar a chamada',
    foot: 'Não encontrou um horário? Responda este e-mail.',
    wa: (n, url) => `Olá ${n}, aqui é a Casa Libre. Nossa equipe quer conversar com você: escolha um horário de 30 minutos aqui: ${url}`,
  },
};
export const visitorCopy = (lang) => VISITOR[lang] || VISITOR.es;

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
const shell = (label, body) => `<div style="background:#f5f2ec;padding:32px 0;font-family:'Space Grotesk',system-ui,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1.5px solid #111;border-radius:16px;overflow:hidden">
    <div style="background:#111;color:#f5f2ec;padding:20px 28px">
      <div style="font:700 20px/1 'Space Grotesk',sans-serif;letter-spacing:-.01em">casa-libre<span style="font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400">.com</span></div>
      <div style="margin-top:6px;font:500 13px/1.4 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#a3a19b">${esc(label)}</div>
    </div>
    ${body}
  </div></div>`;
const btn = (href, label, primary) => `<a href="${esc(href)}" style="display:inline-block;background:${primary ? '#1F6F43' : '#ffffff'};color:${primary ? '#ffffff' : '#111111'};border:1.5px solid ${primary ? '#1F6F43' : '#cfcbc2'};padding:14px 26px;border-radius:10px;text-decoration:none;font:600 15px/1 'Space Grotesk',system-ui,sans-serif;margin:0 8px 8px 0">${esc(label)}</a>`;

export function visitorEmail(req) {
  const c = visitorCopy(req.lang);
  const first = String(req.name || '').trim().split(/\s+/)[0] || '';
  const p = (t) => `<p style="margin:0 0 14px;color:#111;font:400 15px/1.6 'Space Grotesk',system-ui,sans-serif">${esc(t)}</p>`;
  const html = shell(c.subject, `<div style="padding:26px 28px 8px">${p(c.hi(first))}${p(c.p1)}${p(c.p2)}</div>
    <div style="padding:6px 28px 26px">${btn(BOOKING_URL, c.btn, true)}
      <p style="margin:10px 0 0;color:#8a8880;font:400 12.5px/1.5 'Space Grotesk',system-ui,sans-serif">${esc(c.foot)}</p></div>
    <div style="padding:14px 28px;border-top:1px solid #eee;color:#a3a19b;font:400 11px/1.4 'IBM Plex Mono',monospace">Casa Libre · casa-libre.com</div>`);
  const text = [c.hi(first), '', c.p1, '', c.p2, '', `${c.btn}: ${BOOKING_URL}`, '', c.foot].join('\n');
  return { subject: c.subject, html, text };
}

// ── the team's email: the request + Approve / Decline ──
export function approvalEmail(data, { approveUrl, declineUrl }) {
  const row = (label, value) => (value ? `<tr>
    <td style="padding:8px 16px 8px 0;color:#8a8880;font:500 12px/1.4 'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;vertical-align:top">${esc(label)}</td>
    <td style="padding:8px 0;color:#111;font:400 15px/1.5 'Space Grotesk',system-ui,sans-serif">${esc(value)}</td></tr>` : '');
  const LANG = { es: 'Spanish', en: 'English', pt: 'Portuguese' };
  const who = data.name || 'Someone';
  const html = shell('New call request — needs your approval', `<div style="padding:24px 28px 8px">
      <p style="margin:0 0 14px;color:#111;font:400 15px/1.55 'Space Grotesk',system-ui,sans-serif">${esc(who)} would like a call with you. Nothing has been sent to them yet: approve to email them your booking link.</p>
      <table style="width:100%;border-collapse:collapse">${row('Name', data.name)}${row('Email', data.email)}${row('Phone / WhatsApp', data.phone)}${row('Preferred time', data.slot)}${row('Reason', data.reason)}${row('Language', LANG[data.lang] || 'Spanish')}</table></div>
    <div style="padding:18px 28px 26px">${btn(approveUrl, 'Approve and send booking link', true)}${btn(declineUrl, 'Decline', false)}
      <p style="margin:8px 0 0;color:#8a8880;font:400 12.5px/1.5 'Space Grotesk',system-ui,sans-serif">Each button opens a page where you confirm. Links expire in 14 days. If you do nothing, ${esc(who)} gets nothing.</p></div>
    <div style="padding:14px 28px;border-top:1px solid #eee;color:#a3a19b;font:400 11px/1.4 'IBM Plex Mono',monospace">Sent from casa-libre.com · Book-a-call form</div>`);
  const text = [`${who} would like a call with you.`, '', `Name: ${data.name || ''}`, `Email: ${data.email || ''}`, `Phone / WhatsApp: ${data.phone || ''}`,
    `Preferred time: ${data.slot || ''}`, `Reason: ${data.reason || ''}`, '', `Approve and send booking link: ${approveUrl}`, `Decline: ${declineUrl}`].join('\n');
  return { subject: `Call request from ${who} — approve?`, html, text };
}
