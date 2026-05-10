import Image from 'next/image'

const STEPS = [
  {
    image: '/images/pathways-step-1.webp',
    title: 'Log in to Base Camp',
    body:
      "Log into Base Camp at toastmasters.org with the credentials you created when you joined. If you haven't set up your account yet, do that first. Bookmark it — you'll come back here often to track your progress.",
  },
  {
    image: '/images/pathways-step-2.webp',
    title: 'Choose your path',
    body:
      "Pathways offers several learning paths. Don't overthink the choice. Pick the one that sounds closest to what you want to work on. If you can't decide, go with Presentation Mastery — it's the most straightforward path for building core speaking skills. You can always start a new path later.",
  },
  {
    image: '/images/pathways-step-3.webp',
    title: 'Validate your project',
    body:
      "After you've given the speech, log in to check off the project steps, review your evaluation, and do a short self-reflection. It also helps the club hit its education goals — don't skip it.",
  },
]

export default function Pathways() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
          Your learning platform
        </p>
        <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-6">
          Getting Started with Pathways
        </h2>
        <p className="text-[#1C1C1C]/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 md:mb-16">
          Pathways is Toastmasters International&apos;s online learning platform. It&apos;s where your speech projects live, and where you track your progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {STEPS.map((step) => (
            <div key={step.title} className="text-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden bg-white">
                <Image
                  src={step.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-[#1C1C1C] text-xl md:text-[22px] leading-tight tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-[#1C1C1C]/70 text-[15px] leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed text-center mt-12 md:mt-16 max-w-2xl mx-auto">
          If you get stuck with Base Camp, ask your mentor or any officer. Most of us have been through the same learning curve.
        </p>
      </div>
    </section>
  )
}
