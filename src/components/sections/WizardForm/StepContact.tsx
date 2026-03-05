import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { Button, Icon } from '@/components/ui'
import { contactSchema, type ContactFormData } from './wizard.schema'
import { cn } from '@/utils/cn'

interface StepContactProps {
  defaultValues?: Partial<ContactFormData>
  onSubmit: (data: ContactFormData) => void
  onBack: () => void
  isSubmitting: boolean
}

function InputField({
  label,
  error,
  required,
  id,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  id: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

export function StepContact({ defaultValues, onSubmit, onBack, isSubmitting }: StepContactProps) {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  })

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
      hasError
        ? 'border-red-400 bg-red-50 focus:ring-red-400'
        : 'border-gray-200 bg-white hover:border-gray-300'
    )

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="font-display text-2xl font-bold text-gray-900 mb-1">
        {t('wizard.step3Title')}
      </h2>
      <p className="text-gray-500 mb-6">{t('wizard.step3Subtitle')}</p>

      <div className="space-y-4">
        {/* Honeypot — hidden from real users, visible to bots */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('honeypot')}
          />
        </div>

        <InputField
          id="wizard-name"
          label={t('wizard.nameLabel')}
          error={errors.name?.message}
          required
        >
          <input
            id="wizard-name"
            type="text"
            autoComplete="name"
            placeholder={t('wizard.namePlaceholder')}
            className={inputClass(!!errors.name)}
            aria-required="true"
            aria-describedby={errors.name ? 'wizard-name-error' : undefined}
            {...register('name')}
          />
        </InputField>

        <InputField
          id="wizard-email"
          label={t('wizard.emailLabel')}
          error={errors.email?.message}
          required
        >
          <input
            id="wizard-email"
            type="email"
            autoComplete="email"
            placeholder={t('wizard.emailPlaceholder')}
            className={inputClass(!!errors.email)}
            aria-required="true"
            aria-describedby={errors.email ? 'wizard-email-error' : undefined}
            {...register('email')}
          />
        </InputField>

        <InputField
          id="wizard-company"
          label={t('wizard.companyLabel')}
          error={errors.company?.message}
          required
        >
          <input
            id="wizard-company"
            type="text"
            autoComplete="organization"
            placeholder={t('wizard.companyPlaceholder')}
            className={inputClass(!!errors.company)}
            aria-required="true"
            aria-describedby={errors.company ? 'wizard-company-error' : undefined}
            {...register('company')}
          />
        </InputField>

        <InputField
          id="wizard-message"
          label={t('wizard.messageLabel')}
          error={errors.message?.message}
        >
          <textarea
            id="wizard-message"
            rows={4}
            placeholder={t('wizard.messagePlaceholder')}
            className={cn(inputClass(!!errors.message), 'resize-none')}
            aria-describedby={errors.message ? 'wizard-message-error' : undefined}
            {...register('message')}
          />
        </InputField>
      </div>

      <div className="mt-8 flex justify-between gap-4">
        <Button type="button" variant="outline" size="lg" onClick={onBack} disabled={isSubmitting}>
          <Icon name="chevron-left" size={18} />
          {t('wizard.back')}
        </Button>
        <Button type="submit" size="lg" isLoading={isSubmitting}>
          {isSubmitting ? t('wizard.submitting') : t('wizard.submit')}
          {!isSubmitting && <Icon name="arrow-right" size={18} />}
        </Button>
      </div>
    </form>
  )
}
