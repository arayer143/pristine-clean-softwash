import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import SectionTitle from './section-title'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <div className="py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle 
          title={title}
          subtitle={description}
          className="mb-8"
        />
        <Button asChild size="lg" className="group">
          <Link href={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}