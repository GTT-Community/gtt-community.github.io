# GTT Methodology — Current-State Website Update
## Source of truth for updating `https://gtt-community.github.io/methodology`

> **GTT Governance Canonical:**  
> https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md

> **Purpose:** This document is an implementation/content brief for Claude to update the GTT Methodology page based on the current GTT architecture and the implemented GTT Bootstrap 1.0 + GTT CLI v1.0 model.

---

# 1. Critical correction

This document is about **GTT**.

Do **not** use CDAD terminology, CDAD branding, CDAD URLs, CDAD repositories, CDAD definitions, or CDAD concepts anywhere in the page.

The page being updated is:

`https://gtt-community.github.io/methodology`

The page must represent **GTT Method** as it exists now, including its implemented Bootstrap and published CLI.

---

# 2. Current GTT product/methodology hierarchy

The most important change is to make the hierarchy unmistakable.

```text
                         GTT METHOD
                       METHODOLOGY
                            │
                            ▼
                    GTT BOOTSTRAP
              Reference Implementation
                            │
              versioned contracts/capabilities
                            │
                            ▼
                       GTT CLI
                 Operational Surface
                            │
                            ▼
                    ADE + Human
```

The page must communicate:

### GTT Method
The methodology and governance model.

It defines what GTT means, how GTT governs development, how evidence is handled, how proposals and decisions work, how the project is frozen, how changes are controlled, and how AI Development Environments participate.

### GTT Bootstrap
The implementation of the GTT methodology.

Bootstrap contains the GTT semantic engine/domain and the versioned contracts and services that make GTT executable inside a project.

### GTT CLI
The operational interface to GTT Bootstrap.

The CLI installs, detects, selects, invokes, validates, updates, resumes, exports, cleans and recovers GTT projects.

The CLI must **not** be described as a second GTT engine.

---

# 3. Recommended hero

Use a strong methodology-first hero.

## GTT Method

### Governed AI-Assisted Software Development

**GTT is a methodology for governing software development when AI agents participate in the development process.**

GTT establishes the governance model for project context, evidence, architecture, proposals, decisions, constraints, rules, validation, freeze and controlled change.

It is implemented through **GTT Bootstrap** and operated through **GTT CLI**.

Suggested compact architecture visual:

```text
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
```

Do not lead with the CLI.

Do not make GTT look like a command-line product.

The methodology is the product/conceptual center.

---

# 4. What is GTT?

The page should answer this immediately.

Suggested copy:

> **GTT is a methodology for governed AI-assisted software development.**
>
> It defines how project context, evidence, architecture, rules, constraints, proposals, decisions, validation and controlled change are managed when AI Development Environments and AI coding agents participate in software development.

Then explain:

GTT is designed around a separation between:

- the methodology and its governance semantics;
- the implementation of those semantics;
- the operational tooling used to install and operate them;
- the ADEs and agents that perform development work.

This separation allows GTT to remain independent of a specific AI development environment.

---

# 5. The problem GTT solves

Do not make this generic "AI is powerful" marketing copy.

Explain the concrete engineering/governance problems GTT addresses.

## 5.1 Context is not automatically governance

An AI agent can receive large amounts of information without that information having a defined authority.

GTT provides an explicit model for determining what participates in governed development context and how that context is used.

## 5.2 Evidence and reasoning must be distinguishable

GTT establishes an evidence boundary.

The system must be able to distinguish:

- what came from authorized evidence;
- what is missing;
- what conflicts;
- what is proposed;
- what has actually been decided.

This prevents generated reasoning from silently becoming project authority.

## 5.3 Proposals are not decisions

AI agents can generate architectural and implementation proposals.

GTT separates proposals from ratified decisions.

The agent can reason and propose.

The governed project state is established through the GTT decision process.

## 5.4 Architecture must remain governed

GTT prevents the implementation produced by an agent from silently becoming the project's new architectural authority.

Architectural intent, constraints and decisions remain explicit GTT artifacts.

## 5.5 Freeze must establish authority

GTT uses a freeze mechanism to establish the governed state.

A freeze is not simply a Git operation.

It is a governance boundary.

After freeze, changes must follow the GTT change process rather than silently rewriting governed state.

## 5.6 Multiple ADEs need one governance model

A project can be touched by several development environments.

For example:

- Claude Code;
- Codex;
- GitHub Copilot;
- Kiro;
- other supported ADEs.

