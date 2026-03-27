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
            className="flex items-center justify-between"
            style={{ height: scrolled ? '80px' : '116px', transition: 'height 0.3s ease' }}
            aria-label="Navegación principal"
          >
            {/* Logo */}
            <a
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4] rounded"
              aria-label="ready — Ir al inicio"
            >
              <img
                src="/images/logoblanco.svg"
                alt="ready"
                className="w-auto"
                style={{ height: '46px' }}
              />
            </a>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-8" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="link-underline text-base font-normal text-white/85 hover:text-[#F0FAB4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4] rounded px-1"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Quiero Cotizar */}
              <a
                href="https://wa.me/34624607445?text=%C2%A1Hola!%20Queria%20obtener%20informaci%C3%B3n%20sobre%20los%20talentos%20de%20Ready"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackCTAClick('navbar-cta-hire')}
                className="btn-shimmer inline-flex items-center px-4 py-0 rounded-[6px] text-[18px] font-semibold transition-all duration-200 focus-visible:outline-none hover:brightness-95"
                style={{ background: '#F0FAB4', color: '#0F5C4A', height: '48px', boxShadow: '0 2px 12px rgba(200,250,180,0.25)' }}
              >
                {t('nav.ctaHire')}
              </a>

              {/* Separator */}
              <hr className="border border-white w-9 rotate-90" aria-hidden="true" />

              {/* Quiero postular */}
              <a
                href="https://joinready.recruitee.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackCTAClick('navbar-cta-apply')}
                className="btn-shimmer inline-flex items-center px-4 py-0 rounded-[6px] text-[18px] font-semibold transition-all duration-200 focus-visible:outline-none hover:brightness-95"
                style={{ background: '#F0FAB4', color: '#0F5C4A', height: '48px', boxShadow: '0 2px 12px rgba(200,250,180,0.25)' }}
              >
                {t('nav.ctaApply')}
              </a>

              {/* Language switcher */}
              <LanguageSwitcher className="ml-4" />
            </div>

            {/* Mobile: language switcher + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                className="p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4]"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Abrir menú de navegación"
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
              >
                <Icon name="menu" size={24} className="text-white" />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
