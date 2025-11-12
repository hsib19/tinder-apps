import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#fff' },
    text: { color: "red", fontSize: 16, textAlign: "center" },
});

export default ErrorMessage;
