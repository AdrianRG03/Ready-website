import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Icon } from '@/components/ui'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/utils/constants'
import { analytics } from '@/lib/analytics'

export function Navbar() {
  const { t } = useTranslation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#0F5C4A] text-white px-4 py-2 rounded-lg font-semibold"
      >
        Saltar al contenido / Skip to content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F5C4A]/95 backdrop-blur-md shadow-[0_4px_28px_rgba(0,0,0,0.45)] border-b border-white/[0.07]'
            : 'bg-[#0F5C4A]'
        }`}
        role="banner"
      >
        <Container>
          <nav
            className="flex items-center justify-between h-18 lg:h-22"
            style={{ height: scrolled ? '68px' : '80px', transition: 'height 0.3s ease' }}
            aria-label="Navegación principal"
          >
            {/* Logo */}
            <a
              href="/"
              className="hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4] rounded"
              aria-label="ready — Ir al inicio"
            >
              <img
                src="/images/readywhite.png"
                alt="ready"
                className="h-8 w-auto"
              />
            </a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="link-underline text-sm font-medium text-white/85 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4] rounded px-1"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Quiero Cotizar */}
              <a
                href="https://wa.me/34624607445"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackCTAClick('navbar-cta-hire')}
                className="btn-shimmer px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 focus-visible:outline-none"
                style={{ background: '#F0FAB4', color: '#0F5C4A', boxShadow: '0 2px 12px rgba(200,250,180,0.35)' }}
              >
                {t('nav.ctaHire')}
              </a>

              {/* Separator */}
              <span className="text-white/20 select-none" aria-hidden="true">|</span>

              {/* Quiero postular */}
              <a
                href="https://joinready.recruitee.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackCTAClick('navbar-cta-apply')}
                className="btn-shimmer px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 focus-visible:outline-none border border-[#F0FAB4] hover:bg-[#F0FAB4] hover:text-[#0F5C4A]"
                style={{ color: '#F0FAB4' }}
              >
                {t('nav.ctaApply')}
              </a>

              {/* Language switcher */}
              <LanguageSwitcher />
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4]"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" size={24} className="text-white" />
            </button>
          </nav>
        </Container>
      </motion.header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
