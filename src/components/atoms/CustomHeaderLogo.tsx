import React from "react";
import { View, Image, StyleSheet } from "react-native";
import theme from "../../theme";

const CustomHeaderLogo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/logo/tinder_logo_text.png")} 
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.surface,
    },
    logo: {
        width: 120,
        height: 40,
    },
});

export default CustomHeaderLogo;
