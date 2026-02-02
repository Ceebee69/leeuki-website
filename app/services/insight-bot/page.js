export const metadata = {
  title: 'Insight Bot - Leeuki',
  description: 'AI-powered chatbot for instant retail insights (Class 042 - Chatbot)',
}

export default function InsightBotPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded">
              Class 042 - Chatbot
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6">Insight Bot</h1>
          <p className="text-xl text-gray-600 mb-12">
            AI-powered chatbot that provides instant retail insights and answers to your business questions.
          </p>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Your AI Retail Assistant</h2>
            <p className="text-lg mb-6">
              Get instant answers to your retail questions, analyze trends, and receive actionable insights 24/7.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-2">Example Questions:</p>
                  <ul className="space-y-2 text-sm">
                    <li>"What are the top-selling products this month?"</li>
                    <li>"Show me sales trends for Q4"</li>
                    <li>"Compare inventory levels across stores"</li>
                    <li>"What's the customer satisfaction score?"</li>
                  </ul>
                </div>
              </div>
            </div>
            <a
              href="/contact"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Try Insight Bot
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">🤖 Natural Language Processing</h3>
              <p className="text-gray-600">
                Ask questions in plain English and get intelligent, contextual responses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">📊 Data Integration</h3>
              <p className="text-gray-600">
                Connects seamlessly with your retail systems and databases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">⚡ Real-Time Insights</h3>
              <p className="text-gray-600">
                Get instant answers without waiting for reports or analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">🎯 Actionable Recommendations</h3>
              <p className="text-gray-600">
                Receive specific recommendations based on your data and queries.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience AI-Powered Insights?</h2>
            <p className="text-gray-700 mb-6">
              Start using Insight Bot today and transform how you interact with your retail data.
            </p>
            <a
              href="/contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
