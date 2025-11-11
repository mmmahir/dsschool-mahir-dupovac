import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Abaout from "../screens/Abaout";
import Contact from "../screens/Contact";

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

export {MainStackNavigator, AboutStackNavigator};