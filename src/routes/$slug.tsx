import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { pages, searchContent } from "@/lib/gttContent";
import { pageJsonLd, pageTitle, pageUrl } from "@/lib/seo";
import { useState } from "react";
import { ArrowLeft, Check, Copy, Terminal } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const URL_PATTERN = /(https?:\/\/[^\s)<>"']+)/g;

function linkify(text: string) {
  const parts = text.split(URL_PATTERN);
  if (parts.length === 1) return text;
  // split() with a single capturing group interleaves the captured matches
  // at odd indices — no need for a second, stateful regex test.
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-primary">
        {part}
      </a>
    ) : (
      part
    )
  );
}

function CodeBlock({ code, language }: { code: string; language: "en" | "es" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context or denied) — the text stays selectable.
    }
  };

  const label = copied ? (language === "en" ? "Copied" : "Copiado") : language === "en" ? "Copy" : "Copiar";

  return (
    <div className="relative my-4">
      <button
        type="button"
        onClick={copy}
        aria-label={language === "en" ? "Copy to clipboard" : "Copiar al portapapeles"}
        className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded border border-border bg-background px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        <span aria-live="polite">{label}</span>
      </button>
      <pre className="bg-muted p-4 pt-10 rounded-md overflow-x-auto">
        <code className="text-xs">{code}</code>
      </pre>
    </div>
  );
}

// Heading text -> anchor id, shared by the page index and the rendered h2s.
function headingId(heading: string) {
  return heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Pages with fewer sections than this read fine without an index.
const INDEX_MIN_SECTIONS = 6;

export const Route = createFileRoute("/$slug")({
  head: ({ params }) => {
    const { slug } = params;
    const page = pages.find((p) => p.slug === slug);

    if (!page) {
      return {
        meta: [
          { title: "Page not found | GTT-Method" },
          { name: "description", content: "Page not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    // Prerendered HTML is the English version; Spanish is a client-side switch on the same URL.
    const title = pageTitle(page);
    const description = page.descriptionEn;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: pageUrl(page.slug) },
      ],
      links: [{ rel: "canonical", href: pageUrl(page.slug) }],
      scripts: [{ type: "application/ld+json", children: pageJsonLd(page) }],
    };
  },
  component: ContentPage,
});

function ContentPage() {
  const { slug } = Route.useParams();
  const { language } = useLanguage();
  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
          <div className="mt-6">
            <a href="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Go home
            </a>
          </div>
        </div>
      </div>
    );
  }

  const title = language === "en" ? page.titleEn : page.titleEs;
  const description = language === "en" ? page.descriptionEn : page.descriptionEs;
  const content = language === "en" ? page.contentEn : page.contentEs;
  const sections = content
    .split("\n\n")
    .filter((paragraph) => /^##\s/.test(paragraph.trim()))
    .map((paragraph) => paragraph.trim().replace(/^#+\s*/, ""));

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header activeSlug={slug} />

      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:px-8 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft size={16} />
          {language === "en" ? "Back to home" : "Volver al inicio"}
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </header>

        {sections.length >= INDEX_MIN_SECTIONS && (
          <nav aria-label={language === "en" ? "On this page" : "En esta página"} className="mb-12 rounded-md border border-border bg-muted/50 px-6 py-5">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {language === "en" ? "On this page" : "En esta página"}
            </h2>
            <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {sections.map((heading, i) => (
                <li key={heading} className="flex gap-3">
                  <span className="w-5 shrink-0 text-right tabular-nums text-muted-foreground">{i + 1}</span>
                  <a href={`#${headingId(heading)}`} className="font-medium underline-offset-2 hover:underline">
                    {heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article className="prose dark:prose-invert max-w-none">
          <div className="space-y-6 text-base leading-relaxed">
            {content.split("\n\n").map((paragraph, index) => {
              if (paragraph.trim().startsWith("##")) {
                const heading = paragraph.trim().replace(/^#+\s*/, "");
                const level = paragraph.match(/^#+/)?.[0].length || 2;
                const HeadingTag = level === 2 ? "h2" : level === 3 ? "h3" : "h4";

                return (
                  <HeadingTag key={index} id={level === 2 ? headingId(heading) : undefined} className={level === 2 ? "scroll-mt-6 text-2xl font-bold mt-8 mb-4" : level === 3 ? "text-xl font-semibold mt-6 mb-3" : "text-lg font-semibold mt-4 mb-2"}>
                    {heading}
                  </HeadingTag>
                );
              }

              if (paragraph.trim().startsWith("-") || paragraph.trim().match(/^\d+\./)) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 ml-2">
                    {paragraph.split("\n").map((line, i) => (
                      <li key={i} className="text-muted-foreground">
                        {linkify(line.replace(/^[-•*]\s*|\d+\.\s*/, ""))}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (paragraph.trim().startsWith("|")) {
                return (
                  <div key={index} className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-border">
                      <tbody>
                        {paragraph.split("\n").map((line, i) => {
                          if (line.trim().startsWith("|") && !line.includes("---")) {
                            const cells = line.split("|").filter((cell) => cell.trim());
                            return (
                              <tr key={i} className="border-b border-border">
                                {cells.map((cell, j) => (
                                  <td key={j} className={`px-3 py-2 text-xs ${i === 0 ? "font-semibold bg-muted" : ""}`}>
                                    {cell.trim()}
                                  </td>
                                ))}
                              </tr>
                            );
                          }
                          return null;
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }

              if (paragraph.trim().startsWith("```")) {
                const code = paragraph.replace(/```[\w-]*\n?|\n?```/g, "").trim();
                return <CodeBlock key={index} code={code} language={language} />;
              }

              if (paragraph.trim().startsWith(">")) {
                return (
                  <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                    {linkify(paragraph.replace(/^>\s*/, ""))}
                  </blockquote>
                );
              }

              return (
                <p key={index} className="text-muted-foreground">
                  {linkify(paragraph.trim())}
                </p>
              );
            })}
          </div>
        </article>

        {slug === "prompts" && (
          <div className="mt-6">
            <Link to="/$slug/" params={{ slug: "cli" }} className="cta-green">
              <Terminal size={17} /> {language === "en" ? "Install GTT CLI" : "Instalar GTT CLI"}
            </Link>
          </div>
        )}

        <nav className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-4">
            {pages.map((p) => (
              <Link
                key={p.slug}
                to="/$slug/"
                params={{ slug: p.slug }}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  p.slug === slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {language === "en" ? p.titleEn : p.titleEs}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <Footer />
    </div>
  );
}
