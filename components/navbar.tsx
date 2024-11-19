'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Moon, Sun, ChevronDown } from 'lucide-react'

const services = [
  { title: 'All Services', href: '/services/all-services' },
  { title: 'Soft & Pressure Washing', href: '/services/soft-and-pressure-washing' },
  { title: 'Roof Washing', href: '/services/roof-washing' },
  { title: 'Concrete and Deck Washing', href: '/services/concrete-washing' },
  { title: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
  { title: 'Fleet Cleaning', href: '/services/fleet-cleaning' },
  { title: 'Commercial Properties', href: '/services/commercial-properties' },
  { title: 'Oxidation Removal', href: '/services/oxidation' },
]

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/assets/img/pristinelogo-no-bg.webp" 
                alt="Pristine Clean Soft Wash Logo" 
                width={150} 
                height={50} 
                className="h-auto w-[150px] min-w-[150px]"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1 flex-1 justify-center">
            <NavigationMenu aria-label="Main Navigation">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/' ? 'text-foreground font-semibold' : ''}`}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${pathname === service.href ? 'bg-accent text-accent-foreground' : ''}`}
                            >
                              {service.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/gallery' ? 'text-foreground font-semibold' : ''}`}>
                      Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/contact' ? 'text-foreground font-semibold' : ''}`}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex-1 flex items-center justify-end space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                className="w-9 px-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background flex flex-col">
                <nav className="flex flex-col space-y-4 mt-4 flex-grow">
                  <Link href="/" className={`text-lg font-medium transition-colors duration-200 ${pathname === '/' ? 'text-foreground font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-lg font-medium"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </Button>
                    <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-200 ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                      {services.map((service) => (
                        <Link 
                          key={service.href} 
                          href={service.href} 
                          className={`block text-lg font-medium transition-colors duration-200 ${pathname === service.href ? 'text-foreground font-semibold' : ''}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="/gallery" className={`text-lg font-medium transition-colors duration-200 ${pathname === '/gallery' ? 'text-foreground font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Gallery
                  </Link>
                  <Link href="/contact" className={`text-lg font-medium transition-colors duration-200 ${pathname === '/contact' ? 'text-foreground font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}