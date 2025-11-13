import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Contact from "../screens/Contact";
import React from "react";
import data from "../data/Screens.json"
import { View, FlatList} from "react-native";

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

            <FlatList
                data={this.state.screens}
                keyExtractor={screens => screens.id}
                renderItem={({item}) => (
                    <Drawer.Screen name={item.name} component={item.component} options={{
                    drawerIcon:() => ( 
                <MaterialCommunityIcons name={item.icon} size={26} color={"#000"}/>
            ),
            }}/>
                )}
                />

                
            </View>

        );
    };
};


export default DrawerNavigator2;