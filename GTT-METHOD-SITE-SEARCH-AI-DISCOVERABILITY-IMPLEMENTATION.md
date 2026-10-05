# GTT-Method — Website Search, Crawling & AI Discoverability Audit / Implementation

> **GTT Governance Canonical:**  
> https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

> **Document purpose:** Implementation-grade work order for Claude Code  
> **Target repository:** `GTT-Community/gtt-community.github.io`  
> **Target:** Public GTT-Method website  
> **Mode:** Inspect first → establish evidence → implement → validate → report

---

# 1. Objective

Audit and improve the public GTT-Method website so that its content is:

- technically crawlable;
- correctly indexable;
- understandable by search engines;
- structurally understandable by AI-powered search;
- semantically clear to LLM retrieval systems;
- easy to discover through Google and Bing;
- internally consistent with GTT-Method terminology;
- strongly connected to the canonical GTT source and public implementation surfaces;
- maintainable through the existing repository/build/deployment mechanism.

The objective is **not** to apply generic SEO tricks.

The objective is to make the actual GTT-Method knowledge base technically accessible, semantically explicit, internally connected, and machine-readable where useful.

---

# 2. Critical execution rule

## INSPECT BEFORE MODIFYING

Claude MUST NOT assume the current implementation.

Before changing any file:

1. inspect the complete repository tree;
2. identify the framework/build mechanism;
3. identify the actual public deployment mechanism;
4. identify the current published URL;
5. inspect all existing HTML/pages/templates;
6. inspect existing metadata;
7. inspect `robots.txt` if present;
8. inspect `sitemap.xml` if present;
9. inspect any `llms.txt` or equivalent if present;
10. inspect canonical tags;
11. inspect `noindex` / robots directives;
12. inspect HTTP/header configuration that can be controlled by the repository;
13. inspect JSON-LD / Schema.org already present;
14. inspect Open Graph / social metadata;
15. inspect internal links;
16. inspect navigation and language structure;
17. inspect GitHub Pages configuration and workflows;
18. inspect existing documentation/content hierarchy;
19. inspect broken links and orphan pages;
20. establish a baseline before modifying anything.

Do not recreate mechanisms that already exist.

Do not add duplicate mechanisms.

Do not migrate frameworks unless there is a demonstrated technical reason.

---

# 3. Evidence-first working protocol

Create an internal audit table before implementation.

| Area | Current state | Evidence | Problem | Proposed change | Priority | Validation |
|---|---|---|---|---|---|---|
| Deployment | DISCOVER | repo/workflow | — | — | P0 | build/deploy |
| robots.txt | DISCOVER | file + HTTP | — | — | P0 | fetch |
| sitemap | DISCOVER | file + HTTP | — | — | P0 | XML validation |
| canonical | DISCOVER | HTML | — | — | P0 | source inspection |
| metadata | DISCOVER | HTML/templates | — | — | P1 | automated test |
| JSON-LD | DISCOVER | HTML | — | — | P1 | schema validation |
| Open Graph | DISCOVER | HTML | — | — | P1 | metadata test |
| internal links | DISCOVER | site graph | — | — | P1 | crawler |
| AI discoverability | DISCOVER | content structure | — | — | P1 | retrieval test |
| performance | DISCOVER | Lighthouse/PageSpeed | — | — | P1 | performance audit |

The audit must distinguish:

- `PRESENT`
- `MISSING`
- `INCORRECT`
- `DUPLICATED`
- `CONFLICTING`
- `UNNECESSARY`
- `CANNOT_VERIFY`

Never report a feature as missing until both the repository and deployed site have been checked.

---

# 4. Current external verification constraints

The implementation must account for the current search-engine guidance.

Google currently emphasizes:

- crawlable public content;
- strong technical foundations;
- unique, useful, people-first content;
- clear semantic structure;
- internal links that can be crawled;
- canonicalization;
- sitemaps;
- Search Console diagnostics;
- good page experience.

Google's current guidance for generative AI search explicitly states that normal SEO fundamentals remain important for AI-powered search.

