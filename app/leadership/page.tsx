import type { Metadata } from 'next'
import Header from '@/components/Header'
import Leadership from '@/components/Leadership'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Leadership Team — Gilbert Toastmasters',
  description:
    'Meet the ten officers who run Gilbert Toastmasters. Find who to contact for speeches, mentoring, membership, dues, scheduling, and everything in between.',
}

export default function LeadershipPage() {
  return (
    <main>
      <Header />
      <Leadership />
      <Footer />
    </main>
  )
}
