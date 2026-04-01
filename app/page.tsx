'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBanner from '@/components/StatsBanner'
import Programs from '@/components/Programs'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import Cursor from '@/components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <StatsBanner />
        <Programs />
        <About />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
