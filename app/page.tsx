import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Shield, Wrench, Flame, Thermometer, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { InteractiveHouse } from "@/components/interactive-house"
import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { ClientButton } from "@/components/client-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://gxciioabwrkahdfe.public.blob.vercel-storage.com/logos/Pestells-l7Dzdg8GveSDsZjNvcvvXCkAblsshE.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Unified Text Container */}
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                Gas Safe Registered Engineers
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                Pestell's Gas Care
                <span className="block text-3xl md:text-4xl font-normal text-blue-200 mt-2">Grantham</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Specializing in service and repair of natural gas and LPG appliances including boilers, cookers, fires, and central heating systems. Always happy to help - just send us a message. 24/7 emergency call-out available across Grantham and surrounding areas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <ClientButton size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 07872 809454
                </ClientButton>
                <ClientButton
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg"
                >
                  Get Free Quote
                </ClientButton>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Pestell's Gas Care</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Established in 2021 and serving Grantham and the surrounding areas, we're your trusted local
                gas engineers specializing in natural gas and LPG appliances.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Gas Safe Registered</h3>
                      <p className="text-gray-600">
                        All our engineers are fully qualified and Gas Safe registered, ensuring your safety and peace of
                        mind.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Star className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Established Since 2021</h3>
                      <p className="text-gray-600">
                        Serving Grantham with a proven track record of reliable, professional service and customer satisfaction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
                      <p className="text-gray-600">
                        Available for emergency call-outs because we understand heating problems don't wait for
                        convenient times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
                      <p className="text-gray-600">
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
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">5* Rated</div>
                  <div className="text-sm">on Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Click on different areas of the house below to explore our comprehensive range of gas and heating
                services.
              </p>
            </div>

            <InteractiveHouse />

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                <CardHeader>
                  <Flame className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Boiler Installation</CardTitle>
                  <CardDescription>
                    Professional boiler installation with full warranty and aftercare service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• New boiler installations</li>
                    <li>• Boiler replacements</li>
                    <li>• System upgrades</li>
                    <li>• Energy efficiency advice</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle>Boiler Repairs</CardTitle>
                  <CardDescription>
                    Fast, reliable boiler repair service to get your heating back up and running.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Emergency repairs</li>
                    <li>• Diagnostic services</li>
                    <li>• Parts replacement</li>
                    <li>• System troubleshooting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                <CardHeader>
                  <Thermometer className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Central Heating</CardTitle>
                  <CardDescription>
                    Complete central heating solutions from installation to maintenance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
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
                  <CardDescription>
                    Service and repair of natural gas and LPG appliances for your home.
                  </CardDescription>
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
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to discuss your gas and heating needs? Contact us today for a free, no-obligation quote.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-gray-600">07872 809454</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-gray-600">pestellsgascare@gmail.com</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <div>
                        <div className="font-semibold">Service Area</div>
                        <div className="text-gray-600">Grantham & Surrounding Areas</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <div>
                        <div className="font-semibold">Hours</div>
                        <div className="text-gray-600">
                          Mon-Fri: 8AM-6PM
                          <br />
                          Emergency: 24/7
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Call-Out</h4>
                  <p className="text-gray-600 mb-4">
                    Need urgent gas or heating assistance? We're available 24/7 for emergency call-outs.
                  </p>
                  <ClientButton className="bg-orange-500 hover:bg-orange-600">
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
      <section id="terms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Terms & Conditions</h2>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">1. Service Agreement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All work carried out by Pestell's Gas Care is subject to these terms and conditions. By engaging our
                    services, you agree to be bound by these terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">2. Qualifications & Insurance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All engineers are Gas Safe registered and fully insured. We carry comprehensive public liability
                    insurance and all work is guaranteed.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">3. Pricing & Payment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All quotes are valid for 30 days. Payment is due upon completion of work unless alternative
                    arrangements have been agreed in writing. We accept cash, cheque, and bank transfer.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">4. Warranty</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide a 12-month warranty on all workmanship. Manufacturer warranties apply to all parts and
                    equipment supplied.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">5. Cancellation Policy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Appointments can be cancelled with 24 hours notice. Emergency call-outs may be subject to a call-out
                    charge if cancelled within 2 hours of the agreed time.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">6. Health & Safety</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We comply with all relevant health and safety regulations. Customers must provide safe access to
                    work areas and inform us of any potential hazards.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">7. Data Protection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to protecting your privacy and comply with GDPR regulations. Customer information
                    is kept confidential and used only for service delivery.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-l-blue-600">
                <p className="text-sm text-gray-600">
                  <strong>Last updated:</strong> January 2024
                  <br />
                  <strong>Contact:</strong> For any questions regarding these terms, please contact us at
                  pestellsgascare@gmail.com or 07872 809454.
                </p>
              </div>
            </div>
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
                  <Badge className="bg-blue-600">Gas Safe Registered</Badge>
                  <Badge className="bg-orange-500">Fully Insured</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-300">
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
