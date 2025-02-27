import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function SouthwestNearMiss() {
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 font-league-spartan">
              ✈️ Near Miss at Chicago Midway Airport Involving Southwest Airlines
            </h1>
            <p className="text-xl text-gray-600">
              Updated: February 27, 2024
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p>On <strong>Tuesday morning</strong>, a <strong>Southwest Airlines flight</strong> narrowly avoided a <strong>runway collision</strong> at <strong>Chicago Midway Airport</strong> 🛬. Here's a breakdown of what happened:</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">🚨 What Happened?</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>🔹 <strong>Southwest Flight 2504</strong> was on final approach to land at <strong>Midway Airport</strong> after departing from <strong>Omaha, Nebraska</strong>.</li>
              <li>🔹 Just <strong>50 feet from touchdown</strong>, the pilots had to <strong>abort landing</strong> and <strong>climb back up</strong> to avoid a collision.</li>
              <li>🔹 The reason? A <strong>Flexjet business jet</strong> was <strong>on the runway without clearance</strong>.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">🎯 Key Details</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>✈️ <strong>The Business Jet:</strong> A <strong>Flexjet Bombardier Challenger</strong> was taxiing to depart for <strong>Knoxville, Tennessee</strong>.</li>
              <li>📡 <strong>Air Traffic Control (ATC):</strong> Repeatedly <strong>warned</strong> the Flexjet pilot <strong>nine times</strong> to hold position.</li>
              <li>🚦 <strong>The Mistake:</strong> The <strong>business jet ignored</strong> instructions and entered the <strong>runway anyway</strong>.</li>
              <li>🛑 <strong>The Quick Decision:</strong> The <strong>Southwest pilot immediately pulled up</strong>, executing a <strong>"go-around" maneuver</strong> to avoid a potential disaster.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">🛫 What is a Go-Around?</h2>
            
            <p>A <strong>go-around</strong> is a standard safety maneuver where pilots <strong>abort a landing</strong> and climb back up to reposition for another approach.</p>
            <p>👨‍✈️ Pilots train extensively for this situation, but it requires <strong>quick thinking and precise execution</strong>.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">✅ Final Outcome</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>✅ <strong>Southwest Flight 2504</strong> safely circled back and landed <strong>without incident</strong>.</li>
              <li>✅ No injuries or damage reported.</li>
              <li>✅ FAA and aviation experts are <strong>reviewing the incident</strong>.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">⚠️ Why This Matters?</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>🚨 This is another <strong>close call</strong> in a <strong>series of near-miss incidents</strong> at U.S. airports.</li>
              <li>📊 Aviation experts stress the importance of <strong>strict runway procedures</strong> and <strong>better pilot communication</strong>.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">✈️ Stay Updated on Chicago Flight News</h2>
            
            <p>🔔 Want to stay informed about Chicago aviation news and flight deals? Subscribe to our newsletter for real-time updates and exclusive insights.</p>
          </div>

          {/* Email Signup Section */}
          <div className="my-12 p-8 bg-gray-50 rounded-lg border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Never Miss a Deal!</h2>
                <p className="text-base md:text-lg text-gray-600">
                  Get instant alerts for flight and cruise deals from Chicago. Join our free service!
                </p>
              </div>
              <div className="md:w-1/2 w-full max-w-lg">
                <iframe
                  src="https://embeds.beehiiv.com/30ad47ac-cfd0-4c8a-b68a-489fa999d343?slim=true"
                  data-test-id="beehiiv-embed"
                  height="52"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    margin: 0,
                    borderRadius: "6px",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="my-12">
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
        </article>
      </main>

      <Footer />
    </div>
  )
} 