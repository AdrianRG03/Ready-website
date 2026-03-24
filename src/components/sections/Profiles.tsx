import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { CATEGORIES } from '@/data/profilesData'
import { analytics } from '@/lib/analytics'

const CATEGORY_ICONS: Record<string, JSX.Element> = {
  'ia-automatizacion': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      <circle cx="9" cy="14" r="1" fill="currentColor" />
      <circle cx="15" cy="14" r="1" fill="currentColor" />
    </svg>
  ),
  'desarrollo': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'data': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'diseno': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  'marketing': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
}

export function Profiles() {
  const { t, i18n } = useTranslation()
  const { ref, isInView } = useScrollAnimation()
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const isEN = i18n.language === 'en'
  const lang = isEN ? 'en' : 'es'
  const basePath = isEN ? '/en' : ''

  const toggleCategory = (slug: string) => {
    setOpenCategory(prev => (prev === slug ? null : slug))
  }

  return (
    <section
      id="perfiles"
      aria-labelledby="perfiles-heading"
      className="relative py-24 overflow-hidden"
      style={{ background: '#fafaf7' }}
    >
      {/* Textura hexagonal de fondo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-profiles" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
              <polygon points="14,2 42,2 56,24 42,46 14,46 0,24"
                fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-profiles)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div ref={ref}>

          {/* ── Header ── */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="perfiles-heading"
              className="font-display text-3xl sm:text-4xl font-bold"
              style={{ color: '#1c2419' }}
            >
              {t('perfiles.title')}
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: 'rgba(28,36,25,0.55)' }}
              dangerouslySetInnerHTML={{ __html: t('perfiles.subtitle') }}
            />
          </motion.div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-start">
            {CATEGORIES.map((cat, i) => {
              const isOpen = openCategory === cat.slug
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 36 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.09 }}
                  className="group rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: isOpen ? '#fff' : '#fff',
                    border: isOpen
                      ? '1px solid rgba(255,77,46,0.35)'
                      : '1px solid rgba(0,0,0,0.08)',
                    boxShadow: isOpen
                      ? '0 12px 40px rgba(0,0,0,0.12)'
                      : '0 2px 12px rgba(0,0,0,0.06)',
                    transition: 'border-color 0.25s, box-shadow 0.25s',
                  }}
                >
                  {/* ── Cabecera: icono + título → navega a la subpágina ── */}
                  <Link
                    to={`${basePath}/perfiles/${cat.slug}/${cat.defaultProfile}`}
                    className="flex items-center gap-3 px-5 pt-6 pb-4 w-full transition-colors duration-200 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d2e] rounded-t-2xl"
                    onClick={() => analytics.trackCTAClick(`profile-category-title-${cat.slug}`)}
                  >
                    {/* Icono */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: isOpen ? 'rgba(15,45,32,0.12)' : 'rgba(15,45,32,0.07)',
                        color: '#0f2d20',
                        border: '1px solid rgba(15,45,32,0.15)',
                      }}
                    >
                      {CATEGORY_ICONS[cat.slug]}
                    </div>

                    {/* Título */}
                    <h3 className="font-bold text-sm leading-snug flex-1" style={{ color: '#1c2419' }}>
                      {cat.name[lang]}
                    </h3>
                  </Link>

                  {/* ── Separador ── */}
                  <div className="mx-5 h-px" style={{ background: 'rgba(0,0,0,0.07)' }} />

                  {/* ── Lista de perfiles — acordeón ── */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <ul className="flex flex-col py-2" role="list">
                          {cat.profiles.map((profile, pi) => (
                            <motion.li
                              key={profile.slug}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: pi * 0.04, duration: 0.25 }}
                            >
                              <Link
                                to={`${basePath}/perfiles/${cat.slug}/${profile.slug}`}
                                className="flex items-center gap-2 px-5 py-2 text-xs transition-all duration-150 hover:bg-black/5"
                                style={{ color: 'rgba(28,36,25,0.55)' }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1c2419'}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(28,36,25,0.55)'}
                                onClick={() => analytics.trackCTAClick(`profile-link-${profile.slug}`)}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ background: '#ff4d2e' }}
                                />
                                {profile.name[lang]}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ── Footer "Explorar" → abre/cierra el acordeón ── */}
                  <button
                    type="button"
                    className="mt-auto px-5 py-3.5 border-t flex items-center justify-between w-full transition-colors duration-200 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2d20]"
                    style={{ borderColor: 'rgba(15,45,32,0.12)', background: 'rgba(15,45,32,0.05)' }}
                    onClick={() => {
                      toggleCategory(cat.slug)
                      analytics.trackCTAClick(`profile-explore-${cat.slug}`)
                    }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-xs" style={{ color: '#0f2d20' }}>
                      {t('perfiles.explorar')}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: isOpen ? 'rgba(15,45,32,0.18)' : 'rgba(15,45,32,0.1)',
                        border: '1px solid rgba(15,45,32,0.2)',
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke="#0f2d20" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.div>
                  </button>
                </motion.div>
              )
            })}
          </div>

          {/* ── CTA ── */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://wa.me/34624607445"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d2e]"
              style={{
                background: '#ff4d2e',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(255,77,46,0.38)',
              }}
            >
              {t('perfiles.cta')}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
