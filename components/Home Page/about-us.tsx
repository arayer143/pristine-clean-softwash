'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Facebook, Instagram, Youtube, Play, Phone, Mail } from 'lucide-react'
import SectionTitle from '../section-title'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const services = [
    {
      title: "Improving curb appeal",
      description: "Pressure washing can remove years of dirt and grime buildup leaving surfaces as good as new!"
    },
    {
      title: "Protect against Damage",
      description: "Pressure washing can remove contaminants that can damage your home's siding, such as algae, mold, and mildew"
    },
    {
      title: "Improving your health",
      description: "Pressure washing can remove toxic contaminants like algae and mold, as well as airborne allergens like pollen, dust mites, and mold spores."
    }
  ]

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  const ConnectWithUs = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Connect With Us</CardTitle>
        <CardDescription className="text-center">Follow us on social media and check out our reviews</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-center space-x-4 w-full">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.facebook.com/PristineCleanSoftwashLLC" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.instagram.com/pristinecleansoftwash" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.youtube.com/@pristinecleansoftwash" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-4 w-full">
            <Button variant="default" size="sm" asChild>
              <Link href="tel:9852329914">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="mailto:Pristinecleansoftwashllc@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-12">
     <SectionTitle 
     title="Revitalizing Your Property, One Wash at a Time"
     as="h2"
     className="text-center"
     />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>See Our Work in Action</CardTitle>
            <CardDescription>Watch our video to learn more about our services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video flex">
              <ReactPlayer
                url="/pristinecleanvideo-resize.mp4"
                playing={isPlaying}
                controls
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
                light={
                  <Image
                    src="/pristinelogo-no-bg.webp"
                    alt="Thumbnail"
                    layout="fill"
                    objectFit="cover"
                  />
                }
                playIcon={
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={handlePlayClick}
                  >
                    <Play className="h-6 w-6" />
                    <span className="sr-only">Play video</span>
                  </Button>
                }
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:flex lg:flex-col">
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
            <CardDescription>Discover how we can help you</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{service.title}</AccordionTrigger>
                  <AccordionContent>
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
          <div className="hidden lg:block mt-auto">
            <ConnectWithUs />
          </div>
        </Card>

        <div className="lg:hidden col-span-full">
          <ConnectWithUs />
        </div>
      </div>
    </div>
  )
}

export default AboutUs