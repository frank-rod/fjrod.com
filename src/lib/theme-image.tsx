"use client"

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'

type ThemeImageProps = Omit<ImageProps, 'src'> & {
  darkSrc: string
  lightSrc: string
}

export const ThemeImage = ({
  darkSrc,
  lightSrc,
  alt,
  ...props
}: ThemeImageProps) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }
  
  const src = theme === 'dark' ? darkSrc : lightSrc
  
  return (
    <div className="relative h-full w-full">
      <img 
        src={src} 
        alt={alt} 
        className={props.className} 
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
  )
} 