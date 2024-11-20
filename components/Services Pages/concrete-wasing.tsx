'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/section-wrapper'
import SectionTitle from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Gallery from '@/components/Gallery/gallery-section'
import { concreteCleaningImages } from '@/lib/concrete-cleaning-images'
import { Home, Heart, Bug, TrendingUp, ArrowUpCircle, Search } from 'lucide-react'

const concreteWashingBenefits = [
  {
    title: 'Improve Appearance',
    description: 'Concrete can become filled with dirt, mold, algae, plant stains, tire marks, oil, and liquids, which can make it look less appealing. Washing concrete can help it look fresh and make a better first impression.',
    icon: Home,
  },
  {
    title: 'Improve Safety Measures',
    description: 'Buildup of contaminants like mold and algae can make concrete slippery and unsafe. Weeds can also grow in concrete and create tripping hazards. Washing concrete regularly can remove these potential issues making your concrete safer for those who use it.',
    icon: Heart,
  },
  {
    title: 'Remove Stains',
    description: 'Regular washing can prevent minor damage from becoming major repairs. Buildup of debris like oil and mold can erode concrete surfaces and damage their integrity over time.',
    icon: Bug,
  },
  {
    title: 'Increase Value',
    description: 'If you&apos;re planning to sell your Home or Business, washing it can help increase its value. Prospective buyers may assume a home is in poor condition if it&apos;s covered in dirt.',
    icon: TrendingUp,
  },
  {
    title: 'Improve Durability',
    description: 'Washing concrete regularly can help it last longer.',
    icon: ArrowUpCircle,
  },
  {
    title: 'Identifying a Problem',
    description: 'Clean concrete can help identify a problem sooner.',
    icon: Search,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ConcreteWashingPage() {
  return (
    <main>
      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle 
            title="Concrete Pressure Washing Services"
            subtitle="Revitalize Your Concrete Surfaces"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">Why Should I Wash my Driveway, Sidewalk, Patio or Deck?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Soft washing and pressure washing are both methods that use adjusted water pressure to remove dirt and stains from surfaces without causing damage. Soft washing is generally better for softer surfaces, while pressure washing is better for removing more stubborn stains from concrete surfaces.
              </p>
              <Button size="lg">Schedule Concrete Washing</Button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Concrete Pressure Washing in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <Tabs defaultValue="benefits" className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="benefits">Benefits of Concrete Washing</TabsTrigger>
              <TabsTrigger value="process">Our Concrete Washing Process</TabsTrigger>
            </TabsList>
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {concreteWashingBenefits.map((benefit, index) => (
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
                  <CardTitle>Our Concrete Washing Process</CardTitle>
                  <CardDescription>We follow a meticulous process to ensure your concrete surfaces are thoroughly cleaned and protected</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Initial inspection of the concrete surface</li>
                    <li>Pre-treatment of heavily soiled areas or stubborn stains</li>
                    <li>Application of specialized concrete cleaning solution</li>
                    <li>High-pressure washing with appropriate nozzle and pressure settings</li>
                    <li>Detailed cleaning of edges and corners</li>
                    <li>Post-wash inspection and spot treatment if necessary</li>
                    <li>Application of sealant (optional, upon request)</li>
                    <li>Final rinse and clean-up</li>
                    <li>Post-service walkthrough and customer satisfaction check</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SectionWrapper>

      <SectionWrapper colorScheme="secondary">
        <Gallery 
          images={concreteCleaningImages}
          title="Our Concrete Washing Projects"
          subtitle="See the transformative power of our concrete washing services"
        />
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">Customized Concrete Washing Solutions</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                We understand that every concrete surface is unique and may require different cleaning approaches. Our team is equipped with the knowledge and tools to handle various types of concrete surfaces and stains.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Driveways and parking lots</li>
                <li>Sidewalks and walkways</li>
                <li>Patios and pool decks</li>
                <li>Commercial concrete surfaces</li>
                <li>Stamped and decorative concrete</li>
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Customized Concrete Washing Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper colorScheme="secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <SectionTitle 
            title="Ready to Revitalize Your Concrete Surfaces?"
            subtitle="Get a free quote for our professional concrete washing services"
          />
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg">Get a Free Quote</Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  )
}