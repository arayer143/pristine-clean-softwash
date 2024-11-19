'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Home, Hexagon, Heart, Shield, ThumbsUp } from 'lucide-react'
import SectionTitle from '@/components/section-title'

const reasons = [
  {
    icon: Heart,
    title: "Family-Owned Business",
    description: "We understand the importance of creating a safe and clean environment for you and your loved ones."
  },
  {
    icon: Shield,
    title: "Meticulous Attention",
    description: "We treat your home as if it were our own, ensuring exceptional care and attention to detail."
  },
  {
    icon: ThumbsUp,
    title: "Exceeding Expectations",
    description: "We go above and beyond, providing friendly and reliable service that will leave you speechless."
  }
]

const services = [
  {
    icon: Droplet,
    title: "Soft & Pressure Wash",
    description: "Professional Soft and Pressure Washing Services for your home or business."
  },
  {
    icon: Home,
    title: "Roof Washing",
    description: "Specialized soft wash cleaning to remove algae, mold, mildew, lichen, and moss from roofing materials."
  },
  {
    icon: Hexagon,
    title: "Concrete Washing",
    description: "Revitalize the appearance of concrete surfaces by removing organics and stubborn stains."
  }
]

const WhyUsSection = () => {
  const [activeService, setActiveService] = useState(0)
  const reasonsRef = useRef(null)
  const servicesRef = useRef(null)
  const reasonsInView = useInView(reasonsRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="why-us" className="py-7 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Why Choose Pristine Clean Soft Wash?"
          subtitle="Discover the reasons why we're the preferred choice for professional cleaning services."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            ref={reasonsRef}
            initial={{ opacity: 0, x: -50 }}
            animate={reasonsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <SectionTitle 
              title="We Care About Your Home"
              as="h3"
              className="text-left mb-8"
            />
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{reason.title}</h4>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            ref={servicesRef}
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={servicesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle 
              title="Our Services"
              as="h3"
              className="mb-8"
            />
            <div className="relative h-[400px] w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: activeService === index ? 1 : 0,
                    scale: activeService === index ? 1 : 0.8,
                    zIndex: activeService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="w-full h-full flex flex-col items-center justify-center text-center">
                    <CardHeader>
                      <div className="w-full flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              {services.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`mx-1 ${activeService === index ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection