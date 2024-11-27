'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/section-wrapper'
import SectionTitle from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Gallery from '@/components/Gallery/gallery-section'
import { roofCleaningImages } from '@/lib/roof-cleaning-images'
import { Home, Bug, Shield, DollarSign, Droplet, Heart } from 'lucide-react'

const roofWashingBenefits = [
  {
    title: 'Protect Your Interior',
    description: 'Cleaning your roof protects your home&apos;s interior from harsh weather conditions. It prevents moisture damage from moss and stops shingles from separating, which can lead to leaks and interior damage.',
    icon: Home,
  },
  {
    title: 'Prevent Pests',
    description: 'Moss, dirt, and algae on your roof can attract pests, leading to infestations. Cleaning these off protects your home and keeps unwelcome guests away.',
    icon: Bug,
  },
  {
    title: 'Boost Curb Appeal',
    description: 'A clean roof enhances your home&apos;s exterior appearance, attracting more buyers if you&apos;re selling and showing that the house has been well-maintained.',
    icon: Shield,
  },
  {
    title: 'Save Money',
    description: 'Regular roof cleaning prevents costly repairs and extends the lifespan of your roof. It can also lower your insurance premiums, as a well-maintained roof is seen as less of a risk.',
    icon: DollarSign,
  },
  {
    title: 'Avoid Water Damage',
    description: 'Clean roofs prevent water damage by maintaining the integrity of tiles and shingles. This protects your home from leaks, which can damage flooring, furniture, and lead to mold growth.',
    icon: Droplet,
  },
  {
    title: 'Healthier Environment',
    description: 'A clean roof protects your family from exposure to mold, creating a safer and healthier living environment for you and your loved ones.',
    icon: Heart,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function RoofWashingPage() {
  return (
    <main>
      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle 
            title="Roof Washing Services"
            subtitle="Protect and Enhance Your Home&apos;s Most Important Feature"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">Why should I wash my roof?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Your roof is one of the most important features of your home, responsible for protecting you and your family from the outdoor elements. While it has durable construction and materials to withstand weather, it requires care to maintain its integrity. Regular roof cleaning offers numerous benefits that protect your home and save you money in the long run.
              </p>
              <Button size="lg"><Link href="/contact">Schedule a Roof Cleaning</Link></Button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/roof-after.webp"
                alt="Roof Washing in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <Tabs defaultValue="benefits" className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="benefits">Benefits of Roof Washing</TabsTrigger>
              <TabsTrigger value="process">Our Roof Washing Process</TabsTrigger>
            </TabsList>
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {roofWashingBenefits.map((benefit, index) => (
                  <Card key={index} className="transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center">
                    <CardHeader className="flex flex-col items-center">
                      <benefit.icon className="w-10 h-10 mb-2 text-primary" />
                      <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="process">
              <Card>
                <CardHeader>
                  <CardTitle>Our Roof Washing Process</CardTitle>
                  <CardDescription>We follow a meticulous process to ensure the best results for your roof</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Initial roof inspection and assessment</li>
                    <li>Protection of surrounding landscaping and property</li>
                    <li>Application of eco-friendly cleaning solution</li>
                    <li>Gentle low-pressure washing to remove dirt, algae, and moss</li>
                    <li>Thorough rinsing to remove all cleaning agents</li>
                    <li>Final inspection and touch-ups</li>
                    <li>Clean-up of work area</li>
                    <li>Post-service consultation and maintenance recommendations</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SectionWrapper>

      <SectionWrapper colorScheme="secondary">
        <Gallery 
          images={roofCleaningImages}
          title="Our Roof Cleaning Projects"
          subtitle="See the transformative power of our roof washing services"
        />
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16 text-center">
          <SectionTitle 
            title="Ready to Revitalize Your Roof?"
            subtitle="Get a free quote for our professional roof washing services"
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
      </SectionWrapper>
    </main>
  )
}