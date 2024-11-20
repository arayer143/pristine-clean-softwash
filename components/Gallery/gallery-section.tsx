'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SectionTitle from '@/components/section-title'
import { GalleryImage } from '@/lib/gallery-section'

interface GalleryProps {
  images: GalleryImage[]
  title?: string
  subtitle?: string
  colorScheme?: 'primary' | 'secondary'
}

export default function Gallery({ images, title, subtitle, colorScheme = 'primary' }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'Escape') setSelectedIndex(null)
  }

  return (
    <div className={`container mx-auto px-4 py-8 ${colorScheme === 'secondary' ? 'bg-secondary text-secondary-foreground' : ''}`}>
      {title && <SectionTitle title={title} subtitle={subtitle} className="mb-8" />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card 
            key={index}
            className="overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => setSelectedIndex(index)}
          >
            <CardContent className="p-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
              />
              <Button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-200"
                onClick={handlePrevious}
                size="icon"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-black" />
              </Button>
              <Button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-200"
                onClick={handleNext}
                size="icon"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-black" />
              </Button>
              <Button
                className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-200"
                onClick={() => setSelectedIndex(null)}
                size="icon"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6 text-black" />
              </Button>
              {images[selectedIndex].category && (
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                  {images[selectedIndex].category}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}