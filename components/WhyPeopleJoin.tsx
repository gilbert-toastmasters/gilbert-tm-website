import Image from 'next/image'

export default function WhyPeopleJoin() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image
        src="/images/whyjoin-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="md:max-w-2xl bg-white rounded-lg shadow-xl px-7 md:px-10 py-10 md:py-12">
          <p
            className="text-sm md:text-base tracking-widest uppercase mb-4 text-[#772432]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Why people join
          </p>
          <h2
            className="text-3xl md:text-5xl font-black mb-10 text-[#1C1C1C]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Most people don&apos;t show up because they want to become public speakers.
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#1C1C1C]/80">
            <p>
              They come because they freeze on conference calls. Because they dread the &ldquo;any questions?&rdquo; moment in meetings. Because they&apos;re tired of being the quiet one, or the one who knows the answer but can&apos;t get the words out fast enough.
            </p>
            <p>
              They want to be more confident without a script. More persuasive without being loud. More comfortable in a room full of strangers.
            </p>
            <p>
              That&apos;s why people join Gilbert Toastmasters. Not for trophies or titles—for practice. Real reps, every week, in a room where it&apos;s safe to stumble.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