GTT therefore uses:

```text
one GTT governance model
+
multiple ADE integration surfaces
+
exactly one Primary ADE
```

The Primary ADE is a workflow identity.

It does not receive governance authority.

## 5.7 Development must be recoverable

GTT also addresses operational continuity.

Project state can be inspected and session context can be derived from actual project state.

The goal is not to make an agent's private memory the authority.

The project remains the source of governed truth.

---

# 6. GTT methodology

This section must be visually prominent.

## GTT is the methodology

GTT should be explained as a governance methodology, not as a CLI.

The methodology establishes the rules and semantic contracts around:

```text
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
```

Important:

The implementation documents explicitly establish that **GTT Bootstrap owns these semantics** and the CLI must not duplicate them.

The website should therefore describe these as capabilities of the **GTT Method / Bootstrap implementation**, not as independent CLI features.

---

# 7. GTT methodology operating model

Use a clear conceptual flow.

```text
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
```

Do not describe THINK as a one-time phase.

The current model treats the reasoning mode as re-entrant when changes require governance.

---

# 8. Evidence and provenance

Create a concise but strong methodology section.

GTT separates retrieval/evidence from reasoning.

Conceptual model:

```text
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
```

The important principle is:

> An agent's generated reasoning must not silently become evidence or governed project truth.

GTT distinguishes evidence, proposals and decisions.

This is one of the methodology's central governance mechanisms.

---

# 9. Freeze and controlled change

Explain:

```text
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
```

Do not present "unfreeze" as a normal GTT workflow.

The governance model is based on controlled re-entry and re-freeze rather than turning governance off.

---

# 10. ADE model

GTT must be presented as ADE-independent.

Use:

```text
                    GTT METHOD
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      Claude Code      Codex          Kiro
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                 Governed Project
```

Add other supported ADEs where appropriate, but do not make the methodology dependent on commercial product names.

Key message:

> The ADE executes development work. GTT provides the governance model.

The current Bootstrap model supports several ADE integration surfaces while maintaining one governance model and one Primary ADE.

---

# 11. GTT Bootstrap

Now introduce Bootstrap as the concrete implementation.

## What is GTT Bootstrap?

Suggested copy:

> **GTT Bootstrap is the reference implementation of the GTT Method.**
>
> It contains the semantic and operational contracts required to apply GTT to a real software project, including governance, evidence, architecture/context semantics, proposals, decisions, validation, freeze, ADE integration and project lifecycle services.

The page should explicitly state:

> **Bootstrap is the implementation source of truth for GTT semantics.**

The CLI consumes Bootstrap.

The CLI does not reimplement GTT.

---

# 12. What GTT Bootstrap solves

Present the high-level problems Bootstrap solves.

### Project governance foundation

Bootstrap establishes the project structure and contracts required to operate GTT.

### Governance semantics

Bootstrap contains the implementation of GTT governance rather than leaving governance interpretation to the CLI.

### Evidence boundary

Bootstrap owns the evidence/grounding/provenance semantics.

### Architecture and context semantics

Bootstrap provides the semantic model used to govern project architecture and context.

### Proposal and decision semantics

Bootstrap distinguishes proposals from governed decisions.

### Freeze

Bootstrap owns freeze semantics and the validation surrounding the governed state.

### ADE integration

Bootstrap provides the integration surfaces required for represented ADEs.

### Multi-ADE coordination

Bootstrap maintains the state required for multiple participating ADEs and one Primary ADE.

### Deterministic validation

Bootstrap provides deterministic validation services.

### Project status

Bootstrap provides status generation from project state.

### Session context

Bootstrap provides session-context derivation from actual project state.

### Index and retrieval

Bootstrap provides technical indexing, query/retrieval and reconciliation capabilities.

### GTTGuard

Bootstrap provides GTTGuard-related protection/guard synchronization capabilities.

### Export and recovery

Bootstrap defines clean/export ownership and recovery-related contracts.

---

# 13. GTT Bootstrap — service catalog

This should be one of the strongest sections on the page.

Use a concise service/capability grid.

## Governance Engine

**Purpose:** Implements the GTT governance semantics that define how project context, evidence, proposals, decisions, architecture and freeze are handled.

## Evidence & Grounding

**Purpose:** Establishes the boundary between authorized source material, evidence and generated reasoning.

## Provenance

