// Central source of truth for CleaningNinja — links, contact, NAP, services,
// coverage, testimonials. Every component + JSON-LD schema reads from here so
// nothing drifts out of sync (playbook §5: NAP must be byte-identical).
//
// ⚠️ DEMO PLACEHOLDERS — this is a spec/reference site. Before a real client
// go-live, replace:
//   - phone / waNumber  → the business's real number (drives every CTA + schema)
//   - email             → their inbox
//   - web3formsKey      → free key from https://web3forms.com (quote form target)
//   - abn, address      → their real business details
//   - social links      → their real profiles
const phoneDisplay = '1300 555 000';   // ⚠️ placeholder
const waNumber = '61400000000';        // ⚠️ placeholder — digits only, no +/spaces

export const site = {
  name: 'CleaningNinja',
  fullName: 'CleaningNinja',
  shortName: 'CleaningNinja',
  tagline: 'Spotless. Every time.',
  subtagline:
    'Professional home & commercial cleaning across Australia — booked in 60 seconds, done to a standard you can see.',

  // NAP — Australia-wide service business
  city: 'Sydney',
  region: 'NSW',
  country: 'Australia',
  countryCode: 'AU',
  serviceArea: 'Sydney · Melbourne · Brisbane · Adelaide · Perth',

  // Contact
  phone: phoneDisplay,
  phoneHref: `tel:+${waNumber}`,
  email: 'hello@cleaningninja.com.au', // ⚠️ placeholder
  waNumber,
  waHref: `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Hi CleaningNinja! I'd like a free quote for cleaning."
  )}`,

  // Quote form — Web3Forms (free, no backend). ⚠️ Swap for a real access key.
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',

  hours: 'Mon–Sat · 7am–7pm',

  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;

// WhatsApp deep link with a service pre-filled into the message.
export const bookFor = (service: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hi CleaningNinja! I'd like a free quote for ${service}.`
  )}`;

// ── Services (6) ──────────────────────────────────────────────────────────
// `icon` is the inner markup of a 24×24 stroke SVG (currentColor).
export const services = [
  {
    name: 'Regular House Cleaning',
    img: 'service-house',
    tag: 'Weekly · Fortnightly · One-off',
    body: 'A spotless home without lifting a finger. Kitchens, bathrooms, floors and dusting — done the same trusted way every visit.',
    points: ['Same cleaner each visit', 'Eco-friendly products', 'Fully insured & police-checked'],
    icon: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  },
  {
    name: 'End-of-Lease Bond Clean',
    img: 'service-bond-clean',
    tag: 'Get your bond back — guaranteed',
    body: 'A meticulous, agent-approved clean built around the inspection checklist. If they’re not happy, we come back free.',
    points: ['Real-estate checklist', 'Oven, windows & carpets', '100% bond-back re-clean guarantee'],
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  },
  {
    name: 'Commercial & Office',
    img: 'service-commercial',
    tag: 'After-hours, no disruption',
    body: 'Presentable offices, gyms and retail spaces — cleaned after close so your team walks into fresh every morning.',
    points: ['Flexible after-hours slots', 'Sanitised high-touch zones', 'Consistent, uniformed crews'],
    icon: '<path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16"/><path d="M15 21V9h4v12"/><path d="M8 7h2M8 11h2M8 15h2"/>',
  },
  {
    name: 'Carpet & Upholstery',
    img: 'service-carpet',
    tag: 'Deep steam extraction',
    body: 'Lift years of dirt, stains and allergens from carpets and lounges with hot-water extraction that dries fast.',
    points: ['Stain & odour treatment', 'Pet & allergy safe', 'Fast-dry process'],
    icon: '<path d="M4 7h16v10H4z"/><path d="M4 7l2-3h12l2 3"/><path d="M8 11h.01M12 11h.01M16 11h.01"/>',
  },
  {
    name: 'Window Cleaning',
    img: 'service-window',
    tag: 'Streak-free, inside & out',
    body: 'Crystal-clear windows, tracks and sills — from ground-floor homes to multi-storey shopfronts.',
    points: ['Interior + exterior', 'Screens & tracks included', 'Purified-water finish'],
    icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 3v18M3 12h18"/>',
  },
  {
    name: 'Spring & Deep Clean',
    img: 'service-deep-clean',
    tag: 'Top-to-bottom reset',
    body: 'The full detail — inside cupboards, behind appliances, skirting, fans and every forgotten corner made new.',
    points: ['Inside appliances & cupboards', 'Skirting, fans & vents', 'Perfect before/after moves'],
    icon: '<path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3"/>',
  },
];

// ── Why choose us (3) ─────────────────────────────────────────────────────
export const whyUs = [
  {
    title: 'Vetted & insured',
    body: 'Every cleaner is police-checked, trained and fully insured. We treat your home like our own.',
    icon: '<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/>',
  },
  {
    title: 'Book in 60 seconds',
    body: 'No call-backs, no waiting. Pick a service, tell us your suburb, and we confirm — same day.',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  },
  {
    title: '100% happiness guarantee',
    body: 'Not thrilled with a spot we missed? Tell us within 24 hours and we re-clean it free. Simple.',
    icon: '<path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6C19 16.5 12 21 12 21z"/>',
  },
];

// ── How it works (3 steps) ────────────────────────────────────────────────
export const steps = [
  { n: '01', title: 'Book online', body: 'Choose your service and suburb. Get an instant quote in under a minute — no phone tag.' },
  { n: '02', title: 'We clean', body: 'A vetted, uniformed cleaner arrives on time with everything needed and works to a set checklist.' },
  { n: '03', title: 'You relax', body: 'Walk into a spotless space. Love it or we re-clean free within 24 hours — guaranteed.' },
];

// ── Coverage — cities + representative suburbs ─────────────────────────────
export const coverage = [
  { city: 'Sydney', suburbs: ['CBD', 'Bondi', 'Parramatta', 'Chatswood', 'Manly', 'Surry Hills'] },
  { city: 'Melbourne', suburbs: ['CBD', 'St Kilda', 'Richmond', 'Carlton', 'Brunswick', 'Docklands'] },
  { city: 'Brisbane', suburbs: ['CBD', 'Fortitude Valley', 'South Bank', 'Newstead', 'Toowong'] },
  { city: 'Adelaide', suburbs: ['CBD', 'Glenelg', 'Norwood', 'Unley', 'Prospect'] },
  { city: 'Perth', suburbs: ['CBD', 'Fremantle', 'Subiaco', 'Scarborough', 'Joondalup'] },
];

// ── Testimonials ──────────────────────────────────────────────────────────
export const testimonials = [
  {
    name: 'Sarah M.',
    where: 'Bondi, NSW',
    rating: 5,
    date: 'Bond clean · Mar 2026',
    quote:
      'Booked a bond clean the night before we moved out and got the full deposit back. The place looked better than when we moved in.',
  },
  {
    name: 'James T.',
    where: 'Richmond, VIC',
    rating: 5,
    date: 'Fortnightly · Feb 2026',
    quote:
      'Same cleaner every fortnight, always on time, always thorough. Honestly the easiest recurring service we’ve ever set up.',
  },
  {
    name: 'Priya K.',
    where: 'South Bank, QLD',
    rating: 5,
    date: 'Office clean · Apr 2026',
    quote:
      'Our office has never looked this good. The after-hours crew is invisible — we just arrive to a fresh space every morning.',
  },
  {
    name: 'Daniel R.',
    where: 'Glenelg, SA',
    rating: 5,
    date: 'Deep clean · Jan 2026',
    quote:
      'Missed one spot on the first deep clean, mentioned it, and they were back the next day at no charge. That’s rare these days.',
  },
  {
    name: 'Aisha N.',
    where: 'Parramatta, NSW',
    rating: 5,
    date: 'Bond clean · Apr 2026',
    quote:
      'The agent signed off the inspection on the spot. Booking took two minutes and the quote was exactly what I paid.',
  },
  {
    name: 'Tom & Elise',
    where: 'Carlton, VIC',
    rating: 5,
    date: 'Weekly · Mar 2026',
    quote:
      'We come home every Friday to a spotless flat. Same cleaner, always on time — it’s genuinely the best money we spend.',
  },
  {
    name: 'Marcus W.',
    where: 'Newstead, QLD',
    rating: 5,
    date: 'Office clean · Feb 2026',
    quote:
      'Switched from a big franchise and the difference is night and day. Reliable, thorough, and the team actually cares.',
  },
  {
    name: 'Hannah P.',
    where: 'Subiaco, WA',
    rating: 5,
    date: 'Carpet clean · Mar 2026',
    quote:
      'Carpets that I thought were ruined came up looking brand new. Dried within hours and no chemical smell at all.',
  },
];

// ── Stats ─────────────────────────────────────────────────────────────────
export const stats = [
  { value: 1200, suffix: '+', label: 'Homes & offices cleaned' },
  { value: 98, suffix: '%', label: 'Customer satisfaction' },
  { value: 5, suffix: ' cities', label: 'Across Australia' },
];

// ── Trust bar — the full-width strip under the hero ─────────────────────────
export const trustBar = [
  { value: 4.9, suffix: '', decimals: 1, label: 'Average rating', prefix: '★ ' },
  { value: 300, suffix: '+', decimals: 0, label: 'Verified reviews' },
  { value: 1200, suffix: '+', decimals: 0, label: 'Cleans completed' },
  { value: 100, suffix: '%', decimals: 0, label: 'Bond-back guarantee' },
];

// ── Guarantee — dedicated conversion section ────────────────────────────────
export const guarantee = {
  eyebrow: 'Our promise',
  title: 'The 100% Bond-Back Guarantee',
  lead: 'If your agent or landlord isn’t satisfied with an end-of-lease clean, we return and re-clean the flagged areas free — within 72 hours. In writing, every time.',
  points: [
    'Agent-approved inspection checklist',
    'Free 72-hour re-clean if anything’s flagged',
    'Fully insured & police-checked crews',
  ],
  seal: 'Guaranteed in writing',
};

// ── Before/After pairs — client-generated, identical framing per pair ───────
// `key` maps to the imported image pair in BeforeAfter.astro.
export const beforeAfter = [
  {
    key: 'shower',
    label: 'Shower screen',
    caption: 'Soap scum and limescale lifted to streak-free glass.',
  },
  {
    key: 'oven',
    label: 'Oven deep-clean',
    caption: 'Baked-on grease, gone. A bond-standard oven in one visit.',
  },
  {
    key: 'carpet',
    label: 'Carpet restoration',
    caption: 'Ground-in dirt and stains extracted — plush and bright again.',
  },
];

// ── Team — trust section ────────────────────────────────────────────────────
export const team = {
  eyebrow: 'Who shows up',
  title: 'Vetted, uniformed, and genuinely house-proud',
  lead: 'Every CleaningNinja professional is police-checked, fully insured and trained to our checklist before their first job. No sub-contracted strangers — just a crew you’ll recognise.',
  points: [
    { k: '100%', v: 'Police-checked & insured' },
    { k: 'Same crew', v: 'Wherever possible, every visit' },
    { k: 'Trained', v: 'To a fixed, agent-grade checklist' },
  ],
  members: [
    { name: 'Mia & Jordan', role: 'Bond-clean specialists' },
    { name: 'The Sydney crew', role: 'Homes & offices' },
  ],
};

// ── Real-estate agents who approve our bond cleans (wordmark row) ────────────
export const agentLogos = ['Ray White', 'LJ Hooker', 'First National', 'Belle Property', 'Harcourts'];

// ── FAQs ──────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: 'Do I need to provide cleaning products or equipment?',
    a: 'No. Our cleaners arrive fully equipped with professional, eco-friendly products and their own equipment. If you’d prefer we use your supplies, just let us know when booking.',
  },
  {
    q: 'Are your cleaners insured and background-checked?',
    a: 'Yes. Every CleaningNinja professional is fully insured, police-checked and trained before their first job, so you can trust who’s in your home or business.',
  },
  {
    q: 'What’s your bond-back guarantee on end-of-lease cleans?',
    a: 'Our end-of-lease cleans follow the standard real-estate inspection checklist. If your agent or landlord isn’t satisfied with the cleaning, we’ll return and re-clean the affected areas free within 72 hours.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Fill in the quick quote form or message us on WhatsApp with your suburb and the service you need. We’ll confirm pricing and an available time — usually the same day.',
  },
  {
    q: 'Can I book a recurring clean?',
    a: 'Absolutely. Weekly, fortnightly and monthly plans are our most popular option, and you’ll get the same trusted cleaner each visit wherever possible.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We service Sydney, Melbourne, Brisbane, Adelaide and Perth, including most surrounding suburbs. Not sure if we reach you? Ask in the quote form and we’ll confirm.',
  },
];
