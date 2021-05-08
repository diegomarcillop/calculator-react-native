import React, { useEffect } from 'react';
import { View } from 'react-native';

import { Calculator } from '../../../components/organisms/Calculator/Calculator';
import { ToggleTheme } from '../../../components/atoms/ToggleTheme/ToggleTheme';
import { getColors } from '../../../@common/theme/theme';
import { style } from './Home.style';
import { useSelector } from 'react-redux';

export const Home = () => {

  const { theme } = useSelector(state => state.theme);

  return (
    <View style={{...style.container, backgroundColor: getColors(theme).background}}>
      <ToggleTheme />
      <Calculator />
    </View>
  )
}
