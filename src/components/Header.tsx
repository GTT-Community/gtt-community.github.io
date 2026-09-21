import { Link } from "@tanstack/react-router";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pages } from "@/lib/gttContent";
import { BOOTSTRAP_URL, GITHUB_ORG_URL, DOCS_URL } from "@/lib/links";
import orcaMark from "@/assets/orca-mark.png";

interface HeaderProps {
  /** Slug of the currently active content page. Omit when rendering on the home page. */
  activeSlug?: string;
}

type NavItem = { label: string; slug?: string; isHome?: boolean };

/**
 * The single header used by the home page and every content page, so the
 * two can never drift apart again. The only thing that differs per page is
 * which nav item is marked active, and whether the logo/"Home" link is an
 * in-page anchor (already on "/") or a real navigation (from elsewhere).
 */
export function Header({ activeSlug }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = activeSlug === undefined;

  const navItems: NavItem[] = [
    { label: t("nav.home"), isHome: true },
    ...pages.map((p) => ({
      label: language === "en" ? p.titleEn : p.titleEs,
      slug: p.slug,
    })),
  ];

  const isActive = (item: NavItem) => (item.isHome ? isHome : item.slug === activeSlug);

  function NavLink({ item, className, onClick }: { item: NavItem; className: string; onClick?: () => void }) {
    const active = isActive(item);
    const combinedClassName = active ? "border-b-2 border-foreground py-3 font-semibold" : className;
    const ariaCurrent = active ? ("page" as const) : undefined;

    if (item.isHome) {
      return isHome ? (
        <a href="#top" className={combinedClassName} onClick={onClick} aria-current={ariaCurrent}>
          {item.label}
        </a>
      ) : (
        <Link to="/" className={combinedClassName} onClick={onClick}>
          {item.label}
        </Link>
      );
    }

    return (
      <Link to="/$slug" params={{ slug: item.slug! }} className={combinedClassName} onClick={onClick} aria-current={ariaCurrent}>
        {item.label}
      </Link>
    );
  }

  const logoInner = (
    <>
      <img src={orcaMark} width={74} height={74} className="h-16 w-16 object-contain" alt="Orca GTT Method" />
      <div>
        <div className="text-[27px] font-extrabold leading-none tracking-tight">
          GTT-<span className="font-light">Method</span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">Governance Through Thinking</div>
      </div>
    </>
  );

  return (
    <>
      <header className="mx-auto flex h-[82px] w-full max-w-[1500px] items-center gap-6 px-8 xl:px-12">
        {isHome ? (
          <a href="#top" className="flex min-w-max items-center gap-3" aria-label="GTT Method home">
            {logoInner}
          </a>
        ) : (
          <Link to="/" className="flex min-w-max items-center gap-3" aria-label="GTT Method home">
            {logoInner}
          </Link>
        )}

        <nav className="ml-auto hidden items-center gap-8 text-xs lg:flex" aria-label="Main navigation">
          {navItems.slice(0, 6).map((item) => (
            <NavLink key={item.label} item={item} className="hover:text-muted-foreground transition-colors" />
          ))}
          <div className="border-l border-border pl-8 flex items-center gap-4">
            {navItems.slice(6).map((item) => (
              <NavLink key={item.label} item={item} className="hover:text-muted-foreground transition-colors" />
            ))}
          </div>
        </nav>

        <div className="ml-auto hidden items-center gap-4 md:flex lg:ml-6">
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold hover:text-muted-foreground transition-colors">
            {t("nav.docs")}
          </a>
          <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold hover:text-muted-foreground transition-colors">
            <Github size={22} /> GitHub
          </a>
          <div className="flex items-center gap-2 rounded-md border border-border px-3 py-2">
            <button
              onClick={() => setLanguage("en")}
              className={`text-xs font-semibold px-2 py-1 rounded ${language === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <div className="text-muted-foreground">|</div>
            <button
              onClick={() => setLanguage("es")}
              className={`text-xs font-semibold px-2 py-1 rounded ${language === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              aria-pressed={language === "es"}
            >
              ES
            </button>
          </div>
          <a href={BOOTSTRAP_URL} target="_blank" rel="noopener noreferrer" className="cta-dark">
            {language === "en" ? "Get Started" : "Comenzar"}
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? (language === "en" ? "Close menu" : "Cerrar menú") : (language === "en" ? "Open menu" : "Abrir menú")}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="border-b border-border bg-muted/50 px-8 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                className="hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
              {t("nav.docs")}
            </a>
            <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-muted-foreground transition-colors">
              <Github size={16} /> GitHub
            </a>
            <a href={BOOTSTRAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
              {language === "en" ? "Get Started" : "Comenzar"}
            </a>
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
    </>
  );
}
