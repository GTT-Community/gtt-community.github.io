# Proposed Architecture Change

Add Cloudflare Web Analytics to the public site, as a scoped exception to the
"no network calls at runtime" constraint.

Status: Requires Architect approval

Requested by the Solution Designer on 2026-10-04. Nothing in this proposal has
been implemented: no source file is changed, nothing is committed or pushed.

## Current decision

Three governed statements say the site makes no third-party network calls at
runtime and collects no user data:

- `cdad/context/constraints.md:22` — "Communication style: none — no backend
  calls at runtime. The only network activity from the site is outbound links
  to GitHub."
- `cdad/context/constraints.md:35` — "Data residency: not applicable — no user
  data is collected or stored."
- `cdad/context/architecture.md:32` — "No external services are called at
  runtime. The only 'integrations' are outbound links to GitHub."

`cdad/context/stack.md` records the same state: the *Observability* row of the
stack table and the *Metrics* row of section 4 both say there is no metrics
pipeline. All of these are locked by ADR-001.

## Suggested change

Allow exactly one third-party runtime integration: the Cloudflare Web Analytics
beacon. Every other part of the constraint stays in force (no backend, no API
layer, no datastore, no other third-party script).

The integration is this snippet, identical on every page, with the single token
Cloudflare issued for `gtt-method.org`:

```html
<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "761f52d721264b3f8f259a0892e3e5d6"}'></script><!-- End Cloudflare Web Analytics -->
```

It is placed immediately before `</body>`.

### Why this is an exception

The beacon does two things the current constraint rules out:

1. The visitor's browser loads a script from a third-party host,
   `static.cloudflareinsights.com`, on every page.
2. That script sends usage measurements from the browser to Cloudflare. This is
   the first data the site transmits about its visitors.

### What would be measured

Per Cloudflare's product documentation (not verifiable from this repository):

- page views and visits;
- the page path and the referrer;
- country, browser, operating system and device type, as aggregates;
- page load time and Core Web Vitals.

The beacon also reports client-side route changes, which matters here because
navigation between pages is handled by TanStack Router without a full page
load.

### Privacy and site behaviour

- Per Cloudflare's documentation, Web Analytics sets no cookies, uses no
  `localStorage`, and does not fingerprint visitors by IP address or User-Agent.
  This is Cloudflare's claim; it has not been independently verified.
- The visitor's IP address necessarily reaches Cloudflare at the network level
  when the browser fetches the script and posts the measurement.
- The site has no privacy notice today. Whether one is needed is a legal
  question this proposal cannot answer; adding one would be a content change
  and is not part of this proposal.
- The token is visible in the page source by design. It is an identifier, not a
  secret, so the stack row "Secrets: None required" stays true.
- If the script is blocked (ad blocker, network policy) or Cloudflare is
  unreachable, the site works exactly as before. The script is a deferred
  module and does not block rendering.
- No change to visual design, CSS, content, navigation, URLs, information
  structure or existing functionality.

## Reason

The site was just optimised to be found by search engines and LLMs as the
reference for the GTT methodology (sitemap, `llms.txt`, structured data). There
is currently no way to see whether that works: GitHub Pages provides no visit
statistics, and the stack has no metrics of any kind. Web Analytics gives page
views, entry pages and referrers, including visits that do not come from Google
and so never appear in Search Console.

## Impact

Implementation is limited to two files:

| File | Change | Pages covered |
|---|---|---|
| `src/routes/__root.tsx` | The snippet is added once inside `RootShell`, after `<Scripts />`, immediately before `</body>` | The 11 prerendered pages: `/`, `/about/`, `/problem/`, `/approach/`, `/ecosystem/`, `/methodology/`, `/gtt-method-2-1/`, `/faq/`, `/glossary/`, `/cli/`, `/prompts/` |
| `public/404.html` | The same snippet immediately before `</body>` | The standalone 404 page, so visits to non-existent URLs are measured too |

