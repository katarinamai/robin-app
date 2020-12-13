import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Colors from "../../styles/colors";
export { Colors };

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
    alignItems: "center",
  },
  loading: {
    marginTop: "50%",
  },
  title: {
    marginBottom: 30,
  },
});
