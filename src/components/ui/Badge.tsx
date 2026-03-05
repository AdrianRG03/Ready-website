import { type HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type BadgeVariant = 'brand' | 'accent' | 'gray' | 'success'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  brand: 'bg-brand-100 text-brand-700',
  accent: 'bg-orange-100 text-orange-700',
  gray: 'bg-gray-100 text-gray-600',
  success: 'bg-green-100 text-green-700',
}

export function Badge({ variant = 'brand', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
