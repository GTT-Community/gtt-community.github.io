# 🚀 Setup de Despliegue - GitHub Actions

Este documento explica cómo configurar el despliegue automático en **GitHub Pages** y **Cloudflare Pages**.

## ✅ OPCIÓN 1: GitHub Pages (Sin configuración necesaria)

GitHub Pages funciona **automáticamente** sin necesidad de secretos.

### Pasos:

1. **Ir a Settings del repositorio:**
   ```
   https://github.com/usuario/orca-site-codigo/settings/pages
   ```

2. **Configurar Pages:**
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)

3. **Listo.** Con cada push a `main`, GitHub Actions:
   - Compilará el sitio
   - Desplegará a GitHub Pages
   - Tu sitio estará en: `https://usuario.github.io/orca-site-codigo`

**Status:** Ve a "Actions" en el repo para ver el deploy en tiempo real.

---

## ⚡ OPCIÓN 2: Cloudflare Pages (Requiere configuración)

Cloudflare Pages es **más rápido y ofrece mejor rendimiento global**.

### Pasos:

#### 1. Crear tokens en Cloudflare:

**a) API Token:**
- Ve a https://dash.cloudflare.com/profile/api-tokens
- Click en "Create Token"
- Selecciona "Edit Cloudflare Workers"
- Permisos: Account Resources > Cloudflare Pages
- Copy el token

**b) Account ID:**
- Ve a https://dash.cloudflare.com
- En la barra lateral, busca "Account ID"
- Copy el ID (string largo de números)

#### 2. Agregar Secrets a GitHub:

- Ve a: `https://github.com/usuario/orca-site-codigo/settings/secrets/actions`
- Click "New repository secret"

**Agregar dos secretos:**

| Secret Name | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | (el token que copiaste) |
| `CLOUDFLARE_ACCOUNT_ID` | (el account ID que copiaste) |

#### 3. Verificar el deploy:

- Ve a "Actions" en el repo
- Verás "Deploy to Cloudflare Pages" corriendo
- Tu sitio estará en: `https://orca-site-codigo.pages.dev`

---

## 📋 Checklist de Configuración

### GitHub Pages:
- [ ] Ir a Settings → Pages
- [ ] Seleccionar "Deploy from a branch"
- [ ] Seleccionar branch "main"
- [ ] Seleccionar folder "/"
- [ ] Hacer un push a main
- [ ] Verificar en "Actions" que el deploy fue exitoso

### Cloudflare Pages:
- [ ] Crear API Token en Cloudflare
- [ ] Copiar Account ID de Cloudflare
- [ ] Agregar `CLOUDFLARE_API_TOKEN` a GitHub Secrets
- [ ] Agregar `CLOUDFLARE_ACCOUNT_ID` a GitHub Secrets
- [ ] Hacer un push a main
- [ ] Verificar en "Actions" que el deploy fue exitoso

---

## 🔄 Flujo Automático

Después de configurar ambas opciones, cada push a `main` dispara:

```
push main
    ↓
GitHub Actions inicia
    ├── npm install
    ├── npm run build:github-pages
    ├── npm run build:cloudflare
    │
    ├─→ Deploy a GitHub Pages
    │   └─→ https://usuario.github.io/orca-site-codigo ✓
    │
    └─→ Deploy a Cloudflare Pages
        └─→ https://orca-site-codigo.pages.dev ✓
```

**Ambos sitios se actualizan automáticamente con cada cambio.** 🎉

---

## 🔗 URLs Finales

### GitHub Pages:
```
Inicio:  https://usuario.github.io/orca-site-codigo
About:   https://usuario.github.io/orca-site-codigo/about
Manual:  https://usuario.github.io/orca-site-codigo/manual
```

### Cloudflare Pages:
```
Inicio:  https://orca-site-codigo.pages.dev
About:   https://orca-site-codigo.pages.dev/about
Manual:  https://orca-site-codigo.pages.dev/manual
```

---

## 🧪 Probar Localmente (Antes de hacer push)

```bash
# Compilar para GitHub Pages
npm run build:github-pages

# Compilar para Cloudflare
npm run build:cloudflare

# Previsualizar
npm run preview
```

---

## ❌ Solución de Problemas

### "Deploy failed to GitHub Pages"
- Verificar que el repo sea público (si es privado, necesitas plan pro)
- Verificar que la rama sea "main"

### "Cloudflare deployment error"
- Verificar que los secrets estén correctos
- Verificar que el token de Cloudflare tenga permisos para Pages
- Ir a Cloudflare Dashboard → Workers & Pages → Pages

### "Sitio se ve roto"
- Esperar 2-3 minutos a que el CDN cache se actualice
- Limpiar caché del navegador (Ctrl+Shift+Del)
- Verificar que la compilación fue exitosa en "Actions"

---

## 📊 Monitoreo

### Ver status de deploys:
- GitHub: https://github.com/usuario/orca-site-codigo/actions
- Cloudflare: https://dash.cloudflare.com/pages

### Ver logs:
- Click en el workflow en "Actions"
- Expandir "Build and Deploy" para ver detalles

---

## ✨ Ventajas de esta configuración:

| Ventaja | Beneficio |
|---|---|
| **Despliegue automático** | No necesitas hacer nada, solo hacer push |
| **Dual hosting** | Si uno falla, el otro mantiene el sitio en línea |
| **CDN global** | Cloudflare = acceso rápido desde cualquier país |
| **Gratis** | Ambas plataformas son 100% gratuitas |
| **HTTPS automático** | Ambas incluyen certificados SSL/TLS |
| **Backups** | Dos copias completamente independientes |

---

## 🎯 Próximas acciones:

1. ✅ **Ya hemos configurado los workflows**
2. ✅ **Ya tenemos los archivos de configuración**
3. 📋 **Ahora necesitas:**
   - Crear los secretos en GitHub (solo para Cloudflare)
   - Hacer push del código
   - ¡Listo!

Revisa la sección "Checklist de Configuración" arriba para completar los últimos pasos. 🚀
