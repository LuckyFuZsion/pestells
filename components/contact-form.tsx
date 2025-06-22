"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function ContactForm() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show a loading skeleton until client-side hydration is complete
  if (!mounted) {
    return (
      <Card className="border-t-4 border-t-blue-600">
        <CardHeader>
          <CardTitle>Request a Free Quote</CardTitle>
          <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <div className="h-10 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse"></div>
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <div className="h-10 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse"></div>
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <div className="h-10 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse"></div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <div className="h-10 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse"></div>
            </div>

            <div>
              <Label htmlFor="service">Service Required</Label>
              <div className="h-10 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse"></div>
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <div className="h-24 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse"></div>
            </div>

            <div className="h-10 w-full rounded-md bg-gray-300 animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-t-4 border-t-blue-600">
      <CardHeader>
        <CardTitle>Request a Free Quote</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                className="focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Smith"
                className="focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="01476 123456"
              className="focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <Label htmlFor="service">Service Required</Label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500">
              <option>Select a service...</option>
              <option>Boiler Installation</option>
              <option>Boiler Repair</option>
              <option>Central Heating</option>
              <option>Gas Safety Check</option>
              <option>Emergency Call-out</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Please describe your requirements..."
              rows={4}
              className="focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 