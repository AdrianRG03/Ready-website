# CLAUDE.md — ready-website (joinready.com clone)

## Ubicación del proyecto
`C:/Users/ADRIAN RUIZ/Desktop/UROLOGIK/PAGINA READY/Claude/ready-website/`

## Stack tecnológico
- React 18 + Vite 5 + TypeScript 5
- TailwindCSS 3 + Framer Motion 11
- react-i18next (ES/EN) + react-hook-form + Zod
- Firebase Hosting + GitHub Actions CI/CD

## Comandos importantes
> ⚠️ Node.js debe estar instalado. El usuario ejecuta estos comandos manualmente.
```bash
npm run dev        # Dev server en localhost:5173
npm run build      # Build de producción
npm run lint       # ESLint
npm run preview    # Preview del build
```

## Arquitectura
- **Path aliases**: `@/*` → `./src/*`
- **i18n**: archivos en `/public/locales/{es,en}/translation.json`
- **Rutas**: `/` = ES (default), `/en/` = EN
- **Imágenes**: en `/public/images/`
- **Fuentes**: Wulkan Display (display) + Nunito Sans (body) + Proxima Nova (pendiente)

## Secciones de la página (en orden)
1. `Hero` — hero con imagen SVG de fondo y card de perfil flotante
2. `HowItWorks` — 3 cards de servicios (Freelancing, Payroll, Headhunting)
3. `Benefits` — proceso en 3 pasos (Ready, Set, Go!)
4. `Profiles` — categorías de perfiles con acordeón
5. `Network` — freelancers destacados
6. `SocialProof` — marquee de logos de clientes
7. `About` — sello Ready / atributos

## Colores de marca
```
--green:       #0F5C4A  (principal)
--green-dark:  #0C4437  (cards oscuras)
--yellow-soft: #F0FAB4  (CTAs, acentos)
--black:       #2B2B2B  (texto)
```

## Convenciones de código
- Estilos con `style={{}}` inline para valores exactos de píxeles (no Tailwind arbitrario)
- Tailwind para layout, spacing relativo y responsive (`hidden md:flex`, `xl:block`, etc.)
- Animaciones con Framer Motion (`fadeUp` pattern reutilizable en cada sección)
- Breakpoints: mobile < 768px (`md:`), desktop < 1280px (`xl:`)
- El hero SVG de fondo solo se muestra en `xl:` → `xl:bg-[url('/images/hero.svg')]`

## Decisiones de diseño tomadas
- Card de perfil hero: `top: 266px, left: -85px` (posición absoluta dentro del wrapper)
- Logos en hero card: altura `28px` para los 3 perfiles
- Service cards (HowItWorks): `gap-5`, texto con `mr-24` para no solapar imagen
- Proceso (Benefits): CSS grid `1fr 1fr 1fr` para alinear círculos con títulos
- Flecha acordeón Perfiles: amarilla `#F0FAB4` cerrada, verde `#0F5C4A` abierta
- Scrollbar del carrusel Network: oculta con `.no-scrollbar`

## Equipo
- **Adrian** — QA Jr, 30% dedicado al sitio
- **Ayesha** — Desarrolladora (implementación)
- **Pablo** — Code reviews

## Tareas pendientes
- [ ] Integrar fuente Proxima Nova (obtener `proximanova-regular.woff2` y `proximanova-bold.woff2`)
- [ ] Auditar 6 imágenes faltantes vs. joinready.com oficial
- [ ] Deploy a Firebase (producción y staging)
- [ ] Revisión responsive en tablet (768px) y laptop (1024px)
