import Link from 'next/link'
import Header from '@/components/Header'
import NewMemberHero from '@/components/NewMemberHero'
import PageNav from '@/components/PageNav'
import KeyOfficers from '@/components/KeyOfficers'
import WhatToExpect from '@/components/WhatToExpect'
import EmailOptIn from '@/components/EmailOptIn'
import Icebreaker from '@/components/Icebreaker'
import HowItWorks from '@/components/HowItWorks'
import Pathways from '@/components/Pathways'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

const PAGE_NAV_ITEMS = [
  { label: 'Connections', href: '#connections' },
  { label: 'First Meetings', href: '#first-meetings' },
  { label: 'Club Emails', href: '#emails' },
  { label: 'Icebreaker', href: '#icebreaker' },
  { label: 'Pathways', href: '#pathways' },
  { label: 'FAQ', href: '#faq' },
]

const NEW_MEMBER_FAQS = [
  {
    question: 'How can I access videos of my speeches?',
    answer: (
      <>
        Gilbert records speeches during meetings. Ask the{' '}
        <Link href="/leadership#sergeant-at-arms" className="text-[#772432] underline hover:no-underline">
          Sergeant-at-Arms
        </Link>{' '}
        for links to recordings.
      </>
    ),
  },
  {
    question: "What if I'm not interested in a Pathways project?",
    answer: (
      <>
        Talk to the{' '}
        <Link href="/leadership#vp-of-education" className="text-[#772432] underline hover:no-underline">
          VPE
        </Link>
        . There&rsquo;s flexibility in how you use your meeting time, and the VPE can help you figure out what works for your goals.
      </>
    ),
  },
  {
    question: "I don't understand how Pathways works. Can someone help me?",
    answer: (
      <>
        Yes. Ask your mentor or{' '}
        <Link href="/leadership" className="text-[#772432] underline hover:no-underline">
          any officer
        </Link>
        {' '}— they&rsquo;ll connect you with someone who can walk you through how the platform works. It&rsquo;s important for the club that members log into Pathways and complete their projects there, so don&rsquo;t hesitate to ask for help.
      </>
    ),
  },
  {
    question: "What should I do if I'm struggling to choose an elective project?",
    answer: (
      <>
        Your mentor is the best resource here. They&rsquo;ve been through the paths and can help you pick something that matches where you are. The{' '}
        <Link href="/leadership#vp-of-education" className="text-[#772432] underline hover:no-underline">
          VPE
        </Link>{' '}
        can also point you in the right direction.
      </>
    ),
  },
  {
    question: "What should I do if I'm not available?",
    answer:
      "If you're on the schedule, finding a replacement is your responsibility. If you're not sure how, your mentor can walk you through it.",
  },
]

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
      <PageNav items={PAGE_NAV_ITEMS} />
      <div id="connections" className="scroll-mt-32">
        <KeyOfficers />
      </div>
      <div id="first-meetings" className="scroll-mt-32">
        <WhatToExpect
          bgImage="/images/first-meetings-bg.webp"
          bgImagePosition="center 40%"
          eyebrow="Your First Few Meetings"
          heading="You won't be assigned a role right away."
          description="The meeting schedule is built four weeks in advance — that means it takes about a month before you appear on the schedule."
          steps={FIRST_MEETINGS_STEPS}
          animate={false}
        />
      </div>
      <div id="emails" className="scroll-mt-32">
        <EmailOptIn />
      </div>
      <div id="icebreaker" className="scroll-mt-32 bg-white border-y border-black/10">
        <Icebreaker />
        <HowItWorks />
      </div>
      <div id="pathways" className="scroll-mt-32">
        <Pathways />
      </div>
      <div id="faq" className="scroll-mt-32">
        <FAQ faqs={NEW_MEMBER_FAQS} />
      </div>
      <Footer />
    </main>
  )
}
