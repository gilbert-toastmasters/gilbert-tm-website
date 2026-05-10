import Link from 'next/link'

export default function Icebreaker() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
          Your first prepared speech
        </p>
        <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6">
          Your Icebreaker.
        </h2>
        <div className="space-y-4 text-[#1C1C1C]/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
          <p>
            4 to 6 minutes. The only requirement: introduce yourself to the club. There&apos;s no template you have to follow.
          </p>
          <p>
            What you talk about is up to you. Some members walk through their life story, others focus on one defining moment, some don&apos;t mention Toastmasters at all. This speech is yours.
          </p>
        </div>
        <Link
          href="/icebreaker"
          className="inline-flex items-center gap-2 text-[#772432] font-semibold text-base hover:gap-3 transition-all"
        >
          Read the full Icebreaker guide
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
