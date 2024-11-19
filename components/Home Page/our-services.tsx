import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Home, Hexagon, Truck } from 'lucide-react'

const services = [
  { title: "Soft and Pressure Washing", icon: Droplet, href: "soft-and-pressure-washing" },
  { title: "Commercial Property Washing", icon: Home, href: "commercial" },
  { title: "Roof Washing", icon: Home, href: "roof-washing" },
  { title: "Concrete Washing", icon: Hexagon, href: "concrete-washing" },
  { title: "Gutter Cleaning & Brightening", icon: Home, href: "gutter-cleaning" },
  { title: "Deck Washing & Restoration", icon: Hexagon, href: "concrete-washing" },
  { title: "Oxidation Removal", icon: Droplet, href: "oxidation" },
  { title: "Fleet Washing", icon: Truck, href: "fleet-cleaning" },
]

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 mt-10">Services</h2>
        <p className="max-w-2xl mx-auto">
          We offer a wide range of pressure washing and soft washing services, including house washing, roof cleaning, concrete cleaning, and more. 
          Whatever your needs, we have you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center text-center group border shadow-md hover:shadow-lg"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <CardHeader className="w-full border-b">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:rotate-y-180">
                <service.icon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-y-180" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center w-full">
              <Button asChild variant="outline" className="w-full transition-all duration-300 hover:bg-opacity-10 border hover:border-opacity-100">
                <Link href={`/${service.href}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}