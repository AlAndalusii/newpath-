import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function Articles() {
  const featuredArticles = [
    {
      title: "When Is the Best Time to Book a Flight?",
      description: "The ultimate guide to scoring cheap airfare and finding the best deals on domestic and international flights.",
      slug: "southwest-near-miss",
    },
    {
      title: "New Cruise Age Restrictions in 2025",
      description: "How Carnival & Royal Caribbean are changing travel for young passengers with stricter age policies.",
      slug: "cruise-age-restrictions",
    },
    {
      title: "How I Flew to Europe for $247 Round Trip",
      description: "A detailed case study of scoring an amazing deal on a round-trip flight to Europe.",
      slug: "europe-247-round-trip",
    },
    {
      title: "Direct Flights from Chicago to the Caribbean",
      description: "Find the best nonstop flights from Chicago to Caribbean destinations, including detailed routes and pricing from United, American, Southwest, and Frontier Airlines.",
      slug: "caribbean-direct-flights"
    }
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

          <div className="space-y-8 mb-12">
            {featuredArticles.map((article) => (
              <div key={article.slug} className="border-b pb-8 last:border-b-0">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link href={`/articles/${article.slug}`} className="text-gray-900 hover:text-[#00A8E8]">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <Link href={`/articles/${article.slug}`} className="text-[#00A8E8] hover:underline">
                  Read more →
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