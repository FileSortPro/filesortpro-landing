# FileSort Pro — Landing Page

Landing page oficial de FileSort Pro desplegada en GitHub Pages.

## Estructura

```
├── index.html          # Landing principal
├── privacy.html        # Política de privacidad
├── terms.html          # Términos y condiciones
├── 404.html            # Página 404 personalizada
├── CNAME               # Dominio personalizado: filesort.pro
├── assets/
│   ├── css/style.css   # Sistema de diseño (variables CSS del theme de la app)
│   ├── js/
│   │   ├── theme.js    # Toggle dark/light + localStorage
│   │   └── i18n.js     # Auto-detección de idioma ES/EN
│   └── img/
│       ├── logo-dark.svg
│       ├── logo-light.svg
│       └── hero-placeholder.svg
└── .github/workflows/deploy.yml  # Auto-deploy a GitHub Pages
```

## Características

- **Dark/Light mode** con toggle y persistencia en localStorage
- **Auto-detección de idioma** (español o inglés según el navegador)
- **Diseño responsive** adaptable a móvil, tablet y escritorio
- **Paleta de colores idéntica** a la app de escritorio (desde `ui/theme.py`)
- **Transiciones suaves** (0.3s ease) en todos los cambios de tema
- **Sin dependencias externas** (solo HTML + CSS + Vanilla JS + Google Fonts)

## Cómo desplegar

### Importante: Estructura del repositorio

Todos los archivos de esta carpeta `landing/` deben ir en la **raíz** de tu repositorio de GitHub.

```
📁 tu-repositorio/          (ej: filesortpro-landing)
├── index.html              ← raíz
├── privacy.html
├── terms.html
├── 404.html
├── CNAME
├── README.md
├── .github/workflows/deploy.yml
└── assets/...
```

### Opción 1: GitHub Pages automático (recomendado)

1. Crea un repositorio en GitHub (ej: `filesortpro-landing`)
2. Sube todos los archivos de `landing/` **directamente a la raíz** del branch `main`
3. El workflow `.github/workflows/deploy.yml` despliega automáticamente a GitHub Pages
4. Ve a Settings → Pages → Source: "GitHub Actions" (se activa solo) → Custom domain: `filesort.pro`

### Opción 2: Servir localmente

Abre `index.html` directamente en tu navegador o usa cualquier servidor:

```bash
python -m http.server 8000
# o
npx serve .
```

## Configuración DNS (GoDaddy → GitHub Pages)

1. En GoDaddy, ve a "DNS Management" de `filesort.pro`
2. **Elimina TODOS** los registros A existentes
3. Agrega estos **4 registros A**:
   - `@` → `185.199.108.153` (TTL: 600)
   - `@` → `185.199.109.153` (TTL: 600)
   - `@` → `185.199.110.153` (TTL: 600)
   - `@` → `185.199.111.153` (TTL: 600)
4. Agrega este **registro CNAME**:
   - `www` → `[tu-usuario].github.io` (TTL: 600)
5. Espera la propagación DNS (5-30 minutos)
6. En el repositorio de GitHub: Settings → Pages → Custom domain: `filesort.pro`
7. GitHub verificará el DNS y activará HTTPS automáticamente

## Personalización

- Para cambiar los textos, edita `assets/js/i18n.js`
- Para cambiar los colores, edita las variables CSS en `assets/css/style.css`
- Para cambiar los precios/links de Whop, edita las URLs en `index.html` y `assets/js/i18n.js`
- Para agregar capturas de pantalla reales, reemplaza el contenido del `<div class="hero-mockup">` en `index.html`

## Contacto

- Soporte: support@filesort.pro
- General: contact@filesort.pro
