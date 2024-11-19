import { Metadata } from 'next'

import { Footer } from '@/components/Footer/footer'
import { HeroSection } from '@/components/Home Page/hero'
import Navbar from '@/components/Navbar/navbar'
import AboutSection from '@/components/Home Page/about-us'
import ServicesSection from '@/components/Home Page/our-services'

import SectionWrapper from '@/components/section-wrapper'
import WhyUsSection from '@/components/Home Page/why-us-section'


export const metadata: Metadata = {
  title: 'Pristine Clean Soft Wash | Professional Pressure Washing Services',
  description: 'Pristine Clean Soft Wash offers top-quality pressure washing services for residential and commercial properties. Transform your exteriors today!',
  keywords: 'pressure washing, soft wash, roof cleaning, gutter cleaning, concrete cleaning, commercial cleaning',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

    <HeroSection />

    <SectionWrapper colorScheme="primary">
        <AboutSection />
      </SectionWrapper>


      <SectionWrapper colorScheme="secondary">
      <ServicesSection />
      </SectionWrapper>


          <SectionWrapper colorScheme="primary">
            <WhyUsSection />
          </SectionWrapper>
   

      </main>
      <Footer />
    </div>
  )
}