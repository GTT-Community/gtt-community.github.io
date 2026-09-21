# Project Vision — GTT/CDAD Community Website

## 1. Objetivo del proyecto

El objetivo es dejar el sitio web de **GTT Community** completamente funcional, coherente y profesional, asegurando que todas las secciones, botones, enlaces y mecanismos de navegación funcionen correctamente.

El sitio debe entregar una experiencia consistente tanto en **inglés como en español**, manteniendo la navegación, estructura y contenidos sincronizados entre ambos idiomas.

Además, el proyecto debe integrar correctamente el repositorio **Bootstrap** y el **Manual de Usuario**, evitando que este último se comporte como un recurso externo desconectado visualmente del sitio.

---

# 2. Tareas principales

## TASK 1 — Verificar y corregir todos los botones

### Objetivo

Revisar el sitio completo y asegurar que **todos los botones funcionen correctamente**.

### Acciones

Recorrer todas las páginas del sitio y verificar:

- Botones del menú principal.
- Botones de navegación.
- Botones de cambio de idioma.
- Botones de GitHub.
- Botones relacionados con Bootstrap.
- Botones relacionados con el Manual de Usuario.
- CTAs.
- Links internos.
- Links externos.
- Botones del footer.
- Botones secundarios.
- Botones de retorno o navegación.

### Reglas

Un botón no debe:

- Apuntar a una URL inexistente.
- Apuntar a una página 404.
- Tener un `href` vacío.
- Tener comportamiento visual de botón pero no ejecutar ninguna acción.
- Llevar a una versión incorrecta del sitio.
- Romper la navegación entre idiomas.

### Criterio de aceptación

**100% de los botones visibles del sitio deben tener una acción válida y verificable.**

---

# 3. TASK 2 — Corregir enlace al Bootstrap

El sitio debe apuntar al repositorio oficial de Bootstrap:

**Repositorio:**

https://github.com/CDAD-Community/cdad-bootstrap

### Reglas

Todo enlace, botón o referencia dentro del sitio que corresponda al proyecto Bootstrap debe utilizar:

```text
https://github.com/CDAD-Community/cdad-bootstrap
```

No utilizar:

- Repositorios antiguos.
- Repositorios personales.
- URLs de `mgriott`.
- URLs obsoletas.
- Referencias a repositorios que ya no representan el proyecto oficial.

### Criterio de aceptación

Al hacer clic en cualquier botón o enlace relacionado con **Bootstrap**, el usuario debe llegar al repositorio:

`CDAD-Community/cdad-bootstrap`

---

# 4. TASK 3 — Integrar el Manual de Usuario dentro del sitio

## Problema actual

El **Manual de Usuario** actualmente está integrado de una manera externa al sitio principal.

Esto genera una experiencia visual y de navegación inconsistente.

## Objetivo

El Manual de Usuario debe formar parte del sitio web como una sección/página integrada, utilizando:

- El mismo layout.
- El mismo header.
- La misma navegación.
- El mismo footer.
- La misma tipografía.
- Los mismos estilos.
- El mismo sistema de idioma.
- El mismo diseño visual.

El usuario debe sentir que el Manual es una sección natural del sitio y **no una página externa independiente**.

### Importante

No se debe simplemente colocar un enlace hacia el manual externo.

La intención es **integrarlo dentro de la aplicación web actual**.

### Estructura conceptual

Por ejemplo:

```text
/
├── Home
├── About
├── Methodology
├── Documentation
│   └── User Manual
├── Community
└── ...
```

El Manual debe utilizar la infraestructura de navegación existente del sitio.

### Criterio de aceptación

Cuando el usuario entra al Manual:

- El header permanece consistente.
- El idioma seleccionado se mantiene.
- El usuario puede continuar navegando por el sitio.
- El footer permanece consistente.
- No parece que haya abandonado el sitio.
- No se abre una aplicación o sitio externo independiente.

---

# 5. TASK 4 — Navegación coherente entre idiomas

El sitio debe tener una navegación completamente coherente entre:

- 🇬🇧 English
- 🇪🇸 Español

## Regla principal

Si el usuario está navegando en **inglés**, todos los enlaces internos deben mantenerlo en inglés.

Si el usuario está navegando en **español**, todos los enlaces internos deben mantenerlo en español.

### Ejemplo

Si estoy en:

```text
/en/methodology
```

y hago clic en:

```text
User Manual
```

debe llevarme a:

```text
/en/user-manual
```

No a:

```text
/es/user-manual
```

De la misma manera:

Si estoy en:

```text
/es/metodologia
```

debe llevarme a:

```text
/es/manual-usuario
```

y no a la versión inglesa.

---

# 6. TASK 5 — Selector de idioma

El selector de idioma debe comportarse de forma consistente.

### Regla

Cuando el usuario cambia de idioma, debe permanecer en la **misma sección conceptual**, siempre que exista la traducción correspondiente.

