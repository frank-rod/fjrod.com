"use client"

import { Button } from "./ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { ThemeImage } from "@/lib/theme-image"

export function AboutSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 flex justify-center md:justify-start">
          {mounted && (
            <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-primary">
              <ThemeImage
                darkSrc="/images/me-dark.svg"
                lightSrc="/images/me-light.svg"
                alt="Francisco J. Rodriguez"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        
        <div className="md:col-span-3 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Sobre mí
          </h2>
          <p className="text-xl mb-4">
            Financial & Data Specialist con sólida experiencia en análisis de datos.
          </p>
          <p className="text-muted-foreground mb-6">
            Profesional con experiencia en Python, Excel, SQL y herramientas de IA.
            Aprendizaje rápido, enfoque en análisis numéricos y adaptable en entornos dinámicos.
            Apasionado por transformar datos en insights accionables para impulsar el crecimiento y la eficiencia del negocio.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:tu@email.com">
                <Mail className="mr-2 h-4 w-4" />
                Contacto
              </a>
            </Button>
            <Button variant="default" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 