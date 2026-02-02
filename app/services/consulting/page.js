export const metadata = {
  title: 'AI Consulting Services - Leeuki',
  description: 'Strategic retail consulting services',
}

export default function ConsultingPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">AI Consulting Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Strategic retail consulting to help your business grow and thrive in today's competitive market.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Strategic Planning</h2>
              <p className="text-gray-600">
                Develop comprehensive strategies tailored to your retail business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Market Analysis</h2>
              <p className="text-gray-600">
                Deep dive into market trends and competitive landscape analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Operations Optimization</h2>
              <p className="text-gray-600">
                Streamline your operations for maximum efficiency and profitability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Growth Strategy</h2>
              <p className="text-gray-600">
                Scale your business with proven growth strategies and execution plans.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-6">
              Contact our consulting team to discuss how we can help transform your retail business.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
