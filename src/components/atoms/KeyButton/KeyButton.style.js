import { Dimensions, StyleSheet } from "react-native";

import { colors, fonts } from '../../../@common/theme/theme';

const { height } = Dimensions.get("screen")

export const style = StyleSheet.create({
  button: {
    width: '22%',
    height: height * 0.10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  }, 
  button__default: {
  },
  button__primary: {
    backgroundColor: 'white',
    borderRadius: 14,
    elevation: 0.6
  },
  button__primaryLarge: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    width: '44%',
  },
  button__secondary: {
    backgroundColor: 'white',
    borderRadius: 14,
    elevation: 0.6
  },
  button__text: {
    fontFamily: fonts.rubikBold,
    fontSize: 18,
    color: colors.black._600,
  },
  button__text_primaryLarge: {
    fontFamily: fonts.rubikBold,
    fontSize: 24,
    color: 'white',
  },
  button__text_primary: {
    fontSize: 20,
    color: colors.primary,
  },
  button__text_secondary: {
    fontSize: 20,
    color: colors.secondary,
  },
});