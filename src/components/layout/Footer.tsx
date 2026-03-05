import { useTranslation } from 'react-i18next'
import { Container, Icon, type IconName } from '@/components/ui'
import { NAV_LINKS, SOCIAL_LINKS } from '@/utils/constants'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-950 text-gray-400" role="contentinfo">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="font-display font-bold text-2xl text-white hover:text-brand-400 transition-colors"
              aria-label="Ready — Ir al inicio"
            >
              Ready
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">{t('footer.tagline')}</p>
            {/* Social links */}
            <div className="mt-6 flex gap-4" aria-label={t('footer.followUs')}>
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as IconName} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3 mb-6" role="list">
              <li>
                <a
                  href="/privacidad"
                  className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="/terminos"
                  className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded"
                >
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
            <div>
              <p className="text-xs mb-1 uppercase tracking-wider">{t('footer.contact')}</p>
              <a
                href={`mailto:${t('footer.email')}`}
                className="text-sm text-brand-400 hover:text-brand-300 transition-colors"
              >
                {t('footer.email')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 text-center text-xs">
          {t('footer.rights', { year })}
        </div>
      </Container>
    </footer>
  )
}
