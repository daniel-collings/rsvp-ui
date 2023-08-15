import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CallToAction from './components/CallToAction'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RSVP | by Boltviz',
  description: 'Quick and simple RSVP website for your special day.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <CallToAction/>
      </body>
      <Footer/>
    </html>
  )
}
