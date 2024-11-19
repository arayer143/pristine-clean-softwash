'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import SectionWrapper from '@/components/section-wrapper'
import SectionTitle from '@/components/section-title'
import { GalleryImage } from '@/lib/gallery-section'

interface GalleryProps {
  images: GalleryImage[]
  title?: string
  subtitle?: string
  colorScheme?: 'primary' | 'secondary'
}

export default function Gallery({ images, title, subtitle, colorScheme = 'primary' }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <SectionWrapper colorScheme={colorScheme}>
      <div className="container mx-auto px-4 py-8">
        {title && <SectionTitle title={title} subtitle={subtitle} className="mb-8" />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Dialog key={index} open={selectedImage === image} onOpenChange={(open) => !open && setSelectedImage(null)}>
              <DialogTrigger asChild>
                <Card 
                  className="overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
                  onClick={() => setSelectedImage(image)}
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
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full">
                {selectedImage && (
                  <>
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                    {selectedImage.category && (
                      <p className="mt-2 text-sm text-muted-foreground">{selectedImage.category}</p>
                    )}
                  </>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}