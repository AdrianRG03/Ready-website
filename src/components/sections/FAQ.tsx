import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container, Badge, Icon } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const FAQ_ITEMS = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' },
]

export function FAQ() {
  const { t } = useTranslation()
  const { ref, isInView, variants } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 bg-white"
    >
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header */}
          <motion.div variants={variants} className="text-center mb-14">
            <Badge className="mb-4">{t('faq.badge')}</Badge>
            <h2
              id="faq-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900"
            >
              {t('faq.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <motion.div key={item.q} variants={variants}>
                  <div
                    className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                      isOpen
                        ? 'border-brand-200 bg-brand-50/50 shadow-sm'
                        : 'border-gray-100 bg-white'
                    }`}
                  >
                    {/* Question button */}
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                    >
                      <span className="font-semibold text-gray-900 text-sm sm:text-base pr-2">
                        {t(item.q)}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="shrink-0 text-brand-600"
                      >
                        <Icon name="plus" size={20} />
                      </motion.span>
                    </button>

                    {/* Answer panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${i}`}
                          role="region"
                          aria-labelledby={`faq-question-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                            {t(item.a)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
