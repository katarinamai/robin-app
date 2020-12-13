import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Colors from "../../styles/colors";

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.SECOND_BACKGROUND,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.SECOND_BACKGROUND,
    alignItems: "center",
  },
  barsContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 32
  }
});
