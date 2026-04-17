const steps = [
  {
    title: 'Sign Up',
    body: "Grab a name tag at the welcome table. We'll ask how you found us.",
  },
  {
    title: 'Meeting Starts',
    body: "Early on, you'll stand and introduce yourself—your name and what brought you here. It's brief and low-pressure.",
  },
  {
    title: 'Engage in the Meeting',
    body: "You'll see members give speeches and receive feedback. You may be invited to try Table Topics—1–2 minutes of impromptu speaking. You can pass, but most guests give it a shot.",
  },
  {
    title: 'Meeting Closure',
    body: "At the end, we'll ask what you thought. We welcome your feedback.",
  },
]

export default function WhatToExpect() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p
          className="text-sm md:text-base tracking-widest uppercase mb-4"
          style={{ color: '#772432', fontFamily: 'Montserrat, sans-serif' }}
        >
          What to expect when you visit
        </p>
        <h2
          className="text-3xl md:text-5xl font-black mb-6 text-black"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Your first visit
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-16 max-w-2xl">
          You&apos;ll watch, you&apos;ll learn—and yes, you might get called on.
        </p>

        <ol className="space-y-12">
          {steps.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10">
              <div
                className="text-3xl md:text-4xl font-black text-black tabular-nums"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3
                  className="text-xl md:text-2xl font-black text-black mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
