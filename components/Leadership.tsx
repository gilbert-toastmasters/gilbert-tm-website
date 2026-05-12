import Image from 'next/image'
import FAQ, { FAQItem } from './FAQ'

type Socials = {
  facebook?: string
  instagram?: string
  linkedin?: string
  website?: string
}

type Officer = {
  role: string
  name: string
  blurb: string
  email: string
  image: string
  socials?: Socials
}

const OFFICERS: Officer[] = [
  {
    role: 'President',
    name: 'Elle Quitevis',
    blurb:
      'Big-picture club direction. Partnerships, long-term plans, and anything you want a final word on.',
    email: 'president-499@toastmastersclubs.org',
    image: '/images/officers/elle-quitevis.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/in/elle-quitevis/',
    },
  },
  {
    role: 'VP of Education',
    name: 'Damian Carrillo',
    blurb:
      'Speeches and the schedule. Tell the VPE when you will be out, or when you want to talk through your Pathways path.',
    email: 'vpe-499@toastmastersclubs.org',
    image: '/images/officers/damian-carrillo.webp',
  },
  {
    role: 'VP of Membership',
    name: 'Vincent Feutrier',
    blurb:
      'Joining, leaving, or anything in between. The VPM is the first person to talk to if you are a guest thinking about becoming a member.',
    email: 'vpm-499@toastmastersclubs.org',
    image: '/images/officers/vincent-feutrier.webp',
  },
  {
    role: 'VP of Public Relations',
    name: 'Marie Feutrier',
    blurb:
      'Social media, the blog, and everything outside the club. Tell the VPPR if you want to write a post, have something to share, or are talking to the press.',
    email: 'vppr-499@toastmastersclubs.org',
    image: '/images/officers/marie-feutrier.webp',
    socials: {
      instagram: 'https://www.instagram.com/marie.feutrier',
      linkedin: 'https://www.linkedin.com/in/marie-feutrier-mh05',
      website: 'https://headshotsbymarie.com',
    },
  },
  {
    role: 'VP of Mentoring',
    name: 'Rajeev Dave',
    blurb:
      'Finding a mentor. Tell the VP of Mentoring who you admire as a speaker and what you want to work on. He pairs you with someone who fits.',
    email: 'officers-499@toastmastersclubs.org',
    image: '/images/officers/rajeev-dave.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rajeev-davé-0b920/',
    },
  },
  {
    role: 'VP of Technology',
    name: 'Rajeev Dave',
    blurb:
      'The scheduler and the website. Broken link, signup glitch, cannot see your slot? Rajeev is the person.',
    email: 'officers-499@toastmastersclubs.org',
    image: '/images/officers/rajeev-dave.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rajeev-davé-0b920/',
    },
  },
  {
    role: 'Secretary',
    name: 'Emma Wetherell',
    blurb:
      'Attendance and minutes. Most members never need to contact the secretary directly, but the records they keep decide the year-end attendance awards.',
    email: 'secretary-499@toastmastersclubs.org',
    image: '/images/officers/emma-wetherell.webp',
  },
  {
    role: 'Treasurer',
    name: 'Brenda Careaga',
    blurb:
      'Dues and money in general. The treasurer handles payments, due dates, and anything financial.',
    email: 'treasurer-499@toastmastersclubs.org',
    image: '/images/officers/brenda-careaga.webp',
  },
  {
    role: 'Sergeant-at-Arms',
    name: 'Dave Zegen',
    blurb:
      'Meeting setup. If you are presenting and need the projector or a specific room setup, tell the SAA ahead of time.',
    email: 'saa-499@toastmastersclubs.org',
    image: '/images/officers/dave-zegen.webp',
    socials: {
      facebook: 'https://www.facebook.com/TheZegen/',
      instagram: 'https://www.instagram.com/thezegen/',
      linkedin: 'https://www.linkedin.com/in/dzegen/',
      website: 'https://allgoodaz.com/',
    },
  },
  {
    role: 'Immediate Past President',
    name: 'Marie Feutrier',
    blurb:
      'Officer candidates and leadership transitions. If you are curious about running for a role next term, this is the conversation.',
    email: 'ipp-499@toastmastersclubs.org',
    image: '/images/officers/marie-feutrier.webp',
    socials: {
      instagram: 'https://www.instagram.com/marie.feutrier',
      linkedin: 'https://www.linkedin.com/in/marie-feutrier-mh05',
      website: 'https://headshotsbymarie.com',
    },
  },
]

