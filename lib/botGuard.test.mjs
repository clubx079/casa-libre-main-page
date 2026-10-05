import { test } from 'node:test';
import assert from 'node:assert/strict';
import { botReason, rateLimited } from './botGuard.js';

// Real submissions from Google Play's pre-launch robot (Oct 2-3, 2026), via the app.
const ROBOT = [
  { type: 'call', name: 'yuvuxx', email: 'crawlerrobo@gmail.com', phone: '', slot: 'lucwoq', reason: '', source: 'mobile_app' },
  { type: 'call', name: 'ihpquv', email: 'crawlerrobo@gmail.com', phone: '6504992804', slot: 'fnsxgt', reason: 'boqyno', source: 'mobile_app' },
  { type: 'call', name: 'wgwprj', email: 'crawlerrobo@gmail.com', phone: '', slot: 'dpqfab', reason: '', source: 'mobile_app' },
];

test('Google Play pre-launch robot submissions are bots', () => {
  for (const b of ROBOT) assert.equal(botReason(b), 'test_robot', b.name);
});

test('the same robot text with another email is still caught (random text)', () => {
  assert.equal(botReason({ type: 'call', name: 'gdejds', email: 'someone@gmail.com', slot: 'rzotin', reason: 'gbfgdz' }), 'random_text');
  assert.equal(botReason({ type: 'call', name: 'yuvuxx', phone: '+1 555 123 4567', slot: 'lucwoq' }), 'random_text');
});

test('Firebase Test Lab accounts and the robot phone are bots', () => {
  assert.equal(botReason({ name: 'Ana Pérez', email: 'x123@cloudtestlabaccounts.com' }), 'test_robot');
  assert.equal(botReason({ name: 'Ana Pérez', phone: '+1 (650) 499-2804' }), 'test_robot');
});

test('real people get through', () => {
  for (const b of [
    { type: 'call', name: 'Roland Lallier ', email: 'roland@ableman.co', slot: 'Anytime ', reason: 'I’d like to hear more' },
    { type: 'overview', name: 'Omar Faiz', firm: 'Firm', country: 'Pakistan', email: 'omer22sap@gmail.com', wa: '00000000', stage: 'Series A', why: 'test' },
    { type: 'overview', name: 'Test', country: 'USA', email: 'test@gmail.com' },
    { type: 'call', name: 'carlos', email: 'c@fund.com', slot: 'monday' },       // lowercase name + weekday
    { type: 'call', name: 'carlos', email: 'c@fund.com', slot: 'martes', reason: 'invest' },
    { type: 'overview', name: 'maria', email: 'm@x.com' },                       // one short field only
  ]) assert.equal(botReason(b), null, JSON.stringify(b));
});

test('website form: hidden field filled or submitted too fast = bot', () => {
  const ok = { type: 'overview', name: 'Ana Pérez', email: 'ana@fondo.com' };
  assert.equal(botReason({ ...ok, hp: 'http://spam.example' }), 'honeypot');
  assert.equal(botReason({ ...ok, elapsed_ms: 800 }), 'too_fast');
  assert.equal(botReason({ ...ok, hp: '', elapsed_ms: 12000 }), null);
  assert.equal(botReason(ok), null, 'the app sends neither field — no timing rule then');
});

test('rate limit: 5 per 10 minutes per IP', () => {
  const store = new Map();
  const t0 = 1_000_000;
  for (let i = 0; i < 5; i++) assert.equal(rateLimited('1.2.3.4', { store, now: t0 + i }), false);
  assert.equal(rateLimited('1.2.3.4', { store, now: t0 + 10 }), true);
  assert.equal(rateLimited('5.6.7.8', { store, now: t0 + 10 }), false, 'other IPs unaffected');
  assert.equal(rateLimited('1.2.3.4', { store, now: t0 + 11 * 60_000 }), false, 'window resets');
  assert.equal(rateLimited('', { store, now: t0 }), false, 'unknown IP is not limited');
});
