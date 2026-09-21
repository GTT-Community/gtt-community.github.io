# Architecture

The current architecture of this solution. Loaded on demand, not at session
start — so it can be longer than `constraints.md`, but every section should
still be something an agent would act on.

## Architectural style

Statically-prerendered single-page application. TanStack Start (file-based
routing on top of TanStack Router) renders every route at build time
(`prerender.enabled: true`) into static HTML/JS, shipped with no backend
service and no database — it is a content/marketing site, not a service.
There is exactly one dynamic catch-all content route (`/$slug`) driven by a
data table in source, plus the home route (`/`).

## Modules and boundaries

| Module | Responsibility | May depend on | Must not depend on |
|---|---|---|
| `src/routes/index.tsx` | Home page (hero, method overview, pillars, tools strip) | `contexts/LanguageContext`, `lib/gttContent`, `components/Footer` | Route-specific logic belonging to `$slug.tsx` |
| `src/routes/$slug.tsx` | Generic content-page shell (header, nav, article renderer, footer) for every non-home page, including `about`, `problem`, `approach`, `ecosystem`, `methodology`, `gtt-method-2-1`, `faq`, and `manual` | `contexts/LanguageContext`, `lib/gttContent`, `components/Footer` | A second, parallel manual-only page/route — the Manual is a `pages` entry like any other, not a special case |
| `src/routes/__root.tsx` | App shell: HTML document, `<head>`, error/404 boundaries, wraps the tree in `QueryClientProvider` + `LanguageProvider` | — | Page-specific markup |
| `src/contexts/LanguageContext.tsx` | Holds the active language (`en`/`es`) as in-memory React state and a small UI-string dictionary (`nav.*`, `footer.*`); exposes `useLanguage()` | — | Page body copy (that lives in `gttContent.ts`, not here) |
| `src/lib/gttContent.ts` | The content model: `pages[]` array, each entry carrying `slug`, `titleEn/Es`, `descriptionEn/Es`, `contentEn/Es` (Markdown-ish string rendered by a hand-rolled parser in `$slug.tsx`), plus `searchContent()` | — | Presentation/layout concerns |
| `src/components/Footer.tsx` | Shared site footer | `contexts/LanguageContext` | — |
| `src/components/ui/*` | shadcn/Radix UI primitives (buttons, dialogs, etc.) | Radix packages | App-specific content/data |

## Integration strategy

No external services are called at runtime. The only "integrations" are
outbound links to GitHub (the GTT-method-Community org and the Bootstrap
repository). There is no API layer, no auth, no messaging — `@tanstack/react-query`'s
`QueryClientProvider` is present in the shell but nothing in the current
codebase issues a query through it.

## Data model ownership

All page copy (bilingual) lives in the single `pages` array in
`src/lib/gttContent.ts`. This is the one place that owns page content; it
is not duplicated elsewhere. `gttmethod.md` and `Quick_User.md` at the
project root are the original extraction/source documents this content was
built from — reference material, not runtime data.

## Deployment topology

Two build targets share the same TanStack Start codebase:

- **GitHub Pages** (primary, live): `npm run build:github-pages` sets
  `TARGET=github-pages`, which switches `vite.config.ts`'s Nitro config to
  crawl-and-prerender every route to static files under `dist/`, deployed via
  `.github/workflows/*.yml` (GitHub Actions → `actions/deploy-pages`) on every
  push to `main`.
- **Cloudflare Pages** (secondary, configured but not the primary deploy
  path): `wrangler.toml` targets `.output/public` via `npm run
  build:cloudflare`, using `src/server.ts` as the Nitro server entry.

## Known deviations

- **Bilingual routing is not URL-based.** The legacy static site (see
  `gttmethod.md`) served English and Spanish under separate URL prefixes
  (`/en/...`, `/es/...`), and `Project Vision.md`'s own illustrative examples
  use that scheme. The current rebuild deliberately does not: there is one
  URL per page, and the visible language is a client-side toggle
  (`LanguageContext`) shared across the whole app. This is treated as the
  current architecture, not an error to silently "fix" back toward URL
  prefixes — see `solution-vision.md` → *Non-goals*. Its real defect (the
  language choice does not persist across a page reload, and internal
  navigation currently uses plain `<a href>` instead of the router's `<Link>`,
  which forces a full page reload and therefore resets the language back to
  the `en` default on every click) is implementation work, not an
  architecture change.
- **Primary in-page navigation is inconsistent per page.** `$slug.tsx`'s
  desktop header only surfaces `pages.slice(0, 5)` (`about` through
  `methodology`), leaving `gtt-method-2-1`, `faq`, and `manual` out of the
  primary nav on every content page (they do appear in the mobile menu and in
  the in-article page-to-page nav at the bottom). `index.tsx`'s header does
  surface all pages, split into a primary and secondary group. This asymmetry
  is a known defect the QA pass in `Project Vision.md` targets, not an
  intentional design.
- **Some homepage CTAs are non-functional.** The `pillars` cards on
  `index.tsx` ("Browse Docs", "View on GitHub", "Join the Community", "See
  Examples") all render their link with `href="#method"` regardless of the
  card's stated purpose — none of them actually go to Docs, GitHub, Community,
  or Examples. This is a known defect, not intentional.

---
Governance: L0. Read-only for AI agents. Changes require an approved ADR.
