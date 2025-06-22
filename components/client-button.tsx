"use client"

import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface ClientButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function ClientButton({ children, className, ...props }: ClientButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className || ''}`}>
        <div className="h-4 w-4 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse" style={{ width: '60px' }}></div>
      </div>
    )
  }

  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  )
} 