# GTT-Method --- Home: "La metodología vive en el proyecto"

> **Instrucción de implementación para Codex**
>
> Incorporar esta sección al **Home de GTT-Method**, inmediatamente
> después del bloque:
>
> **Abierto** · **Flexible** · **Extensible**
>
> y antes del footer existente.
>
> El objetivo es explicar visualmente que **GTT es una metodología**, y
> que la metodología no vive solamente en una página web o en un
> documento conceptual: **vive dentro de cada proyecto, estructurada en
> un dominio metodológico `gtt-domain/`**.
>
> Esta sección debe implementarse como **HTML + CSS nativo del sitio**.
> No usar una imagen para representar el contenido.

------------------------------------------------------------------------

## 1. Objetivo conceptual

La sección debe comunicar de forma inmediata:

> **GTT-Method --- La metodología vive en el proyecto.**

Subtítulo:

> La dirección, las decisiones y la intención humana quedan
> estructuradas en el workspace.

Mensaje central:

> Cada proyecto puede contener un directorio `gtt-domain/` donde se
> organiza el contexto metodológico que orienta el desarrollo.

La sección debe defender explícitamente por qué GTT puede generar varios
archivos:

> **Estos archivos no son burocracia. Son la metodología materializada
> en el proyecto.**

Los archivos permiten hacer explícitos elementos que normalmente
permanecen dispersos en conversaciones, memoria humana, documentos
aislados o conocimiento tácito.

------------------------------------------------------------------------

# 2. Ubicación en el Home

Orden aproximado del Home:

``` text
Hero
   ↓
Método GTT
   ↓
Abierto
Flexible
Extensible
   ↓
[ NUEVA SECCIÓN ]
“La metodología vive en el proyecto”
   ↓
Footer
```

No modificar el Hero ni el bloque anterior salvo que sea estrictamente
necesario para mantener consistencia visual.

No insertar la sección al inicio de la página.

------------------------------------------------------------------------

# 3. Principio visual

La referencia visual es una **documentación técnica / dashboard
editorial**, no una infografía rasterizada.

La implementación debe sentirse como parte nativa del sitio.

Características:

-   fondo blanco;
-   texto negro;
-   grises únicamente derivados de negro/blanco;
-   bordes grises muy suaves;
-   sombras mínimas o inexistentes;
-   tipografía sans-serif;
-   mucho espacio en blanco;
-   estructura editorial;
-   líneas finas;
-   iconografía monocromática;
-   jerarquía tipográfica fuerte;
-   apariencia técnica y profesional;
-   nada ornamental que compita con el contenido.

### Restricción absoluta de color

**No utilizar colores cromáticos.**

No usar:

``` css
blue
green
red
orange
purple
teal
yellow
```

Tampoco usar gradientes cromáticos.

La paleta debe estar limitada a:

``` css
#000000
#111111
#1a1a1a
#333333
#555555
#777777
#999999
#cccccc
#e5e5e5
#f2f2f2
#f7f7f7
#ffffff
```

Se permite utilizar distintos valores de gris, pero el resultado global
debe percibirse como **blanco y negro**.

------------------------------------------------------------------------

# 4. Arquitectura visual

La sección debe tener tres áreas principales:

``` text
┌──────────────────────────────────────────────────────────────┐
│ TÍTULO / EXPLICACIÓN                                         │
├───────────────────┬────────────────────────┬─────────────────┤
│                   │                        │                 │
│  WORKSPACE        │  GTT-DOMAIN            │  SIGNIFICADO    │
│                   │                        │                 │
│  my-project/      │  01 foundation         │  AQUÍ HABITA    │
│    gtt-domain/ ←──│  02 architecture       │  LA METODOLOGÍA │
│    src/           │  03 standards          │                 │
│    tests/         │  04 rules              │  Por qué hay    │
│    docs/          │  05 workflow            │  tantos         │
│    ...            │  06 evolution           │  archivos       │
│                   │                        │                 │
├───────────────────┴────────────────────────┴─────────────────┤
│ INTENCIÓN → DISEÑO → DECISIÓN → CONSTRUCCIÓN → EVOLUCIÓN   │
└──────────────────────────────────────────────────────────────┘
```