**Purpose:** Maintains the relationship between project assertions and their supporting evidence or governance state.

## Architecture / Context Semantics

**Purpose:** Provides the semantic model for governing architecture, context and project intent.

## Proposal Management

**Purpose:** Supports the distinction between agent-generated proposals and governed project decisions.

## Decision / ADR Semantics

**Purpose:** Provides the semantic contracts used to record and relate governed decisions.

## Freeze

**Purpose:** Establishes and validates the governed project state.

## Validation

**Purpose:** Runs deterministic GTT validation rather than relying on an AI agent to decide whether the project is structurally valid.

## ADE Integration

**Purpose:** Provides the integration surfaces required for AI Development Environments participating in the project.

## Multi-ADE State

**Purpose:** Tracks participating ADEs while preserving a single GTT governance model.

## Primary ADE

**Purpose:** Identifies the ADE used as the primary workflow participant without granting it governance authority.

## Templates

**Purpose:** Provides Bootstrap-owned templates used during project initialization and GTT workflows.

## Initial Design Questionnaire

**Purpose:** Provides a Bootstrap-owned questionnaire when the project does not have sufficient initial design/source material.

## Source Manifest

**Purpose:** Provides the structure required to identify and manage initial project source material.

## Working Agreements

**Purpose:** Provides Bootstrap-owned structures for project working agreements without confusing them with GTT governance authority.

## Status

**Purpose:** Derives operational project/GTT state from actual project artifacts.

## Session Context

**Purpose:** Derives operational continuity information from actual project state so work can be resumed without making agent memory the project's authority.

## Technical Index

**Purpose:** Maintains machine-oriented project indexing needed by GTT services.

## Query / Retrieval

**Purpose:** Provides structured access to indexed project information.

## Reconciliation

**Purpose:** Detects and reconciles relevant differences between GTT-managed state and project state according to Bootstrap contracts.

## GTTGuard

**Purpose:** Provides GTT protection/guard synchronization mechanisms defined by Bootstrap.

## Clean Export

**Purpose:** Defines what GTT-owned material can be excluded when producing a clean delivery artifact.

## Recovery

**Purpose:** Defines the portable recovery information required to reconstruct a GTT installation and operational state.

## Session Memory Adapter Contracts

**Purpose:** Defines the integration boundary for session-memory mechanisms without transferring project governance authority to an ADE's private memory.

---

# 14. Bootstrap implementation architecture

Show:

```text
                         GTT METHOD
                             │
                             ▼
                    GTT BOOTSTRAP 1.0
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
      Governance          Engine / Domain     ADE Services
      Evidence            Validation          Templates
      Provenance          Status              Questionnaire
      Architecture        Freeze              Integrations
      Proposals            Query              Session
      Decisions            Reconcile           Recovery
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                             ▼
                    Versioned Contracts
                             │
                             ▼
                         GTT CLI
```

This visual is important because it explains why the CLI stays small.

---

# 15. GTT CLI

Now introduce the CLI.

## What is GTT CLI?

Suggested copy:

> **GTT CLI is the operational surface of GTT.**
>
> It provides the command-line lifecycle for discovering, installing, configuring, validating, operating, updating, resuming, freezing, exporting and recovering a GTT project through the GTT Bootstrap contracts.

Critical statement:

> **GTT CLI is not a second GTT engine.**

The CLI consumes and orchestrates Bootstrap.

It must not reproduce GTT methodology semantics.

---

# 16. What GTT CLI solves

### Installation complexity

The CLI provides a consistent way to initialize GTT in a project and install a compatible Bootstrap.

### Bootstrap resolution

The CLI resolves the required Bootstrap and verifies compatibility.

### ADE discovery

The CLI detects represented/available ADEs and manages their GTT integration.

### Primary ADE selection

The CLI allows the project to establish one Primary ADE while preserving the fact that it has no governance authority.

### Initial source selection

The CLI discovers candidate initial project/design documents and allows explicit selection.

### Missing design source

If the project lacks sufficient initial source material, the CLI requests the Bootstrap-owned Initial Design Questionnaire.

### Operational lifecycle

The CLI exposes the lifecycle operations required to work with an installed GTT project.

### Validation

The CLI delegates validation to Bootstrap.

### Status and inspection

The CLI exposes project/GTT operational state.

### Resume

The CLI supports deterministic resumption from project state and Bootstrap session context.

### Freeze

The CLI invokes the Bootstrap freeze contract.

