import React from "react";
import { View, StyleSheet } from "react-native";
import ProgressBarSegment from "../atoms/ProgressBarSegment";

interface Props {
    count: number;
    activeIndex: number;
    progress: import("react-native-reanimated").SharedValue<number>;
}

const StoryProgressBar: React.FC<Props> = ({ count, activeIndex, progress }) => {
    return (
        <View style={styles.container}>
            {Array.from({ length: count }).map((_, index) => (
                <View key={index} style={styles.track}>
                    <ProgressBarSegment index={index} activeIndex={activeIndex} progress={progress} />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        flexDirection: "row",
        gap: 4,
    },
    track: {
        flex: 1,
        height: 6,
        backgroundColor: "#333",
        borderRadius: 2,
        overflow: "hidden",
    },
});

export default StoryProgressBar;
