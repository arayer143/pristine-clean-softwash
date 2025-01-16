import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const formData = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const mailOptions = {
    from: '"Pristine Clean Softwash" <' + process.env.CONTACT_FORM_TO_EMAIL + '>',
    to: process.env.CONTACT_FORM_TO_EMAIL,
    subject: `New contact form submission from ${formData.user_name}`,
    text: `
      Name: ${formData.user_name}
      Phone: ${formData.user_phone}
      Email: ${formData.user_email}
      Address: ${formData.user_street}, ${formData.user_city}, ${formData.user_zip}
      Service: ${formData.service}
      Message: ${formData.message}
    `,
    html: `
      <h1>New contact form submission from pristinecleansoftwash.com</h1>
      <p><strong>Name:</strong> ${formData.user_name}</p>
      <p><strong>Phone:</strong> ${formData.user_phone}</p>
      <p><strong>Email:</strong> ${formData.user_email}</p>
      <p><strong>Address:</strong> ${formData.user_street}, ${formData.user_city}, ${formData.user_zip}</p>
      <p><strong>Service:</strong> ${formData.service}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

