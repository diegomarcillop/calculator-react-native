import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

import { style } from './KeyButton.style';
import { getColors } from '../../../@common/theme/theme';

export const KeyButton = ({ title, type = 'default', icon, ...props }) => {

  const types = {
    primary: {
      button: {
        backgroundColor: getColors().background,
        elevation: 0.6,
      },
      text: {
        color: getColors().primary,
        fontSize: 20,
      }
    },
    secondary: {
      button: {
        backgroundColor: getColors().background,
        elevation: 0.6,
      },
      text: {
        color: getColors().secondary,
        fontSize: 20,
      },
    },
    default: {
      text: {
        color: getColors().fonts._600,
        fontSize: 18,
      },
    },
    primaryLarge: {
      button: {
        backgroundColor: getColors().primary,
        width: '44%',
        elevation: 0.6,
      },
      text: {
        color: 'white',
        fontSize: 30,
      },
    },
    danger: {
      button: {
        backgroundColor: getColors().background,
        elevation: 0.6,
      },
      text: {
        color: getColors().danger,
        fontSize: 20,
      },
    },
  };

  return (
    <TouchableOpacity style={{ ...style.button, ...types[type]?.button }} {...props} >
      {icon ?
        <Icon name={icon} style={{... types[type]?.text}}/>
        :
        <Text style={{ ...style.button__text, ...types[type]?.text }}>{title}</Text>
      }
    </TouchableOpacity>
  )
};

KeyButton.prototype = {
  title: PropTypes.string,
  type: PropTypes.type,
  icon: PropTypes.string,
}