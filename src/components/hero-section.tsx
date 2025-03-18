"use client"

import { Particles } from "@/components/ui/particles"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { InteractiveHoverButton } from "./ui/interactive-hover-button"
import { ThemeImage } from "@/lib/theme-image"

export function HeroSection() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000")
    setMounted(true)
  }, [theme])

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center px-6 text-center">
        {mounted && (
          <div className="relative h-48 w-48 mb-8 rounded-full overflow-hidden border-4 border-primary">
            <ThemeImage
              darkSrc="/images/me-dark.svg"
              lightSrc="/images/me-light.svg"
              alt="Francisco J. Rodriguez"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Francisco J. Rodriguez
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-xl">
          Financial & Data Specialist con enfoque en análisis de datos y finanzas.
          <br />
          Experiencia en Python, Excel, SQL y herramientas de IA.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a href="#projects" className="no-underline">
            <InteractiveHoverButton 
              text="Proyectos" 
              className="min-w-40 h-11 flex items-center justify-center text-base"
            />
          </a>
          <a href="#contact" className="no-underline">
            <InteractiveHoverButton 
              text="Contacto" 
              className="min-w-40 h-11 flex items-center justify-center text-base border-primary bg-transparent group-hover:text-white"
            />
          </a>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Desplazarse hacia abajo">
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  )
} 