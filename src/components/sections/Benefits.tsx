import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container, Badge, Icon, type IconName } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { BENEFITS } from '@/utils/constants'

export function Benefits() {
  const { t } = useTranslation()
  const { ref, isInView, variants } = useScrollAnimation()

  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-heading"
      className="py-24 bg-gradient-to-b from-brand-950 to-gray-950"
    >
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header */}
          <motion.div variants={variants} className="text-center mb-16">
            <Badge variant="accent" className="mb-4">{t('benefits.badge')}</Badge>
            <h2
              id="benefits-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white"
            >
              {t('benefits.title')}
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(benefit => (
              <motion.article key={benefit.titleKey} variants={variants}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-600/20 flex items-center justify-center mb-4 text-brand-400">
                    <Icon name={benefit.icon as IconName} size={22} aria-hidden />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{t(benefit.descKey)}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
