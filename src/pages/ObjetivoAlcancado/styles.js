import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Colors from "../../styles/colors";
export { Colors };

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.SECOND_BACKGROUND,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
  },
  parabens: {
    color: "#F7931E",
    fontSize: 36,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    marginVertical: 32,
  },
  cashTitle: {
    fontSize: 18,
  },
  cashText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 24,
    marginTop: 16
  },
  textContent: {
    fontSize: 16,
    alignItems: "center",
    marginBottom: 32,
  },
  textSubContent: {
    marginTop: 32,
    alignItems: "center",
  },
});
