import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { NAV_LINKS } from '@/utils/constants'
import { analytics } from '@/lib/analytics'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  function handleNavClick(href: string) {
    onClose()
    // Smooth scroll after menu close animation
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-72 flex flex-col"
            style={{ background: '#042419', boxShadow: '-8px 0 40px rgba(0,0,0,0.6)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <img src="/images/logoblanco.svg" alt="ready" className="h-7 w-auto" />
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0FAB4] transition-colors"
                aria-label="Cerrar menú"
              >
                <Icon name="x" size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 py-6 space-y-1" aria-label="Navegación principal">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="flex items-center py-3 text-white/70 font-medium hover:text-white transition-colors"
                >
                  {t(link.label)}
                </a>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 py-6 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <LanguageSwitcher />

              {/* Quiero Cotizar */}
              <a
                href="https://wa.me/34624607445?text=%C2%A1Hola!%20Queria%20obtener%20informaci%C3%B3n%20sobre%20los%20talentos%20de%20Ready"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  analytics.trackCTAClick('mobile-menu-cta-hire')
                  onClose()
                }}
                className="btn-shimmer w-full flex items-center justify-center px-5 py-3 rounded-lg text-sm font-bold transition-all duration-200 focus-visible:outline-none"
                style={{ background: '#F0FAB4', color: '#0F5C4A', boxShadow: '0 2px 12px rgba(200,250,180,0.35)' }}
              >
                {t('nav.ctaHire')}
              </a>

              {/* Quiero Postular */}
              <a
                href="https://joinready.recruitee.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  analytics.trackCTAClick('mobile-menu-cta-apply')
                  onClose()
                }}
                className="btn-shimmer w-full flex items-center justify-center px-5 py-3 rounded-lg text-sm font-bold transition-all duration-200 focus-visible:outline-none"
                style={{ background: 'rgba(200,250,180,0.12)', border: '1px solid rgba(200,250,180,0.4)', color: '#F0FAB4' }}
              >
                {t('nav.ctaApply')}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
