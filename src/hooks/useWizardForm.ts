import { useState, useCallback, useRef } from 'react'
import { THROTTLE_DELAY, STEPS_COUNT } from '@/utils/constants'
import type { WizardSchemaData } from '@/components/sections/WizardForm/wizard.schema'

type WizardStatus = 'idle' | 'submitting' | 'success' | 'error' | 'throttled'

const DEFAULT_DATA: Partial<WizardSchemaData> = {}

export function useWizardForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<WizardSchemaData>>(DEFAULT_DATA)
  const [status, setStatus] = useState<WizardStatus>('idle')
  const lastSubmitRef = useRef<number>(0)

  const goNext = useCallback(() => {
    setStep(s => Math.min(s + 1, STEPS_COUNT))
  }, [])

  const goBack = useCallback(() => {
    setStep(s => Math.max(s - 1, 1))
  }, [])

  const updateData = useCallback((data: Partial<WizardSchemaData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }, [])

  const reset = useCallback(() => {
    setStep(1)
    setFormData(DEFAULT_DATA)
    setStatus('idle')
  }, [])

  const submit = useCallback(
    async (data: WizardSchemaData, onSubmit: (d: WizardSchemaData) => Promise<void>) => {
      // Honeypot check
      if (data.honeypot && data.honeypot.length > 0) {
        // Silently reject bot submissions
        setStatus('success')
        return
      }

      // Throttle check
      const now = Date.now()
      if (now - lastSubmitRef.current < THROTTLE_DELAY) {
        setStatus('throttled')
        setTimeout(() => setStatus('idle'), 3000)
        return
      }

      setStatus('submitting')
      lastSubmitRef.current = now

      try {
        await onSubmit(data)
        setStatus('success')
      } catch {
        setStatus('error')
      }
    },
    []
  )

  return {
    step,
    formData,
    status,
    goNext,
    goBack,
    updateData,
    reset,
    submit,
    isLastStep: step === STEPS_COUNT,
    progress: (step / STEPS_COUNT) * 100,
  }
}
