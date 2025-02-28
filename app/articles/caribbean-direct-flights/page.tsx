import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function CaribbeanDirectFlights() {
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 font-league-spartan">
              Direct Flights from Chicago to the Caribbean
            </h1>
            <p className="text-xl text-gray-600">
              📅 Updated: 28th February 2025
            </p>
            <p className="text-lg text-gray-600 mt-2">
              ✍️ By Zak Jama
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p>The Caribbean has something for every traveler. You can enjoy the white sands of Turks and Caicos or the lively Reggae music of Jamaica. Luckily, getting there is easier than ever, with multiple direct flights from Chicago to the Caribbean every week.</p>

            <p className="mt-4">At BestFlightAlerts, we use <strong>AI technology</strong> to track airfare trends in real-time. This helps our subscribers find exclusive flight deals before prices go up.</p>

            <p className="mt-4">We can help you find the <strong>cheapest Caribbean island</strong> to fly to from Chicago. We can also assist with last-minute trips. We will make sure you book at the right time.</p>

            {/* Add the Caribbean image */}
            <div className="my-8">
              <img 
                src="/images/Carribean.jpg"
                alt="Beautiful Caribbean beach with palm trees and turquoise water"
                className="w-full h-[400px] rounded-lg object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">✈️ United Airlines: The Widest Selection of Caribbean Destinations</h2>
            <p><strong>United Airlines</strong> has direct flights from Chicago O'Hare (ORD) to <strong>10 Caribbean islands</strong>. This makes it the airline with the most choices.</p>

            <p className="mt-4">Daily flights go to larger places like <strong>Puerto Rico</strong>, the <strong>Bahamas</strong>, the <strong>Dominican Republic</strong>, and <strong>Jamaica</strong>. However, travelers to smaller islands will see that most flights run on weekends.</p>

            <h3 className="text-xl font-bold mt-6 mb-3">Popular United Airlines Routes from Chicago:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chicago (ORD) to San Juan, Puerto Rico (SJU) – <strong>Daily flights available</strong></li>
              <li>Chicago (ORD) to Montego Bay, Jamaica (MBJ) – <strong>Daily morning flights</strong></li>
              <li>Chicago (ORD) to Punta Cana, Dominican Republic (PUJ) – <strong>Flights every day</strong>, with two departures on Saturdays</li>
              <li>Chicago (ORD) to Nassau, Bahamas (NAS) – <strong>One daily flight</strong></li>
              <li>Chicago (ORD) to Turks & Caicos (PLS) – Flights available Friday, Saturday, and Sunday</li>
              <li>Chicago (ORD) to Grand Cayman (GCM) – Three flights per week (Friday-Sunday)</li>
              <li>Chicago (ORD) to Aruba (AUA) – Two weekly flights (weekends)</li>
              <li>Chicago (ORD) to Saint Lucia (UVF) – One flight per week (Saturdays)</li>
              <li>Chicago (ORD) to Saint Thomas (STT) – Saturday and Sunday flights</li>
              <li>Chicago (ORD) to Sint Maarten (SXM) – Weekly departures every Saturday</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">United Airlines Amenities</h3>
            <p>Passengers can choose from <strong>Basic Economy</strong>, <strong>Economy</strong>, <strong>Premium Economy</strong>, and <strong>Business Class</strong>. Basic Economy fares include a personal item, but carry-on and checked bags require an additional fee. The organizers do not provide meals, but you can purchase snacks.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">✈️ American Airlines: Seven Caribbean Destinations with Extra Perks</h2>
            <p><strong>American Airlines</strong> provides direct flights from Chicago to seven Caribbean destinations. Basic Economy fares may cost a bit more than United. However, they include a full-size carry-on bag. This makes them a good choice for travelers who want to avoid extra baggage fees.</p>

            <h3 className="text-xl font-bold mt-6 mb-3">American Airlines Routes from Chicago:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chicago (ORD) to Aruba (AUA) – Weekly Saturday departures</li>
              <li>Chicago (ORD) to Montego Bay, Jamaica (MBJ) – <strong>Daily morning flights</strong></li>
              <li>Chicago (ORD) to Nassau, Bahamas (NAS) – One flight per week (Saturdays)</li>
              <li>Chicago (ORD) to Turks & Caicos (PLS) – Weekly flights on Saturdays</li>
              <li>Chicago (ORD) to Punta Cana, Dominican Republic (PUJ) – <strong>Daily departures</strong></li>
              <li>Chicago (ORD) to Saint Thomas (STT) – One weekly flight on Saturdays</li>
              <li>Chicago (ORD) to San Juan, Puerto Rico (SJU) – Flights available most days, with two options on Saturdays</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">American Airlines Amenities</h3>
            <p>Travelers can choose from <strong>Basic</strong>, <strong>Main Cabin</strong>, and <strong>Business Class</strong>. Basic Economy includes a carry-on bag, unlike United, making it a great option for budget-conscious travelers.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">✈️ Southwest Airlines: Affordable Nonstop Flights to Three Caribbean Islands</h2>
            <p><strong>Southwest Airlines</strong> operates direct flights from Chicago Midway (MDW) to three Caribbean destinations. While flight options are more limited, prices tend to be lower than United and American.</p>

            <h3 className="text-xl font-bold mt-6 mb-3">Southwest Airlines Routes from Chicago:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chicago (MDW) to Montego Bay, Jamaica (MBJ) – One direct flight per week</li>
              <li>Chicago (MDW) to Punta Cana, Dominican Republic (PUJ) – Weekly flights on Saturdays and Sundays</li>
              <li>Chicago (MDW) to San Juan, Puerto Rico (SJU) – <strong>One flight per day</strong></li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Southwest Airlines Amenities</h3>
            <p>Southwest's fare structure includes <strong>two free checked bags</strong>, making it a great option for travelers bringing extra luggage.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">✈️ Frontier Airlines: The Cheapest Way to Fly to Jamaica</h2>
            <p><strong>Frontier Airlines</strong> has one direct flight from Chicago to the Caribbean. If you can be flexible with your dates, it is often the cheapest way to travel to Jamaica.</p>

            <h3 className="text-xl font-bold mt-6 mb-3">Frontier Airlines Route from Chicago:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chicago (MDW) to Montego Bay, Jamaica (MBJ) – One weekly flight</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Frontier Airlines Amenities</h3>
            <p>Frontier uses a low-cost model. This means tickets include one personal item. However, carry-on bags and checked luggage cost extra.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">🌴 Cheapest Caribbean Islands to Fly to from Chicago</h2>
            <p>For travelers looking for budget-friendly Caribbean spots, here are the cheapest islands to fly to from Chicago:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>San Juan, Puerto Rico (SJU)</strong> – Daily flights, affordable fares</li>
              <li><strong>Montego Bay, Jamaica (MBJ)</strong> – Low-cost flights with multiple airlines</li>
              <li><strong>Punta Cana, Dominican Republic (PUJ)</strong> – Frequent flights at competitive prices</li>
              <li><strong>Turks & Caicos (PLS)</strong> – Budget-friendly options on select days</li>
              <li><strong>Saint Lucia (UVF)</strong> – Affordable one-way fares for weekend travellers</li>
            </ul>

            <p className="mt-4">At BestFlightAlerts, we check these destinations every day. We send our subscribers real-time price drops. This helps them book at the lowest fare!</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">🛫 How BestFlightAlerts Helps You Find the Best Deals</h2>
            <p>At BestFlightAlerts, we don't just track flights—we use <strong>AI-powered airfare monitoring</strong> to detect price changes in real time. Here's how we help our subscribers save money:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>✅ <strong>Exclusive flight alerts</strong> – Get notified when prices drop for Caribbean flights</li>
              <li>✅ <strong>AI-powered price tracking</strong> – We analyze thousands of flight routes daily</li>
              <li>✅ <strong>Fare prediction tools</strong> – Know the best time to book and avoid price spikes</li>
              <li>✅ <strong>Last-minute deals</strong> – Get alerted to flash sales and mistake fares</li>
            </ul>

            <p className="mt-4">🚀 Want to find the cheapest Caribbean flights from Chicago? Sign up for BestFlightAlerts today and let us track the deals for you!</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">📌 Final Thoughts: Book Your Nonstop Caribbean Flight Today</h2>
            <p>Many airlines have direct flights from Chicago to the Caribbean. Your dream island getaway is only a few hours away. If you plan to visit Jamaica, Puerto Rico, or the Dominican Republic, timing is important. Booking at the right time can help you save money.</p>

            <p className="mt-4">🔹 Flying soon? Don't book without checking our latest flight alerts for the best prices!</p>

            <p className="mt-4">📢 Subscribe to BestFlightAlerts and get the cheapest Caribbean flight deals delivered to your inbox today! 🚀</p>
          </div>

          {/* Comment Section */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-4 font-league-spartan">Leave a Reply</h2>
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
          <EmailSignup />
        </article>
      </main>

      <Footer />
    </div>
  )
} 