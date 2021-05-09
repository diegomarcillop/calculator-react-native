import React, { useState } from 'react';
import { View } from 'react-native';

import { KeyPad } from '../KeyPad/KeyPad';
import { getColors } from '../../../@common/theme/theme';
import { style } from './Calculator.style';
import { ViewResult } from './atoms/ViewResult/ViewResult';

export const Calculator = () => {

  const [operation, setOperation] = useState("");

  const hadleOperation = (itemKey) => {
    if (itemKey === 'AC') {
      setOperation("");
      return;
    };

    if (itemKey === 'CLEAN') {
      setOperation(operation.slice(0, -1));
      return;
    };

    if (Number.isInteger(itemKey)) {
      setOperation(operation + itemKey);
      return;
    }

    if (itemKey !== operation.charAt(operation.length - 1)) {
      setOperation(operation + itemKey);
      return;
    }
  };

  return (
    <View style={{ ...style.container__calculator, backgroundColor: getColors().background }}>
      <ViewResult operation={operation} />
      <KeyPad hadleOperation={hadleOperation} setOperation={setOperation} />
    </View>
  )
}
