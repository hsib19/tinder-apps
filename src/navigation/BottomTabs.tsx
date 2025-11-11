import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

import MainScreen from "../screens/Main/MainScreen";
import LikeOpponentsScreen from "../screens/LikeOpponents/LikeOpponentsScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import { colors } from "../theme";
import CustomHeaderLogo from "../components/atoms/CustomHeaderLogo";

const Tab = createBottomTabNavigator();

type IconName = React.ComponentProps<typeof FontAwesome6>["name"];

const MyTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                paddingBottom: 13,
                paddingTop: 15,
                height: 65,
                borderTopWidth: 0,
                justifyContent: "space-around",
            }}
        >
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                let iconName: IconName;
                switch (route.name) {
                    case "Main":
                        iconName = "fire";
                        break;
                    case "LikeOpponents":
                        iconName = "heart";
                        break;
                    case "Chat":
                        iconName = "comments";
                        break;
                    case "Profile":
                        iconName = "user";
                        break;
                    case "Settings":
                        iconName = "gear";
                        break;
                    default:
                        iconName = "circle";
                }

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={{
                            flex: 1,
                            alignItems: "center",
                        }}
                    >
                        <FontAwesome6
                            name={iconName}
                            size={28}
                            color={isFocused ? colors.primary : "gray"}
                            iconStyle="solid"
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const BottomTabs = () => {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} screenOptions={{
            header: () => <CustomHeaderLogo />,
        }} >
            <Tab.Screen name="Main" component={MainScreen} />
            <Tab.Screen name="LikeOpponents" component={LikeOpponentsScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
