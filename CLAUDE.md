# LAVA UGC Agency - Landing Page

## Proyecto Overview
Landing page estática para LAVA UGC Agency construida con Astro 5 para aprender el framework.

**Stack Tecnológico:**
- Astro 5.13.5 (modo estático)
- Tailwind CSS v4.1.13
- Starwind UI Components v2.0.1
- TypeScript (strict mode)
- pnpm

**Site:** https://lavaugc.com

---

## Estructura del Proyecto

```
src/
├── assets/          # Assets de marca (logos, backgrounds, videos)
├── components/
│   ├── commons/     # Componentes reutilizables (Container, SolutionsCard)
│   ├── navbar/      # Navegación
│   ├── starwind/    # Librería UI (Button)
│   ├── Hero.astro
│   ├── Solutions.astro
│   └── Welcome.astro (legacy - no usado actualmente)
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── starwind.css
```

---

## Estado Actual

### ✅ Completado
- Configuración base de Astro
- Tailwind CSS v4 con sistema de diseño
- Arquitectura de componentes modular
- Hero section con video background
- Solutions section (3 cards)
- Diseño responsive con tipografía fluida
- Navbar con logo
- Deployment automatizado a Hostinger vía GitHub Actions
- Sistema de animaciones con tw-animate-css

### ⚠️ En Progreso
- Contenido de Solutions cards (actualmente lorem ipsum)

### ❌ Pendiente
- **i18n/multi-idioma** - NO configurado aún
- **Animaciones avanzadas** - Pendiente integrar GSAP o alternativa
- SEO optimization (meta tags)
- Secciones adicionales según diseño final
- Formulario de contacto (si aplica)

---

## Configuración Importante

### Path Alias
```ts
"@/*" → "src/*"
```

### Fuentes
- **Primary:** Host Grotesk
- **Secondary:** Archivo
- **Default:** Inter

### Colores Base
Sistema de variables CSS con paleta neutral + accent colors (blue, fuchsia, green, red, sky, amber)

### Container Max Width
86rem (1376px)

---

## Scripts Disponibles

```bash
pnpm dev        # Desarrollo local
pnpm build      # Build producción
pnpm preview    # Preview build
pnpm astro      # CLI de Astro
```

---

## Deployment

**CI/CD:** GitHub Actions
- Trigger: Push a rama `main`
- Build: `pnpm install && pnpm run build`
- Deploy: FTP a Hostinger (domains/lavaugc.com/public_html/)

---

## Notas de Desarrollo

### Para i18n
Astro tiene soporte nativo para i18n. Opciones:
1. **astro-i18n** (librería popular)
2. **i18next** con adaptador para Astro
3. Sistema custom con JSON files

### Para Animaciones
**Opciones evaluadas:**
- **GSAP** - Robusto pero pesado
- **Motion One** - Liviano, recomendado para Astro (13kb)
- **Auto Animate** - Ultra liviano para transiciones simples
- **View Transitions API** - Nativo de Astro 3+

**Casos de uso mencionados:**
- Animaciones de entrada
- Apertura/cierre de menú
- Múltiples efectos parallax

---

## Preguntas Pendientes

1. **Idiomas necesarios:** ¿Cuáles idiomas soportar? (ES/EN/otros)
2. **Secciones:** ¿Qué secciones adicionales necesita la landing?
3. **Diseño:** ¿Existe mockup/Figma o construimos sobre la marcha?
4. **Contenido:** ¿Ya está definido o trabajamos con placeholders?
5. **Animaciones:** ¿Referencias de sitios que inspiren las animaciones deseadas?

---

## Assets Disponibles

- Logos (color y white)
- Hero video
- 3D model (gota-3d.glb)
- 6 background images para rotación
- Iconos Tabler (@tabler/icons)

---

## Contacto Cliente
**Email:** hello@lavaugc.com
