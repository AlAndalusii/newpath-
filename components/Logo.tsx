// components/Logo.tsx
import Link from "next/link";
import { Plane } from "lucide-react";

export default function Logo() {
  return (
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
  );
}
