import Link from 'next/link'
import { Plane } from 'lucide-react'

export default function Navigation() {
  return (
    <header className="flex items-center justify-between px-6 py-4 text-base">
      <Link href="/" className="flex items-center gap-2 text-black no-underline">
        <div className="flex items-center bg-[#00A8E8] rounded-lg p-1">
          <Plane className="h-5 w-5 text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight">
          <span className="text-[#00A8E8]">Best</span><span className="text-gray-800">Flight</span><span className="text-[#00A8E8]">Alerts</span>
        </span>
      </Link>
      
      <nav>
        <ul className="flex items-center gap-6 list-none m-0">
          <li>
            <Link href="/" className="text-black no-underline hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/articles" className="text-black no-underline hover:text-gray-600">
              Articles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
} 