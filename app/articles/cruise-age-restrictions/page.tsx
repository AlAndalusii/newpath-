import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function CruiseArticle() {
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 font-league-spartan">
              🚢 New Cruise Age Restrictions in 2025: How Carnival & Royal Caribbean Are Changing Travel for Young Passengers
            </h1>
            <p className="text-xl text-gray-600">
              📅 Updated: February 24, 2025
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p><strong>Google searches for "new age restrictions on cruises" have surged by 800% in the last 24 hours</strong>, signaling widespread concern among travelers. Major cruise lines, including <strong>Carnival and Royal Caribbean</strong>, have introduced stricter age policies, significantly impacting young adults, college travelers, and families planning vacations.</p>
            
            <p className="mt-4">For Chicago-based travelers looking for <strong>affordable getaway options</strong>, these changes could reshape their cruise plans.</p>
            
            <p className="mt-4">Here's everything you need to know about <strong>the new age restrictions, why they were implemented, and how they will affect future bookings</strong>.</p>

            {/* Add the image here */}
            <div className="my-8">
              <img 
                src="/images/fernando-jorge-Q2B08QyXKC4-unsplash.jpg"
                alt="Cruise Ship"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">📌 The New Cruise Age Restrictions: What's Changing?</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">🚨 Carnival Cruise Line's Updated Age Policy (2024)</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>🔹 <strong>New Rule:</strong> As of <strong>February 1, 2024</strong>, passengers under <strong>21 years old</strong> <strong>cannot</strong> book a Carnival cruise alone.</li>
              <li>🔹 <strong>Guardian Requirement:</strong> Travelers <strong>under 21 must be accompanied by someone at least 25 years old</strong>.</li>
              <li>🔹 <strong>Prior Rule:</strong> Previously, <strong>18-year-olds</strong> could book cabins independently.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">🚨 Royal Caribbean's Policy (Existing)</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>🔹 Requires passengers <strong>under 21</strong> to be accompanied by a guardian aged <strong>at least 21</strong> (for North American sailings).</li>
              <li>🔹 Some international sailings allow <strong>18-year-olds</strong> to book alone, but <strong>this depends on the departure country</strong>.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">🚨 Disney Cruise Line & Others</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>🔹 <strong>Disney Cruise Line:</strong> Minimum age to book alone is <strong>18</strong>, but some ships require an adult (21+) in a cabin.</li>
              <li>🔹 <strong>Other Cruise Lines:</strong> Many <strong>luxury and adult-focused cruises</strong> are increasing minimum age policies to enhance the onboard experience.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">💡 Why Are Cruise Lines Enforcing Stricter Age Restrictions?</h2>
            
            <p>These updated age policies aren't random—they align with industry trends and address safety, liability, and evolving travel demographics.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">🛑 1. Safety & Supervision Concerns</h3>
            
            <p>Large cruise ships are floating cities with nightclubs, casinos, and alcohol-serving bars. Without proper supervision, younger passengers may engage in risky behavior. Stricter policies ensure that minors and young adults have a responsible guardian onboard.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">⚖️ 2. Legal & Liability Issues</h3>
            
            <p>Cruises must comply with international maritime laws and U.S. regulations. Underage drinking, legal responsibility for incidents, and parental consent issues are key concerns.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">🌎 3. Global Age Restrictions & Policy Variations</h3>
            
            <p>Different countries have different legal drinking ages (U.S.: 21, Europe: 18, Mexico: 18). Cruise lines must standardize policies for consistency across international waters.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">🚢 4. Shift Towards Adult-Focused Cruises</h3>
            
            <p>Many cruise lines are targeting older demographics, offering luxury, wellness, and adults-only experiences. Adult-only cruises are on the rise, catering to travelers who prefer a quiet, child-free vacation.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">🌍 How These Changes Impact Young Travelers & Families</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">🎓 College Travelers & Spring Break Groups</h3>
            
            <p>18 to 20-year-olds who previously booked cruises for spring break must now travel with a 25+ chaperone. This affects college students, young couples, and budget-conscious travelers.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">👨‍👩‍👧‍👦 Family Vacation Planning</h3>
            
            <p>Families with older teens (18-20) must adjust their plans, ensuring an adult 25+ is included in the booking.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">📊 The Travel Industry's Response & Future Outlook</h2>
            
            <p>With the cruise industry rebounding in 2025, expect more changes in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>✅ Age-based pricing models (e.g., discounts for 21+ travelers).</li>
              <li>✅ Adult-only cruise options expanding for those seeking a different experience.</li>
              <li>✅ More family-friendly cruise packages with age-based supervision policies.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">✈️ Planning a Trip? Get the Best Travel Deals from Chicago!</h2>
            
            <p>🔔 If you're based in Chicago and looking for affordable flights and cruise deals, subscribe to our exclusive flight alert newsletter for real-time discounts, last-minute sales, and insider travel hacks.</p>
            
            <p>📩 Sign up today and never miss a deal!</p>
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