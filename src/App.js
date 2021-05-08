import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { Public } from './scenes/Public/Public';
import store from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Public />
      </NavigationContainer>
    </Provider>
  )
};