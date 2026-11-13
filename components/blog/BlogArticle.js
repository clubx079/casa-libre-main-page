// /blog/<slug> article body. Server wrapper around the client view
// (BlogArticleView.js), which renders Spanish on the server and swaps to the
// pre-translated EN/PT text on the client. Related articles are trimmed to what
// their cards show, and the internal reviewNote never leaves the server.
import BlogArticleView from './BlogArticleView';
import { cardFields } from './PostCard';

export default function BlogArticle({ post, related = [] }) {
  const { reviewNote, ...rest } = post;
  return <BlogArticleView post={rest} related={related.map(cardFields)} />;
}
