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

// A paragraph holding only this marker is where the page renders its full-width
// methodology section; the content before and after it flows around that section.
export const METHODOLOGY_SECTION_MARKER = "{{methodology-section}}";

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

## Method Governance

Choose your development method and GTT enforces it. At setup you choose how you want to develop (Vertical Slice, DDD, Hexagonal...). GTT designs your Epics with that method, ratifies it in the governed context and checks that the design follows it.

\`\`\`
declare  ->  ratify  ->  verify
\`\`\`

The design and the backlog are checked at the freeze, and gtt check verifies the code with the language's own tool: JavaScript and TypeScript today, other languages declared-only. Details: https://gtt-method.org/development-methods/

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
- GTT Bootstrap: Apache-2.0
- GTT CLI: Apache-2.0
- This website: Apache-2.0`,
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

## Method Governance

Elige tu método de desarrollo y GTT lo hace cumplir. En el seteo eliges cómo quieres desarrollar (Vertical Slice, DDD, Hexagonal...). GTT diseña tus Epics con ese método, lo ratifica en el contexto gobernado y verifica que el diseño lo respete.

\`\`\`
declarar  ->  ratificar  ->  verificar
\`\`\`

El diseño y el backlog se verifican en el freeze, y gtt check verifica el código con la herramienta propia del lenguaje: hoy JavaScript y TypeScript, los demás lenguajes declared-only. Detalle: https://gtt-method.org/development-methods/

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
- GTT Bootstrap: Apache-2.0
- GTT CLI: Apache-2.0
- Este sitio web: Apache-2.0`,
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
    titleEn: "GTT-Method Guide",
    titleEs: "Guía de GTT-Method",
    descriptionEn: "A phase-by-phase guide: from installing GTT and running gtt init to working in a governed project, and how GTT-Method fits with SDD, Context Engineering and AI development.",
    descriptionEs: "Una guía fase por fase: desde instalar GTT y ejecutar gtt init hasta trabajar en un proyecto gobernado, y cómo encaja GTT-Method con SDD, Context Engineering y el desarrollo con IA.",
    contentEn: `After you install GTT CLI and run gtt init, a guided process of questionnaire and questions begins. Your answers set up the project and define how the methodology will operate in it. Nothing is guessed: every decision is yours, and the process ends when you ratify the context with the freeze.

## 1. Install GTT and run gtt init

> You are here if you have not installed GTT yet, or you are about to start a project with it.

The CLI is installed once per machine. gtt init runs once per project and places GTT Bootstrap in it.

| Step | Stage | What happens | Who |
|---|---|---|---|
| 0 | Install the CLI | Once per machine | User |
| 1 | gtt init | Places the Bootstrap in the project: portable core, the .gtt/ engine and the gtt-domain/ skeleton | CLI |

Install GTT CLI: https://gtt-method.org/cli/

Step-by-step Bootstrap guide: https://gtt-method.org/bootstrap/

## 2. Set up the project

> You are here if gtt init already placed the Bootstrap and the project still has to be set up.

Two decisions set up the project: which ADEs take part, and how much operational work you delegate to GTT.

| Step | Stage | What happens | Who |
|---|---|---|---|
| 2 | Choose the ADEs | Detects the candidate ADEs and asks which ones participate and which one is Primary. It never guesses. Installs only those overlays | CLI |
| 3 | Autonomy Profile | Light, Medium, Hard or Team: how much operational work the user delegates to GTT. It is an operating profile, not a quality level | CLI |

## 3. Bring and assess the design

> You are here if the project is set up and it is time to work on your design.

The governed context is built from your design, so the design is found, assessed and confirmed first.

| Step | Stage | What happens | Who |
|---|---|---|---|
| 4 | Design sources | Looks for the design document. If there is none, it offers the Initial Design Questionnaire. If there are several, the user chooses to consolidate them or keep them as sources with declared precedence. Sources are recorded as immutable | ADE |
| 5 | THINK Depth | QUICK, STANDARD or DEEP: how deeply the design is assessed | ADE asks, user chooses |
| 6 | Design Assessment | Assesses each area (SOLID, THIN or MISSING), checks the minimum floor (stack and datastore decided) and gives a verdict: STRONG, ADEQUATE or POOR. If it is POOR, strengthening the design is mandatory | ADE |
| 7 | Confirmation A | The user confirms that the design is complete and not a draft | User |

## 4. Build the governed context

> You are here if you confirmed that your design is complete.

The confirmed design becomes the six context files of the project.

| Step | Stage | What happens | Who |
|---|---|---|---|
| 8 | Mapping to context | Maps the design into the six context files and asks for whatever is missing | ADE |
| 9 | Confirmation B | The user confirms that the six files represent the design | User |
| 10 | Writing | Writes gtt-domain/context/ and preserves the SOURCE-BRIEF.* | ADE |

## 5. Freeze

> You are here if the six context files are written and you have reviewed them.

The freeze closes the process, and it is yours alone.

| Step | Stage | What happens | Who |
|---|---|---|---|
| 11 | Freeze | The user ratifies with gtt freeze, which records the baseline and activates the governed regime | User |

## 6. Work in the governed project

> You are here if the context is frozen and you and your agents build on it.

From here on, GTT-Method governs the project through gtt-domain/. This is what you now have in your workspace, what each file is for and how the project moves through its lifecycle.

${METHODOLOGY_SECTION_MARKER}

## GTT-Method in the ecosystem

> You are here if you are still evaluating GTT and want to know how it fits with what you already use.

GTT-Method is complementary to SDD, Context Engineering & AI Development. This is how it relates to each one.

### GTT-Method Position

GTT-Method operates at the intersection of multiple disciplines, providing governance for AI-assisted development.

> AI-Assisted Software Development: SDD (Specifications) + Context Engineering + AI Coding Agents + Software Architecture = GTT-Method (Governed Context + Governance Layer)

### GTT-Method vs SDD

Spec-Driven Development and GTT-Method answer different questions.

#### SDD

Question: What should be built? What behavior is required?
Focus: Explicit specifications and expected outcomes.

#### GTT-Method

Question: How should the context govern AI development? What boundaries protect architecture?
Focus: Governed context and agent governance.

#### Together

SDD defines WHAT to build. GTT-Method governs HOW an AI agent should operate while building it. They complement each other.

#### Not Replacement

GTT-Method does not replace SDD. You can use both methodologies in the same project effectively.

### GTT-Method vs Context Engineering

Context Engineering is a broader discipline. GTT-Method applies it specifically to AI-assisted development.

#### Context Engineering

Broad discipline focusing on designing and supplying useful context to AI systems in general.

#### GTT-Method

Applies context engineering specifically to software development with AI agents, adding governance, architecture and protection patterns.

#### Relationship

GTT-Method is Context Engineering + Software Architecture + Governance + Protection Patterns applied to AI-assisted development.

#### Integration

GTT-Method uses context engineering principles but adds software development-specific governance mechanisms.

### GTT-Method vs RAG

RAG and GTT-Method solve different problems at different layers.

#### RAG (Retrieval-Augmented Generation)

A retrieval technique for supplying relevant information to an AI system.
Solves: "How do I give the AI better information?"

#### GTT-Method

A development methodology for governing AI-assisted software development.
Solves: "How do I keep the architecture consistent while AI builds?"

#### Can Complement

GTT-Method can use RAG to retrieve context. But GTT-Method is not RAG. GTT-Method is governance; RAG is retrieval.

#### Different Concerns

RAG: Information retrieval.
GTT-Method: Context governance, architectural intent, rules enforcement.

### GTT-Method vs Prompt Engineering

Prompt engineering and GTT-Method operate at different levels of abstraction.

#### Prompt Engineering

Asks: "How should I phrase instructions so the AI understands them better?"
Focus: Instruction quality and phrasing.

#### GTT-Method

Asks: "How should the development environment itself be structured so the AI behaves correctly?"
Focus: Context governance and architectural protection.

#### Scope Difference

Prompt engineering: One interaction.
GTT-Method: Entire development process across multiple sessions.

#### Relationship

GTT-Method is not "better prompt engineering". It's a different approach addressing structural governance vs. instruction phrasing.`,
    contentEs: `Después de instalar GTT CLI y ejecutar gtt init comienza un proceso guiado de cuestionario y preguntas. Con tus respuestas se configura el proyecto y se define cómo operará la metodología en él. Nada se adivina: cada decisión es tuya, y el proceso termina cuando ratificas el contexto con el freeze.

## 1. Instalar GTT y ejecutar gtt init

> Estás aquí si todavía no instalaste GTT, o si vas a empezar un proyecto con él.

El CLI se instala una vez por máquina. gtt init se ejecuta una vez por proyecto y coloca GTT Bootstrap en él.

| Paso | Etapa | Qué ocurre | Quién |
|---|---|---|---|
| 0 | Instalar el CLI | Una vez por máquina | Usuario |
| 1 | gtt init | Coloca el Bootstrap en el proyecto: núcleo portable, motor .gtt/ y el esqueleto de gtt-domain/ | CLI |

Instalar GTT CLI: https://gtt-method.org/cli/

Guía paso a paso del Bootstrap: https://gtt-method.org/bootstrap/

## 2. Configurar el proyecto

> Estás aquí si gtt init ya colocó el Bootstrap y falta configurar el proyecto.

Dos decisiones configuran el proyecto: qué ADE participan y cuánto trabajo operativo delegas en GTT.

| Paso | Etapa | Qué ocurre | Quién |
|---|---|---|---|
| 2 | Elegir los ADE | Detecta los ADE candidatos y pregunta cuáles participan y cuál es el Primary. Nunca lo adivina. Instala solo esos overlays | CLI |
| 3 | Autonomy Profile | Light, Medium, Hard o Team: cuánto trabajo operativo delega el usuario en GTT. Es un perfil de operación, no un nivel de calidad | CLI |

## 3. Aportar y evaluar el diseño

> Estás aquí si el proyecto ya está configurado y toca trabajar tu diseño.

El contexto gobernado se construye desde tu diseño; por eso primero se busca, se evalúa y se confirma.

| Paso | Etapa | Qué ocurre | Quién |
|---|---|---|---|
| 4 | Fuentes de diseño | Busca el documento de diseño. Si no hay, ofrece el Initial Design Questionnaire. Si hay varios, el usuario elige consolidarlos o mantenerlos como fuentes con precedencia declarada. Las fuentes se registran como inmutables | ADE |
| 5 | THINK Depth | QUICK, STANDARD o DEEP: qué tan profundo se evalúa el diseño | ADE pregunta, usuario elige |
| 6 | Design Assessment | Evalúa cada área (SOLID, THIN o MISSING), revisa el piso mínimo (stack y datastore decididos) y da un veredicto STRONG, ADEQUATE o POOR. Si es POOR, fortalecer el diseño es obligatorio | ADE |
| 7 | Confirmación A | El usuario confirma que el diseño está completo y no es un borrador | Usuario |

## 4. Construir el contexto gobernado

> Estás aquí si ya confirmaste que tu diseño está completo.

El diseño confirmado se convierte en los seis archivos de contexto del proyecto.

| Paso | Etapa | Qué ocurre | Quién |
|---|---|---|---|
| 8 | Mapeo al contexto | Lleva el diseño a los seis archivos de contexto y pregunta lo que falta | ADE |
| 9 | Confirmación B | El usuario confirma que los seis archivos representan el diseño | Usuario |
| 10 | Escritura | Escribe gtt-domain/context/ y preserva el SOURCE-BRIEF.* | ADE |

## 5. Freeze

> Estás aquí si los seis archivos de contexto ya están escritos y los revisaste.

El freeze cierra el proceso, y es solo tuyo.

| Paso | Etapa | Qué ocurre | Quién |
|---|---|---|---|
| 11 | Freeze | El usuario ratifica con gtt freeze, que registra la línea base y activa el régimen gobernado | Usuario |

## 6. Trabajar en el proyecto gobernado

> Estás aquí si el contexto ya está congelado y tú y tus agentes construyen sobre él.

Desde aquí, GTT-Method gobierna el proyecto a través de gtt-domain/. Esto es lo que ahora tienes en tu workspace, para qué sirve cada archivo y cómo avanza el proyecto en su ciclo de vida.

${METHODOLOGY_SECTION_MARKER}

## GTT-Method en el ecosistema

> Estás aquí si todavía estás evaluando GTT y quieres saber cómo encaja con lo que ya usas.

GTT-Method es complementario a SDD, Context Engineering & AI Development. Así se relaciona con cada uno.

### Posición de GTT-Method

GTT-Method opera en la intersección de múltiples disciplinas, proporcionando gobernanza para desarrollo asistido por IA.

> Desarrollo de Software Asistido por IA: SDD (Especificaciones) + Context Engineering + Agentes de IA + Arquitectura de Software = GTT-Method (Contexto Gobernado + Capa de Gobernanza)

### GTT-Method vs SDD

Spec-Driven Development y GTT-Method responden diferentes preguntas.

#### SDD

Pregunta: ¿Qué debe construirse? ¿Qué comportamiento se requiere?
Enfoque: Especificaciones explícitas y resultados esperados.

#### GTT-Method

Pregunta: ¿Cómo debe el contexto gobernar el desarrollo de IA? ¿Qué límites protegen la arquitectura?
Enfoque: Contexto gobernado y gobernanza de agentes.

#### Juntos

SDD define QUÉ construir. GTT-Method gobierna CÓMO un agente de IA debe operar mientras lo construye. Se complementan.

#### No es reemplazo

GTT-Method no reemplaza SDD. Puedes usar ambas metodologías en el mismo proyecto de manera efectiva.

### GTT-Method vs Context Engineering

Context Engineering es una disciplina más amplia. GTT-Method la aplica específicamente a desarrollo asistido por IA.

#### Context Engineering

Disciplina amplia enfocada en diseñar y suministrar contexto útil a sistemas de IA en general.

#### GTT-Method

Aplica context engineering específicamente a desarrollo de software con agentes de IA, agregando gobernanza, arquitectura y patrones de protección.

#### Relación

GTT-Method es Context Engineering + Arquitectura de Software + Gobernanza + Patrones de Protección aplicado a desarrollo asistido por IA.

#### Integración

GTT-Method usa principios de context engineering pero agrega mecanismos de gobernanza específicos del desarrollo de software.

### GTT-Method vs RAG

RAG y GTT-Method resuelven diferentes problemas en diferentes capas.

#### RAG (Retrieval-Augmented Generation)

Una técnica de recuperación para suministrar información relevante a un sistema de IA.
Resuelve: "¿Cómo doy mejor información a la IA?"

#### GTT-Method

Una metodología de desarrollo para gobernar desarrollo asistido por IA.
Resuelve: "¿Cómo mantengo la arquitectura consistente mientras la IA construye?"

#### Pueden complementarse

GTT-Method puede usar RAG para recuperar contexto. Pero GTT-Method no es RAG. GTT-Method es gobernanza; RAG es recuperación.

#### Preocupaciones diferentes

RAG: Recuperación de información.
GTT-Method: Gobernanza de contexto, intención arquitectónica, aplicación de reglas.

### GTT-Method vs Ingeniería de Indicaciones

La ingeniería de indicaciones y GTT-Method operan en diferentes niveles de abstracción.

#### Ingeniería de Indicaciones

Pregunta: "¿Cómo debo formular instrucciones para que la IA las entienda mejor?"
Enfoque: Calidad y formulación de instrucciones.

#### GTT-Method

Pregunta: "¿Cómo debe estructurarse el entorno de desarrollo para que la IA se comporte correctamente?"
Enfoque: Gobernanza de contexto y protección arquitectónica.

#### Diferencia de Alcance

Ingeniería de indicaciones: Una interacción.
GTT-Method: Proceso completo de desarrollo en múltiples sesiones.

#### Relación

GTT-Method no es "mejor ingeniería de indicaciones". Es un enfoque diferente que aborda gobernanza estructural frente a formulación de instrucciones.`,
    searchableEn: "guide get started phases steps gtt init install freeze governed context gtt-domain ecosystem SDD context engineering RAG prompt engineering AI development",
    searchableEs: "guía comenzar fases pasos gtt init instalar freeze contexto gobernado gtt-domain ecosistema SDD context engineering RAG ingeniería de indicaciones desarrollo de IA",
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

