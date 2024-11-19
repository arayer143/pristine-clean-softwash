'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState, useCallback } from 'react'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showThumbnail, setShowThumbnail] = useState(true)

  const handleVideoPlay = useCallback(() => {
    setIsPlaying(true)
    setShowThumbnail(false)
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">About Pristine Clean Soft Wash</h2>
      
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">
        <Card className="xl:col-span-3">
          <CardContent className="p-6">
            <div className="relative aspect-video">
              {showThumbnail && (
                <div className="absolute inset-0 z-10">
                  <Image
                    src="/pristinelogo-no-bg.webp"
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-20"
                    onClick={handleVideoPlay}
                  >
                    <span className="sr-only">Play video</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
              )}
              <ReactPlayer
                url="/pristinecleanvideo-resize.mp4"
                width="100%"
                height="100%"
                playing={isPlaying}
                controls={!showThumbnail}
                onPlay={handleVideoPlay}
                onPause={() => setIsPlaying(false)}
              />
            </div>
            
            <div className="mt-6 flex flex-col items-center space-y-4">
              <div className="flex justify-center space-x-4">
                <Link href="https://www.google.com/maps/place/Pristine+Clean+Softwash,+LLC/@29.619036,-90.7294213,13.25z/data=!4m8!3m7!1s0x3ce2d718785aa69:0x353ce7095f70135!8m2!3d29.6300359!4d-90.7373839!9m1!1b1!16s%2Fg%2F11q3cykxpd?entry=ttu" target="_blank" rel="noopener noreferrer">
                  <Image src="/5stargoogle.webp" alt="Google Reviews" width={90} height={45} className="rounded-md" />
                </Link>
                <Link href="https://www.facebook.com/PristineCleanSoftwashLLC/reviews/" target="_blank" rel="noopener noreferrer">
                  <Image src="/facebook-review.webp" alt="Facebook Reviews" width={90} height={50} className="rounded-md" />
                </Link>
              </div>

              <div className="flex justify-center space-x-4">
                <Link href="https://www.facebook.com/PristineCleanSoftwashLLC" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/pristinecleansoftwash" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.youtube.com/@pristinecleansoftwash" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6 xl:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our services can help with:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Improving curb appeal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Pressure washing can remove years of dirt and grime buildup leaving surfaces as good as new!</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Protect against Damage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Pressure washing can remove contaminants that can damage your home&apos;s siding, such as algae, mold, and mildew</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Improving your health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Pressure washing can remove toxic contaminants like algae and mold, as well as airborne allergens like pollen, dust mites, and mold spores.</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AboutSection