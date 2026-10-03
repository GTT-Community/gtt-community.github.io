// Deterministic crawl/index audit of the built site (dist/). Run after the build:
//   node scripts/site-audit.mjs
// Exits 1 on any failure so CI stops before deploying a site that search engines
// or machine readers cannot use.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const OLD_SITE = /https?:\/\/gtt-community\.github\.io/;
const failures = [];
const fail = (where, message) => failures.push(`${where}: ${message}`);
const read = (path) => readFileSync(join(DIST, path), "utf8");

function htmlFiles(dir = DIST) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === "server" ? [] : htmlFiles(path);
    return name.endsWith(".html") ? [relative(DIST, path)] : [];
  });
}

// A site path resolves if it is a file, or a directory holding index.html.
function resolves(path) {
  const clean = decodeURIComponent(path.split(/[?#]/)[0]);
  const target = join(DIST, clean);
  if (!existsSync(target)) return false;
  return statSync(target).isDirectory() ? existsSync(join(target, "index.html")) : true;
}

// robots.txt
let origin = "";
if (!existsSync(join(DIST, "robots.txt"))) fail("robots.txt", "missing");
else {
  const robots = read("robots.txt");
  if (/^Disallow:\s*\/\s*$/m.test(robots)) fail("robots.txt", "blocks the whole site");
  const sitemapLine = robots.match(/^Sitemap:\s*(\S+)/m);
  if (!sitemapLine) fail("robots.txt", "no Sitemap line");
  else origin = new URL(sitemapLine[1]).origin;
}

// sitemap.xml
let sitemapUrls = [];
if (!existsSync(join(DIST, "sitemap.xml"))) fail("sitemap.xml", "missing");
else {
  const xml = read("sitemap.xml");
  if (!xml.startsWith("<?xml") || !/<urlset[^>]*>[\s\S]*<\/urlset>\s*$/.test(xml)) fail("sitemap.xml", "not a valid urlset document");
  sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (sitemapUrls.length === 0) fail("sitemap.xml", "no URLs");
  if (new Set(sitemapUrls).size !== sitemapUrls.length) fail("sitemap.xml", "duplicate URLs");
  for (const url of sitemapUrls) {
    if (!url.startsWith(`${origin}/`)) fail("sitemap.xml", `${url} is not an absolute URL on ${origin}`);
    else if (!url.endsWith("/") || !existsSync(join(DIST, new URL(url).pathname, "index.html"))) fail("sitemap.xml", `${url} is not a published page`);
  }
}

for (const file of ["llms.txt", "llms-full.txt", "favicon.png"]) if (!existsSync(join(DIST, file))) fail(file, "missing");

// pages
const titles = new Map();
const canonicals = new Set();
for (const file of htmlFiles()) {
  const html = read(file);
  const head = html.slice(0, html.indexOf("</head>"));
  const noindex = /<meta[^>]+name="robots"[^>]+noindex/.test(head);
  if (file === "404.html") {
    if (!noindex) fail(file, "error page must be noindex");
    continue;
  }
  if (noindex) fail(file, "accidental noindex");

  const title = head.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
  if (!title) fail(file, "no <title>");
  else if (titles.has(title)) fail(file, `title duplicates ${titles.get(title)}`);
  else titles.set(title, file);

  if (!/<meta[^>]+name="description"[^>]+content="[^"]{50,}"/.test(head)) fail(file, "missing or too-short meta description");

  const canonical = [...head.matchAll(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/g)].map((m) => m[1]);
  if (canonical.length !== 1) fail(file, `expected 1 canonical, found ${canonical.length}`);
  else {
    canonicals.add(canonical[0]);
    const expected = `${origin}/${file.replace(/index\.html$/, "")}`;
    if (canonical[0] !== expected) fail(file, `canonical ${canonical[0]} should be ${expected}`);
  }

  for (const property of ["og:title", "og:description", "og:url", "og:image", "og:type"])
    if (!head.includes(`property="${property}"`)) fail(file, `missing ${property}`);

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) fail(file, `expected 1 <h1>, found ${h1}`);

  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (jsonLd.length === 0) fail(file, "no JSON-LD");
  for (const [, body] of jsonLd) {
    try {
      JSON.parse(body);
    } catch (error) {
      fail(file, `JSON-LD does not parse: ${error.message}`);
    }
  }

  for (const [, , ref] of html.matchAll(/\s(href|src)="(\/[^"]*)"/g))
    if (!ref.startsWith("//") && !resolves(ref)) fail(file, `broken internal reference ${ref}`);

  for (const [, image] of head.matchAll(/property="og:image" content="([^"]+)"/g))
    if (image.startsWith(origin) && !resolves(new URL(image).pathname)) fail(file, `og:image ${image} is not published`);

  if (OLD_SITE.test(html)) fail(file, "references the old gtt-community.github.io site URL");
}

for (const url of sitemapUrls) if (!canonicals.has(url)) fail("sitemap.xml", `${url} is not the canonical of any page`);
for (const url of canonicals) if (!sitemapUrls.includes(url)) fail("sitemap.xml", `canonical ${url} is missing from the sitemap`);

if (failures.length > 0) {
  console.error(`Site audit failed (${failures.length}):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log(`Site audit passed: ${titles.size} pages, ${sitemapUrls.length} sitemap URLs, origin ${origin}.`);
