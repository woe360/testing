'use client'

import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

// Note: metadata is only available in server components
// export const metadata: Metadata = {
//   title: 'ISTQB Quiz App',
//   description: 'Practice ISTQB Foundation Level certification questions',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>ISTQB Quiz App</title>
        <meta name="description" content="Practice ISTQB Foundation Level certification questions" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 