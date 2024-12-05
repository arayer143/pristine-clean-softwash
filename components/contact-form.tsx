'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Facebook, Instagram } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SectionTitle from './section-title'

const services = [
  "Soft and Pressure Washing",
  "Concrete Washing",
  "Roof Washing",
  "Commercial Properties",
  "Fleet Cleaning",
  "Gutter Cleaning",
  "Oxidation Removal"
]

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState('')
  const [selectedService, setSelectedService] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
        .then((result) => {
          console.log(result.text)
          setStatus('Message sent successfully!')
          if (form.current) form.current.reset()
          setSelectedService('')
        }, (error) => {
          console.log(error.text)
          setStatus('Failed to send message. Please try again.')
        })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-200">
      <div className="w-full max-w-4xl">
        <SectionTitle 
          title="Contact Us today!"
          subtitle="Fill out our contact section or reach out to us today!."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-800 transition-colors duration-200">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">Send us a message</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user_name" className="text-gray-700 dark:text-gray-300">Name</Label>
                  <Input type="text" name="user_name" id="user_name" placeholder="John Doe" required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_phone" className="text-gray-700 dark:text-gray-300">Phone Number</Label>
                  <Input type="tel" name="user_phone" id="user_phone" placeholder="(123) 456-7890" required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_email" className="text-gray-700 dark:text-gray-300">Email</Label>
                  <Input type="email" name="user_email" id="user_email" placeholder="john@example.com" required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_street" className="text-gray-700 dark:text-gray-300">Street Address</Label>
                  <Input type="text" name="user_street" id="user_street" placeholder="123 Main St" required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user_city" className="text-gray-700 dark:text-gray-300">City</Label>
                    <Input type="text" name="user_city" id="user_city" placeholder="Anytown" required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user_zip" className="text-gray-700 dark:text-gray-300">ZIP Code</Label>
                    <Input type="text" name="user_zip" id="user_zip" placeholder="12345" required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-700 dark:text-gray-300">Service</Label>
                  <Select name="service" value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                  <Textarea name="message" id="message" placeholder="Your message here..." required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
                {status && <p className="text-sm mt-2 text-center text-gray-700 dark:text-gray-300" aria-live="polite">{status}</p>}
              </form>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 transition-colors duration-200">
            <CardHeader>
              <CardTitle className="text-center text-gray-900 dark:text-gray-100">Contact Information</CardTitle>
              <CardDescription className="text-center text-gray-600 dark:text-gray-400">Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <Button
                    variant="outline"
                    asChild
                    className="w-48 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-gray-100 dark:from-gray-700 dark:to-gray-600 border border-gray-300 dark:border-gray-600"
                  >
                    <a href="tel:9852329914" className="flex items-center justify-center space-x-2 py-3 text-gray-900 dark:text-gray-100">
                      <Phone className="h-4 w-4" />
                      <span>Call Us</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="w-48 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-gray-100 dark:from-gray-700 dark:to-gray-600 border border-gray-300 dark:border-gray-600"
                  >
                    <a href="mailto:Pristinecleansoftwashllc@gmail.com" className="flex items-center justify-center space-x-2 py-3 text-gray-900 dark:text-gray-100">
                      <Mail className="h-4 w-4" />
                      <span>Email Us</span>
                    </a>
                  </Button>
                </div>
                <Separator className="bg-gray-300 dark:bg-gray-600" />
                <div>
                  <h3 className="text-sm text-center font-medium mb-2 text-gray-700 dark:text-gray-300">Follow us</h3>
                  <div className="flex justify-center space-x-4">
                    <a href="https://www.facebook.com/PristineCleanSoftwashLLC/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
  
                    <a href="https://www.instagram.com/pristinecleanswllc/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
