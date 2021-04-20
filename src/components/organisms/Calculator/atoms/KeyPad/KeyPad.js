import React from 'react'
import { View } from 'react-native'

import { KeyButton } from '../../../../atoms/KeyButton/KeyButton';
import { style } from './KeyPad.style';

export const KeyPad = () => {

  const numbers = [
    { key: 'AC', type: 'primary' },
    { key: '%', type: 'primary' },
    { key: 'X', type: 'primary' },
    { key: 'XX' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '%', type: 'secondary' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '+', type: 'secondary' },
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '-', type: 'secondary' },
    { key: '0' },
    { key: ',' },
    { key: '=', type: 'primary__large' },
  ];

  return (
    <View style={style.container}>
      {numbers.map((item, index) => <KeyButton key={index} title={item.key} type={item.type} />)}
    </View>
  )
}
