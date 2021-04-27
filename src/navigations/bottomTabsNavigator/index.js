import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {colors} from '../../configs/index'

import HomeScreen from '../../screens/HomeScreen/index';
import SearchScreen from '../../screens/SearchScreen/index';
import ProfilScreen from '../../screens/ProfilScreen/index';
import {MyStack} from '../stackNavigator/index';
import Photo_VideoScreen from '../../screens/Photo_VideoScreen/index';
import DiscussionScreen from '../../screens/DiscussionScreen/index';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: colors.vert,
            inactiveTintColor: 'black'
        }}
    >
      <Tab.Screen 
        name="Acceuil"
        component={MyStack}
        options={{
          tabBarIcon:({focused}) => ( focused
            ? <Ionicons name="home-sharp" size={30} color={colors.vert} />
            : <Ionicons name="home-outline" size={30} color='black' />)
          }}
      />

      <Tab.Screen
        name="Photo/Video"
        component={Photo_VideoScreen}
        options={{
          tabBarIcon:({focused}) => ( focused 
            ? <Ionicons name="camera" size={30} color={colors.vert} /> 
            : <Ionicons name="camera-outline" size={30} color='black' />)
          }}
      />

      <Tab.Screen
        name="Discussions"
        component={DiscussionScreen}
        options={{
          tabBarIcon:({focused}) => ( focused 
          ? <Ionicons name="chatbubbles" size={30} color={colors.vert} /> 
          : <Ionicons name="chatbubbles-outline" size={30} color='black' />)
          }}
      />
      
    </Tab.Navigator>
  );
}