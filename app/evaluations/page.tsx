import type { Metadata } from 'next'
import Header from '@/components/Header'
import EvaluationHero from '@/components/EvaluationHero'
import EvaluationPhilosophy from '@/components/EvaluationPhilosophy'
import EvaluationHowTo from '@/components/EvaluationHowTo'
import EvaluationSpeakingRole from '@/components/EvaluationSpeakingRole'
import EvaluationAvoid from '@/components/EvaluationAvoid'
import EvaluationLookFor from '@/components/EvaluationLookFor'
import EvaluationFirstTime from '@/components/EvaluationFirstTime'
import PageNav from '@/components/PageNav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Evaluations — Gilbert Toastmasters',
  description:
    'How to give a good evaluation at Gilbert Toastmasters. Frameworks, what to look for, and tips for first-time evaluators. Praise feels good. Feedback helps you grow.',
}

const PAGE_NAV_ITEMS = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'How To', href: '#how-to' },
  { label: 'Speaking Role', href: '#speaking-role' },
  { label: 'Traps to Skip', href: '#avoid' },
  { label: 'What to Look For', href: '#look-for' },
  { label: 'First Timers', href: '#first-time' },
]

export default function EvaluatorPage() {
  return (
    <main>
      <Header />
      <EvaluationHero />
      <PageNav items={PAGE_NAV_ITEMS} />
      <div id="philosophy" className="scroll-mt-32">
        <EvaluationPhilosophy />
      </div>
      <div id="how-to" className="scroll-mt-32">
        <EvaluationHowTo />
      </div>
      <div id="speaking-role" className="scroll-mt-32">
        <EvaluationSpeakingRole />
      </div>
      <div id="avoid" className="scroll-mt-32">
        <EvaluationAvoid />
      </div>
      <div id="look-for" className="scroll-mt-32">
        <EvaluationLookFor />
      </div>
      <div id="first-time" className="scroll-mt-32">
        <EvaluationFirstTime />
      </div>
      <Footer />
    </main>
  )
}
