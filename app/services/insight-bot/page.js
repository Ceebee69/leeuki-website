export const metadata = {
  title: 'Insight Bot - Leeuki',
  description: 'AI-powered chatbot for instant retail insights. Natural language queries, automated reports, and intelligent data analysis.',
}

export default function InsightBotPage() {
  const capabilities = [
    {
      title: 'Natural Language Queries',
      description: 'Ask questions in plain English and receive intelligent, contextual responses. No technical knowledge required.',
      examples: [
        '"What were our top 5 products last week?"',
        '"Compare sales between Chicago and NYC stores"',
        '"Show me inventory items running low"',
      ],
      icon: '💬',
    },
    {
      title: 'Automated Reports',
      description: 'Schedule daily, weekly, or monthly reports delivered automatically to your inbox or Slack channel.',
      examples: [
        'Daily sales summaries at 9 AM',
        'Weekly inventory alerts every Monday',
        'Monthly performance dashboards',
      ],
      icon: '📋',
    },
    {
      title: 'Predictive Insights',
      description: 'AI-powered predictions help you anticipate trends, optimize inventory, and make proactive decisions.',
      examples: [
        '"What will demand look like next month?"',
        '"Which products should I reorder?"',
        '"Predict holiday season sales"',
      ],
      icon: '🔮',
    },
    {
      title: 'Real-Time Alerts',
      description: 'Get instant notifications when important events occur—low stock, unusual sales patterns, or goal achievements.',
      examples: [
        'Stock level drops below threshold',
        'Sales exceed daily target',
        'Unusual transaction patterns detected',
      ],
      icon: '🚨',
    },
  ]

  const deploymentOptions = [
    {
      name: 'Web Widget',
      description: 'Embed Insight Bot directly on your internal dashboards or admin portal.',
      icon: '🌐',
      features: ['Customizable appearance', 'Responsive design', 'Easy embedding'],
    },
    {
      name: 'Slack Integration',
      description: 'Query your retail data directly from Slack channels or DMs.',
      icon: '💼',
      features: ['Channel notifications', 'Team collaboration', 'Slash commands'],
    },
    {
      name: 'Microsoft Teams',
      description: 'Seamlessly integrated into your Teams workspace for enterprise users.',
      icon: '🟦',
      features: ['Teams bot', 'Tab integration', 'Adaptive cards'],
    },
    {
      name: 'API Access',
      description: 'Build custom integrations using our comprehensive API.',
      icon: '🔌',
      features: ['RESTful endpoints', 'Webhooks', 'SDKs available'],
    },
  ]

  const technicalSpecs = [
    {
      category: 'AI & Language',
      specs: [
        'GPT-4 powered understanding',
        'Context-aware responses',
        'Multi-turn conversations',
        'Intent recognition',
        'Entity extraction',
      ],
    },
    {
      category: 'Performance',
      specs: [
        'Sub-second response times',
        '99.9% uptime SLA',
        'Concurrent user support',
        'Auto-scaling infrastructure',
        'Global CDN delivery',
      ],
    },
    {
      category: 'Security',
      specs: [
        'End-to-end encryption',
        'SOC 2 compliant',
        'Role-based access',
        'Audit logging',
        'Data residency options',
      ],
    },
  ]

  const useCases = [
    {
      role: 'Store Manager',
      question: '"How did my store perform yesterday compared to last week?"',
      response: 'Yesterday your store generated $12,450 in revenue across 156 transactions. That\'s up 8% from last Tuesday. Top sellers were the Winter Collection items.',
    },
    {
      role: 'Operations Lead',
      question: '"Which products need to be reordered this week?"',
      response: 'Based on current stock levels and sales velocity, I recommend reordering: SKU-1234 (Widget Pro), SKU-5678 (Premium Case), and SKU-9012 (Charging Kit). Shall I generate a PO?',
    },
    {
      role: 'Executive',
      question: '"Give me a quick summary of Q4 performance vs targets"',
      response: 'Q4 revenue was $2.4M against a $2.2M target (109%). Best performing region was Northeast (+15%). Two stores missed targets—details available if you want to drill down.',
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Insight Bot</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your AI-powered retail assistant. Ask questions in plain English and get instant,
              intelligent answers about your sales, inventory, and business performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition inline-block"
              >
                Try Insight Bot
              </a>
              <a
                href="/contact"
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition inline-block"
              >
                Schedule Demo
              </a>
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">See Insight Bot in Action</h2>
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="border-b border-white/20 pb-4 last:border-0 last:pb-0">
                    <div className="text-sm opacity-70 mb-1">{useCase.role}</div>
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <span className="text-sm">👤</span> {useCase.question}
                    </div>
                    <div className="bg-purple-800/50 rounded-lg p-3">
                      <span className="text-sm">🤖</span> {useCase.response}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Powerful Capabilities</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Insight Bot combines natural language understanding with deep retail analytics
              to deliver answers that actually help you make decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{cap.icon}</span>
                    <h3 className="text-xl font-semibold">{cap.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{cap.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">Example queries:</p>
                    <ul className="space-y-1">
                      {cap.examples.map((example, i) => (
                        <li key={i} className="text-sm text-gray-600 italic">{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment Options */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Deploy Anywhere</h2>
            <p className="text-center text-gray-600 mb-10">
              Insight Bot integrates with the tools your team already uses.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {deploymentOptions.map((option, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{option.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {option.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Technical Specifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {technicalSpecs.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.specs.map((spec, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Integration with Retail Intelligence */}
          <div className="bg-purple-50 p-8 rounded-2xl mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Better Together</h2>
                <p className="text-gray-700 mb-6">
                  Insight Bot works seamlessly with the Leeuki Retail Intelligence Platform.
                  Get the full power of our analytics engine through simple conversations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-purple-600">✓</span>
                    <span>Access all your dashboards via chat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-purple-600">✓</span>
                    <span>Share insights with team members instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-purple-600">✓</span>
                    <span>Set up alerts without touching settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-purple-600">✓</span>
                    <span>Generate reports on demand</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <span className="text-6xl">🤖</span>
                  <span className="text-4xl mx-4">+</span>
                  <span className="text-6xl">📊</span>
                </div>
                <p className="text-center text-gray-600">
                  Insight Bot + Retail Intelligence = Complete retail analytics at your fingertips
                </p>
                <a
                  href="/services/retail-intelligence"
                  className="block text-center mt-4 text-purple-600 font-semibold hover:text-purple-700"
                >
                  Learn about Retail Intelligence →
                </a>
              </div>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-16">
            <h2 className="text-2xl font-bold mb-4 text-center">Pricing</h2>
            <p className="text-center text-gray-600 mb-6">
              Insight Bot is included with all Retail Intelligence Platform subscriptions.
              Standalone pricing available for existing analytics users.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">Included</div>
                <div className="text-sm text-gray-600">with Professional & Enterprise plans</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">$49/mo</div>
                <div className="text-sm text-gray-600">Standalone add-on for Starter</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">Custom</div>
                <div className="text-sm text-gray-600">API-only access</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Chat With Your Data?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Experience the future of retail analytics. Ask questions, get answers, make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Try Insight Bot Free
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition inline-block"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
