# Glossary

Domain terms whose meaning in this project differs from the everyday meaning, or
that are ambiguous across teams. Do not define general industry terms.

| Term | Meaning in this project | Not to be confused with |
|---|---|---|
| GTT-Method | "Governance Through Thinking" — the AI-governance methodology this website documents and promotes (About/Problem/Approach/Methodology/FAQ/Manual pages). It is the subject matter of the site. | CDAD |
| CDAD | "Context-Driven AI Development" — the current name of the governance framework and starter kit (`README-CDAD.md`, `cdad/` in this very repo) that this site's own AI-assisted development is governed by, and that GTT-Method's Bootstrap project (`CDAD-Community/cdad-bootstrap`) now ships under. Quick_User.md notes the "conceptual migration: CDAD → GTT-Method". | GTT-Method (the subject the site is *about*, as distinct from the governance process used to *build* the site) |
| Bootstrap (capitalized, this project) | The `CDAD-Community/cdad-bootstrap` repository — the current, official reference implementation referenced throughout the site and in `cdad/context/constraints.md`. | `GTT-method-Community/gtt-method-bootstrap` — a superseded name for the same lineage; must not remain in the site's copy or links. |
| the Manual / Quick User Manual | The `pages` entry with `slug: "manual"` in `src/lib/gttContent.ts`, rendered through the same `$slug.tsx` shell as every other content page. | A separate, externally-hosted manual page — there is none; `Project Vision.md`'s concern is about *nav prominence and consistency*, not the manual living outside the app. |
| Solution Designer | The human owner of this project's governed context (per CDAD's own governance model) — the person who ratifies `cdad/context/`, ADRs, and backlog Epics/Stories. | The website's own "GTT-Method" persona/content, which is unrelated. |

---
Governance: L0. Read-only for AI agents.
