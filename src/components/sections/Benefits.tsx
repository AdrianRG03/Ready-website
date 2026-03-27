import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const STEPS = [
  { key: 'ready', titleKey: 'proceso.readyTitle', descKey: 'proceso.readyDesc' },
  { key: 'set',   titleKey: 'proceso.setTitle',   descKey: 'proceso.setDesc'   },
  { key: 'go',    titleKey: 'proceso.goTitle',     descKey: 'proceso.goDesc'    },
]

/* ── Círculo sólido con punto interior — réplica del point.svg oficial ── */
function PointCircle() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      {/* Halo exterior translúcido */}
      <circle cx="22" cy="22" r="21" fill="#F0FAB4" fillOpacity="0.1"/>
      {/* Círculo sólido relleno */}
      <circle cx="22" cy="22" r="13" fill="#F0FAB4" fillOpacity="0.35"/>
      {/* Dot central sólido */}
      <circle cx="22" cy="22" r="5" fill="#F0FAB4"/>
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  }),
}

export function Benefits() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      id="proceso"
      aria-labelledby="proceso-heading"
      className="relative py-10 overflow-hidden"
      style={{
        background: '#0F5C4A',
        backgroundImage: "url('/images/proceso.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <div ref={ref}>

          {/* ── Título — izquierda, igual que oficial ── */}
          <motion.h2
            id="proceso-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-white text-center xl:text-left"
            style={{ fontSize: '30px' }}
          >
            {t('proceso.title')}
          </motion.h2>

          {/* ── Wrapper: círculos + steps ── */}
          <div className="flex flex-col items-center md:mt-20 mt-10">

            {/* ── Desktop: fila 1 — círculos centrados sobre cada título ── */}
            <div className="hidden md:grid w-full relative" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              {/* Línea punteada que conecta los círculos */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                style={{
                  left: 'calc(100% / 6)',
                  right: 'calc(100% / 6)',
                  height: '1px',
                  borderTop: '1px dashed rgba(229,229,229,0.5)',
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
              {STEPS.map((step, i) => (
                <div key={step.key} className="flex justify-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, ease: 'backOut', delay: 0.2 + i * 0.2 }}
                  >
                    <PointCircle />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* ── Desktop: fila 2 — títulos + descripciones ── */}
            <div className="hidden md:grid w-full mt-8" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.key}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="text-center px-6"
                >
                  <h5
                    className="font-display font-extrabold text-white"
                    style={{ fontSize: '18px' }}
                  >
                    {t(step.titleKey)}
                  </h5>
                  <p
                    className="mt-2 text-white"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    {t(step.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ── Mobile: círculos con pasos apilados ── */}
            <div className="flex flex-col items-center gap-6 md:hidden mt-4">
              {STEPS.map((step, i) => (
                <motion.div
                  key={`m-${step.key}`}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex flex-col items-center text-center"
                >
                  <PointCircle />
                  <h5 className="mt-3 font-display font-extrabold text-white" style={{ fontSize: '18px' }}>
                    {t(step.titleKey)}
                  </h5>
                  <p className="mt-2 text-white max-w-xs" style={{ fontSize: '16px', lineHeight: '24px' }}>
                    {t(step.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
