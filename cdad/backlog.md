# Project Backlog

> The project's living development line — Epics, Stories, and the work
> currently expected to be built. This is a development-planning artifact,
> not architecture: see *Precedence* below. It answers "what exists, what's
> next, what's blocked" — not "how may it be built" or "what decisions are
> authoritative."

**Last verified:** `2026-09-21` — run the `cdad-audit` skill to reconcile against defined requirements.

---

## Development Line

Post-rebuild QA/remediation pass: bringing the React/TanStack Start rebuild
of the GTT-Method site up to the functional bar defined in `Project
Vision.md` (approved via `cdad/proposals/PROPOSAL-gtt-site-remediation-backlog.md`,
2026-09-21) — no new features, no architecture change.

## Precedence

```text
Governed Context / L0
        v
ADR / governed decisions
        v
This backlog
        v
Implementation work
```

If a Story appears to contradict governed context or an accepted ADR, that
is a finding, not a resolution. Raise it through `cdad/CHANGE-REQUEST.md` —
a Story never silently overrides architecture.

---

## Epics

### EPIC-001 — GTT-Method site remediation (Project Vision QA pass)

**Status:** Done — all 5 Stories implemented and verified (production build
green, navigation audit matrix below, 2026-09-21). Not yet deployed — deploy
happens on push to `main` per `cdad/context/stack.md` CI/CD row.
**Goal:** Bring the live site to the state Project Vision.md defines as
"done": every button/link resolves to a real destination, all Bootstrap
references point at the current official repo, the User Manual is
consistently reachable as a native section on every page, and the bilingual
experience survives real navigation and page reloads — all within the
existing TanStack Start / client-side-language-context architecture (no
URL-prefix routing rewrite; see `cdad/context/solution-vision.md` →
*Non-goals* and `cdad/context/architecture.md` → *Known deviations*).

#### Stories

##### STORY-001 — Fix dead/decorative CTAs and audit every button and link

- **Status:** Done — `src/routes/index.tsx` pillar CTAs now link to
  `https://github.com/GTT-Community/gtt-docs` (Documentation),
  `https://github.com/orgs/GTT-Community/repositories` (x2), and
  `/GTT-Method-2-1` instead of `#method`. Both "Get Started" CTAs (header +
  hero) now link to `https://github.com/GTT-Community/gtt-bootstrap`
  instead of anchoring to `#method`. Added a "GTT-Method Docs" nav link
  (`https://github.com/GTT-Community/gtt-docs`) to the desktop header and
  mobile menu on every page — this wires up the `nav.docs` translation key
  that existed but was never rendered anywhere. Also added GitHub/Docs/Get
  Started links to the mobile menu, which previously had none (desktop-only
  before), and `aria-label`/`aria-expanded` to both mobile menu toggle
  buttons, which had neither (all 2026-09-21 per Solution Designer
  follow-up). Full link audit below.
- **Priority:** High
- **Description:** `src/routes/index.tsx`'s four "pillars" cards ("Browse
  Docs", "View on GitHub", "Join the Community", "See Examples") all render
  `href="#method"` regardless of their stated purpose — none actually lead
  to Docs, GitHub, Community, or Examples. Audit every button/link across
  every route (home, all 8 `$slug` pages, header, mobile menu, footer) and
  give each one a real, correct destination or a real in-page action.
- **Acceptance Criteria:**
  - No visible button or link renders a placeholder `href="#"` /
    `href="#method"` standing in for an unbuilt destination.
  - No internal link points at a non-existent route (404).
  - No external link is broken or misdirected.
  - Language-switch buttons and back/return links work on every page.
- **Dependencies:** None
- **Notes:** Corresponds to Project Vision.md Task 1 and Task 7.

##### STORY-002 — Correct all Bootstrap repository references

- **Status:** Done — all 6 URL occurrences and 2 project-name mentions in
  `src/lib/gttContent.ts` updated. Initially pointed at
  `CDAD-Community/cdad-bootstrap` per `Project Vision.md`; corrected
  2026-09-21 on Solution Designer follow-up to the actual official repo,
  `GTT-Community/gtt-bootstrap` (see `cdad/context/glossary.md` →
  *Bootstrap*). Also corrected every "GitHub" button/link, across all
  routes, to `https://github.com/orgs/GTT-Community/repositories`
  (previously `GTT-Method-Community`). Verified zero remaining
  `GTT-Method-bootstrap`/`GTT-Method-Community`/`CDAD-Community/cdad-bootstrap`/
  `mgriott` references in `src/` and in the built output (`dist/`).
