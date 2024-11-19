import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { PlayCircle } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Pristin Clean Soft Wash</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <Image
                    src="/pristinelogo-no-bg.webp"
                    alt="Pristine Clean Staff Photo"
                    fill
                    className="rounded-md object-cover"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    asChild
                  >
                    <Link href="/pristinecleanvideo-resize.mp4">
                      <PlayCircle className="h-6 w-6" />
                      <span className="sr-only">Play video</span>
                    </Link>
                  </Button>
                </AspectRatio>
                
                <div className="flex justify-center space-x-4 mt-4">
                  <Link href="https://www.google.com/maps/place/Pristine+Clean+Softwash,+LLC/@29.619036,-90.7294213,13.25z/data=!4m8!3m7!1s0x3ce2d718785aa69:0x353ce7095f70135!8m2!3d29.6300359!4d-90.7373839!9m1!1b1!16s%2Fg%2F11q3cykxpd?entry=ttu" target="_blank" rel="noopener noreferrer">
                    <Image src="/5stargoogle.webp" alt="Google Reviews" width={90} height={45} className="rounded-md" />
                  </Link>
                  <Link href="https://www.facebook.com/PristineCleanSoftwashLLC/reviews/" target="_blank" rel="noopener noreferrer">
                    <Image src="/facebook-review.webp" alt="Facebook Reviews" width={90} height={50} className="rounded-md" />
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our services can help with:</h3>
                
                <div className="space-y-6">
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
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutSection