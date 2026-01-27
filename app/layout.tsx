import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gilbert Toastmasters - Club #499 | Public Speaking & Leadership',
  description: 'Join Gilbert Toastmasters and watch your public speaking skills skyrocket. Engaging meetings every Thursday at 7pm, Greenfield Jr High library. All are welcome!',
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