> GTT Governance Canonical: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md

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

### Autonomy Profiles

GTT is applied through a Autonomy Profile, chosen once per project:

\`\`\`
LIGHT
MEDIUM
HARD
TEAM
\`\`\`

A Autonomy Profile is an operating profile, not a quality level, and no plan turns governance off. The CLI lets the project select the plan; Bootstrap owns what each plan means. The plans are documented in the Bootstrap repository: https://github.com/GTT-Community/gtt-bootstrap/blob/main/.gtt/docs/method-plans.md

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
| Autonomy Profile Selection | Selects the Autonomy Profile. The CLI selects it; Bootstrap defines its meaning. |
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
   ├── choose Autonomy Profile
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
- GTT Canonical: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md
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

> Canónico de Gobernanza GTT: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md

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

### Autonomy Profiles

GTT se aplica a través de un Autonomy Profile, que se elige una vez por proyecto:

\`\`\`
LIGHT
MEDIUM
HARD
TEAM
\`\`\`

Un Autonomy Profile es un perfil operativo, no un nivel de calidad, y ningún plan apaga la gobernanza. La CLI permite al proyecto seleccionar el plan; Bootstrap es dueño de lo que significa cada uno. Los planes están documentados en el repositorio de Bootstrap: https://github.com/GTT-Community/gtt-bootstrap/blob/main/.gtt/docs/method-plans.es.md

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
| Selección de Autonomy Profile | Selecciona el Autonomy Profile. La CLI lo selecciona; Bootstrap define su significado. |
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
   ├── elegir el Autonomy Profile
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
- GTT Canonical: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md
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
    searchableEn: "methodology GTT Method governed AI-assisted software development governance evidence grounding provenance proposals decisions freeze change request ADE Primary ADE Bootstrap CLI Autonomy Profile session context validation",
    searchableEs: "metodología GTT Method desarrollo de software asistido por IA gobernado gobernanza evidencia grounding procedencia propuestas decisiones freeze solicitud de cambio ADE Primario Bootstrap CLI Autonomy Profile contexto de sesión validación",
  },
  {
    slug: "gtt-method-2-1",
    titleEn: "GTT 3.0",
    titleEs: "GTT 3.0",
    descriptionEn: "The current generation of the method: its lifecycle, where things live in a project, and what changed from 2.1.",
    descriptionEs: "La generación vigente del método: su ciclo de vida, dónde está cada cosa en un proyecto y qué cambió desde 2.1.",
    contentEn: `## GTT 3.0

