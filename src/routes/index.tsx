import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Boxes,
  BrainCircuit,
  Code2,
  Github,
  Leaf,
  Rocket,
  Search,
  Shield,
  Users,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pages } from "@/lib/gttContent";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/orca-hero.jpg";
import orcaMark from "@/assets/orca-mark.png";
import { BOOTSTRAP_URL, GITHUB_ORG_URL, DOCS_URL } from "@/lib/links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GTT-Method | Governance Through Thinking" },
      { name: "description", content: "An open methodology for governed, reusable and human-centered AI software development." },
      { property: "og:title", content: "GTT-Method | Governance Through Thinking" },
      { property: "og:description", content: "Design, build and evolve better software with governed intelligence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const methodSteps = {
  en: [
    { icon: Shield, title: "Governance", text: "Set the rules, context, evidence and boundaries." },
    { icon: BrainCircuit, title: "THINK", text: "Analyze, design and reason with agents." },
    { icon: Boxes, title: "Reuse", text: "Leverage existing epics, stories, patterns and knowledge." },
    { icon: Users, title: "Decide", text: "Human judgment when it matters." },
    { icon: Bot, title: "Build", text: "Execute with confidence, traceability and impact." },
  ],
  es: [
    { icon: Shield, title: "Gobernanza", text: "Define las reglas, el contexto, la evidencia y los límites." },
    { icon: BrainCircuit, title: "PENSAR", text: "Analiza, diseña y razona con agentes." },
    { icon: Boxes, title: "Reutilizar", text: "Aprovecha épicas, historias, patrones y conocimiento existentes." },
    { icon: Users, title: "Decidir", text: "Juicio humano cuando importa." },
    { icon: Bot, title: "Construir", text: "Ejecuta con confianza, trazabilidad e impacto." },
  ],
};

const pillars = {
  en: [
    { icon: BookOpen, title: "Documentation", text: "Guides, templates and practical examples to apply GTT in real projects.", link: "Browse Docs", href: DOCS_URL },
    { icon: Code2, title: "Open Source", text: "Built in the open. Contribute, learn and grow with the community.", link: "View on GitHub", href: GITHUB_ORG_URL },
    { icon: Users, title: "Community", text: "A space for builders, learners and practitioners.", link: "Join the Community", href: GITHUB_ORG_URL },
    { icon: Rocket, title: "Real Impact", text: "From ideas to working software, with governance and purpose.", link: "See Examples", slug: "gtt-method-2-1" as const },
  ],
  es: [
    { icon: BookOpen, title: "Documentación", text: "Guías, plantillas y ejemplos prácticos para aplicar GTT en proyectos reales.", link: "Ver Documentación", href: DOCS_URL },
    { icon: Code2, title: "Código Abierto", text: "Construido en abierto. Contribuye, aprende y crece con la comunidad.", link: "Ver en GitHub", href: GITHUB_ORG_URL },
    { icon: Users, title: "Comunidad", text: "Un espacio para constructores, aprendices y profesionales.", link: "Únete a la Comunidad", href: GITHUB_ORG_URL },
    { icon: Rocket, title: "Impacto Real", text: "De las ideas al software funcional, con gobernanza y propósito.", link: "Ver Ejemplos", slug: "gtt-method-2-1" as const },
  ],
};

const tools = ["✺ Claude Code", "● GitHub Copilot", "◎ OpenAI Codex", "◐ Kiro", "⬢ Cursor", "⬡ Continue", "〰 Windsurf", "◈ VS Code"];

const heroContent = {
  en: {
    eyebrow: "Open methodology for the AI era",
    ctaPrimary: "Get Started",
    ctaSecondary: "Read the Method",
    badges: ["Open Source", "Community Driven", "Real Projects"],
  },
  es: {
    eyebrow: "Metodología abierta para la era de la IA",
    ctaPrimary: "Comenzar",
    ctaSecondary: "Leer el Método",
    badges: ["Código Abierto", "Impulsado por la Comunidad", "Proyectos Reales"],
  },
};

const methodSectionContent = {
  en: { heading: "The GTT Method", subtitle: "A practical flow for AI-assisted software development.", explore: "Explore the method" },
  es: { heading: "El Método GTT", subtitle: "Un flujo práctico para el desarrollo de software asistido por IA.", explore: "Explorar el método" },
};