### Update

The CLI updates Bootstrap safely while maintaining compatibility.

### Recovery

The CLI can create/use GTT recovery information.

### Clean export

The CLI can create a clean delivery artifact without destroying the governed development project.

### Clean removal

The CLI can remove GTT from a project when explicitly requested, with recovery considerations.

### CI/CD

The CLI provides non-interactive and machine-readable operational workflows suitable for automation and CI.

---

# 17. GTT CLI — service catalog

Use a concise capability grid.

## Project Discovery

Detects the host project and determines whether GTT is already present.

## Bootstrap Resolution

Finds and resolves a compatible GTT Bootstrap release.

## Compatibility

Verifies CLI/Bootstrap compatibility before unsafe operations.

## ADE Detection

Detects supported ADEs represented in the project/environment.

## ADE Installation

Installs the required GTT integration surfaces for participating ADEs.

## Primary ADE Configuration

Establishes exactly one Primary ADE for the project's workflow.

## Source Discovery

Finds candidate project/design source documents during initialization.

## Initial Source Selection

Allows explicit selection of the source material used to initialize the GTT project.

## Methodology Profile Selection

Allows selection of the GTT methodology application profile:

```text
LIGHT
MEDIUM
HARD
```

The CLI selects the profile.

Bootstrap defines its semantic meaning.

## Project Initialization

`gtt init` orchestrates the complete initialization workflow.

## Status

`gtt status` exposes deterministic project/GTT state.

## Inspection

`gtt inspect` exposes installation topology and operational state.

## Validation

`gtt validate` delegates validation to Bootstrap.

## Resume

`gtt resume` supports continuation from deterministic project state.

## Freeze

`gtt freeze` invokes the Bootstrap freeze contract.

## Doctor

`gtt doctor` provides operational diagnostics.

## Audit

`gtt audit` exposes operational/audit information according to Bootstrap contracts.

## Update

`gtt update` manages safe Bootstrap updates and compatibility.

## Clean Export

`gtt export --clean` produces a clean delivery artifact while leaving the development project intact.

## Clean

`gtt clean` removes GTT from the current project after explicit confirmation.

## Recovery

Recovery snapshots provide portable information needed to reconstruct GTT installation and operational state.

## Version

`gtt version` reports the CLI version.

---

# 18. GTT CLI command surface

The page may show the current high-level command surface:

```text
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
```

Do not turn the Methodology page into a CLI manual.

Link to the CLI documentation for command details.

---

# 19. GTT CLI initialization flow

Show the operational flow:

```text
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
   ├── choose methodology profile
   ├── install Core
   ├── install ADE integrations
   ├── persist operational state
   ├── validate
   ├── create Bootstrap handoff
   └── optionally invoke Primary ADE
```

Important:

The CLI does not design the system.

It initializes and orchestrates the GTT environment.

---

# 20. GTT CLI and deterministic state

Highlight this distinction:

```text
GTT Project State
       │
       ▼
Bootstrap / CLI
       │
       ▼
Derived operational status
```

Not:

```text
Agent prose
       │
       ▼
Project truth
```

The CLI can derive operational/session information from real project state.

Agent memory remains an ADE-level mechanism.

GTT governance remains in the project and Bootstrap contracts.

---

# 21. GTT + ADEs

Create a dedicated section explaining the relationship.

```text
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
```

Use the following principle:

> **The ADE is the development environment. GTT is the governance model.**

The Primary ADE is a workflow role, not a governance role.

Secondary ADEs are not ignored. If they participate in the project, their GTT integration must be represented according to Bootstrap contracts.

---

# 22. Methodology vs Bootstrap vs CLI

This comparison should be highly visible.

| Layer | What it is | Main responsibility |
|---|---|---|
| **GTT Method** | Methodology | Defines how AI-assisted development is governed. |
| **GTT Bootstrap** | Reference implementation | Implements GTT semantics, governance and versioned capabilities. |
| **GTT CLI** | Operational tool | Installs, orchestrates, validates, operates, updates, exports and recovers GTT projects. |
| **ADE / Agent** | Development environment | Performs development work within the governed project. |

Add:

> **The CLI must not become the mind of GTT.**

---

# 23. What GTT is NOT

This section should prevent misunderstandings.

## GTT is not an LLM

GTT does not generate software by itself.

## GTT is not an AI coding agent

