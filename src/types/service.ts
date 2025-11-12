import { Profile } from "./profile";

/**
 * Generic API response
 */
export interface ApiResponse<T> {
    data: T;
    pagination?: {
        page: number;
        per_page: number;
        total: number;
    };
}

/**
 * Pagination options
 */
export interface PaginationOptions {
    page?: number;
    per_page?: number;
}

/**
 * Request body untuk like/dislike user
 * Kalau API menerima data tambahan, bisa ditambahkan di sini
 */
export interface UserActionRequest {
    user_id: string;
}

/**
 * Service functions return types
 */
export type GetRecommendationsResponse = Profile[];
export type GetLikedUsersResponse = Profile[];
export type LikeUserResponse = void;
export type DislikeUserResponse = void;


/**
 * Request body untuk like/dislike user
 * Kalau API menerima data tambahan, bisa ditambahkan di sini
 */
export interface UserActionRequest {
    user_id: string;
}

/**
 * Service functions return types
 */
export interface Location {
    city: string;
    country: string;
    latitude: string;
    longitude: string;
}

export interface Picture {
    id: number;
    url: string;
    is_primary: boolean;
}

/** =================================
 * Recommendations API
 * ================================= */
export interface Pagination {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
}

export interface RecommendationsResponse {
    data: Profile[];
    pagination: Pagination;
}

/** =================================
 * Like/Dislike API
 * ================================= */
export interface LikeDislikeData {
    liker_id: number;
    liked_id?: number;
    disliked_id?: number;
}

export interface LikeDislikeResponse {
    success: boolean;
    message: string;
    data: LikeDislikeData;
}

/** =================================
 * Get liked users API
 * ================================= */
export interface LikedUsersData {
    count: number;
    users: Profile[];
}

export interface LikedUsersResponse {
    success: boolean;
    message: string;
    data: LikedUsersData;
}

