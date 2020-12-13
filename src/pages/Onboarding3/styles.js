import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Colors from "../../styles/colors";

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

  back: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 90,
  },
  titulo: {
    lineHeight: 20,
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  subTitulo: {
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 24,
    marginLeft: 10,
    marginRight: 10,
    color: "#5E5E5E",
  },
  cadastrar: {
    marginTop: "20%",
    marginBottom: 32,
  },
  botao: {
    backgroundColor: "#F7931E",
    width: 300,
    justifyContent: "center",
    marginTop: "80%",
  },
  barsContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16
  }
});
