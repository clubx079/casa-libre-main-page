// Bot protection for /api/contact (contact form + "Book a call", website and app).
// botReason() returns why a submission looks automated, or null for a real person.
// Bots get a normal success reply but no email is sent (see app/api/contact/route.js).
//
// Seen in the wild: Google Play's pre-launch report robot taps through every new app
// build and submits the Book-a-call form with random 6-letter text, the address
// crawlerrobo@gmail.com and the phone 650-499-2804 (Oct 2-3, 2026).

const ROBOT_EMAILS = ['crawlerrobo@gmail.com'];
const ROBOT_EMAIL_DOMAINS = ['cloudtestlabaccounts.com']; // Firebase Test Lab devices
const ROBOT_PHONES = ['6504992804'];

// Short lowercase words a real person might type into the time / reason fields.
const REAL_WORDS = new Set([
  'monday', 'friday', 'sunday', 'martes', 'jueves', 'sabado', 'online', 'invest', 'equity', 'growth',
]);
const looksRandom = (v) => /^[a-z]{6}$/.test(v) && !REAL_WORDS.has(v);

const MIN_FILL_MS = 2500;

export function botReason(body = {}) {
  const s = (v) => String(v == null ? '' : v).trim();

  // Website form only: a hidden field people never see, and time since page load.
  if (s(body.hp)) return 'honeypot';
  if (typeof body.elapsed_ms === 'number' && body.elapsed_ms < MIN_FILL_MS) return 'too_fast';

  const email = s(body.email).toLowerCase();
  const digits = s(body.phone || body.wa).replace(/\D/g, '').slice(-10);
  if (ROBOT_EMAILS.includes(email) || ROBOT_EMAIL_DOMAINS.some((d) => email.endsWith(`@${d}`))) return 'test_robot';
  if (digits && ROBOT_PHONES.includes(digits)) return 'test_robot';

  // Every filled-in free-text field is a random 6-letter lowercase string.
  const texts = [body.name, body.firm, body.country, body.slot, body.reason, body.why].map(s).filter(Boolean);
  if (texts.length >= 2 && texts.every(looksRandom)) return 'random_text';

  return null;
}

// At most `max` submissions per `windowMs` from one IP (in-process; resets on deploy).
export function rateLimited(ip, { store = (globalThis.__clContactRate ||= new Map()), now = Date.now(), max = 5, windowMs = 10 * 60_000 } = {}) {
  if (!ip) return false;
  const recent = (store.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  store.set(ip, recent);
  return recent.length > max;
}
