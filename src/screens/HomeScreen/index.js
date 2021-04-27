import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import Posts from '../../components/Posts/index';

import Header from '../../components/Header/index'
import { data } from '../../api';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <>
        <StatusBar backgroundColor="transparent" />
        <View style={{flex: 1}}>
          
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Posts item={item} />
            )}
          />
          
        </View>
      </>
    );
  }
}

export default HomeScreen;