No es necesario copiar literalmente esta estructura si el layout
existente requiere otra solución, pero debe conservarse esta jerarquía
conceptual.

------------------------------------------------------------------------

# 5. Encabezado de la sección

Usar un encabezado grande y editorial:

``` text
METODOLOGÍA EN TU PROYECTO

GTT-Method —
La metodología vive en el proyecto
```

Subtítulo:

``` text
La dirección, las decisiones y la intención humana
quedan estructuradas en el workspace.
```

El eyebrow puede utilizar:

``` css
font-size: 0.72rem;
font-weight: 600;
letter-spacing: 0.28em;
text-transform: uppercase;
color: #555;
```

Título:

``` css
font-size: clamp(2.4rem, 5vw, 4.8rem);
line-height: 0.98;
font-weight: 700;
letter-spacing: -0.045em;
color: #000;
```

Subtítulo:

``` css
font-size: clamp(1.1rem, 2vw, 1.55rem);
line-height: 1.45;
color: #333;
max-width: 900px;
```

------------------------------------------------------------------------

# 6. Panel izquierdo --- Workspace

Título:

``` text
Estructura del workspace del proyecto
```

Texto:

``` text
Cada proyecto incluye un directorio gtt-domain/
donde vive la metodología GTT.
```

Representar un árbol de archivos mediante HTML/CSS:

``` text
my-project/

├── gtt-domain/       ← Aquí vive la metodología GTT
├── src/              Código fuente del proyecto
├── tests/            Pruebas
├── docs/             Documentación
├── scripts/          Scripts y herramientas
├── .github/          CI/CD
└── ...
```

### Importante

`gtt-domain/` debe estar visualmente destacado, pero sin usar color.

Usar:

-   fondo gris muy claro;
-   borde negro o gris;
-   peso tipográfico mayor;
-   indicador `← Aquí vive la metodología GTT`.

Ejemplo:

``` css
.gtt-tree__item--methodology {
  background: #f2f2f2;
  border: 1px solid #d5d5d5;
  font-weight: 600;
}
```

No utilizar azul para destacar el directorio.

------------------------------------------------------------------------

# 7. Panel central --- Contenido de `gtt-domain/`

Este es el núcleo de la sección.

Título:

``` text
Contenido de gtt-domain/
```

Descripción:

``` text
Un conjunto de archivos organizados que capturan el contexto,
las decisiones, reglas y evolución del proyecto.
```

Mostrar seis dominios metodológicos.

## 01 --- Foundation

Directorio:

``` text
01-foundation/
```

Archivos representativos:

``` text
mission.md
goals.md
scope.md
context.md
```

Descripción:

``` text
Por qué existe el proyecto,
qué busca lograr y cuál es su contexto.
```

------------------------------------------------------------------------

## 02 --- Architecture

Directorio:

``` text
02-architecture/
```

Archivos:

``` text
architecture.md
decisions.md
diagrams/
```

Descripción:

``` text
Cómo está diseñado el sistema
y por qué se tomaron esas decisiones.
```

------------------------------------------------------------------------

## 03 --- Standards

Directorio:

``` text
03-standards/
```

Archivos:

``` text
coding-standards.md
tech-stack.md
naming.md
```

Descripción:

``` text
Estándares y convenciones
que mantienen consistencia.
```

------------------------------------------------------------------------

## 04 --- Rules

Directorio:

``` text
04-rules/
```

Archivos:

``` text
agent-rules.md
file-protection.md
change-policy.md
```

Descripción:

``` text
Reglas y límites para agentes
y colaboradores.
```

------------------------------------------------------------------------

## 05 --- Workflow

Directorio:

``` text
05-workflow/
```

Archivos:

``` text
development-flow.md
review-process.md
release-process.md
```