Google also explicitly states that `llms.txt` is **not required for Google Search and does not improve Google Search visibility or ranking**.

Therefore:

```text
llms.txt
    ≠
Google ranking mechanism
```

If implemented, `llms.txt` must be treated as an optional machine-readable interoperability artifact, not as an SEO guarantee.

Do not claim that any AI-oriented file guarantees inclusion in an LLM answer.

---

# 5. Repository architecture inspection

Determine which of the following applies:

- plain static HTML;
- Jekyll;
- Hugo;
- Eleventy;
- Astro;
- Vite;
- React;
- another static generator;
- custom GitHub Pages structure.

Inspect:

```text
.github/
_config.yml
package.json
package-lock.json
pnpm-lock.yaml
yarn.lock
Gemfile
vite.config.*
astro.config.*
hugo.*
index.html
src/
public/
assets/
docs/
```

Only modify files that actually exist.

Identify:

```text
source
    ↓
build
    ↓
GitHub Actions / Pages
    ↓
published site
```

Record the actual path.

---

# 6. Establish the real public URL

Do not assume the public URL from the repository name.

Determine it from:

- GitHub Pages configuration;
- repository settings/configuration available to the project;
- workflow files;
- canonical tags;
- existing links;
- deployed response;
- site metadata.

Then establish:

```text
PUBLIC_SITE_URL = <verified URL>
```

All canonical URLs, sitemap URLs, Open Graph URLs and absolute internal references must use the verified value.

---

# 7. HTTP / HTTPS / response inspection

For the deployed site inspect at minimum:

```text
/
robots.txt
sitemap.xml
favicon
main CSS
main JS
all important public pages
```

For each important URL verify:

- HTTPS;
- HTTP status;
- redirect behavior;
- final URL;
- content type;
- compression if applicable;
- cache behavior if controllable;
- presence/absence of unexpected redirects;
- whether the final HTML is actually available to crawlers.

Important:

A technically valid repository is not enough.

The deployed response is part of the acceptance criteria.

---

# 8. robots.txt

Inspect the current file before changing it.

Desired principle:

```text
Allow legitimate public crawling.
Do not accidentally block public GTT knowledge.
```

If appropriate, target a minimal configuration such as:

```text
User-agent: *
Allow: /

Sitemap: <VERIFIED_PUBLIC_SITE_URL>/sitemap.xml
```

But do NOT blindly replace an existing file.

Check specifically for:

- accidental `Disallow: /`;
- blocked documentation;
- blocked assets required for rendering;
- conflicting bot-specific sections;
- invalid syntax;
- missing sitemap declaration;
- incorrect sitemap URL.

Do not add aggressive bot blocking without an explicit security requirement.

---

# 9. sitemap.xml

Inspect whether a sitemap already exists.

If missing and the site has multiple indexable URLs, create one.

Requirements:

- XML must be valid;
- URLs must be absolute;
- only canonical/indexable public URLs should be included;
- do not include redirects;
- do not include `noindex` pages;
- do not include duplicate URL variants;
- keep the sitemap synchronized with the real site;
- use `lastmod` only when the date reflects a meaningful modification.

The sitemap is a discovery aid, not an indexing guarantee.

If a sitemap generator already exists, improve it rather than creating a second system.

---

# 10. Canonical URL strategy

Every important indexable HTML page should have a coherent canonical strategy.

Inspect:

```html
<link rel="canonical" ...>
```

Check:

- canonical points to the preferred public URL;
- HTTPS is used;
- language path is correct;
- no canonical points to an old site;
- no canonical points to development/private locations;
- no canonical conflicts with redirects;
- no duplicate canonical tags.

Do not blindly canonicalize all pages to the homepage.

Each substantive page should normally identify itself as the representative URL unless there is a documented reason otherwise.

---

# 11. Indexability controls

Inspect all:

```html
<meta name="robots">
<meta name="googlebot">
```

and, where controllable:

```text
X-Robots-Tag
```

Search for:

