import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Colors from "../../styles/colors";
export { Colors };

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: Colors.SECOND_BACKGROUND,
    alignItems: "center",
  },
  subTitle: {
    alignSelf: "flex-start",
    color: "#a8a8a8",
  },
  cashback: {
    fontSize: 18,
    color: "#F7931E",
    marginVertical: 32,
    textTransform: "uppercase",
    fontFamily: "Roboto_400Regular"
  },
  input: {}
});
