import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { pages, searchContent } from "@/lib/gttContent";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import orcaMark from "@/assets/orca-mark.png";

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
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <header className="mx-auto flex h-[82px] w-full max-w-[1500px] items-center gap-6 px-8 xl:px-12">
        <Link to="/" className="flex min-w-max items-center gap-3" aria-label="GTT Method home">
          <img src={orcaMark} width={74} height={74} className="h-16 w-16 object-contain" alt="Orca GTT Method" />
          <div>
            <div className="text-[27px] font-extrabold leading-none tracking-tight">GTT-<span className="font-light">Method</span></div>
            <div className="mt-1 text-xs text-muted-foreground">Governance Through Thinking</div>
          </div>
        </Link>
        <nav className="ml-auto hidden items-center gap-8 text-xs lg:flex" aria-label="Main navigation">
          {pages.slice(0, 5).map((p) => (
            <Link
              key={p.slug}
              to="/$slug"
              params={{ slug: p.slug }}
              className={p.slug === slug ? "border-b-2 border-foreground py-3 font-semibold" : "hover:text-muted-foreground transition-colors"}
            >
              {language === "en" ? p.titleEn : p.titleEs}
            </Link>
          ))}
          <div className="border-l border-border pl-8 flex items-center gap-4">
            {pages.slice(5).map((p) => (
              <Link
                key={p.slug}
                to="/$slug"
                params={{ slug: p.slug }}
                className={p.slug === slug ? "border-b-2 border-foreground py-3 font-semibold" : "hover:text-muted-foreground transition-colors"}
              >
                {language === "en" ? p.titleEn : p.titleEs}
              </Link>
            ))}
          </div>
        </nav>
        <div className="ml-auto hidden items-center gap-4 md:flex lg:ml-6">
          <div className="flex items-center gap-2 rounded-md border border-border px-3 py-2">
            <button
              onClick={() => setLanguage("en")}
              className={`text-xs font-semibold px-2 py-1 rounded ${language === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              EN
            </button>
            <div className="text-muted-foreground">|</div>
            <button
              onClick={() => setLanguage("es")}
              className={`text-xs font-semibold px-2 py-1 rounded ${language === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              ES
            </button>
          </div>
          <a href="https://github.com/orgs/GTT-Community/repositories" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold">GitHub</a>
        </div>
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="border-b border-border bg-muted/50 px-8 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            {pages.map((p) => (
              <Link
                key={p.slug}
                to="/$slug"
                params={{ slug: p.slug }}
                className="hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "en" ? p.titleEn : p.titleEs}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-4 flex gap-2">
              <button
                onClick={() => {
                  setLanguage("en");
                  setMobileMenuOpen(false);
                }}
                className={`text-xs font-semibold px-3 py-2 rounded ${language === "en" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("es");
                  setMobileMenuOpen(false);
                }}
                className={`text-xs font-semibold px-3 py-2 rounded ${language === "es" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                Español
              </button>
            </div>
          </nav>
        </div>
      )}

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
                        {line.replace(/^[-•*]\s*|\d+\.\s*/, "")}
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
                    {paragraph.replace(/^>\s*/, "")}
                  </blockquote>
                );
              }

              return (
                <p key={index} className="text-muted-foreground">
                  {paragraph.trim()}
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
