import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import SoftAndPressureWashPage from '@/components/Services Pages/soft-and-pressure-washing'

export const metadata: Metadata = {
  title: 'Soft and Pressure Washing Services | Pristine Clean Soft Wash',
  description: 'Expert soft and pressure washing services by Pristine Clean Soft Wash. Revitalize your property&apos;s exterior with our professional cleaning.',
  openGraph: {
    title: 'Professional Soft and Pressure Washing | Pristine Clean Soft Wash',
    description: 'Expert soft and pressure washing services by Pristine Clean Soft Wash. Revitalize your property&apos;s exterior with our professional cleaning.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/services/soft-and-pressure-washing',
    images: [
      {
        url: '/big-banner-image.webp',
        width: 1200,
        height: 630,
        alt: 'Pristine Clean Soft Wash Soft and Pressure Washing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Soft and Pressure Washing | Pristine Clean Soft Wash',
    description: 'Expert soft and pressure washing services by Pristine Clean Soft Wash. Revitalize your property&apos;s exterior with our professional cleaning.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/services/soft-and-pressure-washing',
  },
}

export default function SoftAndPressureWashingService() {
  return (
    <>
      <Navbar />
      <main>
        <SoftAndPressureWashPage />
      </main>
      <Footer />
    </>
  )
}

