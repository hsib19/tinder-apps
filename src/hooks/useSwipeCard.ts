import { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { Gesture } from "react-native-gesture-handler";
import { scheduleOnRN } from "react-native-worklets";
import { ProfilePictures } from "../types/profile";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

interface UseSwipeCardParams {
    id: string;
    pictures: ProfilePictures[];
    isTopCard?: boolean;
    onSwipeLeft: (id: string) => void;
    onSwipeRight: (id: string) => void;
    onSwipeUp?: (id: string) => void;     
    onSwipeDown?: (id: string) => void; 
    onRewind: () => void;
    orientation?: "horizontal" | "vertical";
}

export const useSwipeCard = ({
    id,
    pictures,
    isTopCard = true,
    onSwipeLeft,
    onSwipeRight,
    onRewind,
    onSwipeUp,
    onSwipeDown,
    orientation = "horizontal",
}: UseSwipeCardParams) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const rotate = useSharedValue(0);

    const [activeIndex, setActiveIndex] = useState(0);
    const progress = useSharedValue(0);
    const progressDone = useRef(false);

    useEffect(() => {
        if (!isTopCard) return;

        const interval = setInterval(() => {
            if (progress.value >= 1 && !progressDone.current) {
                progressDone.current = true;
                if (activeIndex < pictures.length - 1) {
                    setActiveIndex((prev) => prev + 1);
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, [activeIndex, pictures.length, isTopCard]);

    useEffect(() => {
        if (!isTopCard) return;
        progressDone.current = false;
        progress.value = 0;
        progress.value = withTiming(1, { duration: 3000 });
    }, [activeIndex, isTopCard]);

    useEffect(() => {
        if (!isTopCard) return;
        setActiveIndex(0);
        progressDone.current = false;
        progress.value = 0;
        progress.value = withTiming(1, { duration: 3000 });
        return () => {
            progress.value = 0;
        };
    }, [id, isTopCard]);

    const resetPosition = () => {
        "worklet";
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        rotate.value = withSpring(0);
    };

    const panGesture = Gesture.Pan()
        .onUpdate((event) => {
            if (orientation === "horizontal") {
                translateX.value = event.translationX;
                translateY.value = 0;
                rotate.value = event.translationX / 20;
            } else {
                translateY.value = event.translationY;
                translateX.value = 0;
            }
        })
        .onEnd(() => {
            if (orientation === "horizontal") {
                if (translateX.value > SWIPE_THRESHOLD) {
                    if (onSwipeRight) scheduleOnRN(onSwipeRight, id);
                } else if (translateX.value < -SWIPE_THRESHOLD) {
                    if (onSwipeLeft) scheduleOnRN(onSwipeLeft, id);
                } else {
                    resetPosition();
                }
            } else {
                if (translateY.value < -SWIPE_THRESHOLD) {
                    if (onSwipeUp) scheduleOnRN(onSwipeUp, id);
                } else if (translateY.value > SWIPE_THRESHOLD) {
                    if (onSwipeDown) scheduleOnRN(onSwipeDown, id);
                } else {
                    resetPosition();
                }
            }
        });


    const tapLeft = Gesture.Tap().onEnd(() => {
        scheduleOnRN(() => {
            if (activeIndex > 0) setActiveIndex(activeIndex - 1);
        });
    });

    const tapRight = Gesture.Tap().onEnd(() => {
        scheduleOnRN(() => {
            if (activeIndex < pictures.length - 1) setActiveIndex(activeIndex + 1);
        });
    });

    const rewind = () => {
        "worklet";
        resetPosition();
        scheduleOnRN(onRewind);
    };

    const swipeRight = () => {
        "worklet";
        translateX.value = withSpring(-SCREEN_WIDTH);
        rotate.value = withSpring(-10);
        scheduleOnRN(onSwipeRight, id);
    };

    const swipeLeft = () => {
        "worklet";
        translateX.value = withSpring(SCREEN_WIDTH);
        rotate.value = withSpring(10);
        scheduleOnRN(onSwipeLeft, id);
    };

    const swipeUp = () => {
        "worklet";
        translateY.value = withSpring(-SCREEN_WIDTH);
        if (onSwipeUp) scheduleOnRN(onSwipeUp, id);
    };

    const swipeDown = () => {
        "worklet";
        translateY.value = withSpring(SCREEN_WIDTH);
        if (onSwipeDown) scheduleOnRN(onSwipeDown, id);
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { rotate: `${rotate.value}deg` },
        ],
    }));

    return {
        activeIndex,
        progress,
        animatedStyle,
        panGesture,
        tapLeft,
        tapRight,
        rewind,
        swipeRight,
        swipeLeft,
        swipeUp,
        swipeDown
    };
};
