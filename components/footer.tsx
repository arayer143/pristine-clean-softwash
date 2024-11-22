import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PhoneCall, Mail } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Soft & Pressure Washing', href: '/soft-and-pressure-washing' },
  { name: 'Roof Washing', href: '/roof-washing' },
  { name: 'Concrete and Deck Washing', href: '/concrete-washing' },
  { name: 'Gutter Cleaning', href: '/gutter-cleaning' },
  { name: 'Fleet Cleaning', href: '/fleet-cleaning' },
  { name: 'Commercial Properties', href: '/commercial' },
  { name: 'Oxidation Removal', href: '/oxidation' },
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Quick Links</h2>
            <ul className="text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.name} className="mb-4">
                  <Link href={link.href} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Our Services</h2>
            <ul className="text-muted-foreground">
              {services.map((service) => (
                <li key={service.name} className="mb-4">
                  <Link href={service.href} className="hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Contact Us</h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="tel:9852329914">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Us
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="Pristinecleansoftwashllc@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Pristine Clean Soft Wash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}