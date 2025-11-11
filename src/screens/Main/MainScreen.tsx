import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MainScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Main Screen</Text>
        </View>
    );
};

export default MainScreen;

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