- 12 generated pages in total, one snippet each, same token everywhere.
- No project dependency is added; `package.json` is untouched.
- No change to DNS, the custom domain, GitHub Pages settings, the deploy
  workflow, `vite.config.ts` or `wrangler.toml`.
- Both deploy targets (GitHub Pages, Cloudflare Pages) get the snippet, since
  both are built from the same sources.
- Non-HTML outputs (`sitemap.xml`, `llms.txt`, `llms-full.txt`, `robots.txt`)
  are unaffected.

Governed context that must change if this is approved:

| File | Current | Proposed |
|---|---|---|
| `constraints.md:22` | "no backend calls at runtime. The only network activity from the site is outbound links to GitHub." | "no backend calls at runtime. The only network activity from the site is outbound links to GitHub and the Cloudflare Web Analytics beacon (ADR-NNN). No other third-party script or runtime call." |
| `constraints.md:35` | "no user data is collected or stored." | "no user accounts and no personal data stored by the site. Cloudflare Web Analytics collects aggregate, cookieless usage metrics, held by Cloudflare (ADR-NNN)." |
| `architecture.md:32` | "No external services are called at runtime." | Add the beacon as the single runtime integration, loaded from the root shell and `public/404.html`. |
| `stack.md` Observability row and section 4 *Metrics* row | "No metrics/traces/alerting pipeline" / "None" | Page-view and web-vitals metrics emitted by the Cloudflare beacon, stored in the Cloudflare dashboard. |
| `stack.md` section 2 component map | Browser → GitHub only | Add Browser → Cloudflare Web Analytics. |

## Risk

- **A page ships without the snippet, or with it twice.** Its visits would be
  missing or double-counted. Detected at build time by counting occurrences of
  `static.cloudflareinsights.com/beacon.min.js` in each of the 12 generated HTML
  files; the expected count is exactly 1 per file. This check is run by hand
  after implementation. Adding it to `scripts/site-audit.mjs` would make it
  permanent but touches a third file, so it is left out unless requested.
- **React hydration.** A raw `<script>` in the root shell must render the same
  on server and client. Detected by a hydration warning in the browser console
  on the built site.
- **Third-party availability.** A Cloudflare outage or a blocked request loses
  measurements only; no functional risk to the site.
- **The exception widens over time.** Once one third-party script exists, a
  second is easier to add. Mitigated by wording the constraint to name this one
  integration and exclude all others.
- **Privacy expectations.** The site would no longer be able to say it collects
  nothing. If a cookieless-analytics disclosure is later judged necessary, that
  is a separate content change.

## Affected files

Implementation: `src/routes/__root.tsx`, `public/404.html`.

Governed context (changed only by the Solution Designer through the promotion
package): `cdad/context/constraints.md`, `cdad/context/architecture.md`,
`cdad/context/stack.md`, plus a new ADR.

## Alternatives considered

- **No analytics; rely on Google Search Console and Bing Webmaster Tools.**
  Keeps the constraint intact. Loses because those tools only report visits
  arriving from their own search results: direct visits, links from GitHub and
  referrals from LLM assistants would stay invisible.
- **Cloudflare's automatic injection by proxying the domain through
  Cloudflare.** No source change at all. Loses because it requires changing DNS
  for `gtt-method.org`, which is explicitly out of scope.
- **Another cookieless analytics vendor (Plausible, GoatCounter).** Needs the
  same exception and adds a new vendor or a paid plan, while a Cloudflare
  account already exists for the secondary deploy target.
- **Google Analytics.** Loses because it sets cookies and would require a
  consent banner, which is a design and content change.
- **Excluding `public/404.html`.** One file fewer. Loses because visits to
  broken or outdated URLs are exactly what should be seen after a page removal
  such as `/manual/`.

## After approval

1. The `cdad-adr` skill stages the ADR, the updated context files and the
   promotion script for the Solution Designer to review and run.
2. The snippet is implemented in the two files above.
3. The build is run and the snippet is verified to appear exactly once in each
   of the 12 generated pages.
4. The diff is shown for review before any commit or push.
