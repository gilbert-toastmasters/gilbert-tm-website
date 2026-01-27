import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MeetingInfo from '@/components/MeetingInfo'
import WhatToExpect from '@/components/WhatToExpect'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MeetingInfo />
      <WhatToExpect />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
