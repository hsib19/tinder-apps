import api from "../client/api";
import { Profile } from "../types/profile";
import { ApiResponse, RecommendationsResponse, LikeDislikeData, LikedUsersData } from "../types/service";

export const getRecommendations = async (page = 1, per_page = 5) => {
    const { data } = await api.get<ApiResponse<Profile[]>>("/recommendations", {
        params: { page, per_page },
    });

    return data.data;
};

export const likeUser = async (user_id: string): Promise<LikeDislikeData> => {
    const { data } = await api.post<ApiResponse<LikeDislikeData>>(`/users/${user_id}/like`);
    return data.data;
};

export const disLikeUser = async (user_id: string): Promise<LikeDislikeData> => {
    const { data } = await api.post<ApiResponse<LikeDislikeData>>(`/users/${user_id}/dislike`);
    return data.data;
};

export const getLikedUsers = async (): Promise<Profile[]> => {
    const { data } = await api.get<ApiResponse<LikedUsersData>>("/users/liked");
    return data.data.users;
};
