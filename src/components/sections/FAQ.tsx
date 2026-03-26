import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const FEATURES = [
  { titleKey: 'plataforma.pagosTitle',       descKey: 'plataforma.pagosDesc'       },
  { titleKey: 'plataforma.seguimientoTitle', descKey: 'plataforma.seguimientoDesc' },
  { titleKey: 'plataforma.complianceTitle',  descKey: 'plataforma.complianceDesc'  },
  { titleKey: 'plataforma.presupuestoTitle', descKey: 'plataforma.presupuestoDesc' },
]

export function FAQ() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      id="plataforma"
      aria-labelledby="plataforma-heading"
      style={{
        background: '#0F5C4A',
        backgroundImage: 'url(/images/bg-company-feautures.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        paddingTop: '40px',
        paddingBottom: '40px',
        color: '#FFFFFF',
      }}
    >
      <div
        ref={ref}
        className="mx-auto w-full px-3 md:px-10 2xl:px-40 flex justify-between md:items-start items-center md:flex-row flex-col"
      >

        {/* ── Izquierda: título + subtítulo + features ── */}
        <div style={{ maxWidth: '804px' }}>
          <motion.h2
            id="plataforma-heading"
            className="font-display font-extrabold text-center xl:text-start"
            style={{ fontSize: '30px', color: '#FFFFFF' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('plataforma.title')}
          </motion.h2>

          <motion.p
            className="pt-5 pb-10"
            style={{ fontSize: '16px', color: '#FFFFFF' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('plataforma.subtitle')}
          </motion.p>

          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-9">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.titleKey}
                className="space-y-3 max-w-96 text-center md:text-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h5
                  className="font-sans font-extrabold max-w-52 md:max-w-fit"
                  style={{ fontSize: '18px', color: '#FFFFFF' }}
                >
                  {t(feature.titleKey)}
                </h5>
                <p style={{ fontSize: '16px', color: '#FFFFFF' }}>
                  {t(feature.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Derecha: iPad ── */}
        <motion.img
          src="/images/ipad.png"
          alt="Ready platform dashboard"
          className="md:mt-0 mt-5 shrink-0"
          style={{ height: '500px' }}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

      </div>
    </section>
  )
}
