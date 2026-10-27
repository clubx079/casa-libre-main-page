'use client';
// The one button that acts on a call request (see app/llamada/page.js).
import { useState } from 'react';

export default function Confirm({ t, action, name, email, phone }) {
  const [state, setState] = useState('idle');   // idle | busy | done | error
  const [res, setRes] = useState(null);
  const who = name || 'them';
  const approve = action === 'approve';

  const go = async () => {
    setState('busy');
    try {
      const r = await fetch('/api/call-request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ t, action }) });
      const j = await r.json().catch(() => ({}));
      setRes(j);
      setState(r.ok ? 'done' : 'error');
    } catch { setState('error'); }
  };

  if (state === 'done') {
    if (!approve) return <p className="rounded-input bg-ink/5 px-4 py-4 text-[15px]">Declined. Nothing was sent to {who}.</p>;
    return (
      <div className="space-y-3">
        {res?.sent
          ? <p className="rounded-input bg-[#2f6f43]/10 px-4 py-4 text-[15px] font-semibold text-[#2f6f43]">Approved — the booking link was sent to {who} ({res.to}).</p>
          : <p className="rounded-input bg-ink/5 px-4 py-4 text-[15px]">Approved. {who} left no email — send the booking link on WhatsApp:</p>}
        {res?.wa && <a href={res.wa} target="_blank" rel="noopener noreferrer" className="inline-block rounded-pill border-[1.5px] border-ink bg-[#25D366] px-5 py-2.5 text-[14px] font-semibold">{res?.sent ? 'Also send it on WhatsApp' : 'Send on WhatsApp'} ↗</a>}
      </div>
    );
  }
  const ERR = { expired: 'This link has expired (14 days).', invalid_link: 'This link isn’t valid.', booking_link_not_configured: 'The booking link isn’t set on the site (NEXT_PUBLIC_BOOKING_URL).' };
  return (
    <div>
      <p className="mb-4 text-[15px]">
        {approve
          ? <>Send {who} the link to book a 30-minute call{email ? <> at <b>{email}</b></> : phone ? ' (no email — you’ll get a WhatsApp link)' : ''}?</>
          : <>Decline {who}’s request? Nothing will be sent to them.</>}
      </p>
      <button onClick={go} disabled={state === 'busy'}
        className={`rounded-input border-[1.5px] px-6 py-3 text-[15px] font-semibold disabled:opacity-60 ${approve ? 'border-[#1F6F43] bg-[#1F6F43] text-white' : 'border-ink bg-card text-ink'}`}>
        {state === 'busy' ? 'Working…' : approve ? 'Confirm: send the booking link' : 'Confirm decline'}
      </button>
      {state === 'error' && <p className="mt-3 text-[14px] text-[#c0392b]">{ERR[res?.error] || 'Something went wrong. Try again.'}</p>}
    </div>
  );
}
