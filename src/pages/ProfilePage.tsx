import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CATEGORIES, getCategoryBySlug, getProfileBySlug } from '@/data/profilesData'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { Footer } from '@/components/layout/Footer'

const CLIENT_LOGOS = [
  'Falabella', 'BCI', 'Entel', 'Copec', 'Scotiabank',
  'Cencosud', 'Latam', 'Ripley', 'CMR', 'WOM',
]
const loopLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

export function ProfilePage() {
  const { category: categorySlug = '', profile: profileSlug = '' } = useParams<{
    category: string
    profile: string
  }>()
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Use URL as source of truth for language on profile pages
  const isEN = location.pathname.startsWith('/en')
  const lang = isEN ? 'en' : 'es'
  const basePath = isEN ? '/en' : ''

  // Sync i18n language with URL
  useEffect(() => {
    const targetLang = isEN ? 'en' : 'es'
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang)
    }
  }, [isEN, i18n])

  const category = getCategoryBySlug(categorySlug)
  const profile = getProfileBySlug(categorySlug, profileSlug)

  if (!category || !profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a2e22] gap-6">
        <p className="text-white/60 text-lg">
          {isEN ? 'Profile not found.' : 'Perfil no encontrado.'}
        </p>
        <Link to={`${basePath}/`} className="px-6 py-3 rounded-lg font-semibold transition-colors" style={{ background: '#F0FAB4', color: '#0F5C4A' }}>
          {isEN ? 'Go to home' : 'Ir al inicio'}
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">

      {/* ─── Profile Sub-Navbar ─────────────────────────────── */}
      <header className="sticky top-0 z-50" style={{ background: '#0F5C4A', borderBottom: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.35)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-6">

            {/* Logo */}
            <Link
              to={`${basePath}/`}
              className="font-display font-bold text-xl text-white shrink-0 hover:opacity-80 transition-opacity"
            >
              ready
            </Link>

            {/* Category selector */}
            <div className="relative shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center gap-1.5 font-semibold text-white/80 hover:text-white text-sm transition-colors"
                aria-expanded={mobileMenuOpen}
              >
                <span>{category.name[lang]}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Category dropdown */}
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 mt-2 rounded-xl py-2 min-w-[200px] z-50"
                  style={{ background: '#0a2e22', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        navigate(`${basePath}/perfiles/${cat.slug}/${cat.defaultProfile}`)
                        setMobileMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${
                        cat.slug === categorySlug ? 'font-semibold' : 'text-white/70'
                      }`}
                      style={cat.slug === categorySlug ? { color: '#F0FAB4' } : {}}
                    >
                      {cat.name[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language switcher */}
            <div className="ml-auto shrink-0">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Profile tabs — all visible, wrap on new line */}
          <div
            className="flex flex-wrap gap-1 pb-2 pt-0.5"
            role="nav"
            aria-label={isEN ? 'Category profiles' : 'Perfiles de la categoría'}
          >
            {category.profiles.map(p => (
              <Link
                key={p.slug}
                to={`${basePath}/perfiles/${categorySlug}/${p.slug}`}
                className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                style={p.slug === profileSlug
                  ? { background: '#F0FAB4', color: '#0F5C4A' }
                  : { color: 'rgba(255,255,255,0.55)' }
                }
                onMouseEnter={e => { if (p.slug !== profileSlug) (e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={e => { if (p.slug !== profileSlug) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
              >
                {p.name[lang]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="text-white py-20 px-4" style={{ background: '#0F5C4A' }}>
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            {profile.heroTitle[lang]}
          </h1>
          <p className="text-white/70 text-lg mb-10 max-w-xl">
            {profile.heroSubtitle[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34624607445"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4] transition-all duration-200"
              style={{ background: '#F0FAB4', color: '#0F5C4A', boxShadow: '0 4px 20px rgba(200,250,180,0.38)' }}
            >
              {isEN ? 'Get a quote' : 'Quiero cotizar'}
            </a>
            <Link
              to={`${basePath}/`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white/80 font-semibold text-base hover:border-white hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isEN ? 'Go to home' : 'Ir al inicio'}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Clients marquee ────────────────────────────────── */}
      <section className="relative py-5 overflow-hidden bg-white" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          {isEN ? 'Clients' : 'Clientes'}
        </p>
        <div className="relative overflow-hidden">
          {/* Fade izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
          {/* Fade derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {loopLogos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center h-10 px-6 rounded-lg shrink-0"
                style={{
                  background: 'rgba(0,0,0,0.03)',
                  border: '1px solid rgba(0,0,0,0.07)',
                  minWidth: '120px',
                }}
              >
                <span className="text-gray-400 font-bold text-xs tracking-wide select-none">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Content: Description + Tasks ───────────────────── */}
      <section className="flex-1 py-16 px-4" style={{ background: '#0a2e22' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Description */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              {profile.name[lang]}
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              {profile.description[lang]}
            </p>
          </div>

          {/* Right: Tasks */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#F0FAB4' }}>
              {isEN ? 'What are their tasks?' : '¿Cuáles son sus tareas?'}
            </h3>
            <div className="space-y-5">
              {profile.tasks.map((task, idx) => (
                <div key={idx} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-white text-sm mb-1">{task.title[lang]}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{task.desc[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────── */}
      <Footer />

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <span className="absolute right-16 bottom-3 whitespace-nowrap text-xs font-bold text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none"
          style={{ background: '#1a1a1a', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
          {t('selloReady.ctaWhatsapp')}
        </span>
        <motion.a
          href="https://wa.me/34624607445"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('selloReady.ctaWhatsapp')}
          className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.15, backgroundColor: '#1ebe5d', boxShadow: '0 8px 25px rgba(37,211,102,0.5)' }}
          whileTap={{ scale: 0.92 }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>
    </div>
  )
}
