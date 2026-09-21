# Solution Vision

## Problem

The GTT-Method Community website (this repository) was rebuilt from a prior
static site (`mgriott/gtt-method-site`, extracted into `gttmethod.md`) into a
React/TanStack Start app. The rebuild is functionally incomplete: buttons and
links exist that do not resolve to a real destination, the Bootstrap
repository is still referenced by its old name, the User Manual page,
although already rendered through the shared layout, is not consistently
reachable from every page's navigation, and the bilingual (EN/ES) experience
does not survive a real page load or a shared link, because the selected
language lives only in in-memory React state with no persistence. Visitors —
individuals and teams evaluating GTT-Method as an AI-governance methodology —
experience this as an unfinished, inconsistent site, which undermines trust
in a project whose entire pitch is "governed, disciplined software."

Source of this vision: `Project Vision.md` (repository root), confirmed by
the Solution Designer as the finished statement of what "done" means for this
QA/remediation pass.

## Users

- **Prospective adopters** (individual developers, tech leads) evaluating
  whether to bring GTT-Method / CDAD governance into their own projects — they
  read About/Problem/Approach/Methodology, then look for the Bootstrap repo
  and the Quick User Manual to actually try it.
- **Bilingual visitors** who expect to stay in their chosen language (English
  or Español) as they move through the site, including after a reload or a
  shared link.
- **Community members / contributors** looking for the GitHub org, the
  Bootstrap repository, and the documentation entry points from the site's
  navigation.

## What success looks like

- Every visible button and link on the site resolves to a real, correct
  destination — no placeholder `#` / dead anchors standing in for a pillar
  card's stated action, no 404s, no internal link that accidentally points at
  the wrong language variant of a page.
- Every reference to the Bootstrap project points at
  `https://github.com/GTT-Community/gtt-bootstrap` — the current official
  repository (corrected 2026-09-21 by the Solution Designer; superseding
  `Project Vision.md`'s original `CDAD-Community/cdad-bootstrap`) — with no
  remaining reference to `GTT-method-Community/gtt-method-bootstrap`,
  `CDAD-Community/cdad-bootstrap`, or any personal (`mgriott/...`) fork.
  Every "GitHub" link/button points at
  `https://github.com/orgs/GTT-Community/repositories`.
- The Quick User Manual reads as a native section of the site (shared header,
  footer, language switch, styling) and is reachable from primary navigation
  on every page, not just some.
- A visitor's language choice survives client-side navigation and a full page
  reload, and language-appropriate content is what internal links lead to.
- The language switch keeps the visitor on the equivalent page/section
  instead of bouncing to Home.
- Production build succeeds with no routing or compilation errors, and a
  navigation audit matrix (per page: EN, ES, header, footer, links, buttons,
  language switch) is green.

## Non-goals

- **No unnecessary rewrite.** The existing TanStack Start routing, the file
  content model (`src/lib/gttContent.ts`), and the single-context
  (non-URL-prefixed) language model are the existing architecture and are to
  be reused and corrected, not replaced with a new `/en/`, `/es/` URL-prefixed
  routing scheme, even though the legacy site (and `Project Vision.md`'s
  illustrative examples) used that scheme. `Project Vision.md` itself
  instructs against unnecessary rewrites (its Task 8); the outcome it asks
  for (coherent language persistence, no broken links) is achievable by
  fixing the current architecture's real defects instead.
- Does not cover a redesign of the visual identity, the content/copy itself
  (beyond fixing broken references), or migrating deployment targets.
- Does not stand up a CMS or move content out of `gttContent.ts`.

---
Governance: L0. Read-only for AI agents.
