import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pestell's Gas Care - Grantham | Gas Safe Registered Engineers",
  description:
    "Professional gas services, boiler installations, and heating solutions across Grantham and surrounding areas. Gas Safe registered engineers with 15+ years experience. 24/7 emergency service available.",
  keywords:
    "gas engineer Grantham, boiler installation, central heating, gas safety, boiler repair, Gas Safe registered, emergency heating, Lincolnshire gas services",
  authors: [{ name: "Pestell's Gas Care" }],
  openGraph: {
    title: "Pestell's Gas Care - Grantham | Professional Gas & Heating Services",
    description:
      "Trusted Gas Safe registered engineers serving Grantham. Boiler installations, repairs, central heating, and 24/7 emergency service.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
