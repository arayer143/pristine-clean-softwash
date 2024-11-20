import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import GutterCleaningPage from '@/components/Services Pages/gutter-cleaning'


export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <GutterCleaningPage />
      </main>
      <Footer />
    </>
  )
}