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
  titulo: {
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  subTitulo: {
    textAlign: "center",
    marginTop: 20,
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
    marginTop: "70%",
  },
  barsContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16
  }
});
