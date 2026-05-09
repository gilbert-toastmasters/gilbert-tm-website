import Image from 'next/image'

export default function FindUs() {
  return (
    <section id="visit" className="bg-white py-24 md:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[240px_240px_1fr] gap-12 md:gap-10 items-center">
          {/* Mobile-only — 4:3 school photo */}
          <div className="aspect-[4/3] overflow-hidden rounded-md md:hidden">
            <Image
              src="/images/Greenfield-Junior-High-Entrance-.webp"
              alt="Greenfield Junior High School entrance — our meeting location"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop-only — 9:16 school photo crop */}
          <div className="hidden md:block aspect-[9/16] overflow-hidden rounded-md">
            <Image
              src="/images/Greenfield-Junior-High-Entrance-.webp"
              alt="Greenfield Junior High School entrance — our meeting location"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop-only — 9:16 walkthrough video */}
          <div className="hidden md:block aspect-[9/16] overflow-hidden rounded-md">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/find-us.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Copy */}
          <div>
            <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
              Find us
            </p>
            <h2 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-4">
              Greenfield Junior High Library.
            </h2>
            <p className="font-bold text-lg text-[#1C1C1C] mb-1">
              101 S Greenfield Rd, Gilbert, AZ 85296
            </p>
            <p className="text-[#1C1C1C]/70 mb-5">
              Thursdays at 7:00 PM. Free to visit &mdash; no RSVP needed.
            </p>
            <p className="text-[#1C1C1C]/70 max-w-[480px]">
              Park in the front lot. Walk through the main administration
              entrance &mdash; straight past the Grizzly mural. The library
              is on your right.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
