import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container, Badge, Icon } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const VALUES_KEYS = ['about.value1', 'about.value2', 'about.value3', 'about.value4']

export function About() {
  const { t } = useTranslation()
  const { ref, isInView, variants } = useScrollAnimation()

  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="py-24 bg-gray-50"
    >
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: text */}
          <div>
            <motion.div variants={variants}>
              <Badge className="mb-4">{t('about.badge')}</Badge>
            </motion.div>

            <motion.h2
              id="about-heading"
              variants={variants}
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-4"
            >
              {t('about.title')}
            </motion.h2>

            <motion.p variants={variants} className="mt-4 text-lg text-gray-500 leading-relaxed">
              {t('about.subtitle')}
            </motion.p>

            {/* Mission */}
            <motion.div variants={variants} className="mt-8 p-5 rounded-2xl bg-brand-50 border border-brand-100">
              <h3 className="font-semibold text-brand-800 mb-2">{t('about.mission')}</h3>
              <p className="text-brand-700 text-sm leading-relaxed">{t('about.missionText')}</p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={variants} className="mt-4 p-5 rounded-2xl bg-white border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">{t('about.vision')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('about.visionText')}</p>
            </motion.div>
          </div>

          {/* Right: values */}
          <div>
            <motion.h3
              variants={variants}
              className="font-display text-xl font-bold text-gray-900 mb-6"
            >
              {t('about.values')}
            </motion.h3>

            <div className="space-y-4">
              {VALUES_KEYS.map((key, i) => (
                <motion.div
                  key={key}
                  variants={variants}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold font-display shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={18} className="text-brand-600 shrink-0" />
                    <span className="font-medium text-gray-800">{t(key)}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