GTT 3.0 is the current generation of the method, defined by one canonical document: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md . The GTT suite (Bootstrap, CLI and this site) implements it; what each release implements is listed capability by capability in the conformance matrix: https://github.com/GTT-Community/gtt-method/blob/main/CONFORMANCE.md

## The lifecycle

1. **Setup** - \`gtt init\`: the ADEs you use, the autonomy profile (how much GTT does without asking) and the development method (how the solution is organized).
2. **Elicitation** - your design documents, or the guided Initial Design Questionnaire. Stack and datastore are always decided by a person.
3. **THINK** - an agent proposes the governed design and one design per Epic, each statement traced to evidence or marked as a gap, a conflict or a proposal.
4. **Freeze** - a person ratifies the design. It becomes the authority.
5. **Build and observe** - the agent works freely. GTT compares the work with the frozen design: a datastore, framework or module the design does not declare, or a broken dependency rule, is reported; only what the design declares BLOCKING stops.
6. **Change** - a change request, a proposal, a human decision, and \`gtt promote\` applies it and freezes again.

## Where things live in a project

\`\`\`text
AGENTS.md                  # the agent contract (joined to yours as one block if you had one)
readme-gtt.md              # quickstart
gtt-domain/
  context/                 # the governed design: vision, principles, architecture, stack, constraints, glossary
  context/design/          # one design per Epic
  adr/                     # architecture decision records
  backlog.md               # Epics (governed) and Stories (the agent's working plan)
  change-request.md        # what you want changed
  proposals/               # what the agent proposes
  governance-backlog.json  # observations and your decisions on them
  .frozen                  # the freeze record
.gtt/                      # the engine: scripts, contracts, Method Packs, documentation
\`\`\`

## What changed from 2.1

- The canon now defines what was already shipped: Method Governance, the change flow, the questionnaire, THINK, Epics and Stories.
- Out-of-design changes are observed from the design itself, without hand-written rules.
- An existing AGENTS.md is joined, never taken over.
- "Method Plan" is now **Autonomy Profile**.
- GTT means **Governance Through Thinking**.`,
    contentEs: `## GTT 3.0

GTT 3.0 es la generación vigente del método, definida por un único documento canónico: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md . La suite GTT (Bootstrap, CLI y este sitio) lo implementa; qué implementa cada versión se lista, capacidad por capacidad, en la matriz de conformidad: https://github.com/GTT-Community/gtt-method/blob/main/CONFORMANCE.md

## El ciclo de vida

1. **Setup** - \`gtt init\`: los ADEs que usas, el perfil de autonomía (cuánto hace GTT sin preguntar) y el método de desarrollo (cómo se organiza la solución).
2. **Elicitación** - tus documentos de diseño, o el Cuestionario de Diseño Inicial guiado. El stack y el datastore siempre los decide una persona.
3. **THINK** - un agente propone el diseño gobernado y un diseño por Epic, con cada afirmación trazada a evidencia o marcada como vacío, conflicto o propuesta.
4. **Freeze** - una persona ratifica el diseño. Pasa a ser la autoridad.
5. **Construcción y observación** - el agente trabaja con libertad. GTT compara el trabajo con el diseño congelado: un datastore, framework o módulo que el diseño no declara, o una regla de dependencias rota, se reporta; solo se detiene lo que el diseño declara BLOCKING.
6. **Cambio** - una solicitud de cambio, una propuesta, una decisión humana, y \`gtt promote\` la aplica y vuelve a congelar.

## Dónde está cada cosa en un proyecto

\`\`\`text
AGENTS.md                  # el contrato del agente (unido al tuyo como un bloque si ya tenías uno)
readme-gtt.md              # inicio rápido
gtt-domain/
  context/                 # el diseño gobernado: visión, principios, arquitectura, stack, restricciones, glosario
  context/design/          # un diseño por Epic
  adr/                     # registros de decisiones de arquitectura
  backlog.md               # Epics (gobernadas) y Stories (el plan de trabajo del agente)
  change-request.md        # lo que quieres cambiar
  proposals/               # lo que propone el agente
  governance-backlog.json  # observaciones y tus decisiones sobre ellas
  .frozen                  # el registro del freeze
.gtt/                      # el motor: scripts, contratos, Method Packs, documentación
\`\`\`

## Qué cambió desde 2.1

- El canon ahora define lo que ya se publicaba: Method Governance, el flujo de cambios, el cuestionario, THINK, Epics y Stories.
- Los cambios fuera del diseño se observan a partir del propio diseño, sin reglas escritas a mano.
- Un AGENTS.md existente se une, nunca se reemplaza.
- "Method Plan" pasa a llamarse **Perfil de Autonomía** (Autonomy Profile).
- GTT significa **Governance Through Thinking**.`,
    searchableEn: "GTT 3.0 generation lifecycle setup elicitation THINK freeze observe change project layout gtt-domain AGENTS",
    searchableEs: "GTT 3.0 generación ciclo de vida setup elicitación THINK freeze observación cambio estructura gtt-domain AGENTS",
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

GTT is implemented through GTT Bootstrap and operated through GTT CLI. Its canonical definition is https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md

## Which version of GTT is current?

GTT 3.0 is the current released generation, defined by a single canonical document. Anything that document does not define is not a GTT 3.0 capability, even if it appears in code, a website, a prompt or a proposal. Future generations are defined separately and are not current until formally released.

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

GTTGuard does not hide code from agents; it protects the authority to change it. An agent may read, analyze and propose changes to a protected artifact, and the proposal is written under gtt-domain/proposals/ for a human to approve, reject or modify. The current policy is HUMAN_APPROVAL.

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

## What are Autonomy Profiles?

Autonomy Profiles (Light, Medium, Hard and Team) decide how much GTT does without asking you. Whatever the profile, destructive operations and governed decisions always need a human. You choose the plan in gtt init and can review or change it with gtt autonomy.

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

Install GTT CLI, then run gtt init inside your project. It resolves and verifies GTT Bootstrap, asks which ADEs participate and which one is Primary, the language, the Autonomy Profile and your initial design documents, installs, validates and hands off to your Primary ADE. If you have no design document, your ADE guides you through the Initial Design Questionnaire.

The Primary ADE drafts the governed context for your review, and once you confirm it you freeze it with gtt freeze.

- Install the CLI: https://gtt-method.org/cli/
- Or bootstrap with prompts from your ADE: https://gtt-method.org/prompts/

## Where are the GTT terms defined?

In the glossary: https://gtt-method.org/glossary/

## What licenses does GTT use?

GTT Method, GTT Bootstrap, GTT CLI and this website are all Apache-2.0.

## Where do I report a bug or propose an idea?

