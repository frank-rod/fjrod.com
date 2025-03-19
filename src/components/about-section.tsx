"use client"

import { Button } from "./ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { ThemeImage } from "@/components/theme-image"
import { REMOTE_IMAGES } from "@/lib/remote-images"

// Enlaces sociales
const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/fjrodriguez00/',
  github: 'https://github.com/frank-rod',
  email: 'fjrodriguez00@outlook.com',
  cv: 'https://drive.google.com/file/d/1PSIA4f9dRtLjQ-kB88Sg1F62PZSjfvas/view?usp=sharing'
}

export function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 flex justify-center md:justify-start">
          {mounted && (
            <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-primary shadow-lg mx-auto md:mx-0 p-2 bg-background">
              <ThemeImage
                darkSrc={REMOTE_IMAGES.profileDark}
                lightSrc={REMOTE_IMAGES.profileLight}
                alt="Francisco J. Rodriguez"
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          )}
        </div>
        
        <div className="md:col-span-3 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Sobre mí
          </h2>
          <p className="text-xl mb-4 font-medium">
            Financial & Data Specialist | Expertise en análisis y optimización de negocios
          </p>
          <p className="text-muted-foreground mb-6">
            Profesional con experiencia en Python, SQL, Excel y herramientas de IA. Destacado por aprendizaje rápido, pensamiento analítico y capacidad de adaptación en entornos dinámicos. Apasionado por convertir datos en valor, impulsando crecimiento y eficiencia empresarial a través del análisis numérico y la automatización.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button variant="outline" size="sm" asChild>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${SOCIAL_LINKS.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contacto
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href={SOCIAL_LINKS.cv} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}