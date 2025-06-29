import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { Leaderboard } from "@/components/leaderboard"
import { RulesSection } from "@/components/rules-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Toaster />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Leaderboard />
        <RulesSection />
      </main>
      <Footer />
    </div>
  )
}
