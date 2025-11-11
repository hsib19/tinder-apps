import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { GestureDetector } from "react-native-gesture-handler";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { useSwipeCard } from "../../hooks/useSwipeCard";
import theme from "../../theme";
import CardActionBar from "./CardActionBar";
import SwipeableImage from "../molecules/SwipeableImage";
import { Profile } from "../../types/profile";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface Props {
    profile: Profile;
    onSwipeLeft: (id: string) => void;
    onSwipeRight: (id: string) => void;
    onRewind: () => void;
    onSwipeUp: (id: string) => void;
    onSwipeDown: (id: string) => void;
    isTopCard?: boolean; 
    orientation?: "horizontal" | "vertical";
}

const SwipeStoryCard: React.FC<Props> = ({
    profile,
    onSwipeLeft,
    onSwipeRight,
    onRewind,
    onSwipeUp,
    onSwipeDown,
    isTopCard = true,
    orientation = "horizontal",
}) => {

    const {
        activeIndex,
        progress,
        animatedStyle,
        panGesture,
        rewind,
        swipeLeft,
        swipeRight,
        swipeUp,    
        swipeDown,  
    } = useSwipeCard({
        id: profile.id,
        images: profile.images,
        onSwipeLeft,
        onSwipeRight,
        onSwipeUp,       
        onSwipeDown,     
        onRewind,
        isTopCard,
        orientation,     
    });

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.cardWrapper, animatedStyle]}>
                <View style={styles.card}>
                    {/* <View style={styles.tapOverlay}>
                    <GestureDetector gesture={tapLeft}>
                        <View hitSlop={{ right: SCREEN_WIDTH / 2 }} style={styles.leftTapZone} />
                    </GestureDetector>
                    <GestureDetector gesture={tapRight}>
                        <View hitSlop={{ left: SCREEN_WIDTH / 2 }} style={styles.rightTapZone} />
                    </GestureDetector>
                </View> */}

                    <SwipeableImage
                        images={profile.images}
                        activeIndex={activeIndex}
                        progress={progress}
                    >
                        <View style={styles.info}>
                            <Text style={styles.name}>{`${profile.name}, ${profile.age}`}</Text>
                            <View style={styles.metaRow}>
                                <FontAwesome6 name="location-dot" iconStyle="solid" size={14} color="#eee" style={styles.icon} />
                                <Text style={styles.meta}>Jakarta</Text>
                            </View>
                        </View>
                    </SwipeableImage>
            </View>
                <CardActionBar
                    onPress={(action) => {
                        if (action === "rewind") rewind();

                        if (orientation === "horizontal") {
                            if (action === "like") swipeRight();
                            if (action === "dislike") swipeLeft(); 
                        } else {
                            if (action === "like") swipeUp();
                            if (action === "dislike") swipeDown();
                            if (action === "superlike") swipeUp(); 
                            if (action === "boost") { } 
                        }
                    }}
                    actions={
                        orientation === "vertical"
                            ? ["dislike"] 
                            : ["rewind", "dislike", "superlike", "like", "boost"] 
                    }
                    style={styles.actionBar}
                />

                <View style={styles.bottomShadow} />

            </Animated.View>

        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    card: {
        position: "absolute",
        width: SCREEN_WIDTH,
        height: "93%",
        top: 0,
        borderRadius: theme.radius.lg,
        backgroundColor: theme.colors.surface,
        alignSelf: "center",
        overflow: "hidden",
    },
    cardWrapper: {
        height: "100%",
    },
    info: {
        position: "absolute",
        top: 25,
        left: 10,
    },
    name: {
        color: theme.colors.textInverse,
        fontSize: theme.typography.fontSize.xl,
        fontWeight: "bold",
    },
    meta: {
        color: theme.colors.grayLight,
        fontSize: theme.typography.fontSize.md,
        marginTop: 4,
    },
    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    icon: {
        marginRight: 6,
    },
    tapOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: "row",
        zIndex: 10,
    },
    leftTapZone: {
        flex: 1,
    },
    rightTapZone: {
        flex: 1,
    },
    actionBar: {
        position: "absolute",
        bottom: 5,
        left: 0,
        right: 0,
        alignItems: "center",
    },
    bottomShadow: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 20,
        height: 40,
        backgroundColor: theme.colors.overlay,
        borderRadius: theme.radius.lg,
        zIndex: -1,
        width: "100%",
    },
});

export default SwipeStoryCard;
