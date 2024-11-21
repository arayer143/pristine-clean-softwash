'use client'

import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function EmailJSInitializer() {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '')
  }, [])

  return null
}