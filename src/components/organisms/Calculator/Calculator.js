import React from 'react';
import { View } from 'react-native';

import { KeyPad } from './atoms/KeyPad/KeyPad';
import { getColors } from '../../../@common/theme/theme';
import { style } from './Calculator.style';

export const Calculator = () => {
  return (
    <View style={{...style.container__calculator, backgroundColor: getColors().background}}>
      <View/>
      <KeyPad/>
    </View>
  )
}
