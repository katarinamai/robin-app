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
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: "center",
  },
  titulo: {
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 22,
  },
  subTitulo: {
    lineHeight: 22,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 32,
    marginLeft: 10,
    marginRight: 10,
    color: "#5E5E5E",
  },
  barsContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16
  }
});
