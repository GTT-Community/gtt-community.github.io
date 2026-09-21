import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { pages } from "@/lib/gttContent";
import { BOOTSTRAP_URL, GITHUB_ORG_URL, DOCS_URL } from "@/lib/links";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="ocean-footer">
      <div className="mx-auto flex min-h-28 max-w-[1500px] flex-col gap-8 px-8 py-8 xl:px-12">
        <div className="border-b border-footer-foreground pb-8">
          <div className="text-sm font-semibold mb-2">{t("footer.text")}</div>
          <p className="text-[9px] uppercase tracking-[0.28em] text-footer-foreground">{t("footer.tags")}</p>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <blockquote className="border-l border-footer-foreground pl-8 text-xl italic leading-tight">
            {language === "en"
              ? '"Better software\nwith governed intelligence."'
              : '"Mejor software\ncon inteligencia gobernada."'}
            <footer className="mt-1 text-xs not-italic">— GTT Method</footer>
          </blockquote>
          <nav aria-label={language === "en" ? "Footer navigation" : "Navegación del pie de página"} className="border-l border-footer-foreground pl-8 flex flex-wrap gap-x-8 gap-y-2 text-xs">
            {pages.map((p) => (
              <Link key={p.slug} to="/$slug" params={{ slug: p.slug }} className="hover:opacity-70 transition-opacity">
                {language === "en" ? p.titleEn : p.titleEs}
              </Link>
            ))}
          </nav>
          <div className="border-l border-footer-foreground pl-8 flex flex-col gap-2 text-xs">
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{t("nav.docs")}</a>
            <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">GitHub</a>
            <a href={BOOTSTRAP_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{language === "en" ? "Get Started" : "Comenzar"}</a>
          </div>
          <div className="border-l border-footer-foreground pl-8 text-[9px] font-semibold uppercase leading-[1.8] tracking-[0.28em]">
            {language === "en"
              ? <>People<br />Context<br />Intelligence<br />Impact</>
              : <>Personas<br />Contexto<br />Inteligencia<br />Impacto</>}
          </div>
        </div>
      </div>
    </footer>
  );
}
