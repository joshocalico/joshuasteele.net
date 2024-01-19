import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Josh\'s Place',
  description: 'Josh is me, this is my place, and tales of my impact outside of it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[inter.className, styles.center].join(" ")}>
        {children}
      </body>
    </html>
  )
}
