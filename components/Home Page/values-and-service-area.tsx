'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const beforeAfterImages = [
  { image: "/prisitne-2-beforeandafter.webp", alt: "Before and after exterior cleaning" },
  { image: "/prisitne-3-beforeandafter.webp", alt: "Before and after exterior cleaning" },
  { image: "/siding-beforeandafter.webp", alt: "Before and after siding cleaning" },
  { image: "/house2-bforeandafter.webp", alt: "Before and after house cleaning" },
]

const roofImages = [
  { image: "/roof-before.webp", alt: "Before and after roof cleaning" },
  { image: "/roof2-before.webp", alt: "Before and after roof cleaning" },
]

interface ImageGalleryProps {
  images: { image: string; alt: string }[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image 
          src={images[selectedIndex].image} 
          alt={images[selectedIndex].alt} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <Button
            key={image.image}
            variant={selectedIndex === index ? "default" : "outline"}
            size="sm"
            className="p-1 h-auto"
            onClick={() => setSelectedIndex(index)}
          >
            <Image 
              src={image.image} 
              alt={`Thumbnail ${index + 1}`} 
              width={60} 
              height={60} 
              className="rounded-sm object-cover"
            />
            <span className="sr-only">
              {selectedIndex === index ? `Current image: ${image.alt}` : `View image: ${image.alt}`}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default function ValuesAndServiceArea() {
  return (
    <>
      <section id="values" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">Exterior Cleaning</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-semibold">Could your home, camp, business, parking lot, etc use an exterior cleaning?</h4>
                <p>We Can Help!</p>
                <p>We serve all areas from the North Shore, New Orleans, Baton Rouge, Lafayette, and anywhere in between! We&apos;ve got you covered!</p>
                <ImageGallery images={beforeAfterImages} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">Roof Washing</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-semibold">Why should you have your roof soft-washed?</h4>
                <p>&quot;It can double your roof&apos;s lifespan. By having your roof cleaned, you can extend its life expectancy by up to twice its remaining life.&quot;</p>
                <p>&quot;Keeping the roof tidy and free of dirt and debris is also a great way to improve curb appeal.&quot;</p>
                <ImageGallery images={roofImages} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="service-area" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Service Area
            </motion.h2>
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Proudly Serving your Home or Business, No Matter how Far!
            </motion.h3>
            <motion.p 
              className="mb-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Your happiness is our fuel for success! Whether you&apos;re in New Orleans, Baton Rouge, The North Shore, Lafayette, or Mississippi, we&apos;ve got you covered! Our dedicated team is ready to travel far and wide to bring the transformative power of soft washing to your doorstep. No distance is too great when it comes to delivering a pristine clean!
            </motion.p>
            <motion.p
              className="font-semibold text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Providing you peace of mind - fully licensed and insured!
            </motion.p>
          </div>
        </div>
      </section>
    </>
  )
}