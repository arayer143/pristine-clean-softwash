import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import GutterCleaningPage from '@/components/Services Pages/gutter-cleaning'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Services | Pristine Clean Soft Wash',
  description: 'Professional gutter cleaning services by Pristine Clean Soft Wash. Protect your home from water damage with our expert gutter maintenance.',
  openGraph: {
    title: 'Expert Gutter Cleaning Services | Pristine Clean Soft Wash',
    description: 'Professional gutter cleaning services by Pristine Clean Soft Wash. Protect your home from water damage with our expert gutter maintenance.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/services/gutter-cleaning',
    images: [
      {
        url: '/big-banner-image.webp',
        width: 1200,
        height: 630,
        alt: 'Pristine Clean Soft Wash Gutter Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Gutter Cleaning Services | Pristine Clean Soft Wash',
    description: 'Professional gutter cleaning services by Pristine Clean Soft Wash. Protect your home from water damage with our expert gutter maintenance.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/services/gutter-cleaning',
  },
}

export default function GutterCleaningService() {
  return (
    <>
      <Navbar />
      <main>
        <GutterCleaningPage />
      </main>
      <Footer />
    </>
  )
}

