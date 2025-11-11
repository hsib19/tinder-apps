import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SwipeStoryCard from "./SwipeStoryCard";
import { useSwipeDeck } from "../../hooks/useSwipeDeck";
import { initialProfiles } from "../../data/profiles";

const SwipeStoryDeck: React.FC = () => {

    const {
        topProfile,
        handleSwipeLeft,
        handleSwipeRight,
        handleRewind,
    } = useSwipeDeck(initialProfiles);

    return (
        <View style={styles.container}>
            {topProfile && (
                <SwipeStoryCard
                    key={topProfile.id}
                    profile={topProfile}
                    onSwipeLeft={handleSwipeLeft}
                    onSwipeRight={handleSwipeRight}
                    onRewind={handleRewind}
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
