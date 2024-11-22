import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import RoofWashingPage from '@/components/Services Pages/roof-washing'

export const metadata: Metadata = {
  title: 'Roof Washing Services | Pristine Clean Soft Wash',
  description: 'Professional roof washing services by Pristine Clean Soft Wash. Extend the life of your roof and improve your home&apos;s curb appeal.',
  openGraph: {
    title: 'Expert Roof Washing Services | Pristine Clean Soft Wash',
    description: 'Professional roof washing services by Pristine Clean Soft Wash. Extend the life of your roof and improve your home&apos;s curb appeal.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/services/roof-washing',
    images: [
      {
        url: '/big-banner-image.webp',
        width: 1200,
        height: 630,
        alt: 'Pristine Clean Soft Wash Roof Washing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Roof Washing Services | Pristine Clean Soft Wash',
    description: 'Professional roof washing services by Pristine Clean Soft Wash. Extend the life of your roof and improve your home&apos;s curb appeal.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/services/roof-washing',
  },
}

export default function RoofWashingService() {
  return (
    <>
      <Navbar />
      <main>
        <RoofWashingPage />
      </main>
      <Footer />
    </>
  )
}
