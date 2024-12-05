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
import { oxidationRemovalImages } from '@/lib/oxidation-removal-images'
import { Shield, Sparkles, Home, DollarSign, ThumbsUp } from 'lucide-react'

const oxidationRemovalBenefits = [
  {
    title: 'Protect Your Property',
    description: 'Oxidation removal helps protect your property from further damage caused by the oxidation process, extending the life of your siding or other surfaces.',
    icon: Shield,
  },
  {
    title: 'Restore Appearance',
    description: 'Our oxidation removal service can restore the original color and shine of your siding, making your property look new again.',
    icon: Sparkles,
  },
  {
    title: 'Increase Property Value',
    description: 'By removing oxidation, you can significantly improve your property&apos;s curb appeal, potentially increasing its market value.',
    icon: Home,
  },
  {
    title: 'Cost-Effective Solution',
    description: 'Oxidation removal is a cost-effective alternative to replacing your siding or repainting your entire property.',
    icon: DollarSign,
  },
  {
    title: 'Improve Overall Cleanliness',
    description: 'Removing oxidation not only improves appearance but also contributes to the overall cleanliness and hygiene of your property.',
    icon: ThumbsUp,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function OxidationRemovalPage() {
  return (
    <main>
      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle 
            title="Oxidation Removal Services"
            subtitle="Stop the Oxidation Process on Your Property Today!"
             as="h1"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">Why Remove Oxidation?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Oxidation can significantly degrade the appearance and integrity of your property&apos;s surfaces. Our professional oxidation removal services can restore your property&apos;s look, protect it from further damage, and save you money in the long run.
              </p>
              <Button size="lg"><Link href="/contact">Schedule Oxidation Removal</Link></Button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/oxidation-3.webp"
                alt="Oxidation Removal in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <Tabs defaultValue="benefits" className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="benefits">Benefits of Oxidation Removal</TabsTrigger>
              <TabsTrigger value="process">Our Oxidation Removal Process</TabsTrigger>
            </TabsList>
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {oxidationRemovalBenefits.map((benefit, index) => (
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
                  <CardTitle>Our Oxidation Removal Process</CardTitle>
                  <CardDescription>We follow a meticulous process to ensure the best results for your property</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Initial property inspection and assessment of oxidation levels</li>
                    <li>Protection of surrounding areas and landscaping</li>
                    <li>Application of specialized oxidation removal solution</li>
                    <li>Gentle scrubbing or pressure washing as needed</li>
                    <li>Thorough rinsing to remove all cleaning agents and residue</li>
                    <li>Application of protective sealant (if required)</li>
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
          images={oxidationRemovalImages}
          title="Our Oxidation Removal Projects"
          subtitle="See the transformative power of our oxidation removal services"
        />
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16 text-center">
          <SectionTitle 
            title="Ready to Restore Your Property?"
            subtitle="Get a free quote for our professional oxidation removal services"
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