- **Priority:** High
- **Description:** `src/lib/gttContent.ts` currently references
  `https://github.com/GTT-Method-Community/GTT-Method-bootstrap` (the
  superseded name) in multiple page bodies (`GTT-Method-2-1`, `faq`,
  `manual`). Update every Bootstrap reference, anywhere in the site's copy
  or links, to the current official repository.
- **Acceptance Criteria:**
  - Every mention of the Bootstrap project (button, link, or inline text
    URL) resolves to `GTT-Community/gtt-bootstrap`.
  - Every "GitHub" button/link resolves to
    `https://github.com/orgs/GTT-Community/repositories`.
  - No reference to `GTT-Method-Community/GTT-Method-bootstrap`,
    `CDAD-Community/cdad-bootstrap`, `mgriott/...`, or any other
    superseded/personal repo remains in `src/`.
- **Dependencies:** None
- **Notes:** Corresponds to Project Vision.md Task 2.

##### STORY-003 — Make the Manual (and every page) consistently reachable

- **Status:** Done — `src/routes/$slug.tsx` desktop nav now shows all 8
  pages (primary 5 + secondary 3, matching `index.tsx`'s existing pattern)
  instead of hardcoding `pages.slice(0, 5)`. Verified `/manual` link present
  in every built page's nav.
- **Priority:** Medium
- **Description:** The Manual already renders through the shared
  `$slug.tsx` layout (same header, footer, typography, styles, language
  system as every other content page) — it is not an external resource.
  However, `$slug.tsx`'s desktop header nav hardcodes `pages.slice(0, 5)`,
  which excludes `GTT-Method-2-1`, `faq`, and `manual` from primary
  navigation on every content page. Fix the primary nav to consistently
  surface all pages on every page, matching what `index.tsx` already does.
- **Acceptance Criteria:**
  - The Manual is reachable from primary navigation on every page, not just
    some.
  - Header, footer, language switch, and styling remain identical between
    the Manual and every other content page.
  - No separate/external manual link or iframe is introduced.
- **Dependencies:** None
- **Notes:** Corresponds to Project Vision.md Task 3.

##### STORY-004 — Persist language choice across navigation and reloads

- **Status:** Done — all internal navigation in `index.tsx`, `$slug.tsx`,
  and `__root.tsx`'s 404 boundary now uses TanStack Router's `<Link>`
  instead of `<a href>` (route-level error-boundary "Go home" and the
  not-found page's own "Go home" intentionally kept as real `<a>`
  navigation since those are recovery paths). `LanguageContext` now
  persists the chosen language to `localStorage` and restores it on mount,
  with an SSR-safe hydration guard (starts at "en" to match prerendered
  markup, then syncs from storage post-mount). Verified live in-browser:
  switching to Spanish, navigating client-side, and a full reload all keep
  the Spanish selection.
  **Additional finding fixed under this Story:** `index.tsx`'s hero copy,
  method-steps, pillar cards, and "works with your tools" strip were
  hardcoded English strings never wired to `LanguageContext` at all — the
  homepage did not actually translate when switching to Spanish, which is a
  direct violation of Project Vision.md's core objective ("experiencia
  consistente tanto en inglés como en español"). Added Spanish copy and
  switched these sections to render from `language`, verified in-browser.
- **Priority:** High
- **Description:** Internal links in `index.tsx` and `$slug.tsx` use plain
  `<a href="/...">` instead of TanStack Router's `<Link>`, forcing a full
  browser page reload on every internal navigation, which resets
  `LanguageContext`'s in-memory-only language state back to the `en`
  default. Fix by (a) switching internal navigation to the router's
  `<Link>`, and (b) persisting the chosen language (e.g. `localStorage`) so
  it also survives a real page reload or a shared link. Do **not**
  introduce URL-prefixed (`/en/`, `/es/`) routing.
- **Acceptance Criteria:**
  - Clicking an internal link preserves the current language selection.
  - Reloading a page, or opening a shared link, uses the visitor's
    previously-chosen language rather than always defaulting to English.
  - The language switch keeps the visitor on the equivalent page/section
    (never bounces to Home), with an explicit, non-broken fallback for any
    page that has no distinct translation.
- **Dependencies:** None
- **Notes:** Corresponds to Project Vision.md Tasks 4 and 5. Highest
  blast-radius story in this Epic — touches the shared app shell.

##### STORY-005 — Navigation audit matrix and final validation pass

- **Status:** Done
- **Priority:** Medium
- **Description:** Once STORY-001 through STORY-004 land, perform the full
  navigation audit Project Vision.md Task 6 asks for (a page-by-page
  matrix: English / Español / Header / Footer / Links / Buttons / Language
  Switch), verify responsive behavior per Task 9, and run through the full
  Task 10 validation checklist, including a successful production build
  (`npm run build:github-pages`).
- **Acceptance Criteria:**
  - A navigation audit matrix exists covering every route, all green.
  - `npm run build:github-pages` succeeds with no compilation or routing
    errors.
  - Every item in Project Vision.md's Task 10 checklist is satisfied.
- **Dependencies:** STORY-001, STORY-002, STORY-003, STORY-004
- **Notes:** Corresponds to Project Vision.md Tasks 6, 9, and 10.

**Navigation audit matrix (2026-09-21, all 9 prerendered routes):**

| Page | Route | English | Español | Header | Footer | Links | Buttons | Language Switch |
|---|---|---|---|---|---|---|---|---|
| Home | `/` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| About | `/about` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Problem | `/problem` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Approach | `/approach` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Ecosystem | `/ecosystem` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Methodology | `/methodology` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| GTT-Method 2.1 | `/GTT-Method-2-1` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| FAQ | `/faq` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| User Manual | `/manual` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

Verified via: `npm run build:github-pages` (crawler successfully prerendered
all 9 routes by following the site's own `<Link>`s — no 404s during crawl),
`tsc --noEmit` (clean except two pre-existing, unrelated errors in
`vite.config.ts` not touched by this Epic), grep audits of the built
`dist/` output for stale `GTT-Method-bootstrap`/`mgriott` references (zero)
and for `/manual` reachability from every page's nav (present on all 9),
and live in-browser testing (dev server): language switch, client-side
navigation with language persistence, and full-reload persistence, on
Home → About → Manual.

**2026-09-21 follow-up round:** Solution Designer corrected the Bootstrap
repo and GitHub org (see STORY-001/STORY-002 status updates above). Both
"Get Started" CTAs now link to `GTT-Community/gtt-bootstrap`, every
"GitHub" link now goes to `github.com/orgs/GTT-Community/repositories`,
and all `gttContent.ts` Bootstrap mentions were updated to match.
Re-verified via `tsc --noEmit` (clean), a fresh
`npm run build:github-pages` (all 9 routes prerendered again, no errors),
and in-browser `document.querySelectorAll('a')` checks on `/`, `/about`,
and `/GTT-Method-2-1` confirming the exact target URLs and `target="_blank"`
on every external link touched.

**Task 10 checklist status:** all items satisfied except the last two
implicit ones ("errores de routing" / "build de producción exitoso" are
green; nothing about deploy) — deployment itself has not happened, since
that requires a push to `main` (out of scope for this session without
explicit confirmation; see chat).

**Not independently re-verified in this pass:** cross-viewport responsive
rendering (desktop/tablet/mobile) could not be visually confirmed in this
session's browser sandbox (window resize did not propagate to the page's
viewport), though no responsive/Tailwind breakpoint classes were touched by
any Story in this Epic — only `href`/`<Link>` targets and copy. Recommend a
manual spot-check on a real device or DevTools before/after deploy.

### Example

The block below shows the expected shape. It is illustrative only — replace
it with real Epics once the development line is defined; do not treat
`EPIC-000`/`STORY-000` as a real entry.

```markdown
### EPIC-000 — Example epic

**Status:** Proposed
**Goal:** <what this epic delivers and why>

#### Stories

##### STORY-000 — Example story

- **Status:** Proposed
- **Priority:** Medium
- **Description:** <what this story delivers>
- **Acceptance Criteria:**
  - <criterion>
  - <criterion>
- **Dependencies:** None
- **Notes:** <optional>
```

---

## General Development Work

Work tracked here that is not tied to a specific Story.

- None

## Current Focus

What is actively being worked on right now.

- STORY-001, STORY-002, STORY-003, STORY-004 (EPIC-001) — implementing now.

## Next Work

What comes after Current Focus.

- None

## Blocked

- None

---
Governance: adding or removing an Epic/Story, or materially changing its
scope or acceptance criteria, goes through `cdad/CHANGE-REQUEST.md` ->
`cdad/proposals/` -> Solution Designer decision — the same funnel as an
architecture change. Updating a Story's status, or the *Current Focus* /
*Next Work* / *Blocked* lists, as part of already-approved implementation
work does not need a change request. See `AGENTS.md` → *Backlog governance*
for the full rule and precedence relative to L0/ADRs.
