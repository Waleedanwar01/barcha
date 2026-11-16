/**
 * ─────────────────────────────────────────────────────────────
 *  BARCHA GLOBAL — SITE CONTENT
 *  All text on the website lives in this one file.
 *  Edit here → every page updates. No need to touch components.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Barcha Global",
  url: "https://barchaglobal.com",
  tagline: "Digital products, brands and growth systems for ambitious companies.",
  description:
    "Barcha Global is a remote-first digital agency building high-performance websites, e-commerce stores, brands and growth campaigns for startups and established companies worldwide.",
  email: "agency@barchaglobal.com",
  phone: "+971 50 606 8973",
  phoneHref: "+971506068973",
  whatsapp: "+92 323 7216881",
  whatsappHref: "923237216881",
  location: "Remote-first · Pakistan & UAE",
  markets: "US · UK · EU · UAE · AU",
};

// Main navigation (header + footer)
export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Social profiles — add links here and they appear in the footer automatically.
// Example: { href: "https://www.linkedin.com/company/barcha-global", label: "LinkedIn" }
export const socialLinks = [];

/* ───────────────────────── HOME ───────────────────────── */

export const hero = {
  eyebrow: "Independent digital agency — est. for global brands",
  // Each array item is one animated line. Wrap a word in *asterisks* for the italic accent.
  lines: ["We design & build", "*digital experiences*", "that grow brands."],
  text: "Strategy, design, engineering and growth under one roof. Barcha Global partners with ambitious companies across the US, UK, Europe, UAE and Australia.",
};

// Honest, verifiable facts only. `count` animates up; `suffix` is appended.
export const highlights = [
  { count: 9, suffix: "+", label: "Live projects shipped" },
  { count: 5, suffix: "", label: "Markets served" },
  { count: 100, suffix: "%", label: "Code & accounts you own" },
  { count: 24, suffix: "h", label: "Reply time on enquiries" },
];

export const principles = [
  {
    title: "Strategy before pixels",
    text: "We understand your business, audience and goals before a single screen is designed.",
  },
  {
    title: "Plain language",
    text: "No jargon and no padded reports. You always know what we're doing and why.",
  },
  {
    title: "No fake promises",
    text: "We don't guarantee rankings or lead counts. We commit to quality work and clear reporting.",
  },
  {
    title: "You own everything",
    text: "Domain, code, content, analytics and ad accounts stay in your name. Always.",
  },
];

/* ──────────────────────── SERVICES ──────────────────────── */
// `icon` must match a key in components/icons.js

