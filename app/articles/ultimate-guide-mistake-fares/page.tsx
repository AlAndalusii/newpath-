import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function MistakeFaresGuide() {
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 font-league-spartan">
              Ultimate Guide to Finding Mistake Fares
            </h1>
            <p className="text-xl text-gray-600">
              Learn the secrets to finding and booking airline pricing errors for incredible savings on flights.
            </p>
          </header>

          {/* Article Content - Placeholder */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-500 italic text-center py-12">
              Article content coming soon...
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <EmailSignup />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
} 