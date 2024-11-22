import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import GalleryPage from '@/components/Gallery/gallery-page'

export const metadata: Metadata = {
  title: 'Gallery | Pristine Clean Soft Wash - Before & After Cleaning Projects',
  description: 'View our gallery of stunning before and after pressure washing projects. See the Pristine Clean Soft Wash difference in action.',
  openGraph: {
    title: 'Pristine Clean Soft Wash Gallery',
    description: 'View our gallery of stunning before and after pressure washing projects. See the Pristine Clean Soft Wash difference in action.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/gallery',
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
    title: 'Pristine Clean Soft Wash Gallery',
    description: 'View our gallery of stunning before and after pressure washing projects. See the Pristine Clean Soft Wash difference in action.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/gallery',
  },
}

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryPage />
      </main>
      <Footer />
    </>
  )
}

