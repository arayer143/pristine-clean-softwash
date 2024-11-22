'use client'

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { testimonials, Testimonial } from '@/lib/testimonials'
import { Star, Facebook, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <Card className="w-full max-w-2xl mx-auto bg-primary/5 shadow-lg">
    <CardContent className="p-6 relative">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-primary">{testimonial.name}</h3>
        {testimonial.source === 'facebook' ? (
          <Facebook className="w-6 h-6 text-blue-600" />
        ) : (
          <img src="/google-logo.png" alt="Google" className="w-6 h-6" />
        )}
      </div>
      <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
    </CardContent>
  </Card>
)

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">What our Customers are Saying</h2>
        <p className="text-center mb-12 text-gray-600">
          {testimonials.length}+ Reviews 
          <span className="ml-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="inline w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </span>
        </p>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
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
        <p className="text-center mt-4 text-sm text-gray-500">
          {currentIndex + 1} of {testimonials.length}
        </p>
      </div>
    </section>
  )
}
