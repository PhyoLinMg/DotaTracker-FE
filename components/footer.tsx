import Link from "next/link"
import { Anchor } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-700 py-12 bg-gray-950">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <Anchor className="h-5 w-5 text-red-500" />
          <p className="text-gray-300">Pudge Hook Tracker &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="#" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
