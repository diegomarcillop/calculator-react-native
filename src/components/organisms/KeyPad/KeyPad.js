import React from 'react';
import { View } from 'react-native';

import { KeyButton } from '../../atoms/KeyButton/KeyButton';
import { getColors } from '../../../@common/theme/theme';
import { style } from './KeyPad.style';

export const KeyPad = ({ hadleOperation }) => {

  const keys = [
    [
      { value: 'AC', button: 'primary', },
      { value: '%', button: 'primary', icon: 'percentage', color: getColors().primary },
      { value: 'x', button: 'primary', icon: 'times', color: getColors().primary },
      { value: 'CLEAN', button: 'primary', icon: 'backspace' },
    ],
    [
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: '/', button: 'secondary', icon: 'divide', color: getColors().secondary },
    ],
    [
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: '+', button: 'secondary', icon: 'plus', color: getColors().secondary }
    ],
    [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: '-', button: 'secondary', icon: 'minus', color: getColors().secondary },
    ],
    [
      { value: 0 },
      { value: '00' },
      { value: '=', button: 'primaryLarge' }
    ]
  ];

  return (
    <View style={{ ...style.container, backgroundColor: getColors().button }}>
      {keys.map((item) =>
        item.map((row, index) => (
          <KeyButton
            key={index}
            icon={row.icon}
            title={row.value}
            type={row.button}
            onPress={() => hadleOperation(row.value)}
          />
        ))
      )}
    </View>
  )
}
