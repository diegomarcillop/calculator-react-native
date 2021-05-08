import React from 'react'
import { View } from 'react-native'

import { KeyButton } from '../../../../atoms/KeyButton/KeyButton';
import { getColors } from '../../../../../@common/theme/theme';
import { style } from './KeyPad.style';

export const KeyPad = () => {

  const numbers = [
    { key: 'AC', type: 'primary' },
    { key: '%', type: 'primary', icon: 'percentage' },
    { key: '*', type: 'primary', icon: 'times' },
    { key: 'clean', type: 'danger', icon: 'backspace' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '/', type: 'secondary', icon: 'divide' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '+', type: 'secondary', icon: 'plus' },
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '-', type: 'secondary', icon: 'minus' },
    { key: '0' },
    { key: ',' },
    { key: '=', type: 'primaryLarge' },
  ];

  return (
    <View style={{ ...style.container, backgroundColor: getColors().button }}>
      {numbers.map((item, index) => 
        <KeyButton key={index} icon={item.icon} title={item.key} type={item.type} />
      )}
    </View>
  )
}
