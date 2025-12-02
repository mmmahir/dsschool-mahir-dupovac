import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Abaout from "../screens/Abaout";
import Contact from "../screens/Contact";
import IOS from "../screens/IOS";

const Stack = createStackNavigator();

const screenOptionsStyle = {
    headerStyle:{
        backgroundColor:"red"
    },
    headerTintColor: "white"
};

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionsStyle}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Abaout" component={Abaout} />
                <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>

    )
}
const AboutStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionsStyle}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Abaout" component={Abaout} />
                <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>

    )
}

const IosStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Ios" component={IOS} />
        </Stack.Navigator>
    )
}

export {MainStackNavigator, AboutStackNavigator,IosStackNavigator};