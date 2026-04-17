export default function WhoWeAre() {
  return (
    <section className="py-24 md:py-32 bg-[#f5f5f5]">
      <div className="max-w-3xl mx-auto px-6">
        <p
          className="text-sm md:text-base tracking-widest uppercase mb-4"
          style={{ color: '#772432', fontFamily: 'Montserrat, sans-serif' }}
        >
          Who we are
        </p>
        <h2
          className="text-3xl md:text-5xl font-black mb-10 text-black"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          50+ members from all backgrounds.
        </h2>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800">
          <p>
            Different ages, different countries, different skill levels. We meet every Thursday in a junior high library and take speaking seriously without taking ourselves too seriously.
          </p>
          <p>
            We compete at district contests. We cheer loudly for each other. And we give the kind of honest, useful feedback that actually helps people improve.
          </p>
        </div>
      </div>
    </section>
  )
}