```text
noindex
nofollow
none
noarchive
nosnippet
```

Verify that public GTT methodology/documentation pages are not accidentally excluded.

Check robots directives at:

- homepage;
- methodology pages;
- documentation;
- glossary;
- FAQ;
- comparison pages;
- implementation pages.

---

# 12. Page title strategy

Every substantive page must have a unique, descriptive title.

Do not use generic titles such as:

```text
Home
Documentation
Page
GTT
```

Prefer titles that explicitly identify:

```text
GTT-Method
+
specific concept
```

Examples of structure, not mandatory wording:

```text
GTT-Method — Governance
GTT-Method — Architecture
GTT-Method — THINK
GTT-Method — GTT CLI
GTT-Method — GTT Bootstrap
```

Do not create keyword-stuffed titles.

---

# 13. Meta descriptions

Inspect every substantive public page.

Add or improve descriptions where useful.

Descriptions should:

- explain the page;
- use natural GTT terminology;
- match visible content;
- avoid keyword stuffing;
- not repeat the same generic description across every page.

Do not generate descriptions disconnected from the actual page.

---

# 14. Heading hierarchy

Audit:

```text
<h1>
<h2>
<h3>
```

Rules:

- one clear primary topic per page;
- one meaningful `<h1>` where practical;
- headings should describe the actual content;
- do not use headings purely for visual styling;
- do not insert hidden keyword blocks.

The heading structure should make the conceptual hierarchy understandable to both humans and machines.

---

# 15. Semantic HTML

Improve semantic structure where the existing site permits it.

Prefer meaningful elements such as:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Use semantic links:

```html
<a href="...">
```

Do not replace crawlable links with navigation that requires JavaScript when unnecessary.

Google's current AI-search guidance confirms that semantic HTML is useful for accessibility and machine interpretation, while perfect HTML validity is not a prerequisite.

---

# 16. GTT conceptual discoverability

This is a major priority.

The site must make the central GTT concepts explicit.

Do not rely on the LLM/search engine inferring concepts from scattered text.

For every important GTT concept, ensure there is a stable public page or clearly identifiable section containing:

1. canonical term;
2. concise definition;
3. purpose;
4. relationship to GTT;
5. relevant neighboring concepts;
6. implementation/documentation references;
7. examples where appropriate.

Avoid multiple conflicting definitions of the same GTT concept.

---

# 17. Terminology consistency

Perform a terminology consistency audit across the complete site.

Search for:

- GTT-Method;
- GTT Method;
- GTT;
- Governance;
- THINK;
- Bootstrap;
- CLI;
- governed context/domain terminology actually defined by GTT;
- architecture terminology;
- ADE terminology;
- canonical terminology from the current GTT source.

Do not invent terminology.

Do not import terminology from unrelated methodologies.

If two terms appear to represent the same concept, determine whether the distinction is intentional before changing anything.

The website must reflect the actual current GTT terminology.

---

# 18. Entity clarity

The website should clearly establish the identity of:

```text
GTT-Method
GTT Community
GTT CLI
GTT Bootstrap
official documentation
public repositories
```

Where appropriate, explain the relationship between them.

Example conceptual model:

```text
GTT-Method
    │
    ├── canonical methodology
    │
    ├── GTT Bootstrap
    │
    ├── GTT CLI
    │
    └── public documentation / community site
```

Do not create a relationship that does not exist.

---

# 19. Organization structured data

Inspect whether the site already contains JSON-LD.

If absent and appropriate, consider adding an `Organization` entity to the homepage.

Use only facts actually established by the GTT public materials.

Potential properties, only when supported:

```text
name
url
logo
description
sameAs
```

Use `sameAs` only for authoritative, genuinely equivalent official identities.

Do not fabricate social profiles or external identities.

Validate JSON-LD after implementation.

---

# 20. WebSite structured data

Determine whether `WebSite` structured data is appropriate for the homepage.

If implemented:

- make it correspond to the actual site;
- use the verified public URL;
- do not invent unsupported properties;
- avoid duplicate/conflicting JSON-LD blocks.

