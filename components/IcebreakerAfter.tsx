import Image from 'next/image'
import Link from 'next/link'

export default function IcebreakerAfter() {
  return (
    <section className="relative overflow-hidden pb-16 md:py-32">
      <div className="relative w-full h-[75vw] max-h-[520px] md:absolute md:inset-0 md:h-full md:max-h-none">
        <Image
          src="/images/icebreaker-applause.webp"
          alt="A Gilbert Toastmasters member celebrates with her evaluator after a speech"
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
      </div>
      <div className="relative z-10 -mt-[15vw] px-4 md:mt-0 md:px-6 md:max-w-6xl md:mx-auto md:flex md:justify-start">
        <div className="md:max-w-2xl bg-white rounded-lg shadow-xl px-7 md:px-10 py-10 md:py-12">
          <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
            After your speech
          </p>
          <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-8">
            What Happens Next
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#1C1C1C]/80">
            <p>
              Your evaluator will give a verbal evaluation in front of the club: what worked, what to try differently next time. Then they&apos;ll share written feedback with you.
            </p>
            <p>
              After the meeting, sit down with your evaluator to go over their notes. Ask questions. This conversation is often more valuable than the evaluation itself.
            </p>
            <p>
              Then mark the project complete in Base Camp. If you&apos;re not sure how, ask your mentor or the <Link href="/leadership#vp-of-education" className="text-[#772432] underline hover:no-underline">VPE</Link>.
            </p>
            <p>
              And take a second to appreciate what you just did. Every member in that room gave an Icebreaker once. They remember what it felt like. That&apos;s why they&apos;ll be cheering for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
