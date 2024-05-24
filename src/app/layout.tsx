

import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({ 
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heryweik',
  description: 'Portfolio of Heryweik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-white dark:bg-black transition-all duration-300 ease-in-out`} >
          {children}
      </body>
    </html>
  )
}
