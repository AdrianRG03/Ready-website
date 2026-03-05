import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button, Icon } from '@/components/ui'

interface StepConfirmationProps {
  onReset: () => void
}

export function StepConfirmation({ onReset }: StepConfirmationProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-8"
    >
      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <Icon name="check" size={36} className="text-green-600" aria-hidden />
      </motion.div>

      <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">
        {t('wizard.successTitle')}
      </h2>
      <p className="text-gray-500 leading-relaxed max-w-sm mx-auto mb-8">
        {t('wizard.successMessage')}
      </p>

      <Button variant="outline" onClick={onReset}>
        {t('wizard.successBack')}
      </Button>
    </motion.div>
  )
}
