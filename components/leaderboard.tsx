"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Sample data for the leaderboard
const leaderboardData = [
  {
    id: 1,
    player: "MiracleHooker",
    totalHooks: 1250,
    successRate: 68,
    longestHook: 1200,
  },
  {
    id: 2,
    player: "DendiFan123",
    totalHooks: 980,
    successRate: 72,
    longestHook: 1150,
  },
  {
    id: 3,
    player: "HookMaster",
    totalHooks: 1540,
    successRate: 65,
    longestHook: 1300,
  },
  {
    id: 4,
    player: "PudgeLegend",
    totalHooks: 2100,
    successRate: 70,
    longestHook: 1250,
  },
  {
    id: 5,
    player: "FreshMeat",
    totalHooks: 850,
    successRate: 60,
    longestHook: 1100,
  },
  {
    id: 6,
    player: "HookOrFeed",
    totalHooks: 1750,
    successRate: 67,
    longestHook: 1350,
  },
  {
    id: 7,
    player: "ButcherOfDire",
    totalHooks: 1320,
    successRate: 71,
    longestHook: 1180,
  },
]

export function Leaderboard() {
  const []= useState()
  const [searchTerm, setSearchTerm] = useState("")

  // Filter and sort the data

  useEffect(()=>{
     async function fetchLeaderBoard(){

     }
     fetchLeaderBoard()
  })
 

  return (
    <section id="leaderboard" className="py-24 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Hook Leaderboard</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compete with the best Pudge players and climb the ranks
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search players..."
              className="pl-10 bg-gray-900/90 border-gray-600 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="border border-gray-600 rounded-lg overflow-hidden bg-gray-900/90 backdrop-blur-sm shadow-2xl">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-gray-800/50 bg-gray-800/30">
                <TableHead className="text-gray-200 font-bold text-base">Rank</TableHead>
                <TableHead className="text-gray-200 font-bold text-base">Player</TableHead>
                <TableHead className="text-right text-gray-200 font-bold text-base">Total Hooks</TableHead>
                <TableHead className="text-right text-gray-200 font-bold text-base">Success Rate</TableHead>
                <TableHead className="text-right text-gray-200 font-bold text-base">Longest Hook (units)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((player, index) => (
                <TableRow key={player.id} className="border-gray-700 hover:bg-gray-800/40 transition-colors">
                  <TableCell className="font-bold text-white text-base">{index + 1}</TableCell>
                  <TableCell className="font-bold text-white text-base">{player.player}</TableCell>
                  <TableCell className="text-right text-gray-300 text-base font-medium">{player.totalHooks}</TableCell>
                  <TableCell className="text-right text-gray-300 text-base font-medium">
                    {player.successRate}%
                  </TableCell>
                  <TableCell className="text-right text-gray-300 text-base font-medium">{player.longestHook}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
