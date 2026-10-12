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
    descriptionEn: "GTT-Method is a modern methodology for software development in the age of Artificial Intelligence, focused on governing and protecting design, human intent and code against the intervention of AI agents, LLMs and ADEs, while guiding the design and construction of solutions through proven, well-established engineering methodologies. Its reference implementation is GTT Bootstrap, and its operational tool is GTT CLI.",
    descriptionEs: "GTT-Method es una metodología moderna para el desarrollo de software en la era de la Inteligencia Artificial, enfocada en gobernar y proteger el diseño, la intención humana y el código frente a la intervención de agentes de IA, LLMs y ADEs, mientras guía el diseño y construcción de soluciones mediante metodologías de ingeniería conocidas y depuradas. Su implementación de referencia es GTT Bootstrap, y su herramienta operativa es GTT CLI.",
    contentEn: `GTT (Governance Through Thinking) is an open-source methodology for governing software development when AI agents participate in it.

Today GTT is three things, in a deliberate order: a methodology, its reference implementation, and the tool that operates it.

\`\`\`
GTT Method        Methodology and governance
      ↓
GTT Bootstrap     Reference implementation
      ↓
GTT CLI           Operational tooling
      ↓
ADEs + Human      Development work
\`\`\`

## Core principle

> When context doesn't govern AI, AI governs the solution.

AI agents can implement complete features. The hard problem is no longer code generation: it is that a sequence of individually reasonable changes can move a system away from the architecture and decisions the team intended. GTT makes context, evidence, architecture, proposals, decisions and change explicit and governed, so the project, not the agent, remains the source of truth.

## GTT Method

The methodology. It defines how project context, evidence, architecture, rules, constraints, proposals, decisions, validation, freeze and controlled change are handled when AI Development Environments (ADEs) take part in development.

- Evidence, proposals and decisions are kept apart: agents reason and propose, humans decide.
- Freeze establishes the governed state. Changes after freeze go through a change request, never around it.
- One governance model serves several ADEs, with exactly one Primary ADE.

Read it in full on the Methodology page: https://gtt-method.org/methodology/

## GTT Bootstrap

The reference implementation of the method. Bootstrap holds the GTT semantics and the versioned contracts that make GTT executable inside a real project: governance, evidence and provenance, proposals and decisions, deterministic validation, freeze, ADE integrations, status and session context.

Repository: https://github.com/GTT-Community/gtt-bootstrap

## GTT CLI

The operational surface. A single gtt binary for Linux, macOS and Windows that installs, configures, validates, updates, resumes, freezes, exports and recovers GTT projects through the Bootstrap contracts. Every command is deterministic and needs no LLM.

\`\`\`
cd my-project
gtt init
gtt status
\`\`\`

GTT CLI is not a second GTT engine: it orchestrates Bootstrap and contains no methodology of its own. Installation and commands are on the GTT CLI page: https://gtt-method.org/cli/

## Works with your ADE

GTT is independent of the development environment. Bootstrap currently ships integrations for Claude Code, GitHub Copilot, Codex and Kiro, and several can participate in the same project under one governance model.

## What GTT is not

- Not an LLM and not an AI coding agent: it does not replace your ADE.
- Not an IDE.
- Not only a CLI, and not a prompt library: the methodology is the center.

## Who created GTT?

GTT was created by Moisés Griott and is maintained by the GTT Community.

### Moisés Griott

Digital Architect, Cloud Architect, and AI/Agentic AI Architect. Creator and original author of the GTT Method.

### GTT Community

The open-source community that maintains and evolves GTT through contributions, feedback and real implementations: https://github.com/orgs/GTT-Community/repositories

Report a bug, propose an idea or leave a comment on the community board: https://gtt-method.feedlog.ai/

## Open source licenses

- GTT Method: Apache-2.0
- GTT Bootstrap: MIT
- GTT CLI: Apache-2.0
- This website: MIT`,
    contentEs: `GTT (Governance Through Thinking) es una metodología de código abierto para gobernar el desarrollo de software cuando participan agentes de IA.

Hoy GTT son tres cosas, en un orden deliberado: una metodología, su implementación de referencia y la herramienta que la opera.

\`\`\`
GTT Method        Metodología y gobernanza
      ↓
GTT Bootstrap     Implementación de referencia
      ↓
GTT CLI           Herramienta operativa
      ↓
ADEs + Humano     Trabajo de desarrollo
\`\`\`

## Principio central

> Cuando el contexto no gobierna a la IA, la IA gobierna la solución.

Los agentes de IA pueden implementar funcionalidades completas. El problema difícil ya no es generar código: es que una secuencia de cambios individualmente razonables puede alejar al sistema de la arquitectura y de las decisiones que el equipo quería. GTT hace explícitos y gobernados el contexto, la evidencia, la arquitectura, las propuestas, las decisiones y el cambio, para que el proyecto, y no el agente, siga siendo la fuente de verdad.

## GTT Method

La metodología. Define cómo se manejan el contexto del proyecto, la evidencia, la arquitectura, las reglas, las restricciones, las propuestas, las decisiones, la validación, el freeze y el cambio controlado cuando Entornos de Desarrollo con IA (ADEs) participan en el desarrollo.

- La evidencia, las propuestas y las decisiones se mantienen separadas: los agentes razonan y proponen, los humanos deciden.
- El freeze establece el estado gobernado. Los cambios posteriores pasan por una solicitud de cambio, nunca por fuera.
- Un solo modelo de gobernanza sirve a varios ADEs, con exactamente un ADE Primario.

Léela completa en la página de Metodología: https://gtt-method.org/methodology/

## GTT Bootstrap

La implementación de referencia del método. Bootstrap contiene la semántica GTT y los contratos versionados que hacen a GTT ejecutable dentro de un proyecto real: gobernanza, evidencia y procedencia, propuestas y decisiones, validación determinística, freeze, integraciones de ADE, estado y contexto de sesión.

Repositorio: https://github.com/GTT-Community/gtt-bootstrap

## GTT CLI

La superficie operativa. Un único binario gtt para Linux, macOS y Windows que instala, configura, valida, actualiza, reanuda, congela, exporta y recupera proyectos GTT a través de los contratos de Bootstrap. Todos los comandos son determinísticos y no necesitan un LLM.

\`\`\`
cd mi-proyecto
gtt init
gtt status
\`\`\`

GTT CLI no es un segundo motor de GTT: orquesta Bootstrap y no contiene metodología propia. La instalación y los comandos están en la página de GTT CLI: https://gtt-method.org/cli/

## Funciona con tu ADE

GTT es independiente del entorno de desarrollo. Bootstrap incluye hoy integraciones para Claude Code, GitHub Copilot, Codex y Kiro, y varios pueden participar en el mismo proyecto bajo un solo modelo de gobernanza.

## Lo que GTT no es

- No es un LLM ni un agente de programación con IA: no reemplaza a tu ADE.
- No es un IDE.
- No es solo una CLI ni una biblioteca de prompts: la metodología es el centro.

## ¿Quién creó GTT?

GTT fue creado por Moisés Griott y es mantenido por la Comunidad GTT.

### Moisés Griott

Digital Architect, Cloud Architect y AI/Agentic AI Architect. Creador y autor original del GTT Method.

### Comunidad GTT

La comunidad de código abierto que mantiene y hace evolucionar GTT con contribuciones, feedback e implementaciones reales: https://github.com/orgs/GTT-Community/repositories

Reporta un bug, propone una idea o deja un comentario en el tablero de la comunidad: https://gtt-method.feedlog.ai/

## Licencias de código abierto

- GTT Method: Apache-2.0
- GTT Bootstrap: MIT
- GTT CLI: Apache-2.0
- Este sitio web: MIT`,
    searchableEn: "GTT-Method Governance Through Thinking AI assisted development architecture drift context engineering Bootstrap CLI ADE license community feedback",
    searchableEs: "GTT-Method Governance Through Thinking desarrollo asistido por IA desviación arquitectónica context engineering Bootstrap CLI ADE licencia comunidad feedback",
  },
  {
    slug: "problem",
    titleEn: "The Problem",
    titleEs: "El Problema",
    descriptionEn: "The problems GTT solves when AI agents take part in software development: agent reasoning becoming authority, architectural drift, uncontrolled changes, context overload and lost session continuity.",
    descriptionEs: "Los problemas que GTT resuelve cuando agentes de IA participan en el desarrollo de software: razonamiento convertido en autoridad, desviación arquitectónica, cambios incontrolados, exceso de contexto y pérdida de continuidad.",
    contentEn: `AI agents write software fast. They do not know what your project has decided.

AI coding agents can implement complete features in minutes. But software development is more than generating code: it is keeping a system coherent with the decisions, architecture and constraints its team has accepted. These are the problems that appear when agents take part in development without governance, and what GTT does about each one.

## Agent reasoning becomes project authority

An agent reasons, reaches a conclusion and applies it. Nobody approved it, yet it is now part of the system. Repeated across sessions, the agent ends up deciding the architecture by default.

GTT separates reasoning from decision authority: agent reasoning is not change authorization. Agents analyze and propose; a human approves, rejects or modifies. A proposal only becomes part of the project through a human decision.

## Evidence, assumptions and guesses look the same

An agent's answer mixes what the project's sources say with what the agent inferred or invented, and gaps and contradictions get resolved silently. The reader cannot tell which is which.

GTT establishes an evidence boundary. Authorized sources are grounded into an evidence dossier, and provenance markers distinguish sourced evidence, gaps, conflicts and proposals. A conflict between sources is exposed, never silently resolved.

## Architectural drift

Individually reasonable AI-generated changes gradually move a system away from its intended design, and nobody notices until it is expensive to undo.

GTT makes architectural intent explicit through ADRs, specifications, rules, constraints and governed state, so drift is surfaced instead of silently accepted.

## Accepted decisions get reopened without anyone deciding

What the team agreed last week is quietly rewritten this week, because nothing marks it as settled.

In GTT, freeze establishes a boundary around the accepted governed state. After a freeze, a change follows a governed path: change request, impact analysis, THINK, proposal, human decision and a new freeze. There is no "unfreeze".

## Critical code gets modified autonomously

Without explicit boundaries, an agent can rewrite a payment calculation, a security check or an architectural boundary as a side effect of an unrelated task.

GTTGuard protects files, classes and methods. The agent can still read, analyze and propose changes to a protected artifact, but the change needs explicit human approval. GTT Enforcement evaluates operations that affect governed state against the applicable rules before they become accepted changes.

## Too much context, not just too little

Agents lose important context during a session, and the usual fix is to load everything. That fills the context window with irrelevant, duplicated and conflicting material, costs tokens and lets unrelated text act as if it were authority.

GTT treats context efficiency as a governance concern. It distinguishes the Governed Context, the authoritative body of information, from the Execution Context, the minimum relevant subset selected for an operation. The principle is minimum sufficient governed context, not maximum available context, and reducing context never removes an applicable constraint, decision or protection.

## No continuity between sessions

Context established in one session is lost in the next, so people re-explain the same constraints, or rely on a memory the agent wrote for itself and treat it as truth.

GTT generates session state from the actual state of the project: Git history, the last freeze, active proposals and change requests, open items and validation status. That state is an operational handoff, not authority, and it is portable across ADEs.

## Inconsistent decisions across prompts and sessions

Different prompts and sessions produce different implementations of the same feature or pattern, breaking consistency.

Because every session works from the same governed context and the same frozen decisions, the answer depends on the project and not on how the prompt was phrased.

## Governance that depends on an AI supervising an AI

Asking one model to check another gives a probabilistic answer to a question that often has a deterministic one.

GTT validates deterministically wherever a rule can be expressed: protected artifacts, proposal paths, provenance structure, unresolved blocking items, and freeze and governed state consistency. The machine checks whether the governance structure is valid; the human judges whether the architectural decision is correct.

## Governance tied to one tool

Rules written into the memory, hooks or instruction files of one AI Development Environment stop applying when the team uses another, and each tool ends up with its own version of the truth.

GTT is independent of any agent or ADE. Each ADE connects through an adapter that translates its operations into the GTT contract, and several ADEs can work on the same project under one governance model.

## The deep problem

The fundamental issue is not that agents generate incorrect code.

Agents operate on context → context can be incomplete, inconsistent, stale, ambiguous or uncontrolled → behavior becomes unpredictable. And when nothing separates reasoning from authority, that unpredictable behavior becomes the accepted state of the project.

## Why traditional approaches fall short

Reviewing agent output after it is generated is reactive and does not address the root cause.

### Code review alone

Reviewing the output does not change what the agent works from next time. The same problem returns in the next session.

### Better prompts

More detailed prompts help temporarily, but they are not persistent, reviewable or enforceable.

### Trust in the agent

Trusting the agent to "follow the architecture" does not work when the architecture is not explicitly governed and protected.

### Manual oversight

People reviewing every change by hand does not scale, and it misses the real issue: the lack of governed context and of a decision boundary.

## What GTT does about it

Human decides, GTT governs, Agent/ADE executes within the boundary.

GTT does not try to make agents smarter, and it does not make them less capable. It makes their capability operate inside an explicit, traceable, efficient, deterministic and human-governed boundary: it governs what context and evidence an agent may rely on, and what changes an agent or ADE may cause to governed project state.

- How it works: https://gtt-method.org/approach/
- The methodology: https://gtt-method.org/methodology/
- Frequent questions: https://gtt-method.org/faq/`,
    contentEs: `Los agentes de IA escriben software rápido. No saben qué ha decidido tu proyecto.

Los agentes de IA pueden implementar funcionalidades completas en minutos. Pero desarrollar software es más que generar código: es mantener un sistema coherente con las decisiones, la arquitectura y las restricciones que su equipo aceptó. Estos son los problemas que aparecen cuando los agentes participan en el desarrollo sin gobernanza, y lo que GTT hace frente a cada uno.

## El razonamiento del agente se convierte en autoridad del proyecto

Un agente razona, llega a una conclusión y la aplica. Nadie la aprobó, pero ya es parte del sistema. Repetido sesión tras sesión, el agente termina decidiendo la arquitectura por omisión.

GTT separa el razonamiento de la autoridad de decisión: el razonamiento de un agente no es autorización de cambio. Los agentes analizan y proponen; un humano aprueba, rechaza o modifica. Una propuesta solo pasa a ser parte del proyecto mediante una decisión humana.

## Evidencia, supuestos y conjeturas se ven iguales

La respuesta de un agente mezcla lo que dicen las fuentes del proyecto con lo que el agente infirió o inventó, y los vacíos y contradicciones se resuelven en silencio. Quien lee no puede distinguir una cosa de otra.

GTT establece una frontera de evidencia. Las fuentes autorizadas pasan por grounding y se consolidan en un dossier de evidencia, y los marcadores de procedencia distinguen la evidencia con fuente, los vacíos, los conflictos y las propuestas. Un conflicto entre fuentes se expone, nunca se resuelve en silencio.

## Desviación arquitectónica

Cambios individualmente razonables generados por IA alejan gradualmente al sistema de su diseño previsto, y nadie lo nota hasta que deshacerlo es caro.

GTT hace explícita la intención arquitectónica mediante ADRs, especificaciones, reglas, restricciones y estado gobernado, de modo que la desviación se expone en lugar de aceptarse en silencio.

## Las decisiones aceptadas se reabren sin que nadie lo decida

Lo que el equipo acordó la semana pasada se reescribe esta semana sin aviso, porque nada lo marca como resuelto.

En GTT, el freeze establece una frontera alrededor del estado gobernado aceptado. Después de un freeze, un cambio sigue un camino gobernado: solicitud de cambio, análisis de impacto, THINK, propuesta, decisión humana y un nuevo freeze. No existe "unfreeze".

## El código crítico se modifica de forma autónoma

Sin límites explícitos, un agente puede reescribir un cálculo de pagos, un control de seguridad o una frontera arquitectónica como efecto secundario de una tarea no relacionada.

GTTGuard protege archivos, clases y métodos. El agente puede seguir leyendo, analizando y proponiendo cambios a un artefacto protegido, pero el cambio requiere aprobación humana explícita. GTT Enforcement evalúa las operaciones que afectan el estado gobernado contra las reglas aplicables antes de que se conviertan en cambios aceptados.

## Demasiado contexto, no solo muy poco

Los agentes pierden contexto importante durante una sesión, y el remedio habitual es cargarlo todo. Eso llena la ventana de contexto con material irrelevante, duplicado y contradictorio, cuesta tokens y permite que texto no relacionado actúe como si fuera autoridad.

GTT trata la eficiencia de contexto como un asunto de gobernanza. Distingue el Contexto Gobernado, el cuerpo autoritativo de información, del Contexto de Ejecución, el subconjunto mínimo relevante seleccionado para una operación. El principio es contexto gobernado mínimo suficiente, no el máximo disponible, y reducir el contexto nunca elimina una restricción, decisión o protección aplicable.

## Sin continuidad entre sesiones

El contexto establecido en una sesión se pierde en la siguiente, así que las personas vuelven a explicar las mismas restricciones, o confían en una memoria que el agente escribió para sí mismo y la tratan como verdad.

GTT genera el estado de sesión a partir del estado real del proyecto: historial de Git, último freeze, propuestas y solicitudes de cambio activas, ítems abiertos y estado de validación. Ese estado es un traspaso operativo, no autoridad, y es portable entre ADEs.

## Decisiones inconsistentes entre prompts y sesiones

Distintos prompts y sesiones producen implementaciones distintas de la misma funcionalidad o patrón, y se rompe la consistencia.

Como cada sesión trabaja desde el mismo contexto gobernado y las mismas decisiones congeladas, la respuesta depende del proyecto y no de cómo se redactó el prompt.

## Gobernanza que depende de una IA supervisando a otra IA

Pedirle a un modelo que revise a otro da una respuesta probabilística a una pregunta que muchas veces tiene una respuesta determinista.

GTT valida de forma determinista todo lo que puede expresarse como regla: artefactos protegidos, rutas de propuestas, estructura de procedencia, ítems bloqueantes sin resolver y consistencia del freeze y del estado gobernado. La máquina verifica si la estructura de gobernanza es válida; el humano juzga si la decisión arquitectónica es correcta.

## Gobernanza atada a una sola herramienta

Las reglas escritas en la memoria, los hooks o los archivos de instrucciones de un entorno de desarrollo con IA dejan de aplicar cuando el equipo usa otro, y cada herramienta termina con su propia versión de la verdad.

GTT es independiente de cualquier agente o ADE. Cada ADE se conecta mediante un adaptador que traduce sus operaciones al contrato de GTT, y varios ADEs pueden trabajar en el mismo proyecto bajo un único modelo de gobernanza.

## El problema de fondo

El problema fundamental no es que los agentes generen código incorrecto.

Los agentes operan sobre contexto → el contexto puede ser incompleto, inconsistente, obsoleto, ambiguo o no controlado → el comportamiento se vuelve impredecible. Y cuando nada separa el razonamiento de la autoridad, ese comportamiento impredecible se convierte en el estado aceptado del proyecto.

## Por qué los enfoques tradicionales son insuficientes

Revisar la salida del agente después de generada es reactivo y no aborda la causa raíz.

### Solo code review

Revisar la salida no cambia aquello desde lo que el agente trabaja la próxima vez. El mismo problema vuelve en la sesión siguiente.

### Mejores prompts

Prompts más detallados ayudan temporalmente, pero no son persistentes, revisables ni exigibles.

### Confiar en el agente

Confiar en que el agente "seguirá la arquitectura" no funciona cuando la arquitectura no está explícitamente gobernada y protegida.

### Supervisión manual

Que las personas revisen cada cambio a mano no escala, y deja fuera el problema real: la falta de contexto gobernado y de una frontera de decisión.

## Lo que GTT hace al respecto

El humano decide, GTT gobierna, el agente/ADE ejecuta dentro de la frontera.

GTT no intenta hacer más inteligentes a los agentes, ni los hace menos capaces. Hace que su capacidad opere dentro de una frontera explícita, trazable, eficiente, determinista y gobernada por humanos: gobierna en qué contexto y evidencia puede apoyarse un agente, y qué cambios puede causar un agente o ADE en el estado gobernado del proyecto.

- Cómo funciona: https://gtt-method.org/approach/
- La metodología: https://gtt-method.org/methodology/
- Preguntas frecuentes: https://gtt-method.org/faq/`,
    searchableEn: "problem architectural drift context loss context overload uncontrolled changes inconsistent decisions governance gap agent authority evidence provenance freeze GTTGuard session continuity vendor lock-in",
    searchableEs: "problema desviación arquitectónica pérdida de contexto exceso de contexto cambios incontrolados decisiones inconsistentes brecha de gobernanza autoridad del agente evidencia procedencia freeze GTTGuard continuidad de sesión",
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

This page is not a command reference. Installation and command details are on the GTT CLI page: https://gtt-method.org/cli/

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
- Install and operate with the CLI: https://gtt-method.org/cli/

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

Esta página no es una referencia de comandos. La instalación y el detalle de cada comando están en la página de GTT CLI: https://gtt-method.org/cli/

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
- Instala y opera con la CLI: https://gtt-method.org/cli/

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
    descriptionEn: "Direct answers about GTT-Method: what it is, how its governance and control plane work, THINK, GTTGuard, enforcement, context efficiency, session continuity, GTT Bootstrap, GTT CLI, ADEs and how to start.",
    descriptionEs: "Respuestas directas sobre GTT-Method: qué es, cómo funcionan su gobernanza y su plano de control, THINK, GTTGuard, enforcement, eficiencia de contexto, continuidad de sesión, GTT Bootstrap, GTT CLI, los ADEs y cómo empezar.",
    contentEn: `## What is GTT-Method?

GTT-Method (Governance Through Thinking) is an open-source methodology and governance control plane for governed AI-assisted software development. It establishes the context, evidence, architectural intent, governance rules, decision boundaries, controlled change, protection, validation and session continuity that let AI agents and ADEs take part in software development without becoming the authority over the system.

Its central distinction is that agent reasoning is not change authorization: agents analyze, propose and implement within the authority GTT grants, and the human remains the authority for governed decisions.

GTT is implemented through GTT Bootstrap and operated through GTT CLI. Its canonical definition is https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

## Which version of GTT is current?

GTT 2.1 is the current released generation, defined by a single canonical document. Anything that document does not define is not a GTT 2.1 capability, even if it appears in code, a website, a prompt or a proposal. Future generations are defined separately and are not current until formally released.

## What problem does GTT-Method solve?

AI agents produce software quickly, and a sequence of individually reasonable changes can move a system away from the architecture and decisions the team intended. Agent reasoning can also silently turn into project authority. GTT keeps evidence, proposals and decisions apart, makes architectural intent explicit, and requires changes to a frozen state to follow a governed change path.

## How does GTT governance work?

The operating model is: Human decides, GTT governs, Agent/ADE executes within the boundary.

Authorized sources are grounded into an evidence dossier. Agents reason over that evidence and produce proposals, marking gaps and conflicts instead of resolving them silently. A human decides. Freeze establishes the accepted governed state.

GTT therefore governs two things: what context and evidence an agent may rely on, and what changes an agent or ADE may cause to governed project state.

## What is the GTT Control Plane?

The Control Plane is the logical layer that sits between the human and the ADE or agent. It provides context selection, evidence handling, validation, protection, proposal handling, governed state and freeze, session continuity, status and policy enforcement.

It is an architectural concept, not a network service: GTT does not need to be deployed as a server. It does not replace the human decision boundary.

## What is THINK in GTT?

THINK is the reasoning mode of GTT. In THINK, agents analyze the evidence, identify gaps and conflicts and produce proposals; they do not decide. THINK is not a one-time phase: the project re-enters it whenever a change requires governance.

## How do I change something after a freeze?

Through the governed change path: change request, impact analysis, THINK, proposal, human decision, and a new governed state with a new freeze. There is no "unfreeze", and an item left OPEN does not authorize a change; resolving it is a new decision that follows the same path.

## What is GTTGuard?

GTTGuard is the GTT capability that protects files, classes and methods from autonomous modification. The developer declares the protection on the source artifact itself, for example with a @GTTGuard annotation, and GTT normalizes it into a machine-readable registry that records what is protected, why, under which policy and where the protection originated.

GTTGuard does not hide code from agents; it protects the authority to change it. An agent may read, analyze and propose changes to a protected artifact, and the proposal is written under gtt/proposals/ for a human to approve, reject or modify. The current policy is HUMAN_APPROVAL.

## What is GTT Enforcement?

Enforcement is the application of already-defined GTT governance rules to the operations an agent or ADE requests. An operation that affects governed state is evaluated against the actor, the artifact, the governed state, the protection policy and the applicable constraints, and is either allowed or answered with a proposal or governance response.

Enforcement applies rules that already exist. It does not create a new architectural decision and it does not transfer decision authority from the human to an agent.

## Is GTT a security layer?

No. GTTGuard and GTT Enforcement are methodology-level change authorization. They do not replace filesystem permissions, Git permissions, branch protection, CI/CD authorization or production access controls.

## Does GTT load the whole project context into every agent session?

No. GTT distinguishes the Governed Context, the authoritative body of information, from the Execution Context, the minimum relevant subset selected for a specific operation. The principle is minimum sufficient governed context, not maximum available context.

This reduces irrelevant token consumption, duplicated or conflicting copies and context-window pressure. Context reduction must never remove an applicable constraint, decision, protection or required evidence.

## How does GTT keep continuity between sessions?

Session state is generated from actual project and GTT state: Git history, the last freeze, active proposals and change requests, OPEN items and validation status. It is not an agent-authored memory, and it is portable across ADEs. In GTT CLI, gtt resume produces the session context and gtt status reports where the project stands.

Session state is an operational handoff, not authority. It is not evidence, an ADR or a governed decision, and it complements the native memory of each ADE without depending on it.

## What does GTT validate, and what does it leave to people?

GTT validates deterministically whatever can be expressed as a rule: protected artifacts, proposal paths, provenance structure, unresolved blocking items, freeze and governed state consistency, required artifacts and the integrity of GTT metadata.

It does not claim to judge semantic architectural correctness. The machine answers whether the governance structure is valid; the human answers whether the architectural decision is correct.

## What is GTT Bootstrap?

GTT Bootstrap is the reference implementation of the GTT Method. It holds the GTT semantics and the versioned contracts that make GTT executable in a real project: governance, evidence and provenance, proposals and decisions, deterministic validation, freeze, ADE integrations, status and session context.

Repository: https://github.com/GTT-Community/gtt-bootstrap

## What is GTT CLI?

GTT CLI is the operational tool of GTT: a single gtt binary for Linux, macOS and Windows that finds, installs, configures, validates, updates, resumes, freezes, exports and recovers GTT projects through the Bootstrap contracts. It contains no GTT methodology of its own, it is not a second GTT engine, and every command is deterministic, so it needs no LLM.

Install and command details: https://gtt-method.org/cli/

## What are Method Plans?

Method Plans (Light, Medium, Hard and Team) decide how much GTT does without asking you. Whatever the plan, destructive operations and governed decisions always need a human. You choose the plan in gtt init and can review or change it with gtt method.

## How does GTT relate to AI agents and ADEs?

An ADE (AI Development Environment) such as Claude Code, GitHub Copilot, Codex or Kiro is the execution environment, and the agent provides reasoning and execution capability. GTT provides the governance boundary. Each ADE is connected through an adapter that translates its operations into the GTT contract; an adapter never redefines GTT.

Several ADEs can participate in one project under a single governance model, with exactly one Primary ADE, which is a workflow role and carries no governance authority. An ADE being detected on your machine does not make it a participant: GTT installs only the integrations you choose.

## Is GTT-Method an AI coding agent?

No. GTT is not an LLM, not an agent framework and not an IDE. It does not replace your ADE, its native memory or its instruction files; it governs how agents and ADEs take part in development.

## Is GTT-Method a replacement for Spec-Driven Development?

No. GTT-Method complements SDD. SDD defines what to build; GTT-Method governs the context and boundaries that guide an AI agent while building it.

## Does GTT-Method depend on one vendor?

No. GTT is independent of any particular agent or ADE, and does not require the memory, hook or permission system of any of them. GTT Bootstrap currently ships integrations for Claude Code, GitHub Copilot, Codex and Kiro.

## Can I use GTT in CI?

Yes. GTT CLI is built for pipelines: gtt validate --ci runs the Bootstrap validation, and the CLI offers JSON output, a no-input mode and stable exit codes. Freeze is never unattended; it is always a human act.

## How do I start a GTT project?

Install GTT CLI, then run gtt init inside your project. It resolves and verifies GTT Bootstrap, asks which ADEs participate and which one is Primary, the language, the Method Plan and your initial design documents, installs, validates and hands off to your Primary ADE. If you have no design document, your ADE guides you through the Initial Design Questionnaire.

The Primary ADE drafts the governed context for your review, and once you confirm it you freeze it with gtt freeze.

- Install the CLI: https://gtt-method.org/cli/
- Or bootstrap with prompts from your ADE: https://gtt-method.org/prompts/

## Where are the GTT terms defined?

In the glossary: https://gtt-method.org/glossary/

## What licenses does GTT use?

GTT Method and GTT CLI are Apache-2.0. GTT Bootstrap and this website are MIT.

## Where do I report a bug or propose an idea?

On the community board: https://gtt-method.feedlog.ai/ or in the GitHub repositories: https://github.com/orgs/GTT-Community/repositories`,
    contentEs: `## ¿Qué es GTT-Method?

GTT-Method (Governance Through Thinking) es una metodología de código abierto y un plano de control de gobernanza para el desarrollo de software asistido por IA, gobernado. Establece el contexto, la evidencia, la intención arquitectónica, las reglas de gobernanza, las fronteras de decisión, el cambio controlado, la protección, la validación y la continuidad de sesión que permiten que agentes de IA y ADEs participen en el desarrollo sin convertirse en la autoridad sobre el sistema.

Su distinción central es que el razonamiento de un agente no es autorización de cambio: los agentes analizan, proponen e implementan dentro de la autoridad que GTT les otorga, y el humano sigue siendo la autoridad en las decisiones gobernadas.

GTT se implementa mediante GTT Bootstrap y se opera mediante GTT CLI. Su definición canónica es https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

## ¿Cuál es la versión vigente de GTT?

GTT 2.1 es la generación publicada vigente, definida por un único documento canónico. Lo que ese documento no define no es una capacidad de GTT 2.1, aunque aparezca en código, en un sitio web, en un prompt o en una propuesta. Las generaciones futuras se definen por separado y no son vigentes hasta su publicación formal.

## ¿Qué problema resuelve GTT-Method?

Los agentes de IA producen software rápido, y una secuencia de cambios individualmente razonables puede alejar al sistema de la arquitectura y de las decisiones que el equipo quería. Además, el razonamiento de un agente puede convertirse silenciosamente en autoridad del proyecto. GTT mantiene separadas la evidencia, las propuestas y las decisiones, hace explícita la intención arquitectónica y exige que los cambios a un estado congelado sigan un camino de cambio gobernado.

## ¿Cómo funciona la gobernanza de GTT?

El modelo operativo es: el humano decide, GTT gobierna, el agente/ADE ejecuta dentro de la frontera.

Las fuentes autorizadas pasan por grounding y se consolidan en un dossier de evidencia. Los agentes razonan sobre esa evidencia y producen propuestas, marcando vacíos y conflictos en lugar de resolverlos en silencio. Un humano decide. El freeze establece el estado gobernado aceptado.

GTT gobierna, por tanto, dos cosas: en qué contexto y evidencia puede apoyarse un agente, y qué cambios puede causar un agente o ADE en el estado gobernado del proyecto.

## ¿Qué es el Plano de Control de GTT?

El Plano de Control (GTT Control Plane) es la capa lógica que se ubica entre el humano y el ADE o agente. Provee selección de contexto, manejo de evidencia, validación, protección, manejo de propuestas, estado gobernado y freeze, continuidad de sesión, estado y aplicación de políticas.

Es un concepto arquitectónico, no un servicio de red: GTT no necesita desplegarse como servidor. No reemplaza la frontera de decisión humana.

## ¿Qué es THINK en GTT?

THINK es el modo de razonamiento de GTT. En THINK los agentes analizan la evidencia, identifican vacíos y conflictos y producen propuestas; no deciden. THINK no es una fase que ocurre una sola vez: el proyecto vuelve a entrar en él cada vez que un cambio requiere gobernanza.

## ¿Cómo cambio algo después de un freeze?

Por el camino de cambio gobernado: solicitud de cambio, análisis de impacto, THINK, propuesta, decisión humana y un nuevo estado gobernado con un nuevo freeze. No existe "unfreeze", y un ítem que quedó OPEN no autoriza un cambio; resolverlo es una decisión nueva que sigue el mismo camino.

## ¿Qué es GTTGuard?

GTTGuard es la capacidad de GTT que protege archivos, clases y métodos frente a la modificación autónoma. El desarrollador declara la protección en el propio artefacto fuente, por ejemplo con una anotación @GTTGuard, y GTT la normaliza en un registro legible por máquina que indica qué está protegido, por qué, bajo qué política y dónde se originó la protección.

GTTGuard no oculta el código a los agentes; protege la autoridad para cambiarlo. Un agente puede leer, analizar y proponer cambios a un artefacto protegido, y la propuesta se escribe en gtt/proposals/ para que un humano la apruebe, la rechace o la modifique. La política vigente es HUMAN_APPROVAL.

## ¿Qué es GTT Enforcement?

Enforcement es la aplicación de reglas de gobernanza de GTT ya definidas a las operaciones que solicita un agente o ADE. Una operación que afecta el estado gobernado se evalúa contra el actor, el artefacto, el estado gobernado, la política de protección y las restricciones aplicables, y se permite o se responde con una propuesta o una respuesta de gobernanza.

Enforcement aplica reglas que ya existen. No crea una decisión arquitectónica nueva ni transfiere la autoridad de decisión del humano a un agente.

## ¿Es GTT una capa de seguridad?

No. GTTGuard y GTT Enforcement son autorización de cambio a nivel de metodología. No reemplazan los permisos del sistema de archivos, los permisos de Git, la protección de ramas, la autorización de CI/CD ni los controles de acceso a producción.

## ¿GTT carga todo el contexto del proyecto en cada sesión del agente?

No. GTT distingue el Contexto Gobernado, el cuerpo autoritativo de información, del Contexto de Ejecución, el subconjunto mínimo relevante seleccionado para una operación concreta. El principio es contexto gobernado mínimo suficiente, no el máximo disponible.

Esto reduce el consumo de tokens irrelevantes, las copias duplicadas o en conflicto y la presión sobre la ventana de contexto. Reducir el contexto nunca puede eliminar una restricción, decisión, protección o evidencia requerida que sea aplicable.

## ¿Cómo mantiene GTT la continuidad entre sesiones?

El estado de sesión se genera a partir del estado real del proyecto y de GTT: historial de Git, último freeze, propuestas y solicitudes de cambio activas, ítems OPEN y estado de validación. No es una memoria redactada por un agente, y es portable entre ADEs. En GTT CLI, gtt resume produce el contexto de sesión y gtt status informa dónde está el proyecto.

El estado de sesión es un traspaso operativo, no autoridad. No es evidencia, ni un ADR, ni una decisión gobernada, y complementa la memoria nativa de cada ADE sin depender de ella.

## ¿Qué valida GTT y qué deja a las personas?

GTT valida de forma determinista todo lo que puede expresarse como regla: artefactos protegidos, rutas de propuestas, estructura de procedencia, ítems bloqueantes sin resolver, consistencia del freeze y del estado gobernado, artefactos requeridos e integridad de los metadatos de GTT.

No pretende juzgar si una arquitectura es semánticamente correcta. La máquina responde si la estructura de gobernanza es válida; el humano responde si la decisión arquitectónica es correcta.

## ¿Qué es GTT Bootstrap?

GTT Bootstrap es la implementación de referencia del Método GTT. Contiene la semántica de GTT y los contratos versionados que lo hacen ejecutable en un proyecto real: gobernanza, evidencia y procedencia, propuestas y decisiones, validación determinista, freeze, integraciones con ADEs, estado y contexto de sesión.

Repositorio: https://github.com/GTT-Community/gtt-bootstrap

## ¿Qué es GTT CLI?

GTT CLI es la herramienta operacional de GTT: un único binario gtt para Linux, macOS y Windows que encuentra, instala, configura, valida, actualiza, reanuda, congela, exporta y recupera proyectos GTT a través de los contratos del Bootstrap. No contiene metodología GTT propia, no es un segundo motor GTT, y todos sus comandos son deterministas, por lo que no necesita un LLM.

Instalación y comandos: https://gtt-method.org/cli/

## ¿Qué son los Method Plans?

Los Method Plans (Light, Medium, Hard y Team) definen cuánto hace GTT sin preguntarte. Sea cual sea el plan, las operaciones destructivas y las decisiones gobernadas siempre requieren a un humano. Eliges el plan en gtt init y puedes revisarlo o cambiarlo con gtt method.

## ¿Cómo se relaciona GTT con los agentes de IA y los ADEs?

Un ADE (AI Development Environment) como Claude Code, GitHub Copilot, Codex o Kiro es el entorno de ejecución, y el agente aporta la capacidad de razonamiento y ejecución. GTT aporta la frontera de gobernanza. Cada ADE se conecta mediante un adaptador que traduce sus operaciones al contrato de GTT; un adaptador nunca redefine GTT.

Varios ADEs pueden participar en un mismo proyecto bajo un único modelo de gobernanza, con exactamente un ADE Primario, que es un rol de flujo de trabajo y no otorga autoridad de gobernanza. Que un ADE esté detectado en tu máquina no lo convierte en participante: GTT instala solo las integraciones que eliges.

## ¿Es GTT-Method un agente de programación con IA?

No. GTT no es un LLM, ni un framework de agentes, ni un IDE. No reemplaza a tu ADE, ni su memoria nativa, ni sus archivos de instrucciones; gobierna cómo los agentes y los ADEs participan en el desarrollo.

## ¿Es GTT-Method un reemplazo de Spec-Driven Development?

No. GTT-Method complementa a SDD. SDD define qué construir; GTT-Method gobierna el contexto y las fronteras que guían a un agente de IA mientras lo construye.

## ¿GTT-Method depende de un proveedor?

No. GTT es independiente de cualquier agente o ADE en particular, y no requiere el sistema de memoria, hooks o permisos de ninguno de ellos. GTT Bootstrap incluye hoy integraciones para Claude Code, GitHub Copilot, Codex y Kiro.

## ¿Puedo usar GTT en CI?

Sí. GTT CLI está hecho para pipelines: gtt validate --ci ejecuta la validación del Bootstrap, y la CLI ofrece salida JSON, un modo sin entrada interactiva y códigos de salida estables. El freeze nunca es desatendido; siempre es un acto humano.

## ¿Cómo empiezo un proyecto GTT?

Instala GTT CLI y ejecuta gtt init dentro de tu proyecto. Resuelve y verifica GTT Bootstrap, pregunta qué ADEs participan y cuál es el Primario, el idioma, el Method Plan y tus documentos iniciales de diseño, instala, valida y entrega el control a tu ADE Primario. Si no tienes un documento de diseño, tu ADE te guía por el Cuestionario de Diseño Inicial.

El ADE Primario redacta el contexto gobernado para tu revisión y, una vez que lo confirmas, lo congelas con gtt freeze.

- Instalar la CLI: https://gtt-method.org/cli/
- O hacer el bootstrap con prompts desde tu ADE: https://gtt-method.org/prompts/

## ¿Dónde están definidos los términos de GTT?

En el glosario: https://gtt-method.org/glossary/

## ¿Qué licencias usa GTT?

GTT Method y GTT CLI son Apache-2.0. GTT Bootstrap y este sitio web son MIT.

## ¿Dónde reporto un bug o propongo una idea?

En el tablero de la comunidad: https://gtt-method.feedlog.ai/ o en los repositorios de GitHub: https://github.com/orgs/GTT-Community/repositories`,
    searchableEn: "faq frequently asked questions GTT-Method methodology concepts control plane enforcement GTTGuard context efficiency session continuity validation method plans CI",
    searchableEs: "preguntas frecuentes FAQ GTT-Method metodología conceptos plano de control enforcement GTTGuard eficiencia de contexto continuidad de sesión validación method plans CI",
  },
  {
    slug: "glossary",
    titleEn: "GTT Glossary",
    titleEs: "Glosario GTT",
    descriptionEn: "Definitions of the GTT-Method terms: governed context, evidence boundary, THINK, proposal, freeze, GTTGuard, ADE, Primary ADE, GTT Bootstrap, GTT CLI and more.",
    descriptionEs: "Definiciones de los términos de GTT-Method: contexto gobernado, frontera de evidencia, THINK, propuesta, freeze, GTTGuard, ADE, ADE Primario, GTT Bootstrap, GTT CLI y más.",
    contentEn: `The terms GTT uses, each with one definition. Definitions follow the GTT Canonical v2.1 and the published GTT Bootstrap and GTT CLI documentation; where this page and the canonical differ, the canonical is right: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

## Method, implementation and tooling

### GTT / GTT-Method

GTT (Governance Through Thinking) is a methodology and governance control plane for governed AI-assisted software development. It lets AI agents and ADEs take part in software development without becoming the authority over the system.

### GTT Canonical

The single canonical definition of the current GTT generation (GTT 2.1). If an implementation, website, manual or CLI contradicts it, the contradiction must be surfaced and resolved. Source: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

### GTT Bootstrap

The reference implementation of the GTT Method. It owns the GTT semantics and exposes them through versioned contracts. See https://gtt-method.org/methodology/

### GTT CLI

The operational surface of GTT: the gtt command-line tool that installs, validates, operates, updates, exports and recovers GTT projects through the Bootstrap contracts. It is not a second GTT engine. See https://gtt-method.org/cli/

### Method Plan

The operating profile chosen for a project: Light, Medium, Hard or Team. It sets how much operational work is delegated to GTT. It is not a quality level, and no plan turns governance off.

## Context and evidence

### Governed Context

The controlled, authoritative body of information used to understand and reason about a system: requirements, architecture, ADRs, rules, constraints, approved decisions, evidence and governed state.

### Execution Context

The minimum relevant subset of the governed context that GTT selects for a specific operation, task, artifact or decision.

### Evidence Boundary

The separation between authorized sources, grounding, the evidence dossier, reasoning, proposals, human decision and governed artifacts. Agents reason over governed evidence instead of treating arbitrary context as authority.

### Grounding

The step that retrieves and exposes evidence from authorized sources. Grounding does not decide architecture.

### Evidence Dossier

The consolidated evidence available for reasoning. It is a governed representation of evidence, not a source of authority, and it exposes conflicts instead of resolving them silently.

### Provenance

The traceable relationship between a statement and its supporting evidence. GTT uses explicit markers to distinguish evidence, missing information, conflicts and proposals.

### Architectural Intent

The intended architecture and design decisions of the system, expressed through ADRs, specifications, rules, constraints and governed state. Architectural drift must be surfaced, not silently accepted.

## Reasoning, decision and change

### THINK

The reasoning mode of GTT. Agents analyze evidence, identify gaps and conflicts and produce proposals. THINK is re-entrant: the project returns to it whenever a change requires governance.

### Proposal

A change identified by an agent that requires human authority. A proposal makes the intended change explicit so a human can decide; it is not a decision.

### Human Decision Boundary

The explicit separation between reasoning and decision authority. A human may approve, reject, modify or request further analysis of a proposal. Agent reasoning is not change authorization.

### ADR

Architecture Decision Record: the record of a governed architectural decision.

### Governed State

An accepted state of the project.

### Freeze

The boundary established around an accepted governed state. After freeze, changes follow a governed change path. There is no implicit or autonomous unfreeze.

### Change Request

The entry point for changing a frozen state: change request, impact analysis, THINK, proposal, human decision, new governed state and freeze.

### GTTGuard

The GTT capability that protects artifacts (files, classes, methods) from autonomous modification. It protects the authority to change code; it does not hide code from agents.

### Validation

Deterministic checks of the GTT project, run by Bootstrap rather than left to the judgment of an agent.

## ADEs and sessions

### ADE

AI Development Environment: the environment in which an agent executes development work, for example Claude Code, GitHub Copilot, Codex or Kiro. The ADE executes; GTT governs.

### Agent

The reasoning and execution capability working inside an ADE. An agent may analyze, propose and implement within the authority granted by GTT.

### ADE Adapter

The GTT integration surface installed for a participating ADE. Adapters let an ADE take part in GTT and never become an authority of their own.

### Primary ADE

The one participating ADE chosen as the principal workflow environment of a project. It is a workflow identity and carries no governance authority.

### Session Continuity

The ability to resume work from session state that GTT derives from actual project state. Session state is operational orientation, not architectural authority.

### Clean Export

A clean delivery copy of the project without GTT-owned material, produced without modifying the development project.

### Recovery Snapshot

The portable information needed to reconstruct a GTT installation and its operational state. It is not a full repository backup.

## Related pages

- Methodology: https://gtt-method.org/methodology/
- FAQ: https://gtt-method.org/faq/
- GTT CLI: https://gtt-method.org/cli/`,
    contentEs: `Los términos que usa GTT, cada uno con una sola definición. Las definiciones siguen el GTT Canonical v2.1 y la documentación publicada de GTT Bootstrap y GTT CLI; si esta página y el canónico difieren, el canónico tiene razón: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

## Método, implementación y herramientas

### GTT / GTT-Method

GTT (Governance Through Thinking) es una metodología y un plano de control de gobernanza para el desarrollo de software asistido por IA, gobernado. Permite que agentes de IA y ADEs participen en el desarrollo sin convertirse en la autoridad sobre el sistema.

### GTT Canonical

La única definición canónica de la generación actual de GTT (GTT 2.1). Si una implementación, un sitio web, un manual o la CLI la contradicen, la contradicción debe exponerse y resolverse. Fuente: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

### GTT Bootstrap

La implementación de referencia del GTT Method. Es dueña de la semántica GTT y la expone a través de contratos versionados. Ver https://gtt-method.org/methodology/

### GTT CLI

La superficie operativa de GTT: la herramienta de línea de comandos gtt que instala, valida, opera, actualiza, exporta y recupera proyectos GTT a través de los contratos de Bootstrap. No es un segundo motor de GTT. Ver https://gtt-method.org/cli/

### Method Plan

El perfil operativo elegido para un proyecto: Light, Medium, Hard o Team. Define cuánto trabajo operativo se delega a GTT. No es un nivel de calidad, y ningún plan apaga la gobernanza.

## Contexto y evidencia

### Governed Context

El cuerpo de información controlado y con autoridad que se usa para entender y razonar sobre un sistema: requisitos, arquitectura, ADRs, reglas, restricciones, decisiones aprobadas, evidencia y estado gobernado.

### Execution Context

El subconjunto mínimo y relevante del contexto gobernado que GTT selecciona para una operación, tarea, artefacto o decisión específica.

### Evidence Boundary

La separación entre fuentes autorizadas, grounding, el dossier de evidencia, razonamiento, propuestas, decisión humana y artefactos gobernados. Los agentes razonan sobre evidencia gobernada en lugar de tratar cualquier contexto como autoridad.

### Grounding

El paso que recupera y expone evidencia a partir de fuentes autorizadas. El grounding no decide arquitectura.

### Evidence Dossier

La evidencia consolidada disponible para razonar. Es una representación gobernada de la evidencia, no una fuente de autoridad, y expone los conflictos en lugar de resolverlos en silencio.

### Provenance

La relación trazable entre una afirmación y la evidencia que la respalda. GTT usa marcadores explícitos para distinguir evidencia, información faltante, conflictos y propuestas.

### Architectural Intent

La arquitectura y las decisiones de diseño previstas para el sistema, expresadas en ADRs, especificaciones, reglas, restricciones y estado gobernado. La deriva arquitectónica debe exponerse, no aceptarse en silencio.

## Razonamiento, decisión y cambio

### THINK

El modo de razonamiento de GTT. Los agentes analizan la evidencia, identifican vacíos y conflictos y producen propuestas. THINK es reentrante: el proyecto vuelve a él cada vez que un cambio requiere gobernanza.

### Proposal

Un cambio identificado por un agente que requiere autoridad humana. Una propuesta hace explícito el cambio previsto para que un humano decida; no es una decisión.

### Human Decision Boundary

La separación explícita entre el razonamiento y la autoridad de decisión. Un humano puede aprobar, rechazar, modificar o pedir más análisis de una propuesta. El razonamiento de un agente no es autorización de cambio.

### ADR

Architecture Decision Record: el registro de una decisión arquitectónica gobernada.

### Governed State

Un estado aceptado del proyecto.

### Freeze

La frontera que se establece alrededor de un estado gobernado aceptado. Después del freeze, los cambios siguen un camino de cambio gobernado. No existe un unfreeze implícito ni autónomo.

### Change Request

El punto de entrada para cambiar un estado congelado: solicitud de cambio, análisis de impacto, THINK, propuesta, decisión humana, nuevo estado gobernado y freeze.

### GTTGuard

La capacidad de GTT que protege artefactos (archivos, clases, métodos) de la modificación autónoma. Protege la autoridad para cambiar el código; no oculta el código a los agentes.

### Validation

Comprobaciones determinísticas del proyecto GTT, ejecutadas por Bootstrap en lugar de quedar a criterio de un agente.

## ADEs y sesiones

### ADE

AI Development Environment (Entorno de Desarrollo con IA): el entorno en el que un agente ejecuta el trabajo de desarrollo, por ejemplo Claude Code, GitHub Copilot, Codex o Kiro. El ADE ejecuta; GTT gobierna.

### Agent

La capacidad de razonamiento y ejecución que trabaja dentro de un ADE. Un agente puede analizar, proponer e implementar dentro de la autoridad que le otorga GTT.

### ADE Adapter

La superficie de integración GTT que se instala para un ADE participante. Los adaptadores permiten que un ADE participe en GTT y nunca se convierten en una autoridad propia.

### Primary ADE

El ADE participante elegido como entorno principal de flujo de trabajo de un proyecto. Es una identidad de flujo de trabajo y no tiene autoridad de gobernanza.

### Session Continuity

La capacidad de retomar el trabajo a partir de un estado de sesión que GTT deriva del estado real del proyecto. El estado de sesión es orientación operativa, no autoridad arquitectónica.

### Clean Export

Una copia de entrega limpia del proyecto, sin el material propiedad de GTT, producida sin modificar el proyecto de desarrollo.

### Recovery Snapshot

La información portable necesaria para reconstruir una instalación GTT y su estado operativo. No es un respaldo completo del repositorio.

## Páginas relacionadas

- Metodología: https://gtt-method.org/methodology/
- Preguntas frecuentes: https://gtt-method.org/faq/
- GTT CLI: https://gtt-method.org/cli/`,
    searchableEn: "glossary terms definitions governed context execution context evidence boundary grounding dossier provenance THINK proposal freeze change request GTTGuard ADE Primary ADE Method Plan session continuity",
    searchableEs: "glosario términos definiciones contexto gobernado contexto de ejecución frontera de evidencia grounding dossier procedencia THINK propuesta freeze solicitud de cambio GTTGuard ADE Primario Method Plan continuidad de sesión",
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
