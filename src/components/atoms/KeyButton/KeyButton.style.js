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
    borderRadius: 14,
  },
  button__text: {
    fontFamily: fonts.rubikBold,
    fontSize: 18,
    color: colors.fonts._600,
  },
});