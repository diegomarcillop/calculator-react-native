import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Home/Home';

const Stack = createStackNavigator();

export const Public = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}
