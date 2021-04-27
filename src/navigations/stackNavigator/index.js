import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/index';
import ProfilScreen from '../../screens/ProfilScreen/index';
import Header from '../../components/Header/index';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        header: ({navigation}) => (
          <Header navigation={navigation} />
        )
        }} />
      <Stack.Screen name="Profil" component={ProfilScreen} />
    </Stack.Navigator>
  );
}