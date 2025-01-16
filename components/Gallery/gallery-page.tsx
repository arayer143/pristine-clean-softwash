'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SectionWrapper from '@/components/section-wrapper'
import SectionTitle from '@/components/section-title'
import { galleryPageImages, galleryPageVideos, GalleryImage, GalleryVideo } from '@/lib/gallery-page'

type GalleryItem = GalleryImage | GalleryVideo

type TabValue = 'all' | 'before-after' | 'commercial' | 'residential' | 'concrete' | 'roof' | 'gutter' | 'fleet' | 'oxidation' | 'video'

const allGalleryItems: GalleryItem[] = [
  ...galleryPageImages,

]

const videoThumbnails: GalleryImage[] = galleryPageVideos.map(video => ({
  src: '/pristinelogo-no-bg.jpg', // Replace with an actual video thumbnail
  alt: video.title,
  category: video.category
}))

export default function GalleryPage() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('all')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredItems = useMemo(() => {
    if (selectedTab === 'all') return [...allGalleryItems, ...videoThumbnails]
    if (selectedTab === 'before-after') return allGalleryItems.filter(item => 'src' in item && item.src.toLowerCase().includes('beforeandafter'))
    if (selectedTab === 'video') return videoThumbnails
    return allGalleryItems.filter(item => item.category?.toLowerCase().includes(selectedTab))
  }, [selectedTab])

  const handleTabChange = (value: string) => {
    setSelectedTab(value as TabValue)
    setSelectedIndex(null)
  }

  const handlePrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length)
  }

  const handleNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % filteredItems.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'Escape') setSelectedIndex(null)
  }

  return (
    <SectionWrapper colorScheme="primary">
      <div className="container mx-auto px-4 py-16">
        <SectionTitle 
          title="Our Gallery"
          subtitle="Explore our portfolio of successful cleaning projects"
           as="h1"
        />

        <Tabs defaultValue="all" className="w-full mt-8" onValueChange={handleTabChange}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="before-after">Before & After</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="concrete">Concrete</TabsTrigger>
            <TabsTrigger value="roof">Roof</TabsTrigger>
            <TabsTrigger value="gutter">Gutter</TabsTrigger>
            <TabsTrigger value="fleet">Fleet</TabsTrigger>
            <TabsTrigger value="oxidation">Oxidation</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="mt-0">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.src}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div 
                      className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => setSelectedIndex(index)}
                    >
                      <Image
                        src={item.src}
                        alt={'alt' in item ? item.alt : item.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>

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
                {selectedIndex !== null && (
                  'title' in filteredItems[selectedIndex] ? (
                    <video src={filteredItems[selectedIndex].src} controls className="max-w-full max-h-full" />
                  ) : (
                    <Image
                      src={filteredItems[selectedIndex].src}
                      alt={(filteredItems[selectedIndex] as GalleryImage).alt}
                      fill
                      className="object-contain"
                    />
                  )
                )}
                <Button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-75 transition-all duration-200"
                  onClick={handlePrevious}
                  size="lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8 text-black" />
                </Button>
                <Button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-75 transition-all duration-200"
                  onClick={handleNext}
                  size="lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8 text-black" />
                </Button>
                <Button
                  className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-200"
                  onClick={() => setSelectedIndex(null)}
                  size="icon"
                  aria-label="Close gallery"
                >
                  <X className="h-6 w-6 text-black" />
                </Button>
                {selectedIndex !== null && (
                  <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                    {'title' in filteredItems[selectedIndex] 
                      ? (filteredItems[selectedIndex] as GalleryVideo).title 
                      : (filteredItems[selectedIndex] as GalleryImage).alt
                    }
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    
      <SectionWrapper colorScheme="secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <SectionTitle 
              title="Ready to Transform Your Property?" 
              subtitle="Schedule your cleaning service today"
            />
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg"><Link href="/contact">Get a Free Quote</Link></Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
      </SectionWrapper>

    
  )
}