"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "#terms", label: "Terms" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#home")
              }}
              className="flex items-center space-x-2"
            >
              <Image
                src="https://gxciioabwrkahdfe.public.blob.vercel-storage.com/logos/Pestells_logo_trans-Nq1haSkrbvXz7jf7mUNS1VwSLLvIZO.png"
                alt="Pestell's Gas Care Logo"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 text-gray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Call Button */}
          <div className="hidden md:block">
            <Button style={{ backgroundColor: '#307cb9' }} className="hover:opacity-90 text-white" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              07872 809454
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-900">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="mb-6">
                    <Image
                      src="https://gxciioabwrkahdfe.public.blob.vercel-storage.com/logos/Pestells_logo_trans-Nq1haSkrbvXz7jf7mUNS1VwSLLvIZO.png"
                      alt="Pestell's Gas Care Logo"
                      width={160}
                      height={55}
                      className="h-14 w-auto"
                    />
                  </div>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className="text-lg font-medium text-gray-700 hover:text-blue-700 py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Call: 07872 809454
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
