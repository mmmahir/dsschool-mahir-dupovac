import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import data from "../data/icons.json"
import Icon from '../components/Icon';
import iconSet from '@expo/vector-icons/build/Fontisto';




export default class IconHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
        icons:[],
    };
  }
    componentDidMount() {
        this.setState ({
            icons: data,
        });
    }

  render() {
    return (
      <View style={styles.container}>
            {this.state.icons.map((screen) => (
                <Icon name={screen.name} iconText={screen.text} color={screen.color} size={screen.size} ></Icon>
            ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:"row",
        Width:"100%",
        justifyContent:"space-between",
        margin:20,
        flexWrap:"wrap"
    },
});
