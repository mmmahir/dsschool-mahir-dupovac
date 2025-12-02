import React, { Component } from 'react';
import { View, Text , StyleSheet , FlatList,TouchableOpacity} from 'react-native';
import data from "../data/products.json"
import { ScrollView } from 'react-native-gesture-handler';
import Item from "../components/Item"

class IOS extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products : [],
        favorites:[],
    };
  }

  componentDidMount () {
    this.setState({
        products : data,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.desc}>IOS Products</Text>
            <FlatList
              data={this.state.products.ios}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                  <TouchableOpacity onPress={() => this.state.favorites.push(item)}>Add to favorites</TouchableOpacity>
                </View>
              )}
            />
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(Favorites,[this.state.favorites])}>
              Go to favorites
            </TouchableOpacity>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    
});

export default IOS;
