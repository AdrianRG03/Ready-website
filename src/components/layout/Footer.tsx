import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container, Icon, type IconName } from '@/components/ui'
import { SOCIAL_LINKS } from '@/utils/constants'

const CALENDLY_URL = 'https://calendly.com/montse-thu/30min?month=2026-03'

const NAV_LINK_KEYS = [
  { labelKey: 'footer.navServicios', href: '#servicios' },
  { labelKey: 'footer.navProceso',   href: '#proceso' },
  { labelKey: 'footer.navPerfiles',  href: '#perfiles' },
  { labelKey: 'footer.navNosotros',  href: '#about' },
  { labelKey: 'footer.navLaRed',     href: '#network' },
]

const PERFIL_LINK_KEYS = [
  { labelKey: 'footer.linkDesarrollo', href: '/perfiles/desarrollo/desarrollador-front-end' },
  { labelKey: 'footer.linkData',       href: '/perfiles/data/data-engineer' },
  { labelKey: 'footer.linkDiseno',     href: '/perfiles/diseno/disenador-ux' },
  { labelKey: 'footer.linkMarketing',  href: '/perfiles/marketing/digital-marketing-strategist' },
  { labelKey: 'footer.linkIA',         href: '/perfiles/ia-automatizacion/ai-product-manager' },
]

export function Footer() {
  const { t } = useTranslation()

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer role="contentinfo" style={{ background: '#fafaf7' }}>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ background: '#042419' }}>
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Yellow glow */}
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,250,180,0.10) 0%, transparent 70%)' }} />
        {/* Green glow */}
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(15,92,74,0.30) 0%, transparent 70%)' }} />

        <Container>
          <div className="relative z-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-white/35 text-xs font-bold uppercase tracking-widest mb-2">{t('footer.bannerTag')}</p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug max-w-md">
                {t('footer.bannerTitle1')}<br />
                <span style={{ color: '#F0FAB4' }}>{t('footer.bannerTitleHighlight')}</span> {t('footer.bannerTitle2')}
              </h2>
            </div>
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2.5 px-8 py-4 rounded-[6px] font-semibold text-sm"
              style={{ background: '#F0FAB4', color: '#0F5C4A', boxShadow: '0 6px 24px rgba(200,250,180,0.38)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(200,250,180,0.50)' }}
              whileTap={{ scale: 0.97 }}
            >
              {t('footer.bannerCta')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </Container>
      </div>

      {/* ── Columnas principales ────────────────────────────── */}
      <Container>
        <div
          className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          style={{ borderBottom: '1px solid #e8e9e4' }}
        >

          {/* Col 1: Logo + descripción + redes */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" aria-label="Ready — Inicio"
              className="inline-block hover:opacity-75 transition-opacity mb-4">
              <img src="/images/readywhite.png" alt="ready"
                className="h-8 w-auto"
                style={{ filter: 'invert(1)' }}
              />
            </a>
            <p className="text-ink-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(social => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
                  style={{ background: '#eef0e9', color: '#8a9680', border: '1px solid #d8ddd1' }}
                  whileHover={{ background: '#F0FAB4', color: '#0F5C4A', borderColor: '#F0FAB4' }}
                  transition={{ duration: 0.18 }}
                >
                  <Icon name={social.icon as IconName} size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-ink-800">
              {t('footer.colNav')}
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINK_KEYS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="group flex items-center gap-2 text-sm text-ink-400 hover:text-ink-900 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0F5C4A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Perfiles */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-ink-800">
              {t('footer.colPerfiles')}
            </h3>
            <ul className="space-y-3" role="list">
              {PERFIL_LINK_KEYS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-ink-400 hover:text-ink-900 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0F5C4A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-ink-800">
              {t('footer.colContacto')}
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-ink-900 transition-colors">
                  <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {t('footer.contactCall')}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/joinready" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-ink-900 transition-colors">
                  <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {t('footer.contactLinkedin')}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/joinreadylatam" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-ink-900 transition-colors">
                  <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  {t('footer.contactInstagram')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="#0F5C4A" strokeWidth={2} strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-xs text-ink-400">© {t('footer.rights')}</span>
          </div>
          <div className="flex items-center gap-5">
            {[
              { label: t('footer.cookies'),  href: '#' },
              { label: t('footer.terminos'), href: '#' },
              { label: t('footer.aviso'),    href: '#' },
            ].map(link => (
              <a key={link.label} href={link.href}
                className="text-xs text-ink-400 hover:text-ink-800 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