function ArrowLink({ children }: { children: React.ReactNode }) {
  return <a href="#method" className="inline-flex items-center gap-3 border-b border-foreground pb-0.5 text-sm font-medium">{children}<ArrowRight size={15} /></a>;
}

function NavLink({ item, className, onClick }: { item: { label: string; anchor?: string; slug?: string }; className?: string; onClick?: () => void }) {
  if (item.slug) {
    return (
      <Link to="/$slug" params={{ slug: item.slug }} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.anchor} className={className} onClick={onClick}>
      {item.label}
    </a>
  );
}

function Index() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ label: string; anchor?: string; slug?: string }> = [
    { label: t("nav.home"), anchor: "#top" },
    ...pages.map((p) => ({
      label: language === "en" ? p.titleEn : p.titleEs,
      slug: p.slug,
    })),
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex h-[82px] max-w-[1500px] items-center gap-6 px-8 xl:px-12">
        <a href="#top" className="flex min-w-max items-center gap-3" aria-label="GTT Method home">
          <img src={orcaMark} width={74} height={74} className="h-16 w-16 object-contain" alt="Orca GTT Method" />
          <div>
            <div className="text-[27px] font-extrabold leading-none tracking-tight">GTT-<span className="font-light">Method</span></div>
            <div className="mt-1 text-xs text-muted-foreground">Governance Through Thinking</div>
          </div>
        </a>
        <nav className="ml-auto hidden items-center gap-8 text-xs lg:flex" aria-label="Main navigation">
          {navItems.slice(0, 6).map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className={item.label === t("nav.home") ? "border-b-2 border-foreground py-3 font-semibold" : "hover:text-muted-foreground transition-colors"}
            />
          ))}
          <div className="border-l border-border pl-8 flex items-center gap-4">
            {navItems.slice(6).map((item) => (
              <NavLink key={item.label} item={item} className="hover:text-muted-foreground transition-colors" />
            ))}
          </div>
        </nav>
        <div className="ml-auto hidden items-center gap-4 md:flex lg:ml-6">
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold hover:text-muted-foreground transition-colors">{t("nav.docs")}</a>
          <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold"><Github size={22} /> GitHub</a>
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
          <a href={BOOTSTRAP_URL} target="_blank" rel="noopener noreferrer" className="cta-dark">{heroContent[language].ctaPrimary} <ArrowRight size={16} /></a>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? (language === "en" ? "Close menu" : "Cerrar menú") : (language === "en" ? "Open menu" : "Abrir menú")}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="border-b border-border bg-muted/50 px-8 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                className="hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">{t("nav.docs")}</a>
            <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-muted-foreground transition-colors"><Github size={16} /> GitHub</a>
            <a href={BOOTSTRAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">{heroContent[language].ctaPrimary}</a>
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

      <section id="top" className="hero-stage relative mx-auto max-w-[1600px] px-8 xl:px-12">
        <img src={heroImage} width={1920} height={900} className="absolute inset-0 h-full w-full object-cover object-center" alt="Orca leaping from the ocean before alpine mountains" />
        <div className="absolute inset-0 bg-hero-wash" />
        <div className="relative z-10 flex min-h-[425px] flex-col justify-center pb-8 pt-12">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.36em]">{heroContent[language].eyebrow}</p>
          {language === "en" ? (
            <h1 className="max-w-[650px] text-[clamp(3rem,5.3vw,5.35rem)] font-light leading-[0.92] tracking-tight">Governed Intelligence<br />for <strong className="font-extrabold">Better Software</strong></h1>
          ) : (
            <h1 className="max-w-[650px] text-[clamp(3rem,5.3vw,5.35rem)] font-light leading-[0.92] tracking-tight">Inteligencia Gobernada<br />para <strong className="font-extrabold">Mejor Software</strong></h1>
          )}
          {language === "en" ? (
            <p className="mt-5 max-w-[610px] text-[17px] leading-snug">GTT-Method helps individuals and teams design, build and evolve<br className="hidden sm:block" /> software with AI, using a governed, reusable and human-centered approach.</p>
          ) : (
            <p className="mt-5 max-w-[610px] text-[17px] leading-snug">GTT-Method ayuda a personas y equipos a diseñar, construir y evolucionar<br className="hidden sm:block" /> software con IA, con un enfoque gobernado, reutilizable y centrado en las personas.</p>
          )}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={BOOTSTRAP_URL} target="_blank" rel="noopener noreferrer" className="cta-dark px-8">{heroContent[language].ctaPrimary} <ArrowRight size={17} /></a>
            <a href="#method" className="cta-light">{heroContent[language].ctaSecondary}</a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-y-3 text-xs">
            <span className="flex items-center gap-2 pr-7"><Code2 size={20} /> {heroContent[language].badges[0]}</span>
            <span className="flex items-center gap-2 border-l border-border px-7"><Users size={20} /> {heroContent[language].badges[1]}</span>
            <span className="flex items-center gap-2 border-l border-border pl-7"><Leaf size={20} /> {heroContent[language].badges[2]}</span>
          </div>
        </div>
        {language === "en" ? (
          <div className="absolute right-16 top-12 z-10 hidden w-28 text-[10px] font-semibold uppercase leading-[1.65] tracking-[0.3em] xl:block">Deeper<br />Context<br />Higher<br />Impact<div className="my-4 h-px w-8 bg-foreground" /><span className="text-[8px]">Human direction<br />AI amplification</span></div>
        ) : (
          <div className="absolute right-16 top-12 z-10 hidden w-28 text-[10px] font-semibold uppercase leading-[1.65] tracking-[0.3em] xl:block">Más<br />Contexto<br />Mayor<br />Impacto<div className="my-4 h-px w-8 bg-foreground" /><span className="text-[8px]">Dirección humana<br />Amplificación de IA</span></div>
        )}
      </section>

      <section id="method" className="mx-auto max-w-[1500px] px-8 xl:px-12">
        <div className="method-panel grid gap-7 px-8 py-5 lg:grid-cols-[250px_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">{methodSectionContent[language].heading}</h2>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">{methodSectionContent[language].subtitle}</p>
            <div className="mt-3"><ArrowLink>{methodSectionContent[language].explore}</ArrowLink></div>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-5">
            {methodSteps[language].map(({ icon: Icon, title, text }, index) => <div key={title} className="relative text-center">
              <Icon className="mx-auto" size={31} strokeWidth={2.2} />
              <h3 className="mt-2 text-sm font-extrabold">{title}</h3>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{text}</p>
              {index < methodSteps[language].length - 1 && <ArrowRight className="absolute -right-4 top-3 hidden text-muted-foreground sm:block" size={18} />}
            </div>)}
          </div>
        </div>
      </section>

      <section id="docs" className="mx-auto grid max-w-[1500px] px-8 py-5 sm:grid-cols-2 xl:grid-cols-4 xl:px-12">
        {pillars[language].map(({ icon: Icon, title, text, link, href, slug }, index) => <article id={index === 2 ? "community" : index === 3 ? "examples" : undefined} key={title} className="flex gap-5 border-border px-5 py-2 first:pl-3 xl:border-r xl:last:border-r-0">
          <Icon size={30} strokeWidth={2.3} className="shrink-0" />
          <div>
            <h3 className="text-sm font-extrabold">{title}</h3>
            <p className="mt-1 min-h-10 text-xs leading-snug text-muted-foreground">{text}</p>
            {slug ? (
              <Link to="/$slug" params={{ slug }} className="mt-3 inline-flex items-center gap-3 text-xs font-medium">{link}<ArrowRight size={14} /></Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-3 text-xs font-medium">{link}<ArrowRight size={14} /></a>
            )}
          </div>
        </article>)}
      </section>

      <section id="agents" className="border-y border-border">
        <div className="mx-auto flex max-w-[1500px] items-stretch px-8 xl:px-12">
          <div className="flex w-52 shrink-0 items-center text-[9px] font-semibold uppercase leading-relaxed tracking-[0.28em]">
            {language === "en" ? <>Works with your<br />preferred AI tools</> : <>Funciona con tus<br />herramientas de IA preferidas</>}
          </div>
          <div className="flex flex-1 overflow-x-auto">{tools.map((tool) => <span key={tool} className="flex min-w-max items-center border-l border-border px-5 py-4 text-[11px]">{tool}</span>)}</div>
          <div className="hidden w-36 shrink-0 items-center justify-end text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[0.28em] xl:flex">
            {language === "en" ? <>Open<br />Flexible<br />Extensible</> : <>Abierto<br />Flexible<br />Extensible</>}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}