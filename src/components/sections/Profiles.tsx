import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container, Badge, Card, Icon, type IconName } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { PROFILES } from '@/utils/constants'
import { analytics } from '@/lib/analytics'

const profileIcons: Record<string, IconName> = {
  frontend: 'code',
  backend: 'server',
  fullstack: 'layers',
  'ux-ui': 'pen',
  data: 'database',
  devops: 'terminal',
}

export function Profiles() {
  const { t } = useTranslation()
  const { ref, isInView, variants } = useScrollAnimation()

  function handleProfileClick(profileType: string) {
    analytics.trackCTAClick(`profile-cta-${profileType}`)
    document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="perfiles" aria-labelledby="profiles-heading" className="py-24 bg-white">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header */}
          <motion.div variants={variants} className="text-center mb-16">
            <Badge className="mb-4">{t('profiles.badge')}</Badge>
            <h2
              id="profiles-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900"
            >
              {t('profiles.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              {t('profiles.subtitle')}
            </p>
          </motion.div>

          {/* Profile grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILES.map(profile => (
              <motion.div key={profile.type} variants={variants}>
                <Card
                  hover
                  className="h-full flex flex-col group"
                  onClick={() => handleProfileClick(profile.type)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleProfileClick(profile.type)
                    }
                  }}
                  aria-label={`${t(profile.titleKey)} — ${t('profiles.cta')}`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <Icon name={profileIcons[profile.type]} size={22} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                    {t(profile.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{t(profile.descKey)}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {profile.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-1 text-brand-600 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                    {t('profiles.cta')}
                    <Icon name="arrow-right" size={16} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
