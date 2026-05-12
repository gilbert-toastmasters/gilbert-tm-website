import Image from 'next/image'

export default function EvaluationHero() {
  return (
    <section className="relative h-[calc(100vh-200px)] min-h-[560px] w-full overflow-hidden">
      <Image
        src="/images/Toastmasters-Meeting-at-Greenfield-Junior-High.webp"
        alt="Gilbert Toastmasters members listening attentively during a meeting"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex flex-col items-start justify-center text-white text-left px-8 md:px-16 py-10">
        <p className="mb-4">
          <span className="inline-block bg-[#F2DF74] text-[#1C1C1C] text-lg md:text-xl tracking-widest uppercase px-3 py-1">
            Feedback at Gilbert TM
          </span>
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.06] max-w-4xl">
          Toastmasters Evaluations
        </h1>
        <p className="text-lg md:text-xl mb-3 max-w-2xl leading-relaxed">
          Evaluations are the reason Toastmasters works. Anyone can stand up and give a speech. The difference is what happens after — when someone who was paying close attention tells you what landed, what didn&apos;t, and what to try next time.
        </p>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
          At Gilbert, we don&apos;t do fluffy evaluations. We also don&apos;t do harsh ones. We do useful ones — the kind that makes a speaker walk away knowing exactly what to work on and feeling motivated to do it.
        </p>
      </div>
    </section>
  )
}
