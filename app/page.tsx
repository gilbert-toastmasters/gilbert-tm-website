import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuickFacts from '@/components/QuickFacts'
import FindUs from '@/components/FindUs'
import WhatToExpect from '@/components/WhatToExpect'
import Stats from '@/components/Stats'
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
      <QuickFacts />
      <FindUs />
      <WhatToExpect />
      <Stats />
      <Testimonials />
      <WhoWeAre />
      <WhyPeopleJoin />
      <FAQ />
      <Footer />
    </main>
  )
}
