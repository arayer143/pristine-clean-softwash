import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import ConcreteWashingPage from '@/components/Services Pages/concrete-wasing'


export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
       <ConcreteWashingPage />
      </main>
      <Footer />
    </>
  )
}