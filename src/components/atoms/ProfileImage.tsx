import React from "react";
import { StyleSheet, View } from "react-native";
import ImageAtom from "./ImageAtom";

interface Props {
    uri: string;
}

const ProfileImage: React.FC<Props> = ({ uri }) => {
    return (
        <View style={styles.container}>
            <ImageAtom source={{ uri }} width="100%" height="100%" borderRadius={0} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
});

export default ProfileImage;
