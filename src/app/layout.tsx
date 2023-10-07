import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { backgroundColor, description, name } from './const'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: name,
  description: description,
  themeColor: backgroundColor,
  authors: {
    name: 'Robin Holzinger',
    url: 'https://www.linkedin.com/in/robin-holzinger/'
  },
  applicationName: name
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
