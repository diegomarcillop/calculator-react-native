import React from 'react';
import { Text, View } from 'react-native';

import { Calculator } from '../../../components/organisms/Calculator/Calculator';

export const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Calculator/> 
    </View>
  )
}
