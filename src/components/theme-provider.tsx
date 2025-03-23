"use client"

import React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Definir la interfaz simplificada
interface ThemeProviderProps {
  children: React.ReactNode
  [key: string]: any
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 