import React, { useState } from "react";
import { StatusBar } from "react-native";
import ScreenContainer from "../../components/templates/ScreenContainer";
import SwipeStoryDeck from "../../components/organism/SwipeStoryDeck";
import { colors } from "../../theme";
import { useRecommendations } from "../../hooks/userHooks";
import Loader from "../../components/atoms/Loader";
import ErrorMessage from "../../components/atoms/ErrorMessage";

const MainScreen: React.FC = () => {
    const [page, setPage] = useState(1);
    const per_page = 5;

    const {
        data: profiles = [],
        isLoading,
        isError,
    } = useRecommendations(page, per_page);

    if (isLoading) return <Loader message="Loading recommendations..." />;
    if (isError) return <ErrorMessage message={"User not found!"} />;

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />
            <ScreenContainer>
                <SwipeStoryDeck
                    profiles={profiles}
                    orientation="horizontal"
                    per_page={per_page}
                    setPage={setPage}
                />
            </ScreenContainer>
        </>
    );
};

export default MainScreen;
