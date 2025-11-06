import React from "react";
import { View,Text,StyleSheet,Button,FlatList } from "react-native";

const Contact = ({navigation}) => {
    return(
        <View style={style.conainer}>
            <Text>Welcome to Contact screen</Text>
            <FlatList/>
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

export default Contact;