'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const beforeAfterImages = [
  { before: "/prisitne-2-beforeandafter.webp", after: "/prisitne-2-beforeandafter.webp", alt: "Before and after exterior cleaning" },
  { before: "/prisitne-3-beforeandafter.webp", after: "/prisitne-3-beforeandafter.webp", alt: "Before and after exterior cleaning" },
  { before: "/siding-beforeandafter.webp", after: "/siding-beforeandafter.webp", alt: "Before and after siding cleaning" },
  { before: "/house2-bforeandafter.webp", after: "/house2-bforeandafter.webp", alt: "Before and after house cleaning" },
]

const roofImages = [
  { before: "/roof-before.webp", after: "/roof-after.webp", alt: "Before and after roof cleaning" },
  { before: "/roof2-before.webp", after: "/roof2-after.webp", alt: "Before and after roof cleaning" },
]

const ImageCarousel = ({ images }: { images: { before: string; after: string; alt: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [view, setView] = useState<'before' | 'after'>('before')

  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence initial={false}>
          <motion.div
            key={`${currentIndex}-${view}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video"
          >
            <Image 
              src={images[currentIndex][view]} 
              alt={`${view} ${images[currentIndex].alt}`} 
              fill 
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <Tabs value={view} onValueChange={(value) => setView(value as 'before' | 'after')} className="mt-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="before">Before</TabsTrigger>
          <TabsTrigger value="after">After</TabsTrigger>
        </TabsList>
      </Tabs>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute top-1/2 left-2 transform -translate-y-1/2" 
        onClick={prevImage}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute top-1/2 right-2 transform -translate-y-1/2" 
        onClick={nextImage}
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
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
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">Exterior Cleaning</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Could your home, camp, business, parking lot, etc use an exterior cleaning?</h4>
                <p className="mb-4">We Can Help!</p>
                <p className="mb-6">We serve all areas from the North Shore, New Orleans, Baton Rouge, Lafayette, and anywhere in between! We&apos;ve got you covered!</p>
                <ImageCarousel images={beforeAfterImages} />
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">Roof Washing</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Why should you have your roof soft-washed?</h4>
                <p className="mb-4">&quot;It can double your roof&apos;s lifespan. By having your roof cleaned, you can extend its life expectancy by up to twice its remaining life.&quot;</p>
                <p className="mb-6">&quot;Keeping the roof tidy and free of dirt and debris is also a great way to improve curb appeal.&quot;</p>
                <ImageCarousel images={roofImages} />
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