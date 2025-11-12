import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SwipeStoryCard from "./SwipeStoryCard";
import { useSwipeDeck } from "../../hooks/useSwipeDeck";
import { SwipeCallbacks } from "../../types/swipe";
import { Profile } from "../../types/profile";

type SwipeOrientation = "horizontal" | "vertical";

interface SwipeStoryDeckProps {
    orientation?: SwipeOrientation;
    per_page?: number;
    profiles: Profile[],
    setPage?: React.Dispatch<React.SetStateAction<number>>;
}

const SwipeStoryDeck: React.FC<SwipeStoryDeckProps> = ({ orientation = "vertical", profiles = [], setPage }) => {

    const {
        topProfile,
        handleSwipeLeft,
        handleSwipeRight,
        handleSwipeUp,
        handleSwipeDown,
        handleRewind,
    } = useSwipeDeck(profiles);

    const swipeCallbacks: SwipeCallbacks = {
        onSwipeLeft: orientation === "horizontal" ? handleSwipeLeft : undefined,
        onSwipeRight: orientation === "horizontal" ? handleSwipeRight : undefined,
        onSwipeUp: orientation === "vertical" ? handleSwipeUp : undefined,
        onSwipeDown: orientation === "vertical" ? handleSwipeDown : undefined,
        onRewind: handleRewind,
    };

    useEffect(() => {
        if (!topProfile && profiles.length > 0) {
            if (setPage) setPage((p) => p + 1);
        }
    }, [topProfile, profiles.length, setPage]);

    return (
        <View style={styles.container}>
            {topProfile && (
                <SwipeStoryCard
                    key={topProfile.id}
                    profile={topProfile}
                    orientation={orientation}
                    onSwipeLeft={orientation === "horizontal" ? handleSwipeLeft : () => { }}
                    onSwipeRight={orientation === "horizontal" ? handleSwipeRight : () => { }}
                    onSwipeUp={orientation === "vertical" ? handleSwipeUp : () => { }}
                    onSwipeDown={orientation === "vertical" ? handleSwipeDown : () => { }}
                    onRewind={handleRewind}
                    {...swipeCallbacks}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

export default SwipeStoryDeck;
