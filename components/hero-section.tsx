"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { processMatch } from "@/services/dota_service"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [matchId, setMatchId] = useState("")

  const handleSubmitMatch = async () => {
    if (!matchId.trim()) return;
    try {
      const data = await processMatch(matchId);
      toast({
        title: "Match submitted!",
        description: `Match ID ${matchId} submitted successfully! Status: ${data.status}`,
        variant: "default", // green background
      });
      setMatchId("");
      setIsDialogOpen(false);
    } catch (error: any) {
      toast({
        title: "Submission failed",
        description: error?.message || "Failed to submit match.",
        variant: "destructive", // red background
      });
    }
  }

  const scrollToLeaderboard = () => {
    const leaderboardSection = document.getElementById("leaderboard")
    if (leaderboardSection) {
      leaderboardSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 md:pt-0">
      {/* Geometric Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "10px 10px",
          }}
        />
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.1) 35px,
              rgba(255,255,255,0.1) 36px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.1) 35px,
              rgba(255,255,255,0.1) 36px
            )
          `,
          }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            Pudge Hook Tracker for Dota 2
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Used by Dota 2 players worldwide, our tracker enables you to create{" "}
            <span className="text-white font-semibold">high-precision hook statistics</span> with the power of
            competitive gaming analytics.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="large"
                  className="bg-red-600 text-white hover:bg-red-700 font-semibold px-8 py-3 text-lg border-0"
                >
                  Start Tracking
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle className="text-gray-900">Submit Match ID</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Enter your Dota 2 match ID to start tracking your Pudge hooks.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="matchId" className="text-right text-gray-900">
                      Match ID
                    </Label>
                    <Input
                      id="matchId"
                      value={matchId}
                      onChange={(e) => setMatchId(e.target.value)}
                      placeholder="e.g. 7654321098"
                      className="col-span-3 border-gray-300 text-gray-900"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="button"
                    onClick={handleSubmitMatch}
                    className="bg-red-600 text-white hover:bg-red-700"
                    disabled={!matchId.trim()}
                  >
                    Submit Match
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              size="large"
              onClick={scrollToLeaderboard}
              className="border-2 border-white bg-white text-black hover:bg-gray-100 hover:text-black font-semibold px-8 py-3 text-lg"
            >
              View Leaderboard
            </Button>
          </div>

          {/* Command Line */}
        
        </div>

        {/* Info Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="bg-white border-gray-300 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What is Dota 2?</h2>
              <p className="text-gray-700 leading-relaxed">
                Dota 2 is a multiplayer online battle arena (MOBA) game developed by Valve Corporation. Players compete
                in matches as one of over a hundred heroes, with unique abilities and playstyles. The objective is to
                destroy the enemy team's Ancient structure while defending your own. With complex mechanics, team
                strategies, and a high skill ceiling, Dota 2 is one of the most popular esports titles worldwide.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-gray-300 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What is Pudge's Hook?</h2>
              <p className="text-gray-700 leading-relaxed">
                Pudge is one of the most iconic heroes in Dota 2, known for his signature ability "Meat Hook." This
                skill launches a bloody hook in a straight line that can grab enemies or allies, pulling them back to
                Pudge's position. Landing a perfect hook requires precision, prediction, and timing, making it one of
                the most satisfying skills to master in the game. A well-placed hook can instantly turn the tide of
                battle by catching opponents out of position.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
