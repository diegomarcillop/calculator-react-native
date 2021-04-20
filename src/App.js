import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Public } from './scenes/Public/Public';

export const App = () => {
  return (
    <NavigationContainer>
      <Public/>
    </NavigationContainer>
  )
};