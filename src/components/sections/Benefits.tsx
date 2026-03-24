import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const STEPS = [
  {
    key:      'ready',
    titleKey: 'proceso.readyTitle',
    descKey:  'proceso.readyDesc',
    index:    0,
  },
  {
    key:      'set',
    titleKey: 'proceso.setTitle',
    descKey:  'proceso.setDesc',
    index:    1,
  },
  {
    key:      'go',
    titleKey: 'proceso.goTitle',
    descKey:  'proceso.goDesc',
    index:    2,
  },
]

/* ── Círculo bullseye (réplica exacta del oficial) ── */
function BullseyeCircle({ active, delay }: { active: boolean; delay: number }) {
  return (
    <div className="relative flex items-center justify-center w-14 h-14">
      {/* Anillo exterior animado (pulse) */}
      {active && (
        <motion.div
          className="absolute rounded-full border border-[#F0FAB4]/30"
          style={{ width: 56, height: 56 }}
          animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay, ease: 'easeOut' }}
        />
      )}
      {/* Círculo exterior */}
      <div
        className="absolute rounded-full border-2 border-[#F0FAB4]/40"
        style={{ width: 52, height: 52 }}
      />
      {/* Círculo medio */}
      <div
        className="absolute rounded-full border border-[#F0FAB4]/25"
        style={{ width: 36, height: 36 }}
      />
      {/* Núcleo — dot central */}
      <motion.div
        className="relative z-10 w-5 h-5 rounded-full border-2 flex items-center justify-center"
        style={{ borderColor: '#F0FAB4', background: 'rgba(200,250,180,0.12)' }}
        animate={active ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeInOut' }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: '#F0FAB4' }} />
      </motion.div>
    </div>
  )
}

export function Benefits() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      id="proceso"
      aria-labelledby="proceso-heading"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F5C4A 0%, #0F5C4A 50%, #0F5C4A 100%)' }}
    >
      {/* ── Textura hexagonal de fondo (réplica oficial) ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
              <polygon
                points="14,2 42,2 56,24 42,46 14,46 0,24"
                fill="none"
                stroke="rgba(255,255,255,0.045)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      {/* ── Mapa/globo decorativo — esquina derecha (réplica oficial) ── */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-10"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          <circle cx="300" cy="200" r="160" stroke="white" strokeWidth="0.8"/>
          <circle cx="300" cy="200" r="120" stroke="white" strokeWidth="0.6"/>
          <circle cx="300" cy="200" r="80"  stroke="white" strokeWidth="0.5"/>
          <ellipse cx="300" cy="200" rx="60" ry="160" stroke="white" strokeWidth="0.5"/>
          <ellipse cx="300" cy="200" rx="110" ry="160" stroke="white" strokeWidth="0.5"/>
          <line x1="140" y1="200" x2="460" y2="200" stroke="white" strokeWidth="0.5"/>
          <line x1="300" y1="40"  x2="300" y2="360" stroke="white" strokeWidth="0.5"/>
        </svg>
      </div>

      <Container className="relative z-10">
        <div ref={ref}>

          {/* ── Título ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 text-center"
          >
            <h2
              id="proceso-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white"
            >
              {t('proceso.title')}
            </h2>
          </motion.div>

          {/* ── Steps — layout 5 cols: paso | flecha | paso | flecha | paso ── */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start gap-0 max-w-3xl mx-auto">
            {STEPS.map((step, i) => (
              <Fragment key={step.key}>
                {/* Columna del paso */}
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <BullseyeCircle active={isInView} delay={i * 0.4} />
                  <motion.h3
                    className="mt-6 font-display text-2xl font-extrabold text-white"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.35 + i * 0.2, duration: 0.5 }}
                  >
                    {t(step.titleKey)}
                  </motion.h3>
                  <motion.p
                    className="mt-3 text-white/60 text-sm leading-relaxed max-w-[180px]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.45 + i * 0.2, duration: 0.5 }}
                  >
                    {t(step.descKey)}
                  </motion.p>
                </motion.article>

                {/* Flecha entre pasos (solo entre 0→1 y 1→2) */}
                {i < STEPS.length - 1 && (
                  <div
                    key={`arrow-${i}`}
                    className="flex items-start justify-center pt-[18px] px-2"
                    aria-hidden="true"
                  >
                    <svg width="110" height="28" viewBox="0 0 110 28" fill="none">
                      {/* Línea punteada animada */}
                      <motion.line
                        x1="0" y1="14" x2="88" y2="14"
                        stroke="#F0FAB4"
                        strokeWidth="2.5"
                        strokeDasharray="6 5"
                        strokeLinecap="round"
                        opacity="0.7"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 0.7 } : {}}
                        transition={{ delay: 0.5 + i * 0.25, duration: 0.8, ease: 'easeInOut' }}
                      />
                      {/* Punta de flecha animada */}
                      <motion.polyline
                        points="80,5 100,14 80,23"
                        stroke="#F0FAB4"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.1 + i * 0.25, duration: 0.35, ease: 'backOut' }}
                        style={{ transformOrigin: '90px 14px' }}
                      />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* ── Steps mobile — columna única ── */}
          <div className="flex flex-col items-center gap-0 lg:hidden">
            {STEPS.map((step, i) => (
              <Fragment key={step.key}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.18 }}
                  className="flex flex-col items-center text-center"
                >
                  <BullseyeCircle active={isInView} delay={i * 0.4} />
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-white">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-xs">
                    {t(step.descKey)}
                  </p>
                </motion.article>

                {/* Flecha vertical mobile */}
                {i < STEPS.length - 1 && (
                  <div key={`arrow-m-${i}`} className="my-6" aria-hidden="true">
                    <svg width="28" height="64" viewBox="0 0 28 64" fill="none">
                      <motion.line
                        x1="14" y1="0" x2="14" y2="44"
                        stroke="#F0FAB4" strokeWidth="2.5"
                        strokeDasharray="6 5" strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 0.7 } : {}}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.7, ease: 'easeInOut' }}
                      />
                      <motion.polyline
                        points="4,38 14,58 24,38"
                        stroke="#F0FAB4" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round"
                        fill="none"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.0 + i * 0.2, duration: 0.35, ease: 'backOut' }}
                        style={{ transformOrigin: '14px 48px' }}
                      />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
