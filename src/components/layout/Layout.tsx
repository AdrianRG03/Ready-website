import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-5 right-12 z-50 group">
        {/* Tooltip */}
        <span className="absolute right-16 bottom-3 whitespace-nowrap text-xs font-sans font-semibold text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none"
          style={{ background: '#255B4C', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
          {t('selloReady.ctaWhatsapp')}
        </span>
        <motion.a
          href="https://wa.me/34624607445?text=%C2%A1Hola!%20Queria%20obtener%20informaci%C3%B3n%20sobre%20los%20talentos%20de%20Ready"
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
