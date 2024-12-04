import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import ConcreteWashingPage from '@/components/Services Pages/concrete-washing'

export const metadata: Metadata = {
  title: 'Concrete Cleaning Services | Pristine Clean Soft Wash',
  description: 'Expert concrete cleaning services by Pristine Clean Soft Wash. Restore your driveways, patios, and walkways to their original beauty.',
  openGraph: {
    title: 'Professional Concrete Cleaning | Pristine Clean Soft Wash',
    description: 'Expert concrete cleaning services by Pristine Clean Soft Wash. Restore your driveways, patios, and walkways to their original beauty.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/services/concrete-washing',
    images: [
      {
        url: '/big-banner-image.webp',
        width: 1200,
        height: 630,
        alt: 'Pristine Clean Soft Wash Concrete Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Concrete Cleaning | Pristine Clean Soft Wash',
    description: 'Expert concrete cleaning services by Pristine Clean Soft Wash. Restore your driveways, patios, and walkways to their original beauty.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/services/concrete-washing',
  },
}

export default function ConcreteCleaningService() {
  return (
    <>
      <Navbar />
      <main>
        <ConcreteWashingPage />
      </main>
      <Footer />
    </>
  )
}