Descripción:

``` text
Cómo se trabaja, revisa
y valida el desarrollo.
```

------------------------------------------------------------------------

## 06 --- Evolution

Directorio:

``` text
06-evolution/
```

Archivos:

``` text
changelog.md
lessons-learned.md
future-ideas.md
```

Descripción:

``` text
Cómo evoluciona el conocimiento
y el proyecto.
```

------------------------------------------------------------------------

# 8. Tratamiento visual de los seis bloques

Los seis bloques deben ser visualmente homogéneos.

No convertirlos en seis tarjetas de colores.

Usar solamente variaciones de:

``` css
border: 1px solid #e1e1e1;
background: #ffffff;
```

Separadores:

``` css
border-bottom: 1px solid #e5e5e5;
```

Hover:

``` css
background: #f7f7f7;
```

El estado activo puede utilizar:

``` css
border-color: #111;
background: #f2f2f2;
```

pero sin cambiar a ningún color cromático.

------------------------------------------------------------------------

# 9. Panel derecho --- "Aquí habita la metodología"

Título:

``` text
AQUÍ HABITA

LA METODOLOGÍA
```

Texto:

``` text
gtt-domain/ es el dominio metodológico del proyecto.

Aquí se organiza y preserva la intención humana,
las decisiones de diseño, las reglas, los estándares
y la evolución.
```

Crear una caja destacada:

``` text
Estos archivos no son burocracia:

son el contexto gobernado que preserva
intención, decisiones, reglas y dirección.
```

Esta frase debe tener alta jerarquía visual.

------------------------------------------------------------------------

# 10. Bloque "¿Por qué tantos archivos?"

Título:

``` text
¿Por qué tantos archivos?
```

Texto:

``` text
Porque una metodología necesita un lugar donde
el contexto sea explícito, estructurado y reutilizable.
```

Luego mostrar cuatro conceptos:

### Capturan decisiones

``` text
De arquitectura, diseño y dirección.
```

### Protegen la intención

``` text
Evitan desviaciones y pérdida de contexto.
```

### Alinean agentes

``` text
Todos trabajan con las mismas reglas y contexto.
```

### Mantienen trazabilidad

``` text
Cambios, aprendizaje y evolución documentados.
```

Usar iconos lineales monocromáticos.

Si el proyecto ya dispone de una librería de iconos, reutilizarla.

No incorporar una nueva dependencia únicamente para esta sección.

------------------------------------------------------------------------

# 11. Mensaje metodológico principal

Debe quedar visualmente claro que `gtt-domain/` no es simplemente una
carpeta de documentación.

La idea es:

``` text
gtt-domain/
      ↓
Contexto metodológico
      ↓
Intención
      ↓
Decisiones
      ↓
Reglas
      ↓
Dirección
      ↓
Agentes + desarrolladores
      ↓
Implementación alineada
```

Una frase recomendable:

> **La metodología GTT se materializa en artefactos que pueden ser
> leídos, revisados y reutilizados por personas y agentes.**

------------------------------------------------------------------------

# 12. Franja inferior --- ciclo de vida

A continuación de los tres paneles, crear una franja horizontal.

Título:

``` text
GTT gobierna todo el ciclo de vida del proyecto
```

Texto:

``` text
Desde la intención inicial hasta la evolución continua.
```

Mostrar:

``` text
INTENCIÓN
Visión y objetivos
        →
DISEÑO
Arquitectura, decisiones y reglas
        →
DECISIÓN
Juicio humano cuando importa
        →
CONSTRUCCIÓN
Desarrollo alineado al contexto
        →
EVOLUCIÓN
Cambios, aprendizaje y mejora continua
```

No utilizar colores diferentes para cada etapa.

Cada etapa puede utilizar:

``` css
border-left: 1px solid #d8d8d8;
```

y un icono negro.

------------------------------------------------------------------------

# 13. CSS recomendado

Preferir CSS existente del proyecto.

