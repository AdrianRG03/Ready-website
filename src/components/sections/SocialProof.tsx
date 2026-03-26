import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const TESTIMONIALS = [
  {
    quoteKey:    'testimonios.t1Quote',
    nameKey:     'testimonios.t1Name',
    roleKey:     'testimonios.t1Role',
    photo:       '/images/lazaro.png',
    companyLogo: '/images/zurich-santander.webp',
    companyAlt:  'Zurich Santander',
    logoHeight:  '72px',
    logoWidth:   '160px',
  },
  {
    quoteKey:    'testimonios.t2Quote',
    nameKey:     'testimonios.t2Name',
    roleKey:     'testimonios.t2Role',
    photo:       '/images/nicole-opazo.png',
    companyLogo: '/images/lipigas.webp',
    companyAlt:  'Lipigas',
    logoHeight:  '64px',
  },
  {
    quoteKey:    'testimonios.t3Quote',
    nameKey:     'testimonios.t3Name',
    roleKey:     'testimonios.t3Role',
    photo:       '/images/jorge-pacheco.png',
    companyLogo: '/images/compas-group.webp',
    companyAlt:  'Compas Group',
    logoHeight:  '40px',
  },
]

/* ── Comillas decorativas (SVG oficial) ───────────────── */
function QuoteIcon() {
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3.82824 12.2599C2.97752 12.2599 2.25677 12.059 1.666 11.6573C1.09885 11.2556 0.673487 10.7239 0.389914 10.0622C0.129971 9.40054 0 8.69161 0 7.93541C0 6.84838 0.224496 5.82043 0.673487 4.85155C1.14611 3.88267 1.7487 3.03195 2.48127 2.29939C3.23747 1.54319 4.05274 0.96423 4.92709 0.5625L7.37291 2.37028C6.73487 2.65386 6.13228 2.99651 5.56513 3.39824C4.99798 3.77633 4.50173 4.20169 4.07637 4.67432C3.67464 5.14694 3.36744 5.63138 3.15476 6.12763L3.33199 6.23397C3.47378 6.13945 3.62738 6.06855 3.7928 6.02129C3.98185 5.97403 4.22997 5.9504 4.53718 5.9504C4.96254 5.9504 5.3879 6.05674 5.81326 6.26942C6.26225 6.4821 6.62853 6.80112 6.91211 7.22648C7.21931 7.65184 7.37291 8.19536 7.37291 8.85703C7.37291 9.58959 7.2075 10.2158 6.87666 10.7357C6.54582 11.232 6.10865 11.6101 5.56513 11.87C5.02162 12.1299 4.44265 12.2599 3.82824 12.2599Z" fill="#15453B" />
      <path d="M14.4553 12.2599C13.6046 12.2599 12.8839 12.059 12.2931 11.6573C11.7259 11.2556 11.3006 10.7239 11.017 10.0622C10.7571 9.40054 10.6271 8.69161 10.6271 7.93541C10.6271 6.84838 10.8516 5.82043 11.3006 4.85155C11.7732 3.88267 12.3758 3.03195 13.1084 2.29939C13.8646 1.54319 14.6798 0.96423 15.5542 0.5625L18 2.37028C17.362 2.65386 16.7594 2.99651 16.1922 3.39824C15.6251 3.77633 15.1288 4.20169 14.7035 4.67432C14.3017 5.14694 13.9945 5.63138 13.7818 6.12763L13.9591 6.23397C14.1009 6.13945 14.2545 6.06855 14.4199 6.02129C14.6089 5.97403 14.8571 5.9504 15.1643 5.9504C15.5896 5.9504 16.015 6.05674 16.4403 6.26942C16.8893 6.4821 17.2556 6.80112 17.5392 7.22648C17.8464 7.65184 18 8.19536 18 8.85703C18 9.58959 17.8346 10.2158 17.5037 10.7357C17.1729 11.232 16.7357 11.6101 16.1922 11.87C15.6487 12.1299 15.0697 12.2599 14.4553 12.2599Z" fill="#15453B" />
    </svg>
  )
}

