import { useQuery } from "@tanstack/react-query";
import { Profile } from "../types/profile";
import { getLikedUsers, getRecommendations } from "../services/apiService";

export const useRecommendations = (page = 1, per_page = 5) => {
    return useQuery<Profile[], Error>({
        queryKey: ["recommendations", page],
        queryFn: async () => {
            const response: Profile[] = await getRecommendations(page, per_page);
            return response; 
        },
        placeholderData: (prev) => prev,
    });
};

export const useLikes = (page = 1) => {
    return useQuery<Profile[], Error>({
        queryKey: ["recommendations", page],
        queryFn: async () => {
            const response: Profile[] = await getLikedUsers();
            return response;
        },
        placeholderData: (prev) => prev,
    });
};
