import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import RoofWashingPage from '@/components/Services Pages/roof-washing'


export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Home() {
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