import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
}

const SERVICES = [
  {
    key: 'freelancing',
    titleKey: 'servicios.freelancingTitle',
    descKey: 'servicios.freelancingDesc',
    photo: '/images/service-1.png',
  },
  {
    key: 'payroll',
    titleKey: 'servicios.payrollTitle',
    descKey: 'servicios.payrollDesc',
    photo: '/images/service-2.png',
  },
  {
    key: 'headhunting',
    titleKey: 'servicios.headhuntingTitle',
    descKey: 'servicios.headhuntingDesc',
    photo: '/images/service-3.png',
  },
]

export function HowItWorks() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="py-10 bg-white overflow-hidden"
    >
      <Container>
        <div ref={ref}>

          {/* ── Header row: título izq + CTA der ── */}
          <motion.div
            className="flex xl:flex-row flex-col xl:justify-between xl:items-center gap-5 mb-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Título + subtítulo */}
            <motion.div variants={fadeUp} custom={0} className="max-w-xl">
              <h2
                id="servicios-heading"
                className="font-display font-extrabold leading-tight"
                style={{ fontSize: '30px', color: '#0F5C4A' }}
              >
                {t('servicios.title')}
              </h2>
              <p className="mt-2 leading-relaxed" style={{ fontSize: '16px', color: '#2B2B2B' }}>
                {t('servicios.subtitle')}
              </p>
            </motion.div>

            {/* CTA "Agenda una llamada" */}
            <motion.div variants={fadeUp} custom={1} className="shrink-0">
              <a
                href="https://calendly.com/montse-thu/30min?month=2026-03"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold rounded-md whitespace-nowrap transition-opacity hover:opacity-80"
                style={{
                  background: '#F0FAB4',
                  color: '#0F5C4A',
                  fontSize: '18px',
                  fontWeight: 600,
                  borderRadius: '6px',
                  padding: '12px 20px',
                }}
              >
                {t('servicios.cta')}
                {/* Calendar icon */}
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8"  y1="2" x2="8"  y2="6"/>
                  <line x1="3"  y1="10" x2="21" y2="10"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Cards row ── */}
          <div className="flex md:flex-row flex-col gap-3 mt-5">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.key}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="relative flex-1 text-white space-y-2"
                style={{
                  backgroundColor: '#0C4437',
                  borderRadius: '6px',
                  padding: '16px 16px 0px',
                  height: '212px',
                  overflow: 'visible',
                  minWidth: 0,
                }}
              >
                {/* Título */}
                <h5 style={{ fontSize: '18px', fontWeight: 800, color: 'white' }}>
                  {t(service.titleKey)}
                </h5>

                {/* Inner flex — igual que oficial */}
                <div className="flex justify-between xl:h-40 max-h-96">
                  <div className="flex flex-col justify-between">
                    {/* max-w-96 md:mr-24 mr-32 — igual que oficial */}
                    <p
                      className="max-w-96 md:mr-8 mr-16"
                      style={{ fontSize: '16px', fontWeight: 400, color: 'white', lineHeight: 1.45 }}
                    >
                      {t(service.descKey)}
                    </p>
                  </div>

                  {/* Foto — absolute right-0 bottom-0 w-40, igual que oficial */}
                  <img
                    src={service.photo}
                    alt={t(service.titleKey)}
                    className="absolute right-0 bottom-0 w-40"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
