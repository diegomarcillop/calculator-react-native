import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { Home } from './Home/Home';
import { theme as themeActions } from '../../services/Theme/ThemeActions';

const Stack = createStackNavigator();

export const Public = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(themeActions.getTheme());
  }, []);

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}
