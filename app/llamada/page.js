// /llamada?t=…&a=approve|decline — where the team's Approve / Decline buttons land.
// Shows the request and ONE confirm button (an email scanner that opens the link sends nothing).
import { readCallToken } from '../../lib/callRequest.js';
import Confirm from './Confirm.js';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Call request · Casa Libre', robots: { index: false, follow: false } };

export default function CallRequestPage({ searchParams }) {
  const t = String(searchParams?.t || '');
  const action = searchParams?.a === 'decline' ? 'decline' : 'approve';
  const data = readCallToken(t);
  const LANG = { es: 'Spanish', en: 'English', pt: 'Portuguese' };
  return (
    <main className="min-h-screen bg-paper px-4 py-12 text-ink">
      <div className="mx-auto max-w-[560px] overflow-hidden rounded-card border-[1.5px] border-ink bg-card shadow-hard">
        <div className="bg-ink px-7 py-5 text-paper">
          <div className="text-[20px] font-bold tracking-head">casa-libre<em className="font-serif font-normal italic">.com</em></div>
          <div className="mt-1 font-mono text-[13px] tracking-[.06em] text-[#a3a19b]">Call request</div>
        </div>
        <div className="px-7 py-6">
          {!data ? (
            <p className="text-[15px]">This link isn’t valid. Open it again from the email.</p>
          ) : data.expired ? (
            <p className="text-[15px]">This request is older than 14 days, so the link has expired. Reply to {data.name || 'them'} directly{data.email ? ` at ${data.email}` : ''}.</p>
          ) : (
            <>
              <table className="mb-5 w-full text-[15px]">
                <tbody>
                  {[['Name', data.name], ['Email', data.email], ['Phone / WhatsApp', data.phone], ['Language', LANG[data.lang]]].filter(([, v]) => v).map(([k, v]) => (
                    <tr key={k}><td className="py-1.5 pr-4 align-top font-mono text-[12px] uppercase tracking-[.08em] text-ink/50">{k}</td><td className="py-1.5">{v}</td></tr>
                  ))}
                </tbody>
              </table>
              <Confirm t={t} action={action} name={data.name} email={data.email} phone={data.phone} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