export const services = [
  {
    slug: "web-development",
    icon: "code",
    title: "Web Design & Development",
    short: "Fast, custom websites and web apps built on modern frameworks.",
    intro:
      "We design and engineer custom websites and web applications that load fast, rank well and are easy for your team to manage.",
    deliverables: [
      "Custom design — no templates",
      "Next.js / React development",
      "Headless CMS setup",
      "Core Web Vitals optimisation",
      "Analytics & conversion tracking",
      "Ongoing maintenance options",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "ecommerce",
    icon: "cart",
    title: "E-commerce Development",
    short: "Shopify and WooCommerce stores designed to convert.",
    intro:
      "From launch to scale, we build online stores with clean product pages, smooth checkout and the integrations your operations need.",
    deliverables: [
      "Shopify & WooCommerce builds",
      "Custom themes and sections",
      "Payment & shipping setup",
      "Product catalogue migration",
      "Speed and checkout optimisation",
      "App & third-party integrations",
    ],
    stack: ["Shopify", "WooCommerce", "Stripe", "Klaviyo"],
  },
  {
    slug: "wordpress",
    icon: "layers",
    title: "WordPress Development",
    short: "Custom WordPress sites your team can update with ease.",
    intro:
      "Lightweight, secure WordPress builds with custom blocks so your team can publish confidently without breaking the design.",
    deliverables: [
      "Custom theme development",
      "Gutenberg block library",
      "Performance & security hardening",
      "Multilingual setup",
      "Migrations & redesigns",
      "Care plans",
    ],
    stack: ["WordPress", "PHP", "ACF", "Cloudflare"],
  },
  {
    slug: "ui-ux-design",
    icon: "pen",
    title: "UI/UX & Product Design",
    short: "Interfaces that are clear, accessible and built to convert.",
    intro:
      "Research-led product and interface design — from wireframes to a full design system your developers will love.",
    deliverables: [
      "User flows & wireframes",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Design systems",
      "Accessibility review",
      "Developer hand-off",
    ],
    stack: ["Figma", "FigJam", "Framer"],
  },
  {
    slug: "branding",
    icon: "spark",
    title: "Brand Identity",
    short: "Logos, visual systems and messaging that make you memorable.",
    intro:
      "We shape how your company looks and sounds — a consistent identity that works across your website, product and campaigns.",
    deliverables: [
      "Logo & wordmark",
      "Colour & type system",
      "Brand guidelines",
      "Messaging & tone of voice",
      "Social & pitch templates",
      "AI-assisted visual assets",
    ],
    stack: ["Figma", "Illustrator", "Midjourney"],
  },
  {
    slug: "seo",
    icon: "search",
    title: "SEO & AI Search",
    short: "Technical and international SEO, plus visibility in AI answers.",
    intro:
      "We build search visibility on a solid technical foundation — structured data, site architecture and content — so you're found on Google and in AI assistants.",
    deliverables: [
      "Technical SEO audits",
      "International & multi-language SEO",
      "Schema & structured data",
      "Content strategy",
      "AEO / GEO for AI search",
      "Monthly reporting",
    ],
    stack: ["Search Console", "Ahrefs", "Screaming Frog", "GA4"],
  },
  {
    slug: "performance-marketing",
    icon: "chart",
    title: "Performance Marketing",
    short: "Google and Meta ad campaigns managed for real return.",
    intro:
      "Paid campaigns structured around profit, not vanity metrics. Ad spend is paid directly to the platforms, and the accounts stay in your name.",
    deliverables: [
      "Google Search & Performance Max",
      "Meta (Facebook & Instagram) Ads",
      "Landing page optimisation",
      "Conversion tracking setup",
      "Creative testing",
      "Transparent monthly reporting",
    ],
    stack: ["Google Ads", "Meta Ads", "GA4", "Tag Manager"],
  },
  {
    slug: "ai-automation",
    icon: "bolt",
    title: "AI & Automation",
    short: "Practical AI tools and workflows that save your team hours.",
    intro:
      "We connect your tools and add AI where it actually helps — lead handling, content workflows, internal tools and customer support.",
    deliverables: [
      "Workflow automation",
      "AI chat & support assistants",
      "CRM & form integrations",
      "Internal dashboards",
      "Custom web apps (Django / Node)",
      "Training & documentation",
    ],
    stack: ["OpenAI / Claude APIs", "Zapier", "Make", "Django"],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

/* ───────────────────────── PROCESS ───────────────────────── */

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "We learn your business, audience, competitors and goals, then agree on clear scope.",
  },
  {
    step: "02",
    title: "Plan",
    text: "Site architecture, content, tech stack and timeline — documented before design starts.",
  },
  {
    step: "03",
    title: "Build",
    text: "Design and development in short cycles, with regular previews so there are no surprises.",
  },
  {
    step: "04",
    title: "Grow",
    text: "Launch, measure and refine. We stay on as your long-term partner if you need us.",
  },
];

/* ─────────────────────────── WORK ─────────────────────────── */
// Client names and domains are intentionally NOT shown — projects are described
// by type and region only. Screenshots live in /public/work (1440×900 .webp).
// The first 4 projects appear on the homepage.

export const projects = [
  {
    title: "Luxury Car Rental Platform",
    category: "Booking Website",
    region: "UAE",
    text: "Premium rental brand for supercars in Dubai — instant enquiry flow, fleet showcase and WhatsApp-first conversions.",
    tags: ["Web Design", "Development", "SEO"],
    image: "/work/rentals.webp",
  },
  {
    title: "Padel Club Booking Platform",
    category: "Booking Platform",
    region: "United Kingdom",
    text: "Premium padel brand with a bold visual identity and a fast, mobile-first court booking flow.",
    tags: ["Web Design", "Development", "Booking"],
    image: "/work/padel.webp",
  },
  {
    title: "Prefab Manufacturer Website",
    category: "Corporate Website",
    region: "UAE",
    text: "Lead-focused website for a modular construction manufacturer, built to win high-ticket B2B enquiries.",
    tags: ["Web Design", "SEO", "Lead Generation"],
    image: "/work/prefab.webp",
  },
  {
    title: "Tech Reviews Publication",
    category: "Content & Affiliate",
    region: "United States",
    text: "Editorial tech review site with buying guides, comparisons and deal pages — built to rank and monetise.",
    tags: ["WordPress", "SEO", "Affiliate"],
    image: "/work/beastsense.webp",
  },
  {
    title: "Auto Insurance Quote Platform",
    category: "Lead Generation",
    region: "United States",
    text: "Multi-line insurance comparison site with ZIP-based quote flow, trust signals and fast mobile load.",
    tags: ["Landing Pages", "CRO", "SEO"],
    image: "/work/clevercoverage.webp",
  },
  {
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    region: "Pakistan",
    text: "Elegant storefront for a women's fashion label with seasonal collections and cash-on-delivery checkout.",
    tags: ["E-commerce", "WordPress", "Branding"],
    image: "/work/fashion.webp",
  },
  {
    title: "Taxi Insurance Platform",
    category: "Web Application",
    region: "Australia",
    text: "Full-stack quote platform for a specialist taxi insurance provider.",
    tags: ["Full-stack", "Lead Generation"],
    image: "/work/insurance-taxi.webp",
  },
  {
    title: "Territory Growth",
    category: "Agency Website",
    region: "Global",
    text: "Marketing site for our local business division — engineered for speed, local SEO and AI search.",
    tags: ["Brand", "Web Design", "SEO"],
    image: "/work/territory-growth.webp",
  },
  {
    title: "Car Insurance Comparison",
    category: "Lead Generation",
    region: "United States",
    text: "Comparison site with carrier logos, state pages and a single-field quote form above the fold.",
    tags: ["WordPress", "SEO", "CRO"],
    image: "/work/coveragedraft.webp",
  },
  {
    title: "Insurance Comparison Portal",
    category: "Lead Generation",
    region: "United States",
    text: "Clean, trust-first insurance portal with state guides, FAQs and a fast ZIP-code quote flow.",
    tags: ["WordPress", "SEO"],
    image: "/work/autocoverage.webp",
  },
  {
    title: "Sports Court Booking App",
    category: "Web App",
    region: "International",
    text: "Dark, energetic booking experience with real-time slot selection and facility showcase.",
    tags: ["UI/UX", "Development"],
    image: "/work/cricket.webp",
  },
  {
    title: "Auto Insurance Funnel",
    category: "Lead Generation",
    region: "United States",
    text: "Conversion-focused car insurance funnel designed for paid traffic.",
    tags: ["Landing Pages", "CRO"],
    image: "/work/insurance-auto.webp",
  },
  {
    title: "Insurance Rates Portal",
    category: "Full-stack Platform",
    region: "United States",
    text: "Multi-product insurance comparison portal covering property, auto and business cover.",
    tags: ["Full-stack", "SEO"],
    image: "/work/fullstack-app.webp",
  },
  {
    title: "Insurance Savings Funnel",
    category: "Lead Generation",
    region: "United States",
    text: "Lightweight quote funnel designed for paid traffic and fast load times.",
    tags: ["Landing Pages", "Performance"],
    image: "/work/insurance-premium.webp",
  },
];

// Keep the "Live projects shipped" stat in sync with the portfolio.
highlights[0].count = projects.length;

/* ──────────────────────── VENTURES ──────────────────────── */
// Brands owned and operated by Barcha Global. Data mirrors territorygrowth.dev.

export const ventures = [
  {
    name: "Territory Growth",
    link: "https://territorygrowth.dev",
    domain: "territorygrowth.dev",
    label: "Local business division",
    text: "Our dedicated marketing division for roofing, HVAC and plumbing contractors. Territory Growth builds the website, Google Maps presence, ads and AI-search visibility that make a contractor the first call in their service area.",
    image: "/work/territory-growth.webp",
    services: [
      "Website Design & Development",
      "Local SEO",
      "Google Business Profile",
      "Google Ads",
      "Meta Ads",
      "AEO & GEO",
      "Competitor Analysis",
    ],
    facts: [
      { label: "Industries", value: "Roofing · HVAC · Plumbing" },
      { label: "Markets", value: "US · UK · EU · UAE · AU" },
      { label: "Plans from", value: "$600 / location / month" },
      { label: "Terms", value: "Month-to-month, 30-day notice" },
    ],
  },
];

/* ─────────────────────────── ABOUT ─────────────────────────── */

export const about = {
  title: "A small, senior team with global reach.",
  intro:
    "Barcha Global is a remote-first digital agency founded by Waleed Anwar and Asad Anwar. We work directly with founders and marketing teams — no account managers in between, no big-agency layers.",
  story: [
    "We started by building websites and campaigns for clients across the UK, UAE and Australia. As the work grew, one pattern stayed the same: businesses wanted a partner who could think about strategy, design, engineering and growth together — and explain it in plain language.",
    "Today Barcha Global is the parent company for that work. We take on web, e-commerce, brand and growth projects for companies worldwide, and run Territory Growth — our dedicated division for local service businesses.",
  ],
};

export const founders = [
  {
    name: "Waleed Anwar",
    role: "Founder · Web Architect",
    initials: "WA",
    bio: "Computer Science background with deep experience in WordPress and modern JavaScript engineering. Waleed leads technical architecture — performance, Core Web Vitals and structured data on every build.",
    quote:
      "Every business deserves the same speed, engineering rigour and search performance as the world's biggest brands.",
  },
  {
    name: "Asad Anwar",
    role: "Founder · Marketing Lead",
    initials: "AA",
    bio: "Specialist in paid acquisition across Google Ads and Meta Ads. Asad leads strategy and growth — turning traffic into a pipeline you own and control.",
    quote:
      "Stop renting leads. Build a direct customer pipeline you own and control your margins.",
  },
];

/* ────────────────────────── CONTACT ────────────────────────── */

export const projectTypes = [
  "Website / Web App",
  "E-commerce Store",
  "WordPress Site",
  "UI/UX Design",
  "Brand Identity",
  "SEO & AI Search",
  "Performance Marketing",
  "AI & Automation",
  "Something else",
];

export const budgets = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];

