import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="mb-8">
        <span className="text-lg font-bold tracking-tight">
          <span className="text-[#00A8E8]">Best</span>
          <span className="text-gray-800">Flight</span>
          <span className="text-[#00A8E8]">Alerts</span>
        </span>
      </div>
      <div className="text-base text-gray-600">
        <p className="mb-2">© 2028 BestFlightAlerts</p>
        <Link href="/privacy" className="text-[#00A8E8] hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
} 