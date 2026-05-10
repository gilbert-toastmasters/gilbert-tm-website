import Image from 'next/image'

export default function IcebreakerHero() {
  return (
    <section className="relative h-[calc(100vh-200px)] min-h-[560px] w-full overflow-hidden">
      <Image
        src="/images/icebreaker-hero.webp"
        alt="Member giving a speech to the Gilbert Toastmasters club in the library"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 h-full flex flex-col items-start justify-center text-white text-left px-8 md:px-16 py-10">
        <p className="mb-4">
          <span className="inline-block bg-[#F2DF74] text-[#1C1C1C] text-lg md:text-xl tracking-widest uppercase px-3 py-1">
            Your Icebreaker in Gilbert Toastmasters
          </span>
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.06] max-w-4xl">
          Your First Speech.
          <br />
          Your Story. Your Way.
        </h1>
        <p className="text-lg md:text-xl mb-3 max-w-2xl leading-relaxed">
          Your Icebreaker is a 4-to-6-minute speech where you introduce yourself to the club. It&apos;s Project 1 in Level 1 of any Pathways path, and every Toastmaster gives one.
        </p>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
          It&apos;s not a test. It&apos;s the room getting to know you, and you getting used to standing in front of it.
        </p>
      </div>
    </section>
  )
}
