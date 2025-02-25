import Link from 'next/link';
import Navigation from '@/components/Navigation';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

export default function CruiseArticle() {
  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">
            🚢 New Cruise Age Restrictions in 2025: How Carnival & Royal Caribbean Are Changing Travel for Young Passengers
          </h1>
          
          <div className="text-gray-600 mb-8">
            📅 Updated: February 24, 2025
          </div>

          <p className="mb-6">
            <strong>Google searches for "new age restrictions on cruises" have surged by 800% in the last 24 hours</strong>, 
            signaling widespread concern among travelers. Major cruise lines, including 
            <strong>Carnival and Royal Caribbean</strong>, have introduced stricter age policies, 
            significantly impacting young adults, college travelers, and families planning vacations.
          </p>

          <div className="mb-6">
            <img 
              src="/images/fernando-jorge-Q2B08QyXKC4-unsplash.jpg"
              alt="Cruise Ship"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">📌 The New Cruise Age Restrictions: What's Changing?</h2>
          
          <h3 className="text-xl font-bold mt-6 mb-3">🚨 Carnival Cruise Line's Updated Age Policy (2024)</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>New Rule:</strong> As of <strong>February 1, 2024</strong>, passengers under <strong>21 years old</strong> <strong>cannot</strong> book a Carnival cruise alone.</li>
            <li><strong>Guardian Requirement:</strong> Travelers <strong>under 21 must be accompanied by someone at least 25 years old</strong>.</li>
            <li><strong>Prior Rule:</strong> Previously, <strong>18-year-olds</strong> could book cabins independently.</li>
          </ul>

          {/* Comment Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
            <p className="text-gray-600 mb-4">Your email address will not be published. Required fields are marked *</p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700" htmlFor="comment">Comment*</label>
                <textarea id="comment" className="w-full border rounded-lg p-2" rows={4} required></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="name">Name*</label>
                <input id="name" type="text" className="w-full border rounded-lg p-2" required />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="email">Email address*</label>
                <input id="email" type="email" className="w-full border rounded-lg p-2" required />
              </div>
              <div>
                <input type="checkbox" id="save-info" />
                <label className="text-gray-600" htmlFor="save-info">Save my information in this browser for the next time I comment</label>
              </div>
              <button type="submit" className="bg-green-500 text-white rounded-lg px-4 py-2">Post Comment</button>
            </form>
          </div>
        </article>
      </main>

      <div className="max-w-3xl mx-auto">
        <EmailSignup />
      </div>

      <Footer />
    </div>
  );
} 