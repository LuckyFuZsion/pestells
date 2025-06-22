"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Flame, Wrench, Shield, Clock } from "lucide-react"
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
    { href: "#home", label: "HOME" },
    { href: "#services", label: "OUR SERVICES", highlight: true },
    { href: "#about", label: "ABOUT US" },
    { href: "#contact", label: "CONTACT US" },
    { href: "#terms", label: "TERMS" },
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Service Icons */}
          <div className="flex items-center space-x-8">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#home")
              }}
              className="flex-shrink-0"
            >
              <Image
                src="https://gxciioabwrkahdfe.public.blob.vercel-storage.com/logos/Pestells_logo_trans-Nq1haSkrbvXz7jf7mUNS1VwSLLvIZO.png"
                alt="Pestell's Gas Care Logo"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </Link>

            {/* Service Icons - Hidden on smaller screens */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300">
                <Flame className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-blue-600 ${
                    item.highlight ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
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
                      className={`text-lg font-medium py-2 ${
                        item.highlight ? "text-blue-600" : "text-gray-700 hover:text-blue-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button style={{ backgroundColor: "#307cb9" }} className="w-full hover:opacity-90 text-white">
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
