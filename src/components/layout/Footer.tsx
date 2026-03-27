import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const WA_LINK =
  'https://wa.me/34624607445?text=%C2%A1Hola!%20Queria%20obtener%20informaci%C3%B3n%20sobre%20los%20talentos%20de%20Ready'

const NAV_LINKS = [
  { key: 'footer.navServicios', href: '#servicios' },
  { key: 'footer.navProceso',   href: '#proceso' },
  { key: 'footer.navPerfiles',  href: '#perfiles' },
  { key: 'footer.navAtributos', href: '#atributos' },
]

const PERFIL_LINKS = [
  { key: 'footer.linkDesarrollo', to: '/perfiles/desarrollo/desarrollador-front-end' },
  { key: 'footer.linkData',       to: '/perfiles/data/data-engineer' },
  { key: 'footer.linkDiseno',     to: '/perfiles/diseno/disenador-ux' },
  { key: 'footer.linkMarketing',  to: '/perfiles/marketing/digital-marketing-strategist' },
  { key: 'footer.linkIA',         to: '/perfiles/ia-automatizacion/ai-product-manager' },
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
    <footer
      role="contentinfo"
      className="px-3 md:px-10 2xl:px-40 mt-10 mb-10 flex flex-col"
    >
      {/* ── Main nav row ──────────────────────────────────── */}
      <nav
        className="flex md:flex-row flex-col justify-between items-start gap-8 xl:gap-0 w-full"
        aria-label="Footer navigation"
      >
        {/* Col 1 — Logo + tagline + CTA */}
        <div className="flex flex-col items-center xl:items-start gap-3 w-full xl:w-fit">
          <a href="/" aria-label="Ready — Inicio">
            <img
              src="/images/logoverde.svg"
              alt="ready"
              style={{ height: '34px', width: 'auto' }}
            />
          </a>
          <p className="font-sans" style={{ fontSize: '16px', color: '#2B2B2B' }}>
            {t('footer.cta')}
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans px-4 py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity"
            style={{ fontSize: '18px', background: '#F0FAB4', color: '#0F5C4A' }}
          >
            {t('footer.ctaBtn')}
          </a>
        </div>

        {/* Col 2 — Ready links + Perfiles links */}
        <div className="flex justify-evenly w-full">
          {/* "Ready" nav */}
          <div className="flex flex-col gap-2">
            <h5 className="font-sans font-extrabold" style={{ color: '#0F5C4A', fontSize: '18px' }}>
              {t('footer.readyLabel')}
            </h5>
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => handleNavClick(e, l.href)}
                className="font-sans hover:text-[#0F5C4A] transition-colors"
                style={{ fontSize: '16px', color: '#2B2B2B' }}
              >
                {t(l.key)}
              </a>
            ))}
          </div>

          {/* "Perfiles" nav */}
          <div className="flex flex-col gap-2">
            <h5 className="font-sans font-extrabold" style={{ color: '#0F5C4A', fontSize: '18px' }}>
              {t('footer.perfilesLabel')}
            </h5>
            {PERFIL_LINKS.map(l => (
              <Link
                key={l.key}
                to={l.to}
                className="font-sans hover:text-[#0F5C4A] transition-colors"
                style={{ fontSize: '16px', color: '#2B2B2B' }}
              >
                {t(l.key)}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3 — Síguenos + social icons */}
        <div className="flex flex-col items-center gap-3 w-full xl:w-fit pb-4">
          <h5 className="font-sans font-extrabold" style={{ color: '#0F5C4A', fontSize: '18px' }}>
            {t('footer.siguenos')}
          </h5>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/joinreadylatam"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/images/social-instagram.svg" alt="Instagram" width="37" height="37" />
            </a>
            <a
              href="https://www.linkedin.com/company/joinready"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/images/social-linkedin.svg" alt="LinkedIn" width="37" height="37" />
            </a>
          </div>
        </div>
      </nav>

      {/* ── Bottom bar ─────────────────────────────────────── */}
      <div
        className="flex justify-between pt-5 md:flex-row flex-col items-center gap-3 xl:gap-0"
        style={{ borderTop: '1px solid #e5e7eb' }}
      >
        <p className="font-sans" style={{ fontSize: '16px', color: '#2B2B2B' }}>
          {t('footer.rights')}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          {[
            { label: t('footer.cookies'),  to: '/configuracion-de-cookies' },
            { label: t('footer.terminos'), to: '/terminos-y-condiciones' },
            { label: t('footer.aviso'),    to: '/politica-de-privacidad' },
          ].map(l => (
            <Link
              key={l.label}
              to={l.to}
              className="font-sans text-[#2B2B2B] hover:text-[#0F5C4A] hover:underline transition-colors"
              style={{ fontSize: '16px' }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
