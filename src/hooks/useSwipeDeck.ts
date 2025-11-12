import { useEffect, useState } from "react";
import { Profile } from "../types/profile";
import { useLikedStore } from "../stores/likedStore";

export const useSwipeDeck = (initialProfiles: Profile[]) => {
    const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);
    const [history, setHistory] = useState<Profile[]>([]);
    const addLiked = useLikedStore((state) => state.addLiked);

    useEffect(() => {
        setProfiles(initialProfiles);
    }, [initialProfiles]);

    const topProfile = profiles[profiles.length - 1]; 

    const handleSwipeLeft = (id: string) => {
        const swiped = profiles.find((p) => p.id === id);
        if (swiped) setHistory((prev) => [swiped, ...prev]);
        setProfiles((prev) => prev.filter((p) => p.id !== id));
    };

    const handleSwipeRight = (id: string) => {
        const swiped = profiles.find((p) => p.id === id);
        if (swiped) {
            setHistory((prev) => [swiped, ...prev]);
            addLiked(swiped); 
        }
        setProfiles((prev) => prev.filter((p) => p.id !== id));
    };

    const handleSwipeUp = (id: string) => {
        const swiped = profiles.find((p) => p.id === id);
        if (swiped) setHistory((prev) => [swiped, ...prev]);
        setProfiles((prev) => prev.filter((p) => p.id !== id));
    };

    const handleSwipeDown = (id: string) => {
        const swiped = profiles.find((p) => p.id === id);
        if (swiped) setHistory((prev) => [swiped, ...prev]);
        setProfiles((prev) => prev.filter((p) => p.id !== id));
    };

    const handleRewind = () => {
        if (history.length === 0) return;
        const [last, ...rest] = history;
        setProfiles((prev) => [...prev, last]);
        setHistory(rest);
    };

    return {
        profiles,
        history,
        topProfile,
        handleSwipeLeft,
        handleSwipeRight,
        handleSwipeUp,
        handleSwipeDown,
        handleRewind,
    };
};
