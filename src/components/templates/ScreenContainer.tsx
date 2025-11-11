import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import theme from "../../theme";

interface ScreenContainerProps {
    children: ReactNode;
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.safe}>
                <View style={styles.container}>{children}</View>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default ScreenContainer;

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.surface },
    container: { flex: 1, paddingHorizontal: theme.spacing.md },
});
