import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Boxes,
  BrainCircuit,
  Bug,
  Code2,
  Compass,
  FolderTree,
  History,
  Layers3,
  Leaf,
  Rocket,
  Settings2,
  Shield,
  ShieldCheck,
  Terminal,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import heroImage from "@/assets/orca-hero.jpg";
import { BOOTSTRAP_URL, GITHUB_ORG_URL, DOCS_URL, FEEDBACK_URL, FORUM_URL } from "@/lib/links";
import { SITE_DESCRIPTION, homeJsonLd, pageUrl } from "@/lib/seo";

const HOME_TITLE = "GTT-Method | Governance Through Thinking for AI-Assisted Software Development";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl() },
    ],
    links: [{ rel: "canonical", href: pageUrl() }],
    scripts: [{ type: "application/ld+json", children: homeJsonLd() }],
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
    { icon: Users, title: "Community", text: "A space for builders, learners and practitioners.", link: "Join the Community", href: FORUM_URL },
    { icon: Rocket, title: "Real Impact", text: "From ideas to working software, with governance and purpose.", link: "See Examples", slug: "gtt-method-2-1" as const },
    { icon: Bug, title: "Feedback", text: "Found a bug or have an idea? Help us improve GTT.", link: "Report a Bug or Idea", href: FEEDBACK_URL },
  ],
  es: [
    { icon: BookOpen, title: "Documentación", text: "Guías, plantillas y ejemplos prácticos para aplicar GTT en proyectos reales.", link: "Ver Documentación", href: DOCS_URL },
    { icon: Code2, title: "Código Abierto", text: "Construido en abierto. Contribuye, aprende y crece con la comunidad.", link: "Ver en GitHub", href: GITHUB_ORG_URL },
    { icon: Users, title: "Comunidad", text: "Un espacio para constructores, aprendices y profesionales.", link: "Únete a la Comunidad", href: FORUM_URL },
    { icon: Rocket, title: "Impacto Real", text: "De las ideas al software funcional, con gobernanza y propósito.", link: "Ver Ejemplos", slug: "gtt-method-2-1" as const },
    { icon: Bug, title: "Feedback", text: "¿Encontraste un bug o tienes una idea? Ayúdanos a mejorar GTT.", link: "Reportar un Bug o Idea", href: FEEDBACK_URL },
  ],
};

const tools = ["✺ Claude Code", "● GitHub Copilot", "◎ OpenAI Codex", "◐ Kiro", "⬢ Cursor", "⬡ Continue", "〰 Windsurf", "△ Antigravity", "◈ VS Code"];

const heroContent = {
  en: {
    eyebrow: "Open methodology for the AI era",
    ctaPrimary: "Get Started",
    ctaSecondary: "Read the Method",
    ctaCli: "Install GTT CLI",
    ctaPrompts: "Implement with Prompts",
    badges: ["Open Source", "Community Driven", "Real Projects"],
  },
  es: {
    eyebrow: "Metodología abierta para la era de la IA",
    ctaPrimary: "Comenzar",
    ctaSecondary: "Leer el Método",
    ctaCli: "Instalar GTT CLI",
    ctaPrompts: "Implementar con Prompts",
    badges: ["Código Abierto", "Impulsado por la Comunidad", "Proyectos Reales"],
  },
};

const methodSectionContent = {
  en: { heading: "The GTT Method", subtitle: "A practical flow for AI-assisted software development.", explore: "Explore the method" },
  es: { heading: "El Método GTT", subtitle: "Un flujo práctico para el desarrollo de software asistido por IA.", explore: "Explorar el método" },
};

