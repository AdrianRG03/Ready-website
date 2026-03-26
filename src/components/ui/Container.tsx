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
        'mx-auto w-full px-3 md:px-10 2xl:px-40',
        narrow ? 'max-w-3xl' : '',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
