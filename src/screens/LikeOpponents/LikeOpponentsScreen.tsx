import React from "react";
import { StatusBar } from "react-native";
import ScreenContainer from "../../components/templates/ScreenContainer";
import SwipeStoryDeck from "../../components/organism/SwipeStoryDeck";
import { colors } from "../../theme";
import { useLikedStore } from "../../stores/likedStore";

const LikeOpponentsScreen = () => {

    const likedProfiles = useLikedStore((state) => state.likedProfiles);

    return (
        <>
            <StatusBar barStyle={"dark-content"} backgroundColor={colors.surface} />
            <ScreenContainer>
                <SwipeStoryDeck profiles={likedProfiles} orientation="vertical" />
            </ScreenContainer>
        </>
    );
};

export default LikeOpponentsScreen;
