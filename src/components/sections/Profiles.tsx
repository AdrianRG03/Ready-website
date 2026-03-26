import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { CATEGORIES } from '@/data/profilesData'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

/* ── Ícono gráfico de barras — réplica exacta del oficial ── */
function BarChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M4.875 11.0625V13.125M7.625 9V13.125M10.375 6.9375V13.125M13.125 4.875V13.125M3.5 16.5625H14.5C15.047 16.5625 15.5716 16.3452 15.9584 15.9584C16.3452 15.5716 16.5625 15.047 16.5625 14.5V3.5C16.5625 2.95299 16.3452 2.42839 15.9584 2.04159C15.5716 1.6548 15.047 1.4375 14.5 1.4375H3.5C2.95299 1.4375 2.42839 1.6548 2.04159 2.04159C1.6548 2.42839 1.4375 2.95299 1.4375 3.5V14.5C1.4375 15.047 1.6548 15.5716 2.04159 15.9584C2.42839 16.3452 2.95299 16.5625 3.5 16.5625Z"
        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

export function Profiles() {
  const { t, i18n } = useTranslation()
  const { ref, isInView } = useScrollAnimation()
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set())

  const isEN = i18n.language.startsWith('en')
  const lang = isEN ? 'en' : 'es'
  const basePath = isEN ? '/en' : ''

  return (
    <section
      id="perfiles"
      aria-labelledby="perfiles-heading"
      className="py-10 text-center text-white overflow-hidden"
      style={{
        background: '#0F5C4A',
        backgroundImage: "url('/images/perfiles.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <div ref={ref}>

          {/* ── Título ── */}
          <motion.h2
            id="perfiles-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-white"
            style={{ fontSize: '30px' }}
          >
            {t('perfiles.title')}
          </motion.h2>

          {/* ── Subtítulo ── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="text-white mt-5 mb-8"
            style={{ fontSize: '16px' }}
            dangerouslySetInnerHTML={{ __html: t('perfiles.subtitle') }}
          />

          {/* ── Cards ── */}
          <div className="flex flex-wrap -mx-2">
            {CATEGORIES.map((cat, i) => {
              const isOpen = openCategories.has(cat.slug)
              return (
                <motion.div
                  key={cat.slug}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="px-2 mb-4 w-1/2 md:w-1/3 xl:w-1/5"
                >
                  <div
                    className="rounded-2xl"
                    style={{
                      background: '#0C4437',
                      border: '1px solid rgba(229,229,229,0.5)',
                    }}
                  >
                    <div className="flex flex-col justify-between">

                      {/* ── Header: icono + título (clickable → primer perfil) ── */}
                      <Link
                        to={`${basePath}/perfiles/${cat.slug}/${cat.defaultProfile}`}
                        className="flex md:space-x-3 md:items-center items-start md:justify-start justify-center md:p-3 p-2 transition-all duration-150"
                        style={{ textDecoration: 'none' }}
                        onMouseEnter={e => {
                          const h5 = (e.currentTarget as HTMLElement).querySelector('h5')
                          if (h5) {
                            h5.style.color = '#F0FAB4'
                            h5.style.fontWeight = '800'
                            h5.style.textDecoration = 'underline'
                          }
                        }}
                        onMouseLeave={e => {
                          const h5 = (e.currentTarget as HTMLElement).querySelector('h5')
                          if (h5) {
                            h5.style.color = 'white'
                            h5.style.fontWeight = '800'
                            h5.style.textDecoration = 'none'
                          }
                        }}
                      >
                        <div className="hidden md:flex items-center justify-center shrink-0 text-white">
                          <BarChartIcon />
                        </div>
                        <h5 className="font-sans md:text-base text-xs text-center md:text-left font-extrabold text-white transition-all duration-150">
                          {cat.name[lang]}
                        </h5>
                      </Link>

                      {/* ── Divisor ── */}
                      <hr
                        className="w-full my-0"
                        style={{ borderColor: 'rgba(243,244,246,0.2)', borderTopWidth: '1px' }}
                      />

                      {/* ── Explorar (toggle) ── */}
                      <button
                        type="button"
                        className="flex gap-1 justify-between items-center cursor-pointer w-full p-2 transition-colors duration-200"
                        style={{ background: isOpen ? '#F0FAB4' : 'transparent' }}
                        onClick={() => setOpenCategories(prev => {
                          const next = new Set(prev)
                          next.has(cat.slug) ? next.delete(cat.slug) : next.add(cat.slug)
                          return next
                        })}
                        aria-expanded={isOpen}
                      >
                        <p
                          className="font-medium"
                          style={{ color: isOpen ? '#0F5C4A' : 'white', fontSize: '16px' }}
                        >
                          {t('perfiles.explorar')}
                        </p>
                        <motion.div
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="flex items-center justify-center rounded-full shrink-0"
                          style={{
                            width: 28, height: 28,
                            background: isOpen ? '#0F5C4A' : '#F0FAB4',
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke={isOpen ? '#F0FAB4' : '#0F5C4A'}
                            strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                            aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </button>

                      {/* ── Lista de perfiles (acordeón) ── */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="profiles"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="flex text-start items-start flex-col space-y-1 md:p-3 p-2">
                              {cat.profiles.map(profile => (
                                <Link
                                  key={profile.slug}
                                  to={`${basePath}/perfiles/${cat.slug}/${profile.slug}`}
                                  className="text-left transition-all duration-150"
                                  style={{ fontSize: '16px', color: 'white', fontWeight: 400 }}
                                  onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement
                                    el.style.color = '#F0FAB4'
                                    el.style.fontWeight = '700'
                                    el.style.textDecoration = 'underline'
                                  }}
                                  onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement
                                    el.style.color = 'white'
                                    el.style.fontWeight = '400'
                                    el.style.textDecoration = 'none'
                                  }}
                                >
                                  {profile.name[lang]}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* ── CTA ── */}
          <motion.div
            className="mt-10 pb-4 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <a
              href="https://wa.me/34624607445"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold rounded-md transition-opacity hover:opacity-80"
              style={{
                background: '#F0FAB4',
                color: '#0F5C4A',
                fontSize: '18px',
                fontWeight: 600,
                borderRadius: '6px',
                padding: '12px 20px',
              }}
            >
              {t('perfiles.cta')}
            </a>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