const methodologyContent = {
  en: {
    eyebrow: "GTT-Method · Engine and governed domain",
    title: <>GTT-Method governs a project<br />through <code>gtt-domain/</code></>,
    intro: "GTT-Method is the engine: it defines how governance works. gtt-domain/ is the project space it governs: what is being governed.",
    engineLabel: "GTT-Method · Engine",
    engineText: "How GTT works: method, governance and change process.",
    domainLabel: "gtt-domain/ · Governed project",
    domainText: "What GTT governs: this project's context, intent, decisions and state.",
    workspace: "Project workspace",
    workspaceText: "When GTT is applied, its project setup establishes gtt-domain/ as the home of the project's methodological context.",
    here: "GTT methodology lives here",
    source: "Source code", tests: "Tests", docs: "Documentation", scripts: "Scripts & tools", actions: "CI/CD", more: "and more…",
    contents: "Inside gtt-domain/",
    contentsText: "An adaptable set of project artifacts: each file gives people and agents a clear, reusable piece of context.",
    fileGuide: "Example artifacts · adapted to each project's needs",
    domains: [
      { icon: Compass, name: "Foundation", dir: "01-foundation/", files: [["mission.md", "Project purpose and reason for existing."], ["goals.md", "Outcomes the project aims to achieve."], ["scope.md", "What is included and what is out of scope."], ["context.md", "Domain, users and conditions around the project."]], text: "Why the project exists and what it aims to achieve." },
      { icon: Layers3, name: "Architecture", dir: "02-architecture/", files: [["architecture.md", "System structure and its key components."], ["decisions.md", "Important choices and the reasons behind them."], ["diagrams/", "Visual views of structure and relationships."]], text: "How the system is designed and why." },
      { icon: Settings2, name: "Standards", dir: "03-standards/", files: [["coding-standards.md", "Conventions for readable, consistent code."], ["tech-stack.md", "Selected technologies and their intended use."], ["naming.md", "Shared names for files, concepts and components."]], text: "Conventions that keep the work consistent." },
      { icon: ShieldCheck, name: "Rules", dir: "04-rules/", files: [["agent-rules.md", "How AI agents should work in this project."], ["file-protection.md", "Files or areas that need special care."], ["change-policy.md", "Constraints and expectations for making changes."]], text: "Boundaries and guidance for people and agents." },
      { icon: Workflow, name: "Workflow", dir: "05-workflow/", files: [["development-flow.md", "Steps from an idea to a delivered change."], ["review-process.md", "How work is checked and approved."], ["release-process.md", "How validated changes are delivered."]], text: "How changes are developed, reviewed and released." },
      { icon: TrendingUp, name: "Evolution", dir: "06-evolution/", files: [["changelog.md", "A record of meaningful project changes."], ["lessons-learned.md", "Knowledge gained from project work."], ["future-ideas.md", "Potential directions and opportunities."]], text: "How the project learns and evolves over time." },
    ],
    meaningEyebrow: "The governed domain",
    meaningTitle: "the project itself",
    meaning: "gtt-domain/ is the project space governed by GTT-Method. It preserves the governed context, intent, decisions, pending proposals, change rules, development line, methodological state and governance traceability.",
    callout: "GTT-Method is the engine. gtt-domain/ is the project it governs.",
    why: "Why multiple files?",
    whyText: "Because a methodology needs an explicit, structured and reusable place for context that might otherwise be scattered across conversations, memory and separate documents.",
    reasons: [
      { icon: Compass, title: "Capture decisions", text: "Architecture, design and direction." },
      { icon: ShieldCheck, title: "Preserve intent", text: "Keep context from being lost as work changes." },
      { icon: Users, title: "Align people and agents", text: "A shared context guides everyone’s work." },
      { icon: History, title: "Keep traceability", text: "Record changes, learning and evolution." },
    ],
    shared: "People and agents work from the same methodological context.",
    artifacts: "The domain's files make project context explicit, reviewable and reusable by people and agents.",
    lifecycleTitle: "GTT guides the project through its lifecycle",
    lifecycleText: "From initial intent to continuous evolution.",
    lifecycle: [
      ["Intent", "Vision and goals"], ["Design", "Architecture, decisions and rules"], ["Decision", "Human judgment when it matters"], ["Build", "Work aligned with context"], ["Evolution", "Learning and continuous improvement"],
    ],
  },
  es: {
    eyebrow: "GTT-Method · Motor y dominio gobernado",
    title: <>GTT-Method gobierna un proyecto<br />a través de <code>gtt-domain/</code></>,
    intro: "GTT-Method es el motor: define cómo funciona la gobernanza. gtt-domain/ es el espacio del proyecto que gobierna: qué está siendo gobernado.",
    engineLabel: "GTT-Method · Motor",
    engineText: "Cómo funciona GTT: método, gobernanza y proceso de cambio.",
    domainLabel: "gtt-domain/ · Proyecto gobernado",
    domainText: "Qué gobierna GTT: el contexto, la intención, las decisiones y el estado de este proyecto.",
    workspace: "Workspace del proyecto",
    workspaceText: "Al aplicar GTT, la configuración del proyecto establece gtt-domain/ como el lugar de su contexto metodológico.",
    here: "Aquí vive la metodología GTT",
    source: "Código fuente", tests: "Pruebas", docs: "Documentación", scripts: "Scripts y herramientas", actions: "CI/CD", more: "y más…",
    contents: "Dentro de gtt-domain/",
    contentsText: "Un conjunto adaptable de artefactos del proyecto: cada archivo aporta contexto claro y reutilizable a personas y agentes.",
    fileGuide: "Artefactos de ejemplo · se adaptan a las necesidades del proyecto",
    domains: [
      { icon: Compass, name: "Foundation · Fundamentos", dir: "01-foundation/", files: [["mission.md", "Propósito y razón de ser del proyecto."], ["goals.md", "Resultados que el proyecto busca lograr."], ["scope.md", "Qué incluye el proyecto y qué queda fuera."], ["context.md", "Dominio, usuarios y condiciones del proyecto."]], text: "Por qué existe el proyecto y qué busca lograr." },
      { icon: Layers3, name: "Architecture · Arquitectura", dir: "02-architecture/", files: [["architecture.md", "Estructura del sistema y sus componentes."], ["decisions.md", "Decisiones relevantes y sus fundamentos."], ["diagrams/", "Vistas visuales de estructuras y relaciones."]], text: "Cómo está diseñado el sistema y por qué." },
      { icon: Settings2, name: "Standards · Estándares", dir: "03-standards/", files: [["coding-standards.md", "Convenciones para un código claro y consistente."], ["tech-stack.md", "Tecnologías elegidas y cómo se usan."], ["naming.md", "Nombres compartidos para archivos y conceptos."]], text: "Convenciones que mantienen la consistencia." },
      { icon: ShieldCheck, name: "Rules · Reglas", dir: "04-rules/", files: [["agent-rules.md", "Cómo deben trabajar los agentes de IA."], ["file-protection.md", "Archivos y áreas que requieren cuidado especial."], ["change-policy.md", "Límites y expectativas para hacer cambios."]], text: "Límites y orientación para personas y agentes." },
      { icon: Workflow, name: "Workflow · Flujo de trabajo", dir: "05-workflow/", files: [["development-flow.md", "Pasos desde una idea hasta un cambio entregado."], ["review-process.md", "Cómo se revisa y valida el trabajo."], ["release-process.md", "Cómo se publican cambios ya validados."]], text: "Cómo se desarrolla, revisa y entrega el trabajo." },
      { icon: TrendingUp, name: "Evolution · Evolución", dir: "06-evolution/", files: [["changelog.md", "Registro de cambios relevantes del proyecto."], ["lessons-learned.md", "Conocimiento obtenido durante el trabajo."], ["future-ideas.md", "Posibles direcciones y oportunidades futuras."]], text: "Cómo aprende y evoluciona el proyecto." },
    ],
    meaningEyebrow: "El dominio gobernado",
    meaningTitle: "el proyecto mismo",
    meaning: "gtt-domain/ es el espacio del proyecto gobernado por GTT-Method. Preserva el contexto gobernado, la intención, las decisiones, las propuestas pendientes, las reglas de cambio, la línea de desarrollo, el estado metodológico y la trazabilidad de la gobernanza.",
    callout: "GTT-Method es el motor. gtt-domain/ es el proyecto que gobierna.",
    why: "¿Por qué tantos archivos?",
    whyText: "Porque una metodología necesita un lugar explícito, estructurado y reutilizable para el contexto que, de otro modo, quedaría disperso en conversaciones, memoria y documentos aislados.",
    reasons: [
      { icon: Compass, title: "Capturan decisiones", text: "De arquitectura, diseño y dirección." },
      { icon: ShieldCheck, title: "Protegen la intención", text: "Evitan perder contexto a medida que cambia el trabajo." },
      { icon: Users, title: "Alinean personas y agentes", text: "Un contexto compartido orienta el trabajo de todos." },
      { icon: History, title: "Mantienen trazabilidad", text: "Registran cambios, aprendizaje y evolución." },
    ],
    shared: "Personas y agentes trabajan desde el mismo contexto metodológico.",
    artifacts: "Los archivos del dominio hacen explícito el contexto del proyecto para que personas y agentes puedan consultarlo, revisarlo y reutilizarlo.",
    lifecycleTitle: "GTT guía el ciclo de vida del proyecto",
    lifecycleText: "Desde la intención inicial hasta la evolución continua.",
    lifecycle: [
      ["Intención", "Visión y objetivos"], ["Diseño", "Arquitectura, decisiones y reglas"], ["Decisión", "Juicio humano cuando importa"], ["Construcción", "Trabajo alineado al contexto"], ["Evolución", "Aprendizaje y mejora continua"],
    ],
  },
};

