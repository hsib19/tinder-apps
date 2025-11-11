import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

interface Props {
    index: number;
    activeIndex: number;
    progress: SharedValue<number>;
}

const ProgressBarSegment: React.FC<Props> = ({ index, activeIndex, progress }) => {
    const animatedWidth = useAnimatedStyle(() => ({
        width: `${progress.value * 100}%`,
    }));

    if (index === activeIndex) {
        return <Animated.View style={[styles.fill, animatedWidth]} />;
    }

    return <View style={[styles.fill, index < activeIndex ? styles.full : styles.empty]} />;
};

const styles = StyleSheet.create({
    fill: {
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: 2,
    },
    full: {
        width: "100%",
    },
    empty: {
        width: "0%",
    },
});

export default ProgressBarSegment;
