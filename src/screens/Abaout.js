import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

const Abaout = ({navigation}) => {
    return(
        <View style={style.conainer}>
            <Text>Welcome to Abaout screen</Text>
            <Button title="Go to home" onPress={() => navigation.goBack()}/>
            
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

export default Abaout;