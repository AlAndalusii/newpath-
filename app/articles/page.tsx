import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function Articles() {
  const featuredArticles = [
    {
      title: "Ultimate Guide to Finding Mistake Fares",
      description: "Learn the secrets to finding and booking airline pricing errors for incredible savings on flights.",
      slug: "ultimate-guide-mistake-fares",
    },
    {
      title: "How I Flew to Europe for $247 Round Trip",
      description: "A detailed case study of scoring an amazing deal on a round-trip flight to Europe.",
      slug: "europe-247-round-trip",
    },
    {
      title: "Mastering Credit Card Travel Rewards",
      description: "Maximize your travel rewards and learn how to earn free flights with strategic credit card usage.",
      slug: "mastering-travel-rewards",
    },
  ]

  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-left mb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-league-spartan">
              Articles
            </h1>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Dive into our best guides and tips for finding amazing flight deals
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-4">
            {featuredArticles.map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/articles/${article.slug}`}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-league-spartan">
                      {article.title}
                    </h3>
                    <p className="text-gray-600">
                      {article.description}
                    </p>
                    <div className="mt-4 text-[#00A8E8] font-medium">
                      Read more →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <EmailSignup />
        </div>
      </main>

      <Footer />
    </div>
  )
} 