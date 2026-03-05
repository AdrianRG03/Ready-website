import { type HTMLAttributes, type ElementType } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  narrow?: boolean
}

export function Container({
  as: Tag = 'div',
  narrow = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        narrow ? 'max-w-3xl' : 'max-w-7xl',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
