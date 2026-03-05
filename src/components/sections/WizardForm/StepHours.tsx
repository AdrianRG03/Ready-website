import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { Button, Icon } from '@/components/ui'
import { hoursSchema, type HoursFormData } from './wizard.schema'
import { cn } from '@/utils/cn'
import type { HoursType } from '@/types'

const HOURS_OPTIONS: Array<{ value: HoursType; titleKey: string; descKey: string }> = [
  { value: 'part-time', titleKey: 'wizard.partTime', descKey: 'wizard.partTimeDesc' },
  { value: 'full-time', titleKey: 'wizard.fullTime', descKey: 'wizard.fullTimeDesc' },
  { value: 'per-project', titleKey: 'wizard.perProject', descKey: 'wizard.perProjectDesc' },
]

interface StepHoursProps {
  defaultValues?: Partial<HoursFormData>
  onNext: (data: HoursFormData) => void
  onBack: () => void
}

export function StepHours({ defaultValues, onNext, onBack }: StepHoursProps) {
  const { t } = useTranslation()
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<HoursFormData>({
    resolver: zodResolver(hoursSchema),
    defaultValues,
  })

  const selected = watch('hours')

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <h2 className="font-display text-2xl font-bold text-gray-900 mb-1">
        {t('wizard.step2Title')}
      </h2>
      <p className="text-gray-500 mb-6">{t('wizard.step2Subtitle')}</p>

      <fieldset>
        <legend className="sr-only">{t('wizard.step2Title')}</legend>
        <div className="space-y-3" role="radiogroup">
          {HOURS_OPTIONS.map(option => (
            <label
              key={option.value}
              className={cn(
                'flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200',
                'focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2',
                selected === option.value
                  ? 'border-brand-600 bg-brand-50'
                  : 'border-gray-200 bg-white hover:border-brand-300 hover:bg-gray-50'
              )}
            >
              <input
                type="radio"
                className="sr-only"
                value={option.value}
                checked={selected === option.value}
                onChange={() => setValue('hours', option.value, { shouldValidate: true })}
              />
              {/* Custom radio indicator */}
              <div
                className={cn(
                  'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors',
                  selected === option.value
                    ? 'border-brand-600 bg-brand-600'
                    : 'border-gray-300 bg-white'
                )}
              >
                {selected === option.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>

              <div className="flex-1">
                <span
                  className={cn(
                    'font-semibold block',
                    selected === option.value ? 'text-brand-700' : 'text-gray-800'
                  )}
                >
                  {t(option.titleKey)}
                </span>
                <span className="text-sm text-gray-500">{t(option.descKey)}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      {errors.hours && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {errors.hours.message}
        </p>
      )}

      <div className="mt-8 flex justify-between gap-4">
        <Button type="button" variant="outline" size="lg" onClick={onBack}>
          <Icon name="chevron-left" size={18} />
          {t('wizard.back')}
        </Button>
        <Button type="submit" size="lg">
          {t('wizard.next')}
          <Icon name="arrow-right" size={18} />
        </Button>
      </div>
    </form>
  )
}
