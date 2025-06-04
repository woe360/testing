'use client'

import React from 'react'
import { ThemeProvider } from '../contexts/ThemeContext'

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
} 