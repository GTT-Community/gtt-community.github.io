import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { pages, searchContent } from "@/lib/gttContent";
import { ArrowLeft } from "lucide-react";
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

export const Route = createFileRoute("/$slug")({
  head: ({ params }) => {
    const { slug } = params;
    const lang = "en";
    const page = pages.find((p) => p.slug === slug);

    if (!page) {
      return {
        meta: [
          { title: "Page not found | GTT-Method" },
          { name: "description", content: "Page not found" },
        ],
      };
    }

    const title = lang === "en" ? page.titleEn : page.titleEs;
    const description = lang === "en" ? page.descriptionEn : page.descriptionEs;

    return {
      meta: [
        { title: `${title} | GTT-Method` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} | GTT-Method` },
        { property: "og:description", content: description },
      ],
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

        <article className="prose dark:prose-invert max-w-none">
          <div className="space-y-6 text-base leading-relaxed">
            {content.split("\n\n").map((paragraph, index) => {
              if (paragraph.trim().startsWith("##")) {
                const heading = paragraph.trim().replace(/^#+\s*/, "");
                const level = paragraph.match(/^#+/)?.[0].length || 2;
                const HeadingTag = level === 2 ? "h2" : level === 3 ? "h3" : "h4";

                return (
                  <HeadingTag key={index} className={level === 2 ? "text-2xl font-bold mt-8 mb-4" : level === 3 ? "text-xl font-semibold mt-6 mb-3" : "text-lg font-semibold mt-4 mb-2"}>
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
                return (
                  <pre key={index} className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-xs">{code}</code>
                  </pre>
                );
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

        <nav className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-4">
            {pages.map((p) => (
              <Link
                key={p.slug}
                to="/$slug"
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
