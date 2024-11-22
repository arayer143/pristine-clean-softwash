
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/section-wrapper'
import SectionTitle from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Gallery from '@/components/Gallery/gallery-section'
import { fleetWashingImages } from '@/lib/fleet-washing-images'
import { Truck, Sparkles, DollarSign, Shield, Clock, Recycle } from 'lucide-react'

const fleetWashingBenefits = [
  {
    title: 'Maintain Professional Appearance',
    description: 'Regular fleet washing keeps your vehicles looking clean and professional, enhancing your company&apos;s image on the road.',
    icon: Truck,
  },
  {
    title: 'Extend Vehicle Lifespan',
    description: 'Removing dirt, grime, and corrosive substances helps protect your vehicles&apos; exteriors, potentially extending their operational life.',
    icon: Sparkles,
  },
  {
    title: 'Reduce Maintenance Costs',
    description: 'Clean vehicles are easier to inspect for damage or wear, allowing for early detection of issues and potentially reducing long-term maintenance costs.',
    icon: DollarSign,
  },
  {
    title: 'Improve Safety',
    description: 'Clean windows, mirrors, and lights improve visibility and safety for your drivers and others on the road.',
    icon: Shield,
  },
  {
    title: 'Increase Efficiency',
    description: 'Clean vehicles can be more aerodynamic, potentially improving fuel efficiency and reducing operating costs.',
    icon: Clock,
  },
  {
    title: 'Eco-Friendly Cleaning',
    description: 'Our fleet washing services use environmentally friendly cleaning products and water-saving techniques to minimize environmental impact.',
    icon: Recycle,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function FleetWashingPage() {
  return (
    <main>
      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle 
            title="Fleet Washing Services"
            subtitle="Let Pristine Clean wash your Fleet Today!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Fleet Washing Service?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Our professional fleet washing service ensures your vehicles always look their best, 
                represent your brand effectively, and stay in top condition. We use advanced cleaning 
                techniques and eco-friendly products to deliver outstanding results every time.
              </p>
              <Button size="lg">Schedule Fleet Washing</Button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/fleet-washing.webp"
                alt="Fleet Washing in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <Tabs defaultValue="benefits" className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="benefits">Benefits of Fleet Washing</TabsTrigger>
              <TabsTrigger value="process">Our Fleet Washing Process</TabsTrigger>
            </TabsList>
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {fleetWashingBenefits.map((benefit, index) => (
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
                  <CardTitle>Our Fleet Washing Process</CardTitle>
                  <CardDescription>We follow a meticulous process to ensure your fleet vehicles are thoroughly cleaned and protected</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Initial inspection of each vehicle</li>
                    <li>Pre-rinse to remove loose dirt and debris</li>
                    <li>Application of specialized cleaning agents</li>
                    <li>Hand washing of difficult areas</li>
                    <li>High-pressure rinse</li>
                    <li>Wheel and tire cleaning</li>
                    <li>Application of protective wax (if requested)</li>
                    <li>Window and mirror cleaning</li>
                    <li>Final inspection and touch-ups</li>
                    <li>Dry and polish for a streak-free finish</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SectionWrapper>

      <SectionWrapper colorScheme="secondary">
        <Gallery 
          images={fleetWashingImages}
          title="Our Fleet Washing Projects"
          subtitle="See the difference our fleet washing services make"
        />
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">Customized Fleet Washing Solutions</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                We understand that every fleet is unique. That&apos;s why we offer customized washing solutions 
                tailored to your specific needs. Whether you have a small fleet of company cars or a large 
                fleet of trucks, we have the expertise and equipment to keep them all in pristine condition.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Flexible scheduling to minimize downtime</li>
                <li>On-site services available for large fleets</li>
                <li>Specialized cleaning for different vehicle types</li>
                <li>Eco-friendly and water-saving techniques</li>
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Customized Fleet Washing Solutions"
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
            title="Ready to Revitalize Your Fleet?"
            subtitle="Get a free quote for our professional fleet washing services"
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