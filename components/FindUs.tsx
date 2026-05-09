import Image from 'next/image'

export default function FindUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          {/* Left — School photo */}
          <div className="aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/Greenfield-Junior-High-Entrance-.webp"
              alt="Greenfield Junior High School entrance — our meeting location"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right — Copy */}
          <div>
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#772432] mb-3">
              Find us
            </p>
            <h2 className="font-bold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.08] tracking-tight mb-4">
              Greenfield Junior High Library.
            </h2>
            <p className="font-bold text-lg text-[#1C1C1C] mb-1">
              101 S Greenfield Rd, Gilbert, AZ 85296
            </p>
            <p className="text-[#1C1C1C]/70 mb-5">
              Thursdays at 7:00 PM. Visitors welcome &mdash; no RSVP needed.
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
