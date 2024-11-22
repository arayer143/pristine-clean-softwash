import { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/Home Page/hero'
import Navbar from '@/components/navbar'
import AboutSection from '@/components/Home Page/about-us'
import ServicesSection from '@/components/Home Page/our-services'
import { homePageImages } from '@/lib/home-page-images'
import SectionWrapper from '@/components/section-wrapper'
import WhyUsSection from '@/components/Home Page/why-us-section'
import BusinessSolutionsSection from '@/components/Home Page/business-solutions-section'
import CTASection from '@/components/call-to-action'
import Gallery from '@/components/Gallery/gallery-section'
import ValuesAndServiceArea from '@/components/Home Page/values-and-service-area'


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
      <CTASection 
          title="Ready to Experience the Pristine Clean Difference?"
          description="Schedule your professional cleaning service today and see the transformation for yourself!"
          buttonText="Get a Free Quote"
          buttonLink="/contact"
        />
           </SectionWrapper>



          <SectionWrapper colorScheme="secondary">
            <WhyUsSection />
          </SectionWrapper>

          
      <SectionWrapper colorScheme="primary">
      <BusinessSolutionsSection />
      </SectionWrapper>

      <SectionWrapper colorScheme="secondary">
      <ValuesAndServiceArea />
      </SectionWrapper>

      <SectionWrapper colorScheme="primary">
      <Gallery 
  images={homePageImages}
  title="Our Services"
  subtitle="See the difference we can make"
/>
          </SectionWrapper>
   

      </main>
      <Footer />
    </div>
  )
}