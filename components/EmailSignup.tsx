export default function EmailSignup() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 my-12">
      <h2 className="text-3xl font-bold mb-4 font-league-spartan">Why pay full price?</h2>
      <p className="text-gray-600 text-lg mb-6">
        Get instant alerts for flight deals to anywhere in the world. Join our free service!
      </p>
      
      <div className="flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00A8E8]"
        />
        <button className="bg-[#00A8E8] text-white px-8 py-3 rounded-lg hover:bg-[#0096d1] transition-colors font-semibold">
          Alert Me!
        </button>
      </div>
    </div>
  )
} 