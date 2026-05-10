import Header from '@/components/Header'
import IcebreakerHero from '@/components/IcebreakerHero'
import IcebreakerTopic from '@/components/IcebreakerTopic'
import IcebreakerStuck from '@/components/IcebreakerStuck'
import IcebreakerTips from '@/components/IcebreakerTips'
import IcebreakerAfter from '@/components/IcebreakerAfter'
import IcebreakerFAQ from '@/components/IcebreakerFAQ'
import Footer from '@/components/Footer'

export default function Icebreaker() {
  return (
    <main>
      <Header />
      <IcebreakerHero />
      <IcebreakerTopic />
      <IcebreakerTips />
      <IcebreakerStuck />
      <IcebreakerFAQ />
      <IcebreakerAfter />
      <Footer />
    </main>
  )
}
