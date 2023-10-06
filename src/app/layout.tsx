import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const description =
  'CS Student @TUM (best-in-tum), SWE Intern @QuantCo, SWE working student @FINN, Studienstiftung and Max-Weber scholarship holder'

export const metadata: Metadata = {
  title: 'Robin Holzinger',
  description: description
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Robin Holzinger</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
