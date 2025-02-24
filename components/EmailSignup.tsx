export default function EmailSignup() {
  return (
    <div className="border-t border-b py-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 font-league-spartan">Why pay full price?</h2>
        <p className="text-gray-600 mb-3">Get instant alerts for flight deals to anywhere in the world. Join our free service!</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8] focus:border-transparent"
          />
          <button className="px-6 py-2 bg-[#00A8E8] text-white font-semibold rounded-lg hover:bg-[#0096d1] transition-colors">
            Alert Me!
          </button>
        </div>
      </div>
    </div>
  )
} 