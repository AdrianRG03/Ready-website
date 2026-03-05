import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Container, Badge } from '@/components/ui'
import { ProgressBar } from './ProgressBar'
import { StepProfile } from './StepProfile'
import { StepHours } from './StepHours'
import { StepContact } from './StepContact'
import { StepConfirmation } from './StepConfirmation'
import { useWizardForm } from '@/hooks/useWizardForm'
import { submitWizardForm } from '@/lib/integrations'
import { analytics } from '@/lib/analytics'
import type { ProfileFormData, HoursFormData, ContactFormData, WizardSchemaData } from './wizard.schema'

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    transition: { duration: 0.25 },
  }),
}

export function WizardForm() {
  const { t } = useTranslation()
  const { step, formData, status, goNext, goBack, updateData, reset, submit } =
    useWizardForm()

  // Track animation direction
  const direction = 1

  function handleProfileNext(data: ProfileFormData) {
    updateData(data)
    analytics.trackWizardStep(1, 'profile')
    goNext()
  }

  function handleHoursNext(data: HoursFormData) {
    updateData(data)
    analytics.trackWizardStep(2, 'hours')
    goNext()
  }

  async function handleContactSubmit(data: ContactFormData) {
    const fullData: WizardSchemaData = {
      ...(formData as Pick<WizardSchemaData, 'profile' | 'hours'>),
      ...data,
    }
    await submit(fullData, async d => {
      analytics.trackWizardStep(3, 'contact')
      analytics.trackWizardSubmit(d.profile)
      // Remove honeypot before sending
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { honeypot: _honeypot, ...cleanData } = d
      await submitWizardForm(cleanData)
    })
  }

  function handleGoBack() {
    goBack()
  }

  const isSuccess = status === 'success'
  const isError = status === 'error'
  const isThrottled = status === 'throttled'
  const isSubmitting = status === 'submitting'

  return (
    <section
      id="contratar"
      aria-labelledby="wizard-heading"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4">{t('wizard.title')}</Badge>
          <h2
            id="wizard-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-gray-900"
          >
            {t('wizard.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">{t('wizard.subtitle')}</p>
        </div>

        {/* Form card */}
        <div
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          data-testid="wizard-form"
        >
          <div className="p-8 sm:p-10">
            {/* Progress bar — hide on success */}
            {!isSuccess && <ProgressBar step={step} />}

            {/* Step content with animation */}
            <div className="relative min-h-[320px]">
              <AnimatePresence mode="wait" custom={direction}>
                {isSuccess ? (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <StepConfirmation onReset={reset} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {step === 1 && (
                      <StepProfile
                        defaultValues={{ profile: formData.profile }}
                        onNext={handleProfileNext}
                      />
                    )}
                    {step === 2 && (
                      <StepHours
                        defaultValues={{ hours: formData.hours }}
                        onNext={handleHoursNext}
                        onBack={handleGoBack}
                      />
                    )}
                    {step === 3 && (
                      <StepContact
                        defaultValues={{
                          name: formData.name,
                          email: formData.email,
                          company: formData.company,
                          message: formData.message,
                        }}
                        onSubmit={handleContactSubmit}
                        onBack={handleGoBack}
                        isSubmitting={isSubmitting}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Error state */}
            {isError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-center"
                role="alert"
              >
                <p className="text-red-700 font-semibold text-sm mb-1">{t('wizard.errorTitle')}</p>
                <p className="text-red-600 text-sm">{t('wizard.errorMessage')}</p>
              </motion.div>
            )}

            {/* Throttle warning */}
            {isThrottled && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-center"
                role="alert"
              >
                <p className="text-yellow-700 text-sm">{t('wizard.throttleMessage')}</p>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
