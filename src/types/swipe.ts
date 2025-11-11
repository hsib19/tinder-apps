import { Profile } from "./profile";

export type SwipeOrientation = "horizontal" | "vertical";

export interface SwipeCallbacks {
    onSwipeLeft?: (id: string) => void;
    onSwipeRight?: (id: string) => void;
    onSwipeUp?: (id: string) => void;
    onSwipeDown?: (id: string) => void;
    onRewind?: () => void;
}

export interface SwipeCardProps {
    profile: Profile;
    orientation?: SwipeOrientation;
    onSwipeLeft?: (id: string) => void;
    onSwipeRight?: (id: string) => void;
    onSwipeUp?: (id: string) => void;
    onSwipeDown?: (id: string) => void;
    onRewind?: () => void;
}
