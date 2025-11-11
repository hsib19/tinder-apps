import React from "react";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface Props {
    children?: React.ReactNode;
    height?: number;
}

const OverlayGradient: React.FC<Props> = ({ children, height = 300 }) => {
    return (
        <LinearGradient
            colors={[
                "transparent",
                "rgba(0,0,0,0.6)",
                "rgba(0,0,0,0.85)",
                "rgba(0,0,0,0.95)",
                "rgba(0,0,0,1)",
            ]}
            locations={[0, 0.3, 0.6, 0.8, 1]}
            style={[styles.gradient, { height }]}
        >
            <View style={styles.content}>{children}</View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "flex-end",
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
    content: {
        flexDirection: "column",
    },
});

export default OverlayGradient;