export const faqs = [
  {
    q: "Where are you based and who do you work with?",
    a: "We're remote-first with team members in Pakistan and the UAE, and work with clients in the US, UK, Europe, UAE and Australia.",
  },
  {
    q: "How long does a typical website take?",
    a: "Most marketing websites take 3–6 weeks from kickoff to launch. Larger web apps and stores are scoped individually.",
  },
  {
    q: "Do I own the website and accounts?",
    a: "Yes. Your domain, code, content, analytics and ad accounts are always in your name.",
  },
  {
    q: "I run a local service business — can you help?",
    a: "Yes — through Territory Growth, our dedicated division for roofing, HVAC and plumbing contractors in the US, UK, Europe, UAE and Australia. Plans start at $600 per location per month, on month-to-month terms.",
  },
];

/* ─────────────────────────── LEGAL ─────────────────────────── */

export const legal = {
  updated: "November 2026",
  privacy: [
    {
      heading: "Information we collect",
      text: "We only collect information you send us through our contact form or by email — such as your name, email address and project details — so we can respond and prepare proposals.",
    },
    {
      heading: "Analytics",
      text: "We may use privacy-friendly analytics and basic server logs to understand how the website is used and to improve performance.",
    },
    {
      heading: "Sharing",
      text: "We do not sell personal data. We only share it with service providers needed to run our business (for example, email hosting) and never for their own marketing.",
    },
    {
      heading: "Your rights",
      text: `You can ask us to access, correct or delete your data at any time by emailing ${siteConfig.email}.`,
    },
  ],
  terms: [
    {
      heading: "Proposals & scope",
      text: "Every project starts with a written proposal. Scope, timelines, deliverables and fees are confirmed in writing before work begins.",
    },
    {
      heading: "Client responsibilities",
      text: "Timelines depend on receiving content, feedback and approvals from the client on time.",
    },
    {
      heading: "Ownership",
      text: "On full payment, ownership of project deliverables transfers to the client, as set out in the signed agreement.",
    },
    {
      heading: "No guarantees",
      text: "We do not guarantee specific search rankings, traffic or lead numbers, as these depend on factors outside our control.",
    },
  ],
};
