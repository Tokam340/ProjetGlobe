import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../configs/index'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>

            <Image style={styles.logo} source={require('../../assets/logo_globe.png')} />

            <View style={styles.right}>

                <TouchableOpacity>
                    <Ionicons name="search-circle-outline" size={32} color='black' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                    <Image style={styles.icon} source={require('../../assets/user.png')} />
                </TouchableOpacity>
            </View>

        </View>

      </View>
    );
  }
}

const styles =StyleSheet.create({
    container: {
        backgroundColor: colors.blanc,
        paddingVertical: 5,
        paddingHorizontal: 10
    },

    top: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        width: 35,
        height: 43
    },

    icon: {
        width: 30,
        height: 30,
        marginLeft: 15
    },

    right: {
        flexDirection: 'row',
        alignItems: 'center'
    }

    
})

export default Header;
