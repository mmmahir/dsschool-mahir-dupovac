import React, { Component } from 'react';
import { View, Text , StyleSheet , FlatList,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Item from "../components/Item"

class IOS extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products : [props.favotites],
    };
  }



  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.desc}>IOS Products</Text>
            <FlatList
              data={this.state.products}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />

          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    
});

export default IOS;