On the community board: https://gtt-method.feedlog.ai/ or in the GitHub repositories: https://github.com/orgs/GTT-Community/repositories`,
    contentEs: `## ¿Qué es GTT-Method?

GTT-Method (Governance Through Thinking) es una metodología de código abierto y un plano de control de gobernanza para el desarrollo de software asistido por IA, gobernado. Establece el contexto, la evidencia, la intención arquitectónica, las reglas de gobernanza, las fronteras de decisión, el cambio controlado, la protección, la validación y la continuidad de sesión que permiten que agentes de IA y ADEs participen en el desarrollo sin convertirse en la autoridad sobre el sistema.

Su distinción central es que el razonamiento de un agente no es autorización de cambio: los agentes analizan, proponen e implementan dentro de la autoridad que GTT les otorga, y el humano sigue siendo la autoridad en las decisiones gobernadas.

GTT se implementa mediante GTT Bootstrap y se opera mediante GTT CLI. Su definición canónica es https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md

## ¿Cuál es la versión vigente de GTT?

GTT 3.0 es la generación publicada vigente, definida por un único documento canónico. Lo que ese documento no define no es una capacidad de GTT 3.0, aunque aparezca en código, en un sitio web, en un prompt o en una propuesta. Las generaciones futuras se definen por separado y no son vigentes hasta su publicación formal.

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

GTTGuard no oculta el código a los agentes; protege la autoridad para cambiarlo. Un agente puede leer, analizar y proponer cambios a un artefacto protegido, y la propuesta se escribe en gtt-domain/proposals/ para que un humano la apruebe, la rechace o la modifique. La política vigente es HUMAN_APPROVAL.

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

## ¿Qué son los Autonomy Profiles?

Los Perfiles de Autonomía (Light, Medium, Hard y Team) definen cuánto hace GTT sin preguntarte. Sea cual sea el perfil, las operaciones destructivas y las decisiones gobernadas siempre requieren a un humano. Eliges el plan en gtt init y puedes revisarlo o cambiarlo con gtt autonomy.

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

Instala GTT CLI y ejecuta gtt init dentro de tu proyecto. Resuelve y verifica GTT Bootstrap, pregunta qué ADEs participan y cuál es el Primario, el idioma, el Autonomy Profile y tus documentos iniciales de diseño, instala, valida y entrega el control a tu ADE Primario. Si no tienes un documento de diseño, tu ADE te guía por el Cuestionario de Diseño Inicial.

El ADE Primario redacta el contexto gobernado para tu revisión y, una vez que lo confirmas, lo congelas con gtt freeze.

- Instalar la CLI: https://gtt-method.org/cli/
- O hacer el bootstrap con prompts desde tu ADE: https://gtt-method.org/prompts/

## ¿Dónde están definidos los términos de GTT?

En el glosario: https://gtt-method.org/glossary/

## ¿Qué licencias usa GTT?

GTT Method, GTT Bootstrap, GTT CLI y este sitio web son todos Apache-2.0.

## ¿Dónde reporto un bug o propongo una idea?

En el tablero de la comunidad: https://gtt-method.feedlog.ai/ o en los repositorios de GitHub: https://github.com/orgs/GTT-Community/repositories`,
    searchableEn: "faq frequently asked questions GTT-Method methodology concepts control plane enforcement GTTGuard context efficiency session continuity validation autonomy profiles CI",
    searchableEs: "preguntas frecuentes FAQ GTT-Method metodología conceptos plano de control enforcement GTTGuard eficiencia de contexto continuidad de sesión validación autonomy profiles CI",
  },
  {
    slug: "glossary",
    titleEn: "GTT Glossary",
    titleEs: "Glosario GTT",
    descriptionEn: "Definitions of the GTT-Method terms: governed context, evidence boundary, THINK, proposal, freeze, GTTGuard, ADE, Primary ADE, GTT Bootstrap, GTT CLI and more.",
    descriptionEs: "Definiciones de los términos de GTT-Method: contexto gobernado, frontera de evidencia, THINK, propuesta, freeze, GTTGuard, ADE, ADE Primario, GTT Bootstrap, GTT CLI y más.",
    contentEn: `The terms GTT uses, each with one definition. Definitions follow the GTT Canonical v3.0 and the published GTT Bootstrap and GTT CLI documentation; where this page and the canonical differ, the canonical is right: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md

## Method, implementation and tooling

### GTT / GTT-Method

GTT (Governance Through Thinking) is a methodology and governance control plane for governed AI-assisted software development. It lets AI agents and ADEs take part in software development without becoming the authority over the system.

### GTT Canonical

The single canonical definition of the current GTT generation (GTT 3.0). If an implementation, website, manual or CLI contradicts it, the contradiction must be surfaced and resolved. Source: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md

### GTT Bootstrap

The reference implementation of the GTT Method. It owns the GTT semantics and exposes them through versioned contracts. See https://gtt-method.org/methodology/

### GTT CLI

The operational surface of GTT: the gtt command-line tool that installs, validates, operates, updates, exports and recovers GTT projects through the Bootstrap contracts. It is not a second GTT engine. See https://gtt-method.org/cli/

### Autonomy Profile

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
    contentEs: `Los términos que usa GTT, cada uno con una sola definición. Las definiciones siguen el GTT Canonical v3.0 y la documentación publicada de GTT Bootstrap y GTT CLI; si esta página y el canónico difieren, el canónico tiene razón: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md

## Método, implementación y herramientas

### GTT / GTT-Method

GTT (Governance Through Thinking) es una metodología y un plano de control de gobernanza para el desarrollo de software asistido por IA, gobernado. Permite que agentes de IA y ADEs participen en el desarrollo sin convertirse en la autoridad sobre el sistema.

### GTT Canonical

La única definición canónica de la generación actual de GTT (GTT 3.0). Si una implementación, un sitio web, un manual o la CLI la contradicen, la contradicción debe exponerse y resolverse. Fuente: https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL.md

### GTT Bootstrap

La implementación de referencia del GTT Method. Es dueña de la semántica GTT y la expone a través de contratos versionados. Ver https://gtt-method.org/methodology/

### GTT CLI

La superficie operativa de GTT: la herramienta de línea de comandos gtt que instala, valida, opera, actualiza, exporta y recupera proyectos GTT a través de los contratos de Bootstrap. No es un segundo motor de GTT. Ver https://gtt-method.org/cli/

### Autonomy Profile

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
    searchableEn: "glossary terms definitions governed context execution context evidence boundary grounding dossier provenance THINK proposal freeze change request GTTGuard ADE Primary ADE Autonomy Profile session continuity",
    searchableEs: "glosario términos definiciones contexto gobernado contexto de ejecución frontera de evidencia grounding dossier procedencia THINK propuesta freeze solicitud de cambio GTTGuard ADE Primario Autonomy Profile continuidad de sesión",
  },
  {
    slug: "cli",
    titleEn: "GTT CLI",
    titleEs: "GTT CLI",
    descriptionEn: "Install the gtt command-line tool on Linux, macOS or Windows and set up your project with gtt init.",
    descriptionEs: "Instala la herramienta de línea de comandos gtt en Linux, macOS o Windows y prepara tu proyecto con gtt init.",
    contentEn: `GTT CLI is a single binary (gtt) for Linux, macOS and Windows (x86_64 and arm64). Getting started takes three steps: install the CLI, run gtt init in your project, and finish the Bootstrap with your ADE.

## 1. Install GTT CLI

Pick your operating system, or install with uv or npm. Each operating system command installs the latest published release and verifies its SHA-256 checksum.

### Linux

Open a terminal and run:

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | sh
\`\`\`

### macOS

Open Terminal and run (Intel and Apple Silicon):

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | sh
\`\`\`

### Windows

Open PowerShell and run:

\`\`\`
irm https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.ps1 | iex
\`\`\`

Then open a new terminal so the updated PATH is picked up.

### uv (PyPI)

Install GTT CLI with uv (https://docs.astral.sh/uv/), on any operating system:

\`\`\`
uv tool install gtt-cli
\`\`\`

### npm (Node.js 18+)

Install GTT CLI with npm (https://www.npmjs.com/), on any operating system:

\`\`\`
npm install -g @gtt-community/gtt-cli
\`\`\`

### Check that it works

\`\`\`
gtt version
\`\`\`

## 2. Run gtt init

gtt init needs git, bash and python3, because GTT Bootstrap uses them. On Windows, install Git for Windows (it provides bash) and Python 3.

Go to your project folder, new or existing, and run:

\`\`\`
cd my-project
gtt init
\`\`\`

gtt init finds, downloads and verifies GTT Bootstrap, then asks only for the decisions that are yours:

- Which ADEs participate (Claude Code, GitHub Copilot, Codex, Kiro) and which one is the Primary ADE
- The language
- The Autonomy Profile: Light, Medium, Hard or Team
- Your initial design documents, if you have any. If you have none, it offers the Initial Design Questionnaire
- The development method: how you want to develop (Vertical Slice, DDD, Hexagonal...) and how to start. If you are not sure, choose "help me choose": nothing is applied by default. Details: https://gtt-method.org/development-methods/

It then installs GTT Bootstrap in the project, validates it and hands off to your Primary ADE. See where the project stands at any time:

\`\`\`
gtt status
\`\`\`

## 3. Finish the GTT Bootstrap

Open your Primary ADE. It reads your design documents (or guides you through the questionnaire) and drafts the governed context for your review. Once you confirm it, freeze it:

\`\`\`
gtt freeze
\`\`\`

The full step-by-step guide to installing GTT Bootstrap is here: https://gtt-method.org/bootstrap/

## Changing the design in the middle of the work

\`\`\`
gtt change "Move sessions to Redis" --reason "Scale out"
gtt proposals
gtt promote <set>
gtt undo
\`\`\`

- gtt change records a governed change request (design, architecture, stack, constraints or an Epic's goal or scope) with an id, and offers to open your Primary ADE. The agent is told to process it into a proposal on its first turn: it drafts, it never applies
- gtt proposals lists what the agent drafted (proposals, ADR drafts, promotion sets) with their state and the request they answer. gtt proposals show <name> opens one, and gtt proposals withdraw <name> archives one you will not promote
- gtt promote <set> shows the diff of a staged set and applies it only after you confirm
- gtt undo puts back what the last promotion replaced, while its files are as it left them. If that promotion froze the project, a new freeze records the earlier state: there is still no unfreeze, and every baseline stays in the history. Going further back is a new change request
- Ordinary work (code, refactors, tests, Stories) needs none of this

## Development method commands

\`\`\`
gtt dev-method
gtt dev-method list
gtt check
\`\`\`

- gtt dev-method shows the development method in force, its status (ratified or open), the ADR that locks it and its verification level. It is read-only: after the freeze the method changes only through a change request
- gtt dev-method list shows the available methods with their short text
- gtt check verifies that the code respects the method's dependency rules, with the language's own tool. Today: JavaScript and TypeScript, with dependency-cruiser installed in the project. Other languages are reported as declared-only
- gtt check exits 0 when the code respects the method, 1 when it finds a forbidden dependency, and 7 when the result cannot be determined because the tool is not installed. A violation is reported, never corrected

## Other ways to install

### Go 1.27+

\`\`\`
go install github.com/GTT-Community/gtt-cli/cmd/gtt@latest
\`\`\`

### Try it without installing

\`\`\`
uvx --from gtt-cli gtt version
npx @gtt-community/gtt-cli version
\`\`\`

## Update

- curl / PowerShell: run the same install command again
- uv: uv tool upgrade gtt-cli
- npm: npm update -g @gtt-community/gtt-cli

## Install a specific version (example: 1.8.0)

### Linux and macOS

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | GTT_VERSION=1.8.0 sh
\`\`\`

### Windows

\`\`\`
$env:GTT_VERSION="1.8.0"; irm https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.ps1 | iex
\`\`\`

### uv and npm

\`\`\`
uv tool install gtt-cli==1.8.0
npm install -g @gtt-community/gtt-cli@1.8.0
\`\`\`

## Where it is installed

- Linux/macOS: /usr/local/bin if it is writable; otherwise ~/.local/bin (change it with GTT_INSTALL_DIR)
- Windows: %LOCALAPPDATA%\\Programs\\gtt, which is added to the user PATH

On Windows the CLI uses Git Bash automatically and never the WSL bash. To use a different bash, set GTT_BASH to the path of bash.exe.

## Manual download

Per-platform files are available at https://github.com/GTT-Community/gtt-cli/releases/latest

- gtt_linux_amd64.tar.gz, gtt_linux_arm64.tar.gz
- gtt_darwin_amd64.tar.gz (macOS Intel), gtt_darwin_arm64.tar.gz (macOS Apple Silicon)
- gtt_windows_amd64.zip, gtt_windows_arm64.zip
- checksums.txt (SHA-256)

Source code and documentation: https://github.com/GTT-Community/gtt-cli`,
    contentEs: `GTT CLI es un único binario (gtt) para Linux, macOS y Windows (x86_64 y arm64). Empezar toma tres pasos: instalar el CLI, ejecutar gtt init en tu proyecto y terminar el Bootstrap con tu ADE.

## 1. Instalar GTT CLI

Elige tu sistema operativo, o instala con uv o npm. Cada comando por sistema operativo instala la última versión publicada y verifica su checksum SHA-256.

### Linux

Abre una terminal y ejecuta:

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | sh
\`\`\`

### macOS

Abre Terminal y ejecuta (Intel y Apple Silicon):

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | sh
\`\`\`

### Windows

Abre PowerShell y ejecuta:

\`\`\`
irm https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.ps1 | iex
\`\`\`

Luego abre una terminal nueva para que tome el PATH actualizado.

### uv (PyPI)

Instala GTT CLI con uv (https://docs.astral.sh/uv/), en cualquier sistema operativo:

\`\`\`
uv tool install gtt-cli
\`\`\`

### npm (Node.js 18+)

Instala GTT CLI con npm (https://www.npmjs.com/), en cualquier sistema operativo:

\`\`\`
npm install -g @gtt-community/gtt-cli
\`\`\`

### Comprobar que funciona

\`\`\`
gtt version
\`\`\`

## 2. Ejecutar gtt init

gtt init necesita git, bash y python3, porque GTT Bootstrap los usa. En Windows, instala Git for Windows (aporta bash) y Python 3.

Entra a la carpeta de tu proyecto, nuevo o existente, y ejecuta:

\`\`\`
cd mi-proyecto
gtt init
\`\`\`

gtt init encuentra, descarga y verifica GTT Bootstrap, y luego te pide solo las decisiones que son tuyas:

- Qué ADEs participan (Claude Code, GitHub Copilot, Codex, Kiro) y cuál es el ADE Primario
- El idioma
- El Autonomy Profile: Light, Medium, Hard o Team
- Tus documentos de diseño iniciales, si los tienes. Si no tienes ninguno, ofrece el Cuestionario de Diseño Inicial
- El método de desarrollo: cómo quieres desarrollar (Vertical Slice, DDD, Hexagonal...) y cómo empezar. Si no estás seguro, elige "ayúdame a elegir": nunca se aplica nada por defecto. Detalle: https://gtt-method.org/development-methods/

Después instala GTT Bootstrap en el proyecto, lo valida y entrega el control a tu ADE Primario. Revisa el estado del proyecto cuando quieras:

\`\`\`
gtt status
\`\`\`

## 3. Terminar el GTT Bootstrap

Abre tu ADE Primario. Lee tus documentos de diseño (o te guía por el cuestionario) y redacta el contexto gobernado para tu revisión. Cuando lo confirmes, congélalo:

\`\`\`
gtt freeze
\`\`\`

La guía completa, paso a paso, para instalar GTT Bootstrap está aquí: https://gtt-method.org/bootstrap/

## Cambiar el diseño en pleno desarrollo

\`\`\`
gtt change "Mover las sesiones a Redis" --reason "Escalar horizontalmente"
gtt proposals
gtt promote <set>
gtt undo
\`\`\`

- gtt change registra un change request gobernado (diseño, arquitectura, stack, restricciones o el objetivo o alcance de un Epic) con un id, y te ofrece abrir tu ADE Primario. El agente recibe la orden de procesarlo como propuesta en su primer turno: redacta, nunca aplica
- gtt proposals lista lo que redactó el agente (propuestas, borradores de ADR, sets de promoción) con su estado y el request que responden. gtt proposals show <nombre> abre uno, y gtt proposals withdraw <nombre> archiva uno que no vas a promover
- gtt promote <set> muestra el diff de un set preparado y lo aplica solo cuando confirmas
- gtt undo deshace lo que reemplazó la última promoción, mientras sus archivos sigan como los dejó. Si esa promoción congeló el proyecto, un nuevo freeze registra el estado anterior: sigue sin existir el unfreeze, y cada línea base queda en el historial. Ir más atrás es un nuevo change request
- El trabajo ordinario (código, refactors, pruebas, Stories) no necesita nada de esto

## Comandos del método de desarrollo

\`\`\`
gtt dev-method
gtt dev-method list
gtt check
\`\`\`

- gtt dev-method muestra el método de desarrollo vigente, su estado (ratificado u open), el ADR que lo fija y su nivel de verificación. Es de solo lectura: después del freeze el método solo cambia por change request
- gtt dev-method list muestra los métodos disponibles con su texto corto
- gtt check verifica que el código respete las reglas de dependencia del método, con la herramienta propia del lenguaje. Hoy: JavaScript y TypeScript, con dependency-cruiser instalado en el proyecto. Los demás lenguajes se reportan como declared-only
- gtt check termina con 0 cuando el código respeta el método, 1 cuando encuentra una dependencia prohibida y 7 cuando el resultado no se puede determinar porque la herramienta no está instalada. Una violación se reporta, nunca se corrige

## Otras formas de instalar

### Go 1.27+

\`\`\`
go install github.com/GTT-Community/gtt-cli/cmd/gtt@latest
\`\`\`

### Probar sin instalar

\`\`\`
uvx --from gtt-cli gtt version
npx @gtt-community/gtt-cli version
\`\`\`

## Actualizar

- curl / PowerShell: vuelve a ejecutar el mismo comando de instalación
- uv: uv tool upgrade gtt-cli
- npm: npm update -g @gtt-community/gtt-cli

## Instalar una versión específica (ejemplo: 1.8.0)

### Linux y macOS

\`\`\`
curl -fsSL https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.sh | GTT_VERSION=1.8.0 sh
\`\`\`

### Windows

\`\`\`
$env:GTT_VERSION="1.8.0"; irm https://raw.githubusercontent.com/GTT-Community/gtt-cli/main/install.ps1 | iex
\`\`\`

### uv y npm

\`\`\`
uv tool install gtt-cli==1.8.0
npm install -g @gtt-community/gtt-cli@1.8.0
\`\`\`

## Dónde se instala

- Linux/macOS: /usr/local/bin si se puede escribir; si no, ~/.local/bin (cambiar con GTT_INSTALL_DIR)
- Windows: %LOCALAPPDATA%\\Programs\\gtt, que se agrega al PATH del usuario

En Windows el CLI usa Git Bash automáticamente y nunca el bash de WSL. Para usar otro bash, define GTT_BASH con la ruta a bash.exe.

## Descarga manual

Archivos por plataforma disponibles en https://github.com/GTT-Community/gtt-cli/releases/latest

- gtt_linux_amd64.tar.gz, gtt_linux_arm64.tar.gz
- gtt_darwin_amd64.tar.gz (macOS Intel), gtt_darwin_arm64.tar.gz (macOS Apple Silicon)
- gtt_windows_amd64.zip, gtt_windows_arm64.zip
- checksums.txt (SHA-256)

Código fuente y documentación: https://github.com/GTT-Community/gtt-cli`,
    searchableEn: "cli gtt command line install curl powershell uv npm go windows macos linux binary gtt init quick start",
    searchableEs: "cli gtt línea de comandos instalar curl powershell uv npm go windows macos linux binario gtt init inicio rápido",
  },
  {
    slug: "bootstrap",
    titleEn: "Install GTT Bootstrap",
    titleEs: "Instalar GTT Bootstrap",
    descriptionEn: "Step-by-step guide to installing GTT Bootstrap in a project and freezing its governed context.",
    descriptionEs: "Guía paso a paso para instalar GTT Bootstrap en un proyecto y congelar su contexto gobernado.",
    contentEn: `GTT Bootstrap is the reference implementation of GTT-Method. Installing it puts the GTT engine, the governed context and the integrations for your ADEs inside your project. This guide uses GTT CLI, which downloads and operates Bootstrap for you.

Repository: https://github.com/GTT-Community/gtt-bootstrap

## Before you start

- GTT CLI installed: https://gtt-method.org/cli/
- git, bash and python3. On Windows: Git for Windows (it provides bash) and Python 3
- An ADE: Claude Code, GitHub Copilot, Codex or Kiro
- A project folder, new or with existing code
- Recommended: a finished design document in the project root. Any name and any common format works (.md, .txt, Word, PDF). It should describe the idea and goal, vision, requirements, architecture, technology stack, constraints and development rules

No design document yet? Skip it. Bootstrap offers the Initial Design Questionnaire and your ADE guides you through it.

## 1. Run gtt init

\`\`\`
cd my-project
gtt init
\`\`\`

gtt init finds, downloads and verifies GTT Bootstrap. Nothing is installed until you answer its questions.

## 2. Answer the questions

- Participating ADEs: the ADEs it detects are only candidates. GTT installs the integrations you choose and no others
- Primary ADE: the one that leads the workflow
- Language
- Autonomy Profile: Light, Medium, Hard or Team. It decides how much operational work GTT does without asking. It is not a quality level, and no plan turns governance off
- Development method: how you want to develop and how to start. Unanswered, it stays OPEN; nothing is applied by default
- Initial design documents: the documents the governed context will be built from
- Development method: how you want to develop and how to start. Unanswered, it stays OPEN; nothing is applied by default

The Autonomy Profiles are described at https://github.com/GTT-Community/gtt-bootstrap/blob/main/.gtt/docs/method-plans.md

## 3. Check the installation

\`\`\`
gtt status
gtt doctor
\`\`\`

Your project now contains:

- AGENTS.md: the contract your agents read
- .gtt/: the GTT engine, its scripts and its documentation
- gtt-domain/: the governed context, decisions (ADR), proposals and backlog
- The integration of each participating ADE, for example .claude/ or .kiro/

## 4. Build the governed context with your ADE

Open your Primary ADE in the project. If it does not start on its own, ask it:

\`\`\`
Bootstrap GTT in this project
\`\`\`

The ADE then:

- If gtt init left the development method open, or you chose help me choose, proposes one with its reason and waits for you to confirm: https://gtt-method.org/development-methods/
- Reads your design document and writes a Design Assessment, area by area
- Asks you to confirm that the design is complete and not a draft
- Asks you directly for whatever the document does not answer, instead of inventing it
- Maps the design into the six governed context files in gtt-domain/context/
- Shows you a summary and waits for your confirmation before writing them
- Keeps your original document as SOURCE-BRIEF in the project root

## 5. Review and freeze

Read the governed context and correct anything that is wrong. When it represents your design, freeze it:

\`\`\`
gtt freeze
\`\`\`

Freezing is a human act and there is no unfreeze. From that moment the governed context is protected from direct agent writes, and every change goes through a proposal that you approve.

## Day to day

\`\`\`
gtt sync
gtt resume
\`\`\`

- gtt sync keeps agent context, document tracking, the index and validation up to date in one run
- gtt resume gives the session context derived from the real state of the project
- gtt update updates GTT Bootstrap and preserves your project state and your local changes
- gtt change requests a governed change in the middle of the work; gtt proposals, gtt promote and gtt undo follow it: https://gtt-method.org/cli/

## Other ways to install

- With a prompt to your AI agent, without the CLI: https://gtt-method.org/prompts/
- Manually, copying the files yourself: https://github.com/GTT-Community/gtt-bootstrap/blob/main/.gtt/docs/installation.md`,
    contentEs: `GTT Bootstrap es la implementación de referencia de GTT-Method. Instalarlo deja dentro de tu proyecto el motor de GTT, el contexto gobernado y las integraciones para tus ADEs. Esta guía usa GTT CLI, que descarga y opera Bootstrap por ti.

Repositorio: https://github.com/GTT-Community/gtt-bootstrap

## Antes de empezar

- GTT CLI instalado: https://gtt-method.org/cli/
- git, bash y python3. En Windows: Git for Windows (aporta bash) y Python 3
- Un ADE: Claude Code, GitHub Copilot, Codex o Kiro
- Una carpeta de proyecto, nueva o con código existente
- Recomendado: un documento de diseño terminado en la raíz del proyecto. Sirve cualquier nombre y cualquier formato común (.md, .txt, Word, PDF). Debería describir la idea y el objetivo, la visión, los requisitos, la arquitectura, el stack tecnológico, las restricciones y las reglas de desarrollo

¿Todavía no tienes un documento de diseño? Sáltalo. Bootstrap ofrece el Cuestionario de Diseño Inicial y tu ADE te guía para completarlo.

## 1. Ejecutar gtt init

\`\`\`
cd mi-proyecto
gtt init
\`\`\`

gtt init encuentra, descarga y verifica GTT Bootstrap. No se instala nada hasta que respondas sus preguntas.

## 2. Responder las preguntas

- ADEs participantes: los ADEs que detecta son solo candidatos. GTT instala las integraciones que tú eliges y ninguna otra
- ADE Primario: el que conduce el flujo de trabajo
- Idioma
- Autonomy Profile: Light, Medium, Hard o Team. Define cuánto trabajo operativo hace GTT sin preguntar. No es un nivel de calidad, y ningún plan desactiva la gobernanza
- Documentos de diseño iniciales: los documentos desde los que se construirá el contexto gobernado
- Método de desarrollo: cómo quieres desarrollar y cómo empezar. Sin respuesta queda OPEN; nunca se aplica nada por defecto

Los Autonomy Profiles están descritos en https://github.com/GTT-Community/gtt-bootstrap/blob/main/.gtt/docs/method-plans.es.md

## 3. Comprobar la instalación

\`\`\`
gtt status
gtt doctor
\`\`\`

Tu proyecto ahora contiene:

- AGENTS.md: el contrato que leen tus agentes
- .gtt/: el motor de GTT, sus scripts y su documentación
- gtt-domain/: el contexto gobernado, las decisiones (ADR), las propuestas y el backlog
- La integración de cada ADE participante, por ejemplo .claude/ o .kiro/

## 4. Construir el contexto gobernado con tu ADE

Abre tu ADE Primario en el proyecto. Si no empieza por sí solo, pídele:

\`\`\`
Haz el bootstrap de GTT en este proyecto
\`\`\`

Entonces el ADE:

- Si gtt init dejó abierto el método de desarrollo, o elegiste ayúdame a elegir, te propone uno con su razón y espera tu confirmación: https://gtt-method.org/development-methods/
- Lee tu documento de diseño y escribe una Evaluación del Diseño, área por área
- Te pide confirmar que el diseño está completo y no es un borrador
- Te pregunta directamente lo que el documento no responde, en lugar de inventarlo
- Mapea el diseño a los seis archivos de contexto gobernado en gtt-domain/context/
- Te muestra un resumen y espera tu confirmación antes de escribirlos
- Conserva tu documento original como SOURCE-BRIEF en la raíz del proyecto

## 5. Revisar y congelar

Lee el contexto gobernado y corrige lo que esté mal. Cuando represente tu diseño, congélalo:

\`\`\`
gtt freeze
\`\`\`

Congelar es un acto humano y no existe un unfreeze. Desde ese momento el contexto gobernado queda protegido contra escrituras directas de los agentes, y todo cambio pasa por una propuesta que tú apruebas.

## Día a día

\`\`\`
gtt sync
gtt resume
\`\`\`

- gtt sync mantiene al día el contexto de los agentes, el seguimiento de documentos, el índice y la validación en una sola ejecución
- gtt resume entrega el contexto de sesión derivado del estado real del proyecto
- gtt update actualiza GTT Bootstrap y conserva el estado de tu proyecto y tus cambios locales
- gtt change pide un cambio gobernado en pleno desarrollo; gtt proposals, gtt promote y gtt undo lo siguen: https://gtt-method.org/cli/

## Otras formas de instalar

- Con un prompt a tu agente de IA, sin el CLI: https://gtt-method.org/prompts/
- Manualmente, copiando tú mismo los archivos: https://github.com/GTT-Community/gtt-bootstrap/blob/main/.gtt/docs/installation.es.md`,
    searchableEn: "bootstrap install gtt init guide governed context freeze autonomy profile primary ade design document questionnaire",
    searchableEs: "bootstrap instalar gtt init guía contexto gobernado freeze congelar autonomy profile ade primario documento de diseño cuestionario",
  },
  {
    // Method Governance. The method texts are copied from the Method Packs of GTT Bootstrap
    // (.gtt/methods/); regenerate them from there, never reword them here.
    slug: "development-methods",
    titleEn: "Development Methods",
    titleEs: "Métodos de Desarrollo",
    descriptionEn: "Method Governance: choose how your solution is developed (Vertical Slice, DDD, Hexagonal, Layered, Event-First, Walking Skeleton). GTT designs your Epics with that method, ratifies it at the freeze and checks it.",
    descriptionEs: "Method Governance: elige cómo se desarrolla tu solución (Vertical Slice, DDD, Hexagonal, Layered, Event-First, Walking Skeleton). GTT diseña tus Epics con ese método, lo ratifica en el freeze y lo verifica.",
    contentEn: `Method Governance lets you choose, at setup, how your solution will be developed. That choice guides how the agent designs during THINK, it is ratified in the governed context at the freeze, and it is checked afterwards.

\`\`\`
declare (setup / THINK)  ->  ratify (freeze)  ->  verify (freeze check, validation, audit)
\`\`\`

Available since GTT 1.7.0 (GTT Bootstrap and GTT CLI). The texts of every method on this page are copied from its Method Pack, the single source: https://github.com/GTT-Community/gtt-bootstrap/tree/main/.gtt/methods

## Why it matters

Without a chosen method, an AI agent tends to design by layers, because that is the most common shape in its training, not the most suitable one for your project. Epics come out as "data model", "API" and "frontend", and nothing works end to end until the last one is done. When you choose the method, the agent designs with it, and GTT can check that the design follows it.

## How you choose it

gtt init asks two questions after the Autonomy Profile. Without a terminal, answer them with flags; without an answer the method stays OPEN:

\`\`\`
gtt init --dev-method ddd,vertical-slice --start walking-skeleton
gtt init --dev-method help
\`\`\`

## Question 1. How do you want to organise the development of your solution?

Methods may be combined, for example DDD to define the Epics and Vertical Slice to cut them. A combination the packs declare incompatible is refused, and you are asked to change it.

### Vertical Slice (recommended)

The system is organised by complete features, not by technical layers. Each slice is one use case that crosses everything it needs (input, logic, data) and lives together in its own folder. Adding a feature is adding a slice, not touching five layers.

Fits when: You will deliver end-to-end features one at a time and want each change contained in one place.

### Domain-Driven Design

The system is divided into bounded contexts: areas of the business with their own model and language. Each context owns its data and rules, and the others use it only through its public contract. It combines well with Vertical Slice: DDD defines the Epics and Vertical Slice cuts them.

Fits when: The business is complex, has areas with their own rules and vocabulary, and getting the model wrong is costly.

### Event-First

Design starts from the facts of the business: the events that happen ("order confirmed", "payment rejected"), the commands that cause them and the policies that react to them. Modules talk by publishing and consuming events, not by calling into each other.

Fits when: The business is a flow of steps over time, with several parts reacting to the same thing or long-running processes.

### Hexagonal (Ports and Adapters)

The domain sits at the centre and knows nothing of technology. It talks to the outside through ports (interfaces it defines), and adapters connect those ports to the database, the web, queues or external services. Changing a technology is changing an adapter.

Fits when: The business logic must outlive changes of database, framework or providers, and you want to test it without infrastructure.

### Layered

The system is organised in stacked technical layers: presentation, application and data. Each layer uses only the one below and knows nothing of those above. It is the best-known form and the one most frameworks ship with.

Fits when: Your team and framework already work in layers and the system is mostly forms and data with little business logic.

### I am not sure, help me choose

Nothing is chosen now. During THINK the agent reads your sources, proposes a method as a [PROPUESTA] with its reason, and you confirm. Without your confirmation the method stays OPEN.

## Question 2. How do you want to start?

### Walking Skeleton (recommended)

Before building features, build the thinnest version of the system that works end to end: one input, one minimal rule, one stored datum, deployed and tested. Each later Epic then puts flesh on that skeleton instead of inventing the structure as it goes.

Fits when: The stack, the deployment or the integrations carry risk and you want to find the problems in the first week, not at the end.

### Straight to the main functionality

No skeleton Epic first: the first Epic is the most important functionality.

## Help me choose decides nothing

- The agent reads your sources and proposes one method as a [PROPUESTA], with its reason and the parts of your documents it rests on
- It designs no Epic until you answer
- If you do not confirm, the method stays OPEN. An OPEN method does not block the freeze, but it is recorded as an open gap and shown as OPEN in the stack map
- The recommended method is never applied by default

## The same Epic, two ways

An online shop, Epic "Customers can buy". Designed by layers, it becomes three Epics that only work when all three are finished:

\`\`\`
EPIC-001  Data model: products, carts, orders
EPIC-002  REST API for carts and orders
EPIC-003  Frontend: catalog, cart and checkout screens
\`\`\`

Designed with Vertical Slice and a Walking Skeleton, the first Epic is the thinnest path through the whole system, and each later slice delivers something a customer can use:

\`\`\`
EPIC-001  Walking skeleton: one product, one order, deployed and tested end to end
EPIC-002  Customers can buy
          S-1  Add a product to the cart
          S-2  Pay for the cart
          S-3  See the order confirmation
\`\`\`

Each slice in the Epic design records its use case, input and output, logic, the data it touches, its acceptance criterion and what stays out of it.

## The Method Lock

When you confirm the context, the chosen method is written in the governed context and ratified at the freeze:

- architecture.md states the method and why, in words, plus a small block that scripts read
- An ADR locks it when the method is an architectural style. A start strategy such as Walking Skeleton needs no ADR
- The stack map shows a Development method row, and its dependency rules are written with your project's real folders, for example "src/features/* must not depend on another slice"

## What is checked, and where

| Check | Where | Status |
|---|---|---|
| The lock is well formed and names existing methods | freeze, validation | checked |
| The ADR the method requires exists | freeze, validation | checked |
| No incompatible combination | setup, freeze | checked |
| No Epic cut by technical layer (Vertical Slice) | freeze | checked |
| The first Epic is the skeleton (Walking Skeleton) | freeze | checked |
| Every approved design has the method's sections | freeze | checked |
| The method's dependency rules are in the stack map | freeze | checked |
| The code respects those dependency rules | gtt check, through the language's own tool | checked for JavaScript and TypeScript (dependency-cruiser); other languages: declared-only |
| Slices are really thin, contexts keep one language | audit | human judgment |

gtt check reads the ratified method and verifies its dependency rules in the code with the language's own tool. GTT has no import analyser of its own:

\`\`\`
gtt check
\`\`\`

- JavaScript and TypeScript: dependency-cruiser, installed in your project (npm install --save-dev dependency-cruiser). GTT never downloads it for you
- Without the tool installed, gtt check says the result cannot be determined (exit 7). It never reports a pass it did not verify
- Any other language has no adapter yet: the method is reported as declared-only for the code. That is reported, never hidden
- gtt dev-method shows the method in force, its status, the ADR that locks it and its verification level

The verification level each method declares:

| Method | Kind | Locked by an ADR | Incompatible with | Verification |
|---|---|---|---|---|
| Vertical Slice | architecture-style | yes | layered | partial |
| Domain-Driven Design | architecture-style | yes | none | partial |
| Event-First | architecture-style | yes | none | partial |
| Hexagonal (Ports and Adapters) | architecture-style | yes | layered | partial |
| Layered | architecture-style | yes | vertical-slice, hexagonal | partial |
| Walking Skeleton | decomposition-strategy | no | none | partial |

A violation is reported as a conflict, with the rule, the source file and the forbidden dependency, and gtt check exits 1. GTT never corrects your code or your context on its own.

## Changing the method after the freeze

The ratified method is not changed directly, and gtt init does not ask the questions again. A change is a change request with an impact analysis: which slices or modules move, which rules of the stack map change, which ADR is replaced. You decide, and a new freeze ratifies it.`,
    contentEs: `Method Governance te permite elegir, en el seteo, cómo se va a desarrollar tu solución. Esa elección guía cómo diseña el agente durante THINK, queda ratificada en el contexto gobernado en el freeze y se verifica después.

\`\`\`
declarar (seteo / THINK)  ->  ratificar (freeze)  ->  verificar (chequeo del freeze, validación, audit)
\`\`\`

Disponible desde GTT 1.7.0 (GTT Bootstrap y GTT CLI). Los textos de cada método en esta página están copiados de su Method Pack, la fuente única: https://github.com/GTT-Community/gtt-bootstrap/tree/main/.gtt/methods

## Por qué importa

Sin un método elegido, un agente de IA tiende a diseñar por capas, porque es la forma más común en lo que aprendió, no la más adecuada para tu proyecto. Los Epics salen como "modelo de datos", "API" y "frontend", y nada funciona de punta a punta hasta que se termina el último. Cuando eliges el método, el agente diseña con él y GTT puede verificar que el diseño lo siga.

## Cómo se elige

gtt init hace dos preguntas después del Autonomy Profile. Sin terminal, respóndelas con flags; sin respuesta el método queda OPEN:

\`\`\`
gtt init --dev-method ddd,vertical-slice --start walking-skeleton
gtt init --dev-method help
\`\`\`

## Pregunta 1. ¿Cómo quieres organizar el desarrollo de tu solución?

Los métodos se pueden combinar, por ejemplo DDD para definir los Epics y Vertical Slice para cortarlos. Una combinación que los packs declaran incompatible se rechaza, y se te pide cambiarla.

### Vertical Slice (recomendado)

El sistema se organiza por funcionalidades completas, no por capas técnicas. Cada slice es un caso de uso que atraviesa todo lo que necesita (entrada, lógica, datos) y vive junto en su propia carpeta. Agregar una funcionalidad es agregar un slice, no tocar cinco capas.

Conviene si: Vas a entregar funcionalidades de punta a punta, una a la vez, y quieres que cada cambio quede contenido en un solo lugar.

### Domain-Driven Design

El sistema se divide en bounded contexts: zonas del negocio con su propio modelo y su propio lenguaje. Cada contexto es dueño de sus datos y reglas, y los demás lo usan solo por su contrato público. Se combina bien con Vertical Slice: DDD define los Epics y Vertical Slice los corta.

Conviene si: El negocio es complejo, tiene áreas con reglas y vocabulario propios, y equivocarse en el modelo cuesta caro.

### Event-First

El diseño parte de los hechos del negocio: los eventos que ocurren ("pedido confirmado", "pago rechazado"), los comandos que los provocan y las políticas que reaccionan a ellos. Los módulos se comunican publicando y consumiendo eventos, no llamándose por dentro.

Conviene si: El negocio es un flujo de pasos que ocurren en el tiempo, con varias partes que reaccionan a lo mismo o procesos que tardan.

### Hexagonal (Ports and Adapters)

El dominio queda en el centro y no conoce la tecnología. Se comunica con el exterior por puertos (interfaces que él define), y los adaptadores conectan esos puertos con la base de datos, la web, las colas o los servicios externos. Cambiar una tecnología es cambiar un adaptador.

Conviene si: La lógica de negocio debe sobrevivir a cambios de base de datos, framework o proveedores, y quieres probarla sin infraestructura.

### Layered

El sistema se organiza en capas técnicas apiladas: presentación, aplicación y datos. Cada capa usa solo la de abajo y no conoce las de arriba. Es la forma más conocida y la que la mayoría de los frameworks trae por defecto.

Conviene si: Tu equipo y tu framework ya trabajan por capas y el sistema es sobre todo formularios y datos con poca lógica de negocio.

### No estoy seguro, ayúdame a elegir

No se elige nada ahora. Durante THINK el agente analiza tu fuente, te propone un método como [PROPUESTA] con su razón y tú confirmas. Sin tu confirmación el método queda OPEN.

## Pregunta 2. ¿Cómo quieres empezar?

### Walking Skeleton (recomendado)

Antes de construir funcionalidades se construye la versión más delgada del sistema que funciona de punta a punta: una entrada, una regla mínima, un dato guardado, desplegada y con su prueba. Después, cada Epic agrega carne a ese esqueleto en vez de inventar la estructura sobre la marcha.

Conviene si: El stack, el despliegue o las integraciones tienen riesgo y quieres descubrir los problemas en la primera semana, no al final.

### Directo a la funcionalidad principal

Sin un Epic de esqueleto previo: el primer Epic es la funcionalidad más importante.

## Ayúdame a elegir no decide nada

- El agente lee tus fuentes y te propone un método como [PROPUESTA], con su razón y las partes de tus documentos en que se apoya
- No diseña ningún Epic hasta que respondas
- Si no confirmas, el método queda OPEN. Un método OPEN no bloquea el freeze, pero queda registrado como un gap abierto y se ve como OPEN en el mapa del stack
- El método recomendado nunca se aplica por defecto

## El mismo Epic, de dos formas

Una tienda en línea, Epic "Los clientes pueden comprar". Diseñado por capas, se convierte en tres Epics que solo funcionan cuando están los tres terminados:

\`\`\`
EPIC-001  Modelo de datos: productos, carritos, pedidos
EPIC-002  API REST de carritos y pedidos
EPIC-003  Frontend: pantallas de catálogo, carrito y pago
\`\`\`

Diseñado con Vertical Slice y un Walking Skeleton, el primer Epic es el recorrido más delgado por todo el sistema, y cada slice posterior entrega algo que un cliente puede usar:

\`\`\`
EPIC-001  Walking skeleton: un producto, un pedido, desplegado y probado de punta a punta
EPIC-002  Los clientes pueden comprar
          S-1  Agregar un producto al carrito
          S-2  Pagar el carrito
          S-3  Ver la confirmación del pedido
\`\`\`

Cada slice del diseño del Epic registra su caso de uso, entrada y salida, lógica, los datos que toca, su criterio de aceptación y lo que queda fuera de él.

## El Method Lock

Cuando confirmas el contexto, el método elegido se escribe en el contexto gobernado y se ratifica en el freeze:

- architecture.md declara el método y su razón, en palabras, más un pequeño bloque que leen los scripts
- Un ADR lo fija cuando el método es un estilo arquitectónico. Una estrategia de inicio como Walking Skeleton no lleva ADR
- El mapa del stack muestra una fila Development method, y sus reglas de dependencia se escriben con las carpetas reales de tu proyecto, por ejemplo "src/features/* no depende de otro slice"

## Qué se verifica y dónde

| Chequeo | Dónde | Estado |
|---|---|---|
| El lock está bien formado y nombra métodos existentes | freeze, validación | verificado |
| Existe el ADR que el método exige | freeze, validación | verificado |
| Ninguna combinación incompatible | seteo, freeze | verificado |
| Ningún Epic cortado por capa técnica (Vertical Slice) | freeze | verificado |
| El primer Epic es el esqueleto (Walking Skeleton) | freeze | verificado |
| Cada diseño aprobado tiene las secciones del método | freeze | verificado |
| Las reglas de dependencia del método están en el mapa del stack | freeze | verificado |
| El código respeta esas reglas de dependencia | gtt check, con la herramienta propia del lenguaje | verificado para JavaScript y TypeScript (dependency-cruiser); otros lenguajes: declared-only |
| Los slices son de verdad delgados, los contextos mantienen un lenguaje | audit | juicio humano |

gtt check lee el método ratificado y verifica sus reglas de dependencia en el código con la herramienta propia del lenguaje. GTT no tiene un analizador de imports propio:

\`\`\`
gtt check
\`\`\`

- JavaScript y TypeScript: dependency-cruiser, instalado en tu proyecto (npm install --save-dev dependency-cruiser). GTT nunca lo descarga por ti
- Sin la herramienta instalada, gtt check dice que el resultado no se puede determinar (exit 7). Nunca informa un éxito que no verificó
- Cualquier otro lenguaje todavía no tiene adaptador: el método se reporta como declared-only para el código. Eso se informa, nunca se oculta
- gtt dev-method muestra el método vigente, su estado, el ADR que lo fija y su nivel de verificación

El nivel de verificación que declara cada método:

| Método | Tipo | Lo fija un ADR | Incompatible con | Verificación |
|---|---|---|---|---|
| Vertical Slice | architecture-style | sí | layered | partial |
| Domain-Driven Design | architecture-style | sí | ninguno | partial |
| Event-First | architecture-style | sí | ninguno | partial |
| Hexagonal (Ports and Adapters) | architecture-style | sí | layered | partial |
| Layered | architecture-style | sí | vertical-slice, hexagonal | partial |
| Walking Skeleton | decomposition-strategy | no | ninguno | partial |

Una violación se reporta como un conflicto, con la regla, el archivo de origen y la dependencia prohibida, y gtt check termina con 1. GTT nunca corrige tu código ni tu contexto por su cuenta.

## Cambiar de método después del freeze

El método ratificado no se cambia directamente, y gtt init no vuelve a hacer las preguntas. Un cambio es un change request con análisis de impacto: qué slices o módulos se mueven, qué reglas del mapa del stack cambian, qué ADR se reemplaza. Tú decides, y un nuevo freeze lo ratifica.`,
    searchableEn: "gtt check gtt dev-method dependency-cruiser method governance development method vertical slice ddd domain-driven design hexagonal ports adapters layered event-first walking skeleton method lock method pack freeze adr verification declared-only",
    searchableEs: "gtt check gtt dev-method dependency-cruiser method governance método de desarrollo vertical slice ddd domain-driven design hexagonal puertos adaptadores capas layered event-first walking skeleton method lock method pack freeze adr verificación declared-only",
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
