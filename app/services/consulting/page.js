export const metadata = {
  title: 'AI Consulting Services - Leeuki',
  description: 'Strategic AI consulting services helping businesses implement, govern, and optimize artificial intelligence solutions.',
}

export default function ConsultingPage() {
  const services = [
    {
      title: 'AI Strategy & Roadmap',
      description: 'Develop a comprehensive AI implementation strategy aligned with your business objectives, including technology selection, resource planning, and milestone definitions.',
      icon: '🎯',
    },
    {
      title: 'AI Governance & Risk Assessment',
      description: 'Establish robust AI governance frameworks, conduct risk assessments, and implement responsible AI practices that meet regulatory requirements.',
      icon: '🛡️',
    },
    {
      title: 'Data Strategy & Analytics',
      description: 'Design data architectures, implement analytics pipelines, and create actionable insights that drive informed decision-making.',
      icon: '📊',
    },
    {
      title: 'AI Vendor Selection & Integration',
      description: 'Evaluate AI vendors, negotiate contracts, and oversee seamless integration of AI solutions into your existing technology stack.',
      icon: '🔗',
    },
    {
      title: 'AI Training & Enablement',
      description: 'Upskill your teams with customized AI literacy programs, from executive briefings to hands-on technical workshops.',
      icon: '🎓',
    },
    {
      title: 'Use Case Development',
      description: 'Identify, prioritize, and develop high-impact AI use cases with clear ROI metrics and implementation plans.',
      icon: '💡',
    },
  ]

  const packages = [
    {
      name: 'Discovery Session',
      duration: 'Half Day (4 hours)',
      price: '$1,400',
      description: 'Ideal for initial AI readiness assessment',
      features: [
        'AI maturity assessment',
        'Opportunity identification',
        'Quick-win recommendations',
        'Executive summary report',
      ],
    },
    {
      name: 'Strategy Sprint',
      duration: '1 Week (40 hours)',
      price: '$11,000',
      description: 'Comprehensive strategy development',
      features: [
        'Full AI strategy roadmap',
        'Use case prioritization',
        'Technology recommendations',
        'Implementation timeline',
        'Budget planning',
        'Stakeholder presentations',
      ],
      popular: true,
    },
    {
      name: 'Implementation Partner',
      duration: 'Monthly Retainer',
      price: '$40,000/mo',
      description: 'Ongoing strategic partnership',
      features: [
        '160 hours of consulting',
        'Dedicated AI advisor',
        'Weekly strategy sessions',
        'Vendor management',
        'Governance oversight',
        'Training & enablement',
        'Priority support',
      ],
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Consulting Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic AI consulting that bridges the gap between cutting-edge technology and business value.
              We help organizations implement, govern, and optimize AI solutions with confidence.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Leeuki?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1">✓</span>
                    <span><strong>Deep Expertise:</strong> Years of experience in AI governance at Fortune 500 companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1">✓</span>
                    <span><strong>Practical Approach:</strong> Focus on actionable outcomes, not just strategy decks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1">✓</span>
                    <span><strong>Regulatory Knowledge:</strong> Up-to-date on EU AI Act, state laws, and industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1">✓</span>
                    <span><strong>Industry Focus:</strong> Specialized experience in regulated industries</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <p className="text-lg italic mb-4">
                  "We don't just advise on AI—we help you build the governance structures,
                  processes, and capabilities to harness AI responsibly and effectively."
                </p>
                <p className="font-semibold">— Leeuki Consulting Team</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Models */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Engagement Models</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Flexible engagement options designed to meet your needs, from quick assessments to ongoing partnerships.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-md border-2 ${pkg.popular ? 'border-blue-500' : 'border-gray-100'} relative`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 mb-2">{pkg.duration}</p>
                  <p className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</p>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6">
              Standard hourly rate: <strong>$350/hour</strong> for ad-hoc engagements
            </p>
          </div>

          {/* Process Section */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Discover</h3>
                <p className="text-sm text-gray-600">Understand your current state, goals, and challenges</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-gray-600">Create tailored strategies and governance frameworks</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Deliver</h3>
                <p className="text-sm text-gray-600">Implement solutions with hands-on support</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Optimize</h3>
                <p className="text-sm text-gray-600">Continuously improve and scale AI capabilities</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your AI Journey?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Book a free 30-minute consultation to discuss your AI challenges and explore how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Schedule Consultation
              </a>
              <a
                href="/pricing"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
              >
                View All Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
