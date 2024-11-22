'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player/lazy'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Youtube, Play, Star } from 'lucide-react'
import SectionTitle from '../section-title'

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

        <Card>
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
            <CardDescription>Discover how we can help you</CardDescription>
          </CardHeader>
          <CardContent>
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
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Connect With Us</CardTitle>
            <CardDescription>Follow us on social media and check out our reviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-6">
              <div className="grid grid-cols-3 gap-4 w-full">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://www.facebook.com/PristineCleanSoftwashLLC" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://www.instagram.com/pristinecleansoftwash" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://www.youtube.com/@pristinecleansoftwash" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-4 w-4 mr-2" />
                    YouTube
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center space-x-4">
                <Link href="https://www.google.com/maps/place/Pristine+Clean+Softwash,+LLC/@29.619036,-90.7294213,13.25z/data=!4m8!3m7!1s0x3ce2d718785aa69:0x353ce7095f70135!8m2!3d29.6300359!4d-90.7373839!9m1!1b1!16s%2Fg%2F11q3cykxpd?entry=ttu" target="_blank" rel="noopener noreferrer">
                  <Badge variant="secondary" className="text-s">
                    <Star className="h-3 w-3 mr-1" /> Google Reviews
                  </Badge>
                </Link>
                <Link href="https://www.facebook.com/PristineCleanSoftwashLLC/reviews/" target="_blank" rel="noopener noreferrer">
                  <Badge variant="secondary" className="text-s">
                    <Star className="h-3 w-3 mr-1" /> Facebook Reviews
                  </Badge>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AboutUs