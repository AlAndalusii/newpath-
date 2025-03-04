import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function ChicagoMexicoCityFlights() {
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 font-league-spartan">
              Find Cheap Direct Flights from Chicago to Mexico City!
            </h1>
            <p className="text-xl text-gray-600">
              📅 Updated: March 2nd, 2025
            </p>
            <p className="text-lg text-gray-600 mt-2">
              ✍️ By Zak Jama
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg">🌎 Looking for the best flight deals from Chicago to Mexico City? Whether you're traveling for business, a quick getaway, or a family vacation, Best Flight Alerts helps you find the cheapest direct flights—saving you time and money!</p>

            {/* Add the image */}
            <div className="my-8">
              <img 
                src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Aerial view of Mexico City with modern buildings and historic architecture"
                className="w-full h-[400px] rounded-lg object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">🛫 Why Choose Direct Flights?</h2>
            <p>A direct flight from Chicago O'Hare International Airport (ORD) to Mexico City International Airport (MEX) takes only 4-5 hours—no layovers, no extra waiting!</p>
            <ul className="list-none pl-0 space-y-2">
              <li>✅ <strong>Saves Time</strong> – Skip long layovers and reach Mexico City faster.</li>
              <li>✅ <strong>Less Hassle</strong> – No need to switch planes or recheck luggage.</li>
              <li>✅ <strong>Fewer Delays</strong> – Avoid missed connections and travel stress.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">🔍 Best Airlines for Direct Flights</h2>
            <p>Several major airlines offer non-stop flights from Chicago to Mexico City:</p>
            <ul className="list-none pl-0 space-y-2">
              <li>✈️ <strong>Aeroméxico</strong> – Mexico's top airline with great service.</li>
              <li>✈️ <strong>United Airlines</strong> – Reliable flights from ORD to MEX.</li>
              <li>✈️ <strong>American Airlines</strong> – Frequent direct flights with premium comfort.</li>
            </ul>
            <p className="mt-4">💡 <strong>Tip:</strong> Book in advance for the best prices! Flight demand is high, especially for direct routes.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">💰 How to Find Cheap Flights?</h2>
            <p>At Best Flight Alerts, we help you find the lowest airfare for your trip. Here's how:</p>
            <ul className="list-none pl-0 space-y-2">
              <li>🔔 <strong>Real-Time Price Alerts</strong> – Get notified when fares drop!</li>
              <li>🎟 <strong>Exclusive Deals</strong> – We track airline discounts and hidden offers.</li>
              <li>📅 <strong>Flexible Date Search</strong> – Find the cheapest day to fly!</li>
            </ul>
            <p className="mt-4">🔎 Join Best Flight Alerts & never overpay for flights!</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">📈 Trending Keywords & Flight Insights</h2>
            <p>🚀 Popular search terms like "direct flights to Mexico City from Chicago" (18.1K monthly searches) show that demand is high.</p>
            <p className="mt-4"><strong>💡 Pro Tip:</strong></p>
            <ul className="list-none pl-0 space-y-2">
              <li>• Book flights midweek (Tuesday & Wednesday) for the best rates.</li>
              <li>• Avoid peak seasons (holidays & summer) when prices are highest.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">🏙 What to Do in Mexico City?</h2>
            <p>Once you arrive, explore the city's amazing culture, history, and food!</p>
            <ul className="list-none pl-0 space-y-2">
              <li>🏛 <strong>Visit the Zócalo</strong> – Mexico City's historic main square.</li>
              <li>🍽 <strong>Try Authentic Tacos</strong> – Head to El Califa or Pujol for the best eats!</li>
              <li>🖼 <strong>Explore Frida Kahlo's Casa Azul</strong> – A must-see for art lovers.</li>
              <li>🏰 <strong>See Chapultepec Castle</strong> – Breathtaking views of the city.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">🔔 Get the Best Flight Alerts Today!</h2>
            <p>Don't waste hours searching for deals—we do it for you! ✈️💰</p>
            <p>📩 Sign up for Best Flight Alerts now and get instant updates on the cheapest flights from Chicago to Mexico City!</p>
            <p>🔎 Start saving today! 🎟️🚀</p>
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