GTT does not replace Claude Code, Codex, Kiro, Copilot or other ADEs.

## GTT is not an IDE

GTT is independent of the development environment used by the developer.

## GTT is not only a CLI

The CLI is the operational surface of the methodology.

## GTT is not only Bootstrap

Bootstrap is the implementation of the methodology.

## GTT is not a prompt library

GTT is a governance methodology with explicit project state, evidence, proposals, decisions, validation and change control.

---

# 24. Recommended "Why GTT" visual

Use:

```text
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
```

---

# 25. Recommended page structure

The final page should approximately follow this order:

```text
1. HERO
   GTT Method — Governed AI-Assisted Software Development

2. WHAT IS GTT?

3. THE PROBLEM GTT SOLVES

4. GTT METHODOLOGY
   - Governance
   - Context
   - Evidence
   - Proposals
   - Decisions
   - Validation
   - Freeze
   - Change

5. HOW GTT WORKS

6. GTT + ADEs

7. GTT BOOTSTRAP
   - What it is
   - What it solves
   - Service/capability catalog

8. GTT CLI
   - What it is
   - What it solves
   - Service/capability catalog
   - Command surface

9. GTT / BOOTSTRAP / CLI ARCHITECTURE

10. METHOD vs BOOTSTRAP vs CLI

11. WHAT GTT IS NOT

12. GET STARTED
   - Methodology
   - Bootstrap
   - CLI

13. REFERENCES / GITHUB
```

---

# 26. Content hierarchy rules

These rules are important.

### Rule 1 — Methodology first

Never start the page with:

> "Install GTT CLI..."

Start with:

> "GTT is a methodology..."

### Rule 2 — Bootstrap second

Explain how the methodology becomes executable.

### Rule 3 — CLI third

Explain how the implementation becomes operational.

### Rule 4 — ADE last

Explain that agents execute development inside the governed system.

### Rule 5 — Do not collapse the three layers

Never write:

> "GTT is a CLI that..."

Prefer:

> "GTT is a methodology implemented through GTT Bootstrap and operated through GTT CLI."

---

# 27. Current implementation facts to preserve

The implementation specifications establish the following architecture:

```text
GTT Method
    ↓
GTT Bootstrap 1.0
    ↓
versioned contracts / capabilities
    ↓
GTT CLI v1.0
    ↓
ADE
    ↓
Human
```

Bootstrap owns:

- GTT methodology;
- governance rules;
- evidence boundary;
- grounding;
- provenance;
- architecture/context semantics;
- ADR semantics;
- proposal semantics;
- freeze semantics;
- human decision boundary;
- ADE integration surfaces;
- Multi-ADE state;
- Primary ADE state;
- ADE install ledger;
- scaffold manifest;
- Bootstrap-owned templates;
- Initial Design Questionnaire;
- source-manifest template;
- working-agreements template;
- deterministic validation scripts;
- status generation;
- session context derivation;
- artifact identity;
- technical index;
- reconciliation;
- query/retrieval;
- GTTGuard;
- provenance checks;
- freeze;
- clean/export ownership metadata;
- Session Memory adapter contracts.

These are supported by the current implementation specification and should form the backbone of the Bootstrap section.

---

# 28. Bootstrap internal service references

Do not expose these as the public conceptual model, but they can inform links/documentation:

```text
.gtt/scripts/gtt-ade.sh
.gtt/scripts/gtt-template.sh
.gtt/scripts/gtt-status.sh
.gtt/scripts/gtt-validate.sh
.gtt/scripts/gtt-freeze.sh
.gtt/scripts/gtt-session-context.sh
.gtt/scripts/gtt-index.sh
.gtt/scripts/gtt-reconcile.sh
.gtt/scripts/gtt-query.sh
.gtt/scripts/gtt-guard-sync.sh
.gtt/scripts/gtt-check-*.sh
```

The public page should describe the services, not force the reader to understand internal script filenames.

---

# 29. Methodology profiles

Include a small section:

## GTT Methodology Profiles

GTT supports three application profiles:

```text
LIGHT
MEDIUM
HARD
```

The CLI allows the project to select the profile.

Bootstrap owns the semantics associated with each profile.

Do not invent detailed marketing descriptions for the profiles unless those descriptions are present in the current Bootstrap documentation.

If detailed profile semantics are documented elsewhere, link to that documentation.

---

# 30. Session continuity

Include this carefully.

