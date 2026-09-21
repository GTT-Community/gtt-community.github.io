# Deployment Guide - GTT-Method Website

Este documento explica cómo desplegar el sitio GTT-Method en diferentes plataformas.

## 🚀 Opciones de Despliegue

### Opción 1: GitHub Pages (Recomendado para repositorio público)

GitHub Pages ofrece hosting **gratuito** para sitios estáticos.

#### Requisitos:
- Repositorio en GitHub
- Branch `main` o `gh-pages`
- Acceso a configuración del repositorio

#### Pasos:

1. **Compilar para GitHub Pages:**
   ```bash
   npm run build:github-pages
   ```

2. **Configurar GitHub Pages en el repositorio:**
   - Ve a `Settings` → `Pages`
   - En "Source", selecciona:
     - Branch: `main`
     - Folder: `/docs` (o `/dist` según configuración)

3. **Subir a GitHub:**
   ```bash
   git add .
   git commit -m "Build for GitHub Pages"
   git push origin main
   ```

4. **Resultado:**
   - Tu sitio estará disponible en: `https://usuario.github.io/orca-site-codigo`
   - O con dominio personalizado si lo configuras

---

### Opción 2: Cloudflare Pages (Más rápido y flexible)

Cloudflare Pages ofrece hosting **gratuito** con mejor rendimiento global.

#### Requisitos:
- Cuenta Cloudflare (gratuita)
- Repositorio GitHub conectado

#### Pasos:

1. **Compilar normalmente:**
   ```bash
   npm run build:cloudflare
   ```

2. **Conectar repositorio a Cloudflare:**
   - Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
   - Click en "Pages"
   - "Create a project" → "Connect to Git"
   - Selecciona tu repositorio GitHub

3. **Configurar build:**
   - Build command: `npm run build:cloudflare`
   - Build output directory: `.output/public`
   - Framework preset: `None`

4. **Deploy:**
   - Cloudflare desplegará automáticamente

5. **Resultado:**
   - Tu sitio estará en: `https://proyecto.pages.dev`
   - Con certificado SSL automático
   - CDN global incluido

---

### Opción 3: Vercel (Alternativa premium)

Vercel es la plataforma detrás de Next.js, con excelente integración.

#### Pasos:

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configurar:**
   - Build Command: `npm run build`
   - Output Directory: `.output/public`

---

### Opción 4: Netlify (Otra alternativa popular)

#### Pasos:

1. **Crear archivo `netlify.toml`:**
   ```toml
   [build]
   command = "npm run build"
   publish = ".output/public"

   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

2. **Conectar repo a Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - "New site from Git"
   - Conecta tu repositorio GitHub

3. **Deploy automático:**
   - Netlify desplegará con cada push a `main`

---

### Opción 5: Lovable (Integración nativa - YA CONFIGURADO ✓)

Este proyecto ya está conectado a Lovable según AGENTS.md.

#### Para sincronizar:
```bash
# Los cambios se sincronizan automáticamente
git push origin main
```

El proyecto se actualizará en Lovable automáticamente.

---

## 🔧 Configuración Local

### Desarrollo:
```bash
npm run dev
# Accede a http://localhost:8080
```

### Build para producción:
```bash
npm run build
npm run preview
```

### Build específico para GitHub Pages:
```bash
npm run build:github-pages
```

---

## 📊 Comparativa de Plataformas

| Característica | GitHub Pages | Cloudflare Pages | Vercel | Netlify |
|---|---|---|---|---|
| Costo | Gratuito | Gratuito | Gratuito* | Gratuito* |
| CDN Global | ⚠️ Lento | ✅ Muy rápido | ✅ Muy rápido | ✅ Rápido |
| Build Time | ⏱️ Lento | ⚡ Rápido | ⚡ Muy rápido | ⚡ Rápido |
| Soporte React | ✅ Sí | ✅ Sí | ✅ Sí | ✅ Sí |
| Certificado SSL | ✅ Automático | ✅ Automático | ✅ Automático | ✅ Automático |
| Dominio Custom | ✅ Sí | ✅ Sí | ✅ Sí | ✅ Sí |

\* Vercel y Netlify ofrecen planes gratuitos limitados

---

## ✅ Recomendación

Para este proyecto, recomendamos:

1. **Si quieres simplicidad:** GitHub Pages
2. **Si quieres máximo rendimiento:** Cloudflare Pages (RECOMENDADO)
3. **Si ya usas Lovable:** Mantener la integración actual

---

## 🔗 URLs Finales Ejemplos

**GitHub Pages:**
```
https://usuario.github.io/orca-site-codigo
https://usuario.github.io/orca-site-codigo/about
https://usuario.github.io/orca-site-codigo/manual
```

**Cloudflare Pages:**
```
https://orca-site-codigo.pages.dev
https://orca-site-codigo.pages.dev/about
https://orca-site-codigo.pages.dev/manual
```

---

## 📝 Notas Importantes

1. **Sitio estático:** Este es un sitio 100% estático, no requiere servidor backend
2. **Compatible con todo:** Funciona en cualquier hosting estático
3. **SSR no necesario:** TanStack Start se compila como estático sin servidor
4. **Idiomas:** Funciona perfectamente con cambios de idioma en el cliente

---

Para más información, consulta la documentación oficial de cada plataforma.
