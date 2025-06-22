"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Wrench,
  Flame,
  Thermometer,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { InteractiveHouse } from "@/components/interactive-house"
import { ContactForm } from "@/components/contact-form"
import { ClientButton } from "@/components/client-button"
import { useState } from "react"

export default function Home() {
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a1330" }}>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://gxciioabwrkahdfe.public.blob.vercel-storage.com/logos/pestellhero_transborder_new1-oIOiAYlrMXiQJ6x9JFpmG4jOeRtXll.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0a1330",
        }}
      >
        {/* Enhanced overlay for better mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70 md:from-black/70 md:via-transparent md:to-black/50"></div>

        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
            {/* Left side - Main content */}
            <div className="space-y-8 lg:pr-8">
              {/* Add mobile background container */}
              <div className="bg-black/70 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-6 md:p-0">
                {/* Company branding */}
                <div className="space-y-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-semibold inline-flex items-center">
                    <Shield className="mr-2 h-4 w-4" />
                    Gas Safe Registered
                  </Badge>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="block text-white drop-shadow-2xl">Pestell's</span>
                    <span className="block text-white drop-shadow-2xl">Gas Care</span>
                    <span
                      className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2"
                      style={{ color: "#307cb9" }}
                    >
                      Grantham
                    </span>
                  </h1>
                </div>

                {/* Service description */}
                <div className="space-y-4 max-w-2xl">
                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-lg">
                    Specialising in service and repair of <strong>natural gas and LPG appliances</strong> including
                    boilers, cookers, fires, and central heating systems.
                  </p>

                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-lg">
                    Always happy to help, just send us a message.
                  </p>

                  <div className="flex items-center space-x-2 text-orange-400">
                    <Clock className="h-5 w-5" />
                    <span className="text-lg font-semibold">24/7 emergency call-out available</span>
                  </div>
                </div>

                {/* Call-to-action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <ClientButton
                    size="lg"
                    className="text-white px-8 py-4 text-lg shadow-2xl font-semibold transform hover:scale-105 transition-all duration-200"
                    style={{ backgroundColor: "#307cb9" }}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 07872 809454
                  </ClientButton>

                  <ClientButton
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg shadow-2xl font-semibold transform hover:scale-105 transition-all duration-200 bg-black/20 backdrop-blur-sm"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </ClientButton>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge className="bg-black/40 backdrop-blur-sm text-white px-3 py-2 border border-white/20">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Fully Insured
                  </Badge>
                  <Badge className="bg-black/40 backdrop-blur-sm text-white px-3 py-2 border border-white/20">
                    <Star className="mr-2 h-4 w-4" />
                    5* Rated
                  </Badge>
                  <Badge className="bg-black/40 backdrop-blur-sm text-white px-3 py-2 border border-white/20">
                    <Shield className="mr-2 h-4 w-4" />
                    Est. 2021
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right side - Service highlights */}
            <div className="lg:pl-8 space-y-6">
              <div className="bg-black/60 md:bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#307cb9" }}>
                      <Flame className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Boiler Repairs</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#307cb9" }}>
                      <Wrench className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Installation</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#307cb9" }}>
                      <Thermometer className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Central Heating</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#307cb9" }}>
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">Safety Checks</span>
                  </div>
                </div>
              </div>

              {/* Emergency contact card */}
              <div className="bg-orange-600/95 md:bg-orange-600/90 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 shadow-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-white rounded-full">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Emergency Service</h4>
                </div>
                <p className="text-orange-100 mb-3">
                  Heating emergency? We're available 24/7 across Grantham and surrounding areas.
                </p>
                <div className="text-2xl font-bold text-white">07872 809454</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center opacity-70">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Pestell's Gas Care</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Established in 2021 and serving Grantham and the surrounding areas, we're your trusted local gas
                engineers specializing in natural gas and LPG appliances.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8" style={{ color: "#307cb9" }} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Gas Safe Registered</h3>
                      <p className="text-gray-300">
                        All our engineers are fully qualified and Gas Safe registered, ensuring your safety and peace of
                        mind.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Star className="h-8 w-8" style={{ color: "#307cb9" }} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Established Since 2021</h3>
                      <p className="text-gray-300">
                        Serving Grantham with a proven track record of reliable, professional service and customer
                        satisfaction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-8 w-8" style={{ color: "#307cb9" }} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Emergency Service</h3>
                      <p className="text-gray-300">
                        Available for emergency call-outs because we understand heating problems don't wait for
                        convenient times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8" style={{ color: "#307cb9" }} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Fully Insured</h3>
                      <p className="text-gray-300">
                        Comprehensive insurance coverage for complete protection and professional peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://gxciioabwrkahdfe.public.blob.vercel-storage.com/logos/Pestells_logo_trans-Nq1haSkrbvXz7jf7mUNS1VwSLLvIZO.png"
                  alt="Pestell's Gas Care - Professional Service"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div
                  className="absolute -bottom-6 -left-6 p-6 rounded-lg shadow-lg"
                  style={{ backgroundColor: "#307cb9" }}
                >
                  <div className="text-3xl font-bold text-white">5* Rated</div>
                  <div className="text-sm text-white">on Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ backgroundColor: "#0a1330" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Click on different areas of the house below to explore our comprehensive range of gas and heating
                services.
              </p>
            </div>

            <InteractiveHouse />

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card
                className="hover:shadow-lg transition-shadow border-l-4"
                style={{ backgroundColor: "#0a1330", borderLeftColor: "#307cb9" }}
              >
                <CardHeader>
                  <Flame className="h-12 w-12 mb-4" style={{ color: "#307cb9" }} />
                  <CardTitle className="text-white">Boiler Installation</CardTitle>
                  <CardDescription className="text-gray-300">
                    Professional boiler installation with full warranty and aftercare service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• New boiler installations</li>
                    <li>• Boiler replacements</li>
                    <li>• System upgrades</li>
                    <li>• Energy efficiency advice</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-shadow border-l-4"
                style={{ backgroundColor: "#0a1330", borderLeftColor: "#307cb9" }}
              >
                <CardHeader>
                  <Wrench className="h-12 w-12 mb-4" style={{ color: "#307cb9" }} />
                  <CardTitle className="text-white">Boiler Repairs</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fast, reliable boiler repair service to get your heating back up and running.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Emergency repairs</li>
                    <li>• Diagnostic services</li>
                    <li>• Parts replacement</li>
                    <li>• System troubleshooting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-shadow border-l-4"
                style={{ backgroundColor: "#0a1330", borderLeftColor: "#307cb9" }}
              >
                <CardHeader>
                  <Thermometer className="h-12 w-12 mb-4" style={{ color: "#307cb9" }} />
                  <CardTitle className="text-white">Central Heating</CardTitle>
                  <CardDescription className="text-gray-300">
                    Complete central heating solutions from installation to maintenance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• System installation</li>
                    <li>• Radiator fitting</li>
                    <li>• Pipe work</li>
                    <li>• System balancing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardHeader>
                  <Flame className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Gas Appliances</CardTitle>
                  <CardDescription>Service and repair of natural gas and LPG appliances for your home.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Gas cooker repairs</li>
                    <li>• Gas fire installation</li>
                    <li>• LPG appliance service</li>
                    <li>• Safety inspections</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch for a free quote or to schedule a service. We're here to help with all your gas and heating
                needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: "#307cb9" }}>
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p className="text-gray-300">07872 809454</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: "#307cb9" }}>
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-gray-300">pestellsgascare@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: "#307cb9" }}>
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Location</p>
                        <p className="text-gray-300">Grantham, Lincolnshire</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: "#307cb9" }}>
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Emergency Service</p>
                        <p className="text-gray-300">24/7 Available</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 rounded-lg border-l-4"
                  style={{ backgroundColor: "#0a1330", borderLeftColor: "#307cb9" }}
                >
                  <h4 className="font-semibold text-white mb-2">Emergency Call-Out</h4>
                  <p className="text-gray-300 mb-4">
                    Need urgent gas or heating assistance? We're available 24/7 for emergency call-outs.
                  </p>
                  <ClientButton style={{ backgroundColor: "#307cb9" }} className="hover:opacity-90">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency: 07872 809454
                  </ClientButton>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms" className="py-20" style={{ backgroundColor: "#0a1330" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h2>
              <Button
                onClick={() => setIsTermsOpen(!isTermsOpen)}
                variant="outline"
                className="flex items-center space-x-2 mx-auto border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                {isTermsOpen ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    <span>Hide Terms & Conditions</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    <span>Show Terms & Conditions</span>
                  </>
                )}
              </Button>
            </div>

            {isTermsOpen && (
              <div className="prose prose-lg max-w-none animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#307cb9" }}>
                      1. Service Agreement
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      All work carried out by Pestell's Gas Care is subject to these terms and conditions. By engaging
                      our services, you agree to be bound by these terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#307cb9" }}>
                      2. Qualifications & Insurance
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      All engineers are Gas Safe registered and fully insured. We carry comprehensive public liability
                      insurance and all work is guaranteed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#307cb9" }}>
                      3. Pricing & Payment
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      All quotes are valid for 30 days. Payment is due upon completion of work unless alternative
                      arrangements have been agreed in writing. We accept cash, cheque, and bank transfer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#307cb9" }}>
                      4. Warranty
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We provide a 12-month warranty on all workmanship. Manufacturer warranties apply to all parts and
                      equipment supplied.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#307cb9" }}>
                      5. Cancellation Policy
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Appointments can be cancelled with 24 hours notice. Emergency call-outs may be subject to a
                      call-out charge if cancelled within 2 hours of the agreed time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#307cb9" }}>
                      6. Health & Safety
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We comply with all relevant health and safety regulations. Customers must provide safe access to
                      work areas and inform us of any potential hazards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#307cb9" }}>
                      7. Data Protection
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We are committed to protecting your privacy and comply with GDPR regulations. Customer information
                      is kept confidential and used only for service delivery.
                    </p>
                  </div>
                </div>

                <div
                  className="mt-12 p-6 rounded-lg border-l-4"
                  style={{ backgroundColor: "#0a1330", borderLeftColor: "#307cb9" }}
                >
                  <p className="text-sm text-gray-300">
                    <strong>Last updated:</strong> January 2024
                    <br />
                    <strong>Contact:</strong> For any questions regarding these terms, please contact us at
                    pestellsgascare@gmail.com or 07872 809454.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="mb-4">
                  <Image
                    src="https://gxciioabwrkahdfe.public.blob.vercel-storage.com/logos/Pestells_logo_trans-Nq1haSkrbvXz7jf7mUNS1VwSLLvIZO.png"
                    alt="Pestell's Gas Care Logo"
                    width={160}
                    height={55}
                    className="h-14 w-auto"
                  />
                </div>
                <p className="text-gray-300 mb-4">
                  Your trusted Gas Safe registered engineers serving Grantham and surrounding areas.
                </p>
                <div className="flex space-x-4">
                  <Badge style={{ backgroundColor: "#307cb9" }}>Gas Safe Registered</Badge>
                  <Badge style={{ backgroundColor: "#307cb9" }}>Fully Insured</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="#home" className="hover:text-blue-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="hover:text-blue-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-blue-400 transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-blue-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#terms" className="hover:text-blue-400 transition-colors">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-300 mb-6">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>07872 809454</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>pestellsgascare@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Grantham, Lincolnshire</span>
                  </div>
                </div>

                {/* Gas Safe Registration */}
                <div className="flex flex-col items-start space-y-2">
                  <Image
                    src="/gas-safe-logo.png"
                    alt="Gas Safe Registered"
                    width={100}
                    height={50}
                    className="h-10 w-auto"
                  />
                  <p className="text-sm text-gray-400">Gas Safe Registration No: [Your Registration Number]</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Pestell's Gas Care - Grantham. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