const CONTACT_FAQS: FAQItem[] = [
  {
    question: 'Need to schedule a speech or discuss your Pathways progress?',
    answer: (
      <>
        <span className="font-semibold text-[#1C1C1C]">VP of Education</span> —{' '}
        <a href="mailto:vpe-499@toastmastersclubs.org" className="text-[#772432] underline hover:no-underline">
          vpe-499@toastmastersclubs.org
        </a>
      </>
    ),
  },
  {
    question: 'Looking for a mentor or want to become one?',
    answer: (
      <>
        <span className="font-semibold text-[#1C1C1C]">VP of Mentoring</span> — check the weekly schedule email for the current officer&rsquo;s contact info.
      </>
    ),
  },
  {
    question: 'Thinking about joining or have questions about membership?',
    answer: (
      <>
        <span className="font-semibold text-[#1C1C1C]">VP of Membership</span> —{' '}
        <a href="mailto:vpm-499@toastmastersclubs.org" className="text-[#772432] underline hover:no-underline">
          vpm-499@toastmastersclubs.org
        </a>
      </>
    ),
  },
  {
    question: 'Questions about dues or payments?',
    answer: (
      <>
        <span className="font-semibold text-[#1C1C1C]">Treasurer</span> —{' '}
        <a href="mailto:treasurer-499@toastmastersclubs.org" className="text-[#772432] underline hover:no-underline">
          treasurer-499@toastmastersclubs.org
        </a>
      </>
    ),
  },
  {
    question: 'Need the projector set up or have a question about the meeting space?',
    answer: (
      <>
        <span className="font-semibold text-[#1C1C1C]">Sergeant-at-Arms</span> —{' '}
        <a href="mailto:saa-499@toastmastersclubs.org" className="text-[#772432] underline hover:no-underline">
          saa-499@toastmastersclubs.org
        </a>
      </>
    ),
  },
  {
    question: 'Something about the website, social media, or the blog?',
    answer: (
      <>
        <span className="font-semibold text-[#1C1C1C]">VP of Public Relations</span> —{' '}
        <a href="mailto:vppr-499@toastmastersclubs.org" className="text-[#772432] underline hover:no-underline">
          vppr-499@toastmastersclubs.org
        </a>
      </>
    ),
  },
  {
    question: 'Issues with the online schedule or club tech tools?',
    answer: (
      <>
        <span className="font-semibold text-[#1C1C1C]">VP of Technology</span> — check the weekly schedule email for the current officer&rsquo;s contact info.
      </>
    ),
  },
  {
    question: 'Anything else or not sure who to ask?',
    answer: (
      <>
        <span className="font-semibold text-[#1C1C1C]">Officers</span> —{' '}
        <a href="mailto:officers-499@toastmastersclubs.org" className="text-[#772432] underline hover:no-underline">
          officers-499@toastmastersclubs.org
        </a>
      </>
    ),
  },
]

export default function Leadership() {
  return (
    <>
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="text-sm font-bold tracking-[0.14em] uppercase text-[#772432] mb-4">
            Leadership Team
          </p>
          <h1 className="font-extrabold text-[#1C1C1C] text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
            Ten officers run Gilbert Toastmasters.
          </h1>
          <p className="text-lg md:text-xl text-[#1C1C1C]/80 leading-relaxed">
            Each one owns a piece of the club. Here is who handles what, and who to talk to when.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {OFFICERS.map((officer, i) => {
            const s = officer.socials
            const hasSocials = !!(s && (s.facebook || s.instagram || s.linkedin || s.website))
            const slug = officer.role.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
            return (
            <li id={slug} key={`${officer.role}-${i}`} className="flex flex-col border border-black/10 rounded-md overflow-hidden scroll-mt-24">
              <div className="flex items-start md:flex-col md:items-stretch flex-1">
              <div className="relative w-28 h-28 shrink-0 md:w-full md:h-auto md:aspect-[4/5] bg-[#f5f5f5]">
                <Image
                  src={officer.image}
                  alt={`${officer.name}, ${officer.role}`}
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-1">
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#772432] mb-2">
                  {officer.role}
                </p>
                <h2 className="font-extrabold text-[#1C1C1C] text-2xl leading-tight tracking-tight mb-3">
                  {officer.name}
                </h2>
                <div className="w-12 h-1 bg-[#F2DF74] mb-4" aria-hidden />
                <p className="text-[#1C1C1C]/80 text-base leading-relaxed mb-5">
                  {officer.blurb}
                </p>
                <div className="mt-auto pt-5 border-t-2 border-[#F2DF74]">
                  <a
                    href={`mailto:${officer.email}`}
                    className="text-sm text-[#772432] underline hover:no-underline break-all"
                  >
                    {officer.email}
                  </a>
                  {hasSocials && (
                    <div className="mt-4 flex items-center gap-4">
                      {officer.socials?.facebook && (
                        <a
                          href={officer.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${officer.name} on Facebook`}
                          className="text-[#1C1C1C] hover:text-[#772432] transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                      )}
                      {officer.socials?.instagram && (
                        <a
                          href={officer.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${officer.name} on Instagram`}
                          className="text-[#1C1C1C] hover:text-[#772432] transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </a>
                      )}
                      {officer.socials?.linkedin && (
                        <a
                          href={officer.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${officer.name} on LinkedIn`}
                          className="text-[#1C1C1C] hover:text-[#772432] transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {officer.socials?.website && (
                        <a
                          href={officer.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${officer.name}'s website`}
                          className="text-[#1C1C1C] hover:text-[#772432] transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              </div>
            </li>
            )
          })}
        </ul>

      </div>
    </section>

    <FAQ
      eyebrow="Who to contact"
      heading={<>Who handles<br />what.</>}
      faqs={CONTACT_FAQS}
    />
    </>
  )
}
