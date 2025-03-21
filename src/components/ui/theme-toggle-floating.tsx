"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export function ThemeToggleFloating() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <>
      {/* Toggle para pantallas medianas y grandes - a la derecha y más allá de la navbar */}
      <div className="fixed top-4 right-6 z-50 hidden md:block bg-background/80 backdrop-blur-lg rounded-full shadow-lg py-1 px-1">
        <ThemeToggle />
      </div>
      
      {/* Toggle para móviles */}
      <div className="fixed bottom-20 right-4 z-50 md:hidden bg-background/80 backdrop-blur-lg rounded-full shadow-lg py-1 px-1">
        <ThemeToggle />
      </div>
    </>
  )
} 