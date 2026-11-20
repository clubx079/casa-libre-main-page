// The casa-libre.com homepage. The page itself is the client component components/HubHome.js (ES/EN/PT toggle,
// forms); this server wrapper only tells it whether the AI SEO feed has guides, so the footer shows a "Guías" link
// to /guias only when that page exists. Without SEO_ADMIN_URL / SEO_PUBLISH_SECRET the feed is empty and the page
// is exactly what it was. Cached 5 min like /guias (POST /api/seo/publish revalidates it at once).
import HubHome from '@/components/HubHome';
import { getHubGuides } from '@/lib/seoFeed';

export const revalidate = 300;

export default async function Page() {
  const guides = await getHubGuides();
  return <HubHome hasGuides={guides.length > 0} />;
}
