import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const SITE_TITLE = 'Gilbert Toastmasters - Club #499 | Public Speaking & Leadership'
const SITE_DESCRIPTION =
  'Join Gilbert Toastmasters and watch your public speaking skills skyrocket. Engaging meetings every Thursday at 7pm, Greenfield Jr High library. All are welcome!'
const OG_IMAGE = `${SITE_URL}/images/og-image.webp`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Gilbert Toastmasters',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Gilbert Toastmasters members at a Thursday meeting in the Greenfield Junior High library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&family=Corinthia:wght@400;700&family=Luxurious+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