---

# 21. Article / TechArticle / documentation structured data

Inspect individual documentation pages.

Use structured data only when the page genuinely represents the corresponding type.

Do not mark every page as `Article`.

Possible candidates may include:

- methodology documentation;
- technical documentation;
- explanatory articles;
- release documentation.

Choose the most semantically appropriate supported Schema.org/Google type.

Validate before release.

---

# 22. Breadcrumb structured data

If the site has a hierarchical documentation structure, inspect whether breadcrumbs can accurately represent it.

If yes, consider:

```text
BreadcrumbList
```

Do not create artificial breadcrumbs solely for SEO.

The visible navigation and structured data must agree.

---

# 23. JSON-LD quality rules

All structured data must:

- describe visible/relevant page content;
- use valid JSON;
- use appropriate Schema.org types;
- avoid fabricated claims;
- avoid unsupported ratings/reviews;
- avoid misleading organization relationships;
- be validated after implementation.

Structured data is an aid to understanding, not a ranking guarantee.

---

# 24. Open Graph

Audit:

```html
<meta property="og:title">
<meta property="og:description">
<meta property="og:type">
<meta property="og:url">
<meta property="og:image">
```

Where appropriate also:

```html
<meta property="og:site_name">
```

Verify that:

- URLs are absolute;
- images exist;
- images are stable;
- title/description match the page;
- localized pages do not point to the wrong URL.

---

# 25. Twitter/X metadata

Inspect existing metadata.

If useful for the project, provide a compatible card configuration.

Do not add unnecessary social metadata merely for completeness.

---

# 26. Favicon / identity assets

Verify:

- favicon exists;
- favicon is referenced correctly;
- manifest, if present, is valid;
- logo assets resolve;
- no broken asset URLs;
- social preview image exists if configured.

---

# 27. Internal linking — high priority

Build an internal link graph.

Identify:

- orphan pages;
- pages reachable only through JavaScript;
- isolated documentation;
- duplicated navigation;
- broken links;
- excessive click depth;
- important concepts with weak incoming links.

Important GTT concepts should be connected through normal crawlable links.

Example conceptual graph:

```text
Homepage
   │
   ├── What is GTT?
   ├── Method
   ├── Governance
   ├── THINK
   ├── Architecture
   ├── Bootstrap
   ├── CLI
   ├── Documentation
   ├── Glossary
   └── Community
```

Use the actual GTT site structure discovered during inspection.

---

# 28. Glossary

Inspect whether a GTT glossary exists.

If missing and justified by the existing content, propose or implement a glossary.

Each entry should be:

```text
Term
Definition
Relationship to GTT
Related concepts
```

The glossary must use official/current GTT terminology.

Do not generate definitions from generic AI knowledge.

Ground definitions in the canonical GTT material and existing approved public documentation.

---

# 29. FAQ / direct-question discoverability

Inspect whether important user questions are answered directly.

Examples of query patterns:

```text
What is GTT-Method?
What problem does GTT-Method solve?
How does GTT governance work?
What is GTT THINK?
What is GTT Bootstrap?
What is GTT CLI?
How does GTT relate to AI agents?
How do I start a GTT project?
```

Only implement questions that are supported by actual GTT documentation.

The objective is explicit answerability, not artificial FAQ stuffing.

---

# 30. AI / LLM discoverability

Treat AI discoverability as a consequence of:

```text
crawlability
+
clear concepts
+
strong internal linking
+
stable URLs
+
authoritative source hierarchy
+
high-quality content
+
machine-readable metadata
```

Do NOT rely on a special "AI SEO" trick.

Google's current guidance specifically recommends continuing standard SEO fundamentals for generative AI search.

---

# 31. llms.txt — optional interoperability layer

First determine whether the repository already has:

```text
llms.txt
```

If it exists:

- inspect it;
- verify claims;
- remove stale URLs;
- remove stale terminology;
- align it with the actual site;
- ensure it does not contradict canonical GTT content.

If it does not exist:

