"use client"

import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopBar() {
  return (
    <div className="bg-gray-900 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Contact Info */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-blue-400" />
            <span>07872 809454</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-blue-400" />
            <span>info@pestellsgascare.co.uk</span>
          </div>
        </div>

        {/* Right Side - Quote Button and Social Icons */}
        <div className="flex items-center space-x-4">
          <Button
            style={{ backgroundColor: "#307cb9" }}
            className="hover:opacity-90 text-white text-sm px-4 py-1 h-8"
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            REQUEST A QUOTE
          </Button>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
