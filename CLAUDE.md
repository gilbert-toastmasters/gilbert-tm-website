# Gilbert Toastmasters Website

## Project Overview
Website for Gilbert Toastmasters Club #499, featuring a fun and professional design with Toastmasters brand colors and hand-drawn elements.

## Live Site
- **Vercel URL**: Deployed on Vercel
- **GitHub**: https://github.com/mariefeutrierspeaks-boop/gilbert-tm-website

## Tech Stack
- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Port**: 3200

## Brand Colors (Toastmasters)
```css
--tm-red: #772432;           /* Primary maroon */
--tm-blue-loyal: #004165;    /* Deep blue */
--tm-blue-blissful: #006094; /* Lighter blue */
--tm-grey: #A9B2B1;          /* Cool grey */
--tm-light-grey: #f5f5f5;    /* Light grey */
--tm-yellow: #F2DF74;        /* Accent yellow */
--dark-color: #1C1C1C;       /* Dark text */
--tm-maroon-deep: #3B0104;   /* Deep maroon (gradient) */
--tm-maroon-rich: #781327;   /* Rich maroon (gradient) */
```

## Fonts
- **Headlines**: Montserrat (bold/black weight)
- **Body**: Source Sans 3

## Project Structure
```
gilbert-tm/
├── app/
│   ├── globals.css          # Brand colors, responsive styles
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Nav with social icons
│   ├── Hero.tsx             # Video hero section
│   ├── MeetingInfo.tsx      # Meeting location/time with photos
│   ├── WhatToExpect.tsx     # 4-step timeline with hand-drawn elements
│   ├── Testimonials.tsx     # 5 tilted cards with hover spread
│   ├── FAQ.tsx              # Accordion FAQ
│   └── Footer.tsx           # White footer with disclaimer
├── public/images/
│   ├── hero-video.mov       # Hero background video
│   ├── Toastmasters-*.webp  # Logo and meeting photos
│   └── Greenfield-*.webp    # School entrance photo
└── CLAUDE.md                # This file
```

## Components

### Header
- Logo + "Gilbert Toastmasters" title
- Nav links: Home, Meeting Roles, For Members, Blog
- Social icons: Facebook, Instagram, LinkedIn, YouTube

### Hero
- Video background (0.5x playback speed)
- Responsive video cropping (mobile vs desktop)
- "Join a Meeting" button links to Toastmasters.org contact form

### MeetingInfo
- "Thursdays, 7pm" with hand-drawn circle
- Overlapping tilted photos of venue
- Google Calendar integration for meeting reminders
- Google Maps link for address

### WhatToExpect
- Maroon gradient background
- 4-step timeline: Sign Up → Meeting Starts → Engage → Meeting Closure
- Hand-drawn yellow circles around step numbers
- Colored arrows for debugging (RED=arrow-1, YELLOW=arrow-2, GREEN=arrow-3)
- Responsive arrow positioning in globals.css

### Testimonials
- 5 tilted cards in Toastmasters brand colors
- Mobile: 2-2-1 grid layout
- Desktop: horizontal fan spread with hover effect (cards spread apart on hover)
- "Read more" expandable text

### FAQ
- Maroon gradient background
- 12 accordion-style Q&As
- Yellow wiggle underline on title

### Footer
- White background, black text
- Social links, contact info
- Toastmasters disclaimer

## Pages to Create
- [x] /meeting-roles - Meeting roles explained
- [ ] /for-members - Members-only resources (currently the nav parent `/for-members` is a placeholder; submenu items exist)
- [x] /blog - Club blog/news

## Blog Posts

Posts live in `content/blog/` as markdown files. The slug is the filename without `.md`. Routes are generated at build via `generateStaticParams` in `app/blog/[slug]/page.tsx`.

### Required frontmatter
```yaml
---
title: "Sentence-case or title-case (preserve author's casing for republished posts)"
date: "2024-03-14"               # ISO YYYY-MM-DD
excerpt: "1–2 sentences, under 160 chars. Used in post lists and meta description."
author: "First Last"             # or "First L."
tags: ["speaking-tips"]          # array, at least one
---
```

### Conventions
- Slugs match the WordPress auto-slug pattern (`how-to-…`, `omg-i-have-to-…`) so the CloudFront redirect rule in `scripts/cloudfront-redirect-function.js` catches legacy `/yyyy/mm/dd/slug/` URLs and 301s them to `/blog/slug/`.
- Cross-linking: link **from blog posts to evergreen pages** (`/leadership#…`, `/meeting-roles#…`, `/evaluations`) — never link **from a page back to a blog post** (aging blog content can quietly point readers at stale info).
- Body H2/H3 are rendered with `.blog-prose` styles in `app/globals.css`. Use markdown — no inline HTML needed.
- A "More from the blog" section auto-renders the 3 most recent other posts at the bottom of each post.
- The blog post page emits JSON-LD `BlogPosting` schema, OpenGraph + Twitter card meta tags, and a `canonical` link.
- No featured image. Blog is text-only by design.

### Tags in use
`club`, `speaking-tips`, `member-stories`, `meeting-roles`, `evaluations`. Add new tags sparingly.

## TODO
- [ ] Change arrows back to white (currently colored for debugging)
- [ ] Create For Members landing page

## Development Commands
```bash
pnpm dev          # Start dev server on port 3200
pnpm build        # Production build
pnpm start        # Start production server
```

## Git Commands
```bash
git add .
git commit -m "message"
git push          # Requires GitHub auth
```

## Notes
- Video crops differently on mobile (center 5vh) vs desktop (center -20vh)
- Arrow positioning uses CSS classes in globals.css with mobile-first approach
- Testimonial cards have interactive hover effect that spreads other cards apart

---
*This file serves as persistent memory for Claude Code across sessions.*
