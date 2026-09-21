# Proposed Backlog Change

Kind: new Epic (with 5 new Stories)
Epic/Story ID: EPIC-001 (new), STORY-001 through STORY-005 (new)
Current state: `cdad/backlog.md` has no Epics defined ("No Epics are currently defined.")

## Source

`Project Vision.md` (project root), confirmed by the Solution Designer as the
finished statement of this remediation pass, and staged verbatim at
`cdad/proposals/bootstrap/SOURCE-BRIEF.md` during the `cdad-bootstrap` run
that produced `cdad/context/solution-vision.md`. Its 10 tasks are mapped
below onto concrete defects found by reading the actual codebase
(`src/routes/index.tsx`, `src/routes/$slug.tsx`,
`src/contexts/LanguageContext.tsx`, `src/lib/gttContent.ts`), not assumed
from the task list alone.

## Suggested change

Add one Epic and five Stories to `cdad/backlog.md`:

```markdown
### EPIC-001 — GTT-Method site remediation (Project Vision QA pass)

**Status:** Proposed
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

- **Status:** Proposed
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
- **Notes:** Corresponds to Project Vision.md Task 1 and Task 7 (internal vs.
  external link correctness).

##### STORY-002 — Correct all Bootstrap repository references

- **Status:** Proposed
- **Priority:** High
- **Description:** `src/lib/gttContent.ts` currently references
  `https://github.com/GTT-Method-Community/GTT-Method-bootstrap` (the
  superseded name) in multiple page bodies (`GTT-Method-2-1`, `faq`,
  `manual`). Update every Bootstrap reference, anywhere in the site's
  copy or links, to `https://github.com/CDAD-Community/cdad-bootstrap`.
- **Acceptance Criteria:**
  - Every mention of the Bootstrap project (button, link, or inline text URL)
    resolves to `CDAD-Community/cdad-bootstrap`.
  - No reference to `GTT-Method-Community/GTT-Method-bootstrap`,
    `mgriott/...`, or any other superseded/personal repo remains in `src/`.
- **Dependencies:** None
- **Notes:** Corresponds to Project Vision.md Task 2. `gttmethod.md` at the
  project root (the original content-extraction source doc) is reference
  material, not shipped content, and is out of scope for this story unless
  the Solution Designer wants it corrected too.

##### STORY-003 — Make the Manual (and every page) consistently reachable

