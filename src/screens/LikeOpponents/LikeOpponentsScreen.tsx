import React from "react";
import { StatusBar } from "react-native";
import ScreenContainer from "../../components/templates/ScreenContainer";
import SwipeStoryDeck from "../../components/organism/SwipeStoryDeck";
import { colors } from "../../theme";

const MainScreen = () => {
    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.surface} />
            <ScreenContainer>
                <SwipeStoryDeck orientation="vertical" />
            </ScreenContainer>
        </>
    );
};

export default MainScreen;
