import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { style } from './KeyButton.style';

export const KeyButton = ({title, type = 'default', ...props}) => {
  return (
    <TouchableOpacity 
      style={{...style.button, ...style[`button__${type}`]}} {...props}
    >
      <Text style={{...style.button__text, ...style[`button__text_${type}`]}}>{title}</Text>
    </TouchableOpacity>
  )
}

KeyButton.prototype = {
  title: PropTypes.string,
  type: PropTypes.type,
}