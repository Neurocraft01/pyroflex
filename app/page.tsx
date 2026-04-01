import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBanner from '@/components/StatsBanner'
import Programs from '@/components/Programs'
import About from '@/components/About'
import Trainers from '@/components/Trainers'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import Cursor from '@/components/Cursor'
import { getCMSContent, getCMSCollection } from '@/lib/cms'

export default async function Home() {
  const heroContent = await getCMSContent('hero', {
    title: 'IGNITE\nYOUR\nPOTENTIAL',
    subtitle: "Pyroflex is not for everyone. It's for the ones who show up at 5AM, who earn their rest, who turn pain into power. If that's you — the door's open.",
    cta_text: 'START BURNING →'
  });

  const aboutContent = await getCMSContent('about', {
    heading: "PYROFLEX\nIS FOR PEOPLE\nWHO DON'T\nQUIT.",
    description: "We built Pyroflex around a single truth: most gyms are too comfortable. Too many mirrors, too much AC, not enough accountability. We stripped it back. Every square meter of this space is built to make you better.",
    mission_statement: "Our coaches don't just count reps. They track progress, push limits, and celebrate every win with you. Because at Pyroflex, your results are our reputation."
  });

  const pricingContent = await getCMSContent('pricing', {
    plan1_name: 'PYRO',
    plan1_price: '₹1,499',
    plan2_name: 'DARK MATTER',
    plan2_price: '₹2,999'
  });

  const trainers = await getCMSCollection('trainers');
  const gallery = await getCMSCollection('gallery');

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero content={heroContent} />
        <StatsBanner />
        <Programs />
        <About content={aboutContent} />
        <Trainers trainers={trainers} />
        <Testimonials />
        <Gallery items={gallery} />
        <Pricing content={pricingContent} />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