Antes de crear estilos nuevos:

1.  revisar tokens;
2.  revisar variables CSS;
3.  revisar tipografía;
4.  revisar sistema de spacing;
5.  revisar breakpoints;
6.  reutilizar componentes existentes.

Solo agregar CSS específico si no existe un equivalente.

### Tokens sugeridos

``` css
:root {
  --gtt-black: #000;
  --gtt-ink: #111;
  --gtt-text: #222;
  --gtt-muted: #666;
  --gtt-border: #e1e1e1;
  --gtt-border-strong: #cfcfcf;
  --gtt-surface: #fff;
  --gtt-surface-muted: #f7f7f7;
  --gtt-surface-active: #f1f1f1;

  --gtt-radius-sm: 6px;
  --gtt-radius-md: 10px;
  --gtt-radius-lg: 16px;

  --gtt-content-max: 1440px;
}
```

No agregar colores fuera de esta escala.

------------------------------------------------------------------------

# 14. Layout CSS

Desktop:

``` css
.gtt-methodology {
  width: min(100% - 48px, var(--gtt-content-max));
  margin-inline: auto;
}

.gtt-methodology__grid {
  display: grid;
  grid-template-columns:
    minmax(260px, 0.9fr)
    minmax(420px, 1.25fr)
    minmax(260px, 0.8fr);
  gap: 16px;
}
```

Paneles:

``` css
.gtt-methodology__panel {
  background: var(--gtt-surface);
  border: 1px solid var(--gtt-border);
  border-radius: var(--gtt-radius-md);
}
```

No utilizar sombras fuertes.

Si se necesita profundidad:

``` css
box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
```

------------------------------------------------------------------------

# 15. Responsive

La sección debe funcionar correctamente en:

-   desktop;
-   laptop;
-   tablet;
-   mobile.

Desktop:

``` text
Workspace | gtt-domain | Meaning
```

Tablet:

``` text
Workspace | gtt-domain
Meaning
```

Mobile:

``` text
Workspace
gtt-domain
Meaning
Lifecycle
```

Breakpoint sugerido:

``` css
@media (max-width: 1024px) {
  .gtt-methodology__grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

Mobile:

``` css
@media (max-width: 720px) {
  .gtt-methodology__grid {
    grid-template-columns: 1fr;
  }
}
```

El árbol de archivos debe mantener legibilidad en pantallas pequeñas.

No hacer scroll horizontal.

------------------------------------------------------------------------

# 16. Tipografía

Usar la misma fuente existente en el sitio.

No introducir otra fuente si no es necesaria.

Jerarquía aproximada:

``` css
.section-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
}

.section-description {
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  line-height: 1.5;
}

.panel-title {
  font-size: 1.15rem;
  font-weight: 650;
}

.file-name {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", monospace;
}
```

Los nombres de archivos/directorios deben utilizar una fuente
monoespaciada o el tratamiento equivalente que ya utilice el sitio para
código.

------------------------------------------------------------------------

# 17. Iconografía

Los iconos deben ser:

-   monocromáticos;
-   lineales;
-   simples;
-   consistentes;
-   pequeños;
-   secundarios respecto al contenido.

Conceptos sugeridos:

``` text
Foundation  → target / compass
Architecture → layers
Standards → settings
Rules → shield
Workflow → nodes / flow
Evolution → chart
```

Pero todos deben utilizar:

``` css
color: #111;
```

o SVG con `currentColor`.

No usar iconos multicolor.

------------------------------------------------------------------------

# 18. Accesibilidad

La sección debe ser contenido real HTML.

No convertir texto en imágenes.

Requisitos:

-   headings semánticos;
-   `aria-label` cuando un icono tenga significado;
-   contraste suficiente;
-   navegación por teclado;
-   foco visible;
-   no depender solamente de hover;
-   respetar `prefers-reduced-motion`.

Si se incorporan animaciones:

``` css
@media (prefers-reduced-motion: reduce) {
  .gtt-methodology * {
    animation: none !important;
    transition: none !important;
  }
}
```

------------------------------------------------------------------------

# 19. Interacción

No convertir esta sección en una aplicación compleja.

El objetivo principal es **comunicar la metodología**.

Opcionalmente, los seis dominios pueden tener una interacción ligera:

``` text
hover/focus
    ↓
