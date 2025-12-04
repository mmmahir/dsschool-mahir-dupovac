import React, { Component } from 'react';
import { View, Text ,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import data from "../data/products.json"
import { ScrollView } from 'react-native-gesture-handler';
import Item from "../components/Item"
import CheckBox from '@react-native-community/checkbox';

export default class Android extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products:[],
    };
  }
  componentDidMount () {
    this.setState({
        products : data,
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.desc}>Android Products</Text>
            <Text>Show only items in stock <CheckBox onValueChange={() => this.state.products.filter(item => item.stock > 0)} /> </Text>

            <FlatList
              data={this.state.products.android}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
          </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
});