Claude MAY propose creating it if it provides a useful compact machine-readable index for other systems.

If created, it should be concise and factual.

Suggested conceptual structure:

```text
# GTT-Method

## Definition

[official concise definition]

## Purpose

[official concise purpose]

## Core concepts

- [verified concept]
- [verified concept]
- [verified concept]

## Documentation

- [verified public page]
- [verified public page]

## Implementations

- [verified public repository]
- [verified public repository]

## Canonical source

[the canonical GTT reference already defined at the top of this document]
```

Do not represent `llms.txt` as a Google ranking mechanism.

---

# 32. Machine-readable concept index

Consider whether a small machine-readable document would provide real value.

Potential formats:

```text
concepts.json
gtt-index.json
```

Only implement this if it reduces ambiguity and duplicates no existing source.

Possible conceptual model:

```json
{
  "name": "GTT-Method",
  "concepts": [
    {
      "term": "...",
      "definition": "...",
      "url": "..."
    }
  ]
}
```

Every value must be grounded in approved GTT content.

Do not create a second competing source of truth.

---

# 33. Markdown and documentation discoverability

Inspect whether public Markdown documentation is:

- linked from HTML;
- accessible through stable URLs;
- duplicated unnecessarily;
- stale;
- inconsistent with the website;
- discoverable through navigation.

Do not expose private/development material accidentally.

The public site must not publish:

- private development context;
- internal work history;
- credentials;
- secrets;
- private repository material;
- unpublished GTT decisions.

---

# 34. GitHub relationship

Inspect all links to GitHub.

Verify:

- repository URLs are current;
- links are not stale;
- repository names match current GTT organization structure;
- important implementation repositories are discoverable;
- repository descriptions and website links are consistent where the website controls them.

Do not assume repository relationships.

Verify them from the current GTT project.

---

# 35. Language / internationalization

Inspect whether the site is:

- single language;
- multilingual;
- localized by path;
- localized by query;
- duplicated into separate pages.

If multilingual:

check:

```text
hreflang
canonical
language attribute
navigation
sitemap coverage
localized titles/descriptions
```

Do not add `hreflang` if the site does not actually have equivalent localized pages.

---

# 36. Accessibility as discoverability infrastructure

Audit:

- image `alt`;
- link names;
- heading hierarchy;
- keyboard navigation;
- visible focus;
- contrast;
- semantic elements;
- language declarations.

Do not treat accessibility as separate from machine understanding.

---

# 37. Performance

Inspect:

- page weight;
- JavaScript;
- CSS;
- images;
- fonts;
- layout shift;
- render blocking resources;
- unnecessary dependencies.

Prioritize simple improvements.

Do not introduce a performance framework solely for SEO.

---

# 38. Broken links

Run a complete internal link scan.

Classify:

```text
200
3xx
4xx
5xx
```

Fix:

- broken internal links;
- wrong relative paths;
- stale GitHub URLs;
- old site URLs;
- language-path errors;
- asset references.

External links should be changed only when the target is verified.

---

# 39. Old-domain / old-site references

Search the complete repository for:

```text
old site URL
old repository URL
old organization URL
old page paths
```

Any obsolete public identity should be explicitly classified as:

```text
KEEP
REDIRECT
REPLACE
HISTORICAL
```

Do not mass-replace blindly.

---

# 40. Search Console readiness

Prepare the site for Google Search Console.

Verify:

- public HTTPS URL;
- robots.txt;
- sitemap;
- canonical URLs;
- indexability;
- no accidental noindex;
- important pages reachable through links.

After deployment, the human owner should use Search Console to verify:

- sitemap processing;
- URL inspection;
- indexing coverage;
- search performance;
- generative AI performance data if available in the account.

Do not claim Search Console data without access to the actual property.

---

# 41. Bing Webmaster / IndexNow

Prepare the site for Bing Webmaster Tools.

If the site's architecture supports it, evaluate IndexNow.

IndexNow can notify participating search engines of URL changes, but it does not guarantee indexing.

