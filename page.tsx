"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Plane, Check } from "lucide-react"

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "beehiiv-form-submitted") {
        setIsSubscribed(true)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <main className="text-xl">
      <header className="flex items-center justify-between px-6 py-4 text-base">
        <Link href="/" className="flex items-center gap-2 text-black no-underline">
          <div className="flex items-center bg-[#00A8E8] rounded-lg p-1">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[#00A8E8]">Best</span>
            <span className="text-gray-800">Flight</span>
            <span className="text-[#00A8E8]">Alerts</span>
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

      <div className="relative min-h-[600px] flex items-center justify-center text-center px-4 bg-gray-900">
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#00A8E8] block mb-2">Free Weekly</span>
            <span className="text-white">Flight Deals Newsletter</span>
          </h1>
          <p className="text-white text-2xl mb-10">
            Join 50k+ subscribers to get the best flight deals from Chicago. Save up to 60% on international and
            domestic flights.
          </p>
          {isSubscribed ? (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-2xl"
              role="alert"
            >
              <span className="flex items-center justify-center">
                <Check className="w-8 h-8 mr-3" />
                Successfully subscribed! Check your email for confirmation.
              </span>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <iframe
                src="https://embeds.beehiiv.com/30ad47ac-cfd0-4c8a-b68a-489fa999d343?slim=true"
                data-test-id="beehiiv-embed"
                height="64"
                width="100%"
                frameBorder="0"
                scrolling="no"
                style={{
                  margin: 0,
                  borderRadius: 0,
                  backgroundColor: "transparent",
                }}
              />
            </div>
          )}
          <p className="text-white text-lg mt-6 opacity-90">All deals. No spam. Deal hunters Only ✈️</p>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-8 space-y-6">
            <p className="text-gray-800">
              Hey Chicago! I'm Zak, Chief Deal Finder at BestFlightAlerts. I use smart technology to hunt down the best
              deals from O'Hare and Midway airports.
            </p>
            <p className="text-gray-700">
              Remember constantly checking flight prices from Chicago? I got tired of that too. That's why I built a
              system that does the work for you. Our technology scans flights daily from ORD and MDW, alerting you when
              prices drop on routes you care about.
            </p>
            <p className="text-gray-700">
              Just tell us where you want to go, and we'll send you real Chicago deals that save you money. We're
              talking $250 flights to Europe from O'Hare, $400 to Asia, or weekend getaways to Miami for less than
              dinner. No complicated fees - just simple flight alerts.
            </p>
            <p className="text-gray-700">
              Join thousands of happy Chicago travellers who save big. Sign up for free alerts today and never overpay
              for flights from our city again.
            </p>
          </div>

          <div className="border rounded-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Best articles to start with:</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/articles/southwest-near-miss" className="text-[#00A8E8] hover:underline">
                    When Is the Best Time to Book a Flight?
                  </Link>
                </li>
                <li>
                  <Link href="/articles/caribbean-direct-flights" className="text-[#00A8E8] hover:underline">
                    Direct Flights from Chicago to the Caribbean
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Recent Flight Deals from Chicago</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Plane className="h-5 w-5 mr-2 text-[#00A8E8]" />
                  <Link href="#" className="text-[#00A8E8] hover:underline">
                    Chicago to Paris: $399 Round Trip
                  </Link>
                </li>
                <li className="flex items-center">
                  <Plane className="h-5 w-5 mr-2 text-[#00A8E8]" />
                  <Link href="#" className="text-[#00A8E8] hover:underline">
                    Chicago to Tokyo: $650 Round Trip
                  </Link>
                </li>
                <li className="flex items-center">
                  <Plane className="h-5 w-5 mr-2 text-[#00A8E8]" />
                  <Link href="#" className="text-[#00A8E8] hover:underline">
                    Chicago to Cancun: $199 Round Trip
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New email sign-up section */}
      <section className="container mx-auto px-4 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border rounded-lg p-8 bg-gray-50">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Why pay full price?</h2>
            <p className="text-base md:text-lg text-gray-600">
              Get instant alerts for flight deals to anywhere in the world. Join our free service!
            </p>
          </div>
          <div className="md:w-1/2 w-full max-w-lg mt-4 md:mt-0">
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
      </section>

      <footer className="py-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2">
            <div className="flex items-center bg-[#00A8E8] rounded-lg p-1">
              <Plane className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[#00A8E8]">Best</span>
              <span className="text-gray-800">Flight</span>
              <span className="text-[#00A8E8]">Alerts</span>
            </span>
          </div>
        </div>
        <div className="text-base text-gray-600">
          <p className="mb-2">© 2028 BestFlightAlerts</p>
          <Link href="/privacy" className="text-[#00A8E8] hover:underline">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  )
}

