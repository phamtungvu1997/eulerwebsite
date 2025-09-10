import { ReactNode } from 'react'
import { cn } from '@/utils/helpers'

interface SectionProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export default function Section({
  title,
  description,
  children,
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}: SectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={cn(
            'text-3xl md:text-4xl font-semibold text-brand-fg mb-4 font-sans',
            titleClassName
          )}>
            {title}
          </h2>
          {description && (
            <p className={cn(
              'text-lg text-brand-fgMuted max-w-2xl mx-auto font-serif',
              descriptionClassName
            )}>
              {description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {children}
        </div>
      </div>
    </section>
  )
}
