import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Consulting Services',
      description: 'Strategic retail consulting to help your business grow',
      href: '/services/consulting',
      classNumber: 'Class 035',
    },
    {
      title: 'Retail Intelligence',
      description: 'SaaS platform for comprehensive retail analytics',
      href: '/services/retail-intelligence',
      classNumber: 'Class 042 - SaaS',
    },
    {
      title: 'Insight Bot',
      description: 'AI-powered chatbot for instant retail insights',
      href: '/services/insight-bot',
      classNumber: 'Class 042 - Chatbot',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Leeuki</h1>
          <p className="text-xl mb-8">Empowering retailers with data-driven insights</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Leeuki?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">Make informed decisions with comprehensive analytics</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Grow your business with our flexible platform</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Expert Consulting</h3>
              <p className="text-gray-600">Work with industry-leading retail strategists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
