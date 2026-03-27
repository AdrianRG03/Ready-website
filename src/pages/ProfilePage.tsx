import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CATEGORIES, getCategoryBySlug, getProfileBySlug } from '@/data/profilesData'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { Footer } from '@/components/layout/Footer'

export function ProfilePage() {
  const { category: categorySlug = '', profile: profileSlug = '' } = useParams<{
    category: string
    profile: string
  }>()
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [categoryOpen, setCategoryOpen] = useState(false)

  const isEN = location.pathname.startsWith('/en')
  const lang = isEN ? 'en' : 'es'
  const basePath = isEN ? '/en' : ''

  useEffect(() => {
    const targetLang = isEN ? 'en' : 'es'
    if (i18n.language !== targetLang) i18n.changeLanguage(targetLang)
  }, [isEN, i18n])

  const category = getCategoryBySlug(categorySlug)
  const profile = getProfileBySlug(categorySlug, profileSlug)

  if (!category || !profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6" style={{ background: '#0F5C4A' }}>
        <p className="text-white/60 text-lg">
          {isEN ? 'Profile not found.' : 'Perfil no encontrado.'}
        </p>
        <Link
          to={`${basePath}/`}
          className="px-6 py-3 rounded-lg font-semibold transition-colors"
          style={{ background: '#F0FAB4', color: '#0F5C4A' }}
        >
          {isEN ? 'Go to home' : 'Ir al inicio'}
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">

      {/* ─── Hero + Navbar card ───────────────────────────── */}
      <section
        className="relative overflow-hidden text-white xl:text-start text-center lg:h-[590px] h-full"
        style={{
          backgroundImage: "url('/images/fondoperfil.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#0F5C4A',
        }}
      >
        {/* White card navbar — fixed, centrada, solo lg+ */}
        <div
          className="bg-white px-4 py-5 rounded-lg lg:flex items-center gap-6 w-full fixed hidden z-50"
          style={{
            top: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '83%',
            border: '1px solid #0F5C4A',
          }}
        >
          {/* Col 1: Logo solo */}
          <Link to={`${basePath}/`} className="shrink-0 flex items-center">
            <img
              src="/images/logoverde.svg"
              alt="Ready"
              style={{ height: '32px', width: 'auto' }}
            />
          </Link>

          {/* Separador vertical */}
          <div className="shrink-0 self-stretch w-px" style={{ background: 'rgba(15,92,74,0.15)' }} />

          {/* Col 2: Categoría + tabs */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-0">

            {/* Fila 1: categoría dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoryOpen(v => !v)}
                className="flex items-center gap-1.5 font-bold transition-colors hover:opacity-70"
                style={{ color: '#000000', fontSize: '18px' }}
                aria-expanded={categoryOpen}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span>{category.name[lang]}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  className={categoryOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {categoryOpen && (
                <div
                  className="absolute top-full left-0 mt-2 rounded-xl py-2 min-w-[210px] z-50 bg-white shadow-xl"
                  style={{ border: '1px solid rgba(15,92,74,0.2)' }}
                >
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        navigate(`${basePath}/perfiles/${cat.slug}/${cat.defaultProfile}`)
                        setCategoryOpen(false)
                      }}
                      className="w-full text-left px-4 py-2.5 transition-all hover:bg-[#0F5C4A]/10 hover:font-bold hover:pl-5"
                      style={{
                        color: '#0F5C4A',
                        fontSize: '15px',
                        fontWeight: cat.slug === categorySlug ? '700' : '400',
                      }}
                    >
                      {cat.name[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fila 2: tabs de perfiles */}
            <div className="flex flex-wrap items-center">
              {category.profiles.map((p, idx) => (
                <span key={p.slug} className="flex items-center">
                  {idx > 0 && (
                    <span
                      aria-hidden="true"
                      className="select-none"
                      style={{ color: 'rgba(15,92,74,0.3)', fontSize: '11px', lineHeight: 1, margin: '0 1px' }}
                    >|</span>
                  )}
                  <Link
                    to={`${basePath}/perfiles/${categorySlug}/${p.slug}`}
                    className="whitespace-nowrap px-2 py-0.5 transition-colors hover:opacity-70"
                    style={{
                      color: '#0F5C4A',
                      fontSize: '16px',
                      fontWeight: p.slug === profileSlug ? '700' : '400',
                    }}
                  >
                    {p.name[lang]}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Col 3: selector de idioma */}
          <div className="shrink-0">
            <LanguageSwitcher variant="dark" />
          </div>
        </div>

        {/* Contenido del hero (texto) */}
        <div className="px-3 md:px-10 2xl:px-40 lg:pt-[190px] pt-28 pb-16" style={{ maxWidth: '1585px' }}>
          <h1
            className="font-display font-semibold text-white leading-[1.24] mb-6"
            style={{ fontSize: '37px' }}
          >
            {profile.heroTitle[lang]}
          </h1>
          <p className="text-white text-base mb-10 max-w-xl xl:mx-0 mx-auto">
            {profile.heroSubtitle[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 xl:justify-start justify-center">
            <a
              href="https://wa.me/34624607445"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4] transition-all duration-200"
              style={{ background: '#F0FAB4', color: '#0F5C4A', minWidth: '340px' }}
            >
              {isEN ? 'Get a quote' : 'Quiero cotizar'}
            </a>
            <Link
              to={`${basePath}/`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ border: '2px solid rgba(255,255,255,0.45)', color: 'white', minWidth: '140px' }}
            >
              {isEN ? 'Go to home' : 'Ir al inicio'}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Clientes marquee ─────────────────────────────── */}
      <section style={{ background: '#dcdcdc', height: '64px', overflow: 'hidden' }}>
        <div className="flex items-center h-full" style={{ paddingLeft: '160px' }}>
          <h6
            className="min-w-fit font-bold shrink-0 mr-3"
            style={{ fontSize: '16px', color: '#0F5C4A' }}
          >
            {isEN ? 'Clients' : 'Clientes'}
          </h6>

          <div className="relative overflow-hidden flex-1 h-full flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #dcdcdc, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #dcdcdc 50%, transparent)' }} />
            <motion.div
              className="flex"
              animate={{ x: [0, -2427] }}
              transition={{ duration: 30, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
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

      {/* ─── Descripción + Tareas ─────────────────────────── */}
      <section className="flex-1 py-8 px-4 md:px-10 2xl:px-40" style={{ background: '#0F5C4A' }}>
        <div className="flex gap-10 mx-auto justify-center max-w-7xl md:flex-row md:text-start text-center flex-col">

          {/* Izquierda: descripción */}
          <div className="max-w-md w-full">
            <h2 className="font-display font-extrabold text-white mb-6" style={{ fontSize: '30px' }}>
              {profile.name[lang]}
            </h2>
            <div className="space-y-4">
              {profile.description[lang].split('. ').filter(Boolean).map((sentence, i, arr) => (
                <p key={i} className="text-white text-base leading-relaxed">
                  {sentence}{i < arr.length - 1 ? '.' : ''}
                </p>
              ))}
            </div>
          </div>

          {/* Derecha: tareas */}
          <div className="xl:max-w-xl max-w-lg w-full">
            <h2 className="font-display font-extrabold text-white mb-6" style={{ fontSize: '30px' }}>
              {isEN ? 'What are their tasks?' : '¿Cuáles son sus tareas?'}
            </h2>
            <div className="space-y-5">
              {profile.tasks.map((task, idx) => (
                <div key={idx}>
                  <h5 className="font-extrabold text-white mb-1" style={{ fontSize: '18px' }}>{task.title[lang]}</h5>
                  <p className="text-white text-base leading-relaxed">{task.desc[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón CTA centrado */}
        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/34624607445"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base transition-colors"
            style={{ background: '#F0FAB4', color: '#0F5C4A' }}
          >
            {isEN ? 'Get a quote' : 'Quiero Cotizar'}
          </a>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────── */}
      <Footer />

      {/* ─── WhatsApp flotante ────────────────────────────── */}
      <div className="fixed bottom-5 right-12 z-50 group">
        <span
          className="absolute right-16 bottom-3 whitespace-nowrap text-xs font-bold text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none"
          style={{ background: '#255B4C' }}
        >
          {t('selloReady.ctaWhatsapp')}
        </span>
        <motion.a
          href="https://wa.me/34624607445"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('selloReady.ctaWhatsapp')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
        >
          <img src="/images/social-whatsapp.svg" alt="WhatsApp" width="75" height="75" />
        </motion.a>
      </div>

    </div>
  )
}
