// Registry of SV blog articles (casa-libre.com/blog). Empty for now: the
// country stays out of the blog filters and /blog/pais/sv 404s until an article
// is listed here. Same file shape as content/blog/py/*.js; write internal links as
// relative paths of the country site (/propiedades?…, /publicar, /guias/…) —
// lib/blog.js makes them absolute with UTM tags. Slugs must be unique across
// countries.
const POSTS = [];

export default POSTS;
