"use client"

import Link from "next/link"
import { Anchor, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()

  return (
    <header className="fixed top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-gray-700">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 font-bold">
          <Anchor className="h-6 w-6 text-red-500" />
          <span className="text-xl font-extrabold text-white">Pudge Hook Tracker</span>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-auto text-white hover:bg-gray-800 hover:text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 border-gray-700">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#about" className="text-lg font-medium text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link
                  href="#leaderboard"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Leaderboard
                </Link>
                <Link href="#rules" className="text-lg font-medium text-gray-300 hover:text-white transition-colors">
                  Rules
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="ml-auto flex gap-6">
            <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#leaderboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Leaderboard
            </Link>
            <Link href="#rules" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Rules
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
