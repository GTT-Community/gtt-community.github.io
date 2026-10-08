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
  Shield,
  ShieldCheck,
  Terminal,
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
    engineLabel: ".gtt/ · GTT engine",
    engineText: "Scripts and tools that implement GTT and operate on the governed domain.",
    domainLabel: "gtt-domain/ · Governed project",
    domainText: "What GTT governs: this project's context, intent, decisions and state.",
    workspace: "Project workspace",
    workspaceText: "GTT creates its structure during installation. The team and agents use gtt-domain/ to work with the project's governed information.",
    here: "Governed project information",
    engineDir: "GTT engine: scripts and tools", contextDir: "Governed context · L0", decisionsDir: "Accepted decisions · L1", backlogFile: "Development line", proposalsDir: "Drafts for human review", source: "Project source code",
    contents: "Inside gtt-domain/",
    contentsText: "The engine lives in .gtt/. This domain contains information about the project and how its team works.",
    fileGuide: "GTT Bootstrap repository · some files are templates; proposals concern this project",
    repoNote: "Here, gtt-domain/ describes GTT Bootstrap itself. session.md reports pre-freeze status: no .frozen baseline exists yet. An installing project gets its own domain content.",
    domains: [
      { icon: Compass, name: "context/ · Governed context (L0)", dir: "gtt-domain/context/", files: [["architecture.md", "Describes the system architecture in prose."], ["constraints.md", "Limits decisions and implementation must respect; always-loaded GTT context."], ["glossary.md", "Defines project terms to prevent different interpretations."], ["principles.md", "Design principles that guide decisions."], ["solution-vision.md", "Solution purpose and what falls outside its goals."], ["stack.md", "Architecture and technology views, plus technical boundaries."]], text: "The project's reference for orienting development and evaluating whether implementation follows its design." },
      { icon: ShieldCheck, name: "adr/ · Accepted decisions (L1)", dir: "gtt-domain/adr/", files: [["ADR-001-context-governance.md", "Accepted decision: governed context is the source of truth; code does not replace it."], ["ADR-TEMPLATE.md", "Template for context, decision, alternatives, consequences, risks and affected areas."]], text: "Permanent record of approved architecture decisions and their rationale." },
      { icon: Workflow, name: "Planning and change requests", dir: "gtt-domain/", files: [["backlog.md", "Development line: Epics, Stories, current focus and next work. Humans approve Epic goals and scope; agents may create and update Stories."], ["change-request.md", "Entry point for governed design changes or material Epic changes, not routine work."], ["session.md", "Script-regenerated operational summary to resume work; not authority or a decision record."]], text: "Separates the approved project frame, operational delivery plan and requests for governed change." },
      { icon: Layers3, name: "proposals/ · Reviewable drafts", dir: "gtt-domain/proposals/", files: [["README.md", "Proposal workflow, states and naming conventions."], ["PROPOSAL-*.md", "Drafts on Antigravity support, backlog changes, Bootstrap 1.3.1 closure, D1 instruction layer, 1.3.2 scope and session-memory consolidation."], ["*.patch", "Proposed edits to files such as AGENTS.md or the GTT engine."], ["apply-*.sh", "Promotion scripts a person reviews and runs when the workflow requires it."], ["claude-adapter/", "Working adapter code/configuration associated with a proposal."], ["closure-1.3.1/", "Working closure package associated with a proposal."], ["release-1.3.2/", "Working release package associated with a proposal."], ["session-adapters/", "Draft Codex, Copilot and Kiro session adapters."]], text: "A proposal is a draft, never an accepted decision. Check its content and status before treating it as current." },
      { icon: History, name: "Optional or generated artifacts", dir: "gtt-domain/", files: [["sources.md", "Declared sources and precedence, when needed."], ["working-agreements.md", "Team agreements, when used."], ["governance-backlog.json", "Calculated observations and human decisions about them."], [".frozen", "Freeze marker and baseline, created only by the GTT freeze procedure."]], text: "These files may exist in other projects; they are not all present in this repository." },
    ],
    meaningEyebrow: "The governed domain",
    meaningTitle: "the governed project space",
    meaning: "gtt-domain/ is the project space governed by GTT-Method. It preserves the governed context, intent, decisions, pending proposals, change rules, development line, methodological state and governance traceability.",
    callout: "GTT-Method is the method. .gtt/ holds its tools; gtt-domain/ is what it governs.",
    why: "Why multiple files?",
    whyText: "Different files have different authority: governed context and accepted decisions set the frame, the backlog plans delivery, and proposals prepare changes for human review.",
    reasons: [
      { icon: Compass, title: "Capture decisions", text: "Architecture, design and direction." },
      { icon: ShieldCheck, title: "Preserve intent", text: "Keep context from being lost as work changes." },
      { icon: Users, title: "Align people and agents", text: "A shared context guides everyone’s work." },
      { icon: History, title: "Keep traceability", text: "Record changes, learning and evolution." },
    ],
    shared: "People and agents work from the same methodological context.",
    artifacts: "GTT supplies the structure and method; each project supplies its content. People and agents work from shared context without mistaking drafts or operational summaries for authority.",
    lifecycleTitle: "GTT guides the project through its lifecycle",
    lifecycleText: "From initial intent to continuous evolution.",
    lifecycle: [
      ["Intent", "Vision and goals"], ["Design", "Architecture, decisions and rules"], ["Decision", "Human judgment when it matters"], ["Build", "Work aligned with context"], ["Evolution", "Learning and continuous improvement"],
    ],
  },
  es: {
    eyebrow: "Metodología abierta para gobernar proyectos en tu workspace",
    title: <>GTT-Method: una metodología.<br />Un dominio. Un proyecto gobernado.</>,
    intro: "GTT-Method crea el directorio gtt-domain/, en tu workspace, donde tu proyecto conserva su intención, diseño, decisiones y reglas de gobernanza.",
    engineLabel: ".gtt/ · Motor GTT",
    engineText: "Scripts y herramientas que implementan GTT y operan sobre el dominio gobernado.",
    domainLabel: "gtt-domain/ · Proyecto gobernado",
    domainText: "Qué gobierna GTT: el contexto, la intención, las decisiones y el estado de este proyecto.",
    workspace: "Workspace del proyecto",
    workspaceText: "GTT crea esta estructura durante la instalación. El equipo y sus agentes usan gtt-domain/ para trabajar con la información gobernada del proyecto.",
    here: "Información del proyecto gobernado",
    engineDir: "Motor GTT: scripts y herramientas", contextDir: "Contexto gobernado · L0", decisionsDir: "Decisiones aceptadas · L1", backlogFile: "Línea de desarrollo", proposalsDir: "Borradores para revisión humana", source: "Código fuente del proyecto",
    contents: "Dentro de gtt-domain/",
    contentsText: "La maquinaria vive en .gtt/. Este dominio contiene información sobre el proyecto y cómo trabaja su equipo.",
    fileGuide: "Repositorio de GTT Bootstrap · algunos archivos son plantillas; sus propuestas tratan sobre este proyecto",
    repoNote: "Aquí, gtt-domain/ describe al propio GTT Bootstrap. session.md indica estado pre-freeze: aún no existe una línea base .frozen. Cada proyecto que instala GTT recibe el contenido de su propio dominio.",
    domains: [
      { icon: Compass, name: "context/ · Contexto gobernado (L0)", dir: "gtt-domain/context/", files: [["architecture.md", "Describe en prosa la arquitectura del sistema."], ["constraints.md", "Límites que deben respetar decisiones e implementación; GTT siempre lo carga como contexto."], ["glossary.md", "Define términos del proyecto para evitar interpretaciones distintas."], ["principles.md", "Principios de diseño que orientan las decisiones."], ["solution-vision.md", "Propósito de la solución y qué queda fuera de su objetivo."], ["stack.md", "Vistas de arquitectura y tecnologías, además de límites técnicos."]], text: "Referencia del proyecto para orientar el desarrollo y evaluar si la implementación sigue el diseño." },
      { icon: ShieldCheck, name: "adr/ · Decisiones aceptadas (L1)", dir: "gtt-domain/adr/", files: [["ADR-001-context-governance.md", "Decisión aceptada: el contexto gobernado es la fuente de verdad; el código no lo sustituye."], ["ADR-TEMPLATE.md", "Plantilla de contexto, decisión, alternativas, consecuencias, riesgos y áreas afectadas."]], text: "Registro permanente de decisiones de arquitectura aprobadas y sus razones." },
      { icon: Workflow, name: "Planificación y solicitudes de cambio", dir: "gtt-domain/", files: [["backlog.md", "Línea de desarrollo: Epics, Stories, foco actual y siguiente trabajo. Humanos aprueban objetivos y alcance de Epic; agentes pueden crear y actualizar Stories."], ["change-request.md", "Entrada para cambios gobernados de diseño o cambios materiales de una Epic; no para trabajo rutinario."], ["session.md", "Resumen operativo regenerado por un script para retomar el trabajo; no es autoridad ni registro de decisiones."]], text: "Distingue el marco aprobado del proyecto, el plan operativo de entrega y las solicitudes de cambio gobernado." },
      { icon: Layers3, name: "proposals/ · Borradores revisables", dir: "gtt-domain/proposals/", files: [["README.md", "Flujo, estados y convenciones de nombres de propuestas."], ["PROPOSAL-*.md", "Borradores sobre Antigravity, backlog, cierre de Bootstrap 1.3.1, instrucciones D1, alcance 1.3.2 y memoria de sesión."], ["*.patch", "Cambios propuestos para archivos como AGENTS.md o el motor GTT."], ["apply-*.sh", "Scripts de promoción que una persona revisa y ejecuta cuando el flujo lo requiere."], ["claude-adapter/", "Código y configuración de adaptador ligados a una propuesta."], ["closure-1.3.1/", "Paquete de trabajo de cierre ligado a una propuesta."], ["release-1.3.2/", "Paquete de trabajo de release ligado a una propuesta."], ["session-adapters/", "Borradores de adaptadores de sesión para Codex, Copilot y Kiro."]], text: "Una propuesta es un borrador, nunca una decisión aceptada. Revisa su contenido y estado antes de considerarla vigente." },
      { icon: History, name: "Artefactos opcionales o generados", dir: "gtt-domain/", files: [["sources.md", "Fuentes declaradas y precedencias, cuando se necesitan."], ["working-agreements.md", "Acuerdos de trabajo del equipo, cuando se usan."], ["governance-backlog.json", "Observaciones calculadas y decisiones humanas asociadas."], [".frozen", "Marcador y línea base, creados solo mediante el procedimiento GTT de freeze."]], text: "Estos archivos pueden aparecer en otros proyectos; no están todos presentes en este repositorio." },
    ],
    meaningEyebrow: "El dominio gobernado",
    meaningTitle: "el espacio gobernado del proyecto",
    meaning: "gtt-domain/ es el espacio del proyecto gobernado por GTT-Method. Preserva el contexto gobernado, la intención, las decisiones, las propuestas pendientes, las reglas de cambio, la línea de desarrollo, el estado metodológico y la trazabilidad de la gobernanza.",
    callout: "GTT-Method es el método. .gtt/ contiene sus herramientas; gtt-domain/ es lo que gobierna.",
    why: "¿Por qué tantos archivos?",
    whyText: "Los archivos tienen autoridades distintas: el contexto gobernado y las decisiones aceptadas definen el marco, el backlog organiza la entrega y las propuestas preparan cambios para revisión humana.",
    reasons: [
      { icon: Compass, title: "Capturan decisiones", text: "De arquitectura, diseño y dirección." },
      { icon: ShieldCheck, title: "Protegen la intención", text: "Evitan perder contexto a medida que cambia el trabajo." },
      { icon: Users, title: "Alinean personas y agentes", text: "Un contexto compartido orienta el trabajo de todos." },
      { icon: History, title: "Mantienen trazabilidad", text: "Registran cambios, aprendizaje y evolución." },
    ],
    shared: "Personas y agentes trabajan desde el mismo contexto metodológico.",
    artifacts: "GTT aporta la estructura y el método; cada proyecto aporta su contenido. Personas y agentes comparten contexto sin confundir borradores ni resúmenes operativos con autoridad.",
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
            <div className="gtt-methodology__tree-item"><code>├── .gtt/</code><span>{content.engineDir}</span></div>
            <div className="gtt-methodology__tree-item gtt-methodology__tree-item--methodology"><code>├── gtt-domain/</code><span>← {content.here}</span></div>
            <div className="gtt-methodology__tree-item gtt-methodology__tree-item--nested"><code>│&nbsp;&nbsp; ├── context/</code><span>{content.contextDir}</span></div>
            <div className="gtt-methodology__tree-item gtt-methodology__tree-item--nested"><code>│&nbsp;&nbsp; ├── adr/</code><span>{content.decisionsDir}</span></div>
            <div className="gtt-methodology__tree-item gtt-methodology__tree-item--nested"><code>│&nbsp;&nbsp; ├── backlog.md</code><span>{content.backlogFile}</span></div>
            <div className="gtt-methodology__tree-item gtt-methodology__tree-item--nested"><code>│&nbsp;&nbsp; └── proposals/</code><span>{content.proposalsDir}</span></div>
            <div className="gtt-methodology__tree-item"><code>└── src/</code><span>{content.source}</span></div>
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
          <p className="gtt-methodology__repo-note">{content.repoNote}</p>
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
