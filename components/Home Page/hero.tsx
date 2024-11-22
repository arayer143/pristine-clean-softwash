'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const heroImages = [
  { src: "/pristinecleanbanner.webp", alt: "Pressure washing in action" },
  { src: "/house-beforeandafter.webp", alt: "Before and after comparison" },
  { src: "/driveway-2-beforeandafter.webp", alt: "Satisfied customer" },
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImageIndex].src}
            alt={heroImages[currentImageIndex].alt}
            fill
            className="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pristine Clean Soft Wash
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform Your Property with Our Expert Pressure Washing Services
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg px-6 py-3 bg-primary hover:bg-primary/90 text-white">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/services/all-services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-6 py-3 bg-white/10 hover:bg-white/20 text-white border-white">
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <div className="flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}