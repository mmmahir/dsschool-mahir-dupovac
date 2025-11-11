import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator,AboutStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from "../screens/Profile";



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
<Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"#ff0000ff",
        tabBarInactiveTintColor:"#aaa",
        tabBarStyle:{
            backgroundColor:"#ff6347",
        },
        tabBarLabelStyle:{
            fontSize:12,
        },
        headerShown:false,
    }}> 
        <Tab.Screen name="Home" component={MainStackNavigator}
        options={{
            tabBarLabel:"Home",
            tabBarIcon:({color}) => (
                <MaterialCommunityIcons name="home" size={26} color={color} />
            ),
        }}
        />
        <Tab.Screen name="About" component={AboutStackNavigator}
        options={{
            tabBarLabel:"Abaout",
            tabBarIcon:({color}) => (
                <MaterialCommunityIcons name="video-stabilization" size={26} color={color} />
            ),
        }}
        />
        <Tab.Screen name="Profile" component={Profile}
        options={{
            tabBarLabel:"Abaout",
            tabBarIcon:({color}) => (
                <MaterialCommunityIcons name="face-man-profile" size={26} color={color} />
            ),
        }}
        />

    </Tab.Navigator>
    )
    
}

export default BottomTabNavigator;