- **Status:** Proposed
- **Priority:** Medium
- **Description:** The Manual already renders through the shared `$slug.tsx`
  layout (same header, footer, typography, styles, language system as every
  other content page) — it is not an external resource. However,
  `$slug.tsx`'s desktop header nav hardcodes `pages.slice(0, 5)`, which
  excludes `GTT-Method-2-1`, `faq`, and `manual` from primary navigation on
  every content page (they're reachable only via the mobile menu or the
  in-article page-to-page nav at the bottom). Fix the primary nav to
  consistently surface all pages (or a deliberately-designed grouping, e.g.
  a "Documentation" cluster per Project Vision.md's illustrative IA) on
  every page, matching what `index.tsx` already does.
- **Acceptance Criteria:**
  - The Manual is reachable from primary navigation on every page, not just
    some.
  - Header, footer, language switch, and styling remain identical between
    the Manual and every other content page (already true — verify it stays
    true).
  - No separate/external manual link or iframe is introduced.
- **Dependencies:** None
- **Notes:** Corresponds to Project Vision.md Task 3.

##### STORY-004 — Persist language choice across navigation and reloads

- **Status:** Proposed
- **Priority:** High
- **Description:** Internal links in `index.tsx` and `$slug.tsx` use plain
  `<a href="/...">` instead of TanStack Router's `<Link>`, which forces a
  full browser page reload on every internal navigation. Because the
  selected language lives only in in-memory React state
  (`LanguageContext`), every full reload resets it back to the `en`
  default — this is the concrete mechanism behind "language doesn't stay
  consistent" in Project Vision.md Tasks 4 and 5. Fix by (a) switching
  internal navigation to the router's `<Link>` for genuine client-side
  transitions, and (b) persisting the chosen language (e.g. `localStorage`,
  read on `LanguageProvider` init) so it also survives a real page reload or
  a shared link. Do **not** introduce URL-prefixed (`/en/`, `/es/`) routing —
  ruled out by Project Vision.md's own Task 8 and recorded as a non-goal in
  `cdad/context/solution-vision.md`.
- **Acceptance Criteria:**
  - Clicking an internal link preserves the current language selection.
  - Reloading a page, or opening a shared link, uses the visitor's
    previously-chosen language rather than always defaulting to English.
  - The language switch keeps the visitor on the equivalent page/section
    (never bounces to Home), with an explicit, non-broken fallback for any
    page that has no distinct translation.
- **Dependencies:** None
- **Notes:** Corresponds to Project Vision.md Tasks 4 and 5. This is the
  story most likely to touch shared code (`__root.tsx`,
  `LanguageContext.tsx`, every route file that renders internal links) —
  flagged as the highest-blast-radius story in this Epic.

##### STORY-005 — Navigation audit matrix and final validation pass

- **Status:** Proposed
- **Priority:** Medium
- **Description:** Once STORY-001 through STORY-004 land, perform the full
  navigation audit Project Vision.md Task 6 asks for explicitly (a
  page-by-page matrix: English / Español / Header / Footer / Links /
  Buttons / Language Switch) covering every route, verify responsive
  behavior (desktop/tablet/mobile, including the mobile menu) per Task 9,
  and run through the full Task 10 validation checklist before considering
  this Epic done, including a successful production build
  (`npm run build:github-pages`).
- **Acceptance Criteria:**
  - A navigation audit matrix exists (in the PR/commit description or as a
    recorded artifact) covering every route in the site, all green.
  - `npm run build:github-pages` succeeds with no compilation or routing
    errors.
  - Every item in Project Vision.md's Task 10 checklist is satisfied.
- **Dependencies:** STORY-001, STORY-002, STORY-003, STORY-004
- **Notes:** Corresponds to Project Vision.md Tasks 6, 9, and 10. This is
  verification work, not new build scope — kept as its own Story because
  Project Vision.md explicitly asks for the matrix as a deliverable, not
  merely as an implicit QA step.
```

## Reason

`Project Vision.md` is a finished, Solution-Designer-authored statement of
required outcomes for this site, but none of it is currently tracked as
committed development-line work — `cdad/backlog.md` has no Epics at all.
Per `AGENTS.md` → *Backlog governance* and this file's own precedence rule,
adding this work to the backlog (rather than treating it as ambient
implementation) makes it visible, sequenceable, and auditable instead of an
informal to-do list living only in a root-level Markdown file.

## Contradicts governed context or an ADR?

No. All five Stories operate strictly within the architecture recorded in
`cdad/context/architecture.md` (TanStack Start, file-based routing, single
URL per page, client-side `LanguageContext`) and respect the non-goal in
`cdad/context/solution-vision.md` against rebuilding URL-prefixed i18n
routing. STORY-004 is the one story that touches shared app-shell code
(`__root.tsx`, `LanguageContext.tsx`); it stays within the existing
component boundaries recorded in `cdad/context/stack.md` §5 (no new modules,
no new dependency edges).

## Impact

`src/routes/index.tsx`, `src/routes/$slug.tsx`, `src/routes/__root.tsx`,
`src/contexts/LanguageContext.tsx`, `src/lib/gttContent.ts`. No datastore,
no API, no deployment-topology change — same GitHub Pages / Cloudflare Pages
static build. No other module in `cdad/context/stack.md`'s component map is
touched.

## Risk

Low-to-medium. The highest-risk item is STORY-004 (language persistence +
switching to `<Link>`), since it touches the shared app shell and every
route's navigation markup — a mistake there could break navigation
site-wide, which is exactly what STORY-005's audit/build-gate is meant to
catch before the Epic is called done. STORY-001–003 are page/content-level
and low risk individually.

Status: Requires Solution Designer approval