Do not add unnecessary infrastructure if GitHub Pages/static deployment makes a simple workflow preferable.

If implemented, integrate it into the existing publication workflow rather than requiring manual operation.

---

# 42. Automated technical audit

Add a lightweight automated audit if the repository already has CI/CD.

The audit should check, where applicable:

```text
[ ] homepage returns success
[ ] robots.txt exists
[ ] sitemap.xml exists
[ ] sitemap is valid XML
[ ] canonical exists on important pages
[ ] canonical URLs are absolute
[ ] no accidental noindex
[ ] title exists
[ ] title is not duplicated
[ ] description exists where expected
[ ] H1 exists where expected
[ ] internal links resolve
[ ] JSON-LD parses
[ ] important assets resolve
[ ] no old-site references remain
```

Do not turn this into a large SEO framework.

Keep it deterministic and maintainable.

---

# 43. CI validation

If GitHub Actions already exists, add validation to the existing workflow.

Preferred sequence:

```text
Build
  ↓
Static validation
  ↓
HTML/link/metadata audit
  ↓
JSON-LD validation
  ↓
Sitemap validation
  ↓
Deploy
```

If deployment happens through another mechanism, adapt to it.

Do not create a parallel deployment system.

---

# 44. Search query coverage audit

Create a conceptual query matrix from the actual GTT vocabulary.

Categories:

### Identity

```text
GTT-Method
GTT Method
GTT governance
```

### Conceptual

```text
what is GTT-Method
GTT methodology
GTT governance methodology
GTT THINK
```

### Implementation

```text
GTT Bootstrap
GTT CLI
GTT implementation
```

### Adoption

```text
how to use GTT-Method
how to start GTT
GTT project setup
```

### AI development

Only include relationships that are actually documented by GTT.

The goal is to ensure each legitimate concept has a strong public answer.

---

# 45. Content quality rule

Do not create pages solely to target search queries.

Every new page must answer:

```text
What legitimate GTT knowledge does this page expose?
```

If the answer is weak, do not create the page.

Avoid:

- keyword stuffing;
- hidden text;
- fake FAQ blocks;
- repetitive pages;
- AI-generated filler;
- unsupported claims;
- fake authority;
- fabricated citations;
- invented external endorsements.

---

# 46. Source hierarchy

When improving public GTT content, use this precedence:

```text
GTT canonical source
        ↓
approved GTT public documentation
        ↓
approved GTT implementation documentation
        ↓
current site content
        ↓
external technical standards
```

External technical standards may guide implementation of web/search technologies, but they must not redefine GTT.

---

# 47. Do not modify GTT meaning for SEO

This is a hard constraint.

Search optimization must not alter:

- GTT principles;
- GTT definitions;
- GTT governance semantics;
- GTT architectural concepts;
- GTT lifecycle semantics;
- GTT authority boundaries.

If SEO/AI discoverability appears to require changing a GTT concept, STOP and report the conflict.

---

# 48. Implementation priorities

## P0 — indexing/crawl blockers

Fix immediately:

- site unavailable;
- wrong public URL;
- robots blocking site;
- accidental noindex;
- broken sitemap;
- invalid deployment;
- broken canonical strategy;
- critical navigation failures;
- important pages inaccessible.

## P1 — high-value discoverability

Implement:

- unique titles;
- descriptions;
- clean canonical URLs;
- strong internal links;
- clear page hierarchy;
- JSON-LD where appropriate;
- Organization/WebSite metadata where justified;
- sitemap improvements;
- Open Graph;
- important concept pages.

## P2 — AI/machine discoverability

Consider:

- glossary;
- FAQ;
- `llms.txt`;
- machine-readable concept index;
- stronger documentation cross-linking;
- improved GitHub/site relationship metadata.

## P3 — polish

Consider:

- additional performance improvements;
- richer social metadata;
- accessibility refinements;
- advanced CI diagnostics.

---

# 49. Required implementation workflow for Claude

Execute in this exact order.

## Phase 1 — Discover

