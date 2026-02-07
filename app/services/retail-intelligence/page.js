export const metadata = {
  title: 'Retail Intelligence Platform - Leeuki',
  description: 'Cloud-based SaaS platform providing real-time retail analytics, inventory management, and business intelligence for modern retailers.',
}

export default function RetailIntelligencePage() {
  const features = [
    {
      category: 'Sales Analytics',
      items: [
        'Real-time sales dashboards',
        'Multi-location performance comparison',
        'Product performance analysis',
        'Seasonal trend identification',
        'Revenue forecasting',
      ],
      icon: '📈',
    },
    {
      category: 'Inventory Management',
      items: [
        'Stock level monitoring',
        'Automated reorder alerts',
        'Demand forecasting',
        'Supplier performance tracking',
        'Dead stock identification',
      ],
      icon: '📦',
    },
    {
      category: 'Customer Insights',
      items: [
        'Customer segmentation',
        'Purchase pattern analysis',
        'Lifetime value calculation',
        'Churn prediction',
        'Loyalty program analytics',
      ],
      icon: '👥',
    },
    {
      category: 'Reporting & Exports',
      items: [
        'Customizable dashboards',
        'Scheduled report delivery',
        'Export to Excel/PDF',
        'API access for integrations',
        'White-label options',
      ],
      icon: '📊',
    },
  ]

  const integrations = [
    { name: 'Shopify', logo: '🛒' },
    { name: 'Square', logo: '⬛' },
    { name: 'QuickBooks', logo: '📗' },
    { name: 'Stripe', logo: '💳' },
    { name: 'WooCommerce', logo: '🟣' },
    { name: 'Lightspeed', logo: '⚡' },
    { name: 'Clover', logo: '🍀' },
    { name: 'Custom API', logo: '🔌' },
  ]

  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small retailers getting started with analytics',
      features: [
        'Up to 5 users',
        'Single location',
        '30-day data retention',
        'Basic dashboards',
        'Email support',
        'Weekly reports',
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For growing businesses needing advanced insights',
      features: [
        'Up to 25 users',
        'Up to 10 locations',
        '1-year data retention',
        'Advanced analytics',
        'Priority support',
        'Daily reports',
        'API access',
        'Custom dashboards',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Unlimited locations',
        'Unlimited data retention',
        'Predictive analytics',
        'Dedicated support',
        'Real-time alerts',
        'Full API access',
        'White-label options',
        'Custom integrations',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Retail Intelligence Platform</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your retail data into actionable insights. Our cloud-based SaaS platform
              provides real-time analytics, inventory management, and business intelligence
              designed specifically for modern retailers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
              >
                Request Demo
              </a>
              <a
                href="#pricing"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Platform Overview */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Powerful Analytics at Your Fingertips</h2>
                <p className="text-lg mb-6 opacity-90">
                  Our cloud-based platform connects to your existing retail systems and transforms
                  raw data into clear, actionable insights—no technical expertise required.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm opacity-80">Uptime SLA</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold">&lt;1s</div>
                    <div className="text-sm opacity-80">Query Response</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold">256-bit</div>
                    <div className="text-sm opacity-80">Encryption</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold">SOC 2</div>
                    <div className="text-sm opacity-80">Compliant</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2">// Sample Dashboard Data</div>
                  <div className="text-gray-300">{"{"}</div>
                  <div className="text-gray-300 ml-4">"daily_revenue": <span className="text-blue-400">$24,582</span>,</div>
                  <div className="text-gray-300 ml-4">"transactions": <span className="text-blue-400">347</span>,</div>
                  <div className="text-gray-300 ml-4">"avg_basket": <span className="text-blue-400">$70.84</span>,</div>
                  <div className="text-gray-300 ml-4">"top_product": <span className="text-yellow-400">"SKU-1234"</span>,</div>
                  <div className="text-gray-300 ml-4">"inventory_alerts": <span className="text-red-400">3</span></div>
                  <div className="text-gray-300">{"}"}</div>
                </div>
                <p className="text-sm mt-4 opacity-80">Real-time data updates every 60 seconds</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Platform Features</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Everything you need to understand your retail business and make data-driven decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{feature.icon}</span>
                    <h3 className="text-xl font-semibold">{feature.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Seamless Integrations</h2>
            <p className="text-center text-gray-600 mb-8">
              Connect with your existing retail systems in minutes, not months.
            </p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition">
                  <div className="text-3xl mb-2">{integration.logo}</div>
                  <div className="text-xs font-medium text-gray-600">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Technical Specifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">☁️</span> Cloud Infrastructure
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• AWS-hosted infrastructure</li>
                  <li>• Multi-region availability</li>
                  <li>• Auto-scaling capabilities</li>
                  <li>• Daily automated backups</li>
                  <li>• Disaster recovery ready</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">🔒</span> Security & Compliance
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• SOC 2 Type II certified</li>
                  <li>• 256-bit AES encryption</li>
                  <li>• GDPR compliant</li>
                  <li>• SSO/SAML support</li>
                  <li>• Role-based access control</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">🔌</span> API & Integration
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• RESTful API</li>
                  <li>• Webhook support</li>
                  <li>• Real-time data sync</li>
                  <li>• Batch import/export</li>
                  <li>• Developer documentation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
            <p className="text-center text-gray-600 mb-10">
              Start with a 14-day free trial. No credit card required.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-md border-2 ${plan.popular ? 'border-blue-500' : 'border-gray-100'} relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block text-center py-3 rounded-lg font-semibold transition ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retail Analytics?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join hundreds of retailers who have already upgraded their analytics capabilities with Leeuki.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Schedule a Demo
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition inline-block"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