function ArrowLink({ children }: { children: React.ReactNode }) {
  return <Link to="/$slug/" params={{ slug: "methodology" }} className="inline-flex items-center gap-3 border-b border-foreground pb-0.5 text-sm font-medium">{children}<ArrowRight size={15} /></Link>;
}

function Index() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />

      <div className="mx-auto max-w-[1500px] px-3 sm:px-8 xl:px-12">
        <section id="top" className="hero-stage relative overflow-hidden rounded-3xl px-6 sm:px-8">
          <img src={heroImage} width={1920} height={900} className="absolute inset-0 h-full w-full object-cover object-center" alt="Orca leaping from the ocean before alpine mountains" />
          <div className="absolute inset-0 bg-hero-wash" />
          <div className="relative z-10 flex min-h-[425px] flex-col justify-center pb-8 pt-12">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.36em]">{heroContent[language].eyebrow}</p>
            <h1 className="max-w-[760px] tracking-tight">
              <span className="block text-[clamp(2.5rem,4.4vw,4.4rem)] font-extrabold leading-[0.95]">GTT — Governance &amp; THINK</span>
              <span className="mt-4 block text-[clamp(1.35rem,2.3vw,2.3rem)] font-light leading-[1.1]">Agentic Specification-Driven Development</span>
              <span className="mt-1 block text-[clamp(1.35rem,2.3vw,2.3rem)] font-light leading-[1.1]">AI Efficiency Governance</span>
            </h1>
            {language === "en" ? (
              <p className="mt-5 max-w-[610px] text-[17px] leading-snug">GTT-Method helps individuals and teams design, build and evolve<br className="hidden sm:block" /> software with AI, using a governed, reusable and human-centered approach.</p>
            ) : (
              <p className="mt-5 max-w-[610px] text-[17px] leading-snug">GTT-Method ayuda a personas y equipos a diseñar, construir y evolucionar<br className="hidden sm:block" /> software con IA, con un enfoque gobernado, reutilizable y centrado en las personas.</p>
            )}
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={BOOTSTRAP_URL} target="_blank" rel="noopener noreferrer" className="cta-dark px-8">{heroContent[language].ctaPrimary} <ArrowRight size={17} /></a>
              <Link to="/$slug/" params={{ slug: "methodology" }} className="cta-light">{heroContent[language].ctaSecondary}</Link>
              <Link to="/$slug/" params={{ slug: "cli" }} className="cta-green"><Terminal size={17} /> {heroContent[language].ctaCli}</Link>
              <Link to="/$slug/" params={{ slug: "prompts" }} className="cta-blue"><Bot size={17} /> {heroContent[language].ctaPrompts}</Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-y-3 text-xs">
              <span className="flex items-center gap-2 pr-7"><Code2 size={20} /> {heroContent[language].badges[0]}</span>
              <a href={FORUM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-l border-border px-7 underline underline-offset-4"><Users size={20} /> {heroContent[language].badges[1]}</a>
              <span className="flex items-center gap-2 border-l border-border pl-7"><Leaf size={20} /> {heroContent[language].badges[2]}</span>
            </div>
          </div>
          {language === "en" ? (
            <div className="absolute right-16 top-12 z-10 hidden w-32 text-[10px] font-semibold uppercase leading-[1.65] tracking-[0.3em] xl:block">Governance<br />of design<br />and human<br />intent<div className="my-4 h-px w-8 bg-foreground" /><span className="text-[8px]">For modern<br />software development</span></div>
          ) : (
            <div className="absolute right-16 top-12 z-10 hidden w-32 text-[10px] font-semibold uppercase leading-[1.65] tracking-[0.3em] xl:block">Gobernanza<br />del diseño y<br />la intención<br />humana<div className="my-4 h-px w-8 bg-foreground" /><span className="text-[8px]">Para el desarrollo<br />moderno de software</span></div>
          )}
        </section>
      </div>

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

      <section id="docs" className="mx-auto grid max-w-[1500px] px-8 py-5 sm:grid-cols-2 xl:grid-cols-5 xl:px-12">
        {pillars[language].map(({ icon: Icon, title, text, link, href, slug }, index) => <article id={index === 2 ? "community" : index === 3 ? "examples" : undefined} key={title} className="flex gap-5 border-border px-5 py-2 first:pl-3 xl:border-r xl:last:border-r-0">
          <Icon size={30} strokeWidth={2.3} className="shrink-0" />
          <div>
            <h3 className="text-sm font-extrabold">{title}</h3>
            <p className="mt-1 min-h-10 text-xs leading-snug text-muted-foreground">{text}</p>
            {slug ? (
              <Link to="/$slug/" params={{ slug }} className="mt-3 inline-flex items-center gap-3 text-xs font-medium">{link}<ArrowRight size={14} /></Link>
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

      <MethodologySection language={language} />

      <Footer />
    </main>
  );
}

function MethodologySection({ language }: { language: "en" | "es" }) {
  const content = methodologyContent[language];

  return (
    <section className="gtt-methodology" aria-labelledby="gtt-methodology-title">
      <header className="gtt-methodology__intro">
        <p className="gtt-methodology__eyebrow">{content.eyebrow}</p>
        <h2 id="gtt-methodology-title" className="gtt-methodology__title">{content.title}</h2>
        <p className="gtt-methodology__lead">{content.intro}</p>
      </header>

      <div className="gtt-methodology__model" aria-label={language === "es" ? "GTT-Method gobierna gtt-domain" : "GTT-Method governs gtt-domain"}>
        <div><span>01 · ENGINE</span><strong>{content.engineLabel}</strong><p>{content.engineText}</p></div>
        <span className="gtt-methodology__model-arrow" aria-hidden="true">→</span>
        <div><span>02 · DOMAIN</span><strong>{content.domainLabel}</strong><p>{content.domainText}</p></div>
      </div>

      <div className="gtt-methodology__grid">
        <article className="gtt-methodology__panel gtt-methodology__workspace">
          <div className="gtt-methodology__panel-head">
            <FolderTree size={19} aria-hidden="true" />
            <div><h3>{content.workspace}</h3><p>{content.workspaceText}</p></div>
          </div>
          <div className="gtt-methodology__tree" aria-label={language === "es" ? "Ejemplo de estructura del workspace" : "Example workspace structure"}>
            <div className="gtt-methodology__tree-root">my-project/</div>
            <div className="gtt-methodology__tree-item gtt-methodology__tree-item--methodology"><code>├── gtt-domain/</code><span>← {content.here}</span></div>
            <div className="gtt-methodology__tree-item"><code>├── src/</code><span>{content.source}</span></div>
            <div className="gtt-methodology__tree-item"><code>├── tests/</code><span>{content.tests}</span></div>
            <div className="gtt-methodology__tree-item"><code>├── docs/</code><span>{content.docs}</span></div>
            <div className="gtt-methodology__tree-item"><code>├── scripts/</code><span>{content.scripts}</span></div>
            <div className="gtt-methodology__tree-item"><code>├── .github/</code><span>{content.actions}</span></div>
            <div className="gtt-methodology__tree-item"><code>└── …</code><span>{content.more}</span></div>
          </div>
        </article>

        <article className="gtt-methodology__panel gtt-methodology__domains">
          <div className="gtt-methodology__panel-head">
            <Layers3 size={19} aria-hidden="true" />
            <div><h3>{content.contents}</h3><p>{content.contentsText}</p></div>
          </div>
          <p className="gtt-methodology__file-guide">{content.fileGuide}</p>
          <div className="gtt-methodology__domain-list">
            {content.domains.map(({ icon: Icon, name, dir, files, text }, index) => (
              <div className="gtt-methodology__domain" key={dir}>
                <span className="gtt-methodology__domain-index">0{index + 1}</span>
                <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                <div className="gtt-methodology__domain-copy">
                  <h4>{name}</h4><p>{text}</p>
                  <ul>{files.map(([file, description]) => <li key={file}><code>{dir}{file}</code><span>{description}</span></li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="gtt-methodology__panel gtt-methodology__meaning">
          <p className="gtt-methodology__eyebrow">{content.meaningEyebrow}</p>
          <h3>{content.meaningTitle}</h3>
          <p className="gtt-methodology__meaning-text">{content.meaning}</p>
          <p className="gtt-methodology__callout">{content.callout}</p>
          <h4 className="gtt-methodology__why-title">{content.why}</h4>
          <p className="gtt-methodology__why-text">{content.whyText}</p>
          <ul className="gtt-methodology__reasons">
            {content.reasons.map(({ icon: Icon, title, text }) => <li key={title}><Icon size={17} strokeWidth={1.8} aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span></li>)}
          </ul>
          <p className="gtt-methodology__shared"><Users size={16} aria-hidden="true" />{content.shared}</p>
        </article>
      </div>

      <p className="gtt-methodology__artifacts">{content.artifacts}</p>

      <div className="gtt-methodology__lifecycle">
        <div className="gtt-methodology__lifecycle-heading"><h3>{content.lifecycleTitle}</h3><p>{content.lifecycleText}</p></div>
        <ol>{content.lifecycle.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><strong>{title}</strong><small>{text}</small></li>)}</ol>
      </div>
    </section>
  );
}
