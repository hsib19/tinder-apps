import { create } from "zustand";
import { Profile } from "../types/profile";

interface ProfileState {
    selectedProfile: Profile | null;
    setSelectedProfile: (profile: Profile | null) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
    selectedProfile: null,
    setSelectedProfile: (profile) => set({ selectedProfile: profile }),
}));
