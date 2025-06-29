"use client"

import { useEffect, useState, useCallback } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { LeaderBoard } from "@/model/leaderboard"
import { getLeaderBoard, searchPlayer } from "@/services/dota_service"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Custom debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Sample data for the leaderboard
export function Leaderboard() {
  const [leaderboardData, setLeaderboardData]= useState<LeaderBoard[]>()
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError]= useState("")
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<LeaderBoard[] | null>(null);

  // Debounce the search term with 500ms delay
  const debouncedSearchTerm = useDebounce(searchTerm, 500);


  const handleSearchClick = () => {
    setIsSearchDialogOpen(true)
  }
  useEffect(()=>{
     async function fetchLeaderBoard(){
        console.log("fetching");
        try{
          const data= await getLeaderBoard();
          setLeaderboardData(data)
        } catch(error){
          console.error('Failed to fetch parcels:', error);
        }
     }
     fetchLeaderBoard()
  },[])


  useEffect(() =>{
    async function search(){
      // Only search if there's a search term
      if (!debouncedSearchTerm.trim()) {
        setSearchResults(null);
        return;
      }
      
      try{
        const data= await searchPlayer(debouncedSearchTerm);
        setSearchResults(data)
      } catch(error){
        console.error('Failed to fetch search:', error);
      }
    }
    search()
  },[debouncedSearchTerm])

  
  if(leaderboardData==null) return <div>{error}</div>

  return (
    <section id="leaderboard" className="py-24 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Hook Leaderboard</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compete with the best Pudge players and climb the ranks
          </p>
        </div>

        <div className="flex w-full sm:max-w-xs gap-2 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search players..."
              className="pl-10 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={handleSearchClick} className="bg-red-600 text-white hover:bg-red-700 px-3">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="border border-gray-500 rounded-lg overflow-hidden bg-gray-800 backdrop-blur-sm shadow-2xl">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-600 hover:bg-gray-700 bg-gray-700">
                <TableHead className="text-white font-bold text-base">Rank</TableHead>
                <TableHead className="text-white font-bold text-base">Player</TableHead>
                <TableHead className="text-right text-white font-bold text-base">Total Hooks</TableHead>
                <TableHead className="text-right text-white font-bold text-base">Success Rate</TableHead>
                <TableHead className="text-right text-white font-bold text-base">Total Matches</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((player, index) => (
                  <TableRow key={player.id} className="border-gray-600 hover:bg-gray-700 transition-colors">
                    <TableCell className="font-bold text-white text-base">{index + 1}</TableCell>
                    <TableCell className="font-bold text-white text-base">{player.player}</TableCell>
                    <TableCell className="text-right text-gray-100 text-base font-medium">
                      {player.totalHooks}
                    </TableCell>
                    <TableCell className="text-right text-gray-100 text-base font-medium">
                      {player.successRate}%
                    </TableCell>
                    <TableCell className="text-right text-gray-100 text-base font-medium">
                      {player.matchCount}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        {/* Search Results Dialog */}
        <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
          <DialogContent className="sm:max-w-[600px] bg-white max-h-[80vh] overflow-hidden flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-gray-900">Search Results</DialogTitle>
              <DialogDescription className="text-gray-600">
                {searchResults?.length || 0} player(s) found {searchTerm && `matching "${searchTerm}"`}
              </DialogDescription>
            </DialogHeader>

            <div className="flex-1 overflow-auto border border-gray-300 rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-300 bg-gray-50">
                    <TableHead className="text-gray-900 font-bold">Rank</TableHead>
                    <TableHead className="text-gray-900 font-bold">Player</TableHead>
                    <TableHead className="text-right text-gray-900 font-bold">Total Hooks</TableHead>
                    <TableHead className="text-right text-gray-900 font-bold">Success Rate</TableHead>
                    <TableHead className="text-right text-gray-900 font-bold">Longest Hook</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {searchResults ? (
                    searchResults.map((player, index) => (
                      <TableRow key={player.id} className="border-gray-300 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900">{index + 1}</TableCell>
                        <TableCell className="font-medium text-gray-900">{player.player}</TableCell>
                        <TableCell className="text-right text-gray-700">{player.totalHooks}</TableCell>
                        <TableCell className="text-right text-gray-700">{player.successRate}%</TableCell>
                        <TableCell className="text-right text-gray-700">{player.matchCount}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-gray-500 py-8">
                        No players found matching "{searchTerm}"
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
