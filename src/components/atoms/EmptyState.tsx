import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface EmptyStateProps {
    message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = "No data available" }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#fff' },
    text: { fontSize: 16, textAlign: "center", color: "#555" },
});

export default EmptyState;
