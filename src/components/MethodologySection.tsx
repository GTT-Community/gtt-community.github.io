import { Compass, FolderTree, History, Layers3, ShieldCheck, Users, Workflow } from "lucide-react";

// Copy for the methodology section. The home page renders it with <MethodologySection>;
// the ecosystem guide lays the same copy out inside its own phases.
export const methodologyContent = {
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

export function MethodologySection({ language }: { language: "en" | "es" }) {
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
