'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/section-wrapper'
import SectionTitle from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Gallery from '@/components/Gallery/gallery-section'
import { residentialImages } from '@/lib/residential-images'
import { concreteCleaningImages } from '@/lib/concrete-cleaning-images'
import { Home, ClipboardCheck, Heart, Droplet, ShieldCheck, Paintbrush, DollarSign } from 'lucide-react'

const softWashBenefits = [
  {
    title: 'Prevents Damage',
    description: 'Soft washing uses low pressure to gently clean surfaces and prevent damage from organic growths like mold, mildew, and algae. These harmful substances can cause long-term damage to your property, including rot, decay, and discoloration.',
    icon: Home,
  },
  {
    title: 'Broadened lifespan',
    description: 'Stained or painted wood siding is always more porous and requires more attention. Soft washing wood every 1 to 2 years thoroughly can help the longevity of the stain or paint.',
    icon: ClipboardCheck,
  },
  {
    title: 'Healthier environments',
    description: 'Soft washing uses eco-friendly chemicals and a gentle stream of water to kill microorganisms at the root and inhibit future growth.',
    icon: Heart,
  },
]

const pressureWashBenefits = [
  {
    title: 'Prevent Water Damage to your Home',
    description: 'Clogged gutters and downspouts can also push water, with nowhere else to go, through the roofing structure. This process is aided by another problem that occurs when your gutters haven&apos;t been maintained—ice dams.',
    icon: Droplet,
  },
  {
    title: 'Safety',
    description: 'Pressure washing can remove slippery substances like algae, oil, and grease, which can reduce the risk of falls. It can also help prevent cracks from forming in driveways, which can be a safety hazard.',
    icon: ShieldCheck,
  },
  {
    title: 'Prime Surfaces',
    description: 'Power washing is a great way to prime a surface for an additional project. When you intend to have the exterior of your home repainted, it will be incredibly important to obtain a power washing service.',
    icon: Paintbrush,
  },
  {
    title: 'Save Money',
    description: 'Over time, grime builds up on the roof and sides of your building. They fence in moisture on the walls, causing growth of mildew and mold. A regularly scheduled pressure washing service can prevent rot and disintegration of your property which will save you expensive repairs.',
    icon: DollarSign,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function SoftAndPressureWashPage() {
  return (
    <main>
      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle 
            title="Soft and Pressure Washing Services"
            subtitle="Revitalize Your Property&apos;s Exterior"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-4">When should you soft wash your home or business?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Since soft washing is safe and less damaging than pressure washing, you can do it anytime you feel your house is dirty! But a good rule of thumb is every 2 to 3 years.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                With the soft wash system, a house with vinyl or aluminum siding can remain clean for a minimum of three years.
              </p>
              <Button size="lg">Schedule a Consultation</Button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Image
                src="/house2-bforeandafter.webp"
                alt="Soft Washing in Action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <Tabs defaultValue="softwash" className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="softwash">Soft Wash Benefits</TabsTrigger>
              <TabsTrigger value="pressurewash">Pressure Wash Benefits</TabsTrigger>
            </TabsList>
            <TabsContent value="softwash">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {softWashBenefits.map((benefit, index) => (
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
            <TabsContent value="pressurewash">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {pressureWashBenefits.map((benefit, index) => (
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
          </Tabs>
        </div>
      </SectionWrapper>

      <SectionWrapper colorScheme="secondary">
        <Gallery 
          images={[...residentialImages, ...concreteCleaningImages]}
          title="Our Soft and Pressure Washing Projects"
          subtitle="See the difference our services make"
        />
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
        <div className="container mx-auto px-4 py-16 text-center">
          <SectionTitle 
            title="Ready to Transform Your Property?"
            subtitle="Get a free quote for our professional soft and pressure washing services"
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