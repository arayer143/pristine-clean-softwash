import { Metadata } from 'next'

import { Footer } from '@/components/Footer/footer'
import { HeroSection } from '@/components/Home Page/hero'
import Navbar from '@/components/Navbar/navbar'


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

      </main>
      <Footer />
    </div>
  )
}