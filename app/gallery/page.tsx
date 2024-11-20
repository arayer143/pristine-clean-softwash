import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import GalleryPage from '@/components/Gallery/gallery-page'


export const metadata: Metadata = {
  title: 'Gallery | Pristine Clean Soft Wash',
  description: 'Explore our portfolio of successful cleaning projects, including before and after photos and videos.',
}

export default function Home() {
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