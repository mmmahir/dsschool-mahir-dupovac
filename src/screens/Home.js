import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

const Home = ({navigation}) => {
    return(
        <View style={style.conainer}>
            <Text>Welcome to home screen</Text>
            <Button title="Go to abaout" onPress={() => navigation.navigate("Abaout")}/>
            <Button title="Go to contact" onPress={() => navigation.navigate("Contact")}/>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()}/>
        </View>
    )
}

const style= StyleSheet.create({
    conainer:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default Home;