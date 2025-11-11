import React from "react";
import {
    Image,
    ImageBackground,
    ImageStyle,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
    Dimensions,
} from "react-native";
import theme from "../../theme"; 

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

type SizeToken = "full" | "auto" | number | `${number}%`;
type RadiusToken = keyof typeof theme.radius | number;

interface Props {
    source: { uri: string } | number;
    width?: SizeToken;
    height?: SizeToken;
    aspectRatio?: number;
    borderRadius?: RadiusToken;
    borderWidth?: number;
    borderColor?: string;
    overlay?: boolean;
    overlayColor?: string;
    overlayOpacity?: number;
    resizeMode?: ImageStyle["resizeMode"];
    style?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    fallbackSource?: { uri: string } | number;
}

const resolveSize = (val?: SizeToken, axis: "w" | "h" = "w") => {
    if (val === undefined || val === "auto") return undefined;
    if (val === "full") return axis === "w" ? SCREEN_WIDTH : SCREEN_HEIGHT;
    if (typeof val === "string" && val.endsWith("%")) return val;
    return val;
};

const resolveRadius = (r?: RadiusToken) => {
    if (r === undefined) return undefined;
    if (typeof r === "number") return r;
    return (theme.radius as any)[r] ?? undefined;
};

const ImageAtom: React.FC<Props> = ({
    source,
    width = "full",
    height = "auto",
    aspectRatio,
    borderRadius = "md",
    borderWidth = 0,
    borderColor = "transparent",
    overlay = false,
    overlayColor,
    overlayOpacity = 0.3,
    resizeMode = "cover",
    style,
    containerStyle,
    children,
    fallbackSource,
}) => {
    const w = resolveSize(width, "w");
    const h = resolveSize(height, "h");
    const br = resolveRadius(borderRadius);

    const imageStyle: StyleProp<ImageStyle> = [
        {
            width: w,
            height: h,
            aspectRatio: aspectRatio,
            borderRadius: br,
            borderWidth,
            borderColor,
            overflow: "hidden",
        },
        style,
    ];

    const bgOverlayColor = overlayColor ?? theme.colors.overlay ?? "black";

    if (overlay) {
        return (
            <View style={[containerStyle, { borderRadius: br, overflow: "hidden" }]}>
                <ImageBackground
                    source={source}
                    style={imageStyle}
                    imageStyle={{ borderRadius: br }}
                    resizeMode={resizeMode}
                    defaultSource={fallbackSource}
                >
                    <View
                        style={[
                            styles.overlay,
                            { backgroundColor: bgOverlayColor, opacity: overlayOpacity, borderRadius: br },
                        ]}
                    />
                    {children}
                </ImageBackground>
            </View>
        );
    }

    return (
        <View style={[containerStyle, { borderRadius: br, overflow: "hidden" }]}>
            <Image
                source={source}
                style={imageStyle}
                resizeMode={resizeMode}
                defaultSource={fallbackSource}
            />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default ImageAtom;
