import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Contact from "../screens/Contact";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor:"#FFF",
            drawerActiveBackgroundColor:"#FF2233",
            drawerStyle:{
                width:250,
            },
        
        }}>
            <Drawer.Screen name="Home" component={BottomTabNavigator} options={{
                drawerIcon:(focused) => ( 
                <MaterialCommunityIcons name={focused ? "home" : "home-outline"} size={26} color={"#000"}/>
            ),
            }}
            />
            <Drawer.Screen name="About" component={AboutStackNavigator} options={{
                drawerIcon:() => ( 
                <MaterialCommunityIcons name="video-stabilization" size={26} color={"#000"}/>
            ),
            }}/>
            <Drawer.Screen name="Contact" component={Contact} options={{
                drawerIcon:() => ( 
                <MaterialCommunityIcons name="album" size={26} color={"#000"}/>
            ),
            }}/>
            <Drawer.Screen name="Profile" component={Profile} options={{
                drawerIcon:() => ( 
                <MaterialCommunityIcons name="face-man-profile" size={26} color={"#000"}/>
            ),
            }}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;