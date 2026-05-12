import type { Metadata } from 'next'
import Header from '@/components/Header'
import EvaluationHero from '@/components/EvaluationHero'
import EvaluationPhilosophy from '@/components/EvaluationPhilosophy'
import EvaluationHowTo from '@/components/EvaluationHowTo'
import EvaluationSpeakingRole from '@/components/EvaluationSpeakingRole'
import EvaluationAvoid from '@/components/EvaluationAvoid'
import EvaluationLookFor from '@/components/EvaluationLookFor'
import EvaluationFirstTime from '@/components/EvaluationFirstTime'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Evaluations — Gilbert Toastmasters',
  description:
    'How to give a good evaluation at Gilbert Toastmasters. Frameworks, what to look for, and tips for first-time evaluators. Praise feels good. Feedback helps you grow.',
}

export default function EvaluatorPage() {
  return (
    <main>
      <Header />
      <EvaluationHero />
      <EvaluationPhilosophy />
      <EvaluationHowTo />
      <EvaluationSpeakingRole />
      <EvaluationAvoid />
      <EvaluationLookFor />
      <EvaluationFirstTime />
      <Footer />
    </main>
  )
}
