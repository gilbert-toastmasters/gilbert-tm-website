import Image from 'next/image'

export default function NewMemberHero() {
  return (
    <section className="relative h-[calc(100vh-200px)] min-h-[560px] w-full overflow-hidden">
      <Image
        src="/images/new-member-hero.webp"
        alt="Two Gilbert Toastmasters members shaking hands in front of the club banner"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 h-full flex flex-col items-start justify-center text-white text-left px-8 md:px-16 py-10">
        <p className="mb-4">
          <span className="inline-block bg-[#F2DF74] text-[#1C1C1C] text-lg md:text-xl tracking-widest uppercase px-3 py-1">
            New Member Area
          </span>
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.06] max-w-4xl">
          You Just Joined.
          <br />
          Here&apos;s What Happens Next.
        </h1>
        <p className="text-lg md:text-xl mb-3 max-w-2xl leading-relaxed">
          You signed the paperwork. You&apos;re in. Now you&apos;re probably wondering what the first few weeks actually look like.
        </p>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
          Here&apos;s the short version: come to meetings, even before you&apos;re on the schedule. You&apos;ll get more out of showing up than waiting.
        </p>
      </div>
    </section>
  )
}
