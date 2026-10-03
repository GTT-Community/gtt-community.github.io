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
    titleEn: "GTT-Method Methodology",
    titleEs: "Metodología GTT-Method",
    descriptionEn: "Principles, Concepts and Practices for governing AI development.",
    descriptionEs: "Principios, Conceptos y Prácticas para gobernar desarrollo de IA.",
    contentEn: `## Context Layers (L0-L3)

GTT-Method organizes project information into governance layers with different authority and edit policies.

### L0: Governed Context

- Contents: Architecture, principles, constraints, solution vision, glossary
- Policy: Protected / Propose only
- Authority: Human review required

### L1: Decisions

- Contents: ADRs (Architecture Decision Records)
- Policy: Propose with review
- Authority: Deliberate change process

### L2: Documentation

- Contents: Human-facing guides and references
- Policy: Editable with review
- Authority: Flexible updates

### L3: Implementation

- Contents: Source code, tests, infrastructure
- Policy: Normal development
- Authority: Standard review process

## Freeze: Ratification & Authority

Freeze establishes the authoritative baseline for implementation.

THINK (Explore, design, dialogue) → Context / Decisions (Made explicit) → Human Ratification (Approval & authority) → FREEZE (Authoritative baseline) → WORK (Guided by frozen context)

## Change Requests & Impact Analysis

Changes after freeze follow a governed process, not bypass governance.

### Discovery

During work, new requirements, constraints or contradictions are discovered.

### Change Request

The change is documented with rationale, not just implemented ad-hoc.

### Impact Analysis

Analyze what changes to architecture, context, and decisions would be needed.

### THINK & Decide

Re-enter THINK mode, make decisions, then re-freeze with updated context.

## Core Principles

### Context is Explicit

Architecture and constraints exist in written form, versioned in Git. Not in prompts, conversations or assumptions.

### Governance is Deterministic

Where possible, governance is enforced through code (CI gates, hooks, scripts) not just instructions to the agent.

### Human Decision Boundary

Agents propose and analyze. Humans decide. Freeze marks the decision point and establishes authority.

### Architectural Intent is Protected

Critical decisions are protected from unintended modification through governance layers and review processes.`,
    contentEs: `## Capas de Contexto (L0-L3)

GTT-Method organiza la información del proyecto en capas de gobernanza con diferente autoridad y políticas de edición.

### L0: Contexto Gobernado

- Contenido: Arquitectura, principios, restricciones, visión de solución, glosario.
- Política: Protegido / Solo propuestas.
- Autoridad: Revisión humana requerida.

### L1: Decisiones

- Contenido: ADRs (Registros de Decisiones Arquitectónicas).
- Política: Proponer con revisión.
- Autoridad: Proceso de cambio deliberado.

### L2: Documentación

- Contenido: Guías y referencias orientadas a humanos.
- Política: Editable con revisión.
- Autoridad: Actualizaciones flexibles.

### L3: Implementación

- Contenido: Código fuente, pruebas, infraestructura.
- Política: Desarrollo normal.
- Autoridad: Proceso de revisión estándar.

## Freeze: Ratificación & Autoridad

Freeze establece la línea de base autoritativa para la implementación.

THINK (Explorar, diseñar, dialogar) → Contexto / Decisiones (Hechas explícitas) → Ratificación Humana (Aprobación & autoridad) → FREEZE (Línea de base autoritativa) → TRABAJO (Guiado por contexto congelado)

## Solicitudes de Cambio & Análisis de Impacto

Los cambios después del freeze siguen un proceso gobernado, no eludir la gobernanza.

### Descubrimiento

Durante el trabajo se descubren nuevos requisitos, restricciones o contradicciones.

### Solicitud de Cambio

El cambio se documenta con fundamentación, no solo se implementa sin pensar.

### Análisis de Impacto

Analiza qué cambios en arquitectura, contexto y decisiones serían necesarios.

### THINK & Decidir

Re-entra en modo THINK, toma decisiones y luego vuelve a congelar con contexto actualizado.

## Principios Clave

### El Contexto es Explícito

La arquitectura y restricciones existen en forma escrita, versionadas en Git. No en indicaciones, conversaciones o suposiciones.

### La Gobernanza es Determinística

Cuando es posible, la gobernanza se aplica a través del código (puertas CI, hooks, scripts), no solo instrucciones al agente.

### Límite de Decisión Humana

Los agentes proponen y analizan. Los humanos deciden. Freeze marca el punto de decisión y establece autoridad.

### La Intención Arquitectónica es Protegida

Las decisiones críticas están protegidas de modificación involuntaria a través de capas de gobernanza y procesos de revisión.`,
    searchableEn: "methodology context layers L0 L1 L2 L3 freeze change request ADR",
    searchableEs: "metodología capas de contexto L0 L1 L2 L3 freeze solicitud de cambio ADR",
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
