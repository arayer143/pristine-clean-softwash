import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import FleetWashingPage from '@/components/Services Pages/fleet-cleaning'


export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
       <FleetWashingPage />
      </main>
      <Footer />
    </>
  )
}