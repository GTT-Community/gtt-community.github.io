# Principles

Design principles in force. A principle earns its place only if it rules
something out. If a principle would never cause you to reject a pull request,
delete it.

## Format

Each principle: the rule, then the trade-off it accepts.

- **No decorative buttons or links** — every `<a>`/button-styled element must
  resolve to a real destination (internal route, real external URL, or a real
  in-page action). Rules out placeholder `href="#"` / `href="#method"`
  reused as a stand-in for an unbuilt destination. Accepts: a card or CTA
  with no real destination yet stays unbuilt (or is cut) rather than shipped
  with a fake link.
- **Reuse the existing routing and content model before adding a new one** —
  rules out introducing a second navigation system, a parallel manual-only
  page/route, or URL-prefixed i18n routing to solve problems the existing
  `LanguageContext` + single-route model can solve. Accepts: some fixes
  (e.g. language persistence) take more care to retrofit onto existing state
  than a from-scratch redesign would.
- **Internal navigation uses the router's `<Link>`, not plain `<a href>`** —
  rules out client-side state (like the active language) silently resetting
  because a "same-site" link actually forced a full browser navigation.
  Accepts: care needed when a link must be a real `<a>` (external URLs,
  anchors within the page).
- **One canonical Bootstrap reference** — every mention of the Bootstrap
  project, anywhere in the site, points at
  `https://github.com/GTT-Community/gtt-bootstrap`, and every "GitHub" link
  points at `https://github.com/orgs/GTT-Community/repositories`. Rules out
  mixing in the superseded `GTT-Method-Community/GTT-Method-bootstrap` or
  `CDAD-Community/cdad-bootstrap` names, or any personal fork URL. Accepts:
  content written against an old name needs updating when found, not left
  as "still basically right."

## Anti-examples

"Write clean code", "prefer simplicity", "follow best practices". These rule
nothing out and cost context tokens to carry.

---
Governance: L0. Read-only for AI agents.
