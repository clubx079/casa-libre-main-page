// /llamada?t=…&a=approve|decline — where the team's Approve / Decline buttons land.
// Shows the request and ONE confirm button (an email scanner that opens the link sends nothing).
// Hub header with the ES/EN/PT pills on top, like every other hub page.
import { readCallToken } from '../../lib/callRequest.js';
import Confirm from './Confirm.js';
import { Lx, LangName } from './Text.js';
import { BlogLangProvider } from '@/components/blog/BlogLang';
import { HubHeader } from '@/components/blog/BlogShell';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Call request · Casa-Libre', robots: { index: false, follow: false } };

export default function CallRequestPage({ searchParams }) {
  const t = String(searchParams?.t || '');
  const action = searchParams?.a === 'decline' ? 'decline' : 'approve';
  const data = readCallToken(t);
  return (
    <BlogLangProvider>
      <div className="min-h-screen bg-paper text-ink">
        <HubHeader />
        <main className="px-4 py-12">
          <div className="mx-auto max-w-[560px] overflow-hidden rounded-card border-[1.5px] border-ink bg-card shadow-hard">
            <div className="bg-ink px-7 py-5 text-paper">
              <div className="text-[20px] font-bold tracking-head">casa-libre<em className="font-serif font-normal italic">.com</em></div>
              <div className="mt-1 font-mono text-[13px] tracking-[.06em] text-[#a3a19b]"><Lx k="title" /></div>
            </div>
            <div className="px-7 py-6">
              {!data ? (
                <p className="text-[15px]"><Lx k="invalid" /></p>
              ) : data.expired ? (
                <p className="text-[15px]"><Lx k="expired" v={{ who: data.name || '—', email: data.email }} /></p>
              ) : (
                <>
                  <table className="mb-5 w-full text-[15px]">
                    <tbody>
                      {[['name', data.name], ['email', data.email], ['phone', data.phone], ['language', data.lang ? <LangName code={data.lang} /> : null]].filter(([, v]) => v).map(([k, v]) => (
                        <tr key={k}><td className="py-1.5 pr-4 align-top font-mono text-[12px] uppercase tracking-[.08em] text-ink/50"><Lx k={k} /></td><td className="py-1.5">{v}</td></tr>
                      ))}
                    </tbody>
                  </table>
                  <Confirm t={t} action={action} name={data.name} email={data.email} phone={data.phone} />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </BlogLangProvider>
  );
}
