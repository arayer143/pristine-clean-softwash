import React from 'react'
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  className,
  as: Heading = 'h2' 
}: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-12 group", className)}>
      <Heading className="text-3xl md:text-4xl font-bold mb-4 text-primary relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </Heading>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}