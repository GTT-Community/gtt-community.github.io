# GTT-method V2.1 — Manual de Usuario Rápido

> Fuente: https://cdad-community.github.io/es/manual-usuario-rapido.html
>
> Migración conceptual: CDAD → GTT-method / Governance Through Thinking

## Principio

**Tú defines la intención. GTT-method protege la intención. La IA acelera la implementación.**

La regla de oro: la IA puede analizar, proponer y ejecutar; la autoridad sobre las decisiones gobernadas sigue siendo humana. GTT-method puede introducir fricción deliberada en el desarrollo rápido para guiar al usuario hacia el cumplimiento de los estándares, las reglas y la gobernanza del proyecto.

## 1. El flujo completo

GTT-method convierte la gobernanza en parte natural del trabajo, sin pedirte que administres manualmente cada artefacto.

```text
TÚ define → delega → revisa → acepta/rechaza
              ↓
AGENTE analiza → implementa lo permitido → propone cuando corresponde
              ↓
GTT-method registra decisiones → actualiza contexto → protege lo aprobado
```

Implementación rutinaria: delega.

Cambio de decisión gobernada:

```text
Change Request → Proposal → revisión humana → aceptación → ADR/contexto
```

## 2. Primer uso: Bootstrap

### Prepara el diseño

Deja en la raíz un documento con visión, objetivo, funcionalidad principal, arquitectura, stack, restricciones y decisiones conocidas. No tiene que ser perfecto, pero debe expresar lo que quieres construir.

### Incorpora GTT-method

Entrega al ADE la implementación de GTT-method Bootstrap.

```text
https://github.com/CDAD-Community/cdad-bootstrap
```

Y pídele:

```text
Clona/incorpora GTT-method Bootstrap en este proyecto.
Inspecciona el proyecto y usa mi documento de diseño inicial
como fuente para ejecutar el GTT-method Bootstrap.
No inventes decisiones; si falta información, pregúntame.
```

El agente debe inspeccionar, identificar el documento fuente, detectar conflictos, evitar adivinar, mapear el diseño al contexto GTT-method y mostrarte el resultado.

## 3. Las dos confirmaciones

### A. ¿Este diseño representa lo que quiero construir?

Si no, corrige el diseño y vuelve a revisarlo. Si sí, confirma explícitamente.

### B. ¿GTT-method entendió correctamente mi solución?

Revisa visión, arquitectura, stack, principios, restricciones y glosario. Corrige cualquier error antes de congelar.

**Son decisiones distintas y ambas son necesarias.**

## 4. Revisa el workspace y ejecuta Freeze

Después del Bootstrap encontrarás archivos como `AGENTS.md`, `CHANGE-REQUEST.md`, `SOURCE-BRIEF.*` y el directorio `gtt-method/` con contexto, ADRs, propuestas y scripts.

Mapa rápido:

```text
gtt-method/context/stack.md
```

Cuando hayas confirmado el contexto:

```text
gtt-method/scripts/gtt-method-freeze.sh
```

Después de Freeze, el agente debe leer el contexto gobernado y no modificarlo directamente. La protección no depende solamente de una promesa del agente.

## 5. Desarrollo normal: delega

Una vez congelado el contexto, delega las tareas dentro de los límites establecidos:

```text
Implementa esta funcionalidad siguiendo la arquitectura
y las restricciones definidas por GTT-method. No cambies
decisiones arquitectónicas.
```

No necesitas un Change Request para un bug, un unit test, un endpoint ya definido, un refactor sin cambio arquitectónico o mejoras de logging.

## 6. Cuándo usar `CHANGE-REQUEST.md`

Úsalo cuando cambies una decisión gobernada: tecnología, base de datos, plataforma cloud, framework, patrón arquitectónico, integración, restricción, seguridad, despliegue o un componente mayor.

Explica qué quieres cambiar, por qué, qué lo provocó, el alcance, impacto, riesgos, alternativas y prioridad.

Luego pide al agente:

```text
Process the change request.
```

## 7. Proposal y decisión humana

El agente genera una Proposal con la decisión actual, cambio solicitado, propuesta, motivo, impacto, riesgos, alternativas y elementos del contexto afectados.

Una Proposal **no es una decisión automática**.

| Tu decisión | Resultado |
|---|---|
| Aceptar | El cambio puede continuar por el proceso gobernado. |
| Rechazar | No se modifica la arquitectura. |
| Pedir cambios | El agente revisa y completa la Proposal. |

Nunca aceptes una Proposal solo porque la generó la IA. Revisa qué cambia, motivo, impacto, riesgos y alternativas.

## 8. ADR, contexto y mapa

Una Proposal aceptada que representa una nueva decisión debe quedar registrada como ADR:

```text
Proposal → aprobación humana → ADR → contexto/mapa → implementación
```

El mapa arquitectónico debe seguir a la decisión. No edites `stack.md` directamente para saltarte el flujo.

## 9. Qué no hacer

- No edites directamente el contexto congelado.
- No crees copias para esquivar la protección.
- No desactives los guardrails.
- No crees una Proposal por cada línea de código.
- No aceptes una Proposal sin leerla.

