// Profile types
export type ProfileType = 'frontend' | 'backend' | 'fullstack' | 'ux-ui' | 'data' | 'devops'

export type HoursType = 'part-time' | 'full-time' | 'per-project'

// Wizard form data
export interface WizardFormData {
  profile: ProfileType
  hours: HoursType
  name: string
  email: string
  company: string
  message?: string
  honeypot?: string // bot trap field
}

// i18n types
export type Locale = 'es' | 'en'

// Section props
export interface SectionProps {
  id?: string
  className?: string
}

// Navigation
export interface NavLink {
  label: string
  href: string
}

// Benefit card
export interface BenefitItem {
  icon: string
  titleKey: string
  descKey: string
}

// Profile card
export interface ProfileCard {
  type: ProfileType
  titleKey: string
  descKey: string
  tags: string[]
}

// Testimonial
export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

// Social link
export interface SocialLink {
  name: string
  href: string
  icon: string
}
