// Card for an article in the /blog index, category and country pages, plus the
// filter pills. Hub design: white card, ink border, hard shadow on hover.
// Server wrapper: passes only the fields a card shows to the client view
// (BlogCards.js), so the full article bodies never reach the client payload.
import { PostCardView, CategoryPills, CountryPills, CountryTag } from './BlogCards';

export { CategoryPills, CountryPills, CountryTag };

export const cardFields = (p) => ({
  slug: p.slug,
  h1: p.h1,
  description: p.description,
  country: p.country,
  category: p.category,
  datePublished: p.datePublished,
  readingMinutes: p.readingMinutes,
});

export default function PostCard({ post, big = false }) {
  return <PostCardView post={cardFields(post)} big={big} />;
}
