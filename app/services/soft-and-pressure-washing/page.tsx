import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import SoftAndPressureWashPage from '@/components/Services Pages/soft-and-pressure-washing'


export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Home() {
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