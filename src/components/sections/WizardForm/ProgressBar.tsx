import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { STEPS_COUNT } from '@/utils/constants'

interface ProgressBarProps {
  step: number
}

export function ProgressBar({ step }: ProgressBarProps) {
  const { t } = useTranslation()
  const progress = (step / STEPS_COUNT) * 100

  return (
    <div className="mb-8">
      {/* Step indicator */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-gray-500">
          {t('wizard.step', { current: step, total: STEPS_COUNT })}
        </span>
        <span className="text-sm font-semibold text-brand-600">{Math.round(progress)}%</span>
      </div>

      {/* Bar */}
      <div
        className="h-2 bg-gray-100 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={STEPS_COUNT}
        aria-label={t('wizard.step', { current: step, total: STEPS_COUNT })}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Step dots */}
      <div className="flex justify-between mt-3">
        {Array.from({ length: STEPS_COUNT }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i + 1 <= step ? 'bg-brand-600' : 'bg-gray-200'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}
