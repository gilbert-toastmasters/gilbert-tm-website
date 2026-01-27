'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Vince D.',
    short: "With the assistance of fellow Toastmasters I learned ZOOM, and we've used it for three Christmas holidays with relatives across the country.",
    full: "When we replaced in-person Gilbert Toastmaster meetings due to Covid 19 with ZOOM, I didn't know what ZOOM was or how to use it. However, with the assistance of more savvy fellow Toastmasters I learned how to use this great two-way communication tool. I realized that ZOOM would be an excellent way to reach out to my relatives in western New York, Chicago, Cleveland, San Jose and Phoenix for Thanksgiving and Christmas. I found all relatives interested in participating, and we have used ZOOM for three Christmas holidays. Thanks Gilbert Toastmasters.",
    color: '#004165',
    textColor: 'white',
    rotation: '-4deg',
    icon: 'camera',
  },
  {
    name: 'Brendan S.',
    short: "They were friendly and welcoming, and made sure that all of the guests had a chance to participate.",
    full: "My neighbor invited me to go with him, and it was interesting. They were friendly and welcoming, and made sure that all of the guests (there were 4 or 5 of us) had a chance to participate.",
    color: '#F2DF74',
    textColor: '#1C1C1C',
    rotation: '3deg',
    icon: 'wave',
  },
  {
    name: 'Soumya P.',
    short: "Today, if I have confidence to speak to groups of people, that credit goes to GTM club members who helped me learn, grow, and think!",
    full: "After the very first meeting, when the club president asked me to describe what I thought of the meeting, all I said was \"My english was bad and I needed help to improve\". It did not take long for the club members to cheer me to join the club and empower myself to enjoy this journey. Today, if I have confidence to write about my journey, enjoy speaking to group of people, then that credit goes to GTM club members who have always helped me to learn, grow, speak, listen and think!",
    color: '#772432',
    textColor: 'white',
    rotation: '-2deg',
    icon: 'star',
  },
  {
    name: 'David S.',
    short: "With every speech, every competition, I expand my Toastmasters net worth. Enriching my life, providing a valuable example to my daughter.",
    full: "With every speech, every competition, every Toastmasters leadership Institute I attend, every officer role I fill, and every guest speaker spot I complete I expand my toastmasters net worth. Enriching my life, providing a valuable example to my daughter of building lifelong skills. I know why I joined, I know why I stay, wouldn't you benefit from joining my tribe? I challenge you to find out.",
    color: '#006094',
    textColor: 'white',
    rotation: '4deg',
    icon: 'heart',
  },
  {
    name: 'Guacy B.',
    short: "Within this welcoming community, I not only found lasting friendships but also honed my leadership abilities in ways I never imagined.",
    full: "Beginning my journey with Gilbert Toastmasters, I aimed to enhance my speaking skills. However, what I discovered was beyond my expectations. Within this welcoming community, I not only found lasting friendships but also honed my leadership abilities in ways I never imagined. Toastmasters is more than just a platform for communication; it's a nurturing environment where every gathering ignites growth and resilience. Through Toastmasters, I've witnessed the transformative power of support and encouragement, both in my professional pursuits and personal life. It's a reminder that each of us holds untapped potential, waiting to be unlocked within a community that fosters growth and inspires greatness.",
    color: '#A9B2B1',
    textColor: '#1C1C1C',
    rotation: '-3deg',
    icon: 'smile',
  },
]

