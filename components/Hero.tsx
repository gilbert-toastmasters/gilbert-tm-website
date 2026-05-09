'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

const SLIDES = [
  {
    video: '/videos/hero/hero-1.mp4',
    text: "We've been doing this since 1978. President's Distinguished every year. But we're not here to impress you, we're here to help you get better.",
    rate: 0.5,
  },
  {
    video: '/videos/hero/hero-2.mp4',
    text: 'We bring pompoms to district events. We also give really good evaluations.',
    rate: 0.3,
  },
]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [index, setIndex] = useState(0)
  const slide = SLIDES[index]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.playbackRate = slide.rate
    }
  }, [slide.video, slide.rate])

  return (
    <section className="relative h-[calc(100vh-200px)] min-h-[500px] w-full overflow-hidden">
      {/* Mobile poster image (no autoplay video on cellular) */}
      <Image
        src="/images/hero-mobile.webp"
        alt="Gilbert Toastmasters meeting"
        fill
        priority
        sizes="(max-width: 767px) 100vw, 0px"
        className="object-cover md:hidden"
      />

      {/* Desktop video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = slide.rate
        }}
        onEnded={() => setIndex((i) => (i + 1) % SLIDES.length)}
        className="absolute inset-0 w-full h-full object-cover hero-video hidden md:block"
      >
        <source src={slide.video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center text-white text-left px-8 md:px-16">
        <p className="mb-4">
          <span className="inline-block bg-[#F2DF74] text-[#1C1C1C] text-lg md:text-xl tracking-widest uppercase px-3 py-1">
            Listen, Think, and Speak
          </span>
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Gilbert Toastmasters
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          {slide.text}
        </p>
        <div className="flex items-center gap-5 mb-8">
          <a
            href="https://www.facebook.com/groups/116646860626"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-[#F2DF74] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/gilberttm499/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-[#F2DF74] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/gilbert-toastmasters"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-[#F2DF74] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCENkiV73Ti42Xzz9m2v3Vlg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white hover:text-[#F2DF74] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
        <a
          href="#visit"
          className="inline-block bg-[#F2DF74] text-[#1C1C1C] font-bold uppercase tracking-wider text-base px-6 py-3 rounded-full hover:bg-white transition-colors"
        >
          Visit a meeting
        </a>
      </div>
    </section>
  )
}
