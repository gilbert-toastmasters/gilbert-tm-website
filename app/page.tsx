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

const HOMEPAGE_FAQS = [
  {
    question: 'How big is the club?',
    answer:
      '40–50 members. Big enough to learn from a variety of perspectives. Small enough that we know each other.',
  },
  {
    question: 'What does membership cost?',
    answer:
      'Dues are billed twice a year and cover the venue, Toastmasters International fees, and essentials like name badges. For current pricing, email our VP of Membership at vpm-499@toastmastersclubs.org.',
  },
  {
    question: 'Any additional costs?',
    answer:
      'None required. We host an annual fundraiser (optional) and gather socially after meetings—usually somewhere in downtown Gilbert (also optional).',
  },
  {
    question: 'Do I need experience to join?',
    answer:
      "No. We have complete beginners and seasoned speakers in the same room. You'll fit in.",
  },
  {
    question: 'Can I visit before committing?',
    answer: "Yes. Come as many times as you'd like. No pressure.",
  },
  {
    question: 'How often will I speak?',
    answer:
      "Prepared speeches happen about 3–4 times per year. We're a large club, so we share the stage. If rapid advancement is your goal, we may not be the right fit. If you want a community invested in your growth—with many ways to learn beyond speeches—you're in the right place.",
  },
  {
    question: 'Is there an age requirement?',
    answer: '18 or older. No upper limit.',
  },
  {
    question: 'What about leadership development?',
    answer:
      "It's built into the program. You'll take on meeting roles—Timer, Evaluator, Toastmaster of the Day—that develop leadership through practice.",
  },
  {
    question: "What's the culture like?",
    answer:
      'Multigenerational. International. Members from India, Mexico, China, France, Brazil, Bahrain, and across the U.S. We support each other, and we spend time together outside of meetings.',
  },
  {
    question: 'Will I get a mentor?',
    answer:
      "Yes. We'll pair you with someone, and the whole club looks out for new members. You won't figure this out alone.",
  },
  {
    question: 'Do you meet online?',
    answer: "No. We're 100% in person, every Thursday.",
  },
  {
    question: 'How do I join?',
    answer:
      "Visit a meeting. Tell any member you're interested. We'll take it from there.",
  },
]

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
      <FAQ
        faqs={HOMEPAGE_FAQS}
        subhead={
          <>
            Still wondering? Email our VP of Membership at{' '}
            <a
              href="mailto:vpm-499@toastmastersclubs.org"
              className="underline hover:text-[#772432]"
            >
              vpm-499@toastmastersclubs.org
            </a>
            . We&apos;d rather you ask than guess.
          </>
        }
      />
      <Footer />
    </main>
  )
}
