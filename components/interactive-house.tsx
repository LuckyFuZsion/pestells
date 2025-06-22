"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Flame, Thermometer, Wrench, Shield, CheckCircle, Zap, Droplets, X } from "lucide-react"

const serviceAreas = [
  {
    id: "boiler",
    name: "Boiler Room",
    icon: Flame,
    color: "bg-blue-600",
    position: { top: "45%", left: "15%" },
    services: ["Boiler Installation", "Boiler Repairs", "Boiler Servicing", "System Upgrades"],
    description: "Complete boiler solutions from installation to maintenance and emergency repairs.",
  },
  {
    id: "heating",
    name: "Central Heating",
    icon: Thermometer,
    color: "bg-blue-500",
    position: { top: "35%", left: "45%" },
    services: ["Radiator Installation", "Pipe Work", "System Balancing", "Heating Controls"],
    description: "Full central heating systems designed for maximum efficiency and comfort.",
  },
  {
    id: "kitchen",
    name: "Kitchen Gas",
    icon: Zap,
    color: "bg-orange-500",
    position: { top: "55%", left: "70%" },
    services: ["Gas Hob Installation", "Gas Oven Fitting", "Gas Safety Checks", "Appliance Servicing"],
    description: "Safe installation and maintenance of all kitchen gas appliances.",
  },
  {
    id: "bathroom",
    name: "Bathroom Heating",
    icon: Droplets,
    color: "bg-orange-400",
    position: { top: "25%", left: "75%" },
    services: ["Heated Towel Rails", "Bathroom Radiators", "Underfloor Heating", "Hot Water Systems"],
    description: "Specialized heating solutions for bathrooms and wet areas.",
  },
  {
    id: "safety",
    name: "Gas Safety",
    icon: Shield,
    color: "bg-blue-700",
    position: { top: "65%", left: "30%" },
    services: ["Gas Safety Certificates", "Leak Detection", "Carbon Monoxide Testing", "Annual Safety Checks"],
    description: "Comprehensive gas safety inspections and certifications for peace of mind.",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: Wrench,
    color: "bg-orange-600",
    position: { top: "40%", left: "85%" },
    services: ["Annual Servicing", "Preventive Maintenance", "System Diagnostics", "Performance Optimization"],
    description: "Regular maintenance services to keep your systems running efficiently.",
  },
]

function InteractiveButton({ 
  area, 
  isSelected, 
  onClick 
}: { 
  area: typeof serviceAreas[0]
  isSelected: boolean
  onClick: () => void 
}) {
  const [mounted, setMounted] = useState(false)
  const Icon = area.icon

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${area.color} text-white shadow-lg flex items-center justify-center`}
        style={area.position}
      >
        <div className="h-6 w-6 bg-white/20 rounded animate-pulse"></div>
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${area.color} text-white shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center group`}
      style={area.position}
    >
      <Icon className="h-6 w-6" />
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {area.name}
      </div>
    </button>
  )
}

export function InteractiveHouse() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  const selectedService = serviceAreas.find((area) => area.id === selectedArea)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* House SVG */}
        <div className="relative bg-gradient-to-b from-blue-50 to-orange-50 rounded-2xl p-8 min-h-[500px] overflow-hidden border-2 border-blue-100">
          {/* House Structure */}
          <svg viewBox="0 0 400 300" className="w-full h-full max-w-2xl mx-auto" style={{ minHeight: "400px" }}>
            {/* House Base */}
            <rect x="50" y="150" width="300" height="120" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />

            {/* Roof */}
            <polygon points="40,150 200,50 360,150" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />

            {/* Chimney */}
            <rect x="280" y="80" width="20" height="40" fill="#6B7280" stroke="#374151" strokeWidth="1" />

            {/* Door */}
            <rect x="180" y="200" width="40" height="70" fill="#92400E" stroke="#78350F" strokeWidth="2" />
            <circle cx="210" cy="235" r="2" fill="#FCD34D" />

            {/* Windows */}
            <rect x="80" y="180" width="40" height="40" fill="#FED7AA" stroke="#F97316" strokeWidth="2" />
            <rect x="280" y="180" width="40" height="40" fill="#FED7AA" stroke="#F97316" strokeWidth="2" />
            <rect x="160" y="120" width="30" height="25" fill="#FED7AA" stroke="#F97316" strokeWidth="2" />
            <rect x="210" y="120" width="30" height="25" fill="#FED7AA" stroke="#F97316" strokeWidth="2" />

            {/* Window Crosses */}
            <line x1="100" y1="180" x2="100" y2="220" stroke="#F97316" strokeWidth="1" />
            <line x1="80" y1="200" x2="120" y2="200" stroke="#F97316" strokeWidth="1" />
            <line x1="300" y1="180" x2="300" y2="220" stroke="#F97316" strokeWidth="1" />
            <line x1="280" y1="200" x2="320" y2="200" stroke="#F97316" strokeWidth="1" />
          </svg>

          {/* Interactive Service Points */}
          {serviceAreas.map((area) => (
            <InteractiveButton
              key={area.id}
              area={area}
              isSelected={selectedArea === area.id}
              onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
            />
          ))}

          {/* Service Details Overlay */}
          {selectedService && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
              <Card className="w-full max-w-2xl border-2 border-blue-200 shadow-xl bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-full ${selectedService.color} text-white flex items-center justify-center`}
                      >
                        <selectedService.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{selectedService.name}</CardTitle>
                        <CardDescription className="text-lg text-gray-600">{selectedService.description}</CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedArea(null)}
                      className="h-8 w-8 p-0 hover:bg-gray-100"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {selectedService.services.map((service, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center space-y-3">
                      <Badge className="bg-blue-100 text-blue-800 w-fit">Gas Safe Registered</Badge>
                      <Badge className="bg-orange-100 text-orange-800 w-fit">Fully Insured</Badge>
                      <Badge className="bg-blue-100 text-blue-800 w-fit">24/7 Emergency</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {!selectedService && (
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">
              👆 Click on the colored dots above to explore our services in different areas of your home
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
