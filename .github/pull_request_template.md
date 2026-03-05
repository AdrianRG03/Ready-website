## Descripcion
<!-- Qué cambios hace este PR? Por qué? -->

## Tipo de cambio
- [ ] `feat` — nueva funcionalidad
- [ ] `fix` — corrección de bug
- [ ] `style` — solo cambios visuales/CSS
- [ ] `test` — tests nuevos o modificados
- [ ] `chore` — mantenimiento, dependencias

## Secciones afectadas
<!-- Hero / Navbar / Wizard / i18n / etc. -->

## Screenshots / Videos
<!-- Agregar capturas en mobile y desktop si aplica -->

## Security Checklist
- [ ] No hay secrets/API keys hardcodeados
- [ ] Inputs validados con Zod schema
- [ ] No se usa `dangerouslySetInnerHTML` sin DOMPurify
- [ ] No hay `console.log` con datos sensibles
- [ ] CSP headers no se debilitaron
- [ ] Variables de entorno documentadas en `.env.example`

## QA Checklist
- [ ] Probado en mobile (375px)
- [ ] Probado en tablet (768px)
- [ ] Probado en desktop (1280px+)
- [ ] Tests Playwright pasan (`npm run test:e2e`)
- [ ] Sin errores TypeScript (`tsc --noEmit`)
- [ ] Sin warnings ESLint (`npm run lint`)
- [ ] Textos i18n actualizados en ES y EN

## Bug Report Format (si aplica)
```
Seccion:
Severity: Critical / High / Medium / Low
Breakpoint: Mobile / Tablet / Desktop
Browser:
Steps:
Expected:
Actual:
```
