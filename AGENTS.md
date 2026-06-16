# AGENTS.md — template-ecommerce-luxury

> Standalone SEOJack website template: a premium luxury e-commerce demo page. Part of the NEO-1 workspace (see root ../../../AGENTS.md).

## What it is
A lean, single-page Next.js 16 marketing/demo template showcasing a premium e-commerce
experience (elegant serif type, gold accents, product grid, quick view, collections).
It is one of the SEOJack template gallery entries — registry id `tpl_ecommerce_luxury` —
deployed to its own domain and embedded in an iframe on seojack.net's `/demo/[id]` viewer.
Designed to be SEO-indexable on its own and usable as a builder seed.

## Stack
- Next.js 16 (App Router), React 19, React DOM 19
- TypeScript 5.7 (strict), `@/*` path alias
- Scoped CSS only — no Tailwind, no Convex, no Clerk
- `lucide-react` for icons
- Images optimized via Next remotePatterns (`cdn.seojack.website`)

## Structure
- `app/layout.tsx` — SEO metadata, canonical, OG/Twitter, JSON-LD, theme color
- `app/page.tsx` — renders `<DemoBody />`
- `app/DemoBody.tsx` — `'use client'`, font link + scoped CSS inject + sections
- `app/styles.ts` — one scoped CSS literal (selectors prefixed `.ecommerce-luxury-demo`)
- `app/content.ts` / `app/data.ts` — typed, realistic content
- `app/primitives.tsx` — shared motion primitives (Reveal, Headline, Magnetic, Marquee)
- `app/SeojackCredit.tsx` — footer credit / inbound link (stripped when used as builder seed)
- `app/sitemap.ts`, `app/robots.ts` — indexable for organic discovery
- `next.config.ts` — image remotePatterns; intentionally no frame-blocking headers

## Commands
Package manager: npm (only `package-lock.json` present).
- Install: `npm install`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Start (prod): `npm run start`
- Lint: `npm run lint`
No test script defined.

## Conventions & notes
- All CSS selectors are prefixed `.ecommerce-luxury-demo` to keep styles scoped.
- Do NOT set `X-Frame-Options: DENY` or `frame-ancestors 'none'` in `next.config.ts` —
  the template is embedded in an iframe on seojack.net's `/demo/[id]` viewer.
- `SeojackCredit.tsx` provides the footer credit / inbound link and is stripped when the
  template is used as a builder seed.
- Live: https://ecommerce-luxury.templates.seojack.website
- Showcased: https://seojack.net/templates/tpl_ecommerce_luxury
- Deploy: own GitHub repo + own Vercel project, production domain above.
  See `docs/templates-github-org.md` (in the workspace) for the multi-repo setup.
- No environment variables are required by this template.

## Provenance
Clone of https://github.com/seojack-templates/template-ecommerce-luxury.git. Default branch main.
