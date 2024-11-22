import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import OxidationRemovalPage from '@/components/Services Pages/oxidation-removal'

export const metadata: Metadata = {
  title: 'Oxidation Removal Services | Pristine Clean Soft Wash',
  description: 'Expert oxidation removal services by Pristine Clean Soft Wash. Restore and protect your surfaces from rust and corrosion damage.',
  openGraph: {
    title: 'Professional Oxidation Removal | Pristine Clean Soft Wash',
    description: 'Expert oxidation removal services by Pristine Clean Soft Wash. Restore and protect your surfaces from rust and corrosion damage.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/services/oxidation-removal',
    images: [
      {
        url: '/big-banner-image.webp',
        width: 1200,
        height: 630,
        alt: 'Pristine Clean Soft Wash Oxidation Removal Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Oxidation Removal | Pristine Clean Soft Wash',
    description: 'Expert oxidation removal services by Pristine Clean Soft Wash. Restore and protect your surfaces from rust and corrosion damage.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/services/oxidation-removal',
  },
}

export default function OxidationRemovalService() {
  return (
    <>
      <Navbar />
      <main>
        <OxidationRemovalPage />
      </main>
      <Footer />
    </>
  )
}

