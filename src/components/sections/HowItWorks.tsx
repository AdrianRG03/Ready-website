import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container, Badge } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    titleKey: 'howItWorks.step1Title',
    descKey: 'howItWorks.step1Desc',
    color: 'bg-brand-100 text-brand-700 border-brand-200',
  },
  {
    number: '02',
    titleKey: 'howItWorks.step2Title',
    descKey: 'howItWorks.step2Desc',
    color: 'bg-accent-500/10 text-accent-600 border-accent-200',
  },
  {
    number: '03',
    titleKey: 'howItWorks.step3Title',
    descKey: 'howItWorks.step3Desc',
    color: 'bg-green-100 text-green-700 border-green-200',
  },
]

export function HowItWorks() {
  const { t } = useTranslation()
  const { ref, isInView, variants } = useScrollAnimation()

  return (
    <section id="como-funciona" aria-labelledby="how-it-works-heading" className="py-24 bg-gray-50">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Header */}
          <motion.div variants={variants} className="text-center mb-16">
            <Badge className="mb-4">{t('howItWorks.badge')}</Badge>
            <h2
              id="how-it-works-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900"
            >
              {t('howItWorks.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">{t('howItWorks.subtitle')}</p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div
              className="hidden lg:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-brand-200 via-accent-200 to-green-200"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, i) => (
                <motion.article
                  key={step.number}
                  variants={variants}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number circle */}
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full border-2 flex items-center justify-center mb-6 font-display font-extrabold text-2xl ${step.color}`}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-xs">{t(step.descKey)}</p>

                  {/* Mobile arrow */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden mt-6 text-gray-300" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
