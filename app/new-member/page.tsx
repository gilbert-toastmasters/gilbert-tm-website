import Header from '@/components/Header'
import NewMemberHero from '@/components/NewMemberHero'
import KeyOfficers from '@/components/KeyOfficers'
import WhatToExpect from '@/components/WhatToExpect'
import EmailOptIn from '@/components/EmailOptIn'
import Footer from '@/components/Footer'

const FIRST_MEETINGS_STEPS = [
  {
    title: 'Try Table Topics',
    body:
      "From your first meeting, you'll be invited to speak for 1–2 minutes on a random question. Low-stakes, and the fastest way to get comfortable in the room.",
  },
  {
    title: 'Talk with your mentor',
    body:
      'Your mentor can answer questions, help you prep, and give honest feedback as you ramp up.',
  },
  {
    title: 'Learn from advanced speakers',
    body:
      'Listen to how seasoned members structure speeches and deliver evaluations. Take notes on what resonates.',
  },
  {
    title: 'Get familiar with the format',
    body:
      "Pay attention to meeting roles, timing, and the running order. The flow will feel natural by month two.",
  },
]

export default function NewMember() {
  return (
    <main>
      <Header />
      <NewMemberHero />
      <KeyOfficers />
      <WhatToExpect
        bgImage="/images/first-meetings-bg.webp"
        bgImagePosition="center 40%"
        eyebrow="Your First Few Meetings"
        heading="You won't be assigned a role right away."
        description="The meeting schedule is built four weeks in advance — that means it takes about a month before you appear on the schedule."
        steps={FIRST_MEETINGS_STEPS}
      />
      <EmailOptIn />
      <Footer />
    </main>
  )
}
