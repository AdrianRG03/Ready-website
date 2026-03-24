import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/* ── Animaciones ── */
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 },
  }),
}

/* ── Figuras decorativas únicas por card ── */
function DecoShape({ index }: { index: number }) {
  if (index === 0) return (
    /* Freelancing: red de nodos (personas conectadas) */
    <svg width="190" height="190" viewBox="0 0 190 190" fill="none" aria-hidden="true"
      className="absolute bottom-0 right-0 opacity-[0.13]">
      <circle cx="95"  cy="40"  r="18" stroke="white" strokeWidth="2"/>
      <circle cx="30"  cy="140" r="14" stroke="white" strokeWidth="2"/>
      <circle cx="160" cy="140" r="14" stroke="white" strokeWidth="2"/>
      <circle cx="95"  cy="130" r="14" stroke="white" strokeWidth="2"/>
      <line x1="95"  y1="58"  x2="95"  y2="116" stroke="white" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="95"  y1="58"  x2="35"  y2="128" stroke="white" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="95"  y1="58"  x2="155" y2="128" stroke="white" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="95"  cy="40"  r="5" fill="white" opacity="0.6"/>
      <circle cx="30"  cy="140" r="4" fill="white" opacity="0.5"/>
      <circle cx="160" cy="140" r="4" fill="white" opacity="0.5"/>
      <circle cx="95"  cy="130" r="4" fill="white" opacity="0.5"/>
    </svg>
  )
  if (index === 1) return (
    /* Payroll: tarjeta + monedas */
    <svg width="190" height="190" viewBox="0 0 190 190" fill="none" aria-hidden="true"
      className="absolute bottom-0 right-0 opacity-[0.13]">
      <rect x="20" y="50" width="150" height="100" rx="14" stroke="white" strokeWidth="2"/>
      <line x1="20" y1="82" x2="170" y2="82" stroke="white" strokeWidth="1.5"/>
      <circle cx="48" cy="116" r="10" stroke="white" strokeWidth="2"/>
      <circle cx="76" cy="116" r="10" stroke="white" strokeWidth="2"/>
      <rect x="110" y="108" width="50" height="8" rx="4" stroke="white" strokeWidth="1.5"/>
      <rect x="110" y="122" width="35" height="8" rx="4" stroke="white" strokeWidth="1.5"/>
    </svg>
  )
  /* Headhunting: lupa + estrella */
  return (
    <svg width="190" height="190" viewBox="0 0 190 190" fill="none" aria-hidden="true"
      className="absolute bottom-0 right-0 opacity-[0.13]">
      <circle cx="80" cy="80" r="52" stroke="white" strokeWidth="2"/>
      <circle cx="80" cy="80" r="34" stroke="white" strokeWidth="1.5" strokeDasharray="5 4"/>
      <line x1="120" y1="120" x2="165" y2="165" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      {/* estrella check */}
      <path d="M80 52 L86 70 L106 70 L90 81 L96 100 L80 89 L64 100 L70 81 L54 70 L74 70 Z"
        stroke="white" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

const SERVICES = [
  {
    key:      'freelancing',
    titleKey: 'servicios.freelancingTitle',
    descKey:  'servicios.freelancingDesc',
    tagKey:   'servicios.tagOnDemand',
    number:   '01',
    gradient: 'linear-gradient(145deg, #1A6B58 0%, #0F5C4A 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    key:      'payroll',
    titleKey: 'servicios.payrollTitle',
    descKey:  'servicios.payrollDesc',
    tagKey:   'servicios.tagGlobal',
    number:   '02',
    gradient: 'linear-gradient(145deg, #0F5C4A 0%, #062A1E 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="3" ry="3"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
        <circle cx="7" cy="15" r="1.5" fill="currentColor"/>
        <line x1="11" y1="15" x2="17" y2="15" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    key:      'headhunting',
    titleKey: 'servicios.headhuntingTitle',
    descKey:  'servicios.headhuntingDesc',
    tagKey:   'servicios.tagGarantizado',
    number:   '03',
    gradient: 'linear-gradient(145deg, #134A38 0%, #052318 100%)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8"  x2="11" y2="14"/>
        <line x1="8"  y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
]

export function HowItWorks() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="servicios" aria-labelledby="servicios-heading" className="py-24 overflow-hidden" style={{ background: '#fafaf7' }}>
      <Container>
        <div ref={ref}>

          {/* ══ Header: título izq + CTA der ══ */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} custom={0} className="max-w-xl">
              <h2
                id="servicios-heading"
                className="font-display text-3xl sm:text-[2rem] font-bold text-ink-900 leading-tight"
              >
                {t('servicios.title')}
              </h2>
              <p className="mt-3 text-base text-ink-400 leading-relaxed max-w-md">
                {t('servicios.subtitle')}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="shrink-0">
              <a
                href="https://calendly.com/montse-thu/30min?month=2026-03"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all duration-200 hover:bg-[#F0FAB4] hover:text-[#0F5C4A] hover:border-[#F0FAB4] hover:shadow-lg"
                style={{ borderColor: '#0F5C4A', color: '#0F5C4A', background: '#fafaf7' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8"  y1="2" x2="8"  y2="6"/>
                  <line x1="3"  y1="10" x2="21" y2="10"/>
                </svg>
                {t('servicios.cta')}
              </a>
            </motion.div>
          </motion.div>

          {/* ══ Cards ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <motion.article
                key={service.key}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={{ y: -6, transition: { duration: 0.28, ease: 'easeOut' } }}
                className="relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between cursor-default group"
                style={{
                  background: service.gradient,
                  minHeight: '300px',
                  boxShadow: '0 10px 40px rgba(10,46,34,0.22)',
                }}
              >
                {/* Número grande de fondo */}
                <span
                  className="absolute bottom-4 right-5 font-display font-black select-none pointer-events-none"
                  style={{
                    fontSize: '8rem',
                    lineHeight: 1,
                    color: 'rgba(255,255,255,0.07)',
                    letterSpacing: '-4px',
                  }}
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                {/* Figura decorativa SVG */}
                <DecoShape index={i} />

                {/* ── Contenido ── */}
                <div className="relative z-10">
                  {/* Tag + número visible */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ background: 'rgba(200,250,180,0.15)', color: '#F0FAB4' }}
                    >
                      {t(service.tagKey)}
                    </span>
                    <span
                      className="font-display font-black text-2xl"
                      style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '-1px' }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Icono */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
                  >
                    {service.icon}
                  </div>

                  {/* Título */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug">
                    {t(service.titleKey)}
                  </h3>

                  {/* Descripción */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>

                {/* Línea inferior */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                  <span className="text-white/25 text-xs font-medium tracking-wider">ready</span>
                </div>

                {/* Borde inferior coral animado en hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
                  style={{ background: 'linear-gradient(90deg, #F0FAB4 0%, #D4E860 50%, #F0FAB4 100%)' }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />

                {/* Brillo sutil en hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: 'radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 65%)' }}
                />
              </motion.article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
