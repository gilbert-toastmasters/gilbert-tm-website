import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MeetingInfo from '@/components/MeetingInfo'
import WhatToExpect from '@/components/WhatToExpect'
import WhyPeopleJoin from '@/components/WhyPeopleJoin'
import Testimonials from '@/components/Testimonials'
import WhoWeAre from '@/components/WhoWeAre'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MeetingInfo />
      <WhatToExpect />
      <WhyPeopleJoin />
      <Testimonials />
      <WhoWeAre />
      <FAQ />
      <Footer />
    </main>
  )
}
