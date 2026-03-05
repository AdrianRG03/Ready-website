import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { analytics } from '@/lib/analytics'
import { cn } from '@/utils/cn'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const currentLocale = i18n.language.startsWith('en') ? 'en' : 'es'

  function switchLanguage(locale: 'es' | 'en') {
    const { pathname, search, hash } = location
    const isEnPath = pathname.startsWith('/en')

    // Guard: already on the correct URL path for this locale — nothing to do
    if ((locale === 'en') === isEnPath) return

    analytics.trackLanguageSwitch(locale)

    // Compute target path from URL (not from i18n locale, which may mismatch
    // when the browser navigator language differs from the site's default 'es')
    const newPath = locale === 'en'
      ? `/en${pathname}`                      // / → /en/
      : pathname.slice('/en'.length) || '/'   // /en/ → /

    navigate(newPath + search + hash, { replace: true })
    i18n.changeLanguage(locale)
  }

  return (
    <div
      className={cn('flex items-center gap-1 text-sm font-medium', className)}
      role="group"
      aria-label="Selector de idioma / Language selector"
    >
      <button
        onClick={() => switchLanguage('es')}
        aria-pressed={currentLocale === 'es'}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          currentLocale === 'es'
            ? 'text-brand-600 font-semibold'
            : 'text-gray-500 hover:text-gray-900'
        )}
      >
        ES
      </button>
      <span className="text-gray-300" aria-hidden="true">|</span>
      <button
        onClick={() => switchLanguage('en')}
        aria-pressed={currentLocale === 'en'}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          currentLocale === 'en'
            ? 'text-brand-600 font-semibold'
            : 'text-gray-500 hover:text-gray-900'
        )}
      >
        EN
      </button>
    </div>
  )
}
