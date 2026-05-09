import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuickFacts from '@/components/QuickFacts'
import FindUs from '@/components/FindUs'
import WhatToExpect from '@/components/WhatToExpect'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import WhoWeAre from '@/components/WhoWeAre'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

const FIRST_VISIT_STEPS = [
  {
    num: 'Step 01',
    title: 'Sign in',
    body: "Grab a name tag at the welcome table. We'll ask how you found us.",
  },
  {
    num: 'Step 02',
    title: 'Meeting starts',
    body:
      "Early on, you'll stand and introduce yourself — your name and what brought you here. Brief and low-pressure.",
  },
  {
    num: 'Step 03',
    title: 'Engage',
    body:
      'Watch members give speeches and feedback. You may be invited to try Table Topics — 1–2 minutes of impromptu speaking. You can pass; most guests give it a shot.',
  },
  {
    num: 'Step 04',
    title: 'Closure',
    body:
      "At the end, we'll ask what you thought. We welcome your honest feedback.",
  },
]

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <QuickFacts />
      <FindUs />
      <WhatToExpect
        bgImage="/images/whattoexpect-bg.webp"
        eyebrow="What to expect"
        heading={
          <>
            Your first
            <br />
            visit, mapped.
          </>
        }
        description="You'll watch, you'll learn, and yes, you might get called on. Here's the full arc of a Thursday meeting from the moment you walk in."
        steps={FIRST_VISIT_STEPS}
      />
      <Stats />
      <Testimonials />
      <WhoWeAre />
      <FAQ />
      <Footer />
    </main>
  )
}
