# Barcha Global

Website for **Barcha Global** — a remote-first digital agency for web, e-commerce, brand and growth.
Parent company of [Territory Growth](https://territorygrowth.dev) (local business division).

Built with Next.js (App Router) and Tailwind CSS. Editorial design alternating dark & light sections, with subtle motion. Deploys to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

**All website text lives in [`lib/site-data.js`](lib/site-data.js).**
Change services, projects, founders, FAQ, email, etc. there — pages update automatically.

| What | Where |
| --- | --- |
| Email, phone, domain | `siteConfig` in `lib/site-data.js` |
| Add / edit a service | `services` array (a page is created at `/services/<slug>`) |
| Add a project | Save a 1440×900 screenshot as `public/work/<name>.webp`, then add it to the `projects` array. Client names/domains are never shown. |
| Brand colours | CSS variables at the top of `app/globals.css` |
| Dark section | Add `theme-dark bg-paper` to any section — everything inside flips to dark |
| Testimonials | `testimonials` array. Only `approved: true` quotes go live; drafts show locally with a "Draft" badge |
| Social links | `socialLinks` array (shown in footer when filled) |

## Pages

`/` · `/services` · `/services/[slug]` · `/work` · `/about` · `/contact` · `/privacy` · `/terms`

## Animations

Add `data-reveal` to any element to fade it in on scroll (optional `style={{ "--d": "100ms" }}` delay).
Respects the visitor's reduced-motion setting.
