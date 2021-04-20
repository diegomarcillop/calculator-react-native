import React from 'react';
import { View } from 'react-native';

import { KeyPad } from './atoms/KeyPad/KeyPad';
import { style } from './Calculator.style';

export const Calculator = () => {
  return (
    <View style={style.container__calculator}>
      <View/>
      <KeyPad/>
    </View>
  )
}
