import Link from 'next/link'
import FAQ, { FAQItem } from './FAQ'

const officerLinkClass = 'text-[#772432] underline hover:no-underline'

const FAQS: FAQItem[] = [
  {
    question: 'What if I go blank during my speech?',
    answer: (
      <>
        Pause. Breathe. Glance at your notes. Keep going. It happens to members who&apos;ve given fifty speeches. Nobody will think less of you.
      </>
    ),
  },
  {
    question: 'How do I deal with nerves before a speech?',
    answer: (
      <>
        You will be nervous. So was every person in that room when they gave theirs. Nervousness means you care. It doesn&apos;t mean you&apos;re not ready. Pause. Breathe.
      </>
    ),
  },
  {
    question: 'What do I do if I forget part of my speech?',
    answer: (
      <>
        Keep going. Nobody in that room has seen your speech &mdash; they don&apos;t know what you skipped. Don&apos;t circle back with &ldquo;oh, I forgot to mention...&rdquo; Just move forward. The audience only knows the speech you gave, not the one you planned.
      </>
    ),
  },
  {
    question: 'Do I need to schedule my Icebreaker?',
    answer: (
      <>
        No. Pathways asks you to schedule your own speech, but at Gilbert the <Link href="/leadership#vp-of-education" className={officerLinkClass}>VPE</Link> assigns your Icebreaker date. You&apos;ll see it on the schedule — that&apos;s your cue to start preparing.
      </>
    ),
  },
  {
    question: 'Do I need to pick my evaluator?',
    answer: (
      <>
        No. Pathways asks you to choose one, but at Gilbert the <Link href="/leadership#vp-of-education" className={officerLinkClass}>VPE</Link> assigns your evaluator. They&apos;ll be listed on the schedule next to your speech.
      </>
    ),
  },
]

export default function IcebreakerFAQ() {
  return <FAQ heading="Common Worries" faqs={FAQS} />
}
