import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Your Trusted Heating & Plumbing Experts</h1>
          <p className="text-lg text-gray-700">Providing reliable and affordable services for your home.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Boiler Installation</h3>
              <p className="text-gray-600">Expert installation of energy-efficient boilers.</p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Plumbing Repairs</h3>
              <p className="text-gray-600">Fast and reliable plumbing repair services.</p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Central Heating</h3>
              <p className="text-gray-600">Installation and maintenance of central heating systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">Get in touch for a free quote or to book a service.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Description */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-400 text-center lg:text-left">
              We are a team of experienced heating and plumbing engineers dedicated to providing top-quality services.
            </p>
          </div>

          {/* Gas Safe Registration */}
          <div className="flex flex-col items-center lg:items-start space-y-4 mb-8">
            <Image src="/gas-safe-logo.png" alt="Gas Safe Registered" width={120} height={60} className="h-12 w-auto" />
            <p className="text-sm text-gray-600 text-center lg:text-left">
              Gas Safe Registration No: [Your Registration Number]
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400">Email: info@example.com</p>
            <p className="text-sm text-gray-400">Phone: 01234 567890</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">© 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
