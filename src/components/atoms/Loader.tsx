import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

interface LoaderProps {
    message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading..." }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#000" />
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#fff' },
    text: { marginTop: 10, fontSize: 16 },
});

export default Loader;