mostrar ligeramente más detalle
```

Pero la información principal debe estar visible sin interacción.

No ocultar contenido esencial detrás de:

-   tooltips;
-   accordions obligatorios;
-   tabs;
-   hover;
-   JavaScript.

------------------------------------------------------------------------

# 20. JavaScript

Preferir:

``` text
HTML + CSS
```

No agregar JavaScript si no es necesario.

La estructura debe funcionar sin JS.

Si el proyecto tiene componentes React/TS u otro framework, utilizar el
patrón existente del proyecto en lugar de introducir una arquitectura
nueva.

------------------------------------------------------------------------

# 21. No convertir esto en una "feature"

Esta sección es principalmente **contenido metodológico y visualización
estructurada**.

No crear:

-   API;
-   backend;
-   almacenamiento;
-   estado global;
-   nueva dependencia;
-   endpoint;
-   servicio;
-   base de datos.

Debe ser una sección estática del Home.

------------------------------------------------------------------------

# 22. Contenido que NO debe cambiarse

Mantener intacta la idea central:

> **GTT es una metodología.**

Y demostrarlo mediante la estructura:

``` text
Proyecto
  └── gtt-domain/
       ├── foundation
       ├── architecture
       ├── standards
       ├── rules
       ├── workflow
       └── evolution
```

La sección debe hacer evidente que la carpeta representa el **dominio
metodológico del proyecto**.

------------------------------------------------------------------------

# 23. Mensaje que debe entender un visitante en 5 segundos

El visitante debe poder entender:

> **GTT no es solamente una guía externa.**
>
> **La metodología se incorpora al proyecto y organiza el contexto, las
> decisiones, las reglas y la evolución dentro del workspace.**

Y en aproximadamente 15--20 segundos:

> **Los archivos existen porque la metodología necesita materializar la
> intención y dirección del proyecto en artefactos explícitos que pueden
> ser consultados por humanos y agentes.**

------------------------------------------------------------------------

# 24. Relación con agentes de IA

Incluir una referencia breve, sin convertir la sección en una
explicación técnica profunda:

``` text
Personas y agentes trabajan sobre el mismo contexto metodológico.
```

La idea visual:

``` text
                 gtt-domain/
                     │
          ┌──────────┴──────────┐
          │                     │
       Personas              Agentes
          │                     │
          └──────────┬──────────┘
                     ↓
              Trabajo alineado
```

No afirmar que los agentes automáticamente entienden todos los archivos.

La sección debe presentar `gtt-domain/` como **contexto estructurado que
orienta el trabajo**.

------------------------------------------------------------------------

# 25. Integración con el footer

La sección debe terminar con suficiente espacio antes del footer.

No modificar el footer salvo para corregir spacing si fuese necesario.

La separación visual recomendada:

``` css
.gtt-methodology {
  margin-bottom: clamp(64px, 10vw, 140px);
}
```

No crear una línea decorativa adicional si el footer ya tiene una
separación clara.

------------------------------------------------------------------------

# 26. SEO / contenido indexable

Todo el contenido importante debe existir como texto HTML real.

Usar un heading semántico:

``` html
<section aria-labelledby="gtt-methodology-title">
  <p>METODOLOGÍA EN TU PROYECTO</p>

  <h2 id="gtt-methodology-title">
    GTT-Method — La metodología vive en el proyecto
  </h2>
</section>
```

No usar una imagen como representación principal.

El árbol `gtt-domain/` debe ser texto real.

Los nombres de archivos deben ser texto real.

------------------------------------------------------------------------

# 27. Calidad visual esperada

La referencia visual buscada es:

``` text
documentación técnica
        +
