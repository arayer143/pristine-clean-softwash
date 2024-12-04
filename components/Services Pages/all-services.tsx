'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import SectionWrapper from '@/components/section-wrapper'
import SectionTitle from '@/components/section-title'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const services = [
  {
    title: 'Residential Soft Washing',
    description: 'Gentle yet effective cleaning for your home\'s exterior surfaces.',
    icon: '🏠',
  },
  {
    title: 'Commercial Pressure Washing',
    description: 'Maintain a professional appearance for your business premises.',
    icon: '🏢',
  },
  {
    title: 'Roof Cleaning',
    description: 'Remove unsightly algae and extend the life of your roof.',
    icon: '🏠',
  },
  {
    title: 'Gutter Cleaning',
    description: 'Ensure proper water drainage and prevent damage to your property.',
    icon: '🌧️',
  },
  {
    title: 'Deck & Fence Restoration',
    description: 'Revitalize your outdoor living spaces and wooden structures.',
    icon: '🏡',
  },
  {
    title: 'Concrete Cleaning',
    description: 'Restore the appearance of driveways, sidewalks, and patios.',
    icon: '🛣️',
  },
]

const benefits = [
  {
    title: 'Extends the life of your property',
    description: 'Regular cleaning prevents long-term damage from dirt, grime, and organic growth. By removing these harmful substances, you\'re protecting your property\'s surfaces and materials, ultimately extending their lifespan and saving you money on premature replacements or repairs.'
  },
  {
    title: 'Improves curb appeal',
    description: 'A clean exterior instantly boosts your property\'s visual appeal and makes a great first impression. Whether you\'re looking to sell your home or simply want to be the envy of the neighborhood, professional cleaning can dramatically enhance your property\'s appearance, making it stand out in the best way possible.'
  },
  {
    title: 'Healthier living environment',
    description: 'Removes allergens, mold, and mildew, contributing to better air quality around your property. This is especially important for those with respiratory issues or allergies. A cleaner exterior means fewer pollutants making their way inside your home, creating a healthier living space for you and your family.'
  },
  {
    title: 'Prevents costly repairs',
    description: 'Identifying and addressing issues early can save you from expensive repairs down the line. During the cleaning process, our professionals can spot potential problems like wood rot, paint deterioration, or structural issues that might otherwise go unnoticed. Catching these early allows for timely interventions, potentially saving you thousands in major repairs.'
  },
  {
    title: 'Increases property value',
    description: 'Well-maintained properties typically have higher market values and are more attractive to potential buyers. If you\'re considering selling your property, professional cleaning can be a cost-effective way to increase its value. A clean, well-maintained exterior suggests to buyers that the property has been cared for, potentially leading to higher offers and quicker sales.'
  },
  {
    title: 'Saves time and effort',
    description: 'Professional cleaning is more efficient and effective than DIY methods, saving you valuable time and energy. Our team has the right tools, techniques, and experience to clean your property thoroughly and safely in a fraction of the time it would take to do it yourself. This leaves you free to focus on other important tasks or simply enjoy your sparkling clean property.'
  },
]

const reasons = [
  {
    title: 'Experienced and certified technicians',
    description: 'Our team undergoes rigorous training and stays updated with the latest industry standards.',
    icon: '👨‍🔧'
  },
  {
    title: 'Eco-friendly cleaning solutions',
    description: 'We use environmentally responsible products that are tough on dirt but gentle on your property and the planet.',
    icon: '🌿'
  },
  {
    title: 'State-of-the-art equipment',
    description: 'Our advanced tools ensure efficient and effective cleaning for all types of surfaces.',
    icon: '🔧'
  },
  {
    title: 'Customized cleaning plans',
    description: 'We tailor our services to meet the unique needs of your property, ensuring optimal results.',
    icon: '📋'
  },
  {
    title: 'Fully insured and bonded',
    description: 'Your property is protected. We carry comprehensive insurance for your peace of mind.',
    icon: '🛡️'
  },
  {
    title: 'Satisfaction guaranteed',
    description: 'We\'re not happy unless you\'re happy. We stand behind the quality of our work.',
    icon: '🤝'
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function AllServicesPage() {
  return (
    <div className="space-y-16 py-16">
      <SectionWrapper colorScheme="primary">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive cleaning solutions for your property"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-card text-card-foreground rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper colorScheme="secondary">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <SectionTitle 
            title="Benefits of Professional Cleaning" 
            subtitle="Why regular maintenance is crucial for your property"
          />
          <Accordion type="single" collapsible className="w-full max-w-2xl mt-8">
            {benefits.map((benefit, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />
                    <span className="font-semibold">{benefit.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-9">{benefit.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Why Choose Pristine Clean Soft Wash?" 
            subtitle="Experience the difference with our expert services"
          />
          <Carousel className="w-full mt-8">
            <CarouselContent>
              {reasons.map((reason, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <span className="text-3xl">{reason.icon}</span>
                          {reason.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{reason.description}</CardDescription>
                      </CardContent>
                 
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </SectionWrapper>

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
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