### Ejemplo

```text
English

/en/about
/en/methodology
/en/user-manual
```

debe corresponder a:

```text
Español

/es/acerca
/es/metodologia
/es/manual-usuario
```

El cambio de idioma no debe enviar al usuario arbitrariamente al Home.

### Excepción

Si una página específica todavía no tiene traducción, se debe definir explícitamente un comportamiento coherente, evitando enlaces rotos.

---

# 7. TASK 6 — Auditoría completa de navegación

Claude debe realizar una revisión completa de navegación antes de considerar terminada la tarea.

Crear una matriz de verificación similar a:

| Página | English | Español | Header | Footer | Links | Buttons | Language Switch |
|---|---|---|---|---|---|---|---|
| Home | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| About | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Methodology | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| User Manual | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Community | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

La matriz debe utilizarse como checklist de validación.

---

# 8. TASK 7 — Revisar enlaces internos y externos

Distinguir claramente entre:

### Enlaces internos

Deben utilizar el sistema de routing del sitio.

Ejemplo:

```text
Home
→ Methodology
→ User Manual
→ Community
```

### Enlaces externos

Deben utilizar URLs absolutas y abrir el recurso correspondiente cuando sea apropiado.

Ejemplo:

```text
GitHub
https://github.com/CDAD-Community/cdad-bootstrap
```

No convertir accidentalmente enlaces externos en rutas internas.

---

# 9. TASK 8 — Mantener la arquitectura existente

No realizar una reescritura innecesaria del proyecto.

Antes de modificar:

1. Revisar la estructura actual.
2. Identificar el sistema de routing.
3. Identificar cómo se implementan los idiomas.
4. Identificar el layout global.
5. Identificar cómo está integrado actualmente el Manual.
6. Identificar todos los componentes de navegación.

Después realizar cambios mínimos y coherentes con la arquitectura existente.

### Regla

**Preferir corregir y reutilizar antes que duplicar componentes.**

---

# 10. TASK 9 — Revisar responsive y comportamiento visual

Durante la revisión, verificar que los cambios no rompan:

- Desktop.
- Tablet.
- Mobile.
- Menú responsive.
- Footer.
- Header.
- Navegación.
- Manual de Usuario.

El Manual integrado debe respetar el comportamiento responsive del sitio.

---

# 11. TASK 10 — Validación final

Antes de finalizar, realizar una auditoría completa.

### Checklist

- [ ] Todos los botones funcionan.
- [ ] Todos los enlaces internos funcionan.
- [ ] Todos los enlaces externos funcionan.
- [ ] Bootstrap apunta a `CDAD-Community/cdad-bootstrap`.
- [ ] No quedan referencias al repositorio antiguo.
- [ ] El Manual está integrado dentro del sitio.
- [ ] El Manual utiliza el layout principal.
- [ ] El Manual tiene versión inglesa.
- [ ] El Manual tiene versión española.
- [ ] La navegación inglesa permanece en inglés.
- [ ] La navegación española permanece en español.
- [ ] El selector de idioma funciona.
- [ ] El cambio de idioma conserva la sección cuando corresponde.
- [ ] No existen enlaces 404.
- [ ] No existen botones sin acción.
- [ ] Header consistente.
- [ ] Footer consistente.
- [ ] Responsive verificado.
- [ ] Build de producción exitoso.
- [ ] No existen errores de compilación.
- [ ] No existen errores de routing.

---

# 12. Criterio general de calidad

El resultado final debe sentirse como **un único sitio web coherente**.

El usuario no debería preguntarse:

> "¿Estoy todavía dentro del sitio?"

Especialmente al entrar al Manual de Usuario.

La experiencia debe ser:

```text
GTT Community
      │
      ├── Home
      ├── Methodology
      ├── Documentation
      │      └── User Manual
      ├── Community
      └── GitHub
```

con soporte equivalente:

```text
English
   ↓
English navigation
   ↓
English documentation
   ↓
English User Manual
```

y:

```text
Español
   ↓
Navegación en español
   ↓
Documentación en español
   ↓
Manual de Usuario en español
```

---

# 13. Regla fundamental para Claude

**No considerar la tarea terminada simplemente porque el sitio compila.**

La tarea termina solamente cuando:

1. La navegación funciona.
2. Los botones funcionan.
3. Los enlaces funcionan.
4. El Bootstrap apunta al repositorio correcto.
5. El Manual está integrado visual y técnicamente al sitio.
6. La navegación mantiene correctamente el idioma.
7. El cambio de idioma funciona de forma coherente.
8. No existen rutas rotas.
9. La experiencia es consistente entre English y Español.

## Resultado esperado

Entregar un sitio web funcional, navegable y consistente, donde **contenido, navegación, idioma, documentación y recursos externos formen parte de una experiencia única de GTT Community**.