import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {data} from '../../api/index';
import Posts from '../../components/Posts/index';

class ProfilScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{padding: 10, backgroundColor: '#fff', flex: 1}}>
        <View>
          <Image style={{width: '100%', height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10}} source={{uri: 'https://orgaphenix.com/wp-content/uploads/2020/01/secrets-photo-profil-linkedin.jpeg'}} />
          <View>
            <Image style={{width: 150, height: 150, borderRadius: 100, position: 'absolute', alignSelf: 'center', borderWidth: 5, borderColor: '#fff', marginTop: -70}} source={{uri: 'https://netpasse.com/wp-content/uploads/2020/12/jolie-fille-prends-selfie.jpg'}} />

            <TouchableOpacity style={{position: 'absolute', alignSelf: 'flex-end', bottom: 0, padding: 10}}>
              <Ionicons name="camera-outline" size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={{position: 'absolute', alignSelf: 'center', marginTop: 52, paddingVertical: 8, paddingHorizontal: 10, backgroundColor: '#b2b2b2', borderRadius: 50}}>
              <Ionicons name="camera-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={{alignSelf: 'center', marginTop: 110, fontSize: 20, fontWeight: 'bold'}}>Leonna Bruce</Text>
        </View>

        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Posts item={item} />
            )}
          />

      </ScrollView>
    );
  }
}

export default ProfilScreen;
