import Image from 'next/image'

export default function EmailOptIn() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 bg-white rounded-md shadow-md overflow-hidden">
          {/* Left panel — heading + body */}
          <div className="p-8 md:p-12 flex flex-col justify-center md:border-r-[6px] md:border-[#F2DF74] border-b-[6px] md:border-b-0">
            <h2 className="font-extrabold text-[#1C1C1C] text-2xl md:text-3xl leading-[1.15] tracking-tight mb-4">
              Get on the Club Emails
            </h2>
            <p className="text-[#1C1C1C]/80 text-base md:text-[17px] leading-relaxed">
              Shortly after joining, you&apos;ll receive an email from Toastmasters International with the subject line &ldquo;Pending Addition to Gilbert Toastmasters Website.&rdquo; Accept it. This adds you to the club&apos;s email list.
            </p>
          </div>

          {/* Right panel — full illustration */}
          <div className="bg-[#F5F5F5] relative min-h-[260px] md:min-h-0">
            <Image
              src="/images/emails-opt-in.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
