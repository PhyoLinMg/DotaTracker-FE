import { LeaderBoard } from "@/model/leaderboard";
import { axiosClient } from "./client/axios_client";
import { ProcessingResponse } from "@/model/processing_response";

export async function getLeaderBoard(): Promise<LeaderBoard[]>{
    console.log("getLeaderBoard fetching")
    const response = await axiosClient.get<LeaderBoard[]>("/leaderboard/top");
    return response;
}

export async function searchPlayer(key: string): Promise<LeaderBoard[]> {
    const response = await axiosClient.get<LeaderBoard[]>(`/leaderboard/search?name=${key}`);
    return response;
}

export async function processMatch(matchId: string): Promise<ProcessingResponse>{
    const response= await axiosClient.post<ProcessingResponse>(`/hooks/process/${matchId}`);
    return response;
}

