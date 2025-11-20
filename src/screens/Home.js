import React from "react";
import { View,Text,StyleSheet,Button,Image } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/Icon";

const Home = ({navigation}) => {
    return(
        <View style={style.conainer}>
            <View style={style.sliderContainer}>
                <Swiper
                    autoplay={true}
                    activeDotColor="#22D4FF"
                    autoplayTimeout={5}
                >
                    <View style={style.item}>
                        <Image source={require("../../assets/banner1.jpg")} resizeMode="vover" style={style.imgItem} />
                    </View>
                    <View style={style.item}>
                        <Image source={require("../../assets/banner2.jpg")} resizeMode="vover" style={style.imgItem} />
                    </View>
                    <View style={style.item}>
                        <Image source={require("../../assets/banner3.jpg")} resizeMode="vover" style={style.imgItem} />
                    </View>
                </Swiper>
            </View>


            <View style={style.sliderContainer}>
                <Swiper
                    autoplay={true}
                    activeDotColor="#ff222dff"
                    autoplayTimeout={3}
                    dotStyle={{
                        borderRadius:0,
                        width:5,
                        height:5
                    }}


                    activeDotStyle={{
                        borderRadius:0,
                        width:10,
                        height:10
                    }}
                >
                    <View style={style.item}>
                        <View style={style.comp1}>
                            <Text>Slide 1</Text>
                        </View>
                    </View>
                    <View style={style.item}>
                        <View style={style.comp2}>
                            <Text>Slide 2</Text>
                        </View>
                    </View>
                    <View style={style.item}>
                        <View style={style.comp3}>
                            <Text>Slide 3</Text>
                        </View>
                    </View>
                </Swiper>
            </View>




            <View style={style.iconContainer}>
                <Icon name="cellphone" iconText="Iphone" color="#3ff" size={27}></Icon>
                <Icon name="android" iconText="Android" color="#3ff" size={27}></Icon>
                <Icon name="laptop" iconText="Laptop" color="#3ff" size={27}></Icon>
            </View>
            <View style={style.iconContainer}>
                <Icon name="tablet" iconText="Tablet" color="#3ff" size={27}></Icon>
                <Icon name="mouse" iconText="Mouse" color="#3ff" size={27}></Icon>
                <Icon name="keyboard-outline" iconText="Keyboard" color="#3ff" size={27}></Icon>
            </View>
        </View>
    )
}

const style= StyleSheet.create({
    conainer:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    sliderContainer:{
        width:"90%",
        height:200,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        borderRadius:8
    },
    imgItem:{
        width:"100%",
        height:"100%",
        borderRadius:8
    },
    item:{
        flex:1,
        justifyContent:"center"
    },
    comp1:{
        width:"100%",
        height:"100$",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#c00"
    },
    comp2:{
        width:"100%",
        height:"100$",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#0c0"
    },
    comp3:{
        width:"100%",
        height:"100$",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#00c"
    },
    iconContainer:{
        width:"90%",
        alignSelf:"center",
        marginTop:30,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})

export default Home;