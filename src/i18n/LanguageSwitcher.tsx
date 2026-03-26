import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { analytics } from '@/lib/analytics'
import { cn } from '@/utils/cn'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'light' | 'dark'
}

const LOCALES = [
  { code: 'es', flagCode: 'es', label: 'Español' },
  { code: 'en', flagCode: 'us', label: 'English' },
] as const

export function LanguageSwitcher({ className, variant = 'light' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // URL is the source of truth for the current language
  const currentLocale = location.pathname.startsWith('/en') ? 'en' : 'es'
  const current = LOCALES.find(l => l.code === currentLocale) ?? LOCALES[0]

  function switchLanguage(locale: 'es' | 'en') {
    const { pathname, search, hash } = location
    const isEnPath = pathname.startsWith('/en')
    setOpen(false)
    if ((locale === 'en') === isEnPath) return
    analytics.trackLanguageSwitch(locale)
    const newPath =
      locale === 'en'
        ? `/en${pathname}`
        : pathname.slice('/en'.length) || '/'
    navigate(newPath + search + hash, { replace: true })
    i18n.changeLanguage(locale)
  }

  // Close on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Selector de idioma"
        className={cn(
          'flex items-center gap-2 px-3 h-10 w-20 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2',
          variant === 'dark'
            ? 'border-[#0F5C4A] text-[#0F5C4A] hover:bg-[#0F5C4A]/10 focus-visible:ring-[#0F5C4A]'
            : 'border-white text-white hover:bg-white/10 focus-visible:ring-white'
        )}
      >
        <img
          src={`https://flagcdn.com/w20/${current.flagCode}.png`}
          alt={current.label}
          className="w-5 h-auto rounded-sm"
        />
        <svg
          aria-hidden="true"
          className={cn('w-3 h-3 transition-transform', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Idioma"
          className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
        >
          {LOCALES.map(locale => (
            <li key={locale.code} role="option" aria-selected={locale.code === currentLocale}>
              <button
                onClick={() => switchLanguage(locale.code)}
                className={cn(
                  'w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors',
                  locale.code === currentLocale
                    ? 'bg-[#0F5C4A]/10 text-[#0F5C4A] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                <img
                  src={`https://flagcdn.com/w20/${locale.flagCode}.png`}
                  alt={locale.label}
                  className="w-5 h-auto rounded-sm"
                />
                {locale.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
