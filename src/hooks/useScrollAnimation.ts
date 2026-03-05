import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollAnimationOptions {
  once?: boolean
  amount?: number
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  once = true,
  amount = 0.2,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, { once, amount })

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return { ref, isInView, variants }
}
