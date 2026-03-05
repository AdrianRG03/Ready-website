import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container, Badge, Icon } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// Client logo placeholders — replace with real SVGs/images when available
const CLIENT_LOGOS = [
  'Acme Corp', 'TechCo', 'BuildIt', 'GrowFast', 'ScaleUp', 'LaunchPad',
]

const TESTIMONIALS_KEYS = [
  {
    quoteKey: 'socialProof.testimonial1Quote',
    authorKey: 'socialProof.testimonial1Author',
    roleKey: 'socialProof.testimonial1Role',
    companyKey: 'socialProof.testimonial1Company',
  },
  {
    quoteKey: 'socialProof.testimonial2Quote',
    authorKey: 'socialProof.testimonial2Author',
    roleKey: 'socialProof.testimonial2Role',
    companyKey: 'socialProof.testimonial2Company',
  },
  {
    quoteKey: 'socialProof.testimonial3Quote',
    authorKey: 'socialProof.testimonial3Author',
    roleKey: 'socialProof.testimonial3Role',
    companyKey: 'socialProof.testimonial3Company',
  },
]

export function SocialProof() {
  const { t } = useTranslation()
  const { ref, isInView, variants } = useScrollAnimation()

  return (
    <section
      id="clientes"
      aria-labelledby="social-proof-heading"
      className="py-24 bg-white"
    >
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Header */}
          <motion.div variants={variants} className="text-center mb-12">
            <Badge className="mb-4">{t('socialProof.badge')}</Badge>
            <h2
              id="social-proof-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-gray-900"
            >
              {t('socialProof.title')}
            </h2>
          </motion.div>

          {/* Client logos */}
          <motion.div
            variants={variants}
            className="mb-16 flex flex-wrap items-center justify-center gap-8"
            aria-label="Empresas clientes"
          >
            {CLIENT_LOGOS.map(name => (
              <div
                key={name}
                className="px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 font-semibold text-sm"
                aria-label={name}
              >
                {name}
              </div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_KEYS.map(testimonial => (
              <motion.blockquote
                key={testimonial.authorKey}
                variants={variants}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label="Valoración 5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" size={14} className="text-accent-500" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t(testimonial.quoteKey)}&rdquo;
                </p>

                <footer className="mt-4 pt-4 border-t border-gray-200">
                  <cite className="not-italic">
                    <span className="font-semibold text-gray-900 text-sm block">
                      {t(testimonial.authorKey)}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {t(testimonial.roleKey)} — {t(testimonial.companyKey)}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
