import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../../../../@common/theme/theme";

const { height } = Dimensions.get("screen");

export const style = StyleSheet.create({
  container: {
    height: height * 0.64,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: colors.while800,
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    paddingTop: 30,
  },
})