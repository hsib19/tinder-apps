import React from "react";
import { StyleSheet, View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import ProfileImage from "../atoms/ProfileImage";
import OverlayGradient from "../atoms/OverlayGradient";
import StoryProgressBar from "./StoryProgressBar";

interface Props {
    images: string[];
    activeIndex: number;
    progress: SharedValue<number>;
    children?: React.ReactNode; 
}

const SwipeableImage: React.FC<Props> = ({ images, activeIndex, progress, children }) => {
    const safeIndex = Math.max(0, Math.min(activeIndex, images.length - 1));

    return (
        <View style={styles.container}>
            <ProfileImage uri={images[safeIndex]} />
            <StoryProgressBar count={images.length} activeIndex={activeIndex} progress={progress} />
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