editorial design
        +
developer tooling
        +
minimal Swiss-style layout
```

No:

``` text
landing page SaaS
```

No:

``` text
infografía colorida
```

No:

``` text
dashboard administrativo
```

No:

``` text
poster
```

La sección debe sentirse como una extensión natural del Home actual de
GTT-Method.

------------------------------------------------------------------------

# 28. Criterios de aceptación

Codex debe considerar el trabajo terminado únicamente cuando:

-   [ ] La sección aparece inmediatamente después de "Abierto / Flexible
    / Extensible".
-   [ ] La sección aparece antes del footer.
-   [ ] Existe el título "GTT-Method --- La metodología vive en el
    proyecto".
-   [ ] Se explica que `gtt-domain/` es el dominio metodológico.
-   [ ] Se muestra visualmente el workspace.
-   [ ] `gtt-domain/` aparece destacado dentro del árbol.
-   [ ] Se muestran Foundation.
-   [ ] Se muestran Architecture.
-   [ ] Se muestran Standards.
-   [ ] Se muestran Rules.
-   [ ] Se muestran Workflow.
-   [ ] Se muestran Evolution.
-   [ ] Se muestran archivos representativos.
-   [ ] Se explica por qué existen múltiples archivos.
-   [ ] Se comunica que los archivos preservan intención y decisiones.
-   [ ] Se comunica la relación con personas y agentes.
-   [ ] Se muestra el ciclo Intención → Diseño → Decisión → Construcción
    → Evolución.
-   [ ] Todo el contenido es HTML/CSS, no una imagen.
-   [ ] No se introducen colores cromáticos.
-   [ ] Se mantiene la estética actual del sitio.
-   [ ] Es responsive.
-   [ ] Es accesible.
-   [ ] No se agrega JavaScript innecesario.
-   [ ] No se agregan dependencias innecesarias.
-   [ ] El footer existente permanece funcional.
-   [ ] El Home sigue pasando build/lint/typecheck/tests que ya existan
    en el proyecto.

------------------------------------------------------------------------

# 29. Regla de implementación para Codex

Antes de modificar:

1.  inspeccionar la estructura actual del Home;
2.  localizar exactamente el bloque `Abierto / Flexible / Extensible`;
3.  localizar el footer;
4.  identificar los componentes utilizados por esas secciones;
5.  identificar los tokens CSS existentes;
6.  reutilizar estilos y componentes cuando sea posible;
7.  implementar la nueva sección sin alterar innecesariamente otras
    partes del Home.

Después de implementar:

1.  ejecutar el build existente;
2.  ejecutar lint/typecheck si existen;
3.  revisar responsive;
4.  verificar que no existan colores cromáticos;
5.  verificar que la sección quede entre `Abierto/Flexible/Extensible` y
    footer;
6.  verificar que todo el contenido sea texto HTML accesible;
7.  verificar que no se haya introducido una imagen para representar la
    metodología.

------------------------------------------------------------------------

# 30. Resultado conceptual esperado

La sección debe conseguir que el visitante vea:

``` text
GTT-Method
     │
     ▼
NO ES SOLO DOCUMENTACIÓN EXTERNA
     │
     ▼
LA METODOLOGÍA SE MATERIALIZA
     │
     ▼
gtt-domain/
     │
     ├── Foundation
     ├── Architecture
     ├── Standards
     ├── Rules
     ├── Workflow
     └── Evolution
     │
     ▼
INTENCIÓN + DECISIONES + REGLAS + DIRECCIÓN
     │
     ▼
PERSONAS + AGENTES
     │
     ▼
DESARROLLO ALINEADO
     │
     ▼
EVOLUCIÓN CONTROLADA
```

**La idea central que debe transmitir el diseño es:**

> **GTT no agrega archivos por burocracia. GTT crea un lugar explícito
> donde la metodología del proyecto puede vivir, ser consultada,
> preservar la intención humana y orientar el trabajo a lo largo del
> tiempo.**
