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
      <body>{children}</body>
    </html>
  )
}
