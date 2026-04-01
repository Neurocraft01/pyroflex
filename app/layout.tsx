import type { Metadata } from 'next'
import { Barlow_Condensed, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'PYROFLEX — Ignite Your Potential',
  description: 'The gym for people who don\'t quit. Join Pyroflex and start burning.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${ibmMono.variable}`}>{children}</body>
    </html>
  )
}
