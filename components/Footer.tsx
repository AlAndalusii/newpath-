import Link from 'next/link'
import { Plane } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pt-2 pb-4">
      <div className="flex items-center justify-center mb-2">
        <div className="bg-[#E8F7FC] rounded-full p-3">
          <Plane className="h-5 w-5 text-[#00A8E8]" />
        </div>
      </div>
      <div className="text-center text-sm text-gray-600 space-y-1">
        <p>© 2024 BestFlightAlerts</p>
        <Link href="/privacy" className="text-[#00A8E8] hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
} 