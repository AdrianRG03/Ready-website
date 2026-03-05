import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { Button, Icon, type IconName } from '@/components/ui'
import { profileSchema, type ProfileFormData } from './wizard.schema'
import { PROFILES } from '@/utils/constants'
import { cn } from '@/utils/cn'
import type { ProfileType } from '@/types'

const profileIcons: Record<ProfileType, IconName> = {
  frontend: 'code',
  backend: 'server',
  fullstack: 'layers',
  'ux-ui': 'pen',
  data: 'database',
  devops: 'terminal',
}

interface StepProfileProps {
  defaultValues?: Partial<ProfileFormData>
  onNext: (data: ProfileFormData) => void
}

export function StepProfile({ defaultValues, onNext }: StepProfileProps) {
  const { t } = useTranslation()
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  })

  const selected = watch('profile')

  return (
    <form onSubmit={handleSubmit(onNext)} noValidate>
      <h2 className="font-display text-2xl font-bold text-gray-900 mb-1">
        {t('wizard.step1Title')}
      </h2>
      <p className="text-gray-500 mb-6">{t('wizard.step1Subtitle')}</p>

      <fieldset>
        <legend className="sr-only">{t('wizard.step1Title')}</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" role="radiogroup">
          {PROFILES.map(profile => (
            <label
              key={profile.type}
              className={cn(
                'relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200',
                'focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2',
                selected === profile.type
                  ? 'border-brand-600 bg-brand-50 text-brand-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-brand-300 hover:bg-gray-50'
              )}
            >
              <input
                type="radio"
                className="sr-only"
                value={profile.type}
                checked={selected === profile.type}
                onChange={() => setValue('profile', profile.type as ProfileType, { shouldValidate: true })}
              />
              <Icon name={profileIcons[profile.type]} size={24} aria-hidden />
              <span className="text-xs font-semibold text-center leading-tight">
                {t(profile.titleKey)}
              </span>
              {selected === profile.type && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-brand-600 rounded-full flex items-center justify-center">
                  <Icon name="check" size={10} className="text-white" />
                </div>
              )}
            </label>
          ))}
        </div>
      </fieldset>

      {errors.profile && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {errors.profile.message}
        </p>
      )}

      <div className="mt-8 flex justify-end">
        <Button type="submit" size="lg">
          {t('wizard.next')}
          <Icon name="arrow-right" size={18} />
        </Button>
      </div>
    </form>
  )
}
