import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import FleetWashingPage from '@/components/Services Pages/fleet-cleaning'

export const metadata: Metadata = {
  title: 'Fleet Washing Services | Pristine Clean Soft Wash',
  description: 'Professional fleet washing services by Pristine Clean Soft Wash. Keep your vehicles clean, maintained, and representing your business at its best.',
  openGraph: {
    title: 'Expert Fleet Washing Services | Pristine Clean Soft Wash',
    description: 'Professional fleet washing services by Pristine Clean Soft Wash. Keep your vehicles clean, maintained, and representing your business at its best.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/services/fleet-washing',
    images: [
      {
        url: '/big-banner-image.webp',
        width: 1200,
        height: 630,
        alt: 'Pristine Clean Soft Wash Fleet Washing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Fleet Washing Services | Pristine Clean Soft Wash',
    description: 'Professional fleet washing services by Pristine Clean Soft Wash. Keep your vehicles clean, maintained, and representing your business at its best.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/services/fleet-washing',
  },
}

export default function FleetWashingService() {
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