/* ── Componente principal ─────────────────────────────── */
export function SocialProof() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollAnimation()

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECCIÓN 1 — CLIENTES
      ══════════════════════════════════════════════════ */}
      <section
        id="clientes"
        aria-label="Clientes"
        style={{ background: '#dcdcdc', height: '64px', overflow: 'hidden' }}
      >
        <div className="flex items-center h-full pl-3 md:pl-10 2xl:pl-40">
          {/* Label fijo */}
          <h6
            className="min-w-fit font-bold shrink-0 mr-3"
            style={{ fontSize: '16px', color: '#0F5C4A' }}
          >
            {t('clientes.title')}
          </h6>

          {/* Marquee con degradados laterales */}
          <div className="relative overflow-hidden flex-1 h-full flex items-center">
            {/* Degradado izquierdo */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #dcdcdc, transparent)' }} />
            {/* Degradado derecho */}
            <div className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #dcdcdc 50%, transparent)' }} />

            <motion.div
              className="flex"
              animate={{ x: [0, -2427] }}
              transition={{ duration: 24, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
              style={{ willChange: 'transform' }}
            >
              <img src="/images/clients.webp" alt="" aria-hidden="true"
                style={{ height: '64px', width: '2427px', display: 'block', flexShrink: 0 }} />
              <img src="/images/clients.webp" alt="Clientes Ready"
                style={{ height: '64px', width: '2427px', display: 'block', flexShrink: 0 }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECCIÓN 2 — TESTIMONIOS
      ══════════════════════════════════════════════════ */}
      <section
        aria-labelledby="testimonios-heading"
        style={{ background: '#F3F4F6', paddingTop: '40px', paddingBottom: '16px' }}
      >
        <div ref={ref} className="px-3 md:px-10 2xl:px-40">

          {/* Título */}
          <motion.h2
            id="testimonios-heading"
            className="text-center font-extrabold"
            style={{ fontSize: '30px', color: '#0F5C4A' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('testimonios.title')}
          </motion.h2>

          {/* Tarjetas */}
          <div className="flex flex-col xl:flex-row 2xl:gap-28 lg:gap-5 gap-10 justify-center items-center mt-10">
            {TESTIMONIALS.map((item, i) => (
              <motion.div
                key={item.nameKey}
                className="bg-white rounded-md overflow-hidden w-full"
                style={{ maxWidth: '384px', height: '530px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Foto */}
                <img
                  src={item.photo}
                  alt={t(item.nameKey)}
                  className="w-full"
                  style={{ maxHeight: '254px', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />

                {/* Contenido */}
                <div className="space-y-1 p-2">
                  <QuoteIcon />

                  {/* Cita */}
                  <div
                    className="h-40 max-h-96 overflow-hidden"
                    style={{ fontSize: '16px', color: '#2B2B2B', lineHeight: '24px' }}
                  >
                    &ldquo;{t(item.quoteKey)}&rdquo;
                  </div>

                  {/* Separador */}
                  <hr style={{ borderColor: '#F3F3F3', borderTopWidth: '1px', margin: '0' }} />

                  {/* Footer: nombre + rol + logo empresa */}
                  <div className="flex justify-between items-center pt-1">
                    <div>
                      <h5 className="font-sans font-extrabold" style={{ fontSize: '18px', color: '#0F5C4A' }}>
                        {t(item.nameKey)}
                      </h5>
                      <p style={{ fontSize: '16px', color: '#2B2B2B' }}>
                        {t(item.roleKey)}
                      </p>
                    </div>
                    <img
                      src={item.companyLogo}
                      alt={item.companyAlt}
                      style={{ maxHeight: item.logoHeight, maxWidth: item.logoWidth ?? '130px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="https://wa.me/34624607445"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold"
              style={{
                background: '#F0FAB4',
                color: '#0F5C4A',
                fontSize: '18px',
                padding: '12px 32px',
                borderRadius: '6px',
                display: 'inline-block',
              }}
            >
              {t('testimonios.cta')}
            </a>
          </motion.div>

        </div>
      </section>
    </>
  )
}
