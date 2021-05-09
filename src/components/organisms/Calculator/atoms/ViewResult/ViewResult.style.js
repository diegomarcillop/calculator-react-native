import { Dimensions, StyleSheet } from "react-native";

import { fonts } from "../../../../../@common/theme/fonts";

const { height } = Dimensions.get("screen");

export const style = StyleSheet.create({
  viewResult: {
    width: '100%',
    height: height * 0.24,
    justifyContent: 'flex-end',
    padding: 16,
  },
  viewResult__textResult: {
    fontFamily: fonts.rubikBold,
    fontSize: 40,
    alignSelf: 'flex-end'
  },
  viewResult__operation: {
    fontFamily: fonts.rubikLight,
    fontSize: 22,
    textAlign: 'right'
  },
  viewResult__operation__active: {
    fontFamily: fonts.rubikLight,
    fontSize: 30,
    alignSelf: 'flex-end'
  }
});