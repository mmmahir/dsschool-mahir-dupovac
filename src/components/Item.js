import React from 'react';
import { Text, View,StyleSheet ,Image} from 'react-native';


const componentName = ({item}) => (
    <View>
        <View style={styles.cardContainer}>
            <Image source={{}} resizeMode="cover" style={styles.img} />
        </View>
        <View style={styles.textContainer}> 
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Text>{item.rating}/5</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    cardContainer:{
        width:"100%",
        height:130,
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:8,
        marginBottom:16
    },
    img:{
        width:100,
        height:"90%",
        resizeMode:"cover",
        borderRadius:8,
        marginTop:5
    },
    textContainer:{
        paddingHorizontal:10,
        marginVertical:10,
        width:"70%"
    },
    name:{
        fontWeight:"bold",
        fontSize:16
    },
    category:{
        fontSize:12,
        color:"#22d4ff"
    },
    desc:{
        fontStyle:"italic"
    },
    price:{
        fontWeight:"bold",
        marginTop:5,
        backgroundColor:"#"
    }
});

export default componentName;
