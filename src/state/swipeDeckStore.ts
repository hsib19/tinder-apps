import { create } from "zustand";
import { Profile } from "../types/profile";

interface SwipeDeckState {
    profiles: Profile[];
    history: Profile[];
    setProfiles: (profiles: Profile[]) => void;
    swipe: (id: string) => void;
    rewind: () => void;
    topProfile: Profile | null;
}

export const useSwipeDeckStore = create<SwipeDeckState>((set, get) => ({
    profiles: [],
    history: [],
    topProfile: null,

    setProfiles: (profiles) =>
        set({
            profiles,
            history: [],
            topProfile: profiles.length > 0 ? profiles[profiles.length - 1] : null,
        }),

    swipe: (id) => {
        const { profiles, history } = get();
        const swiped = profiles.find((p) => p.id === id);
        if (!swiped) return;
        const newProfiles = profiles.filter((p) => p.id !== id);
        set({
            profiles: newProfiles,
            history: [swiped, ...history],
            topProfile: newProfiles.length > 0 ? newProfiles[newProfiles.length - 1] : null,
        });
    },

    rewind: () => {
        const { profiles, history } = get();
        if (history.length === 0) return;
        const [last, ...rest] = history;
        const newProfiles = [...profiles, last];
        set({
            profiles: newProfiles,
            history: rest,
            topProfile: newProfiles.length > 0 ? newProfiles[newProfiles.length - 1] : null,
        });
    },
}));
