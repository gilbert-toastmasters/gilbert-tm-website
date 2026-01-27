export default function WhatToExpect() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(to bottom, #3B0104, #781327)' }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-black text-white text-center"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Your first visit: You'll watch, you'll learn—and yes,<br /><span className="relative inline font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>
            you might get called on.
            <svg
              className="absolute left-0 -bottom-2 w-full h-3"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 6 Q 10 2, 20 6 T 40 6 T 60 6 T 80 6 T 100 6"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h2>

        {/* Timeline */}
        <div className="mt-20 space-y-16">

          {/* Step 1 - Sign Up (Left) */}
          <div className="flex justify-start">
            <div className="max-w-md text-left">
              <div className="flex items-center gap-6 mb-3">
                <span className="relative inline-block">
                  <span className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>1</span>
                  <svg className="absolute -inset-3 w-12 h-12 -translate-x-1" viewBox="0 0 40 40" fill="none">
                    <path d="M 5 22 C 3 12, 12 4, 22 3 C 32 2, 38 10, 37 20 C 36 30, 28 38, 18 37 C 8 36, 4 28, 5 22" stroke="#F2DF74" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Sign Up
                </h3>
              </div>
              <p className="text-lg text-white/90">
                Grab a name tag at the welcome table. <span className="font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>We'll ask how you found us—mostly because we're curious.</span>
              </p>
            </div>
          </div>

          {/* Arrow down-right */}
          <div className="flex justify-end md:justify-center -my-8 pr-4 md:pr-0">
            <svg className="w-16 h-12 arrow-1" viewBox="0 0 60 50" fill="none">
              <path d="M 10 5 C 20 10, 35 20, 45 35 C 48 40, 50 45, 52 48" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M 45 42 L 54 48 L 48 38" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          {/* Step 2 - Meeting Starts (Right) */}
          <div className="flex justify-end">
            <div className="max-w-md text-right">
              <div className="flex items-center justify-end gap-6 mb-3">
                <h3 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Meeting Starts
                </h3>
                <span className="relative inline-block">
                  <span className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>2</span>
                  <svg className="absolute -inset-3 w-12 h-12 -translate-x-1" viewBox="0 0 40 40" fill="none">
                    <path d="M 5 22 C 3 12, 12 4, 22 3 C 32 2, 38 10, 37 20 C 36 30, 28 38, 18 37 C 8 36, 4 28, 5 22" stroke="#F2DF74" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </div>
              <p className="text-lg text-white/90">
                Early on, you'll stand up, say your name, and share what brought you here. <span className="font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>It's brief. We promise not to make it weird.</span>
              </p>
            </div>
          </div>

          {/* Arrow down-left */}
          <div className="flex justify-center -my-8">
            <svg className="w-16 h-12 arrow-2" viewBox="0 0 60 50" fill="none">
              <path d="M 10 5 C 20 10, 35 20, 45 35 C 48 40, 50 45, 52 48" stroke="#F2DF74" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M 45 42 L 54 48 L 48 38" stroke="#F2DF74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          {/* Step 3 - Engage (Left) */}
          <div className="flex justify-start">
            <div className="max-w-md text-left">
              <div className="flex items-center gap-6 mb-3">
                <span className="relative inline-block">
                  <span className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>3</span>
                  <svg className="absolute -inset-3 w-12 h-12 -translate-x-1" viewBox="0 0 40 40" fill="none">
                    <path d="M 5 22 C 3 12, 12 4, 22 3 C 32 2, 38 10, 37 20 C 36 30, 28 38, 18 37 C 8 36, 4 28, 5 22" stroke="#F2DF74" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Engage in the Meeting
                </h3>
              </div>
              <p className="text-lg text-white/90">
                You'll watch members give speeches and get feedback. You might get called up for Table Topics—1-2 minutes of impromptu speaking. <span className="font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>You can pass, but it's more fun than it sounds.</span>
              </p>
            </div>
          </div>

          {/* Arrow down-right */}
          <div className="flex justify-center -my-8">
            <svg className="w-16 h-12 arrow-3" viewBox="0 0 60 50" fill="none">
              <path d="M 10 5 C 20 10, 35 20, 45 35 C 48 40, 50 45, 52 48" stroke="#00ff00" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M 45 42 L 54 48 L 48 38" stroke="#00ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          {/* Step 4 - Meeting Closure (Right) */}
          <div className="flex justify-end">
            <div className="max-w-md text-right">
              <div className="flex items-center justify-end gap-6 mb-3">
                <h3 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Meeting Closure
                </h3>
                <span className="relative inline-block">
                  <span className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>4</span>
                  <svg className="absolute -inset-3 w-12 h-12 -translate-x-1" viewBox="0 0 40 40" fill="none">
                    <path d="M 5 22 C 3 12, 12 4, 22 3 C 32 2, 38 10, 37 20 C 36 30, 28 38, 18 37 C 8 36, 4 28, 5 22" stroke="#F2DF74" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </div>
              <p className="text-lg text-white/90">
                At the end, we'll ask what you thought. <span className="font-normal" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>Be honest—we can take it.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
