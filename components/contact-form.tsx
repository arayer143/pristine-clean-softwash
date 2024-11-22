'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'
import SectionTitle from './section-title'

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current
      )
        .then((result) => {
          console.log(result.text)
          setStatus('Message sent successfully!')
          if (form.current) form.current.reset()
        }, (error) => {
          console.log(error.text)
          setStatus('Failed to send message. Please try again.')
        })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl">
      <SectionTitle 
          title="Contact Us today!"
          subtitle="Fill out our contact section or reach out to us today!."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user_name">Name</Label>
                  <Input type="text" name="user_name" id="user_name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_phone">Phone Number</Label>
                  <Input type="tel" name="user_phone" id="user_phone" placeholder="(123) 456-7890" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_email">Email</Label>
                  <Input type="email" name="user_email" id="user_email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_street">Street Address</Label>
                  <Input type="text" name="user_street" id="user_street" placeholder="123 Main St" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user_city">City</Label>
                    <Input type="text" name="user_city" id="user_city" placeholder="Anytown" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user_zip">ZIP Code</Label>
                    <Input type="text" name="user_zip" id="user_zip" placeholder="12345" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea name="message" id="message" placeholder="Your message here..." required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
                {status && <p className="text-sm mt-2 text-center" aria-live="polite">{status}</p>}
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Contact Information</CardTitle>
              <CardDescription className="text-center">Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <Button
                    variant="outline"
                    asChild
                    className="w-48 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-gray-100 border border-gray-300"
                  >
                    <a href="tel:9852329914" className="flex items-center justify-center space-x-2 py-3">
                      <Phone className="h-4 w-4" />
                      <span>Call Us</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="w-48 shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-gray-100 border border-gray-300"
                  >
                    <a href="mailto:Pristinecleansoftwashllc@gmail.com" className="flex items-center justify-center space-x-2 py-3">
                      <Mail className="h-4 w-4" />
                      <span>Email Us</span>
                    </a>
                  </Button>
                </div>
                <Separator />
                <div>
                  <h3 className="text-sm text-center font-medium mb-2">Follow us</h3>
                  <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
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
