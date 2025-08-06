import type { Metadata } from 'next'
import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Dustin Tengdyantono - Robotics Engineer',
  description: 'Portfolio of Dustin Tengdyantono, Robotics Engineer and Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
