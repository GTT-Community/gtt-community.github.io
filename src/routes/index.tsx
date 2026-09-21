import { createFileRoute } from "@tanstack/react-router";
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

const methodSteps = [
  { icon: Shield, title: "Governance", text: "Set the rules, context, evidence and boundaries." },
  { icon: BrainCircuit, title: "THINK", text: "Analyze, design and reason with agents." },
  { icon: Boxes, title: "Reuse", text: "Leverage existing epics, stories, patterns and knowledge." },
  { icon: Users, title: "Decide", text: "Human judgment when it matters." },
  { icon: Bot, title: "Build", text: "Execute with confidence, traceability and impact." },
];

const pillars = [
  { icon: BookOpen, title: "Documentation", text: "Guides, templates and practical examples to apply GTT in real projects.", link: "Browse Docs" },
  { icon: Code2, title: "Open Source", text: "Built in the open. Contribute, learn and grow with the community.", link: "View on GitHub" },
  { icon: Users, title: "Community", text: "A space for builders, learners and practitioners.", link: "Join the Community" },
  { icon: Rocket, title: "Real Impact", text: "From ideas to working software, with governance and purpose.", link: "See Examples" },
];

const tools = ["✺ Claude Code", "● GitHub Copilot", "◎ OpenAI Codex", "◐ Kiro", "⬢ Cursor", "⬡ Continue", "〰 Windsurf", "◈ VS Code"];

function ArrowLink({ children }: { children: React.ReactNode }) {
  return <a href="#method" className="inline-flex items-center gap-3 border-b border-foreground pb-0.5 text-sm font-medium">{children}<ArrowRight size={15} /></a>;
}

function Index() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: "#top" },
    ...pages.map((p) => ({
      label: language === "en" ? p.titleEn : p.titleEs,
      href: `/${p.slug}`,
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
            <a
              key={item.label}
              href={item.href}
              className={item.label === t("nav.home") ? "border-b-2 border-foreground py-3 font-semibold" : "hover:text-muted-foreground transition-colors"}
            >
              {item.label}
            </a>
          ))}
          <div className="border-l border-border pl-8 flex items-center gap-4">
            {navItems.slice(6).map((item) => (
              <a key={item.label} href={item.href} className="hover:text-muted-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="ml-auto hidden items-center gap-4 md:flex lg:ml-6">
          <a href="https://github.com/GTT-method-Community" className="flex items-center gap-2 text-xs font-semibold"><Github size={22} /> GitHub</a>
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
          <a href="#method" className="cta-dark">Get Started <ArrowRight size={16} /></a>
        </div>
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="border-b border-border bg-muted/50 px-8 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-muted-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
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

      <section id="top" className="hero-stage relative mx-auto max-w-[1600px] px-8 xl:px-12">
        <img src={heroImage} width={1920} height={900} className="absolute inset-0 h-full w-full object-cover object-center" alt="Orca leaping from the ocean before alpine mountains" />
        <div className="absolute inset-0 bg-hero-wash" />
        <div className="relative z-10 flex min-h-[425px] flex-col justify-center pb-8 pt-12">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.36em]">Open methodology for the AI era</p>
          <h1 className="max-w-[650px] text-[clamp(3rem,5.3vw,5.35rem)] font-light leading-[0.92] tracking-tight">Governed Intelligence<br />for <strong className="font-extrabold">Better Software</strong></h1>
          <p className="mt-5 max-w-[610px] text-[17px] leading-snug">GTT-Method helps individuals and teams design, build and evolve<br className="hidden sm:block" /> software with AI, using a governed, reusable and human-centered approach.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#method" className="cta-dark px-8">Get Started <ArrowRight size={17} /></a>
            <a href="#method" className="cta-light">Read the Method</a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-y-3 text-xs">
            <span className="flex items-center gap-2 pr-7"><Code2 size={20} /> Open Source</span>
            <span className="flex items-center gap-2 border-l border-border px-7"><Users size={20} /> Community Driven</span>
            <span className="flex items-center gap-2 border-l border-border pl-7"><Leaf size={20} /> Real Projects</span>
          </div>
        </div>
        <div className="absolute right-16 top-12 z-10 hidden w-28 text-[10px] font-semibold uppercase leading-[1.65] tracking-[0.3em] xl:block">Deeper<br />Context<br />Higher<br />Impact<div className="my-4 h-px w-8 bg-foreground" /><span className="text-[8px]">Human direction<br />AI amplification</span></div>
      </section>

      <section id="method" className="mx-auto max-w-[1500px] px-8 xl:px-12">
        <div className="method-panel grid gap-7 px-8 py-5 lg:grid-cols-[250px_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">The GTT Method</h2>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">A practical flow for AI-assisted software development.</p>
            <div className="mt-3"><ArrowLink>Explore the method</ArrowLink></div>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-5">
            {methodSteps.map(({ icon: Icon, title, text }, index) => <div key={title} className="relative text-center">
              <Icon className="mx-auto" size={31} strokeWidth={2.2} />
              <h3 className="mt-2 text-sm font-extrabold">{title}</h3>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{text}</p>
              {index < methodSteps.length - 1 && <ArrowRight className="absolute -right-4 top-3 hidden text-muted-foreground sm:block" size={18} />}
            </div>)}
          </div>
        </div>
      </section>

      <section id="docs" className="mx-auto grid max-w-[1500px] px-8 py-5 sm:grid-cols-2 xl:grid-cols-4 xl:px-12">
        {pillars.map(({ icon: Icon, title, text, link }, index) => <article id={index === 2 ? "community" : index === 3 ? "examples" : undefined} key={title} className="flex gap-5 border-border px-5 py-2 first:pl-3 xl:border-r xl:last:border-r-0">
          <Icon size={30} strokeWidth={2.3} className="shrink-0" />
          <div><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-1 min-h-10 text-xs leading-snug text-muted-foreground">{text}</p><a href="#method" className="mt-3 inline-flex items-center gap-3 text-xs font-medium">{link}<ArrowRight size={14} /></a></div>
        </article>)}
      </section>

      <section id="agents" className="border-y border-border">
        <div className="mx-auto flex max-w-[1500px] items-stretch px-8 xl:px-12">
          <div className="flex w-52 shrink-0 items-center text-[9px] font-semibold uppercase leading-relaxed tracking-[0.28em]">Works with your<br />preferred AI tools</div>
          <div className="flex flex-1 overflow-x-auto">{tools.map((tool) => <span key={tool} className="flex min-w-max items-center border-l border-border px-5 py-4 text-[11px]">{tool}</span>)}</div>
          <div className="hidden w-36 shrink-0 items-center justify-end text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[0.28em] xl:flex">Open<br />Flexible<br />Extensible</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}