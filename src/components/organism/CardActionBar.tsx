import React from "react";
import { View, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { colors, radius } from "../../theme";

type IconName = React.ComponentProps<typeof FontAwesome6>["name"];

interface ActionButton {
    icon: IconName;
    color: string;
    background: string;
    action: string;
}

interface Props {
    onPress?: (action: string) => void;
    style?: ViewStyle;
}

const CardActionBar: React.FC<Props> = ({ onPress, style }) => {
    const buttons: ActionButton[] = [
        { icon: "rotate-left", color: colors.grayDark, background: colors.surface, action: "rewind" },
        { icon: "xmark", color: colors.error, background: colors.surface, action: "dislike" },
        { icon: "star", color: colors.primary, background: colors.surface, action: "superlike" },
        { icon: "heart", color: colors.success, background: colors.surface, action: "like" },
        { icon: "bolt", color: colors.accent, background: colors.surface, action: "boost" },
    ];

    return (
        <View style={[styles.container, style]}>
            {buttons.map((btn, index) => {
                const isLarge = index === 1 || index === 3;
                const buttonStyle = isLarge ? styles.largeButton : styles.button;
                const iconSize = isLarge ? 30 : 22;

                return (
                    <TouchableOpacity
                        key={btn.action}
                        onPress={() => onPress?.(btn.action)}
                        style={[buttonStyle, { backgroundColor: btn.background }]}
                        activeOpacity={0.8}
                    >
                        <FontAwesome6 name={btn.icon} size={iconSize} color={btn.color} iconStyle="solid" />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: 10,
        gap: 5,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: radius.round,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surface,
        elevation: 4,
    },
    largeButton: {
        width: 66,
        height: 66,
        borderRadius: radius.round,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surface,
        elevation: 6,
    },
});

export default CardActionBar;
