'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

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
              <Label htmlFor="user_email">Email</Label>
              <Input type="email" name="user_email" id="user_email" placeholder="john@example.com" required />
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
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Reach out to us through any of these channels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>contact@pristineclean.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>123 Clean Street, Washville, ST 12345</span>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="text-sm font-medium mb-2">Follow us</h3>
            <div className="flex space-x-4">
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
        </CardContent>
      </Card>
    </div>
  )
}