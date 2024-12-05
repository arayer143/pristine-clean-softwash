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
import { gutterCleaningImages } from '@/lib/gutter-cleaning-images'
import { Home, Shield, Bug, DollarSign, Droplet } from 'lucide-react'

const gutterCleaningBenefits = [
  {
    title: 'Prevent Water Damage to your Home',
    description: 'Clogged gutters and downspouts can push water through the roofing structure. This process is aided by another problem that occurs when your gutters haven&apos;t been maintained—ice dams.',
    icon: Home,
  },
  {
    title: 'Reduce the Risk of Cracked Foundation',
    description: 'Proper gutter cleaning prevents water from overflowing and pooling around your home&apos;s foundation, reducing the risk of cracks and structural damage.',
    icon: Shield,
  },
  {
    title: 'Ward Off Pests',
    description: 'Clean gutters eliminate standing water and debris that can attract pests like mosquitoes, rodents, and other insects, protecting your home from infestations.',
    icon: Bug,
  },
  {
    title: 'Save Money in the Long Run',
    description: 'Regular gutter cleaning prevents costly repairs related to water damage, foundation issues, and pest infestations, saving you money over time.',
    icon: DollarSign,
  },
  {
    title: 'Extend Gutter Lifespan',
    description: 'Clean, well-maintained gutters last longer, reducing the need for premature replacement and saving you money on home maintenance.',
    icon: Droplet,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function GutterCleaningPage() {
  return (
    <main>
      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle 
            title="Gutter Cleaning Services"
            subtitle="Protect Your Home from Water Damage"
             as="h1"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">Why do I need to have my Gutters Cleaned?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Cleaning gutters can prevent water damage to your home, extend the lifespan of your gutters, protect your foundation, prevent pest infestations, maintain curb appeal, save money in the long run, maintain safety for your home, and increase the value of your home.
              </p>
              <Button size="lg"><Link href="/contact">Schedule Gutter Cleaning</Link></Button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/gutter-3-beforeandafter.webp"
                alt="Gutter Cleaning in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <Tabs defaultValue="benefits" className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="benefits">Benefits of Gutter Cleaning</TabsTrigger>
              <TabsTrigger value="process">Our Gutter Cleaning Process</TabsTrigger>
            </TabsList>
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {gutterCleaningBenefits.map((benefit, index) => (
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
                  <CardTitle>Our Gutter Cleaning Process</CardTitle>
                  <CardDescription>We follow a meticulous process to ensure your gutters are thoroughly cleaned and functioning properly</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Initial inspection of gutters and downspouts</li>
                    <li>Remove large debris by hand</li>
                    <li>Use specialized tools to clear out smaller debris</li>
                    <li>Flush gutters with water to ensure proper flow</li>
                    <li>Check and clear downspouts</li>
                    <li>Inspect for any damage or potential issues</li>
                    <li>Clean up all debris from the ground</li>
                    <li>Final inspection and flow test</li>
                    <li>Provide recommendations for maintenance or repairs if needed</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SectionWrapper>

      <SectionWrapper colorScheme="secondary">
        <Gallery 
          images={gutterCleaningImages}
          title="Our Gutter Cleaning Projects"
          subtitle="See the difference our gutter cleaning services make"
        />
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16 text-center">
          <SectionTitle 
            title="Ready to Protect Your Home?"
            subtitle="Get a free quote for our professional gutter cleaning services"
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