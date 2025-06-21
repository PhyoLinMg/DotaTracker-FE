import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { Leaderboard } from "./components/leaderboard"
import { RulesSection } from "./components/rules-section"
import { Footer } from "./components/footer"
import "./app.css"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
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

export default App
