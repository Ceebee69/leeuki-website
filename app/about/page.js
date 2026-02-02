export const metadata = {
  title: 'About Us - Leeuki',
  description: 'Learn about Leeuki and our mission to empower retailers',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">About Leeuki</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Empowering retailers with data-driven insights and strategic consulting
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Leeuki, we believe that every retailer deserves access to powerful analytics and
                strategic insights that drive growth. Our mission is to democratize retail intelligence,
                making advanced data analytics and consulting services accessible to businesses of all sizes.
              </p>
              <p className="text-gray-700">
                We combine cutting-edge technology with deep retail expertise to help our clients make
                informed decisions, optimize operations, and achieve sustainable growth.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Consulting Services</h3>
                  <p className="text-gray-700">
                    Strategic consulting to help retailers navigate complex challenges and identify
                    growth opportunities.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Retail Intelligence Platform</h3>
                  <p className="text-gray-700">
                    Comprehensive SaaS platform providing real-time analytics and insights for modern retailers.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
                  <p className="text-gray-700">
                    Leveraging artificial intelligence to provide instant, actionable insights through
                    our Insight Bot.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Data-Driven Solutions</h3>
                  <p className="text-gray-700">
                    Custom solutions tailored to your specific retail needs and business objectives.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <div>
                    <strong className="text-lg">Innovation:</strong>
                    <p className="text-gray-700">
                      We stay at the forefront of retail technology and analytics.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <div>
                    <strong className="text-lg">Integrity:</strong>
                    <p className="text-gray-700">
                      We build trust through transparency and honest communication.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <div>
                    <strong className="text-lg">Excellence:</strong>
                    <p className="text-gray-700">
                      We deliver exceptional value and results for our clients.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <div>
                    <strong className="text-lg">Partnership:</strong>
                    <p className="text-gray-700">
                      We work collaboratively with our clients as trusted partners.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-gray-700 mb-6">
              Let's discuss how Leeuki can help transform your retail business.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
