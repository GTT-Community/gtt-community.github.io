export interface ContentPage {
  slug: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  contentEn: string;
  contentEs: string;
  searchableEn: string;
  searchableEs: string;
}

export const pages: ContentPage[] = [
  {
    slug: "about",
    titleEn: "About GTT-Method",
    titleEs: "Acerca de GTT-Method",
    descriptionEn: "Understanding the methodology, principles and approach to governed AI-assisted software development.",
    descriptionEs: "Entendiendo la metodología, principios y enfoque para desarrollo de software asistido por IA gobernado.",
    contentEn: `GTT-Method (Governance Through Thinking) is an open-source methodology for governed AI-assisted software development.

GTT-Method provides a governance layer around AI-assisted software development. It combines ideas from Spec-Driven Development (SDD), Context Engineering, AI coding agents, software architecture governance, engineering constraints, and human architectural decisions.

The goal is not to replace specifications, developers or AI agents. The goal is to make the context and architectural intent that guide AI agents explicit and governable.

GTT-Method treats context as an engineering asset — something that can be structured, governed, protected and validated. Context is the Source of Truth.

## Core Principle

"When context doesn't govern AI, AI governs the solution."

## Architectural Drift

GTT-Method recognizes that AI agents are increasingly capable of implementing complete features. But the difficult problem is not simply code generation — it is architectural drift.

An agent can make a sequence of individually reasonable changes that collectively move a system away from the architecture and engineering decisions originally intended by the team. GTT-Method addresses this by making architecture, context, rules and constraints explicit assets of the development process.

## The Problem

As AI coding agents become more capable and participate directly in implementation, new challenges emerge:

- Context Loss — Agents lose important architectural and business context.
- Uncontrolled Changes — No explicit boundaries on what an agent can modify.
- Inconsistent Decisions — Different prompts produce different implementations.
- Architectural Drift — Individual changes collectively move away from intended design.
- Governance Gap — No explicit rules, responsibilities or controlled context.

## The GTT-Method Solution

GTT-Method establishes governed context around AI-assisted software development.

This means:

- Explicit context — Project knowledge is structured as engineering artifacts.
- Governed boundaries — Agents have clear rules and constraints.
- Protected decisions — Architectural decisions are protected from unintended changes.
- Traceability — Changes are reviewable through Git history.
- Validation — Governance is enforced through both instructions and deterministic mechanisms.

## Who Created GTT-Method?

GTT-Method was created by Moisés Griott and is maintained by the GTT-Method Community.

### Moisés Griott

Digital Architect, Cloud Architect, and AI/Agentic AI Architect. Creator and original author of GTT-Method.

### GTT-Method Community

Open-source community maintaining and evolving GTT-Method through contributions, feedback, and implementations.

### Reference Implementation

The official gtt-bootstrap project provides a concrete implementation of the methodology with governance artifacts and integration examples.

### Open Source License

Creative Commons Attribution 4.0 International (CC BY 4.0). Share, adapt and build upon the work freely with attribution.`,
    contentEs: `GTT-Method (Governance Through Thinking) es una metodología de código abierto para desarrollo de software asistido por IA gobernado.

GTT-Method proporciona una capa de gobernanza alrededor del desarrollo de software asistido por IA. Combina ideas de Spec-Driven Development (SDD), Context Engineering, agentes de IA de codificación, gobernanza de arquitectura de software, restricciones de ingeniería y decisiones arquitectónicas humanas.

El objetivo no es reemplazar especificaciones, desarrolladores o agentes de IA. El objetivo es hacer que el contexto y la intención arquitectónica que guían a los agentes de IA sean explícitos y gobernables.

GTT-Method trata el contexto como un activo de ingeniería — algo que puede estructurarse, gobernarse, protegerse y validarse. El contexto es la fuente de verdad.

## Principio central

"Cuando el contexto no gobierna a la IA, la IA gobierna la solución."

## Desviación Arquitectónica

GTT-Method reconoce que los agentes de IA son cada vez más capaces de implementar características completas. Pero el problema difícil no es simplemente la generación de código — es la desviación arquitectónica.

Un agente puede hacer una secuencia de cambios individualmente razonables que colectivamente alejen un sistema de la arquitectura y las decisiones de ingeniería originalmente previstas por el equipo. GTT-Method aborda esto haciendo que la arquitectura, el contexto, las reglas y las restricciones sean activos explícitos del proceso de desarrollo.

## El problema

A medida que los agentes de IA se vuelven más capaces y participan directamente en la implementación, aparecen nuevos desafíos:

- Pérdida de Contexto — Los agentes pierden contexto arquitectónico y empresarial importante.
- Cambios Incontrolados — No existen límites explícitos sobre lo que un agente puede modificar.
- Decisiones Inconsistentes — Diferentes indicaciones producen diferentes implementaciones.
- Desviación Arquitectónica — Cambios individuales alejan colectivamente el sistema del diseño previsto.
- Brecha de Gobernanza — No existen reglas, responsabilidades o contexto controlado explícitos.

## La solución GTT-Method

GTT-Method establece contexto gobernado alrededor del desarrollo de software asistido por IA.

Esto significa:

- Contexto explícito — El conocimiento del proyecto se estructura como artefactos de ingeniería.
- Límites gobernados — Los agentes tienen reglas y restricciones claras.
- Decisiones protegidas — Las decisiones arquitectónicas están protegidas de cambios involuntarios.
- Trazabilidad — Los cambios son revisables mediante el historial de Git.
- Validación — La gobernanza se aplica mediante instrucciones y mecanismos determinísticos.

## ¿Quién creó GTT-Method?

GTT-Method fue creado por Moisés Griott y es mantenido por GTT-Method Community.

### Moisés Griott

Digital Architect, Cloud Architect y AI/Agentic AI Architect. Creador y autor original de GTT-Method.

### GTT-Method Community

Comunidad open-source que mantiene y evoluciona GTT-Method mediante contribuciones, feedback e implementaciones.

### Implementación de referencia

El proyecto oficial gtt-bootstrap proporciona una implementación concreta de la metodología con artefactos de gobernanza y ejemplos de integración.

### Licencia

Creative Commons Attribution 4.0 International (CC BY 4.0).`,
    searchableEn: "GTT-Method Governance Through Thinking AI assisted development architecture drift context engineering",
    searchableEs: "GTT-Method Governance Through Thinking desarrollo asistido por IA desviación arquitectónica context engineering",
  },
  {
    slug: "problem",
    titleEn: "The Problem",
    titleEs: "El Problema",
    descriptionEn: "Understanding why context and governance matter when AI agents participate in software development.",
    descriptionEs: "Entendiendo por qué el contexto y la gobernanza importan cuando agentes de IA participan en desarrollo de software.",
    contentEn: `AI Agents Are Powerful But Context-Dependent

AI coding agents can implement complete features rapidly. But software development requires more than generating code.

## Context Loss

Agents can lose important architectural, business and technical context during development sessions, leading to decisions that ignore project constraints.

## Uncontrolled Changes

Without explicit boundaries, an agent may modify critical infrastructure, configuration files, or architectural components it should not touch.

## Inconsistent Decisions

Different prompts and sessions produce different implementations of the same feature or pattern, breaking architectural consistency.

## Architectural Drift

Individually reasonable AI-generated changes gradually move a system away from its intended design without anyone noticing until it's too late.

## Governance Gap

Traditional development doesn't have mechanisms to govern AI agent behavior. There are no explicit rules, responsibilities or controlled context.

## No Session Continuity

Context established in one session can be lost when the agent is invoked again, requiring humans to re-explain the same constraints repeatedly.

## The Deep Problem

The fundamental issue is not that agents generate incorrect code.

Agents operate on context → Context can be incomplete, inconsistent, stale, ambiguous, or uncontrolled → Unpredictable behavior

## Why Traditional Approaches Fall Short

Reviewing agent output after it's generated is reactive and doesn't address the root cause.

### Code Review Alone

Reviewing the output doesn't help the agent make better decisions next time. The context governance problem persists.

### Better Prompts

More detailed prompts help temporarily, but they're not persistent, reviewable, or governance mechanisms.

### Trust in the Agent

Trusting the agent to "follow the architecture" doesn't work when the architecture isn't explicitly governed and protected.

### Manual Oversight

Humans manually reviewing every change doesn't scale and misses the real issue: lack of governed context.

## The Solution

Make context explicit, governed and protected.

GTT-Method addresses this by treating context as an engineering asset that can be structured, governed, protected and validated.

Instead of trying to make agents "smarter", GTT-Method makes the development environment more reliable by establishing explicit rules, protecting critical context, and detecting drift.`,
    contentEs: `Agentes de IA: Poderosos pero Dependientes del Contexto

Los agentes de IA pueden implementar características completas rápidamente. Pero el desarrollo de software requiere más que generar código.

## Pérdida de Contexto

Los agentes pueden perder contexto arquitectónico, empresarial y técnico importante durante las sesiones, generando decisiones que ignoran restricciones del proyecto.

## Cambios Incontrolados

Sin límites explícitos, un agente puede modificar infraestructura crítica, archivos de configuración o componentes arquitectónicos que no debería tocar.

## Decisiones Inconsistentes

Diferentes indicaciones y sesiones producen implementaciones diferentes de la misma funcionalidad o patrón, rompiendo la consistencia arquitectónica.

## Desviación Arquitectónica

Cambios individuales razonables generados por IA pueden alejar gradualmente un sistema de su diseño previsto sin que nadie lo note hasta que sea demasiado tarde.

## Brecha de Gobernanza

El desarrollo tradicional no tiene mecanismos específicos para gobernar el comportamiento de los agentes de IA. No existen reglas, responsabilidades o contexto controlado explícitos.

## Sin Continuidad de Sesión

El contexto establecido en una sesión puede perderse cuando el agente se invoca nuevamente, obligando a los humanos a explicar repetidamente las mismas restricciones.

## El Problema Profundo

El problema fundamental no es que los agentes generen código incorrecto.

Los agentes operan sobre contexto → El contexto puede ser incompleto, inconsistente, obsoleto, ambiguo o no controlado → Comportamiento impredecible

## Por qué los Enfoques Tradicionales son Insuficientes

Revisar la salida después de que se genera es reactivo y no aborda la causa raíz.

### Solo Code Review

Revisar la salida no ayuda al agente a tomar mejores decisiones la próxima vez. El problema de gobernanza del contexto permanece.

### Mejores Prompts

Prompts más detallados ayudan temporalmente, pero no son mecanismos persistentes, revisables ni de gobernanza.

### Confiar en el Agente

Confiar en que el agente "seguirá la arquitectura" no funciona cuando la arquitectura no está explícitamente gobernada y protegida.

### Supervisión Manual

Revisar manualmente cada cambio no escala y no aborda el problema real: falta de contexto gobernado.

## La Solución

Hacer el contexto explícito, gobernado y protegido.

GTT-Method trata el contexto como un activo de ingeniería que puede estructurarse, gobernarse, protegerse y validarse.

En lugar de intentar hacer que los agentes sean "más inteligentes", GTT-Method hace más confiable el entorno de desarrollo mediante reglas explícitas, protección del contexto crítico y detección de desviación.`,
    searchableEn: "problem architectural drift context loss uncontrolled changes inconsistent decisions governance gap",
    searchableEs: "problema desviación arquitectónica pérdida de contexto cambios incontrolados decisiones inconsistentes brecha de gobernanza",
  },
  {
    slug: "approach",
    titleEn: "The Approach",
    titleEs: "El Enfoque",
    descriptionEn: "How GTT-Method establishes reliable development environments through explicit context governance.",
    descriptionEs: "Cómo GTT-Method establece entornos de desarrollo confiables a través de gobernanza explícita del contexto.",
    contentEn: `## Core Concept: Governed Context

GTT-Method addresses the problem by establishing governed context around AI-assisted software development.

Software Development + AI Coding Agents + Governed Context = Governance Through Thinking

## What GTT-Method Does

### Context Governance

Explicitly structure, maintain, protect and control project context so AI agents can use it reliably.

### Architecture

Make architectural decisions and constraints explicit, protecting them from unintended agent-driven changes.

### Specifications

Define clear requirements and expected behavior so agents work toward defined outcomes.

### Rules & Constraints

Establish directives and restrictions that limit implementation options and preserve intent.

### Traceability

Keep all changes reviewable through version control so decisions remain visible and auditable.

### Drift Prevention

Detect and prevent architectural drift through mechanisms that validate governed context remains intact.

## What GTT-Method Does NOT Attempt

GTT-Method does not attempt to make the AI "smarter".

Instead, GTT-Method establishes a more reliable development environment and context contract around the agent.

The goal is not to replace specifications, developers or AI agents. The goal is to make the context and architectural intent that guide AI agents explicit and governable.

## Enforcement Philosophy

Put each concern in the plane that can enforce it.

| Plane | Mechanism | Guarantee |
|---|---|---|
| Control Plane | Permissions & hooks | Deterministic |
| Build Plane | CI validation | Deterministic |
| Instruction Plane | Agent rules | Probabilistic |
| Procedural Plane | Skills & workflows | On demand |

An instruction saying "AI must not modify architecture files" is useful, but remains an instruction. A filesystem permission, hook or CI gate provides actual enforcement.

GTT-Method combines instructional governance with deterministic controls wherever possible.`,
    contentEs: `## Concepto Central: Contexto Gobernado

GTT-Method aborda el problema estableciendo contexto gobernado alrededor del desarrollo de software asistido por IA.

Desarrollo de Software + Agentes de IA + Contexto Gobernado = Governance Through Thinking

## Qué Hace GTT-Method

### Gobernanza de Contexto

Estructurar, mantener, proteger y controlar explícitamente el contexto del proyecto para que los agentes de IA puedan usarlo de manera confiable.

### Arquitectura

Hacer que las decisiones arquitectónicas y restricciones sean explícitas, protegiéndolas de cambios no intencionados impulsados por agentes.

### Especificaciones

Definir requisitos claros y comportamiento esperado para que los agentes trabajen hacia resultados definidos.

### Reglas y Restricciones

Establecer directivas y restricciones que limiten las opciones de implementación y preserven la intención.

### Trazabilidad

Mantener todos los cambios revisables a través del control de versiones para que las decisiones permanezcan visibles y auditables.

### Prevención de Desviación

Detectar y prevenir la desviación arquitectónica a través de mecanismos que validen que el contexto gobernado permanezca intacto.

## Qué GTT-Method NO Intenta

GTT-Method no intenta hacer que la IA sea "más inteligente".

En cambio, GTT-Method establece un entorno de desarrollo más confiable y un contrato de contexto alrededor del agente.

El objetivo no es reemplazar especificaciones, desarrolladores o agentes de IA. El objetivo es hacer que el contexto y la intención arquitectónica que guían a los agentes de IA sean explícitos y gobernables.

## Filosofía de Aplicación

Poner cada preocupación en el plano que puede hacerla cumplir.

| Plano | Mecanismo | Garantía |
|---|---|---|
| Control Plane | Permisos & hooks | Determinista |
| Build Plane | Validación CI | Determinista |
| Instruction Plane | Reglas del agente | Probabilista |
| Procedural Plane | Skills & workflows | Bajo demanda |

Una instrucción diciendo "la IA no debe modificar archivos de arquitectura" es útil, pero permanece como instrucción. Un permiso de archivo, hook o puerta CI proporciona aplicación real.

GTT-Method combina gobernanza instructiva con controles deterministas siempre que sea posible.`,
    searchableEn: "approach governed context architecture governance enforcement control plane build plane",
    searchableEs: "enfoque contexto gobernado gobernanza de arquitectura aplicación control plane build plane",
  },
  {
    slug: "ecosystem",
    titleEn: "GTT-Method & the Ecosystem",
    titleEs: "GTT-Method & el Ecosistema",
    descriptionEn: "GTT-Method is complementary to SDD, Context Engineering & AI Development.",
    descriptionEs: "GTT-Method es complementario a SDD, Context Engineering & AI Development.",
    contentEn: `## GTT-Method Position

GTT-Method operates at the intersection of multiple disciplines, providing governance for AI-assisted development.

AI-Assisted Software Development: SDD (Specifications) + Context Engineering + AI Coding Agents + Software Architecture = GTT-Method (Governed Context + Governance Layer)

## GTT-Method vs SDD

Spec-Driven Development and GTT-Method answer different questions.

### SDD

Question: What should be built? What behavior is required?
Focus: Explicit specifications and expected outcomes.

### GTT-Method

Question: How should the context govern AI development? What boundaries protect architecture?
Focus: Governed context and agent governance.

### Together

SDD defines WHAT to build. GTT-Method governs HOW an AI agent should operate while building it. They complement each other.

### Not Replacement

GTT-Method does not replace SDD. You can use both methodologies in the same project effectively.

## GTT-Method vs Context Engineering

Context Engineering is a broader discipline. GTT-Method applies it specifically to AI-assisted development.

### Context Engineering

Broad discipline focusing on designing and supplying useful context to AI systems in general.

### GTT-Method

Applies context engineering specifically to software development with AI agents, adding governance, architecture and protection patterns.

### Relationship

GTT-Method is Context Engineering + Software Architecture + Governance + Protection Patterns applied to AI-assisted development.

### Integration

GTT-Method uses context engineering principles but adds software development-specific governance mechanisms.

## GTT-Method vs RAG

RAG and GTT-Method solve different problems at different layers.

### RAG (Retrieval-Augmented Generation)

A retrieval technique for supplying relevant information to an AI system.
Solves: "How do I give the AI better information?"

### GTT-Method

A development methodology for governing AI-assisted software development.
Solves: "How do I keep the architecture consistent while AI builds?"

### Can Complement

GTT-Method can use RAG to retrieve context. But GTT-Method is not RAG. GTT-Method is governance; RAG is retrieval.

### Different Concerns

RAG: Information retrieval.
GTT-Method: Context governance, architectural intent, rules enforcement.

## GTT-Method vs Prompt Engineering

Prompt engineering and GTT-Method operate at different levels of abstraction.

### Prompt Engineering

Asks: "How should I phrase instructions so the AI understands them better?"
Focus: Instruction quality and phrasing.

### GTT-Method

Asks: "How should the development environment itself be structured so the AI behaves correctly?"
Focus: Context governance and architectural protection.

### Scope Difference

Prompt engineering: One interaction.
GTT-Method: Entire development process across multiple sessions.

### Relationship

GTT-Method is not "better prompt engineering". It's a different approach addressing structural governance vs. instruction phrasing.`,
    contentEs: `## Posición de GTT-Method

GTT-Method opera en la intersección de múltiples disciplinas, proporcionando gobernanza para desarrollo asistido por IA.

Desarrollo de Software Asistido por IA: SDD (Especificaciones) + Context Engineering + Agentes de IA + Arquitectura de Software = GTT-Method (Contexto Gobernado + Capa de Gobernanza)

## GTT-Method vs SDD

Spec-Driven Development y GTT-Method responden diferentes preguntas.

### SDD

Pregunta: ¿Qué debe construirse? ¿Qué comportamiento se requiere?
Enfoque: Especificaciones explícitas y resultados esperados.

### GTT-Method

Pregunta: ¿Cómo debe el contexto gobernar el desarrollo de IA? ¿Qué límites protegen la arquitectura?
Enfoque: Contexto gobernado y gobernanza de agentes.

### Juntos

SDD define QUÉ construir. GTT-Method gobierna CÓMO un agente de IA debe operar mientras lo construye. Se complementan.

### No es reemplazo

GTT-Method no reemplaza SDD. Puedes usar ambas metodologías en el mismo proyecto de manera efectiva.

## GTT-Method vs Context Engineering

Context Engineering es una disciplina más amplia. GTT-Method la aplica específicamente a desarrollo asistido por IA.

### Context Engineering

Disciplina amplia enfocada en diseñar y suministrar contexto útil a sistemas de IA en general.

### GTT-Method

Aplica context engineering específicamente a desarrollo de software con agentes de IA, agregando gobernanza, arquitectura y patrones de protección.

### Relación

GTT-Method es Context Engineering + Arquitectura de Software + Gobernanza + Patrones de Protección aplicado a desarrollo asistido por IA.

### Integración

GTT-Method usa principios de context engineering pero agrega mecanismos de gobernanza específicos del desarrollo de software.

## GTT-Method vs RAG

RAG y GTT-Method resuelven diferentes problemas en diferentes capas.

### RAG (Retrieval-Augmented Generation)

Una técnica de recuperación para suministrar información relevante a un sistema de IA.
Resuelve: "¿Cómo doy mejor información a la IA?"

### GTT-Method

Una metodología de desarrollo para gobernar desarrollo asistido por IA.
Resuelve: "¿Cómo mantengo la arquitectura consistente mientras la IA construye?"

### Pueden complementarse

GTT-Method puede usar RAG para recuperar contexto. Pero GTT-Method no es RAG. GTT-Method es gobernanza; RAG es recuperación.

### Preocupaciones diferentes

RAG: Recuperación de información.
GTT-Method: Gobernanza de contexto, intención arquitectónica, aplicación de reglas.

## GTT-Method vs Ingeniería de Indicaciones

La ingeniería de indicaciones y GTT-Method operan en diferentes niveles de abstracción.

### Ingeniería de Indicaciones

Pregunta: "¿Cómo debo formular instrucciones para que la IA las entienda mejor?"
Enfoque: Calidad y formulación de instrucciones.

### GTT-Method

Pregunta: "¿Cómo debe estructurarse el entorno de desarrollo para que la IA se comporte correctamente?"
Enfoque: Gobernanza de contexto y protección arquitectónica.

### Diferencia de Alcance

Ingeniería de indicaciones: Una interacción.
GTT-Method: Proceso completo de desarrollo en múltiples sesiones.

### Relación

GTT-Method no es "mejor ingeniería de indicaciones". Es un enfoque diferente que aborda gobernanza estructural frente a formulación de instrucciones.`,
    searchableEn: "ecosystem SDD context engineering RAG prompt engineering AI development",
    searchableEs: "ecosistema SDD context engineering RAG ingeniería de indicaciones desarrollo de IA",
  },
  {
    slug: "methodology",
    titleEn: "GTT Methodology",
    titleEs: "Metodología GTT",
    descriptionEn: "Governed AI-assisted software development. GTT is a methodology for governing AI-assisted software development, implemented through GTT Bootstrap and operated through GTT CLI.",
    descriptionEs: "Desarrollo de software asistido por IA, gobernado. GTT es una metodología para gobernar el desarrollo de software asistido por IA, implementada mediante GTT Bootstrap y operada mediante GTT CLI.",
    contentEn: `GTT is a methodology for governing software development when AI agents participate in the development process. It establishes the governance model for project context, evidence, architecture, proposals, decisions, constraints, rules, validation, freeze and controlled change.

It is implemented through GTT Bootstrap and operated through GTT CLI.

\`\`\`
GTT Method
Methodology & Governance
        ↓
GTT Bootstrap
Reference Implementation
        ↓
GTT CLI
Operational Tooling
        ↓
ADEs + Human
\`\`\`

> GTT Governance Canonical: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

## What is GTT?

> GTT is a methodology for governed AI-assisted software development.

It defines how project context, evidence, architecture, rules, constraints, proposals, decisions, validation and controlled change are managed when AI Development Environments (ADEs) and AI coding agents participate in software development.

GTT is designed around a separation between four things:

- The methodology and its governance semantics.
- The implementation of those semantics.
- The operational tooling used to install and operate them.
- The ADEs and agents that perform development work.

This separation is what allows GTT to remain independent of any specific AI development environment.

## The problem GTT solves

AI agents produce software at high speed. That speed creates concrete engineering and governance problems, and GTT addresses each of them explicitly.

\`\`\`
AI Agents
    │
    ▼
High-speed software production
    │
    ├── Context drift
    ├── Architecture drift
    ├── Uncontrolled assumptions
    ├── Session discontinuity
    ├── Multiple ADEs
    └── Weak traceability
            │
            ▼
          GTT
            │
    ┌───────┼────────┐
    ▼       ▼        ▼
Govern   Evidence   Change
    │       │        │
    └───────┼────────┘
            ▼
     Governed AI Development
\`\`\`

### Context is not automatically governance

An AI agent can receive large amounts of information without that information having a defined authority. GTT provides an explicit model for determining what participates in governed development context and how that context is used.

### Evidence and reasoning must be distinguishable

GTT establishes an evidence boundary. The system must be able to distinguish:

- What came from authorized evidence.
- What is missing.
- What conflicts.
- What is proposed.
- What has actually been decided.

This prevents generated reasoning from silently becoming project authority.

### Proposals are not decisions

AI agents can generate architectural and implementation proposals. GTT separates proposals from ratified decisions: the agent can reason and propose, and the governed project state is established through the GTT decision process.

### Architecture must remain governed

GTT prevents the implementation produced by an agent from silently becoming the project's new architectural authority. Architectural intent, constraints and decisions remain explicit GTT artifacts.

### Freeze must establish authority

GTT uses a freeze mechanism to establish the governed state. A freeze is not simply a Git operation: it is a governance boundary. After freeze, changes must follow the GTT change process rather than silently rewriting governed state.

### Multiple ADEs need one governance model

A project can be touched by several development environments, for example Claude Code, Codex, GitHub Copilot, Kiro and other supported ADEs. GTT therefore uses:

\`\`\`
one GTT governance model
+
multiple ADE integration surfaces
+
exactly one Primary ADE
\`\`\`

The Primary ADE is a workflow identity. It does not receive governance authority.

### Development must be recoverable

GTT also addresses operational continuity. Project state can be inspected, and session context can be derived from actual project state. The goal is not to make an agent's private memory the authority: the project remains the source of governed truth.

## The GTT methodology

GTT is a governance methodology, not a command-line product. The methodology establishes the rules and semantic contracts around:

\`\`\`
GTT METHOD
│
├── Governance
├── Context
├── Evidence
├── Grounding
├── Provenance
├── Architecture / Intent
├── Proposals
├── Decisions
├── ADR semantics
├── Rules
├── Constraints
├── Validation
├── Freeze
├── Change
├── ADE participation
├── Session context
└── Lifecycle governance
\`\`\`

These semantics are owned by the GTT Method and implemented in GTT Bootstrap. The CLI does not duplicate them.

## How GTT works

\`\`\`
                   GTT METHOD
                       │
                       ▼
                Project Context
                       │
                       ▼
                    GROUNDING
                       │
                       ▼
                Evidence / Context
                       │
                       ▼
                     THINK
                       │
              ┌────────┴────────┐
              ▼                 ▼
          Proposals          Gaps /
          Analysis           Conflicts
              │                 │
              └────────┬────────┘
                       ▼
                 Human Decision
                       │
                       ▼
                    FREEZE
                       │
                       ▼
                      WORK
                       │
                       ▼
                Change Discovery
                       │
                       ▼
                Change Request
                       │
                       ▼
                     THINK
                       │
                       ▼
                 New Decision
                       │
                       ▼
                  New FREEZE
\`\`\`

THINK is not a one-time phase. The reasoning mode is re-entrant: whenever a change requires governance, the project returns to THINK.

### Evidence and provenance

GTT separates retrieval and evidence from reasoning.

\`\`\`
AUTHORIZED SOURCES
        │
        ▼
    GROUNDING
        │
        ▼
 EVIDENCE / CONTEXT
        │
        ▼
   THINK / AGENTS
        │
        ▼
    PROPOSALS
        │
        ▼
 HUMAN DECISION
        │
        ▼
      FREEZE
\`\`\`

> An agent's generated reasoning must not silently become evidence or governed project truth.

GTT distinguishes evidence, proposals and decisions. This is one of the methodology's central governance mechanisms.

### Freeze and controlled change

\`\`\`
FREEZE
  ↓
Governed project state
  ↓
WORK
  ↓
Discovery of change
  ↓
CHANGE REQUEST
  ↓
THINK
  ↓
Decision
  ↓
NEW FREEZE
\`\`\`

There is no "unfreeze" workflow in GTT. The governance model is based on controlled re-entry and re-freeze, not on turning governance off.

### Method Plans

GTT is applied through a Method Plan, chosen once per project:

\`\`\`
LIGHT
MEDIUM
HARD
TEAM
\`\`\`

A Method Plan is an operating profile, not a quality level, and no plan turns governance off. The CLI lets the project select the plan; Bootstrap owns what each plan means. The plans are documented in the Bootstrap repository: https://github.com/GTT-Community/gtt-bootstrap/blob/main/.gtt/docs/method-plans.md

### Session continuity

GTT provides session-context capabilities to help recover where work is and what remains to be done. Two things are kept apart:

\`\`\`
GOVERNED PROJECT STATE
        │
        ├── Architecture
        ├── Decisions
        ├── Constraints
        └── Validated state
\`\`\`

\`\`\`
SESSION / OPERATIONAL CONTEXT
        │
        ├── Current work
        ├── Current progress
        ├── Pending work
        └── Operational orientation
\`\`\`

Session context is not an alternative architecture authority. This matters most when a project uses several ADEs.

## GTT + ADEs

GTT is ADE-independent.

\`\`\`
                       GTT
                Methodology / Governance
                           │
                           ▼
                    GTT Bootstrap
                           │
                           ▼
                       GTT CLI
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
     Claude Code         Codex            Kiro
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                     Project Work
\`\`\`

> The ADE is the development environment. GTT is the governance model.

Bootstrap supports several ADE integration surfaces (currently Claude Code, GitHub Copilot, Codex and Kiro) while maintaining one governance model and one Primary ADE. The Primary ADE is a workflow role, not a governance role. Secondary ADEs are not ignored: if they participate in the project, their GTT integration is represented according to Bootstrap contracts.

## GTT Bootstrap

> GTT Bootstrap is the reference implementation of the GTT Method.

It contains the semantic and operational contracts required to apply GTT to a real software project, including governance, evidence, architecture and context semantics, proposals, decisions, validation, freeze, ADE integration and project lifecycle services.

Bootstrap is the implementation source of truth for GTT semantics. The CLI consumes Bootstrap; it does not reimplement GTT.

### What Bootstrap solves

- Project governance foundation: the project structure and contracts required to operate GTT.
- Governance semantics: governance is implemented in Bootstrap, not left to CLI interpretation.
- Evidence boundary: grounding, evidence and provenance semantics.
- Architecture and context semantics: the model used to govern architecture and context.
- Proposals versus decisions: proposals are kept distinct from governed decisions.
- Freeze: freeze semantics and the validation surrounding the governed state.
- ADE integration and multi-ADE coordination: several participating ADEs, one Primary ADE.
- Deterministic validation, status and session context derived from actual project state.
- Index, retrieval, reconciliation, guard synchronization, export and recovery contracts.

### Bootstrap service catalog

| Service | Purpose |
|---|---|
| Governance Engine | Implements the GTT governance semantics that define how project context, evidence, proposals, decisions, architecture and freeze are handled. |
| Evidence & Grounding | Establishes the boundary between authorized source material, evidence and generated reasoning. |
| Provenance | Maintains the relationship between project assertions and their supporting evidence or governance state. |
| Architecture / Context Semantics | Provides the semantic model for governing architecture, context and project intent. |
| Proposal Management | Supports the distinction between agent-generated proposals and governed project decisions. |
| Decision / ADR Semantics | Provides the semantic contracts used to record and relate governed decisions. |
| Freeze | Establishes and validates the governed project state. |
| Validation | Runs deterministic GTT validation rather than relying on an AI agent to decide whether the project is structurally valid. |
| ADE Integration | Provides the integration surfaces required for AI Development Environments participating in the project. |
| Multi-ADE State | Tracks participating ADEs while preserving a single GTT governance model. |
| Primary ADE | Identifies the ADE used as the primary workflow participant without granting it governance authority. |
| Templates | Provides Bootstrap-owned templates used during project initialization and GTT workflows. |
| Initial Design Questionnaire | Provides a Bootstrap-owned questionnaire when the project does not have sufficient initial design or source material. |
| Source Manifest | Provides the structure required to identify and manage initial project source material. |
| Working Agreements | Provides Bootstrap-owned structures for project working agreements without confusing them with GTT governance authority. |
| Status | Derives operational project and GTT state from actual project artifacts. |
| Session Context | Derives operational continuity information from actual project state, so work can be resumed without making agent memory the project's authority. |
| Technical Index | Maintains the machine-oriented project indexing needed by GTT services. |
| Query / Retrieval | Provides structured access to indexed project information. |
| Reconciliation | Detects and reconciles relevant differences between GTT-managed state and project state according to Bootstrap contracts. |
| GTTGuard | Provides the GTT protection and guard synchronization mechanisms defined by Bootstrap. |
| Clean Export | Defines what GTT-owned material can be excluded when producing a clean delivery artifact. |
| Recovery | Defines the portable recovery information required to reconstruct a GTT installation and operational state. |
| Session Memory Adapter Contracts | Defines the integration boundary for session-memory mechanisms without transferring project governance authority to an ADE's private memory. |

### Bootstrap architecture

\`\`\`
                         GTT METHOD
                             │
                             ▼
                    GTT BOOTSTRAP 1.x
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
      Governance          Engine / Domain     ADE Services
      Evidence            Validation          Templates
      Provenance          Status              Questionnaire
      Architecture        Freeze              Integrations
      Proposals           Query               Session
      Decisions           Reconcile           Recovery
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                             ▼
                    Versioned Contracts
                             │
                             ▼
                         GTT CLI
\`\`\`

Because the semantics live in Bootstrap behind versioned contracts, the CLI stays small.

## GTT CLI

> GTT CLI is the operational surface of GTT.

It provides the command-line lifecycle for discovering, installing, configuring, validating, operating, updating, resuming, freezing, exporting and recovering a GTT project through the GTT Bootstrap contracts.

GTT CLI is not a second GTT engine. It consumes and orchestrates Bootstrap, and it does not reproduce GTT methodology semantics. Every command is deterministic and needs no LLM.

### What the CLI solves

- Installation complexity: one consistent way to initialize GTT in a project and install a compatible Bootstrap.
- Bootstrap resolution: resolves the required Bootstrap and verifies compatibility.
- ADE discovery: detects available ADEs and manages their GTT integration.
- Primary ADE selection: establishes one Primary ADE, which has no governance authority.
- Initial source selection: discovers candidate design documents and asks for an explicit selection.
- Missing design source: requests the Bootstrap-owned Initial Design Questionnaire.
- Operational lifecycle: validation, status, inspection, resume, freeze and update, all delegated to Bootstrap contracts.
- Recovery, clean export and clean removal of GTT from a project.
- CI/CD: non-interactive, machine-readable workflows suitable for automation.

### CLI service catalog

| Service | What it does |
|---|---|
| Project Discovery | Detects the host project and determines whether GTT is already present. |
| Bootstrap Resolution | Finds and resolves a compatible GTT Bootstrap release. |
| Compatibility | Verifies CLI/Bootstrap compatibility before unsafe operations. |
| ADE Detection | Detects supported ADEs represented in the project or environment. |
| ADE Installation | Installs the GTT integration surfaces for the participating ADEs. |
| Primary ADE Configuration | Establishes exactly one Primary ADE for the project's workflow. |
| Source Discovery | Finds candidate project and design source documents during initialization. |
| Initial Source Selection | Allows explicit selection of the source material used to initialize the GTT project. |
| Method Plan Selection | Selects the Method Plan. The CLI selects it; Bootstrap defines its meaning. |
| Project Initialization | gtt init orchestrates the complete initialization workflow. |
| Status | gtt status exposes deterministic project and GTT state. |
| Inspection | gtt inspect exposes installation topology and operational state. |
| Validation | gtt validate delegates validation to Bootstrap. |
| Resume | gtt resume supports continuation from deterministic project state. |
| Freeze | gtt freeze invokes the Bootstrap freeze contract. |
| Doctor | gtt doctor provides operational diagnostics. |
| Audit | gtt audit exposes operational traceability according to Bootstrap contracts. |
| Update | gtt update manages safe Bootstrap updates and compatibility. |
| Clean Export | gtt export --clean produces a clean delivery artifact while leaving the development project intact. |
| Clean | gtt clean removes GTT from the current project after explicit confirmation. |
| Recovery | Recovery snapshots hold the portable information needed to reconstruct the GTT installation and operational state. |
| Version | gtt version reports the CLI version. |

### Command surface

\`\`\`
gtt init
gtt status
gtt inspect
gtt validate
gtt resume
gtt freeze
gtt doctor
gtt audit
gtt update
gtt export --clean
gtt clean
gtt version
\`\`\`

This page is not a command reference. Installation and command details are on the GTT CLI page: https://gtt-community.github.io/cli

### Initialization flow

\`\`\`
gtt init
   │
   ├── detect project
   ├── detect existing GTT
   ├── resolve Bootstrap
   ├── verify Bootstrap
   ├── check compatibility
   ├── detect ADEs
   ├── choose participating ADEs
   ├── choose Primary ADE
   ├── choose language
   ├── discover source documents
   ├── select initial sources
   ├── if insufficient → Bootstrap questionnaire
   ├── choose Method Plan
   ├── install Core
   ├── install ADE integrations
   ├── persist operational state
   ├── validate
   ├── create Bootstrap handoff
   └── optionally invoke Primary ADE
\`\`\`

The CLI does not design the system. It initializes and orchestrates the GTT environment.

### Deterministic state

\`\`\`
GTT Project State
       │
       ▼
Bootstrap / CLI
       │
       ▼
Derived operational status
\`\`\`

Never the other way around: agent prose does not become project truth. The CLI derives operational and session information from real project state. Agent memory remains an ADE-level mechanism; GTT governance remains in the project and in the Bootstrap contracts.

### Clean export and recovery

\`\`\`
GTT Development Project
        │
        ▼
gtt export --clean
        │
        ▼
Clean delivery artifact
\`\`\`

- Clean export produces a clean delivery artifact while preserving the development project.
- gtt clean removes GTT from the current project. It is destructive, so it requires explicit confirmation and offers a recovery snapshot.
- Recovery preserves the portable information needed to reconstruct the GTT installation and operational state. It is not a full repository backup.

### CI/CD

GTT CLI is designed for automation: deterministic and non-interactive validation, stable operational behavior, machine-readable output, version and compatibility checks, and safe lifecycle operations.

## Method vs Bootstrap vs CLI

| Layer | What it is | Main responsibility |
|---|---|---|
| GTT Method | Methodology | Defines how AI-assisted development is governed. |
| GTT Bootstrap | Reference implementation | Implements GTT semantics, governance and versioned capabilities. |
| GTT CLI | Operational tool | Installs, orchestrates, validates, operates, updates, exports and recovers GTT projects. |
| ADE / Agent | Development environment | Performs development work within the governed project. |

> The CLI must not become the mind of GTT.

## What GTT is not

- Not an LLM. GTT does not generate software by itself.
- Not an AI coding agent. GTT does not replace Claude Code, Codex, Kiro, Copilot or other ADEs.
- Not an IDE. GTT is independent of the development environment used by the developer.
- Not only a CLI. The CLI is the operational surface of the methodology.
- Not only Bootstrap. Bootstrap is the implementation of the methodology.
- Not a prompt library. GTT is a governance methodology with explicit project state, evidence, proposals, decisions, validation and change control.

## Get started

- Read the methodology: https://github.com/GTT-Community/gtt-method
- Explore the reference implementation: https://github.com/GTT-Community/gtt-bootstrap
- Install and operate with the CLI: https://gtt-community.github.io/cli

## References

- GTT Method: https://github.com/GTT-Community/gtt-method
- GTT Canonical: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md
- GTT Bootstrap: https://github.com/GTT-Community/gtt-bootstrap
- GTT CLI: https://github.com/GTT-Community/gtt-cli
- GTT CLI releases: https://github.com/GTT-Community/gtt-cli/releases/latest

## In one page

GTT is the methodology: it defines how AI-assisted software development is governed. GTT Bootstrap implements that methodology and provides the semantic and governance capabilities a GTT project requires. GTT CLI provides the operational surface for installing, configuring, validating, operating, updating, recovering and exporting GTT projects. AI Development Environments and agents perform the development work inside that governed environment.

\`\`\`
                    GTT METHOD
             Methodology / Governance
                          │
                          ▼
                  GTT BOOTSTRAP
             Reference Implementation
                          │
                          ▼
                      GTT CLI
               Operational Surface
                          │
                          ▼
                    ADE / Agents
                          │
                          ▼
                  Software Development
\`\`\``,
    contentEs: `GTT es una metodología para gobernar el desarrollo de software cuando agentes de IA participan en el proceso de desarrollo. Establece el modelo de gobernanza para el contexto del proyecto, la evidencia, la arquitectura, las propuestas, las decisiones, las restricciones, las reglas, la validación, el freeze y el cambio controlado.

Se implementa mediante GTT Bootstrap y se opera mediante GTT CLI.

\`\`\`
GTT Method
Metodología y Gobernanza
        ↓
GTT Bootstrap
Implementación de Referencia
        ↓
GTT CLI
Herramienta Operativa
        ↓
ADEs + Humano
\`\`\`

> Canónico de Gobernanza GTT: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

## ¿Qué es GTT?

> GTT es una metodología para el desarrollo de software asistido por IA, gobernado.

Define cómo se gestionan el contexto del proyecto, la evidencia, la arquitectura, las reglas, las restricciones, las propuestas, las decisiones, la validación y el cambio controlado cuando Entornos de Desarrollo con IA (ADEs) y agentes de programación participan en el desarrollo de software.

GTT está diseñado en torno a la separación entre cuatro cosas:

- La metodología y su semántica de gobernanza.
- La implementación de esa semántica.
- Las herramientas operativas que la instalan y la operan.
- Los ADEs y agentes que realizan el trabajo de desarrollo.

Esa separación es la que permite que GTT siga siendo independiente de cualquier entorno de desarrollo con IA en particular.

## El problema que resuelve GTT

Los agentes de IA producen software a gran velocidad. Esa velocidad crea problemas concretos de ingeniería y de gobernanza, y GTT aborda cada uno de forma explícita.

\`\`\`
Agentes de IA
    │
    ▼
Producción de software a alta velocidad
    │
    ├── Deriva de contexto
    ├── Deriva de arquitectura
    ├── Supuestos no controlados
    ├── Discontinuidad entre sesiones
    ├── Múltiples ADEs
    └── Trazabilidad débil
            │
            ▼
          GTT
            │
    ┌───────┼────────┐
    ▼       ▼        ▼
Gobierno Evidencia  Cambio
    │       │        │
    └───────┼────────┘
            ▼
   Desarrollo con IA gobernado
\`\`\`

### El contexto no es gobernanza automáticamente

Un agente de IA puede recibir grandes cantidades de información sin que esa información tenga una autoridad definida. GTT aporta un modelo explícito para determinar qué participa en el contexto de desarrollo gobernado y cómo se usa ese contexto.

### La evidencia y el razonamiento deben poder distinguirse

GTT establece una frontera de evidencia. El sistema debe poder distinguir:

- Lo que proviene de evidencia autorizada.
- Lo que falta.
- Lo que entra en conflicto.
- Lo que está propuesto.
- Lo que realmente se ha decidido.

Así se evita que el razonamiento generado se convierta silenciosamente en autoridad del proyecto.

### Las propuestas no son decisiones

Los agentes de IA pueden generar propuestas de arquitectura y de implementación. GTT separa las propuestas de las decisiones ratificadas: el agente puede razonar y proponer, y el estado gobernado del proyecto se establece a través del proceso de decisión de GTT.

### La arquitectura debe seguir gobernada

GTT impide que la implementación producida por un agente se convierta silenciosamente en la nueva autoridad arquitectónica del proyecto. La intención arquitectónica, las restricciones y las decisiones siguen siendo artefactos GTT explícitos.

### El freeze debe establecer autoridad

GTT usa un mecanismo de freeze para establecer el estado gobernado. Un freeze no es simplemente una operación de Git: es una frontera de gobernanza. Después del freeze, los cambios deben seguir el proceso de cambio de GTT en lugar de reescribir silenciosamente el estado gobernado.

### Varios ADEs necesitan un solo modelo de gobernanza

Un proyecto puede ser tocado por varios entornos de desarrollo, por ejemplo Claude Code, Codex, GitHub Copilot, Kiro y otros ADEs soportados. Por eso GTT usa:

\`\`\`
un modelo de gobernanza GTT
+
múltiples superficies de integración de ADE
+
exactamente un ADE Primario
\`\`\`

El ADE Primario es una identidad de flujo de trabajo. No recibe autoridad de gobernanza.

### El desarrollo debe ser recuperable

GTT también aborda la continuidad operativa. El estado del proyecto puede inspeccionarse y el contexto de sesión puede derivarse del estado real del proyecto. El objetivo no es convertir la memoria privada de un agente en la autoridad: el proyecto sigue siendo la fuente de la verdad gobernada.

## La metodología GTT

GTT es una metodología de gobernanza, no un producto de línea de comandos. La metodología establece las reglas y los contratos semánticos en torno a:

\`\`\`
GTT METHOD
│
├── Gobernanza
├── Contexto
├── Evidencia
├── Grounding
├── Procedencia
├── Arquitectura / Intención
├── Propuestas
├── Decisiones
├── Semántica de ADR
├── Reglas
├── Restricciones
├── Validación
├── Freeze
├── Cambio
├── Participación de ADEs
├── Contexto de sesión
└── Gobernanza del ciclo de vida
\`\`\`

Esta semántica pertenece al GTT Method y está implementada en GTT Bootstrap. La CLI no la duplica.

## Cómo funciona GTT

\`\`\`
                   GTT METHOD
                       │
                       ▼
              Contexto del Proyecto
                       │
                       ▼
                    GROUNDING
                       │
                       ▼
               Evidencia / Contexto
                       │
                       ▼
                     THINK
                       │
              ┌────────┴────────┐
              ▼                 ▼
          Propuestas         Vacíos /
          Análisis           Conflictos
              │                 │
              └────────┬────────┘
                       ▼
                Decisión Humana
                       │
                       ▼
                    FREEZE
                       │
                       ▼
                      WORK
                       │
                       ▼
             Descubrimiento de Cambio
                       │
                       ▼
               Solicitud de Cambio
                       │
                       ▼
                     THINK
                       │
                       ▼
                 Nueva Decisión
                       │
                       ▼
                  Nuevo FREEZE
\`\`\`

THINK no es una fase que ocurre una sola vez. El modo de razonamiento es reentrante: cada vez que un cambio requiere gobernanza, el proyecto vuelve a THINK.

### Evidencia y procedencia

GTT separa la recuperación y la evidencia del razonamiento.

\`\`\`
FUENTES AUTORIZADAS
        │
        ▼
    GROUNDING
        │
        ▼
EVIDENCIA / CONTEXTO
        │
        ▼
  THINK / AGENTES
        │
        ▼
   PROPUESTAS
        │
        ▼
 DECISIÓN HUMANA
        │
        ▼
      FREEZE
\`\`\`

> El razonamiento generado por un agente no debe convertirse silenciosamente en evidencia ni en verdad gobernada del proyecto.

GTT distingue evidencia, propuestas y decisiones. Es uno de los mecanismos de gobernanza centrales de la metodología.

### Freeze y cambio controlado

\`\`\`
FREEZE
  ↓
Estado gobernado del proyecto
  ↓
WORK
  ↓
Descubrimiento de un cambio
  ↓
SOLICITUD DE CAMBIO
  ↓
THINK
  ↓
Decisión
  ↓
NUEVO FREEZE
\`\`\`

En GTT no existe un flujo de "unfreeze". El modelo de gobernanza se basa en la reentrada controlada y en un nuevo freeze, no en apagar la gobernanza.

### Method Plans

GTT se aplica a través de un Method Plan, que se elige una vez por proyecto:

\`\`\`
LIGHT
MEDIUM
HARD
TEAM
\`\`\`

Un Method Plan es un perfil operativo, no un nivel de calidad, y ningún plan apaga la gobernanza. La CLI permite al proyecto seleccionar el plan; Bootstrap es dueño de lo que significa cada uno. Los planes están documentados en el repositorio de Bootstrap: https://github.com/GTT-Community/gtt-bootstrap/blob/main/.gtt/docs/method-plans.es.md

### Continuidad de sesión

GTT ofrece capacidades de contexto de sesión para ayudar a recuperar dónde está el trabajo y qué queda por hacer. Dos cosas se mantienen separadas:

\`\`\`
ESTADO GOBERNADO DEL PROYECTO
        │
        ├── Arquitectura
        ├── Decisiones
        ├── Restricciones
        └── Estado validado
\`\`\`

\`\`\`
CONTEXTO DE SESIÓN / OPERATIVO
        │
        ├── Trabajo actual
        ├── Progreso actual
        ├── Trabajo pendiente
        └── Orientación operativa
\`\`\`

El contexto de sesión no es una autoridad de arquitectura alternativa. Esto importa sobre todo cuando un proyecto usa varios ADEs.

## GTT + ADEs

GTT es independiente del ADE.

\`\`\`
                       GTT
                Metodología / Gobernanza
                           │
                           ▼
                    GTT Bootstrap
                           │
                           ▼
                       GTT CLI
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
     Claude Code         Codex            Kiro
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                  Trabajo del Proyecto
\`\`\`

> El ADE es el entorno de desarrollo. GTT es el modelo de gobernanza.

Bootstrap soporta varias superficies de integración de ADE (hoy Claude Code, GitHub Copilot, Codex y Kiro) manteniendo un solo modelo de gobernanza y un solo ADE Primario. El ADE Primario es un rol de flujo de trabajo, no un rol de gobernanza. Los ADEs secundarios no se ignoran: si participan en el proyecto, su integración GTT se representa según los contratos de Bootstrap.

## GTT Bootstrap

> GTT Bootstrap es la implementación de referencia del GTT Method.

Contiene los contratos semánticos y operativos necesarios para aplicar GTT a un proyecto de software real: gobernanza, evidencia, semántica de arquitectura y contexto, propuestas, decisiones, validación, freeze, integración de ADEs y servicios del ciclo de vida del proyecto.

Bootstrap es la fuente de verdad de la implementación de la semántica GTT. La CLI consume Bootstrap; no reimplementa GTT.

### Qué resuelve Bootstrap

- Base de gobernanza del proyecto: la estructura y los contratos necesarios para operar GTT.
- Semántica de gobernanza: la gobernanza se implementa en Bootstrap, no queda a interpretación de la CLI.
- Frontera de evidencia: semántica de grounding, evidencia y procedencia.
- Semántica de arquitectura y contexto: el modelo con el que se gobiernan la arquitectura y el contexto.
- Propuestas frente a decisiones: las propuestas se mantienen separadas de las decisiones gobernadas.
- Freeze: la semántica del freeze y la validación que rodea al estado gobernado.
- Integración de ADEs y coordinación multi-ADE: varios ADEs participantes, un solo ADE Primario.
- Validación determinística, estado y contexto de sesión derivados del estado real del proyecto.
- Contratos de índice, recuperación de información, reconciliación, sincronización de guardas, exportación y recuperación.

### Catálogo de servicios de Bootstrap

| Servicio | Propósito |
|---|---|
| Motor de Gobernanza | Implementa la semántica de gobernanza GTT que define cómo se manejan el contexto, la evidencia, las propuestas, las decisiones, la arquitectura y el freeze. |
| Evidencia y Grounding | Establece la frontera entre material fuente autorizado, evidencia y razonamiento generado. |
| Procedencia | Mantiene la relación entre las afirmaciones del proyecto y la evidencia o el estado de gobernanza que las respalda. |
| Semántica de Arquitectura / Contexto | Aporta el modelo semántico para gobernar la arquitectura, el contexto y la intención del proyecto. |
| Gestión de Propuestas | Sostiene la distinción entre las propuestas generadas por agentes y las decisiones gobernadas del proyecto. |
| Semántica de Decisiones / ADR | Aporta los contratos semánticos con los que se registran y relacionan las decisiones gobernadas. |
| Freeze | Establece y valida el estado gobernado del proyecto. |
| Validación | Ejecuta validación GTT determinística en lugar de depender de que un agente de IA decida si el proyecto es estructuralmente válido. |
| Integración de ADEs | Aporta las superficies de integración que necesitan los Entornos de Desarrollo con IA que participan en el proyecto. |
| Estado Multi-ADE | Registra los ADEs participantes preservando un único modelo de gobernanza GTT. |
| ADE Primario | Identifica el ADE usado como participante principal del flujo de trabajo, sin otorgarle autoridad de gobernanza. |
| Plantillas | Aporta las plantillas, propiedad de Bootstrap, usadas en la inicialización del proyecto y en los flujos GTT. |
| Cuestionario de Diseño Inicial | Aporta un cuestionario, propiedad de Bootstrap, para cuando el proyecto no tiene suficiente material de diseño inicial. |
| Manifiesto de Fuentes | Aporta la estructura necesaria para identificar y gestionar el material fuente inicial del proyecto. |
| Acuerdos de Trabajo | Aporta estructuras, propiedad de Bootstrap, para los acuerdos de trabajo del proyecto, sin confundirlos con la autoridad de gobernanza GTT. |
| Estado | Deriva el estado operativo del proyecto y de GTT a partir de los artefactos reales del proyecto. |
| Contexto de Sesión | Deriva la información de continuidad operativa del estado real del proyecto, para retomar el trabajo sin convertir la memoria del agente en la autoridad del proyecto. |
| Índice Técnico | Mantiene la indexación del proyecto, orientada a máquinas, que necesitan los servicios GTT. |
| Consulta / Recuperación | Da acceso estructurado a la información indexada del proyecto. |
| Reconciliación | Detecta y reconcilia las diferencias relevantes entre el estado gestionado por GTT y el estado del proyecto, según los contratos de Bootstrap. |
| GTTGuard | Aporta los mecanismos de protección y de sincronización de guardas definidos por Bootstrap. |
| Exportación Limpia | Define qué material propiedad de GTT puede excluirse al producir un artefacto de entrega limpio. |
| Recuperación | Define la información portable de recuperación necesaria para reconstruir una instalación GTT y su estado operativo. |
| Contratos de Adaptadores de Memoria de Sesión | Define la frontera de integración de los mecanismos de memoria de sesión, sin transferir la autoridad de gobernanza del proyecto a la memoria privada de un ADE. |

### Arquitectura de Bootstrap

\`\`\`
                         GTT METHOD
                             │
                             ▼
                    GTT BOOTSTRAP 1.x
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
      Gobernanza          Motor / Dominio     Servicios ADE
      Evidencia           Validación          Plantillas
      Procedencia         Estado              Cuestionario
      Arquitectura        Freeze              Integraciones
      Propuestas          Consulta            Sesión
      Decisiones          Reconciliación      Recuperación
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                             ▼
                   Contratos Versionados
                             │
                             ▼
                         GTT CLI
\`\`\`

Como la semántica vive en Bootstrap, detrás de contratos versionados, la CLI se mantiene pequeña.

## GTT CLI

> GTT CLI es la superficie operativa de GTT.

Aporta el ciclo de vida por línea de comandos para descubrir, instalar, configurar, validar, operar, actualizar, reanudar, congelar, exportar y recuperar un proyecto GTT a través de los contratos de GTT Bootstrap.

GTT CLI no es un segundo motor de GTT. Consume y orquesta Bootstrap, y no reproduce la semántica de la metodología. Todos los comandos son determinísticos y no necesitan un LLM.

### Qué resuelve la CLI

- Complejidad de instalación: una forma consistente de inicializar GTT en un proyecto e instalar un Bootstrap compatible.
- Resolución de Bootstrap: resuelve el Bootstrap requerido y verifica la compatibilidad.
- Descubrimiento de ADEs: detecta los ADEs disponibles y gestiona su integración GTT.
- Selección del ADE Primario: establece un ADE Primario, que no tiene autoridad de gobernanza.
- Selección de fuentes iniciales: descubre documentos de diseño candidatos y pide una selección explícita.
- Falta de fuente de diseño: solicita el Cuestionario de Diseño Inicial, propiedad de Bootstrap.
- Ciclo de vida operativo: validación, estado, inspección, reanudación, freeze y actualización, todo delegado a los contratos de Bootstrap.
- Recuperación, exportación limpia y eliminación limpia de GTT de un proyecto.
- CI/CD: flujos no interactivos y legibles por máquina, aptos para automatización.

### Catálogo de servicios de la CLI

| Servicio | Qué hace |
|---|---|
| Descubrimiento del Proyecto | Detecta el proyecto anfitrión y determina si GTT ya está presente. |
| Resolución de Bootstrap | Encuentra y resuelve una versión compatible de GTT Bootstrap. |
| Compatibilidad | Verifica la compatibilidad entre CLI y Bootstrap antes de operaciones inseguras. |
| Detección de ADEs | Detecta los ADEs soportados presentes en el proyecto o en el entorno. |
| Instalación de ADEs | Instala las superficies de integración GTT de los ADEs participantes. |
| Configuración del ADE Primario | Establece exactamente un ADE Primario para el flujo de trabajo del proyecto. |
| Descubrimiento de Fuentes | Encuentra documentos fuente candidatos, de proyecto y de diseño, durante la inicialización. |
| Selección de Fuentes Iniciales | Permite seleccionar de forma explícita el material fuente con el que se inicializa el proyecto GTT. |
| Selección de Method Plan | Selecciona el Method Plan. La CLI lo selecciona; Bootstrap define su significado. |
| Inicialización del Proyecto | gtt init orquesta el flujo completo de inicialización. |
| Estado | gtt status expone el estado determinístico del proyecto y de GTT. |
| Inspección | gtt inspect expone la topología de la instalación y el estado operativo. |
| Validación | gtt validate delega la validación en Bootstrap. |
| Reanudación | gtt resume permite continuar a partir del estado determinístico del proyecto. |
| Freeze | gtt freeze invoca el contrato de freeze de Bootstrap. |
| Doctor | gtt doctor ofrece diagnósticos operativos. |
| Auditoría | gtt audit expone la trazabilidad operativa según los contratos de Bootstrap. |
| Actualización | gtt update gestiona actualizaciones seguras de Bootstrap y su compatibilidad. |
| Exportación Limpia | gtt export --clean produce un artefacto de entrega limpio y deja intacto el proyecto de desarrollo. |
| Limpieza | gtt clean elimina GTT del proyecto actual tras una confirmación explícita. |
| Recuperación | Los snapshots de recuperación guardan la información portable necesaria para reconstruir la instalación GTT y su estado operativo. |
| Versión | gtt version informa la versión de la CLI. |

### Superficie de comandos

\`\`\`
gtt init
gtt status
gtt inspect
gtt validate
gtt resume
gtt freeze
gtt doctor
gtt audit
gtt update
gtt export --clean
gtt clean
gtt version
\`\`\`

Esta página no es una referencia de comandos. La instalación y el detalle de cada comando están en la página de GTT CLI: https://gtt-community.github.io/cli

### Flujo de inicialización

\`\`\`
gtt init
   │
   ├── detectar el proyecto
   ├── detectar un GTT existente
   ├── resolver Bootstrap
   ├── verificar Bootstrap
   ├── comprobar compatibilidad
   ├── detectar ADEs
   ├── elegir los ADEs participantes
   ├── elegir el ADE Primario
   ├── elegir el idioma
   ├── descubrir documentos fuente
   ├── seleccionar las fuentes iniciales
   ├── si no alcanzan → cuestionario de Bootstrap
   ├── elegir el Method Plan
   ├── instalar el Core
   ├── instalar las integraciones de ADE
   ├── persistir el estado operativo
   ├── validar
   ├── crear el handoff de Bootstrap
   └── opcionalmente invocar al ADE Primario
\`\`\`

La CLI no diseña el sistema. Inicializa y orquesta el entorno GTT.

### Estado determinístico

\`\`\`
Estado del Proyecto GTT
       │
       ▼
Bootstrap / CLI
       │
       ▼
Estado operativo derivado
\`\`\`

Nunca al revés: la prosa de un agente no se convierte en verdad del proyecto. La CLI deriva la información operativa y de sesión del estado real del proyecto. La memoria del agente sigue siendo un mecanismo a nivel de ADE; la gobernanza GTT permanece en el proyecto y en los contratos de Bootstrap.

### Exportación limpia y recuperación

\`\`\`
Proyecto de Desarrollo GTT
        │
        ▼
gtt export --clean
        │
        ▼
Artefacto de entrega limpio
\`\`\`

- La exportación limpia produce un artefacto de entrega limpio y preserva el proyecto de desarrollo.
- gtt clean elimina GTT del proyecto actual. Es destructivo, por eso exige confirmación explícita y ofrece un snapshot de recuperación.
- La recuperación preserva la información portable necesaria para reconstruir la instalación GTT y su estado operativo. No es un respaldo completo del repositorio.

### CI/CD

GTT CLI está diseñado para la automatización: validación determinística y no interactiva, comportamiento operativo estable, salida legible por máquina, comprobaciones de versión y compatibilidad, y operaciones de ciclo de vida seguras.

## Method vs Bootstrap vs CLI

| Capa | Qué es | Responsabilidad principal |
|---|---|---|
| GTT Method | Metodología | Define cómo se gobierna el desarrollo asistido por IA. |
| GTT Bootstrap | Implementación de referencia | Implementa la semántica, la gobernanza y las capacidades versionadas de GTT. |
| GTT CLI | Herramienta operativa | Instala, orquesta, valida, opera, actualiza, exporta y recupera proyectos GTT. |
| ADE / Agente | Entorno de desarrollo | Realiza el trabajo de desarrollo dentro del proyecto gobernado. |

> La CLI no debe convertirse en la mente de GTT.

## Lo que GTT no es

- No es un LLM. GTT no genera software por sí mismo.
- No es un agente de programación con IA. GTT no reemplaza a Claude Code, Codex, Kiro, Copilot ni a otros ADEs.
- No es un IDE. GTT es independiente del entorno de desarrollo que use el desarrollador.
- No es solo una CLI. La CLI es la superficie operativa de la metodología.
- No es solo Bootstrap. Bootstrap es la implementación de la metodología.
- No es una biblioteca de prompts. GTT es una metodología de gobernanza con estado de proyecto explícito, evidencia, propuestas, decisiones, validación y control de cambios.

## Comenzar

- Lee la metodología: https://github.com/GTT-Community/gtt-method
- Explora la implementación de referencia: https://github.com/GTT-Community/gtt-bootstrap
- Instala y opera con la CLI: https://gtt-community.github.io/cli

## Referencias

- GTT Method: https://github.com/GTT-Community/gtt-method
- GTT Canonical: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md
- GTT Bootstrap: https://github.com/GTT-Community/gtt-bootstrap
- GTT CLI: https://github.com/GTT-Community/gtt-cli
- Versiones de GTT CLI: https://github.com/GTT-Community/gtt-cli/releases/latest

## En una página

GTT es la metodología: define cómo se gobierna el desarrollo de software asistido por IA. GTT Bootstrap implementa esa metodología y aporta las capacidades semánticas y de gobernanza que requiere un proyecto GTT. GTT CLI aporta la superficie operativa para instalar, configurar, validar, operar, actualizar, recuperar y exportar proyectos GTT. Los Entornos de Desarrollo con IA y los agentes realizan el trabajo de desarrollo dentro de ese entorno gobernado.

\`\`\`
                    GTT METHOD
             Metodología / Gobernanza
                          │
                          ▼
                  GTT BOOTSTRAP
           Implementación de Referencia
                          │
                          ▼
                      GTT CLI
               Superficie Operativa
                          │
                          ▼
                   ADE / Agentes
                          │
                          ▼
                Desarrollo de Software
\`\`\``,
    searchableEn: "methodology GTT Method governed AI-assisted software development governance evidence grounding provenance proposals decisions freeze change request ADE Primary ADE Bootstrap CLI Method Plan session context validation",
    searchableEs: "metodología GTT Method desarrollo de software asistido por IA gobernado gobernanza evidencia grounding procedencia propuestas decisiones freeze solicitud de cambio ADE Primario Bootstrap CLI Method Plan contexto de sesión validación",
  },
  {
    slug: "gtt-method-2-1",
    titleEn: "GTT-Method 2.1",
    titleEs: "GTT-Method 2.1",
    descriptionEn: "Current Reference Implementation with workspace structure.",
    descriptionEs: "Implementación de referencia actual con estructura de workspace.",
    contentEn: `## What is GTT-Method 2.1?

GTT-Method 2.1 is a concrete implementation of the GTT-Method methodology providing governance structure and integration with AI coding agents.

The bootstrap introduces a governed workspace containing governance and context artifacts such as:

- AGENTS.md — Agent instructions and governance
- CHANGE-REQUEST.md — Template for proposed changes
- gtt-method/context/ — Governed project context (L0)
- gtt-method/adr/ — Architecture Decision Records (L1)
- gtt-method/proposals/ — Pending proposals under review
- gtt-method/scripts/ — Validation and governance scripts
- .claude/, .kiro/ — Agent-specific configuration

## Workspace Structure

\`\`\`
/
├── INDEX.md
├── AGENTS.md
├── CHANGE-REQUEST.md
│
├── gtt-method/
│   ├── README.md
│   ├── context/          (L0: Governed)
│   │   ├── stack.md
│   │   ├── principles.md
│   │   └── constraints.md
│   ├── adr/              (L1: Decisions)
│   ├── proposals/        (Under review)
│   └── scripts/          (Governance)
│
├── .claude/             (Claude Code config)
└── .kiro/               (Kiro config)
\`\`\`

## Supported Agents

### Claude Code

Configuration via \`.claude/\` directory with CLAUDE.md rules and settings.json governance.

### Kiro

Configuration via \`.kiro/\` directory with steering manifests and governance directives.

### Cursor & Others

Portable approach to governance works with other AI coding agents and development environments.

### Methodology First

GTT-Method is not tied to any specific agent. The methodology is portable across tools.

## Getting Started

Official Bootstrap Repository: https://github.com/GTT-Community/gtt-bootstrap

The bootstrap project is the authoritative reference implementation. Clone it, adapt to your project, and follow the documented setup process.

1. **Initialize** - Clone bootstrap and adapt the workspace structure to your project.
2. **Establish Context** - Define architecture, principles and constraints explicitly in \`gtt-method/context/\`.
3. **Agent Integration** - Configure \`.claude/\` or \`.kiro/\` with governance rules specific to your agents.
4. **Freeze** - Review and ratify your governed context through the freeze process.
5. **Work** - Begin development with agents working within the governed boundaries.`,
    contentEs: `## Qué es GTT-Method 2.1?

GTT-Method 2.1 es una implementación concreta de la metodología GTT-Method que proporciona una estructura de gobernanza e integración con agentes de IA de codificación.

El bootstrap introduce un workspace gobernado con:

- AGENTS.md — Instrucciones y gobernanza para agentes.
- CHANGE-REQUEST.md — Plantilla para cambios propuestos.
- gtt-method/context/ — Contexto gobernado del proyecto (L0).
- gtt-method/adr/ — Architecture Decision Records (L1).
- gtt-method/proposals/ — Propuestas pendientes de revisión.
- gtt-method/scripts/ — Scripts de validación y gobernanza.
- .claude/, .kiro/ — Configuración específica de agentes.

## Estructura del Workspace

\`\`\`
/
├── INDEX.md
├── AGENTS.md
├── CHANGE-REQUEST.md
│
├── gtt-method/
│   ├── README.md
│   ├── context/          (L0: Governed)
│   │   ├── stack.md
│   │   ├── principles.md
│   │   └── constraints.md
│   ├── adr/              (L1: Decisions)
│   ├── proposals/        (Under review)
│   └── scripts/          (Governance)
│
├── .claude/             (Claude Code config)
└── .kiro/               (Kiro config)
\`\`\`

## Agentes soportados

### Claude Code

Configuración mediante \`.claude/\` con reglas CLAUDE.md y gobernanza de settings.json.

### Kiro

Configuración mediante \`.kiro/\` con manifests de steering y directivas de gobernanza.

### Cursor y otros

El enfoque portable de gobernanza funciona con otros agentes de IA y entornos de desarrollo.

### Metodología primero

GTT-Method no está ligado a un agente específico. La metodología es portable entre herramientas.

## Cómo comenzar

Repositorio oficial: https://github.com/GTT-Community/gtt-bootstrap

El proyecto bootstrap es la implementación de referencia autoritativa. Clónalo, adapta a tu proyecto y sigue el proceso de configuración documentado.

1. **Inicializar** - Clona bootstrap y adapta la estructura del workspace a tu proyecto.
2. **Establecer Contexto** - Define arquitectura, principios y restricciones explícitamente en \`gtt-method/context/\`.
3. **Integración del Agente** - Configura \`.claude/\` o \`.kiro/\` con reglas específicas de gobernanza.
4. **Freeze** - Revisa y ratifica el contexto gobernado mediante el proceso de freeze.
5. **Work** - Comienza el desarrollo con agentes trabajando dentro de los límites gobernados.`,
    searchableEn: "GTT-Method 2.1 bootstrap workspace structure AGENTS CHANGE-REQUEST governed context",
    searchableEs: "GTT-Method 2.1 bootstrap workspace estructura AGENTS CHANGE-REQUEST contexto gobernado",
  },
  {
    slug: "faq",
    titleEn: "FAQ",
    titleEs: "Preguntas Frecuentes",
    descriptionEn: "Common questions about GTT-Method, its concepts and how to get started.",
    descriptionEs: "Preguntas comunes sobre GTT-Method, sus conceptos y cómo comenzar.",
    contentEn: `## What is GTT-Method?

GTT-Method is an open-source methodology for governed AI-assisted software development that combines specifications, context governance, and protection patterns.

## What problem does GTT-Method solve?

Architectural drift — when AI-generated changes gradually move a system away from its intended design. GTT-Method provides mechanisms to make context explicit, governed and protected.

## Is GTT-Method a replacement for SDD?

No. GTT-Method complements SDD. SDD defines what to build; GTT-Method governs the context and boundaries that guide an AI agent while building it.

## Is GTT-Method an AI coding agent?

No. GTT-Method is a methodology and governance approach, not an AI agent itself, but a framework for governing how AI agents behave.

## What is CPP (Context Protection Pattern)?

CPP is a GTT-Method pattern for protecting governed context. Instead of free modification, agents propose changes through a controlled workflow for human review.

## Does GTT-Method depend on one vendor?

No. GTT-Method is vendor-independent and works with Claude Code, Kiro, Cursor, Copilot and other AI coding agents.

## What are the core concepts?

- Governed Context: Explicit, protected project knowledge
- Architectural Intent: Clear decisions about how the system should work
- Context Layers: L0 (governed), L1 (decisions), L2 (docs), L3 (code)
- Freeze: The point where context becomes authoritative
- Change Requests: Formal process for proposing architectural changes
- ADRs: Architecture Decision Records
- Human Decision Boundary: Humans make strategic decisions, agents execute

## How do I start with GTT-Method?

Clone the official bootstrap project from https://github.com/GTT-Community/gtt-bootstrap and follow the setup guide.

## Is GTT-Method suitable for my project?

GTT-Method is particularly useful when:
- AI agents participate actively in development
- Architectural consistency matters
- Multiple sessions and developers need shared context
- Long-lived projects need preserved engineering intent`,
    contentEs: `## ¿Qué es GTT-Method?

GTT-Method es una metodología de código abierto para desarrollo de software asistido por IA gobernado que combina especificaciones, gobernanza de contexto y patrones de protección.

## ¿Qué problema resuelve GTT-Method?

Desviación arquitectónica — cuando los cambios generados por IA alejan gradualmente un sistema de su diseño previsto. GTT-Method proporciona mecanismos para hacer el contexto explícito, gobernado y protegido.

## ¿Es GTT-Method un reemplazo para SDD?

No. GTT-Method complementa SDD. SDD define qué construir; GTT-Method gobierna el contexto y límites que guían a un agente de IA mientras lo construye.

## ¿Es GTT-Method un agente de IA de codificación?

No. GTT-Method es una metodología y enfoque de gobernanza, no un agente de IA en sí, sino un marco para gobernar cómo se comportan los agentes de IA.

## ¿Qué es CPP (Context Protection Pattern)?

CPP es un patrón GTT-Method para proteger el contexto gobernado. En lugar de modificación libre, los agentes proponen cambios a través de un flujo controlado para revisión humana.

## ¿Depende GTT-Method de un solo proveedor?

No. GTT-Method es independiente del proveedor y funciona con Claude Code, Kiro, Cursor, Copilot y otros agentes de IA de codificación.

## ¿Cuáles son los conceptos principales?

- Contexto Gobernado: Conocimiento del proyecto explícito y protegido
- Intención Arquitectónica: Decisiones claras sobre cómo debe funcionar el sistema
- Capas de Contexto: L0 (gobernado), L1 (decisiones), L2 (docs), L3 (código)
- Freeze: El punto donde el contexto se vuelve autoritativo
- Solicitudes de Cambio: Proceso formal para proponer cambios arquitectónicos
- ADRs: Architecture Decision Records
- Límite de Decisión Humana: Humanos toman decisiones estratégicas, agentes ejecutan

## ¿Cómo comienzo con GTT-Method?

Clona el proyecto bootstrap oficial desde https://github.com/GTT-Community/gtt-bootstrap y sigue la guía de configuración.

## ¿Es GTT-Method adecuado para mi proyecto?

GTT-Method es particularmente útil cuando:
- Los agentes de IA participan activamente en el desarrollo
- La consistencia arquitectónica importa
- Múltiples sesiones y desarrolladores necesitan contexto compartido
- Los proyectos de largo plazo necesitan preservar la intención de ingeniería`,
    searchableEn: "faq frequently asked questions GTT-Method methodology concepts",
    searchableEs: "preguntas frecuentes FAQ GTT-Method metodología conceptos",
  },
  {
    slug: "manual",
    titleEn: "Quick User Manual",
    titleEs: "Manual de Usuario Rápido",
    descriptionEn: "Practical guide for using GTT-Method in your projects.",
    descriptionEs: "Guía práctica para usar GTT-Method en tus proyectos.",
    contentEn: `Badge: GTT-Method V2.1 · Practical guide

## Core Statement

You define the intent. GTT-Method protects the intent. AI accelerates implementation.

## The Golden Rule

AI may analyze, propose and execute; authority over governed decisions remains human. GTT-Method may intentionally introduce friction into rapid development to guide users toward compliance with the project's standards, rules and governance requirements.

## 1. The Complete Flow

GTT-Method makes governance part of the normal workflow, so users do not have to manually manage every governance artifact.

YOU define → delegate → review → accept/reject → AGENT analyzes → implements what is allowed → proposes when needed → GTT-Method records decisions → updates context → protects what was approved

Routine implementation: delegate.
Governed decision change: Change Request → Proposal → human review → acceptance → ADR/context.

## 2. First Use: Bootstrap

### Prepare the design

Keep an initial design document in the project root with the vision, objective, main functionality, architecture, technology stack, constraints and known decisions. It does not need to be perfect, but it must clearly represent what you want to build.

### Incorporate GTT-Method

Give the ADE: https://github.com/GTT-Community/gtt-bootstrap

Ask:
\`\`\`
Clone/incorporate GTT-Method Bootstrap into this project.
Inspect the project and use my initial design document
as the source for performing the GTT-Method Bootstrap.
Do not invent decisions; if information is missing, ask me.
\`\`\`

## 3. The Two Confirmations

### A. Does this design represent what I want to build?

If not, correct the design and review it again. If yes, explicitly confirm it.

### B. Did GTT-Method correctly represent my solution?

Review the vision, architecture, stack, principles, constraints and glossary. Correct anything that is wrong before freezing.

These are different decisions and both matter.

## 4. Review the Workspace and Freeze

After Bootstrap you will find files such as AGENTS.md, CHANGE-REQUEST.md, SOURCE-BRIEF.* and a gtt-method/ directory containing context, ADRs, proposals and scripts.

Quick architecture map: \`gtt-method/context/stack.md\`

Freeze: \`gtt-method/scripts/gtt-method-freeze.sh\`

## 5. Normal Development: Delegate

\`\`\`
Implement this functionality according to the governed GTT-Method
context. Do not change architectural decisions.
\`\`\`

A Change Request is not needed for a bug fix, unit test, already-defined endpoint, refactor without a governed decision change or logging improvement.

## 6. When to Use CHANGE-REQUEST.md

Use it when changing a governed decision: database, cloud platform, framework, architectural pattern, integration, constraint, security or deployment decision, or when introducing a major component.

## 7. What Not to Do

- Do not directly edit frozen governed context.
- Do not create copies to bypass protection.
- Do not disable the guardrails.
- Do not create a Proposal for every line of code.
- Do not accept a Proposal without reading it.

## Quick Checklist

- I prepared or defined the initial design.
- I ran Bootstrap and confirmed the design.
- I reviewed and confirmed the generated context.
- I ran Freeze and checked the protection.
- I delegate routine work without changing decisions.
- I use CHANGE-REQUEST.md for governed changes.
- I review and decide every Proposal.
- I keep ADRs, context and the architecture map consistent.

## Quick Reference

| Situation | What you do |
|---|---|
| New project | Bootstrap |
| Routine task or bug | Delegate, implement and validate |
| Architectural change | CHANGE-REQUEST.md |
| Proposal received | Review, accept, reject or request changes |
| Frozen context | Do not edit it directly |

Remember: define the intent, confirm the context, make the decisions, delegate implementation and review the result. Human First. AI Accelerated.`,
    contentEs: `Badge: GTT-Method V2.1 · Guía práctica

## Principio Central

Tú defines la intención. GTT-Method protege la intención. La IA acelera la implementación.

## La Regla de Oro

La IA puede analizar, proponer y ejecutar; la autoridad sobre las decisiones gobernadas sigue siendo humana. GTT-Method puede introducir fricción deliberada en el desarrollo rápido para guiar al usuario hacia el cumplimiento de los estándares, reglas y gobernabilidad del proyecto.

## 1. El Flujo Completo

GTT-Method convierte la gobernabilidad en parte natural del trabajo, sin pedirte que administres manualmente cada artefacto.

TÚ define → delega → revisa → acepta/rechaza → AGENTE analiza → implementa lo permitido → propone cuando corresponde → GTT-Method registra decisiones → actualiza contexto → protege lo aprobado

Implementación rutinaria: delega.
Cambio de decisión gobernada: Change Request → Proposal → revisión humana → aceptación → ADR/contexto.

## 2. Primer Uso: Bootstrap

### Prepara el Diseño

Deja en la raíz un documento con visión, objetivo, funcionalidad principal, arquitectura, stack, restricciones y decisiones conocidas. No tiene que ser perfecto, pero debe expresar lo que quieres construir.

### Incorpora GTT-Method

Entrega al ADE: https://github.com/GTT-Community/gtt-bootstrap

Y pídele:
\`\`\`
Clona/incorpora GTT-Method Bootstrap en este proyecto.
Inspecciona el proyecto y usa mi documento de diseño inicial
como fuente para ejecutar el GTT-Method Bootstrap.
No inventes decisiones; si falta información, pregúntame.
\`\`\`

## 3. Las Dos Confirmaciones

### A. ¿Este diseño representa lo que quiero construir?

Si no, corrige el diseño y vuelve a revisarlo. Si sí, confirma explícitamente.

### B. ¿GTT-Method entendió correctamente mi solución?

Revisa visión, arquitectura, stack, principios, restricciones y glosario. Corrige cualquier error antes de congelar.

Son decisiones distintas y ambas son necesarias.

## 4. Revisa el Workspace y Ejecuta Freeze

Después del Bootstrap encontrarás AGENTS.md, CHANGE-REQUEST.md, SOURCE-BRIEF.* y el directorio gtt-method/ con contexto, ADRs, propuestas y scripts.

Mapa: \`gtt-method/context/stack.md\`

Freeze: \`gtt-method/scripts/gtt-method-freeze.sh\`

## 5. Desarrollo Normal: Delega

\`\`\`
Implementa esta funcionalidad siguiendo la arquitectura
y las restricciones definidas por GTT-Method. No cambies decisiones
arquitectónicas.
\`\`\`

No necesitas un Change Request para un bug, un unit test, un endpoint ya definido, un refactor sin cambio arquitectónico o mejoras de logging.

## 6. Cuándo Usar CHANGE-REQUEST.md

Úsalo cuando cambies una decisión gobernada: tecnología, base de datos, plataforma cloud, framework, patrón arquitectónico, integración, restricción, seguridad, despliegue o un componente mayor.

## 7. Qué No Hacer

- No edites directamente el contexto congelado.
- No crees copias para esquivar la protección.
- No desactives los guardrails.
- No crees una Proposal por cada línea de código.
- No aceptes una Proposal sin leerla.

## Checklist Rápido

- Preparé o definí el diseño inicial.
- Ejecuté Bootstrap y confirmé el diseño.
- Revisé y confirmé el contexto generado.
- Ejecuté Freeze y comprobé la protección.
- Delego tareas normales sin cambiar decisiones.
- Uso CHANGE-REQUEST.md para cambios gobernados.
- Reviso y decido cada Proposal.
- Mantengo ADR, contexto y mapa consistentes.

## Referencia Rápida

| Situación | Qué haces |
|---|---|
| Nuevo proyecto | Bootstrap |
| Tarea rutinaria o bug | Delegas, implementas y validas |
| Cambio arquitectónico | CHANGE-REQUEST.md |
| Proposal recibida | Revisas, aceptas, rechazas o pides cambios |
| Contexto congelado | No lo editas directamente |

Recuerda: define la intención, confirma el contexto, toma las decisiones, delega la implementación y revisa el resultado. Human First. AI Accelerated.`,
    searchableEn: "manual quick user guide bootstrap freeze change request workflow",
    searchableEs: "manual guía de usuario rápida bootstrap freeze solicitud de cambio flujo de trabajo",
  },
  {
    slug: "cli",
    titleEn: "GTT CLI",
    titleEs: "GTT CLI",
    descriptionEn: "Install and use the gtt command-line tool on Linux, macOS and Windows.",
    descriptionEs: "Instala y usa la herramienta de línea de comandos gtt en Linux, macOS y Windows.",
    contentEn: `GTT CLI is a single binary (gtt) for Linux, macOS and Windows (x86_64 and arm64). Every method installs the same binary from the latest published release at https://github.com/GTT-Community/gtt-cli/releases/latest and verifies its SHA-256 checksum.

## Install GTT CLI

### Linux and macOS (curl)

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | sh
\`\`\`

### Windows (PowerShell)

\`\`\`
irm https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.ps1 | iex
\`\`\`

### uv (Python)

\`\`\`
uv tool install gtt-cli
\`\`\`

### npm (Node.js 18+)

\`\`\`
npm install -g gtt-cli
\`\`\`

### Go 1.27+

\`\`\`
go install github.com/GTT-Community/gtt-cli/cmd/gtt@latest
\`\`\`

## Verify the installation

\`\`\`
gtt version
\`\`\`

## Try it without installing

\`\`\`
uvx --from gtt-cli gtt version
npx gtt-cli version
\`\`\`

## Update

### curl / PowerShell

Run the same install command again.

### uv

\`\`\`
uv tool upgrade gtt-cli
\`\`\`

### npm

\`\`\`
npm update -g gtt-cli
\`\`\`

## Install a specific version (example: 1.0.1)

### curl

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | GTT_VERSION=1.0.1 sh
\`\`\`

### PowerShell

\`\`\`
$env:GTT_VERSION="1.0.1"; irm https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.ps1 | iex
\`\`\`

### uv

\`\`\`
uv tool install gtt-cli==1.0.1
\`\`\`

### npm

\`\`\`
npm install -g gtt-cli@1.0.1
\`\`\`

## Where it is installed (curl and PowerShell)

- Linux/macOS: /usr/local/bin if it is writable; otherwise ~/.local/bin (change it with GTT_INSTALL_DIR)
- Windows: %LOCALAPPDATA%\\Programs\\gtt, which is added to the user PATH (open a new terminal)

## Requirements

GTT CLI needs nothing else to run, but GTT Bootstrap (which the CLI downloads and operates) uses:

- git
- bash and python3
- On Windows: Git for Windows (provides bash) and Python 3

On Windows the CLI uses Git Bash automatically and never the WSL bash. To use a different bash, set GTT_BASH to the path of bash.exe.

## Manual download

Per-platform files are available at https://github.com/GTT-Community/gtt-cli/releases/latest

- gtt_linux_amd64.tar.gz, gtt_linux_arm64.tar.gz
- gtt_darwin_amd64.tar.gz (macOS Intel), gtt_darwin_arm64.tar.gz (macOS Apple Silicon)
- gtt_windows_amd64.zip, gtt_windows_arm64.zip
- checksums.txt (SHA-256)

## First use

\`\`\`
cd my-project
gtt init
gtt status
\`\`\`

Source code and documentation: https://github.com/GTT-Community/gtt-cli`,
    contentEs: `GTT CLI es un único binario (gtt) para Linux, macOS y Windows (x86_64 y arm64). Todos los métodos instalan el mismo binario desde la última versión publicada en https://github.com/GTT-Community/gtt-cli/releases/latest y verifican su checksum SHA-256.

## Instalar GTT CLI

### Linux y macOS (curl)

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | sh
\`\`\`

### Windows (PowerShell)

\`\`\`
irm https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.ps1 | iex
\`\`\`

### uv (Python)

\`\`\`
uv tool install gtt-cli
\`\`\`

### npm (Node.js 18+)

\`\`\`
npm install -g gtt-cli
\`\`\`

### Go 1.27+

\`\`\`
go install github.com/GTT-Community/gtt-cli/cmd/gtt@latest
\`\`\`

## Comprobar la instalación

\`\`\`
gtt version
\`\`\`

## Probar sin instalar

\`\`\`
uvx --from gtt-cli gtt version
npx gtt-cli version
\`\`\`

## Actualizar

### curl / PowerShell

Vuelve a ejecutar el mismo comando de instalación.

### uv

\`\`\`
uv tool upgrade gtt-cli
\`\`\`

### npm

\`\`\`
npm update -g gtt-cli
\`\`\`

## Instalar una versión específica (ejemplo: 1.0.1)

### curl

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | GTT_VERSION=1.0.1 sh
\`\`\`

### PowerShell

\`\`\`
$env:GTT_VERSION="1.0.1"; irm https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.ps1 | iex
\`\`\`

### uv

\`\`\`
uv tool install gtt-cli==1.0.1
\`\`\`

### npm

\`\`\`
npm install -g gtt-cli@1.0.1
\`\`\`

## Dónde se instala (curl y PowerShell)

- Linux/macOS: /usr/local/bin si se puede escribir; si no, ~/.local/bin (cambiar con GTT_INSTALL_DIR)
- Windows: %LOCALAPPDATA%\\Programs\\gtt, que se agrega al PATH del usuario (abrir una terminal nueva)

## Requisitos

GTT CLI no necesita nada más para ejecutarse, pero GTT Bootstrap (que el CLI descarga y opera) usa:

- git
- bash y python3
- En Windows: Git for Windows (aporta bash) y Python 3

En Windows el CLI usa Git Bash automáticamente y nunca el bash de WSL. Para usar otro bash, define GTT_BASH con la ruta a bash.exe.

## Descarga manual

Archivos por plataforma disponibles en https://github.com/GTT-Community/gtt-cli/releases/latest

- gtt_linux_amd64.tar.gz, gtt_linux_arm64.tar.gz
- gtt_darwin_amd64.tar.gz (macOS Intel), gtt_darwin_arm64.tar.gz (macOS Apple Silicon)
- gtt_windows_amd64.zip, gtt_windows_arm64.zip
- checksums.txt (SHA-256)

## Primer uso

\`\`\`
cd mi-proyecto
gtt init
gtt status
\`\`\`

Código fuente y documentación: https://github.com/GTT-Community/gtt-cli`,
    searchableEn: "cli gtt command line install curl powershell uv npm go windows macos linux binary",
    searchableEs: "cli gtt línea de comandos instalar curl powershell uv npm go windows macos linux binario",
  },
  {
    slug: "prompts",
    titleEn: "Implement GTT with Prompts",
    titleEs: "Implementa GTT con Prompts",
    descriptionEn: "Different ways to implement GTT-Method in a project by prompting your AI agent.",
    descriptionEs: "Distintas formas de implementar GTT-Method en un proyecto mediante prompts a tu agente de IA.",
    contentEn: `You can implement GTT-Method in a project just by talking to your AI agent or ADE (Claude Code, GitHub Copilot, Codex, Cursor, Kiro and others). Give it the Bootstrap repository and one of the prompts below.

GTT-Method Bootstrap repository: https://github.com/GTT-Community/gtt-bootstrap

## 1. The short way

The minimum the agent needs: the instruction and the URL.

\`\`\`
Implement GTT-Method in this project.
This is the GitHub URL: https://github.com/GTT-Community/gtt-bootstrap
\`\`\`

## 2. With an initial design document

Recommended. Keep a design document in the project root (vision, objective, main functionality, architecture, stack, constraints and known decisions) and ask:

\`\`\`
Clone/incorporate GTT-Method Bootstrap into this project from https://github.com/GTT-Community/gtt-bootstrap
Inspect the project and use my initial design document
as the source for performing the GTT-Method Bootstrap.
Do not invent decisions; if information is missing, ask me.
\`\`\`

## 3. Without a design document

If you have no document yet, let the agent build the context with you through conversation.

\`\`\`
Implement GTT-Method in this project from https://github.com/GTT-Community/gtt-bootstrap
I do not have a design document yet.
Ask me what you need to know about the vision, architecture, stack and constraints,
and do not invent decisions on my behalf.
\`\`\`

## 4. In a project that already has code

Have the agent read what exists before proposing the governed context.

\`\`\`
Incorporate GTT-Method Bootstrap into this existing project from https://github.com/GTT-Community/gtt-bootstrap
Inspect the current code first.
Do not overwrite, move or delete any existing file without asking me.
Show me the context you propose so I can confirm it before it is frozen.
\`\`\`

## After the prompt

- Review what the agent produced: vision, architecture, stack, principles, constraints and glossary.
- Correct anything that is wrong and confirm it before freezing the context.
- The full flow is described in the Quick User Manual.

## Prefer the command line?

GTT CLI downloads and operates GTT Bootstrap for you.`,
    contentEs: `Puedes implementar GTT-Method en un proyecto simplemente conversando con tu agente de IA o ADE (Claude Code, GitHub Copilot, Codex, Cursor, Kiro y otros). Entrégale el repositorio de Bootstrap y uno de los prompts de abajo.

Repositorio de GTT-Method Bootstrap: https://github.com/GTT-Community/gtt-bootstrap

## 1. La forma corta

Lo mínimo que necesita el agente: la instrucción y la URL.

\`\`\`
Implementa GTT-Method en este proyecto.
Esta es la URL de GitHub: https://github.com/GTT-Community/gtt-bootstrap
\`\`\`

## 2. Con un documento de diseño inicial

Recomendado. Deja en la raíz del proyecto un documento de diseño (visión, objetivo, funcionalidad principal, arquitectura, stack, restricciones y decisiones conocidas) y pídele:

\`\`\`
Clona/incorpora GTT-Method Bootstrap en este proyecto desde https://github.com/GTT-Community/gtt-bootstrap
Inspecciona el proyecto y usa mi documento de diseño inicial
como fuente para ejecutar el GTT-Method Bootstrap.
No inventes decisiones; si falta información, pregúntame.
\`\`\`

## 3. Sin documento de diseño

Si todavía no tienes un documento, deja que el agente construya el contexto contigo conversando.

\`\`\`
Implementa GTT-Method en este proyecto desde https://github.com/GTT-Community/gtt-bootstrap
Todavía no tengo un documento de diseño.
Pregúntame lo que necesites saber sobre la visión, arquitectura, stack y restricciones,
y no inventes decisiones por mí.
\`\`\`

## 4. En un proyecto que ya tiene código

Haz que el agente lea lo que existe antes de proponer el contexto gobernado.

\`\`\`
Incorpora GTT-Method Bootstrap en este proyecto existente desde https://github.com/GTT-Community/gtt-bootstrap
Inspecciona primero el código actual.
No sobrescribas, muevas ni elimines ningún archivo existente sin preguntarme.
Muéstrame el contexto que propones para confirmarlo antes de congelarlo.
\`\`\`

## Después del prompt

- Revisa lo que produjo el agente: visión, arquitectura, stack, principios, restricciones y glosario.
- Corrige lo que esté mal y confírmalo antes de congelar el contexto.
- El flujo completo está descrito en el Manual de Usuario Rápido.

## ¿Prefieres la línea de comandos?

GTT CLI descarga y opera GTT Bootstrap por ti.`,
    searchableEn: "prompts agent ade bootstrap implement gtt project github url",
    searchableEs: "prompts agente ade bootstrap implementar gtt proyecto url github",
  },
];

export function searchContent(query: string, language: "en" | "es"): ContentPage[] {
  const lowerQuery = query.toLowerCase();

  return pages.filter((page) => {
    const searchable = language === "en" ? page.searchableEn : page.searchableEs;
    const title = language === "en" ? page.titleEn : page.titleEs;
    const description = language === "en" ? page.descriptionEn : page.descriptionEs;

    return (
      searchable.toLowerCase().includes(lowerQuery) ||
      title.toLowerCase().includes(lowerQuery) ||
      description.toLowerCase().includes(lowerQuery)
    );
  });
}
