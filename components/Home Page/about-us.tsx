'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 668) // Adjust this breakpoint as needed
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="about" className="bg-primary-100 dark:bg-primary-900 transition-colors duration-300">
      <div className={`container mx-auto px-4 ${isMobile ? 'h-screen' : 'py-12 md:py-24'}`}>
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-800 dark:text-primary-100">About Pristine Clean Soft Wash</h2>
        
        <Card className="bg-white dark:bg-primary-800 transition-colors duration-300 h-full">
          <CardContent className={`p-6 ${isMobile ? 'h-full flex flex-col' : ''}`}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isMobile ? 'h-full' : ''}`}>
              <div className={`flex flex-col justify-center ${isMobile ? 'h-full' : ''}`}>
                <div className={`relative ${isMobile ? 'h-full' : 'aspect-video lg:mt-12'}`}>
                  <ReactPlayer
                    url="/pristinecleanvideo-resize.mp4"
                    width="100%"
                    height={isMobile ? "90%" : "80%"}
                    playing={isPlaying}
                    controls={true}
                    light={<Image src="/pristinelogo-no-bg.webp" alt="Thumbnail" fill className="object-cover" />}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 dark:bg-primary-900/80 hover:bg-white dark:hover:bg-primary-900 z-10"
                      onClick={() => setIsPlaying(true)}
                    >
                      <span className="sr-only">Play video</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </Button>
                  )}
                </div>
                
                {!isMobile && (
                  <>
                    <div className="flex justify-center space-x-4 mt-4">
                      <Link href="https://www.google.com/maps/place/Pristine+Clean+Softwash,+LLC/@29.619036,-90.7294213,13.25z/data=!4m8!3m7!1s0x3ce2d718785aa69:0x353ce7095f70135!8m2!3d29.6300359!4d-90.7373839!9m1!1b1!16s%2Fg%2F11q3cykxpd?entry=ttu" target="_blank" rel="noopener noreferrer">
                        <Image src="/5stargoogle.webp" alt="Google Reviews" width={90} height={45} className="rounded-md" />
                      </Link>
                      <Link href="https://www.facebook.com/PristineCleanSoftwashLLC/reviews/" target="_blank" rel="noopener noreferrer">
                        <Image src="/facebook-review.webp" alt="Facebook Reviews" width={90} height={50} className="rounded-md" />
                      </Link>
                    </div>

                    <div className="flex justify-center space-x-4 mt-6">
                      <Link href="https://www.facebook.com/PristineCleanSoftwashLLC" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link href="https://www.instagram.com/pristinecleansoftwash" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link href="https://www.youtube.com/@pristinecleansoftwash" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                        <Youtube className="h-6 w-6" />
                        <span className="sr-only">YouTube</span>
                      </Link>
                    </div>
                  </>
                )}
              </div>
              
              {!isMobile && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-200">Our services can help with:</h3>
                  
                  <div className="space-y-6">
                    <Card className="bg-secondary-100 dark:bg-secondary-800 transition-colors duration-300">
                      <CardHeader>
                        <CardTitle className="text-secondary-800 dark:text-secondary-100">Improving curb appeal</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-secondary-700 dark:text-secondary-200">Pressure washing can remove years of dirt and grime buildup leaving surfaces as good as new!</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-secondary-100 dark:bg-secondary-800 transition-colors duration-300">
                      <CardHeader>
                        <CardTitle className="text-secondary-800 dark:text-secondary-100">Protect against Damage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-secondary-700 dark:text-secondary-200">Pressure washing can remove contaminants that can damage your home&apos;s siding, such as algae, mold, and mildew</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-secondary-100 dark:bg-secondary-800 transition-colors duration-300">
                      <CardHeader>
                        <CardTitle className="text-secondary-800 dark:text-secondary-100">Improving your health</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-secondary-700 dark:text-secondary-200">Pressure washing can remove toxic contaminants like algae and mold, as well as airborne allergens like pollen, dust mites, and mold spores.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutSection