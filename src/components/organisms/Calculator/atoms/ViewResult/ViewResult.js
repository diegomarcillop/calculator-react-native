import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getColors } from '../../../../../@common/theme/theme';
import { style } from './ViewResult.style';

export const ViewResult = () => {

  const { theme, } = useSelector(state => state.theme);
  const { operation, total } = useSelector(state => state.calculator);

  return (
    <View style={style.viewResult}>
      <Text style={{ ...style.viewResult__operation, color: getColors(theme).fonts._600 }}>{operation}</Text>
      <Text style={{ ...style.viewResult__textResult, color: getColors(theme).fonts._600 }}>{total}</Text>
    </View>
  )
};
