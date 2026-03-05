import type { NavLink, BenefitItem, ProfileCard, SocialLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'nav.howItWorks', href: '#como-funciona' },
  { label: 'nav.profiles', href: '#perfiles' },
  { label: 'nav.benefits', href: '#beneficios' },
  { label: 'nav.about', href: '#nosotros' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/joinready',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/joinready',
    icon: 'instagram',
  },
  {
    name: 'X / Twitter',
    href: 'https://twitter.com/joinready',
    icon: 'twitter',
  },
]

export const BENEFITS: BenefitItem[] = [
  { icon: 'clock', titleKey: 'benefits.speed.title', descKey: 'benefits.speed.desc' },
  { icon: 'shield', titleKey: 'benefits.quality.title', descKey: 'benefits.quality.desc' },
  { icon: 'dollar', titleKey: 'benefits.cost.title', descKey: 'benefits.cost.desc' },
  { icon: 'globe', titleKey: 'benefits.remote.title', descKey: 'benefits.remote.desc' },
  { icon: 'users', titleKey: 'benefits.team.title', descKey: 'benefits.team.desc' },
  { icon: 'chart', titleKey: 'benefits.scale.title', descKey: 'benefits.scale.desc' },
]

export const PROFILES: ProfileCard[] = [
  {
    type: 'frontend',
    titleKey: 'profiles.frontend.title',
    descKey: 'profiles.frontend.desc',
    tags: ['React', 'Vue', 'TypeScript', 'Next.js'],
  },
  {
    type: 'backend',
    titleKey: 'profiles.backend.title',
    descKey: 'profiles.backend.desc',
    tags: ['Node.js', 'Python', 'Go', 'PostgreSQL'],
  },
  {
    type: 'fullstack',
    titleKey: 'profiles.fullstack.title',
    descKey: 'profiles.fullstack.desc',
    tags: ['React', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    type: 'ux-ui',
    titleKey: 'profiles.uxui.title',
    descKey: 'profiles.uxui.desc',
    tags: ['Figma', 'Design System', 'UX Research', 'Prototyping'],
  },
  {
    type: 'data',
    titleKey: 'profiles.data.title',
    descKey: 'profiles.data.desc',
    tags: ['Python', 'SQL', 'Tableau', 'ML'],
  },
  {
    type: 'devops',
    titleKey: 'profiles.devops.title',
    descKey: 'profiles.devops.desc',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
  },
]

export const THROTTLE_DELAY = 30_000 // 30 seconds between form submissions

export const STEPS_COUNT = 3
