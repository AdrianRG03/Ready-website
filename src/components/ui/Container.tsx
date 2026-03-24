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
        'mx-auto w-full px-6 sm:px-10 lg:px-16',
        narrow ? 'max-w-3xl' : 'max-w-[1440px]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
