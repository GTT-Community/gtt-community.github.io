import { pages, type ContentPage } from "@/lib/gttContent";
import { GITHUB_COMMUNITY_URL, GTT_CANONICAL_DOC_URL, SITE_URL } from "@/lib/links";

export const SITE_NAME = "GTT-Method";
export const SITE_DESCRIPTION =
  "GTT (Governance Through Thinking) is an open-source methodology for governed AI-assisted software development, implemented through GTT Bootstrap and operated through GTT CLI.";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;
export const LOGO_URL = `${SITE_URL}/logo.png`;

// GitHub Pages serves each prerendered page at its trailing-slash URL, so that
// is the one canonicals, the sitemap and structured data must name.
export function pageUrl(slug?: string) {
  return slug ? `${SITE_URL}/${slug}/` : `${SITE_URL}/`;
}

export function pageTitle(page: ContentPage) {
  return page.titleEn.includes(SITE_NAME) ? page.titleEn : `${page.titleEn} | ${SITE_NAME}`;
}

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "GTT Community",
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  sameAs: [GITHUB_COMMUNITY_URL],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["GTT Method", "GTT", "Governance Through Thinking"],
  url: `${SITE_URL}/`,
  description: SITE_DESCRIPTION,
  inLanguage: ["en", "es"],
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function homeJsonLd() {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": [organization, website] });
}

// FAQ pages are a run of "## question" headings, each followed by its answer.
function faqEntries(content: string) {
  const entries: { question: string; answer: string }[] = [];
  for (const block of content.split("\n\n")) {
    const text = block.trim();
    if (text.startsWith("## ")) entries.push({ question: text.replace(/^#+\s*/, ""), answer: "" });
    else {
      const last = entries[entries.length - 1];
      if (last) last.answer = last.answer ? `${last.answer}\n${text}` : text;
    }
  }
  return entries.filter((entry) => entry.answer);
}

export function pageJsonLd(page: ContentPage) {
  const url = pageUrl(page.slug);
  const common = {
    "@id": `${url}#page`,
    url,
    name: page.titleEn,
    description: page.descriptionEn,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  const node =
    page.slug === "faq"
      ? {
          "@type": "FAQPage",
          ...common,
          mainEntity: faqEntries(page.contentEn).map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }
      : {
          "@type": "TechArticle",
          ...common,
          headline: page.titleEn,
          image: OG_IMAGE_URL,
          author: { "@id": `${SITE_URL}/#organization` },
          about: { "@type": "Thing", name: "GTT Method", sameAs: GTT_CANONICAL_DOC_URL },
        };
  return JSON.stringify({ "@context": "https://schema.org", "@graph": [organization, node] });
}

export function sitemapXml() {
  const urls = [pageUrl(), ...pages.map((page) => pageUrl(page.slug))];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;
}

// llms.txt: a compact, factual index of the site for machine readers. It is an
// interoperability aid generated from the same page data, not a ranking signal.
export function llmsTxt() {
  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

GTT is a methodology first. GTT Bootstrap is its reference implementation and owns the GTT semantics. GTT CLI is the operational tool that installs and operates Bootstrap; it is not a second GTT engine. AI Development Environments (ADEs) and agents do the development work inside that governed boundary. Canonical principle: Human decides, GTT governs, Agent/ADE executes within the boundary.

## Canonical source

- [GTT Canonical v2.1](${GTT_CANONICAL_DOC_URL}): the single canonical definition of the current GTT generation. If this site contradicts it, the canonical document is right.

## Pages

${pages.map((page) => `- [${page.titleEn}](${pageUrl(page.slug)}): ${page.descriptionEn}`).join("\n")}

## Repositories

- [gtt-method](https://github.com/GTT-Community/gtt-method): the methodology and its canonical definition (Apache-2.0)
- [gtt-bootstrap](https://github.com/GTT-Community/gtt-bootstrap): the reference implementation (MIT)
- [gtt-cli](https://github.com/GTT-Community/gtt-cli): the operational command-line tool (Apache-2.0)
- [gtt-docs](https://github.com/GTT-Community/gtt-docs): documentation and normative specification (MIT)

## Optional

- [Full text of every page](${SITE_URL}/llms-full.txt): all site content as one Markdown file
- [Community feedback board](https://gtt-method.feedlog.ai/): bugs, ideas and comments
`;
}

export function llmsFullTxt() {
  return `# ${SITE_NAME}: full site content

> ${SITE_DESCRIPTION}

Canonical source: ${GTT_CANONICAL_DOC_URL}

${pages
  .map((page) => `---\n\n# ${page.titleEn}\n\nURL: ${pageUrl(page.slug)}\n\n${page.descriptionEn}\n\n${page.contentEn}`)
  .join("\n\n")}
`;
}
