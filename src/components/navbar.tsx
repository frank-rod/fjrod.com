"use client"

import { useState, useEffect } from "react"
import { BookOpen, FileText, Briefcase, Phone, User, GraduationCap, Lightbulb } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { useTheme } from "next-themes"
import { ThemeImage } from "@/lib/theme-image"
import { ThemeToggleFloating } from "@/components/ui/theme-toggle-floating"
import { REMOTE_IMAGES } from "@/lib/remote-images"

export function Navbar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Sobre mí', url: '#about', icon: User },
    { name: 'Proyectos', url: '#projects', icon: FileText },
    { name: 'Habilidades', url: '#skills', icon: Lightbulb },
    { name: 'Experiencia', url: '#experience', icon: Briefcase },
    { name: 'Educación', url: '#education', icon: GraduationCap },
    { name: 'Contacto', url: '#contact', icon: Phone }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {mounted && (
            <div className="relative h-8 w-32">
              <ThemeImage
                darkSrc={REMOTE_IMAGES.logoDarkTheme}
                lightSrc={REMOTE_IMAGES.logoLightTheme}
                alt="Logo Francisco J. Rodriguez"
                className="object-contain"
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 z-[60]">
          {/* Este espacio queda vacío o puedes añadir otros elementos */}
        </div>
      </div>
      
      <NavBar items={navItems} className="sm:right-24" />
      
      <ThemeToggleFloating />
    </header>
  )
} 