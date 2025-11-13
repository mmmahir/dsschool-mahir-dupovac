import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Contact from "../screens/Contact";
import React from "react";
import data from "../data/Screens.json"
import { View, FlatList} from "react-native";
import Contact from "../screens/Contact";
import Profile from "../screens/Profile";
import { AboutStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

class DrawerNavigator2 extends React.Component {
    constructor(){
        super();
        this.state = {
            screens:[],
        };
    }
    componentDidMount() {
        this.setState ({
            countries: data,
        });
    }
    render() {

        return(
            <View>
            <Drawer.Navigator screenOptions={{
            drawerActiveTintColor:"#FFF",
            drawerActiveBackgroundColor:"#FF2233",
            drawerStyle:{
                width:250,
            },
        
            }}>
                {this.state.screens.map((screen) => (
                    
                <Drawer.Screen name={screen.name} component={screen.component} ptions={{
                    drawerIcon:() => ( 
                <MaterialCommunityIcons name={screen.icon} size={26} color={"#000"}/> )}} />

                
                
                ))}
                
            </Drawer.Navigator>

                
            </View>

        );
    };
};


export default DrawerNavigator2;