GTT provides session-context capabilities as part of the Bootstrap/operational model.

The purpose is to help recover where work is and what remains to be done.

The page must distinguish:

```text
GOVERNED PROJECT STATE
        │
        ├── Architecture
        ├── Decisions
        ├── Constraints
        └── Validated state

SESSION / OPERATIONAL CONTEXT
        │
        ├── Current work
        ├── Current progress
        ├── Pending work
        └── Operational orientation
```

Session context is not an alternative architecture authority.

This is especially important when the project uses multiple ADEs.

---

# 31. Clean export and recovery

Include these as operational lifecycle capabilities.

### Clean Export

GTT can produce a clean delivery artifact while preserving the development project.

Conceptually:

```text
GTT Development Project
        │
        ▼
gtt export --clean
        │
        ▼
Clean delivery artifact
```

### Clean

`gtt clean` removes GTT from the current project and is destructive.

It should require explicit confirmation and support recovery considerations.

### Recovery

GTT can preserve portable recovery information so the GTT installation and operational state can be reconstructed.

Do not describe recovery as a generic full repository backup.

---

# 32. CI/CD

The page should mention that GTT CLI is designed to support automation and CI/CD.

Relevant operational properties include:

- deterministic validation;
- non-interactive validation;
- stable operational behavior;
- machine-readable output;
- version/compatibility checks;
- safe lifecycle operations.

Do not claim a particular CI provider unless documented.

---

# 33. AI discoverability / SEO

The page should naturally establish strong semantic relationships around:

- GTT Method;
- GTT Methodology;
- governed AI-assisted software development;
- AI development governance;
- AI coding agents;
- AI Development Environments;
- GTT Bootstrap;
- GTT CLI;
- evidence;
- provenance;
- architecture governance;
- proposals;
- decisions;
- freeze;
- change governance;
- multi-ADE development.

Avoid keyword stuffing.

The page should be readable as technical documentation first.

---

# 34. Metadata recommendation

Use a title similar to:

```html
<title>GTT Method — Governed AI-Assisted Software Development</title>
```

Suggested description:

```text
GTT is a methodology for governing AI-assisted software development, implemented through GTT Bootstrap and operated through GTT CLI.
```

Canonical URL:

```text
https://gtt-community.github.io/methodology
```

Do not introduce CDAD metadata.

---

# 35. Links

The page should provide clear links to:

### GTT Method

`https://github.com/GTT-Community/gtt-method`

### GTT Canonical

`https://github.com/GTT-Community/gtt-method/blob/main/GTT-CANONICAL-v2.1.md`

### GTT Bootstrap

Use the actual current GTT Bootstrap repository URL from the GTT Community repository.

### GTT CLI

Use the actual current GTT CLI repository/release URL from the GTT Community repository.

Do not invent URLs.

If a repository URL differs from the above assumptions, use the real current repository URL.

---

# 36. Important implementation instruction for Claude

Before modifying the HTML:

1. Inspect the current `/methodology` page.
2. Inspect the current GTT Method repository.
3. Inspect the current GTT Bootstrap repository.
4. Inspect the current published GTT CLI repository/release.
5. Reconcile the public page with the **implemented** state.
6. Do not copy historical roadmap items into the "current capabilities" section.
7. Do not claim a capability is implemented solely because it exists in an old design document.
8. If a capability is explicitly implemented in the current Bootstrap/CLI, it can be presented as current.
9. Keep methodology, implementation and tooling clearly separated.
10. Preserve the GTT canonical reference exactly.
11. Remove any stale CDAD terminology or links if present.
12. Do not invent new GTT terminology.
13. Do not turn the page into a command reference.
14. Keep the page technical, authoritative and understandable.
15. Make the methodology visually dominant over Bootstrap and CLI.

---

# 37. Final positioning statement

The page should converge on this message:

> **GTT is the methodology.**
>
> **GTT defines how AI-assisted software development is governed.**
>
> **GTT Bootstrap implements that methodology and provides the semantic and governance capabilities required by a GTT project.**
>
> **GTT CLI provides the operational surface for installing, configuring, validating, operating, updating, recovering and exporting GTT projects.**
>
> **AI Development Environments and agents perform the development work inside that governed environment.**

The final conceptual model is:

```text
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
```

The page must make it immediately obvious that **GTT is a methodology first, Bootstrap is its implementation, and CLI is its operational tooling.**
