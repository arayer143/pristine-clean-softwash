import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  colorScheme: 'primary' | 'secondary'
  className?: string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, colorScheme, className = '' }) => {
  const baseClasses = 'py-16 md:py-24 transition-colors duration-300'
  const colorClasses = {
   primary: 'bg-primary-50 dark:bg-primary-900 text-primary-800 dark:text-primary-100',
      secondary: 'bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100'
  }

  return (
    <section className={`${baseClasses} ${colorClasses[colorScheme]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper