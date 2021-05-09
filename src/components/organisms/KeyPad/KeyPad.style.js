import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

export const style = StyleSheet.create({
  container: {
    height: height * 0.64,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    paddingTop: 30,
  },
})