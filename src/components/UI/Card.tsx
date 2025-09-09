import { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'glow'
  hover?: boolean
}

export default function Card({
  children,
  className,
  padding = 'md',
  shadow = 'sm',
  hover = false,
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    glow: 'shadow-glow'
  }
  
  const hoverClasses = hover ? 'hover:shadow-glow transition-all duration-300' : ''

  return (
    <div
      className={cn(
        'card',
        paddingClasses[padding],
        shadowClasses[shadow],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  )
}
