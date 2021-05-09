import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { KeyButton } from '../../atoms/KeyButton/KeyButton';
import { getColors } from '../../../@common/theme/theme';
import { style } from './KeyPad.style';
import { calculator } from '../../../services/Calculator/CalculatorActions';

export const KeyPad = () => {

  const dispatch = useDispatch();

  const keys = [
    [
      { value: 'AC', button: 'primary', },
      { value: '%', button: 'primary', icon: 'percentage', color: getColors().primary },
      { value: '*', button: 'primary', icon: 'times', color: getColors().primary },
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

  const hadleOperation = (value) => {
    dispatch(calculator.setOperation(value));
  };

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
