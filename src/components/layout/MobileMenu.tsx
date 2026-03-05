import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button, Icon } from '@/components/ui'
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
            className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="font-display font-bold text-xl text-brand-700">Ready</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
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
                  className="flex items-center py-3 text-gray-700 font-medium hover:text-brand-600 transition-colors"
                >
                  {t(link.label)}
                </a>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-gray-100 space-y-4">
              <LanguageSwitcher />
              <Button
                className="w-full"
                onClick={() => {
                  analytics.trackCTAClick('mobile-menu-cta')
                  handleNavClick('#contratar')
                }}
              >
                {t('nav.cta')}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
