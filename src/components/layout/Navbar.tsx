import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Button, Container, Icon } from '@/components/ui'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/utils/constants'
import { analytics } from '@/lib/analytics'
import { cn } from '@/utils/cn'

export function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-brand-600 text-white px-4 py-2 rounded-lg font-semibold"
      >
        Saltar al contenido / Skip to content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <Container>
          <nav
            className="flex items-center justify-between h-16 lg:h-20"
            aria-label="Navegación principal"
          >
            {/* Logo */}
            <a
              href="/"
              className="font-display font-bold text-2xl text-brand-700 hover:text-brand-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
              aria-label="Ready — Ir al inicio"
            >
              Ready
            </a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className={cn(
                      'text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1',
                      isScrolled
                        ? 'text-gray-700 hover:text-brand-600'
                        : 'text-white/90 hover:text-white'
                    )}
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Button
                size="sm"
                onClick={() => {
                  analytics.trackCTAClick('navbar-cta')
                  document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t('nav.cta')}
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <Icon
                name="menu"
                size={24}
                className={cn(isScrolled ? 'text-gray-800' : 'text-white')}
              />
            </button>
          </nav>
        </Container>
      </motion.header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
