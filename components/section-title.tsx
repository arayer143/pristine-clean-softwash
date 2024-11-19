import React from 'react'
import { cn } from "@/lib/utils"
import { cva } from 'class-variance-authority'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: 'primary' | 'secondary'
}

const titleStyles = cva(
  "text-3xl md:text-4xl font-bold mb-4 relative inline-block",
  {
    variants: {
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
)

export default function SectionTitle({ 
  title, 
  subtitle, 
  className,
  as: Heading = 'h2',
  color = 'primary'
}: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-12 group", className)}>
      <Heading className={titleStyles({ color })}>
        {title}
        <span className="absolute -bottom-2 left-1/2 w-3/4 h-1 bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
      </Heading>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}