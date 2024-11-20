import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import CommercialServicesPage from '@/components/Services Pages/commercial-properties'


export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Home() {
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