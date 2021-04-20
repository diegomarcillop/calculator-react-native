import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from '../Icon/Icon';
import { style } from './KeyButton.style';

export const KeyButton = ({ title, type = 'default', icon, ...props }) => {
  return (
    <TouchableOpacity
      style={{ ...style.button, ...style[`button__${type}`] }} {...props}
    >
      {icon ?
        <Icon name={icon} />
        :
        <Text style={{ ...style.button__text, ...style[`button__text_${type}`] }}>{title}</Text>
      }
    </TouchableOpacity>
  )
}

KeyButton.prototype = {
  title: PropTypes.string,
  type: PropTypes.type,
  icon: PropTypes.string,
}