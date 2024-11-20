import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import OxidationRemovalPage from '@/components/Services Pages/oxidation-removal'


export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Home() {
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