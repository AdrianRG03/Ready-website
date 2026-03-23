import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/* ── Logos placeholder (reemplazar con <img> cuando tengas los logos reales) ── */
const CLIENT_LOGOS = [
  'Falabella', 'BCI', 'Entel', 'Copec', 'Scotiabank',
  'Cencosud', 'Latam', 'Ripley', 'CMR', 'WOM',
]

const TESTIMONIALS = [
  {
    quoteKey: 'testimonios.t1Quote',
    nameKey:  'testimonios.t1Name',
    roleKey:  'testimonios.t1Role',
    photo:    '/images/Laz.jpg',
    initials: 'LM',
  },
  {
    quoteKey: 'testimonios.t2Quote',
    nameKey:  'testimonios.t2Name',
    roleKey:  'testimonios.t2Role',
    photo:    '/images/nicole.png',
    initials: 'NO',
  },
  {
    quoteKey: 'testimonios.t3Quote',
    nameKey:  'testimonios.t3Name',
    roleKey:  'testimonios.t3Role',
    photo:    '/images/jorge.png',
    initials: 'JP',
  },
]

/* ── Estrellas ────────────────────────────────────────── */
function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c8f500">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

/* ── Componente principal ─────────────────────────────── */
export function SocialProof() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  /* duplicamos los logos para el efecto marquee infinito */
  const loopLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECCIÓN 1 — CLIENTES
      ══════════════════════════════════════════════════ */}
      <section
        id="clientes"
        aria-labelledby="clientes-heading"
        className="relative py-20 overflow-hidden"
        style={{ background: '#fafaf7' }}
      >
        {/* Línea decorativa top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,77,46,0.22), transparent)' }}
        />

        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'rgba(28,36,25,0.4)' }}>
              {t('clientes.title')}
            </p>
            <h2
              id="clientes-heading"
              className="font-display text-2xl sm:text-3xl font-bold"
              style={{ color: '#1c2419' }}
            >
              {t('clientes.heading')}{' '}
              <span style={{ color: '#ff4d2e' }}>Ready</span>
            </h2>
          </div>
        </Container>

        {/* Marquee de logos — ancho completo */}
        <div className="relative overflow-hidden">
          {/* Fade lateral izquierdo */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #fafaf7, transparent)' }}
          />
          {/* Fade lateral derecho */}
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #fafaf7, transparent)' }}
          />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {loopLogos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center h-14 px-8 rounded-xl shrink-0 transition-all duration-300"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  minWidth: '140px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
                aria-label={name}
              >
                <span className="font-bold text-sm tracking-wide select-none" style={{ color: 'rgba(28,36,25,0.4)' }}>
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Línea decorativa bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.06), transparent)' }}
        />
      </section>

      {/* ══════════════════════════════════════════════════
          SECCIÓN 2 — TESTIMONIOS
      ══════════════════════════════════════════════════ */}
      <section
        aria-labelledby="testimonios-heading"
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0f3d2e 0%, #1a5c45 50%, #0f3d2e 100%)' }}
      >
        {/* Textura hexagonal */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex-social" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
                <polygon points="14,2 42,2 56,24 42,46 14,46 0,24"
                  fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-social)" />
          </svg>
        </div>

        {/* Glow decorativo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] blur-[100px] pointer-events-none"
          style={{ background: 'rgba(200,245,0,0.05)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div ref={ref}>

            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{ background: 'rgba(255,77,46,0.15)', color: '#ff7a5e', border: '1px solid rgba(255,77,46,0.25)' }}
              >
                {t('testimonios.badge')}
              </span>
              <h2
                id="testimonios-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-white"
              >
                {t('testimonios.title')}
              </h2>
            </motion.div>

            {/* Grid de tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((item, i) => (
                <motion.blockquote
                  key={item.nameKey}
                  className="relative flex flex-col rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, #1c6349 0%, #0e3828 100%)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                  }}
                  initial={{ opacity: 0, y: 36 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.35)', borderColor: 'rgba(255,77,46,0.28)' }}
                >
                  {/* Foto grande arriba */}
                  <div className="relative w-full h-72 overflow-hidden" style={{ background: '#0e3828' }}>
                    <img
                      src={item.photo}
                      alt={t(item.nameKey)}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Gradiente sobre la foto */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to bottom, transparent 40%, #1c6349 100%)' }}
                    />
                    {/* Estrellas sobre la foto */}
                    <div className="absolute bottom-3 left-5">
                      <Stars />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Comilla decorativa */}
                    <div
                      className="absolute top-72 right-5 font-serif leading-none select-none pointer-events-none"
                      style={{ fontSize: '56px', color: 'rgba(200,245,0,0.12)', lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </div>

                    {/* Cita */}
                    <p className="text-white/75 text-sm leading-relaxed flex-1 relative z-10 mb-5">
                      {t(item.quoteKey)}
                    </p>

                    {/* Footer */}
                    <footer className="flex items-center justify-between">
                      <cite className="not-italic">
                        <span className="font-bold text-white text-sm block">
                          {t(item.nameKey)}
                        </span>
                        <span className="text-white/45 text-xs">
                          {t(item.roleKey)}
                        </span>
                      </cite>

                      {/* Badge "Verificado" */}
                      <div
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold"
                        style={{
                          background: 'rgba(200,245,0,0.1)',
                          color: '#c8f500',
                          border: '1px solid rgba(200,245,0,0.2)',
                        }}
                      >
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t('testimonios.verified')}
                      </div>
                    </footer>
                  </div>
                </motion.blockquote>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d2e]"
                style={{
                  background: '#ff4d2e',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(255,77,46,0.38)',
                }}
              >
                {t('testimonios.cta')}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

          </div>
        </Container>
      </section>
    </>
  )
}