function Icon({ type, color }: { type: string; color: string }) {
  const strokeColor = color === '#F2DF74' || color === '#A9B2B1' ? '#1C1C1C' : '#ffffff'

  switch (type) {
    case 'camera':
      return (
        <svg viewBox="0 0 50 50" className="w-14 h-14">
          <rect x="8" y="15" width="34" height="25" rx="4" fill={color} stroke={strokeColor} strokeWidth="2"/>
          <circle cx="25" cy="27" r="8" fill="none" stroke={strokeColor} strokeWidth="2"/>
          <rect x="18" y="10" width="14" height="7" rx="2" fill={color} stroke={strokeColor} strokeWidth="2"/>
        </svg>
      )
    case 'wave':
      return (
        <svg viewBox="0 0 50 50" className="w-14 h-14">
          <path d="M15 35 C15 25, 20 20, 25 20 L25 10 C25 8, 28 8, 28 10 L28 18 L31 12 C31 10, 34 10, 34 12 L31 22 L35 16 C35 14, 38 14, 38 16 L34 26 L38 22 C38 20, 41 20, 41 22 L36 32 C34 38, 28 40, 22 38 C18 36, 15 32, 15 35" fill={color} stroke={strokeColor} strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 50 50" className="w-14 h-14">
          <path d="M25 5 L30 18 L44 20 L34 30 L36 44 L25 38 L14 44 L16 30 L6 20 L20 18 Z" fill={color} stroke={strokeColor} strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    case 'heart':
      return (
        <svg viewBox="0 0 50 50" className="w-14 h-14">
          <path d="M25 42 C15 32, 5 25, 5 15 C5 8, 12 5, 18 8 C22 10, 25 15, 25 15 C25 15, 28 10, 32 8 C38 5, 45 8, 45 15 C45 25, 35 32, 25 42" fill={color} stroke={strokeColor} strokeWidth="2"/>
        </svg>
      )
    case 'smile':
      return (
        <svg viewBox="0 0 50 50" className="w-14 h-14">
          <circle cx="25" cy="25" r="20" fill={color} stroke={strokeColor} strokeWidth="2"/>
          <circle cx="18" cy="20" r="3" fill={strokeColor}/>
          <circle cx="32" cy="20" r="3" fill={strokeColor}/>
          <path d="M15 30 Q25 40, 35 30" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    default:
      return null
  }
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="relative p-6 rounded-2xl shadow-lg"
      style={{
        backgroundColor: testimonial.color,
        color: testimonial.textColor,
      }}
    >
      {/* Sticker icon */}
      <div
        className="absolute -top-6 bg-white rounded-full p-2 shadow-md"
        style={{
          left: index % 2 === 0 ? '20%' : '60%',
        }}
      >
        <Icon type={testimonial.icon} color={testimonial.color} />
      </div>

      {/* Name */}
      <h3
        className="text-2xl font-black mb-2 mt-4 lowercase"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {testimonial.name}
      </h3>

      {/* Underline */}
      <div
        className="w-16 h-1 mb-4"
        style={{ backgroundColor: testimonial.textColor === 'white' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)' }}
      />

      {/* Quote */}
      <p className="text-base leading-relaxed">
        "{expanded ? testimonial.full : testimonial.short}"
      </p>

      {/* Read more button */}
      {testimonial.full !== testimonial.short && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-sm font-semibold underline hover:no-underline"
          style={{ color: testimonial.textColor }}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  )
}

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-16"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#1C1C1C' }}
        >
          What Our Members Say
        </h2>

        {/* Mobile: 2-2-1 layout */}
        <div className="md:hidden grid gap-6 px-4">
          {/* Top row - 2 cards */}
          <div className="grid grid-cols-2 gap-4">
            <div style={{ transform: 'rotate(-4deg)' }}>
              <TestimonialCard testimonial={testimonials[0]} index={0} />
            </div>
            <div style={{ transform: 'rotate(3deg)' }}>
              <TestimonialCard testimonial={testimonials[1]} index={1} />
            </div>
          </div>
          {/* Middle row - 2 cards */}
          <div className="grid grid-cols-2 gap-4">
            <div style={{ transform: 'rotate(-2deg)' }}>
              <TestimonialCard testimonial={testimonials[2]} index={2} />
            </div>
            <div style={{ transform: 'rotate(4deg)' }}>
              <TestimonialCard testimonial={testimonials[3]} index={3} />
            </div>
          </div>
          {/* Bottom row - 1 card centered */}
          <div className="flex justify-center">
            <div className="w-[60%]" style={{ transform: 'rotate(-3deg)' }}>
              <TestimonialCard testimonial={testimonials[4]} index={4} />
            </div>
          </div>
        </div>

        {/* Desktop: horizontal fan spread */}
        <div className="hidden md:flex justify-center items-start relative h-[500px]">
          {testimonials.map((testimonial, index) => {
            const rotations = ['-8deg', '-4deg', '0deg', '4deg', '8deg']

            // Calculate spread when hovering
            let translateX = 0
            if (hoveredIndex !== null && hoveredIndex !== index) {
              // Cards to the left of hovered card move left
              if (index < hoveredIndex) {
                translateX = -80
              }
              // Cards to the right of hovered card move right
              if (index > hoveredIndex) {
                translateX = 80
              }
            }

            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className="w-[280px] flex-shrink-0 -ml-12 first:ml-0 transition-all duration-300"
                style={{
                  transform: `rotate(${isHovered ? '0deg' : rotations[index]}) translateX(${translateX}px) translateY(${isHovered ? '-20px' : '0px'}) scale(${isHovered ? 1.05 : 1})`,
                  zIndex: isHovered ? 50 : index,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
