import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageAtom from "../atoms/ImageAtom";

interface OpponentCardProps {
    name: string;
    age: number;
    image: string;
    location: { city: string; country: string };
}

const OpponentCard: React.FC<OpponentCardProps> = ({ name, age, image, location }) => {
    return (
        <View style={styles.card}>
            <ImageAtom
                source={{ uri: image }}
                width="full"
                height={300}
                borderRadius="lg"
                overlay
                overlayOpacity={0.25}
            >
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>
                        {name}, {age}
                    </Text>
                    <Text style={styles.location}>
                        {location.city}, {location.country}
                    </Text>
                </View>
            </ImageAtom>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        borderRadius: 16,
        overflow: "hidden",
    },
    infoContainer: {
        position: "absolute",
        bottom: 16,
        left: 16,
    },
    name: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    location: {
        color: "#eee",
        fontSize: 14,
    },
});

export default OpponentCard;
