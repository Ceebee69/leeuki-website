import Link from 'next/link'

export default function ServiceCard({ title, description, href, classNumber }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="mb-2">
        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
          {classNumber}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={href}
        className="text-blue-600 font-semibold hover:text-blue-800 transition inline-flex items-center"
      >
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
