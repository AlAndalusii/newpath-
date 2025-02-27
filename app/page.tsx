"use client"

import Home from "../page"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Plane } from "lucide-react"
import StatusIndicator from "@/components/StatusIndicator"

export default function SyntheticV0PageForDeployment() {
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

  const recentDeals = [
    {
      route: "Chicago to Paris",
      price: "$399",
      status: "active" as const,
      link: "#"
    },
    {
      route: "Chicago to Tokyo",
      price: "$650",
      status: "ending-soon" as const,
      link: "#"
    },
    {
      route: "Chicago to Cancun",
      price: "$199",
      status: "expired" as const,
      link: "#"
    }
  ]

  return <Home />
}