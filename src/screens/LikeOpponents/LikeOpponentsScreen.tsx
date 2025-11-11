import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LikeOpponentsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liked Opponents</Text>
        </View>
    );
};

export default LikeOpponentsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
    },
});
