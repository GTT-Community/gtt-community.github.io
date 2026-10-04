# ADR-002 — Cloudflare Web Analytics as the single third-party runtime call

- Status: Accepted
- Date: 2026-10-04
- Approved by: Solution Designer
- Supersedes: none (amends the "no network calls at runtime" statements recorded under ADR-001)

## Context

The site is a statically prerendered content site with no backend. Until now
its governed context said it makes no third-party network call at runtime and
collects no user data:

- `cdad/context/constraints.md` — "The only network activity from the site is
  outbound links to GitHub." and "no user data is collected or stored."
- `cdad/context/architecture.md` — "No external services are called at
  runtime."
- `cdad/context/stack.md` — no metrics pipeline of any kind.

On 2026-10-03 the site was reworked to be found by search engines and LLMs as
the reference for the GTT methodology (sitemap, `llms.txt`, structured data,
canonical URLs on `gtt-method.org`). There is no way to see whether that works:
GitHub Pages provides no visit statistics, and Search Console and Bing
Webmaster Tools only report visits arriving from their own search results.
Direct visits, links from GitHub and referrals from LLM assistants are
invisible.

The full reasoning is in `cdad/proposals/PROPOSAL-cloudflare-web-analytics.md`,
approved by the Solution Designer on 2026-10-04.

## Decision

The site loads the Cloudflare Web Analytics beacon on every public page. This
is the only third-party script and the only third-party runtime call the site
is allowed to make; the rest of the constraint stays in force.

The integration is one snippet, identical everywhere, with the single token
Cloudflare issued for `gtt-method.org`, placed immediately before `</body>`:

```html
<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "761f52d721264b3f8f259a0892e3e5d6"}'></script><!-- End Cloudflare Web Analytics -->
```

It is installed in exactly two files:

- `src/routes/__root.tsx`, once in the root shell, which covers the 11
  prerendered pages;
- `public/404.html`, so visits to non-existent URLs are measured too.

## Alternatives considered

| Option | Why it lost |
|---|---|
| No analytics; rely on Google Search Console and Bing Webmaster Tools | Only reports visits arriving from those search engines; direct, GitHub and LLM referrals stay invisible |
| Cloudflare automatic injection by proxying the domain through Cloudflare | Requires changing DNS for `gtt-method.org`, which is out of scope |
| Another cookieless vendor (Plausible, GoatCounter) | Needs the same exception and adds a new vendor or paid plan; a Cloudflare account already exists for the secondary deploy target |
| Google Analytics | Sets cookies and would need a consent banner, a design and content change |
| Leaving `public/404.html` out | Visits to broken or removed URLs, such as `/manual/`, are exactly what needs to be seen |

## Consequences

Easier: page views, entry pages, referrers and web vitals are visible for all
12 generated pages, with no dependency added to `package.json` and no change to
DNS, GitHub Pages settings, the deploy workflow, `vite.config.ts` or
`wrangler.toml`.

Harder: the site can no longer state that it makes no third-party call and
collects nothing. Visitors' browsers now contact `static.cloudflareinsights.com`
and send usage measurements to Cloudflare, and each visitor's IP address
reaches Cloudflare at the network level.

Locked in:

- Exactly one third-party runtime integration is permitted. A second one needs
  its own ADR.
- The same snippet and token on every page; no per-page variants.
- The site must keep working identically when the beacon is blocked or
  unavailable. Nothing may depend on it.
- The token is a public identifier, not a secret; the stack row "Secrets: None
  required" is unchanged.

Not decided here: whether the site needs a privacy notice. The site has none
today. That is a legal question and, if answered yes, a separate content
change.

## Risks

- **Cloudflare's privacy claims are taken on trust.** Cloudflare documents the
  product as using no cookies, no `localStorage` and no fingerprinting by IP or
  User-Agent. This was not independently verified. Signal: a change in
  Cloudflare's product terms, or cookies or storage entries appearing in the
  browser on `gtt-method.org`.
- **A page ships without the snippet, or with it twice.** Signal: counting
  `static.cloudflareinsights.com/beacon.min.js` in each generated HTML file
  after a build gives a number other than 1.
- **React hydration mismatch** from a raw `<script>` in the root shell. Signal:
  a hydration warning in the browser console on the built site.
- **The exception widens.** Signal: any other third-party host appearing in the
  built HTML.
- **A privacy disclosure turns out to be required.** Signal: legal review or a
  visitor complaint.

## Stack map delta

| Section | Row | Before | After |
|---|---|---|---|
| Header | Governing ADRs | ADR-001 | ADR-001, ADR-002 |
| 1. Stack at a glance | Observability | Browser `console.error` + a Lovable error-reporting hook on route error boundaries. No metrics/traces/alerting pipeline. Locked by ADR-001 | Same, plus: Cloudflare Web Analytics beacon for page-view and web-vitals metrics (third-party script, cookieless). No traces/alerting pipeline. Locked by ADR-001, ADR-002 |
| 2. Component map | Diagram edges | Browser → GitHub Pages, Cloudflare Pages, GitHub | Adds node "Cloudflare Web Analytics" and edge Browser → Cloudflare Web Analytics (beacon script + usage metrics) |
| 2. Component map | Closing sentence | "There is no application server, API gateway, or datastore in this solution — every route is built to static assets ahead of time." | Same, plus: "The Cloudflare Web Analytics beacon (ADR-002) is the only third-party call made at runtime." |
| 4. Observability | Metrics | None | Cloudflare Web Analytics beacon in the visitor's browser (page views, visits, referrers, web vitals), collected via the beacon script, stored in the Cloudflare dashboard, retention set by Cloudflare |

Line appended to the map change log:

| 2026-10-04 | ADR-002 | Cloudflare Web Analytics beacon added as the single third-party runtime call: Observability row, Metrics signal, and component map edge Browser → Cloudflare Web Analytics. |

## Affected context

Staged as full drafts under `cdad/proposals/` and applied by
`apply-ADR-002-cloudflare-web-analytics.sh`:

- `cdad/context/stack.md` — the delta above.
- `cdad/context/constraints.md` — *Communication style* now names the beacon as
  the only network activity besides outbound links to GitHub and excludes any
  other third-party script or runtime call; *Data residency* now says the site
  stores no personal data and that Cloudflare holds aggregate, cookieless usage
  metrics.
- `cdad/context/architecture.md` — *Integration strategy* now describes the
  beacon as the one external service called at runtime, where it is installed,
  and that the site does not depend on it.

Not changed by this decision: `principles.md`, `glossary.md`,
`solution-vision.md`, `cdad/backlog.md`.
