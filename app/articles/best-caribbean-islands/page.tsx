import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function BestCaribbeanIslands() {
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 font-league-spartan">
              Best Caribbean Islands with Direct Flights from Chicago
            </h1>
            <p className="text-xl text-gray-600">
              📅 Updated: March 5th, 2025
            </p>
            <p className="text-lg text-gray-600 mt-2 mb-4">
              ✍️ By Zak Jama
            </p>
            <p className="text-xl text-gray-700">🌴Need a tropical getaway? If you're in Chicago and want an easy, short flight to paradise, you're in luck!</p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold mt-8 mb-4">🏖️ 1. Punta Cana, Dominican Republic</h2>
            <div className="my-8">
              <img 
                src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Stunning beach resort in Punta Cana with palm trees and crystal clear water"
                className="w-full h-[400px] rounded-lg object-cover"
              />
            </div>
            <p><strong>✅ Why Go?</strong><br />
            Punta Cana boasts white, sandy beaches, luxury resorts, and thrilling activities like snorkeling and zip-lining. It is suitable for families, couples, and adventure seekers.</p>

            <p><strong>✈️ Flights:</strong><br />
            There are direct flights from Chicago to the Caribbean to Punta Cana. United Airlines offers direct flights from ORD (O'Hare International Airport).</p>

            <p><strong>🌡️ Best Time to Visit:</strong><br />
            December to April for warm, sunny weather.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">🌊 2. Montego Bay, Jamaica</h2>
            <div className="my-8">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Beautiful Montego Bay beach with crystal clear waters and palm trees"
                className="w-full h-[400px] rounded-lg object-cover"
              />
            </div>
            <p><strong>✅ Why Go?</strong><br />
            Montego Bay is ideal for beach lovers who want to take a break, find waterfalls, and bask in the spirit of reggae music. Jamaican jerk chicken is something that you won't want to miss.</p>

            <p><strong>✈️ Flights:</strong><br />
            Direct nonstop flights between Chicago and the Caribbean, including Montego Bay, from American Airlines and United Airlines.</p>

            <p><strong>🌡️ Peak Travel Season:</strong><br />
            November to mid-December, fewer tourists with good weather.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">🌅 3. Nassau, Bahamas</h2>
            <div className="my-8">
              <img 
                src="/images/roberto-nickson-HQMyV8a_4_4-unsplash.jpg"
                alt="Beautiful Nassau beach with palm trees and turquoise waters"
                className="w-full h-[400px] rounded-lg object-cover"
              />
            </div>
            <p><strong>✅ Why Go?</strong><br />
            The Bahamas has over 700 islands! Its capital, Nassau, features crystal blue water, nightlife, and resort-style activities like Atlantis.</p>

            <p><strong>✈️ Flights:</strong><br />
            Direct flights from ORD are available to the Caribbean, including Nassau.</p>

            <p><strong>🌡️ Best Time to Visit:</strong><br />
            December to April for sunny, warm days.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">🏝️ 4. San Juan, Puerto Rico</h2>
            <div className="my-8">
              <img 
                src="https://images.unsplash.com/photo-1579687196544-08ae57ab5c11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Colorful streets of Old San Juan with historic architecture"
                className="w-full h-[400px] rounded-lg object-cover"
              />
            </div>
            <p><strong>✅ Why Go?</strong><br />
            San Juan is history and beaches combined! Walk the rainbow-colored streets of Old San Juan, bask in the sun on Condado Beach, or explore El Yunque Rainforest.</p>

            <p><strong>✈️ Flights:</strong><br />
            United has non-stop flights from Chicago to San Juan.</p>

            <p><strong>🌡️ Best Time to Visit:</strong><br />
            Mid-April to June for good weather with fewer crowds.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">☀️ 5. Aruba</h2>
            <div className="my-8">
              <img 
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Beautiful Aruba beach with pristine white sand and turquoise water"
                className="w-full h-[400px] rounded-lg object-cover"
              />
            </div>
            <p><strong>✅ Why Visit?</strong><br />
            Aruba is "One Happy Island" for a reason! It has perfect weather all year round and is ideal for beach lovers and water sports.</p>

            <p><strong>✈️ Flights:</strong><br />
            Non-stop flights from ORD to Aruba with American Airlines and United Airlines.</p>

            <p><strong>🌡️ Best Time to Visit:</strong><br />
            January to March for the best beach weather.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">✈️ Last-Minute Tips for Your Caribbean Trip</h2>
            <ul className="list-none pl-0 space-y-2">
              <li>✔️ Book early to secure cheap flights from Chicago to the Caribbean</li>
              <li>✔️ Fly non-stop from Chicago to the Caribbean to save time</li>
              <li>✔️ Pack lightly, use sunscreen, and soak up the sunshine!</li>
            </ul>

            <p className="mt-4">📢 Subscribe to BestFlightAlerts and get the cheapest Caribbean flight deals delivered today! 🚀</p>
          </div>

          {/* Comment Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-8">Leave a Reply</h2>
            <p className="text-gray-600 mb-6">Your email address will not be published. Required fields are marked *</p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Comment *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={6}
                  className="block w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#00A8E8] focus:ring-[#00A8E8] sm:text-sm p-3"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#00A8E8] focus:ring-[#00A8E8] sm:text-sm p-3"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#00A8E8] focus:ring-[#00A8E8] sm:text-sm p-3"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="save-info"
                  name="save-info"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#00A8E8] focus:ring-[#00A8E8]"
                />
                <label htmlFor="save-info" className="ml-2 block text-sm text-gray-700">
                  Save my information in this browser for the next time I comment
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-lg border border-transparent bg-[#00A8E8] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#0096d1] focus:outline-none focus:ring-2 focus:ring-[#00A8E8] focus:ring-offset-2"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>

          {/* Email Signup */}
          <div className="mb-8">
            <EmailSignup />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
} 