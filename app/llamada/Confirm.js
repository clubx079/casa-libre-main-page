'use client';
// The one button that acts on a call request (see app/llamada/page.js).
// Text in ES/EN/PT from ./Text.js, following the header pills.
import { useState } from 'react';
import { useLL } from './Text.js';

export default function Confirm({ t, action, name, email, phone }) {
  const { d } = useLL();
  const [state, setState] = useState('idle');   // idle | busy | done | error
  const [res, setRes] = useState(null);
  const who = name || d.them;
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
    if (!approve) return <p className="rounded-input bg-ink/5 px-4 py-4 text-[15px]">{d.declined({ who })}</p>;
    return (
      <div className="space-y-3">
        {res?.sent
          ? <p className="rounded-input bg-[#2f6f43]/10 px-4 py-4 text-[15px] font-semibold text-[#2f6f43]">{d.approvedSent({ who, to: res.to })}</p>
          : <p className="rounded-input bg-ink/5 px-4 py-4 text-[15px]">{d.approvedNoEmail({ who })}</p>}
        {res?.wa && <a href={res.wa} target="_blank" rel="noopener noreferrer" className="inline-block rounded-pill border-[1.5px] border-ink bg-[#25D366] px-5 py-2.5 text-[14px] font-semibold">{res?.sent ? d.alsoWa : d.sendWa} ↗</a>}
      </div>
    );
  }
  const ERR = { expired: d.errExpired, invalid_link: d.errInvalid, booking_link_not_configured: d.errBooking };
  return (
    <div>
      <p className="mb-4 text-[15px]">
        {approve
          ? <>{d.askApprove({ who })}{email ? <> {d.at} <b>{email}</b></> : phone ? d.noEmail : ''}?</>
          : <>{d.askDecline({ who })}</>}
      </p>
      <button onClick={go} disabled={state === 'busy'}
        className={`rounded-input border-[1.5px] px-6 py-3 text-[15px] font-semibold disabled:opacity-60 ${approve ? 'border-[#1F6F43] bg-[#1F6F43] text-white' : 'border-ink bg-card text-ink'}`}>
        {state === 'busy' ? d.working : approve ? d.confirmSend : d.confirmDecline}
      </button>
      {state === 'error' && <p className="mt-3 text-[14px] text-[#c0392b]">{ERR[res?.error] || d.errGeneric}</p>}
    </div>
  );
}
