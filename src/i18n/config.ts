import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      queryStringParams: { v: '2' },
    },
    detection: {
      // 'navigator' excluded: headless Chromium reports 'en-US', overriding the Spanish
      // default at '/'. Index 1 reads 'en' from /en/ and '' from /, falling back to
      // fallbackLng 'es' — giving each URL the correct locale without navigator noise.
      order: ['path', 'localStorage'],
      lookupFromPathIndex: 1,
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    react: {
      useSuspense: true,
    },
  })

export default i18n
