// Investor form + "Book a call" submissions → a formatted email to CONTACT_EMAIL
// (omar@airosofts.com) via Resend. Reuses the Casa Libre deelmap.com verified
// sender, so it delivers to any address.
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO = process.env.CONTACT_EMAIL || 'omar@airosofts.com';
const FROM = process.env.RESEND_FROM || 'Casa Libre <notifications@deelmap.com>';

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function row(label, value) {
  if (!value) return '';
  return `<tr>
    <td style="padding:8px 16px 8px 0;color:#8a8880;font:500 12px/1.4 'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;vertical-align:top">${esc(label)}</td>
    <td style="padding:8px 0;color:#111;font:400 15px/1.5 'Space Grotesk',system-ui,sans-serif">${esc(value)}</td>
  </tr>`;
}

function buildEmail(type, d) {
  const isCall = type === 'call';
  const title = isCall ? '📞 Book a call' : '📩 New investor inquiry';
  const rows = isCall
    ? [
        row('Name', d.name),
        row('Email', d.email),
        row('Phone / WhatsApp', d.phone || d.wa),
        row('Preferred time', d.slot),
        row('Reason', d.reason),
      ]
    : [
        row('Name', d.name),
        row('Firm / fund', d.firm),
        row('Country', d.country),
        row('Email', d.email),
        row('WhatsApp / phone', d.wa),
        row('Typically invests', d.stage),
        row('Why Casa Libre', d.why),
      ];
  const html = `<div style="background:#f5f2ec;padding:32px 0;font-family:'Space Grotesk',system-ui,sans-serif">
    <div style="max-width:560px;margin:0 auto;background:#fff;border:1.5px solid #111;border-radius:16px;overflow:hidden">
      <div style="background:#111;color:#f5f2ec;padding:20px 28px">
        <div style="font:700 20px/1 'Space Grotesk',sans-serif;letter-spacing:-.01em">casa-libre<span style="font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400">.com</span></div>
        <div style="margin-top:6px;font:500 13px/1.4 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#a3a19b">${esc(title)}</div>
      </div>
      <div style="padding:24px 28px">
        <table style="width:100%;border-collapse:collapse">${rows.join('')}</table>
      </div>
      <div style="padding:14px 28px;border-top:1px solid #eee;color:#a3a19b;font:400 11px/1.4 'IBM Plex Mono',monospace">
        Sent from casa-libre.com · ${isCall ? 'Book-a-call form' : 'Investor form'}
      </div>
    </div>
  </div>`;
  const text = rows.map(() => '').length ? Object.entries(d).map(([k, v]) => `${k}: ${v}`).join('\n') : '';
  const subject = isCall
    ? `Book a call — ${d.name || 'Casa Libre'}`
    : `New investor inquiry — ${d.name || 'Casa Libre'}`;
  return { subject, html, text };
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const type = body.type === 'call' ? 'call' : 'overview';

    // Validate: name required; for the investor form email OR phone; for a call
    // both a contact and a preferred time make it useful, but keep it forgiving.
    if (!body.name || !String(body.name).trim()) {
      return NextResponse.json({ error: 'missing_name' }, { status: 400 });
    }
    const hasContact = String(body.email || '').trim() || String(body.phone || body.wa || '').trim();
    if (!hasContact) {
      return NextResponse.json({ error: 'missing_contact' }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      return NextResponse.json({ error: 'email_not_configured' }, { status: 500 });
    }

    const { subject, html, text } = buildEmail(type, body);
    const resend = new Resend(key);
    const replyTo = String(body.email || '').trim() || undefined;
    const { error } = await resend.emails.send({ from: FROM, to: [TO], subject, html, text, replyTo });
    if (error) {
      return NextResponse.json({ error: 'send_failed', detail: String(error.message || error) }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'server_error', detail: String(e?.message || e) }, { status: 500 });
  }
}
