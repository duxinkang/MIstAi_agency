# Mistai Agency — website

Bilingual (zh / en) marketing site for [Mistai Agency](https://www.mistaiagency.com) — the 1:1 web version of the PDF pitch deck.

- **Framework:** Next.js 16 App Router + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 with custom design tokens (`sp-display`, `sp-ball`, `sp-dot-matrix`)
- **i18n:** `next-intl` v4, Chinese at root (`/`), English at `/en/*`
- **CMS:** Sanity schemas ready in `src/sanity/schemas/`; Studio runs standalone via `npx sanity dev` (see below)
- **SEO / GEO:** sitemap.xml, robots.txt with AI-bot allowlist, `/llms.txt`, JSON-LD (`ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`), hreflang alternates

---

## Quick start (local dev)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the Chinese homepage and [http://localhost:3000/en](http://localhost:3000/en) for English.

### Environment variables

Copy `.env.local.example` to `.env.local` and fill in values:

```bash
cp .env.local.example .env.local
```

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used in sitemap, OG meta, JSON-LD). Defaults to `https://www.mistaiagency.com`. |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Set by `npx sanity init`. Required for the site (and Studio) to read/write Sanity content. |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production`. Set by `npx sanity init`. |
| `CONTACT_FORWARD_URL` | Optional. Webhook that receives contact-form submissions (Zapier / Make / custom). |
| `RESEND_API_KEY` | Optional. Uncomment the Resend block in `src/app/api/contact/route.ts` to email submissions. |

---

## Sanity CMS setup (first time)

Schemas live in `src/sanity/schemas/` and are referenced by `sanity.config.ts` at the repo root. Studio runs as a standalone process (not mounted in-app — Next 16 Turbopack isn't compatible with `next-sanity/studio` yet).

Run once to create the Sanity project:

```bash
npx sanity init
```

- Log in / sign up when prompted
- **When asked "Use the default dataset configuration?"** → yes (creates `production` dataset)
- **When asked "Output path"** → anything; the init only needs to write the project ID — our schemas already live in `src/sanity/schemas/` and are wired up via `sanity.config.ts`
- After init, open `.env.local` and add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_new_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Then start Studio in a second terminal:

```bash
npx sanity dev          # opens http://localhost:3333
```

Deploy a hosted Studio (optional) with `npx sanity deploy` → `<yourname>.sanity.studio`.

### What's editable in Studio

| Schema | Purpose |
|---|---|
| **Site settings** (singleton) | Tagline, meta description, contact email, social links, default OG image |
| **Homepage** (singleton) | Hero + problem + stats overrides |
| **Services** | 6 service detail pages (title, intro, steps, SEO, hero image) |
| **Case studies** | Public case studies shown on `/cases` |
| **Team members** | Real photos + bios for `/about` |
| **Pricing plans** | Three tiers (`diagnosis` / `lite` / `full`) |

> Currently all site copy is rendered from `src/messages/{zh,en}.json` for fast iteration. The Sanity schemas are ready but the pages haven't been re-wired to `sanityClient.fetch()` yet — do this incrementally per section as content stabilizes.

> **Why is Studio standalone?** Next 16's build is Turbopack-only, and `next-sanity/studio` currently breaks Turbopack's module graph (`createContext is not a function`). Running Studio via `npx sanity dev` is the supported path until the upstream fix lands; the same `sanity.config.ts` drives both.

---

## Project layout

```
.
├── sanity.config.ts          # Sanity Studio config (mounted at /studio)
├── src/
│   ├── app/
│   │   ├── [locale]/          # i18n-scoped public pages
│   │   │   ├── page.tsx       # Homepage (P1–P8 of the deck)
│   │   │   ├── services/      # /services + /services/[slug]
│   │   │   ├── cases/         # /cases (P11)
│   │   │   ├── about/         # /about (P12+P14+P15)
│   │   │   ├── pricing/       # /pricing (P18)
│   │   │   └── contact/       # /contact (P19)
│   │   ├── api/contact/       # Contact form POST handler
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── llms.txt/          # Route handler — /llms.txt for AI engines
│   ├── components/
│   │   ├── sections/          # Homepage sections (Hero, Problem, Partner, …)
│   │   ├── services/          # Per-service detail blocks
│   │   ├── brand/             # Logo, gradient orbs, decorative SVGs
│   │   ├── ui/                # Container, Button, Pill, Section
│   │   └── forms/ContactForm.tsx
│   ├── i18n/                  # next-intl routing, request config
│   ├── messages/              # zh.json + en.json (full site copy)
│   ├── sanity/                # Studio schemas + env + client
│   └── lib/seo.ts             # Metadata + JSON-LD builders
├── public/
│   ├── videos/                # Real case-study launch videos (Poly, Ava)
│   ├── pdf-pages/             # 19 PDF screenshots (OG fallbacks / brand assets)
│   ├── brand/                 # Legacy logo etc.
│   └── team/                  # Real team photos (add frank.jpg / elaine.jpg / simy.jpg)
└── data-archive/              # Legacy blog / growth / playbooks content — see below
```

---

## Salvaged assets from the previous site

This repo previously hosted a single-page PDF showcase. The rebuild keeps the useful materials:

| Asset | Location | Used in |
|---|---|---|
| **Poly.app launch video** | `/public/videos/poly.mp4` | Wired into `/services/launch-video` "Client cases" grid — clicking the Poly card plays it inline |
| **Ava – Artisan V3.4 launch video** | `/public/videos/ava-artisan.mp4` | Wired to the third case card in `/services/launch-video` (swap the brand mapping in `src/components/services/LaunchVideoDetail.tsx` → `VIDEO_BY_BRAND`) |
| **Legacy logo** | `/public/brand/logo-legacy.jpg` | Reference for future SVG logo work — not displayed anywhere yet |
| **PDF page screenshots (19)** | `/public/pdf-pages/page-01.png`…`page-19.png` | Available as OG / social fallback images; reference when porting additional deck pages |

### Legacy long-form content (archived, not yet wired)

The previous site had three content hubs that are preserved as raw data under `/data-archive/`:

- `/data-archive/lib/blog-posts.json` — long-form blog posts (Meta ads, Clearscope case study, etc.)
- `/data-archive/lib/growth-data.ts` — growth playbooks (A/B testing, positioning, etc.)
- `/data-archive/lib/playbooks-data.ts` — tactical playbooks (ATF design, copywriting patterns, etc.)
- `/data-archive/types/` — matching TS types

These are **not** rendered by any route right now. To re-integrate:
1. Move the data file back under `src/lib/` (keep bilingual shape in mind — current content is Chinese-only)
2. Add a route under `src/app/[locale]/blog/`, `src/app/[locale]/growth/`, or `src/app/[locale]/playbooks/`
3. Wire `generateStaticParams` for slugs + an MDX or server-component renderer

---

## Adding content

### New service

1. Add a slug to `SERVICE_SLUGS` in `src/app/[locale]/services/[slug]/page.tsx`
2. Add `services.items[]` entry and full `serviceDetails.<slug>` block to both `src/messages/zh.json` and `src/messages/en.json`
3. Build a detail component under `src/components/services/<Slug>Detail.tsx` and register it in the switch in `[slug]/page.tsx`
4. Add to sitemap (already automatic — driven by `SERVICE_SLUGS`)
5. Add corresponding doc in Sanity `service` schema if you want it CMS-editable

### New case study

Currently static — edit `cases.items[]` in both locale files, or migrate the `/cases` page to `sanityClient.fetch()` against the `caseStudy` schema.

### New team photo

Drop a square or 4:5 photo under `/public/team/<firstname>.jpg` (lowercase, hyphenated). The `Team` section reads `/team/<name>.jpg` — falls back to gradient + initial if missing.

### New launch video

1. Drop the MP4 under `/public/videos/<brand>.mp4`
2. Add a mapping in `VIDEO_BY_BRAND` in `src/components/services/LaunchVideoDetail.tsx`
3. (Optional) Add a matching entry to `serviceDetails.launch-video.cases` in the message files

---

## SEO / GEO checklist (already wired)

- ✅ `hreflang` alternates on every page (zh-CN / en / x-default)
- ✅ `sitemap.xml` with language alternates
- ✅ `robots.txt` explicitly allows GPTBot, PerplexityBot, Google-Extended, ClaudeBot, etc.
- ✅ `/llms.txt` following the [llmstxt.org](https://llmstxt.org) spec
- ✅ JSON-LD on every page: `ProfessionalService`, per-service `Service`, homepage `FAQPage`, route-level `BreadcrumbList`
- ✅ OpenGraph + Twitter card metadata
- ✅ Single-sentence claims in hero + service intros (easier for LLMs to cite)
- ✅ Canonical URLs (zh = root, en = `/en/*`)

---

## Deployment

Recommended: Vercel.

```bash
npx vercel link      # once
npx vercel --prod
```

Set the env vars from the table above in Vercel project settings. DNS: point `mistaiagency.com` at Vercel's nameservers.

---

## Contact form backend

Out of the box the form validates and returns 200 but doesn't deliver anywhere. Wire it up by either:

**Option A — webhook (fastest):**

Set `CONTACT_FORWARD_URL` to a Zapier / Make webhook that emails you. No code change.

**Option B — Resend (transactional email):**

```bash
npm i resend
```

Set `RESEND_API_KEY` and uncomment the Resend block in `src/app/api/contact/route.ts`.

---

## Scripts

```bash
npm run dev      # Next.js dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production build
```

---

## Tech decisions

- **Next.js over Astro** — better i18n story (`next-intl` middleware), real API routes for the contact form, and Vercel-first deployment story.
- **Sanity over Notion / Strapi** — zero backend ops, first-class TypeScript, live preview, bilingual objects map cleanly to our `zh`/`en` message shape, and `/studio` mounted in-app means one deployment for marketing + CMS.
- **Chinese as default root** — we're a Chinese founding team serving both markets; root-at-zh matches the primary audience and avoids a 3xx redirect penalty on zh traffic.
- **File-based messages during 0→1** — editing JSON is faster than Sanity round-trips while copy is still in flux. Migrate to Sanity per section once content stabilizes.
