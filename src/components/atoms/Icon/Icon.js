import React from 'react'
import { Image } from 'react-native';

export const Icon = ({name, ...props}) => {

  const selectPath = {
    clean: require('../../../assets/icons/clean.png'),
    multiply: require('../../../assets/icons/multiply.png'),
    percentage: require('../../../assets/icons/percentage.png'),
  };

  return <Image source={selectPath[name]} {...props}/>
}
