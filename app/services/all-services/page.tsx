import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import AllServicesPage from '@/components/Services Pages/all-services'

export const metadata: Metadata = {
  title: 'Our Services | Pristine Clean Soft Wash - Professional Pressure Washing',
  description: 'Explore our comprehensive range of pressure washing services. From house washing to deck cleaning, Pristine Clean Soft Wash has you covered.',
  openGraph: {
    title: 'Pristine Clean Soft Wash Services',
    description: 'Explore our comprehensive range of pressure washing services. From house washing to deck cleaning, Pristine Clean Soft Wash has you covered.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/services/all-services',
    images: [
      {
        url: '/big-banner-image.webp',
        width: 1200,
        height: 630,
        alt: 'Pristine Clean Soft Wash Services Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pristine Clean Soft Wash Services',
    description: 'Explore our comprehensive range of pressure washing services. From house washing to deck cleaning, Pristine Clean Soft Wash has you covered.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/services/all-services',
  },
}

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <AllServicesPage />
      </main>
      <Footer />
    </>
  )
}

