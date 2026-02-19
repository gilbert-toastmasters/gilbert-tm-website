'use client'

import BeholdWidget from '@behold/react'

export default function InstagramFeed() {
  // Replace with your Behold feed ID from behold.so
  const BEHOLD_FEED_ID = 'YOUR_FEED_ID_HERE'

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#1C1C1C' }}
        >
          See What We're Up To
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Follow us{' '}
          <a
            href="https://www.instagram.com/gilberttm499/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#772432] hover:underline"
          >
            @gilberttm499
          </a>
        </p>

        <BeholdWidget feedId={BEHOLD_FEED_ID} />
      </div>
    </section>
  )
}
