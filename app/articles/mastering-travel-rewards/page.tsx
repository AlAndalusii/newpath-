import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function TravelRewardsGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Mastering Credit Card Travel Rewards
          </h1>
          <p className="text-xl text-gray-600">
            Maximize your travel rewards and learn how to earn free flights with strategic credit card usage.
          </p>
        </header>

        {/* Article Content - Placeholder */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-500 italic text-center py-12">
            Article content coming soon...
          </div>
        </div>
      </article>
    </div>
  )
} 