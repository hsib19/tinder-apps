import { create } from "zustand";
import { Profile } from "../types/profile";

interface LikedState {
    likedProfiles: Profile[];
    addLiked: (profile: Profile) => void;
    removeLiked: (id: string) => void;
    clearLiked: () => void;
}

export const useLikedStore = create<LikedState>((set) => ({
    likedProfiles: [],
    addLiked: (profile) =>
        set((state) => ({
            likedProfiles: [...state.likedProfiles, profile],
        })),
    removeLiked: (id) =>
        set((state) => ({
            likedProfiles: state.likedProfiles.filter((p) => p.id !== id),
        })),
    clearLiked: () => set({ likedProfiles: [] }),
}));