```text
inspect repository
inspect deployment
inspect public URL
inspect current HTML
inspect metadata
inspect robots
inspect sitemap
inspect JSON-LD
inspect links
inspect docs
```

No modifications.

## Phase 2 — Baseline

Produce an internal inventory of:

```text
PRESENT
MISSING
INCORRECT
DUPLICATED
CONFLICTING
CANNOT_VERIFY
```

No modifications yet.

## Phase 3 — Design

Prepare the minimum change set.

Prefer:

```text
modify existing
    >
reuse existing
    >
add small missing artifact
    >
introduce new dependency
```

Avoid architectural churn.

## Phase 4 — Implement

Apply P0/P1 changes first.

Then P2 only where justified.

## Phase 5 — Validate locally

Run:

```text
build
tests
link check
HTML check
metadata check
JSON-LD check
sitemap check
```

as supported by the project.

## Phase 6 — Inspect generated output

Do not validate only source files.

Inspect generated/public output.

## Phase 7 — Deployment verification

After deployment verify:

```text
homepage
robots.txt
sitemap.xml
important pages
canonical
metadata
JSON-LD
internal links
```

## Phase 8 — Final report

Report:

```text
What was found
What was already correct
What was changed
What was added
What was deliberately not changed
What could not be verified
Validation results
Remaining manual actions
```

---

# 50. Required final deliverables from Claude

Claude must finish with:

## A. Audit

A concise table:

```text
Area | Before | Action | After | Evidence
```

## B. Files changed

Exact paths.

## C. Files added

Exact paths.

## D. Validation

Commands/tests executed and results.

## E. Public verification

URLs checked after deployment.

## F. Manual actions

Anything requiring:

- GitHub settings;
- Google Search Console;
- Bing Webmaster Tools;
- DNS;
- domain configuration;
- human credentials;
- external verification.

## G. Remaining risks

Only concrete, evidence-based risks.

---

# 51. Acceptance criteria

The work is complete only if all applicable criteria pass.

### Crawlability

```text
[ ] public site reachable
[ ] important pages crawlable
[ ] robots does not block intended content
[ ] normal crawlable links exist
```

### Indexability

```text
[ ] no accidental noindex
[ ] canonical strategy coherent
[ ] sitemap contains intended canonical URLs
```

### Search metadata

```text
[ ] unique titles
[ ] useful descriptions
[ ] coherent headings
[ ] correct Open Graph
```

### Structured data

```text
[ ] JSON-LD valid
[ ] types semantically appropriate
[ ] no fabricated claims
```

### Site architecture

```text
[ ] important GTT concepts discoverable
[ ] internal links coherent
[ ] no orphaned important pages
[ ] no stale public URLs
```

### AI discoverability

```text
[ ] GTT concepts explicitly defined
[ ] authoritative pages easy to identify
[ ] terminology consistent
[ ] documentation cross-linked
[ ] optional machine-readable layer evaluated
```

### Quality

```text
[ ] no SEO spam
[ ] no hidden keyword content
[ ] no invented facts
[ ] no GTT semantic changes
[ ] build passes
```

---

# 52. Important implementation principle

The desired architecture is:

```text
GTT canonical knowledge
        ↓
GTT public documentation
        ↓
clear website information architecture
        ↓
crawlable HTML
        ↓
structured metadata
        ↓
search-engine discovery
        ↓
AI-powered retrieval
```

Not:

```text
SEO hacks
    ↓
try to force Google/LLMs
```

The website should become easier for search engines and AI systems to understand because the underlying GTT knowledge is clear, authoritative, connected and technically accessible.

---

# 53. Final instruction to Claude

Work as an implementation engineer.

Do not assume.

Do not invent current site state.

Do not rewrite GTT concepts.

Do not introduce unrelated SEO tooling.

Do not create duplicate sources of truth.

Inspect first.

Use evidence.

Make the smallest effective changes.

Validate the generated site.

Report exactly what changed and what remains.

The final result must improve the real GTT-Method public website, not merely produce an SEO checklist.
