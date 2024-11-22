import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Pristine Clean Soft Wash | Professional Pressure Washing Services',
  description: 'Contact Pristine Clean Soft Wash for professional pressure washing services. Get a free quote or schedule your cleaning today.',
  openGraph: {
    title: 'Contact Pristine Clean Soft Wash',
    description: 'Contact Pristine Clean Soft Wash for professional pressure washing services. Get a free quote or schedule your cleaning today.',
    type: 'website',
    url: 'https://pristinecleansoftwash.com/contact',
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
    title: 'Contact Pristine Clean Soft Wash',
    description: 'Contact Pristine Clean Soft Wash for professional pressure washing services. Get a free quote or schedule your cleaning today.',
    images: ['/big-banner-image.webp'],
  },
  alternates: {
    canonical: 'https://pristinecleansoftwash.com/contact',
  },
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}


