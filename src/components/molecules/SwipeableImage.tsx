import React from "react";
import { StyleSheet, View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import ProfileImage from "../atoms/ProfileImage";
import OverlayGradient from "../atoms/OverlayGradient";
import StoryProgressBar from "./StoryProgressBar";
import { ProfilePictures } from "../../types/profile";

interface Props {
    pictures: ProfilePictures[];
    activeIndex: number;
    progress: SharedValue<number>;
    children?: React.ReactNode; 
}

const SwipeableImage: React.FC<Props> = ({ pictures, activeIndex, progress, children }) => {
    const safeIndex = Math.max(0, Math.min(activeIndex, pictures.length - 1));

    return (
        <View style={styles.container}>
            <ProfileImage uri={pictures[safeIndex].url} />
            <StoryProgressBar count={pictures.length} activeIndex={activeIndex} progress={progress} />
            <OverlayGradient>
                <View style={styles.overlay}>{children}</View>
            </OverlayGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 16,
        overflow: "hidden",
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        padding: 16,
        justifyContent: "flex-end",
    },
});

export default SwipeableImage;
