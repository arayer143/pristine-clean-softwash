import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import CommercialServicesPage from '@/components/Services Pages/commercial-properties'

export const metadata: Metadata = {
  title: 'Commercial Pressure Washing | Pristine Clean Soft Wash',
  description: 'Professional commercial pressure washing services for businesses. Enhance your property&apos;s appearance with Pristine Clean Soft Wash.',
  openGraph: {
    title: 'Commercial Pressure Washing Services | Pristine Clean Soft Wash',
    description: 'Professional commercial pressure washing services for businesses. Enhance your property&apos;s appearance with Pristine Clean Soft Wash.',
    type: 'website',
    url: 'https://www.pristinecleansoftwash.com/services/commercial-properties',
    images: [
      {
        url: '/big-banner-image.webp',
        width: 1200,
        height: 630,
        alt: 'Pristine Clean Soft Wash Commercial Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Pressure Washing Services | Pristine Clean Soft Wash',
    description: 'Professional commercial pressure washing services for businesses. Enhance your property&apos;s appearance with Pristine Clean Soft Wash.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://www.pristinecleansoftwash.com/services/commercial-properties',
  },
}

export default function CommercialServices() {
  return (
    <>
      <Navbar />
      <main>
        <CommercialServicesPage />
      </main>
      <Footer />
    </>
  )
}

