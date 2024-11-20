import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import AllServicesPage from '@/components/Services Pages/all-services'


export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Home() {
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