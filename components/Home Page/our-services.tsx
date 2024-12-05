'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Home, Hexagon, Truck } from 'lucide-react'

const services = [
  { 
    title: "Soft and Pressure Washing", 
    icon: Droplet, 
    href: "/services/soft-and-pressure-washing",
    description: "Gentle yet effective cleaning for delicate surfaces and tough stains alike."
  },
  { 
    title: "Commercial Property Washing", 
    icon: Home, 
    href: "/services/commercial-properties",
    description: "Maintain a professional appearance with our specialized commercial cleaning services."
  },
  { 
    title: "Roof Washing", 
    icon: Home, 
    href: "/services/roof-washing",
    description: "Remove unsightly algae and extend the life of your roof with our safe cleaning techniques."
  },
  { 
    title: "Concrete Washing", 
    icon: Hexagon, 
    href: "/services/concrete-washing",
    description: "Restore the look of your driveways, sidewalks, and patios with our powerful concrete cleaning."
  },
  { 
    title: "Gutter Cleaning & Brightening", 
    icon: Home, 
    href: "/services/gutter-cleaning",
    description: "Ensure proper water drainage and enhance your home's appearance with clean, bright gutters."
  },
  { 
    title: "Deck Washing & Restoration", 
    icon: Hexagon, 
    href: "/services/soft-and-pressure-washing",
    description: "Revitalize your outdoor living spaces with our thorough deck cleaning and restoration services."
  },
  { 
    title: "Oxidation Removal", 
    icon: Droplet, 
    href: "/services/oxidation-removal",
    description: "Eliminate stubborn oxidation stains from various surfaces to restore their original luster."
  },
  { 
    title: "Fleet Washing", 
    icon: Truck, 
    href: "/services/fleet-cleaning",
    description: "Keep your commercial vehicles clean and professional with our efficient fleet washing service."
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          We offer a wide range of pressure washing and soft washing services, including house washing, roof cleaning, concrete cleaning, and more. 
          Whatever your needs, we have you covered.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card 
              className="h-full w-full transition-all duration-300 flex flex-col items-center text-center overflow-hidden group"
            >
              <CardHeader className="w-full border-b relative overflow-hidden p-4 flex-grow flex flex-col justify-center">
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto bg-primary/10"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotateY: hoveredIndex === index ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
                </motion.div>
                <CardTitle className="relative z-10 mb-2">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </CardHeader>
              <CardContent className="w-full p-4">
                <Button asChild variant="outline" className="w-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link href={`${service.href}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}