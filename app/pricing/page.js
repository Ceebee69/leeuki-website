export const metadata = {
  title: 'Pricing - Leeuki',
  description: 'AI Consulting Services - Flexible pricing options',
}

export default function PricingPage() {
  const packages = [
    {
      name: 'Starter',
      subtitle: 'Day Package',
      hours: '8 hours',
      price: '$2,500',
      perHour: '$312.50/hr',
      savings: 'Save 11%',
      description: 'Perfect for focused, single-day engagements',
      features: [
        '8 hours of consulting',
        'Strategic planning session',
        'Actionable recommendations',
        'Follow-up summary report',
        'Email support for 7 days',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      subtitle: 'Week Package',
      hours: '40 hours',
      price: '$11,000',
      perHour: '$275/hr',
      savings: 'Save 21%',
      description: 'Ideal for comprehensive projects',
      features: [
        '40 hours of consulting',
        'In-depth analysis & strategy',
        'Implementation guidance',
        'Weekly progress reviews',
        'Priority email & phone support',
        'Detailed documentation',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      subtitle: 'Monthly Retainer',
      hours: '160 hours',
      price: '$40,000',
      perHour: '$250/hr',
      savings: 'Save 29%',
      description: 'For ongoing strategic partnerships',
      features: [
        '160 hours of consulting',
        'Dedicated consultant access',
        'Custom AI solutions',
        'On-site availability',
        '24/7 priority support',
        'Executive reporting',
        'Quarterly strategy reviews',
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">AI Consulting Pricing</h1>
          <p className="text-xl text-gray-600">
            Flexible options to fit your business needs
          </p>
        </div>

        {/* Free Consultation Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-2">Start with a Free Consultation</h2>
          <p className="text-lg mb-4 opacity-90">
            30-minute introductory call to discuss your needs and how we can help
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Book Your Free Call
          </a>
        </div>

        {/* Hourly Rate */}
        <div className="max-w-4xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600 mb-2">Standard Hourly Rate</p>
          <p className="text-4xl font-bold text-gray-900">$350<span className="text-lg font-normal text-gray-600">/hour</span></p>
          <p className="text-sm text-gray-500 mt-2">Flexible hourly billing for smaller engagements</p>
        </div>

        {/* Package Plans */}
        <h2 className="text-3xl font-bold text-center mb-8">Consulting Packages</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.popular ? 'ring-4 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold mb-1">{plan.name}</h2>
              <p className="text-blue-600 font-semibold mb-2">{plan.subtitle}</p>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <div className="mb-4">
                <span className="text-sm text-gray-600">{plan.hours} • {plan.perHour}</span>
                <span className="ml-2 text-sm text-green-600 font-semibold">{plan.savings}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => alert('Payment integration coming soon! Contact us at hello@leeuki.ai')}
              >
                Get Started
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                🔒 Secure payment powered by Stripe
              </p>
            </div>
          ))}
        </div>

        {/* Custom Solutions */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Engagement?</h2>
          <p className="text-gray-600 mb-6">
            We offer flexible arrangements including project-based pricing, extended retainers, and on-site workshops.
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
  )
}
