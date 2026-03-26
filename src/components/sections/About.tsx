import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

const SELLO_ITEMS = [
  { titleKey: 'selloReady.calidadTitle',      descKey: 'selloReady.calidadDesc'      },
  { titleKey: 'selloReady.garantiaTitle',     descKey: 'selloReady.garantiaDesc'     },
  { titleKey: 'selloReady.flexibilidadTitle', descKey: 'selloReady.flexibilidadDesc' },
  { titleKey: 'selloReady.pagoLocalTitle',    descKey: 'selloReady.pagoLocalDesc'    },
]

export function About() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      id="atributos"
      aria-labelledby="sello-ready-heading"
      className="pb-5"
      style={{ background: '#FFFFFF' }}
    >
      <Container>
        <div ref={ref}>

          {/* ── Título ── */}
          <motion.div
            className="flex items-center gap-1"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <h2
              id="sello-ready-heading"
              className="font-display font-extrabold"
              style={{ fontSize: '30px', color: '#0F5C4A' }}
            >
              {t('selloReady.title')}
            </h2>
            {/* Shield check icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="#0F5C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </motion.div>

          {/* ── Fila de contenido ── */}
          <div className="flex flex-col xl:flex-row justify-between items-start">

            {/* 2×2 grid de atributos — 50% del ancho para proporciones del oficial */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10 xl:w-[50%]">
              {SELLO_ITEMS.map((item, i) => (
                <motion.div
                  key={item.titleKey}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <h5
                    className="font-extrabold"
                    style={{ fontSize: '18px', color: '#0F5C4A' }}
                  >
                    {t(item.titleKey)}
                  </h5>
                  <p
                    className="mt-1"
                    style={{ fontSize: '16px', color: '#2B2B2B', lineHeight: '1.5' }}
                  >
                    {t(item.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Video — 300×320px exacto como el oficial */}
            <motion.div
              className="relative xl:mt-0 mt-8 xl:mb-0 mb-2 flex flex-col items-center shrink-0"
              style={{ width: '300px' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={1}
            >
              <div className="w-full overflow-hidden flex justify-center">
                <video
                  controls
                  style={{ width: '300px', height: '320px', borderRadius: '6px', background: '#000' }}
                  aria-label="Clientes Ready"
                />
              </div>
              <p className="text-center mt-1" style={{ fontSize: '12px', color: '#2B2B2B' }}>
                Clientes Ready
              </p>
            </motion.div>

          </div>

          {/* ── CTAs ── */}
          <motion.div
            className="flex xl:flex-row flex-col items-center gap-5 xl:justify-start md:mt-10 mt-5"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={6}
          >
            {/* Agenda una llamada */}
            <a
              href="https://calendly.com/montse-thu/30min?month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold rounded-md"
              style={{
                background: '#F0FAB4',
                color: '#0F5C4A',
                fontSize: '18px',
                padding: '12px 16px',
                borderRadius: '6px',
              }}
            >
              {/* Calendar icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {t('selloReady.ctaCall')}
            </a>

            {/* Escribe al WhatsApp */}
            <a
              href="https://wa.me/34624607445"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold rounded-md"
              style={{
                background: '#0F5C4A',
                color: '#FFFFFF',
                fontSize: '18px',
                padding: '14px 20px',
                borderRadius: '6px',
              }}
            >
              {t('selloReady.ctaWhatsapp')}
              {/* WhatsApp icon — derecha */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
