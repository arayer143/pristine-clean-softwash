import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <Image
        src="/pristinecleanbanner.jpg"
        alt="Pressure washing in action"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <Card className="w-full max-w-3xl mx-4 bg-background/80 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Pristine Clean Soft Wash
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
              Transform Your Property with Our Expert Pressure Washing Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Our Services
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}