## 10. Checklist rápido

- Preparé o definí el diseño inicial.
- Ejecuté Bootstrap y confirmé el diseño.
- Revisé y confirmé el contexto generado.
- Ejecuté Freeze y comprobé la protección.
- Delego tareas normales sin cambiar decisiones.
- Uso `CHANGE-REQUEST.md` para cambios gobernados.
- Reviso y decido cada Proposal.
- Mantengo ADR, contexto y mapa consistentes.

### Referencia rápida

| Situación | Qué haces |
|---|---|
| Nuevo proyecto | Bootstrap |
| Tarea rutinaria o bug | Delegas, implementas y validas |
| Cambio arquitectónico | `CHANGE-REQUEST.md` |
| Proposal recibida | Revisas, aceptas, rechazas o pides cambios |
| Contexto congelado | No lo editas directamente |

**Recuerda:** define la intención, confirma el contexto, toma las decisiones, delega la implementación y revisa el resultado.

**Human First. AI Accelerated.**

# 11. Cómo usar Epics, Stories y Backlog

Puedes entregar tus Epics y Stories dentro del documento inicial de diseño o en un documento separado de requisitos/backlog. GTT-method analizará ambas fuentes durante el Bootstrap y las incorporará a `gtt-method/backlog.md`. No necesitas preparar ese archivo manualmente.

## 11.1 Dos formas de entregar el backlog

### Opción A — Todo viene en el documento inicial

```text
Design Document
│
├── Product Vision
├── Architecture
├── Technology Stack
├── Constraints
├── EPIC-001: User Management
│   ├── STORY-001: Register user
│   ├── STORY-002: Login
│   └── STORY-003: Reset password
│
└── EPIC-002: Notifications
    ├── STORY-004: Email notification
    └── STORY-005: WhatsApp notification
```

Durante el Bootstrap, el ADE debe identificar las Epics y Stories, validar que estén completas, detectar inconsistencias, no inventar Stories, mapearlas al backlog GTT-method, pedir aclaraciones y presentar el resultado para confirmación.

### Opción B — Diseño y backlog separados

Puedes entregar, por ejemplo:

```text
design.md
backlog.md
```

o:

```text
architecture.md
product-requirements.md
epics-and-stories.md
```

El documento de Epics y Stories es una fuente de requisitos. El ADE no debe copiarlo sin analizarlo: debe comprobar Epics, Stories, IDs, duplicados, relaciones, alcance, consistencia con la visión y consistencia con la arquitectura. Si encuentra contradicciones, debe preguntarte.

## 11.2 Qué hace GTT-method con el backlog

El resultado confirmado queda en:

```text
gtt-method/backlog.md
```

Ese archivo se convierte en la línea de desarrollo gobernada.

```text
SOURCE-BRIEF / Design Document
              +
       Epics & Stories
              ↓
       GTT-method Bootstrap
              ↓
       gtt-method/backlog.md
```

El backlog responde qué vamos a construir y qué sigue ahora.

El contexto responde dentro de qué arquitectura y decisiones vamos a construirlo.

## 11.3 GTT-method no inventa el backlog

Si entregas `EPIC-001` con `STORY-001` y `STORY-002`, el agente no debe crear mágicamente Stories adicionales porque parezcan necesarias.

Si detecta una posible ausencia, debe preguntar:

```text
Detecté que para completar EPIC-001 parece faltar una Story
relacionada con X. ¿Quieres agregarla?
```

La decisión sigue siendo del usuario. Esto mantiene la trazabilidad entre intención y backlog.

## 11.4 Después del Bootstrap

Una vez confirmado el contexto y el backlog:

```text
Design → Epics → Stories → Human Confirmation → Freeze → Development
```

Antes de comenzar una tarea, el agente debe consultar el backlog y determinar qué Epic y Story corresponde:

```text
Voy a implementar STORY-003 — Reset password.
```

La implementación debe respetar el contexto gobernado, los ADRs, la Epic y la Story.

## 11.5 Agregar una Epic después de Freeze

Agregar una Epic estructural o material después de Freeze requiere el mecanismo de cambio gobernado:

```text
CHANGE-REQUEST.md
        ↓
    Proposal
        ↓
 Human Review
        ↓
   Approval
        ↓
  Promotion
        ↓
gtt-method/backlog.md
```

Cuando exista un script de promoción, la Proposal aprobada se aplica mediante el script correspondiente, por ejemplo:

```text
bash gtt-method/proposals/apply-....sh
```

Así el backlog promovido queda trazable y no se convierte en una modificación silenciosa de la IA.

### Regla sencilla

```text
Design + Epics + Stories
          ↓
      GTT-method
          ↓
Governed Context + Backlog
          ↓
          AI
          ↓
     Implementation
```

Una vez confirmado, `gtt-method/backlog.md` se convierte en la línea de desarrollo gobernada del proyecto.

---

# Fuente original

Español:
https://cdad-community.github.io/es/manual-usuario-rapido.html

English:
https://cdad-community.github.io/en/quick-user-manual.html

El contenido anterior se reconstruye a partir de las versiones publicadas del manual en español e inglés. citeturn0view0turn2view0
