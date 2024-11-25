'use client'

import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { testimonials, Testimonial } from '@/lib/testimonials'
import { Star, Facebook, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <Card className="w-full max-w-2xl mx-auto bg-primary/5 shadow-lg">
    <CardContent className="p-6 relative">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-primary">{testimonial.name}</h3>
        {testimonial.source === 'facebook' ? (
          <Facebook className="w-6 h-6 text-blue-600" aria-label="Facebook review" />
        ) : (
          <img src="/google-logo.png" alt="Google review" className="w-6 h-6" />
        )}
      </div>
      <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
      <div className="flex" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    </CardContent>
  </Card>
)

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }, [])

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    trackMouse: true
  })

  return (
    <section className="py-12 bg-gradient-to-b from-primary/10 to-background" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <h2 id="testimonials-title" className="text-3xl font-bold text-center mb-8 text-primary">What our Customers are Saying</h2>

        <div className="flex justify-center space-x-2 mb-5">
          <Button variant="outline" size="sm" asChild>
            <Link href="https://www.google.com/maps/place/Pristine+Clean+Softwash,+LLC/@29.619036,-90.7294213,13.25z/data=!4m8!3m7!1s0x3ce2d718785aa69:0x353ce7095f70135!8m2!3d29.6300359!4d-90.7373839!9m1!1b1!16s%2Fg%2F11q3cykxpd?entry=ttu" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 488 512" aria-hidden="true">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
              </svg>
              Google Reviews
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="https://www.facebook.com/PristineCleanSoftwashLLC/reviews/" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4 mr-2" aria-hidden="true" />
              Facebook Reviews
            </Link>
          </Button>
        </div>

        <p className="text-center mb-12 text-gray-600">
          {testimonials.length}+ Reviews 
          <span className="ml-2" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="inline w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </span>
        </p>
        <div 
          {...handlers}
          className="relative touch-pan-y"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500" aria-live="polite">
          Testimonial {currentIndex + 1} of {testimonials.length}
        </p>
      </div>
    </section>
  )
}
