import React from 'react';
import { View } from 'react-native';

import { KeyPad } from '../KeyPad/KeyPad';
import { getColors } from '../../../@common/theme/theme';
import { style } from './Calculator.style';
import { ViewResult } from './atoms/ViewResult/ViewResult';

export const Calculator = () => {

  return (
    <View style={{ ...style.container__calculator, backgroundColor: getColors().background }}>
      <ViewResult/>
      <KeyPad />
    </View>
  )
}
