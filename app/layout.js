import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'SI Command Center',
  description: 'A centralized admin dashboard to view all active SI projects in real time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased bg-[#0f0f0f] text-white">
        {children}
      </body>
    </html>
  )
}
