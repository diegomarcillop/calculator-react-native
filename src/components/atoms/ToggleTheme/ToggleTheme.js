import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import { theme as ThemeActions } from '../../../services/Theme/ThemeActions';
import { getColors } from '../../../@common/theme/theme';
import { style } from './ToggleTheme.style';

export const ToggleTheme = () => {

  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  const themes = [
    {
      key: 'light',
      icon: 'sun-o',
    },
    {
      key: 'dark',
      icon: 'moon-o',
    },
  ];

  const handleSelected = (value) => {
    dispatch(ThemeActions.setTheme(value));
  };

  return (
    <View style={{ ...style.buttonToogle, backgroundColor: getColors().button }}>
      {
        themes.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={index % 2 !== 0 ? style.buttonToogle__item__divider : style.buttonToogle__item}
            onPress={() => handleSelected(item.key)}
          >
            {index % 2 !== 0 && (<View style={{ ...style.buttonToogle__line, backgroundColor: getColors().fonts._200 }} />)}
            <Icon name={item.icon} size={24} style={{ color: theme === item.key ? getColors().fonts._800 : getColors().fonts._400 }} />
          </TouchableOpacity>
        ))
      }
    </View>
  )
};
