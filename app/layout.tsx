import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BestFlightAlerts',
  description: 'Get the best flight deals from Chicago',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
