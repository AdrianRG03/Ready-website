import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button, Container, Badge, Icon } from '@/components/ui'
import { analytics } from '@/lib/analytics'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const STATS = [
  { value: '500+', labelKey: 'hero.statsHired' },
  { value: '200+', labelKey: 'hero.statsCompanies' },
  { value: '2', labelKey: 'hero.statsTime' },
]

export function Hero() {
  const { t } = useTranslation()

  function handleCTAClick() {
    analytics.trackCTAClick('hero-primary-cta')
    document.querySelector('#contratar')?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleSecondaryClick() {
    analytics.trackCTAClick('hero-secondary-cta')
    document.querySelector('#perfiles')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      aria-label="Sección hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-700/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-32 lg:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <Badge variant="accent" className="text-sm">
              <Icon name="star" size={12} className="text-accent-500" />
              {t('hero.badge')}
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            {t('hero.title')}{' '}
            <span className="text-accent-400">{t('hero.titleHighlight')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="secondary" onClick={handleCTAClick}>
              {t('hero.cta')}
              <Icon name="arrow-right" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              onClick={handleSecondaryClick}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {STATS.map(stat => (
              <div key={stat.labelKey} className="text-center">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-white/60 leading-tight">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
