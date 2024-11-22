'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/section-wrapper'
import SectionTitle from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Gallery from '@/components/Gallery/gallery-section'
import { commercialImages } from '@/lib/commercial-images'
import { Building2, ClipboardCheck, Droplets, TrendingUp, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    title: 'Improve Appearance',
    description: 'Regular pressure washing removes dirt, grime, mold, and stains, making the property look clean and well-maintained. This can attract more customers and clients and create a positive first impression.',
    icon: Building2,
  },
  {
    title: 'Compliance with Regulations',
    description: 'Some local regulations and industry standards require regular cleaning and maintenance of commercial properties. Our Pressure and Soft washing service can help ensure compliance with these requirements.',
    icon: ClipboardCheck,
  },
  {
    title: 'Remove Stains',
    description: 'Regular washing can prevent minor damage from becoming major repairs. Buildup of debris like oil and mold can erode concrete surfaces and damage their integrity over time.',
    icon: Droplets,
  },
  {
    title: 'Increase Value',
    description: 'A clean and well-maintained property is often valued higher than a neglected one. Pressure washing can help maintain and even increase the property&apos;s market value.',
    icon: TrendingUp,
  },
  {
    title: 'Prevent Damage and Identify Problems Easier',
    description: 'Regular pressure washing can prevent the need for more extensive repairs and maintenance down the line. By keeping the property clean, you can avoid the buildup of harmful substances that can cause long-term damage which could save your business money!',
    icon: ShieldCheck,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function CommercialServicesPage() {
  return (
    <main>
      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle 
            title="Commercial Pressure Washing Services"
            subtitle="Revitalize Your Business&apos;s Exterior"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">Transform Your Property&apos;s Appearance</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Our professional pressure washing services enhance curb appeal, prevent damage, and ensure a safe, welcoming environment for your customers and employees. Don&apos;t let dirt, grime, and mildew diminish your property&apos;s value and appearance.
              </p>
              <Button size="lg">Schedule a Consultation</Button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/staff-photo-pristineclean-2.webp"
                alt="Commercial Pressure Washing in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <Tabs defaultValue="benefits" className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="process">Our Process</TabsTrigger>
            </TabsList>
            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {benefits.map((benefit, index) => (
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
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Our Commercial Pressure Washing Process</CardTitle>
                  <CardDescription>We follow a meticulous process to ensure the best results for your property</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal space-y-2 inline-block text-left">
                    <li>Initial property assessment and consultation</li>
                    <li>Customized cleaning plan development</li>
                    <li>Pre-treatment of stubborn stains and high-traffic areas</li>
                    <li>Careful pressure washing with appropriate techniques</li>
                    <li>Eco-friendly detergent application when necessary</li>
                    <li>Thorough rinsing and wastewater management</li>
                    <li>Final inspection and touch-ups</li>
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
          images={commercialImages}
          title="Our Commercial Cleaning Projects"
          subtitle="See the difference our services make"
        />
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16 text-center">
          <SectionTitle 
            title="Ready to Transform Your Commercial Property?"
            subtitle="Get a free quote for our professional pressure washing services"
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