const STATS = [
  { num: '1978', label: 'Meeting every Thursday since' },
  { num: '50+', label: 'Members from across the world' },
  { num: '15', label: "Years President's Distinguished" },
  { num: '499', label: 'Chartered Toastmasters Club number' },
]

export default function Stats() {
  return (
    <section className="bg-[#F5F5F5] py-24 md:py-32 border-y border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#772432] mb-3">
          Our track record
        </p>
        <h2 className="font-bold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.06] tracking-tight mb-12 md:mb-14">
          The numbers speak for themselves.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {STATS.map((stat) => (
            <div key={stat.num}>
              <div className="font-bold text-[#772432] text-6xl md:text-[76px] leading-none tracking-tight">
                {stat.num}
              </div>
              <p className="text-[#1C1C1C]/70 text-base mt-3 max-w-[220px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
