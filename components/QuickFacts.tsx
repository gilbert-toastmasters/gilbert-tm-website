export default function QuickFacts() {
  return (
    <section className="bg-white border-y border-black/5 py-6 md:py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-6 md:gap-10 items-center">
          {/* WHEN */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#772432] mb-2">
              When
            </p>
            <p className="text-lg md:text-xl font-bold text-[#1C1C1C]">
              Thursdays &middot; 7:00 PM
            </p>
            <p className="text-sm text-[#1C1C1C]/60 mt-0.5">
              75 minutes. Year-round.
            </p>
          </div>

          {/* WHERE */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#772432] mb-2">
              Where
            </p>
            <p className="text-lg md:text-xl font-bold text-[#1C1C1C]">
              Greenfield Jr. High Library
            </p>
            <p className="text-sm text-[#1C1C1C]/60 mt-0.5">
              101 S Greenfield Rd, Gilbert, AZ 85296
            </p>
          </div>

          {/* QUESTIONS */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#772432] mb-2">
              Questions
            </p>
            <p className="text-lg md:text-xl font-bold text-[#1C1C1C] break-words">
              <a
                href="mailto:vpm-499@toastmastersclubs.org"
                className="hover:text-[#772432] transition-colors"
              >
                vpm-499@toastmastersclubs.org
              </a>
            </p>
          </div>

          {/* CTA pill */}
          <div className="md:justify-self-end">
            <span className="inline-block rounded-full bg-[#F2DF74] text-[#1C1C1C] font-semibold uppercase tracking-wider text-sm px-6 py-3">
              Visitors Welcome &middot; No RSVP
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
