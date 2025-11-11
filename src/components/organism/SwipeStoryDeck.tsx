import React from "react";
import { View, StyleSheet } from "react-native";
import SwipeStoryCard from "./SwipeStoryCard";
import { useSwipeDeck } from "../../hooks/useSwipeDeck";
import { initialProfiles } from "../../data/profiles";
import { SwipeCallbacks } from "../../types/swipe";

type SwipeOrientation = "horizontal" | "vertical";

interface SwipeStoryDeckProps {
    orientation?: SwipeOrientation;
}

const SwipeStoryDeck: React.FC<SwipeStoryDeckProps> = ({ orientation = "vertical" }) => {
    const {
        topProfile,
        handleSwipeLeft,
        handleSwipeRight,
        handleSwipeUp,
        handleSwipeDown,
        handleRewind,
    } = useSwipeDeck(initialProfiles);

    const swipeCallbacks: SwipeCallbacks = {
        onSwipeLeft: orientation === "horizontal" ? handleSwipeLeft : undefined,
        onSwipeRight: orientation === "horizontal" ? handleSwipeRight : undefined,
        onSwipeUp: orientation === "vertical" ? handleSwipeUp : undefined,
        onSwipeDown: orientation === "vertical" ? handleSwipeDown : undefined,
        onRewind: handleRewind,
    };

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
