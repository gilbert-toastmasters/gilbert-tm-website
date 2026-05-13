import Header from '@/components/Header'
import IcebreakerHero from '@/components/IcebreakerHero'
import IcebreakerTopic from '@/components/IcebreakerTopic'
import IcebreakerStuck from '@/components/IcebreakerStuck'
import IcebreakerTips from '@/components/IcebreakerTips'
import IcebreakerAfter from '@/components/IcebreakerAfter'
import IcebreakerFAQ from '@/components/IcebreakerFAQ'
import PageNav from '@/components/PageNav'
import Footer from '@/components/Footer'

const PAGE_NAV_ITEMS = [
  { label: 'What to Talk About', href: '#topic' },
  { label: 'Practical Tips', href: '#tips' },
  { label: 'Start Here', href: '#stuck' },
  { label: 'FAQ', href: '#faq' },
  { label: 'What Happens Next', href: '#after' },
]

export default function Icebreaker() {
  return (
    <main>
      <Header />
      <IcebreakerHero />
      <PageNav items={PAGE_NAV_ITEMS} />
      <div id="topic" className="scroll-mt-32">
        <IcebreakerTopic />
      </div>
      <div id="tips" className="scroll-mt-32">
        <IcebreakerTips />
      </div>
      <div id="stuck" className="scroll-mt-32">
        <IcebreakerStuck />
      </div>
      <div id="faq" className="scroll-mt-32">
        <IcebreakerFAQ />
      </div>
      <div id="after" className="scroll-mt-32">
        <IcebreakerAfter />
      </div>
      <Footer />
    </main>
  )
}
