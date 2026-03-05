export const VALID_CONTACT = {
  name: 'Ana García',
  email: 'ana.garcia@empresa.com',
  company: 'TechCorp MX',
  message: 'Necesitamos un desarrollador fullstack para un proyecto de 6 meses.',
}

export const INVALID_CONTACT = {
  name: 'A', // too short
  email: 'not-an-email',
  company: 'X', // too short
  message: '',
}

export const XSS_PAYLOADS = [
  '<script>alert("xss")</script>',
  '"><img src=x onerror=alert(1)>',
  "'; DROP TABLE users; --",
  'javascript:alert(1)',
]

export const LOCALES = ['es', 'en'] as const
export type Locale = (typeof LOCALES)[number]

export const BASE_URLS: Record<Locale, string> = {
  es: '/',
  en: '/en/',
}
