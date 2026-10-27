// POST /api/call-request { t, action: 'approve' | 'decline' } — the confirm button on /llamada.
// Approve: emails the visitor the booking link (once — Resend Idempotency-Key per request).
// Decline: nothing is sent. The request lives in the signed link (lib/callRequest.js).
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { readCallToken, visitorEmail, visitorCopy, waLink, BOOKING_URL } from '../../../lib/callRequest.js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const data = readCallToken(body.t);
  if (!data) return NextResponse.json({ error: 'invalid_link' }, { status: 400 });
  if (data.expired) return NextResponse.json({ error: 'expired' }, { status: 410 });
  if (body.action === 'decline') return NextResponse.json({ ok: true, declined: true });
  if (body.action !== 'approve') return NextResponse.json({ error: 'bad_action' }, { status: 400 });
  if (!BOOKING_URL) return NextResponse.json({ error: 'booking_link_not_configured' }, { status: 500 });

  const wa = waLink(data.phone, visitorCopy(data.lang).wa(String(data.name || '').split(/\s+/)[0], BOOKING_URL));
  if (!data.email) return NextResponse.json({ ok: true, sent: false, wa });   // phone only: the team sends it on WhatsApp

  const key = process.env.RESEND_API_KEY, from = process.env.RESEND_FROM;
  if (!key || !from) return NextResponse.json({ error: 'email_not_configured' }, { status: 500 });
  const { subject, html, text } = visitorEmail(data);
  // TEST_VISITOR_EMAIL (local only): every visitor email goes there instead of the person's address
  const to = process.env.TEST_VISITOR_EMAIL || data.email;
  // replies go to the team inbox, never to CONTACT_EMAIL (a person's address)
  const replyTo = process.env.CALL_REPLY_TO || 'hola@casa-libre.com.py';
  const { error } = await new Resend(key).emails.send(
    { from, to: [to], subject, html, text, replyTo },
    { idempotencyKey: `call-approve-${data.id}` },
  );
  if (error) return NextResponse.json({ error: 'send_failed', detail: String(error.message || error) }, { status: 502 });
  return NextResponse.json({ ok: true, sent: true, to: data.email, wa });
}
