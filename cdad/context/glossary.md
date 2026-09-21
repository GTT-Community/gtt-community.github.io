# Glossary

Domain terms whose meaning in this project differs from the everyday meaning, or
that are ambiguous across teams. Do not define general industry terms.

| Term | Meaning in this project | Not to be confused with |
|---|---|---|
| GTT-Method | "Governance Through Thinking" — the AI-governance methodology this website documents and promotes (About/Problem/Approach/Methodology/FAQ/Manual pages). It is the subject matter of the site. | CDAD |
| CDAD | "Context-Driven AI Development" — the governance framework and starter kit (`README-CDAD.md`, `cdad/` in this very repo) that this site's own AI-assisted development is governed by. Distinct from the site's own Bootstrap project (below). Quick_User.md notes the "conceptual migration: CDAD → GTT-Method". | GTT-Method (the subject the site is *about*, as distinct from the governance process used to *build* the site) |
| Bootstrap (capitalized, this project) | The `GTT-Community/gtt-bootstrap` repository — the current, official reference implementation referenced throughout the site and in `cdad/context/constraints.md`. Corrected 2026-09-21 by the Solution Designer from an earlier, incorrect `CDAD-Community/cdad-bootstrap` guess (see `cdad/proposals/bootstrap/SOURCE-BRIEF.md`, which is `Project Vision.md`'s original — now superseded on this point — verbatim text). | `GTT-method-Community/gtt-method-bootstrap` and `CDAD-Community/cdad-bootstrap` — both superseded names; must not remain in the site's copy or links. |
| GitHub org | `https://github.com/orgs/GTT-Community/repositories` — the org's repositories listing, linked from every "GitHub" button site-wide. | `GTT-method-Community` — a superseded org handle. |
| the Manual / Quick User Manual | The `pages` entry with `slug: "manual"` in `src/lib/gttContent.ts`, rendered through the same `$slug.tsx` shell as every other content page. | A separate, externally-hosted manual page — there is none; `Project Vision.md`'s concern is about *nav prominence and consistency*, not the manual living outside the app. |
| Solution Designer | The human owner of this project's governed context (per CDAD's own governance model) — the person who ratifies `cdad/context/`, ADRs, and backlog Epics/Stories. | The website's own "GTT-Method" persona/content, which is unrelated. |

---
Governance: L0. Read-only for AI agents.
