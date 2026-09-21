# Constraints

Hard limits this solution must respect. This file is loaded into every AI
session, so keep it short and concrete: only constraints that would change a
decision. Delete every line you have not actually committed to.

## Platform

- Cloud provider: GitHub Pages (primary, live deploy on push to `main`).
  Cloudflare Pages is a configured secondary target (`wrangler.toml`), not
  the primary deploy path.
- Compute model: static prerendering only — no server runtime, no API layer,
  no database. Every route is built to static HTML/JS ahead of time.
- IaC tooling: none — infra is platform config (`wrangler.toml`,
  `.github/workflows/`), not provisioned via IaC tooling.

## Technical

- Runtime and language version: TypeScript on Node 22 (build only); React 19
  + TanStack Start/Router in the browser.
- Datastore: none. Page content lives in `src/lib/gttContent.ts`.
- Communication style: none — no backend calls at runtime. The only network
  activity from the site is outbound links to GitHub.
- This repo is connected to Lovable (see `AGENTS.md`): never force-push or
  rewrite published history on `main` — commits sync back into the Lovable
  editor.
- No unnecessary rewrite of the existing routing/i18n architecture: bilingual
  navigation must be fixed within the current single-URL,
  client-side-language-context model, not replaced with URL-prefixed
  (`/en/`, `/es/`) routing. See `cdad/context/solution-vision.md` →
  *Non-goals*.

## Regulatory and organizational

- Data residency: not applicable — no user data is collected or stored.
- Compliance regime: none applicable — public static content site.
- Budget or quota ceilings that constrain design: none known; both deploy
  targets (GitHub Pages, Cloudflare Pages free tier) are effectively free at
  this site's scale.

## Explicitly out of scope

- Authentication, user accounts, or any server-side data persistence.
- Moving content out of `gttContent.ts` into a CMS.
- Rebuilding URL-prefixed (`/en/`, `/es/`) bilingual routing.

---
Governance: L0. Read-only for AI agents. Changes require Solution Designer
approval via the `cdad-propose-change` skill.
